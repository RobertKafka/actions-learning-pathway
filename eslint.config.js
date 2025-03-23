module.exports = {
  // Extending recommended configurations for Next.js
  "extends": ["next", "next/core-web-vitals"],
  "rules": {
    // Define your custom rules here
    // Example: "semi": ["error", "always"]
  },
  // Including custom ESLint plugins
  "plugins": ["./custom_rules/"],
  "linterOptions": {
    "reportUnusedDisableDirectives": true
  }
};
