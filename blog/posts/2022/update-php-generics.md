---
title: "Update: Support for Generics"
description: "PHP Editor now supports the generics annotations! and more. Seet what's new."
date: 2022-04-29 10:43:55
authors:
  - jakub
tags:
  - php
  - ide
  - generics
  - laravel
  - vs-code
  - visual-studio
categories:
  - announcement
---

# Update: Support for Generics

![Cover Image](imgs/phptools-generics.png)

## Generic Types

<!-- more -->

Even though PHP language does not have generic types yet, it is a good practice to annotate the code with documentary comments with template arguments. For example, the Laravel 9 takes huge advantage of the Psalm/PHPStan annotations, including the generic `@templates` annotation.

With this release of PHP Tools, the syntax for generics is fully supported, generic types and inferred generic types are shown in corresponding tool-tips, code completion uses the inferred types, and more. This greatly improves eventual code completion and code refactoring wherever the generic types are either specified or inferred by the editor.

## Generic PHPDoc Syntax

There are several documentary tags and keywords providing additional type information. Since this release of PHP Tools, the additional tag and keywords are recognized. This includes the following tags:

- `@template` annotates a class/interface/trait or a function generic argument.
- `@extends` allows to specify generic types for a base class.
- `@implements` specifies generic types for base interfaces.
- `@use` specifies generic types for the used trait.
and the corresponding variations prefixed with `@psalm-` or `@phpstan-`, which basically means the same.

The usage, which can be for example seen across Laravel 9, would look like the following:

```php
/**
 * @template T
 */
class MyList
{
    /**
     * @param array<T> $values
     */
    function __construct($values) {...}

    /**
     * @return T
     */
    function first() {...}
}
```

In order to use the generic types, it is possible to annotate PHPDoc type hints with the generic syntax using `<` and `>` characters. In case there are more template arguments, they are separated with comma (`,`), e.g.

```php
/**
 * @param Collection<int, object> $parameter1 The collection of objects, indexed by a number.
 */
```

### Support Psalm and PHPStan names

The PHPDoc tags prefixed with `@psalm-` and `@phpstan-` are supported, and the special types that might be used within those tags is properly parsed. This includes generic types syntax, `array`s with specified element types, specialized type names such as `non-empty-array`, `class-string`, etc.

Note, there will be more code analysis enhancements in the future taking advantage of additional type names.

## Editor Features

### Completion After Generics

The generic arguments are respected by the code analysis and IntelliSense; and wherever possible, they are substituted with the inferred types. For example the code above can be used like this:

![generics completion](https://www.devsense.com/content/updates/vs/imgs/generics-annotation.png)

Here you can see the editor substitutes the generic argument so the IntelliSense will make use of it.

### Infer Generic Types from Constructor

Frequently, the generic types can be inferred from the class constructor. The editor matches values provided to the constructor against the class generic arguments and resolves them. As you can see on the screenshot below, the editor infers that `@template T` is bound to the type `User`:

![generics from ctor](https://www.devsense.com/content/updates/vs/imgs/generics-infer-ctor.png)

### Laravel Collections and Doctrine Collections

Since Laravel 9, most of the classes are annotated with `@template` tags, allowing the editor to provide better code completion. This release of PHP Tools allows to use Laravel generic types as well.

### Generic Types in Tool Tips

Generics are also shown in the corresponding tool-tips, so it is obvious what types were annotated and substituted.

![generics tooltip](https://www.devsense.com/content/updates/vs/imgs/generics-tooltip.png)

## See more

The support for PHP generics (via the corresponding PHP documentary comments) is available to both the Visual Studio and the Visual Studio Code. Give it a try with the latest version of **PHP Tools**. We'd also like to note, that there are still many awesome features we'll be adding in the future - improving the corresponding tool-tips, improving type checking against the templates, improving code completion, code actions suggesting the template type, code generators, and more!

For the PHPDoc documentation you may take a look at https://docs.devsense.com/en/vs/editor/phpdoc#generics