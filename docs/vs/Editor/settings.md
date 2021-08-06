/*
Title: Settings
Description: Settings for the PHP Editor
*/

# Settings

## Look

### Fonts and Colors

PHP Editor respects standard Visual Studio colors, and defines additional PHP colors. The colors are themed, and thus work well on the both Dark and Light themes.

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
- class name

**PHP Colors**

- PHP - Variable
- PHP - Label
- PHP - Encapsulated Variable
- PHP Doc - Delimiter
- PHP Doc - Variable
- PHP Doc - Tag

**Regex Syntax Colors**

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

The editor respects the `short_open_tag` directive in the corresponding `php.ini` file. By default, it enables them for PHP &lt; 7.0. Otherwise the short open tags are treated as XML tag.

To override the default behavior and enable the short open tags, edit the Visual Studio project file (`.phpproj` file), and add the following XML fragment:

```xml
<PropertyGroup>
  <LanguageFeatures>ShortOpenTags</LanguageFeatures>    
</PropertyGroup>
```

Reload the project if necessary.

> Note, short open tags were disabled by default since PHP 7.0.

### Outlining

- code blocks outlining
- etc.

- #region / #endregion

## Code Editing

### Formatting

### Indentation Behavior

- smart indent
- block indent

### Encoding and Line Endings

- change encoding upon opening file
- normalize line endings upon opening file

### Code Generating

### Code Completion

- commit characters
- preselecting variables completion
- auto-import
- completion filtering

## Code Validation

- setting severity: `.editorconfig`

- setting analysis scope: Tools / Options / PHP Tools / Advanced / Code Analysis
