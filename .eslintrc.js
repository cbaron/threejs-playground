module.exports = {
  "root": true,
  "plugins": [
    "prettier",
    "react"
  ],
  "extends": [
    "airbnb",
    "prettier"
  ],
  "env": {
    "es6": true,
    "browser": true,
    "commonjs": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "objectLiteralDuplicateProperties": false,
      "generators": true,
      "impliedStrict": true,
      "legacyDecorators": true
    }
  },
  "settings": {
    "import/extensions": [
      ".js",
      ".jsx"
    ],
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    }
  },
  "globals": {
    "process": true
  },
  "rules": {
    "react/no-access-state-in-setstate": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-wrap-multilines": "off",
    "import/no-cycle": "off",
    "no-param-reassign": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-indent-props": "off",
    "import/named": "off",
    "no-underscore-dangle": "off",
    "no-use-before-define": "off",
    "react/destructuring-assignment": "off",
    "array-callback-return": "off",
    "new-cap": "off",
    "object-curly-spacing": "off",
    "arrow-body-style": "off",
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "guard-for-in": "off",
    "function-paren-newline": "off",
    "import/prefer-default-export": "off",
    "no-continue": "off",
    "no-mixed-operators": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-return-assign": "off",
    "no-shadow": "off",
    "no-unsed-vars": "off",
    "no-unused-expressions": "off",
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "bracketSpacing": true,
        "jsxBracketSameLine": true,
        "trailingComma": "all"
      },
      {
        "usePrettierrc": false
      }
    ],
    "padding-line-between-statements": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": [
          "Link"
        ],
        "specialLink": [
          "to"
        ]
      }
    ],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "no-console": "off",
    "react/default-props-match-prop-types": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-handler-names": [
      "error",
      {
        "eventHandlerPrefix": "handle",
        "eventHandlerPropPrefix": "on"
      }
    ],
    "react/jsx-indent": "off",
    "react/no-multi-comp": "off",
    "react/prefer-stateless-function": "off",
    "react/prop-types": "off",
    "react/sort-comp": "off",
    "react/react-in-jsx-scope": "off"
  }
}