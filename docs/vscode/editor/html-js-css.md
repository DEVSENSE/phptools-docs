/*
Title: HTML/CSS/JSS
Description: HTML, CSS and JS support in PHP project
*/

# HTML/CSS/JS Support

PHP Tools for Visual Studio Code brings full front-end development support into `.php` files, enabling you to write HTML, CSS, and JavaScript directly within your PHP code with the same experience as in standalone files.


## Embedded Language Support

Visual Studio Code includes built-in language services for:

- [HTML](https://code.visualstudio.com/docs/languages/html)
- [CSS](https://code.visualstudio.com/docs/languages/css)
- [JavaScript](https://code.visualstudio.com/docs/languages/javascript)

PHP Tools enables these services within PHP files, so embedded HTML, CSS, and JavaScript will behave the same as they do in their respective file types. Supported features include:

- IntelliSense (tag/property/method suggestions)
- Tag closing and renaming
- Hover documentation
- Validation and diagnostics
- Color highlighting and picker (for CSS)
- Emmet abbreviations and expansions
- Formatting and folding

# Configuration and Customization

The behavior of HTML, CSS, and JavaScript editing is **fully customizable** using the same settings and extensions that apply to standalone files.

You can configure the experience to match your preferences using your `settings.json`. For example:

### HTML Settings

```jsonc
"html.format.wrapLineLength": 120,
"html.autoClosingTags": true,
```

### CSS Settings
```jsonc
"css.validate": true,
"css.lint.unknownProperties": "warning",
"css.format.spaceAroundSelectorSeparator": true
```

### JavaScript Settings
```jsonc
"javascript.validate.enable": true,
"javascript.format.semicolons": "insert",
"javascript.format.insertSpaceBeforeFunctionParenthesis": true
```

These settings apply both to `.html`, `.css`, and `.js` files and to their embedded counterparts in `.php` files.

You may add or adjust these settings by opening the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and selecting Preferences: Open Settings (JSON).


# ⚠️ Required Built-in Extensions

For full HTML/CSS/JS support inside PHP files, several built-in extensions must be enabled in Visual Studio Code. Disabling any of these can result in unexpected behaviour.

Make sure the following built-in language feature extensions are enabled:
 - **HTML**
  - `vscode.html` (HTML Language Basics)
  - `vscode.html-language-features` (HTML Language Features)

 - **CSS**
  - `vscode.css` (CSS Language Basics)
  - `vscode.css-language-features` (CSS Language Features)

 - **JavaScript**
  - `vscode.javascript` (JavaScript Language Basics)
  - `vscode.javascript-language-features` (JavaScript Language Features)

## ✅ How to check? 

1. Open the Command Palette → `Extensions: Show Built-in Extensions`
2. Search for:
 - `HTML`
 - `CSS`
 - `JavaScript`

If any of the extension listed avobe are **disabled**, click **Enable**

> 💡 Tip: If you're missing functionality like Emmet expansions, color previews, or tag completion, this is the first thing to check.