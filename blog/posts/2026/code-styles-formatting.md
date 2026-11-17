---
title: Code Styles and Custom Formatting Rules in PHP Tools
description: Choose from PSR-12, PER, Laravel, WordPress, and more, or define your own formatting rules.
date: 2026-11-03
authors:
  - jakub
tags:
  - php
  - formatting
  - codestyle
  - psr-12
  - vscode
  - vs
categories:
  - tutorial
---

# Code Styles and Custom Formatting Rules in PHP Tools

Consistent formatting makes code easier to read and review. PHP Tools includes a built-in PHP formatter with a set of predefined code styles, plus a rich collection of individual formatting rules you can combine to match your team's exact guidelines.

This post walks through the predefined styles and shows how to customize the formatter.

<!-- more -->

## Predefined Code Styles

PHP Tools ships with these code styles, selectable through the `php.format.codeStyle` setting:

| Style | Basis |
|-------|-------|
| **PSR-12** | PHP-FIG PSR-12 (replaces PSR-2) |
| **PSR-2** | PHP-FIG PSR-2 + PSR-1 |
| **PER** | PHP Tools Extended Recommendation |
| **Allman** | Braces on new lines |
| **K&R** | Braces on same line |
| **Laravel** | PSR-2 with Laravel specifics |
| **WordPress** | WordPress PHP Coding Standards |
| **Drupal** | Drupal PHP Coding Standards |
| **Joomla** | Joomla! Coding Standards |

The default is **PSR-12**. Each style controls brace placement, spacing, wrapping, and indentation.

## Customize Individual Rules

You can override any rule of a chosen style using `php.format.rules.*` settings. Common customizations:

```json
{
    "php.format.rules.spaceAfterCast": true,
    "php.format.rules.openBraceOnNewLineForFunctions": true,
    "php.format.rules.addCommaAfterLastArrayElement": true,
    "php.format.rules.arrayInitializersWrap": "onEveryItem"
}
```

Settings are available in the VS Code settings editor — search `php format` — or in Visual Studio under `Tools | Options | Text Editor | PHP | Formatting`.

## .editorconfig Support

For team projects, store formatting rules in `.editorconfig` at the repository root. PHP Tools reads these rules and applies them alongside the IDE settings, so formatting travels with the code:

```ini
[*.php]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

PHP-specific `.editorconfig` directives (the `ij_php_*` family imported from IntelliJ IDEA/PhpStorm) are also supported.

## Format on Save

Enable automatic formatting when saving:

```json
"editor.formatOnSave": true
```

Or run Format Document (`Shift+Alt+F`) / Format Selection (`Ctrl+K Ctrl+F`) on demand.

## Related Links

- [Code Styles documentation](https://docs.devsense.com/vscode/formatting/code-styles/)
- [Customize Formatting documentation](https://docs.devsense.com/vscode/editor/customize-formatting/)
- [Leveraging .editorconfig for Consistent Code Style Across Different IDEs](https://blog.devsense.com/2024/leveraging-.editorconfig-for-consistent-code-style-across-different-ides/)
- [Format Multiple PHP Files with Preview](https://blog.devsense.com/2024/format-multiple-php-files-with-preview/)
