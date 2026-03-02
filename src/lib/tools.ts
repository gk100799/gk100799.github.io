export interface Tool {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  keywords: string[];
  icon: string;
  faqItems?: { question: string; answer: string }[];
}

export const tools: Tool[] = [
  {
    slug: "word-counter",
    name: "Word & Character Counter",
    description: "Count words, characters, sentences, and paragraphs instantly.",
    longDescription: "Free Online Word and Character Counter Tool.\n\nOur word counter is perfect for writers, students, and content creators. Features include real-time counting, sentence/paragraph analysis, and reading time estimates. Great for meeting essay requirements (typically 1,500-2,500 words for SEO) with instant feedback.",
    category: "Text Tools",
    keywords: ["word counter", "character counter", "count words online", "free word counter"],
    icon: "📝",
  },
  {
    slug: "case-converter",
    name: "Text Case Converter",
    description: "Convert text to UPPER CASE, lower case, Title Case, camelCase, and more.",
    longDescription: "Convert text between 8 case formats: UPPERCASE, lowercase, Title Case, camelCase, PascalCase, snake_case, kebab-case, and SCREAMING_SNAKE_CASE. Essential for developers managing code conventions and content creators.",
    category: "Text Tools",
    keywords: ["case converter", "camelcase converter", "text formatter", "title case"],
    icon: "🔡",
  },
  {
    slug: "json-formatter",
    name: "JSON Formatter & Validator",
    description: "Prettify, minify, and validate JSON instantly.",
    longDescription: "Format, validate, and minify JSON with error detection. Features pretty-printing, syntax highlighting, minification for production, and tree view navigation. Perfect for API developers and DevOps engineers.",
    category: "Developer Tools",
    keywords: ["json formatter", "json validator", "format json", "minify json"],
    icon: "🧩",
  },
  {
    slug: "base64",
    name: "Base64 Encoder / Decoder",
    description: "Encode text or URLs to Base64 and decode instantly.",
    longDescription: "Convert text to Base64 format or decode Base64 strings. Essential for API authentication, email encoding, data URIs, and OAuth credentials. Instant encoding and decoding with copy-to-clipboard.",
    category: "Developer Tools",
    keywords: ["base64 encode", "base64 decode", "base64 converter", "encode base64"],
    icon: "🔐",
  },
  {
    slug: "password-generator",
    name: "Strong Password Generator",
    description: "Generate secure, random passwords instantly.",
    longDescription: "Create cryptographically secure passwords with customizable length and character types. Supports uppercase, lowercase, numbers, and special symbols. Resist brute-force attacks with random generation.",
    category: "Security Tools",
    keywords: ["password generator", "strong password", "random password", "secure password"],
    icon: "🔑",
  },
  {
    slug: "age-calculator",
    name: "Age Calculator",
    description: "Calculate exact age in years, months, days, and more.",
    longDescription: "Calculate precise age from birth date with years, months, days, hours, and minutes. Shows days to next birthday and zodiac sign. Accounts for leap years and varying month lengths.",
    category: "Calculators",
    keywords: ["age calculator", "how old am i", "calculate age", "birthday calculator"],
    icon: "🎂",
  },
  {
    slug: "hex-rgb",
    name: "HEX ↔ RGB Color Converter",
    description: "Convert HEX color codes to RGB and vice versa.",
    longDescription: "Convert between HEX codes and RGB values with live color preview. Includes HSL support and CSS output format. Perfect for web designers and graphics professionals.",
    category: "Design Tools",
    keywords: ["hex to rgb", "color converter", "hex color code", "rgb color"],
    icon: "🎨",
  },
  {
    slug: "diff-checker",
    name: "Text Diff Checker",
    description: "Compare texts and highlight differences.",
    longDescription: "Compare two text versions side-by-side with line-by-line highlighting. Additions in green, deletions in red. Perfect for code review and document comparison.",
    category: "Developer Tools",
    keywords: ["diff checker", "text diff", "compare texts", "code comparison"],
    icon: "🔍",
  },
  {
    slug: "markdown-preview",
    name: "Markdown Preview",
    description: "Write Markdown with live HTML preview.",
    longDescription: "Write markdown and see rendered HTML instantly. Supports headers, lists, code blocks, tables, links, and more. Download as HTML or export as markdown.",
    category: "Developer Tools",
    keywords: ["markdown preview", "markdown editor", "markdown to html"],
    icon: "📄",
  },
  {
    slug: "url-encoder",
    name: "URL Encoder / Decoder",
    description: "Encode and decode URLs instantly.",
    longDescription: "Convert special characters to percent-encoded format. Essential for API parameters, form data, and URL manipulation. Handles query parameters and batch processing.",
    category: "Developer Tools",
    keywords: ["url encoder", "url decoder", "encode url", "percent encoding"],
    icon: "🌐",
  },
  {
    slug: "slug-generator",
    name: "URL Slug Generator",
    description: "Convert text to SEO-friendly URL slugs.",
    longDescription: "Convert any text into clean, URL-friendly slugs perfect for blog posts and product URLs. SEO-optimized with lowercase, hyphenated format. Improves keyword relevance and search rankings.",
    category: "Developer Tools",
    keywords: ["slug generator", "url slug", "seo slug", "permalink generator"],
    icon: "🔗",
  },
  {
    slug: "qr-code-generator",
    name: "QR Code Generator",
    description: "Generate QR codes from text or URLs.",
    longDescription: "Create scannable QR codes from any text, URL, or data. Download as PNG with print-ready quality. Perfect for marketing campaigns, contact sharing, and product packaging.",
    category: "Developer Tools",
    keywords: ["qr code generator", "generate qr code", "qr code maker"],
    icon: "📱",
  },
  {
    slug: "reverse-text",
    name: "Reverse Text Generator",
    description: "Reverse text instantly.",
    longDescription: "Flip text backwards character-by-character. Perfect for palindromes, creative writing, and fun text effects. Includes palindrome checking examples.",
    category: "Text Tools",
    keywords: ["reverse text", "reverse string", "palindrome checker"],
    icon: "🔄",
  },
  {
    slug: "email-validator",
    name: "Email Address Validator",
    description: "Validate email addresses instantly.",
    longDescription: "Check if email address matches valid format. Identifies common issues like missing @ symbol or invalid domain. Validates format structure and TLD.",
    category: "Utilities",
    keywords: ["email validator", "email address validator", "check email valid"],
    icon: "✉️",
  },
  {
    slug: "remove-duplicates",
    name: "Remove Duplicates",
    description: "Remove duplicate lines or words.",
    longDescription: "Remove repeated lines or words from text while preserving first occurrence and order. Shows removed count. Perfect for cleaning email lists and data.",
    category: "Text Tools",
    keywords: ["remove duplicates", "duplicate remover", "deduplicate"],
    icon: "🗑️",
  },
  {
    slug: "uuid-generator",
    name: "UUID Generator",
    description: "Generate RFC4122 UUIDs.",
    longDescription: "Create RFC4122 v4 unique identifiers for databases, APIs, and distributed systems. Generate single or batch UUIDs with one-click copy and CSV download.",
    category: "Developer Tools",
    keywords: ["uuid generator", "guid generator", "generate uuid"],
    icon: "🆔",
  },
  {
    slug: "unit-converter",
    name: "Unit Converter",
    description: "Convert length, weight, and temperature.",
    longDescription: "Instantly convert between length, weight, and temperature units. Perfect for cooking, science projects, travel, and engineering. Supports metric and imperial units.",
    category: "Calculators",
    keywords: ["unit converter", "convert units", "length converter", "temperature converter"],
    icon: "⚖️",
  },
  {
    slug: "text-hash",
    name: "Text Hash Generator",
    description: "Generate SHA-256 hashes.",
    longDescription: "Create SHA-256 cryptographic hashes from any text. One-way function creating unique 64-character hashes. Perfect for data integrity checking and security applications.",
    category: "Developer Tools",
    keywords: ["hash generator", "sha256 hash", "text hash", "checksum"],
    icon: "🔐",
  },
  {
    slug: "morse-code",
    name: "Morse Code Converter",
    description: "Convert text to Morse code.",
    longDescription: "Translate text to Morse code (dots and dashes) and decode Morse back to text. For learning, emergency communication, and radio operation. Still used in aviation and maritime.",
    category: "Developer Tools",
    keywords: ["morse code converter", "text to morse code", "morse code translator"],
    icon: "📡",
  },
];

export const categories = [...new Set(tools.map((t) => t.category))];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
