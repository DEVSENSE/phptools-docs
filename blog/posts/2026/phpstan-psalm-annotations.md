---
title: PHPStan and Psalm Type Annotations in PHP Tools
description: How PHP Tools understands PHPStan and Psalm PHPDoc annotations for generics, array shapes, and static analysis.
date: 2026-11-03
authors:
  - jakub
tags:
  - php
  - phpstan
  - psalm
  - phpdoc
  - vscode
  - vs
categories:
  - tutorial
---

# PHPStan and Psalm Type Annotations in PHP Tools

Modern PHP projects rely heavily on static analysis tools like **PHPStan** and **Psalm** to catch bugs before runtime. These tools express type information through PHPDoc annotations — generics, array shapes, template types, conditional return types, and more.

PHP Tools reads these same annotations and uses them to power IntelliSense, diagnostics, and refactorings. You get the benefits of static analysis directly in the editor, without running a separate tool.

<!-- more -->

## What PHP Tools Understands

PHP Tools supports a wide range of PHPStan- and Psalm-style PHPDoc annotations:

- **Generics and templates:** `@template T`, `@param T $value`, `@return T`
- **Array shapes:** `@param array{id: int, name: string} $user`
- **Type aliases:** `@type` / `@phpstan-type` and `phpstan.neon` configuration
- **Structured types:** `array<int, string>`, `non-empty-string`, `class-string<T>`
- **Conditional return types** and `@phpstan-assert`, `@psalm-if-this-is`
- **Generic collections:** `Collection<int, User>`, `List<string>`

Because the language server analyzes your whole workspace, it can propagate these types across function boundaries and give you accurate completions and diagnostics everywhere.

## Example: Array Shapes

```php
/**
 * @param array{
 *     id: int,
 *     name: string,
 *     active?: bool
 * } $user
 */
function processUser(array $user): void
{
    echo $user['id'];    // known to be int
    echo $user['name'];  // known to be string
}
```

PHP Tools infers the individual field types instead of treating `$user` as a plain `array`, so you get correct completions and type errors on each field.

## phpstan.neon Support

PHP Tools indexes `phpstan.neon` (and `.dist` / `.dist.neon`) files and respects `typeAliases` definitions. If you define a global type alias in your Neon config, the editor picks it up for completions and diagnostics across the project.

## See Also

- [PHPStan framework documentation](https://docs.devsense.com/vscode/frameworks/phpstan/)
- [Generics in PHP using PHP DocComments](https://blog.devsense.com/2022/generics-in-php-using-phpdoc)
- [Writing PHPDoc](https://docs.devsense.com/vscode/editor/phpdoc/)
- [PHP Tools for VS Code](https://marketplace.visualstudio.com/items?itemName=DEVSENSE.phptools-vscode)
