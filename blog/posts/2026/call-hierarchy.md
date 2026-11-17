---
title: Master Call Hierarchy in PHP Tools for VS Code
description: Trace who calls your methods and navigate code relationships with Call Hierarchy.
date: 2026-11-03
authors:
  - jakub
tags:
  - php
  - vscode
  - navigation
  - refactoring
  - intellisense
categories:
  - tutorial
---

# Master Call Hierarchy in PHP Tools for VS Code

Understanding a large PHP codebase often starts with one question: **"Who calls this?"** Whether you're renaming a method, removing dead code, or tracing a bug through several layers, you need to know the callers and callees of a function before you change it.

PHP Tools for Visual Studio Code provides **Call Hierarchy**, a navigation feature that lets you explore incoming and outgoing calls for any method or function directly from the editor. This post shows how to use it and when it matters most.

<!-- more -->

## What Is Call Hierarchy?

Call Hierarchy displays two views for a symbol:

- **Incoming calls** — the methods and functions that call the selected symbol.
- **Outgoing calls** — the methods and functions that the selected symbol calls.

The language server analyzes your entire project, so the results account for your actual code, not just text matches. This is particularly valuable in PHP, where dynamic calls, magic methods, and framework conventions can make plain-text search unreliable.

## How to Open Call Hierarchy

1. Open a PHP file and place the caret on a method or function name.
2. Open the context menu (right-click) and choose **Show Call Hierarchy**.
3. A Call Hierarchy panel opens, listing the callers and callees of the symbol.

From there you can navigate to any caller or callee by double-clicking an entry, and you can expand symbols to explore their own callers and callees recursively.

> Call Hierarchy is available since PHP Tools for VS Code version `1.74`.

## When to Use It

### Before Renaming a Method

Renaming a method is safe only if you know every place that calls it. Call Hierarchy lists all callers up front, so you can rename with confidence instead of hunting through the project and hoping you didn't miss anything.

### Before Removing a Method

If you're considering deleting a method, check its callers first. If there are no incoming calls, the method is likely dead code. If there are callers, decide whether to update them, keep the method, or deprecate it.

### Tracing a Bug Through Layers

When a bug appears in a controller, you often need to trace the flow through services, repositories, and other layers. Call Hierarchy lets you walk the call chain outward from the failing method, showing exactly how execution reaches it.

## Limitations

Call Hierarchy works best on syntactically valid PHP. It may be limited within the `vendor` folder, where dependencies are indexed but not always fully resolvable.

## Example

```php
public function calculateTotal(Order $order): Money
{
    // ...
}
```

Before changing the signature of `calculateTotal`, open Call Hierarchy on it. You may discover it's used not only by a controller but also by a background job and a console command. Understanding those dependencies first prevents subtle regressions.

## Related Links

- [Call Hierarchy documentation](https://docs.devsense.com/vscode/tools/call-hierarchy/)
- [Code Actions documentation](https://docs.devsense.com/vscode/code%20actions/)
- [PHP Tools for VS Code on the marketplace](https://marketplace.visualstudio.com/items?itemName=DEVSENSE.phptools-vscode)
