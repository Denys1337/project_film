module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "parser": "@babel/eslint-parser",
        "requireConfigFile": false,
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": "off",
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
    
}
