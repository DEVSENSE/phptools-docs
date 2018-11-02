/*
Title: Tooltips
Description: Tool tip help
*/

# Tooltips

Mouse hovering over an expression or a declaration reveals an additional information. The information is formatted respecting PHP syntax. In case the expression resolution is ambiguous, the tool tip lists all the possible meanings.

## User symbols

All of the user's code is analysed in order to determine possible types and corresponding symbol. The tooltip shows declaration of the symbol under the cursor, optionally with its actual value and type, or a combination of types.

In case the symbol is annotated with a PHPDoc comment, it is shown as well at the bottom of the tooltip.

## Base PHP library

Tooltip shows the corresponding declaration and description, including a direct link to the PHP manual.

![Tooltip PHP Help in Japanese](../imgs/tooltip-help-ja.png)

The description is shown in the user's current language. This can be changed in [settings](../configuration).

## Keywords, PHPDoc keywords

A description of the keyword is shown.
