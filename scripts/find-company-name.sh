#!/bin/bash

# Script to find all occurrences of company name "ANALYZE" or "Analyze" in the codebase
# Excludes node_modules, .git, .next, and other build directories

echo "=========================================="
echo "Company Name Usage Report"
echo "Searching for: ANALYZE and Analyze"
echo "=========================================="
echo ""

PROJECT_DIR="$(dirname "$0")/.."

# Count occurrences
echo "## Summary"
echo ""

ANALYZE_UPPER=$(grep -r "ANALYZE" "$PROJECT_DIR/src" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.md" 2>/dev/null | grep -v "node_modules" | wc -l)
ANALYZE_TITLE=$(grep -r "Analyze" "$PROJECT_DIR/src" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.md" 2>/dev/null | grep -v "node_modules" | wc -l)

echo "- ANALYZE (uppercase): $ANALYZE_UPPER occurrences"
echo "- Analyze (title case): $ANALYZE_TITLE occurrences"
echo ""

echo "## Files with ANALYZE (uppercase)"
echo ""
grep -rl "ANALYZE" "$PROJECT_DIR/src" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.md" 2>/dev/null | grep -v "node_modules" | sort

echo ""
echo "## Files with Analyze (title case)"
echo ""
grep -rl "Analyze" "$PROJECT_DIR/src" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.md" 2>/dev/null | grep -v "node_modules" | sort

echo ""
echo "## Detailed occurrences (ANALYZE - uppercase)"
echo ""
grep -rn "ANALYZE" "$PROJECT_DIR/src" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.md" 2>/dev/null | grep -v "node_modules"

echo ""
echo "## Detailed occurrences (Analyze - title case)"
echo ""
grep -rn "Analyze" "$PROJECT_DIR/src" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.md" 2>/dev/null | grep -v "node_modules"

echo ""
echo "=========================================="
echo "Report complete"
echo "=========================================="
