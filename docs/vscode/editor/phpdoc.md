/*
Title: Writing PHPDoc
Description: Writing and generating PHPDoc comments
*/

## PHPDoc Completion

PHPDoc block is completed by typing '`/**`' or using a code action.

![PHPDoc generation](../imgs/phpdoc-generate.gif)

PHPDoc tags are completed by typing '`@`' inside the PHPDoc block.

![PHPDoc code completion](../imgs/phpdoc-codeactions.gif)

Type names inside PHPDoc are completed as well. It is triggered automatically in most cases, or use the corresponding shortcut for `editor.action.triggerSuggest` command (`Ctrl+Space` on Windows).

## PHPDoc Generation

The PHPDoc block is generated automatically by typing '`/**`' above the following constructs:

- function
- class
- namespace
- properties
- constants

The generated PHPDoc block contains inferred types, exceptions, and lists function parameters. In case of a function override, the PHPDoc block may contain `{@inheritDoc}` annotation instead, so it inherits all the information from the base class properly.

## PHPDoc Type Hints

Type hints within PHPDoc comments are analyzed and used for purposes of code completion and type analysis. See the sample below for type hinting the parameter `$x` of function `foo`. For more details on code completion see [completion documentation](completion.md).

```php
<?php

/**
 * @param array|bool $x The parameter description.
 */
function foo($x) {
    //
}
```

Type hints are supported within the vast array of tags, including standard Doc Comment tags (i.e. `@return`, `@param`), PhpStan tags (i.e. `@phpstan-assert`, `@phpstan-template`, ..), or Psalm. They do support the generic type annotations, WordPress type annotations, MediaWiki annotations, and more. 

Additionally, type hints are highlighted with colors defined your Visual Studio Code Theme. This handles generic type annotations, structured objects, structured array syntax, specific colors for interfaces, enum, traits.

## PHPDoc Highlighting in the Editor

Use the setting `"php.docblock.colorMode"` to change how the text inside `/** ... */` is highlighted. PHP Tools extension parses and colorizes entities in PHPDoc semantically. This can be changed:

- **`null`**: default, the colorization of type names, keywords, interfaces, enums, and other entities semantically. This also improves colorization for PhpStan, Psalm, and other extended syntaxes. **This is recommended setting.**
- **`"simple"`**: use single color for all type names and namespaces.
- **`"fallback"`**: let Visual Studio Code to colorize the text according to its grammer. This is known to colorize some parts of text incorrectly.

## See Also

- [Generics in PHP using PHP DocComments](https://blog.devsense.com/2022/generics-in-php-using-phpdoc)
- [Code Action to Geneate PHPDoc](code-actions.md)
