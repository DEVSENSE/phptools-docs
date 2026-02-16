---
title: PHP Tools for Visual Studio (September 2023)
description: "New update with PHP 8.3, caching vendor, tons of IntelliSense improvements, and more!"
date: 2023-09-20 09:01:47
authors:
  - jakub
tags:
  - php
  - ai
  - intelliphp
  - intellisense
  - php-8.3
  - scalar-objects
  - completion
categories:
  - announcement
---

# PHP Tools for Visual Studio (September 2023)

![Cover Image](imgs/phptools-v1-75.png)

We're releasing version **1.75** of PHP Tools for Visual Studio! This September release improves the editor experience, introduces compatibility with PHP 8.3, adds fast caching of `vendor` folder, adds more inline code suggestions, and improves stability and overall performance.

<!-- more -->

## PHP 8.3 Syntax

Adding support for PHP 8.3 syntax features including:

- Typed class constants
- Anonymous readonly classes
- Dynamic class constant fetch

## `scalar_objects` Support

Thanks to the suggestions [#378](https://github.com/DEVSENSE/phptools-docs/issues/378), we're adding native support for the [`scalar_objects`](https://github.com/nikic/scalar_objects) extension by Nikita Popov.

The editor recognizes `register_primitive_type_handler()` calls, and allows completion for specified scalar types.

## Completing File Paths

The editor is completing and navigating to files [#402](https://github.com/DEVSENSE/phptools-docs/issues/402).

![file path suggestion](https://github.com/DEVSENSE/phptools-docs/blob/master/content/vs/releasenotes/imgs/vs-complete-filenames.gif?raw=true)

## Class Name Inline Suggestion

Newly, when typing a new class, the class name is suggested based on the file name. The suggestion takes advantage of the inline compose lenses, so it's non disruptive; accepted with `TAB` key.

![class name suggestion](https://github.com/DEVSENSE/phptools-docs/blob/master/content/vs/releasenotes/imgs/vs-complete-class-name.gif?raw=true)

In combination with [IntelliPHP](https://blog.devsense.com/2023/php-and-visual-studio-updates-july-2023), which is a part of PHP Tools for Visual Studio 2022, there are even more code suggestions!

## Optimized Loading and Memory Use

The editor is caching `composer.lock` and the corresponding vendor folder. This significantly improves opening solutions based on Composer packages, and drops the RAM usage to the bare minimum.

## Inlay Hints for Attributes

Newly, attributes above classes will have inlay hints with parameter names ([#383](https://github.com/DEVSENSE/phptools-docs/issues/383)), if enabled.

## Fixes

- Fixes use statements sorting.
- Fixes go-to-def of a method defined in a trait.
- Fixes @psalm-import-type phpdoc tag support.
- Fixes inlay hints when there is a new without parameters.
- Fixes rename refactoring of static methods.
- Avoids showing keyword tooltip if it's not a keyword.
- Avoids showing duplicit items in peek window.
- More fixes of code diagnostics and IntelliSense.
- Stability fixes.
