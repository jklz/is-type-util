module.exports = {
  "extends": [
    "plugin:@typescript-eslint/recommended",
  ],
  "settings": {
    "react": {
      "version": "detect",
    },
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": './tsconfig.json',
  },
  "rules": {
    "prettier/prettier": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-member-accessibility": "off", //
    "@typescript-eslint/array-type": "off",  // existing code is already using Array<T> rather than T[]
    "@typescript-eslint/no-empty-interface": "off", //sometimes needed for react props
    "@typescript-eslint/interface-name-prefix": "off", // we want interfaces to start with "I" so it's easy to distinguish between interfaces and classes.
    "@typescript-eslint/member-delimiter-style": "off", //adds annoyance and no value.
    "@typescript-eslint/no-object-literal-type-assertion": "off", // {} as IOffsets is useful
    // replacement for @typescript-eslint/camelcase due to being removed
    "@typescript-eslint/naming-convention": [
      "warn",
      // variables are camelcase or upper case
      {
        "selector": "variable",
        "format": ["camelCase", "UPPER_CASE"],
      },
      {
        "selector": "variable",
        "format": ["camelCase", "UPPER_CASE", "PascalCase"],
        "modifiers": ["const"]
      },
      {
        "selector": "variable",
        "format": ["camelCase", "UPPER_CASE", "PascalCase", "snake_case"],
        "modifiers": ["const", "destructured"]
      },
      // boolean variables should start with prefix
      {
        "selector": "variable",
        "types": ["boolean"],
        "format": ["PascalCase"],
        "filter": {
          "regex": "(Is|Should|Has|Can|Did|Will|Does)",
          "match": false
        },
        "prefix": ["is", "should", "has", "can", "did", "will", "does"]
      },
      // functions are camelcase or PascalCase
      {
        "selector": ["variableLike"],
        "types": ["function"],
        "format": ["camelCase", "PascalCase"],
      },
      // parameter are camelcase, can be prefixed with underscore
      {
        "selector": "parameter",
        "format": ["camelCase", "PascalCase"],
        "leadingUnderscore": "allow"
      },
      // interface are PascalCase, must be prefixed with I
      {
        "selector": "interface",
        "prefix": ["I"],
        "format": ["PascalCase"],
      },
    ],
    // we have a lot of @ts-ignore
    "@typescript-eslint/ban-ts-comment": "warn",
    // warn for unused var, ignore when starts with _
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    //sometimes empty function is needed, we have several
    "@typescript-eslint/no-empty-function": "off",
    // we have several
    "prefer-const": "warn",
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-extra-semi": "off",
    "@typescript-eslint/indent": ["warn", 2, { "SwitchCase": 1, "ignoredNodes": ["TSLiteralType"] }],
  },
};
