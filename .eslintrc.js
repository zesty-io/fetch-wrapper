module.exports = {
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   extends: [
      "plugin:react/recommended",
      "google",
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
   ],
   parser: "@typescript-eslint/parser",
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
   },
   plugins: ["react", "@typescript-eslint", "react-hooks", "import"],
   rules: {
      "@typescript-eslint/no-non-null-assertion": 0,
      "@typescript-eslint/no-empty-function": 0,
      "no-restricted-imports": [
         "error",
         {
            patterns: ["@mui/*/*/*", "!@mui/material/test-utils/*"],
         },
      ],
      "prefer-const": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "no-unused-vars": "error",
      "no-empty-interface": 0,
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-ignore": "off",
      "react/jsx-key": 0,
      "require-jsdoc": 0,
      "no-use-before-define": "off",
      "react/react-in-jsx-scope": "off",
      "new-cap": 0,
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", "tsx"] }],
      "@typescript-eslint/no-inferrable-types": "off",
      "no-prototype-builtins": "off",
      "guard-for-in": "off",
      "import/extensions": [
         "off",
         "ignorePackages",
         {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
         },
      ],
      "spaced-comment": [
         "error",
         "always",
         {
            line: {
               markers: ["/"],
            },
         },
      ],
   },
}
