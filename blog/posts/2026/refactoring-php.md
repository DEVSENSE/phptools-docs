---
title: Refactoring PHP Code — Extract, Rename, and Promote Constructor Property
description: Safely restructure PHP code with Extract Function, Rename Symbol, Extract Interface, and Promote Constructor Property.
date: 2026-11-03
authors:
  - jakub
tags:
  - php
  - refactoring
  - code-actions
  - vscode
  - vs
categories:
  - tutorial
---

# Refactoring PHP Code — Extract, Rename, and Promote Constructor Property

Refactoring lets you restructure existing code without changing its behavior. PHP Tools provides semantic refactorings that understand your classes, interfaces, and inheritance hierarchy — so changes are applied only when the editor can prove they're safe.

<!-- more -->

## Extract Function / Constant

Select a block of code, open the Code Action menu (`Ctrl+.` / `Cmd+.`), and choose **Extract Function**. PHP Tools moves the selection into a new function or method and asks for a name. Selecting a constant expression offers **Extract Constant** instead.

## Rename Symbol

Right-click a variable, function, class, or interface name and choose **Rename Symbol** (**F2**). PHP Tools renames across the entire workspace, including indirect references and framework-specific names (Laravel, WordPress). Changes can be reviewed before saving.

## Extract Interface

Available on a class with public members. Creates a new interface in a new file, moves the public declarations into it, and makes the class implement the interface — useful for introducing abstractions and dependency inversion.

## Promote Constructor Property

For PHP 8.0+, PHP Tools can convert a traditional field-and-constructor pattern into a promoted constructor property:

```php
// Before
class User {
    private string $name;
    public function __construct(string $name) {
        $this->name = $name;
    }
}

// After
class User {
    public function __construct(
        private string $name,
    ) {}
}
```

The code action appears on the field, parameter, or assignment expression.

## Requirements

Refactoring is disabled (aborted) when the project contains syntax errors, to avoid corrupting code. Fix syntax errors first, then refactor.

## Related Links

- [Refactoring documentation](https://docs.devsense.com/vscode/editor/refactoring/)
- [Extract Function documentation](https://docs.devsense.com/vscode/code-actions/extract/)
- [Promote Constructor Property documentation](https://docs.devsense.com/vscode/code-actions/promote-ctor-property/)
- [Code Actions list](https://docs.devsense.com/vscode/code-actions/list/)
