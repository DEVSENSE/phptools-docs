/*
Title: Syntax Highlighting
Description: Colorization of PHP syntax in code editor.
*/

# Syntax Highlighting

The Syntax highlighting feature makes PHP code more readable as any other language file integrated in Visual Studio. Script code blocks, variables, keywords, strings, script tags and comments are distinguished to make programming easier.

![PHP/HTML syntax highlighting](imgs/php-highlighting.png "PHP/HTML syntax highlighting.")

Moreover, when PHP Editor finds a syntax error or a logical error, the corresponding expression is underlined with a red wave and the error detail is listed in Visual Studio Error List tool window.

## Settings

PHP Tools editor respects custom color settings from Visual Studio. These settings can be configured in `Tools | Options | Environment | Fonts and Colors` (see below).

The editor uses most of built-in colors. It lets the user take advantage of the PHP Editor with existing custom settings and themes easily. The following Display items are introduced by PHP Tools in addition to built-in Visual Studio colors:

- PHP - Encapsulated Variable
- PHP - Variable
- PHP Doc - Variable
- PHP Doc - Delimiter
- PHP Doc - Tag

Built-in Visual studio colors used by PHP Editor are the following:

- Comment
- Identifier
- Keyword
- Number
- Operator
- String
- Text
- HTML Server-Side Script
- User Types - Classes

## PHPDoc Highlighting

Since version 1.16, PHPDoc content is also colorized. Its tags contained type names and variable names are colored according to the settings above.

## Type Names and Highlighting

Since version 1.16, type names are highlighted. The color respects Display item `User Types - Classes`.

## Switching Themes

When switching to a different color theme (e.g. Dark Theme), all built-in colors are switched as well to their default, respecting the new theme. Additional colors (prefixed with PHP) have to be changed manually to improve readability in the new theme.