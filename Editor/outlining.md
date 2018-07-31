/*
Title: Outlining
Description: Using outlining in PHP scripts.
*/

# Outlining

PHP Editor allows you to collapse the content of functions, classes, namespaces and PHPDoc to have a better overview of your code.

![PHP code outlining](imgs/phptools-outlining.png "PHP code outlining.")

Moreover, when PHP Editor finds a syntax error or a logical error, the corresponding expression is underlined with a red wave and the error detail is listed in Visual Studio Error List tool window.

## Default Shortcuts

- <kbd>Ctrl+M, O</kbd> - Collapse all blocks to definitions.
- <kbd>Ctrl+M, P</kbd> - Stop outlining.
- <kbd>Ctrl+M, M</kbd> - Toggle outlining.
- <kbd>Ctrl+M, L</kbd> - Toggle all outlining.

## Collapsible Regions

The following list describes all the code fragments supporting outlining:

- Class body
- Namespace content
- Function body
- Lambda functions
- PHPDoc comment block
- Multi-line comments
- Group of single-line comments
- PHP script tags containing more than one line of code
- PHP content between `#region`/`#endregion` or `//region`/`//endregion`
- Code blocks enclosed in `{ ... }` *(since version 1.18)*
- Content of `switch`, `case` and `default` *(since version 1.18)*
- Code enclosed within `for`, `foreach`, `if`, `else`, `elseif` *(since version 1.18)*

Outlining behavior can be modified in PHP language options. To disable automatic outlining of a newly opened file, or to change additional outlining options, go to `Tools | Options | Text Editor | PHP | Advanced`.

## &#35;region Outlining

![Outlining of #region sections](imgs/phptools-regionoutline.png "Outlining of #region sections.")

Single line comments starting with the `region` keyword are treated as the start of collapsible region, and are matched with a following `endregion` comment. Regions can be nested. Alternately, the user can specify the region name after the `region` keyword.

