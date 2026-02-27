"use client";

import { useEffect } from "react";

const ALLOWED_SCRIPT_HOSTS = new Set([
  "www.googletagmanager.com",
  "www.google-analytics.com",
  "scripts.simpleanalyticscdn.com",
  "www.clarity.ms",
  "scripts.clarity.ms",
  "app.partnero.com",
  "assets.partnero.com",
  "widget.intercom.io",
  "js.intercomcdn.com",
]);

function isAllowedScriptSource(src: string): boolean {
  if (!src) return true;

  try {
    const parsed = new URL(src, window.location.origin);

    if (parsed.origin === window.location.origin) return true;
    if (parsed.protocol === "blob:" || parsed.protocol === "data:") return true;

    return ALLOWED_SCRIPT_HOSTS.has(parsed.hostname);
  } catch {
    return false;
  }
}

export function ScriptAllowlistGuard() {
  useEffect(() => {
    const nativeAppendChild = Node.prototype.appendChild;
    const nativeInsertBefore = Node.prototype.insertBefore;

    const shouldBlock = (node: Node) => {
      if (!(node instanceof HTMLScriptElement)) return false;
      const src = node.src || node.getAttribute("src") || "";

      if (isAllowedScriptSource(src)) return false;

      console.warn("[security] Blocked non-allowlisted script:", src);
      return true;
    };

    Node.prototype.appendChild = function patchedAppendChild<T extends Node>(child: T): T {
      if (shouldBlock(child)) return child;
      return nativeAppendChild.call(this, child) as T;
    };

    Node.prototype.insertBefore = function patchedInsertBefore<T extends Node>(newNode: T, referenceNode: Node | null): T {
      if (shouldBlock(newNode)) return newNode;
      return nativeInsertBefore.call(this, newNode, referenceNode) as T;
    };

    return () => {
      Node.prototype.appendChild = nativeAppendChild;
      Node.prototype.insertBefore = nativeInsertBefore;
    };
  }, []);

  return null;
}
