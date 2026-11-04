---
title: Starred Suggestions — Local AI Completion Ranking
description: Let PHP Tools predict the most relevant completion members using a local AI model.
date: 2026-11-03
authors:
  - jakub
tags:
  - php
  - ai
  - intellisense
  - completion
  - vscode
categories:
  - tutorial
---

# Starred Suggestions — Local AI Completion Ranking

Code completion lists can be long, especially in large projects with many classes and methods. **Starred Suggestions** helps by predicting the most relevant methods, properties, and constants for your current context and surfacing them at the top of the completion list, marked with a star (★).

The prediction runs on a fully local machine learning model — no code leaves your computer and there is no network latency.

<!-- more -->

## How It Works

When you type `->`, `?->`, or `::` after an object or class, PHP Tools ranks the top 5 most probable members and places them at the very top of the completion list with a star icon:

```php
$user->   // ★ getName()  ★ save()  ★ isActive()  ...
```

Because the model understands your codebase's actual usage patterns, the suggestions adapt to the frameworks and libraries you work with (Laravel, Symfony, WordPress, etc.).

## Enable or Disable

Starred Suggestions is a Premium feature, enabled by default. Toggle it with:

```json
"php.completion.starredSuggestions": true
```

## IntelliPHP vs Starred Suggestions

These are two different local AI features:

- **Starred Suggestions** — re-ranks the standard completion list with likely members (integrated in PHP Tools for VS Code).
- **IntelliPHP** — offers whole-line and snippet inline suggestions as you type (separate `intelliphp` extension).

Both run locally and keep your code private.

## Related Links

- [Starred Suggestions documentation](https://docs.devsense.com/vscode/ai/starred-suggestions/)
- [Faster PHP Coding with IntelliPHP Autocomplete](https://blog.devsense.com/2026/intelliphp-autocomplete/)
- [Code Completion documentation](https://docs.devsense.com/vscode/editor/completion/)
- [PHP Tools for VS Code](https://marketplace.visualstudio.com/items?itemName=DEVSENSE.phptools-vscode)
