---
title: Code Navigation in PHP Tools — Go to Definition, References, and Symbols
description: Navigate PHP codebases efficiently with Go to Definition, Find All References, Go to Symbol, and more.
date: 2026-11-03
authors:
  - jakub
tags:
  - php
  - vscode
  - vs
  - navigation
  - intellisense
categories:
  - tutorial
---

# Code Navigation in PHP Tools — Go to Definition, References, and Symbols

Reading code means moving through it quickly. PHP Tools provides several navigation features that integrate with your editor's UI so you can jump between definitions, find every usage of a symbol, and browse your project's classes and methods.

<!-- more -->

## Go to Definition (F12)

Place the caret on a symbol and press **F12** (or right-click → Go to Definition) to jump to its declaration. It works for:

- User-defined functions, classes, interfaces, traits, and constants
- Built-in PHP symbols (opens a generated declaration with PHPDoc)
- Symbols in Composer packages (opened read-only)
- Files referenced via `include`, `require`, `include_once`, `require_once`

## Find All References (Shift+F12)

See every place a symbol is used. References inside string values (e.g. `define()`, `constant()`, PHPDoc types) are matched too. Uncertain references (dynamic calls, string-based callbacks) are shown grayed.

> **Tip:** Type hints and PHPDoc type annotations make reference detection more precise.

## Go to Symbol (Ctrl+Shift+O) and Open Symbol by Name (Ctrl+T)

- **Go to Symbol** lists symbols in the current file.
- **Open Symbol by Name** lists symbols across the whole workspace, so you can jump to any class or function without browsing folders.

## Navigation Bar and Class View (Visual Studio)

In Visual Studio, the Navigation Bar and Class View window organize classes by namespace, making it easy to browse members and jump to declarations.

## Related Links

- [Go to Definition documentation](https://docs.devsense.com/vs/editor/go-to-definition/)
- [Find All References documentation](https://docs.devsense.com/vs/editor/find-all-references/)
- [Navigation Bar documentation](https://docs.devsense.com/vs/editor/navigation-bar/)
- [Class View documentation](https://docs.devsense.com/vs/editor/class-view/)
- [Call Hierarchy](https://blog.devsense.com/2026/call-hierarchy/)
