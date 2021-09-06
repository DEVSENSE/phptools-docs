/*
Title: Syntax Highlighting
Description: Colorization of PHP syntax in code editor.
*/

# Syntax Highlighting

The Syntax highlighting feature makes PHP code more readable as any other language file integrated in Visual Studio. Script code blocks, variables, keywords, strings, script tags and comments are distinguished to make programming easier.

![PHP/HTML syntax highlighting](imgs/php-highlighting.png "PHP/HTML syntax highlighting.")

Moreover, when PHP Editor finds a syntax error or a logical error, the corresponding expression is underlined with a red wave and the error detail is listed in Visual Studio Error List tool window.

## Settings

PHP Editor respects standard Visual Studio colors, and defines additional PHP colors. The colors are themed, and thus work well on the both Dark and Light themes.

![color names](imgs/php-highlighting-colors.png)

Modify the default Fonts and Colors in the menu `Tools` | `Options`, section `Environment` > `Fonts and Colors`.

**Used Standard Colors:**

- text
- identifier
- comment
- keyword
- operator
- number
- string
- string - escape character
- user types - classes

**PHP Colors**

- PHP - Variable
- PHP - Label
- PHP - Encapsulated Variable
- PHP Doc - Delimiter
- PHP Doc - Variable
- PHP Doc - Tag

**Regex Syntax Colors** (Visual Studio 2019 and newer)

- Regex - Alternation
- Regex - Anchor
- Regex - Comment
- Regex - Grouping
- Regex - Character Class
- Regex - Other Escape
- Regex - Quantifier
- Regex - Self Escaped Character
- Regex - Text

**Used HTML Colors**

- HTML Server-Side Script
- HTML Element Name
- HTML Attribute Value
- HTML Attribute Name
- HTML Comment
- HTML Operator
- HTML Tag Delimiter

### Short Open Tags

```php
<? // <-- short open tag, usually not enabled

?>
```

The editor respects the `short_open_tag` directive in the corresponding `php.ini` file. By default, it enables them for PHP &lt; 7.0. Otherwise the short open tags are treated as XML tag and their content is not colorized as PHP code.

To override the default behavior and enable the short open tags, edit the Visual Studio project file (`.phpproj` file), and add the following XML fragment:

```xml
<PropertyGroup>
  <LanguageFeatures>ShortOpenTags</LanguageFeatures>    
</PropertyGroup>
```

Reload the project if necessary.

> Note, short open tags were disabled by default since PHP 7.0.

## PHPDoc Highlighting

PHPDoc content (within `/** */` comments) is also colorized. Its tags contained type names and variable names are colored according to the settings above.

## Type Names and Highlighting

Type names are highlighted with the color respecting the color name `User Types - Classes`.

## Highlighting braces

Matching pair of braces are automatically highlighted as well. Upon moving the keyboard caret at the outer position next to any brace (`(`, `)`, `[`, `]`, `<`, `>`), it gets highlighted together with its matching brace.

![PHP brace highlighting](imgs/highlight-braces.png)

You can also jump between matching braces using the keyboard shortcut (by default `Ctrl`+`]`).

In the Visual Studio 2019 and newer, matching parenthesis within PCRE are also highlighted.

## Switching Themes

When switching to a different color theme (e.g. Dark Theme), all built-in colors are switched as well to their default, respecting the new theme. PHP colors respect the Dark and Light themes.

