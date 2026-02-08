import NextImage, { ImageProps } from "next/image";

const SITE_URL = "https://www.tryanalyze.ai";

// Minimum dimensions to emit ImageObject schema — skip tiny logos/icons
const MIN_SCHEMA_WIDTH = 100;
const MIN_SCHEMA_HEIGHT = 100;

/**
 * Drop-in replacement for next/image that automatically injects
 * an inline ImageObject JSON-LD script alongside the rendered image.
 *
 * Small images (below MIN_SCHEMA_WIDTH/HEIGHT) are rendered normally
 * without schema to avoid polluting structured data with logos and icons.
 */
export function SchemaImage(props: ImageProps) {
  const { src, alt, width, height, ...rest } = props;

  const numWidth = typeof width === "number" ? width : parseInt(String(width), 10) || 0;
  const numHeight = typeof height === "number" ? height : parseInt(String(height), 10) || 0;

  const shouldEmitSchema =
    numWidth >= MIN_SCHEMA_WIDTH && numHeight >= MIN_SCHEMA_HEIGHT && typeof src === "string";

  // Build absolute URL for the image
  const absoluteUrl =
    typeof src === "string" && src.startsWith("/") ? `${SITE_URL}${src}` : String(src);

  const schema = shouldEmitSchema
    ? {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        url: absoluteUrl,
        contentUrl: absoluteUrl,
        ...(numWidth > 0 && { width: numWidth }),
        ...(numHeight > 0 && { height: numHeight }),
        ...(alt && { name: alt, caption: alt }),
        inLanguage: "en",
      }
    : null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <NextImage src={src} alt={alt ?? ""} width={width} height={height} {...rest} />
    </>
  );
}

export default SchemaImage;
