/*
Title: Writing PHPDoc
Description: Writing and generating PHPDoc comments
*/

## PHPDoc Completion

PHPDoc block is completed by typing '`/**`'. This features requires you to enable `Format On Type` VS Code setting (`"editor.formatOnType": true`).

![PHPDoc generation](../imgs/phpdoc-generate.gif)

PHPDoc tags are completed by typing '`@`' inside the PHPDoc block.

![PHPDoc code completion](../imgs/phpdoc-codeactions.gif)

## PHPDoc Generation

The PHPDoc block is generated automatically by typing '`/**`' above following constructs:
- function
- class
- namespace
- properties
- constants

The generated PHPDoc block contains inferred types, exceptions and lists function's parameters.

## PHPDoc Type Hints

Type hints within PHPDoc block are analysed and used for purposes of code completion and type analysis. See the sample below for type hinting the parameter `$x` of function `foo`. For more details on code completion see [completion documentation](completion).

```php
<?php

/**
 * @param array|bool $x The parameter description.
 */
function foo($x) {
    //
}
```
