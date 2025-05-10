---
title: "What's New - PHP in Visual Studio Code (February 2023)"
description: "PHP extension for Visual Studio Code!"
date: 2023-02-16 15:10:09
authors:
  - jakub
categories:
  - general
---

# What's New - PHP in Visual Studio Code (February 2023)

We're continuously adding new and new features to both the Visual Studio Code and Visual Studio IDEs. Today we're going to summarize recently added features for PHP developers in Visual Studio Code!

<!-- more -->

---

## Inlay Hints

Newly **Inlay Hints** for PHP code are available!

![inlay hints](https://raw.githubusercontent.com/DEVSENSE/phptools-docs/master/docs/vscode/imgs/vsc-inlay-hints.png)

The inlays are available for parameter names, by-reference arguments, and inferred function return types.

![inlay hints](https://docs.devsense.com/content_docs/vscode/imgs/vsc-inlay-parameter-byref.png)

To enable or disable the inlay hints, change the following **settings**:

- `"editor.inlayHints.enabled"`
- `"php.inlayHints.parameters.enabled"`
- `"php.inlayHints.parameters.byReference"`
- `"php.inlayHints.types.return"`
- `"php.inlayHints.types.variable"`

See [the documentation](https://docs.devsense.com/vscode/editor/inlay-hints) for more details.

## Quick Fixes

There are lots of new quick fixes and code actions!

### New Code Actions

More useful refactorings are coming to the PHP extension and VS Code. Following are refactorings introducing common PHP 8 syntax to your code.

**Condition `?:` can be replaced with `?->`**

Simplifying conditional expressions like the one below:

![simplify conditional expression](https://raw.githubusercontent.com/DEVSENSE/phptools-docs/master/docs/vscode/imgs/vsc-code-action-conditional.gif)

**Assignments can be simplified**

Simplifying assignments:

![simplify assignment expression](https://raw.githubusercontent.com/DEVSENSE/phptools-docs/master/docs/vscode/imgs/vsc-code-action-assignment.gif)

**Converting `switch` to `match`**

In certain cases, `switch` statement can be converted to the new `match` expression.

### Add missing Doc Comments

New code action adds missing doc comments with infered type information and summary placeholders. The functionality is the same as by typing `/**` above a function/class/property/constant or `define()` call, but it can be invoked through a code action and it can be invoked over a whole selection of code for multiple declarations at once. ([#226](https://github.com/DEVSENSE/phptools-docs/issues/226))

### Improved `__construct`/`__get`/`__set`

The quick fix for getters and setters follows `PSR-12` now. Additionally, it specifies a type hint in the correct form.

Quick fix for generating `__construct()` ([#198](https://github.com/DEVSENSE/phptools-docs/issues/198)) generates Doc Comment in the correct form now. Then generated function complies with PSR-12 now as well.

Also the quick fix for implementing an interface has been updated to follow PSR-12 and to generate type names correctly.

## Doc Comments

Support for doc comments (PHPDoc) has been reimplemented so it supports annotations introduces by PHPStan, and Psalm. This includes support for generic templates, conditional return types, type substitutions, etc.

### Colorization and Semantic Tokens

PHP Doc Comments are getting very complex, and frameworks like PHPStan add even more syntaxes and complexity. We're supporting most of the extended syntax, including generic types, templates, type aliases, unions, intersections, `callable` syntax, and array shapes; and in this release, those types in _documentary comments_ are colorized accordingly.

![php callable specification](https://raw.githubusercontent.com/DEVSENSE/phptools-docs/master/docs/vscode/imgs/callable-type-def.png)

The whole type expression is now parsed, colorized, and recognized. The tooltip shows the signature help displaying the `Closure`s arguments and return types.

### PHPStan Conditional Return Types

We have added support for the new PHPStan's Conditional return types. Return types specified in this way are properly recognized now, colored accordingly right in the source code, and the IntelliSense uses the specified types correspondingly.

![phpstan conditional return types](https://raw.githubusercontent.com/DEVSENSE/phptools-docs/master/docs/vscode/imgs/phpdoc-phpstan-confitional-return.png)

### Multi-Lined Structured Array Types

This release adds support for multi-lined structured array type annotations. This allows users to specify array type with its keys and corresponding entries types. See the exmaple below:

```php
/**
 * @return array
 *         {
 *           name: string,
 *           age: int,
 *         }
 */
```

## IntelliSense Improvements

**Respecting `@internal` annotation**

Symbols annotated with `@internal` doc comment tag are hidden in the completion list now;

**Correct ordering**

We have updated how the code completion is ordered depending on context and so-far typed text; Symbols from imported namespaces are listed first, then top-level symbols, and at the end there are symbols that can be auto-imported.

**Deprecated classes**

Additionally, deprecated classes and interfaces and striked-out in the code completion list, and when used in the source code. Previously, we did that only for functions.

![deprecated classes and interfaces](https://raw.githubusercontent.com/DEVSENSE/phptools-docs/master/docs/vscode/imgs/vscode-deprecated-types.png)

**Performance**

More frequent operations have been moved to a background thread to make the user experience fluent and uninterrupted.

### IntelliSense &amp; Enums

The PHP 8.1 `enum` objects implicitly implements `UnitEnum` and `BackedEnum` interfaces. The `BackedEnum<TValue>` interface is annotated with a template type argument so it can be used in Doc Comments with the backed type for better type analysis. E.g.:

```php
/** @param \BackedEnum<string> $e */
function foo($e) {
    return $e->value // -> string
}

enum MyEnum : string {
    case A;
}

foo( MyEnum::A );
```

**Generic Types &amp; Doc Comments Type Annotations**

The type annotations in PHP Doc Comments have been reimplemented, so even complex constructs are handled, can be completed, refactored, highlighted, and previewed. Highlighting occurences works even in nested generic types, as well as rename refactoring and code completion.

```php
/**
 * @template TElement of \BackedEnum<string>
 * @return (Collection<int, TElement>|array<int, TElement>)[] Complex generic type annotations */
```

### More Generic Annotations

Standard types got annotated with generic template types; this is especially helpful in Laravel and Symfony frameworks, where it provides type inferring for all the collections, iterables, `Generator`, `DOMNodeList`, etc.

This improves value inferred within `foreach` for all kinds of iterables.

## See Also

- [PHP extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=DEVSENSE.phptools-vscode)
- [PHP extension for Microsoft Visual Studio](https://www.devsense.com/download)