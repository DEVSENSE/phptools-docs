---
title: Code Actions and Auto-Fix on Save in PHP Tools
description: Apply quick fixes and refactorings automatically with Code Actions, .editorconfig severity, and source.fixAll on save.
date: 2026-11-03
authors:
  - jakub
tags:
  - php
  - code-actions
  - autofix
  - vscode
  - editorconfig
categories:
  - tutorial
---

# Code Actions and Auto-Fix on Save in PHP Tools

Code Actions are quick fixes and refactorings shown as a light bulb next to your code. PHP Tools can apply them automatically — either on demand or every time you save a file — keeping your codebase clean without manual effort.

<!-- more -->

## What Code Actions Do

Code Actions include:

- Add missing `use` imports / fully qualify names
- Remove unused `use` statements and sort them
- Fix typos in PHPDoc keywords
- Add missing `$this->` before method calls
- Generate PHPDoc, getters/setters, constructors
- Implement abstract methods and interfaces
- Simplify expressions (null coalescing, ternary, switch)

Each action has an ID (e.g. `php_remove_redundant_closing_tag`, `php_import_class`) listed in the [Code Actions list](https://docs.devsense.com/vscode/code-actions/list/).

## Set an Action as Auto-Fix

Mark an action as `autofix` in `.editorconfig` so it becomes a preferred fix:

```ini
[*.php]
php_remove_redundant_closing_tag=autofix
```

Auto-fixed actions show a blue bulb and can be applied with the **Auto Fix** command.

## Auto-Fix on File Save

Apply all autofix actions whenever you save:

```json
"editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
}
```

## Control Severity

Change how an action is highlighted using `.editorconfig`:

```ini
[*.php]
php_remove_redundant_closing_tag=error
```

Values: `error`, `warning`, `message`, `autofix`, `force`, or `false` (hide).

## Related Links

- [Code Actions documentation](https://docs.devsense.com/vscode/code-actions/)
- [Code Actions list](https://docs.devsense.com/vscode/code-actions/list/)
- [Enable Auto Fix documentation](https://docs.devsense.com/vscode/code-actions/autofix/)
- [Code Action Severity documentation](https://docs.devsense.com/vscode/code-actions/severity/)
- [Automate Code Fixes through VS Code Auto-Fix](https://blog.devsense.com/2024/code-fixes-auto-fix/)
