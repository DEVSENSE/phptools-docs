---
title: Writing and Generating PHPDoc in PHP Tools
description: Document PHP code with PHPDoc comments, generate blocks automatically, and use type hints for better IntelliSense.
date: 2026-11-03
authors:
  - jakub
tags:
  - php
  - phpdoc
  - documentation
  - intellisense
  - vscode
  - vs
categories:
  - tutorial
---

# Writing and Generating PHPDoc in PHP Tools

PHPDoc is the standard way to document PHP code and add type information. PHP Tools reads PHPDoc comments to improve code completion, type inference, tooltips, and diagnostics — and can generate the blocks for you.

<!-- more -->

## Generate a PHPDoc Block

Place the caret above a function, class, interface, trait, property, or constant declaration and type `/**`. PHP Tools inserts a PHPDoc stub with inferred types, parameters, and return type.

You can also use the **Generate PHPDoc comment** code action (`Ctrl+.` / `Cmd+.`).

## Document Parameters and Returns

```php
/**
 * Creates a new order.
 * @param array<int> $items The item IDs.
 * @return Order The created order.
 * @throws InvalidArgumentException If items is empty.
 */
function createOrder(array $items): Order
{
    // ...
}
```

Hover over `createOrder` anywhere in your project to see the description and types in a tooltip.

## Type Hints for Local Variables

Annotate local variables so the editor understands their types:

```php
/** @var User $user */
$user = findUser($id);
```

## Suppress a Symbol from IntelliSense

Mark a dummy declaration with `@ignore` so it doesn't appear in completion:

```php
/** @ignore */
function placeholder() { }
```

## Related Links

- [Writing PHPDoc documentation](https://docs.devsense.com/vscode/editor/phpdoc/)
- [PHPDoc Comments (Visual Studio)](https://docs.devsense.com/vs/editor/phpdoc/)
- [Generate PHPDoc code action](https://docs.devsense.com/vscode/code-actions/generate-phpdoc/)
- [Code Completion documentation](https://docs.devsense.com/vscode/editor/completion/)
