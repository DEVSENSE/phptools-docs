---
title: Inlay Hints in PHP Tools for VS Code
description: Show parameter names, return types, and variable types inline in your PHP code.
date: 2026-11-03
authors:
  - jakub
tags:
  - php
  - vscode
  - intellisense
  - inlay-hints
  - editor
categories:
  - tutorial
---

# Inlay Hints in PHP Tools for VS Code

Inlay hints show additional type information directly inside your editor, next to your code — without changing the file. Parameter names, inferred return types, variable assignment types, and by-reference markers appear as subtle inline annotations to help you read and navigate PHP code faster.

<!-- more -->

## What Inlay Hints Show

| Hint | What it shows | Example |
|------|---------------|---------|
| Parameter names | Argument names at call sites | `foo($name: $value)` |
| Return types | Inferred return type of functions | `function foo(): string` |
| Variable types | Type of assignments | `$x = doSomething()` |
| By-ref | Arguments passed by reference | `&$variable` |
| `@psalm-trace` | Inferred type of any expression | Annotated with `@trace` |

Double-click a parameter-name hint to insert the named parameter into your code.

## Enable Inlay Hints

Inlay hints are controlled by standard VS Code settings plus PHP Tools-specific ones:

```json
"editor.inlayHints.enabled": "on",
"php.inlayHints.parameters.enabled": true,
"php.inlayHints.parameters.byReference": true,
"php.inlayHints.types.return": true,
"php.inlayHints.types.variable": true
```

Suppress a parameter name when it matches the value:

```json
"php.inlayHints.parameters.suppressNameMatchingValue": true
```

## Customize Colors

Adjust hint colors in your VS Code theme:

```json
"workbench.colorCustomizations": {
    "editorInlayHint.background": "#f00",
    "editorInlayHint.foreground": "#fff"
}
```

## Use with @psalm-trace

Add `@psalm-trace` (or `@trace`) above an expression to see its inferred type as an inlay hint — useful for debugging the editor's type inference:

```php
/** @psalm-trace */
$result = complex_function_call();
```

## Related Links

- [Inlay Hints documentation](https://docs.devsense.com/vscode/editor/inlay-hints/)
- [Code Lens documentation](https://docs.devsense.com/vscode/editor/code-lens/)
- [PHP Tools for VS Code](https://marketplace.visualstudio.com/items?itemName=DEVSENSE.phptools-vscode)
