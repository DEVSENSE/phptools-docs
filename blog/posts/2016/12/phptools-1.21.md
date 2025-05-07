---
title: PHP Tools for Visual Studio 1.21
description: "PHP Tools for Visual Studio, 1.21"
date: 2016-12-07 00:00:00
authors:
  - jakub
tags:
  - php
  - debugger
  - intellisense
  - visualstudio
  - news
  - release
  - vs2017
cover_image: imgs/phptoolsnewversionblog.jpg
categories:
  - general
---

# PHP Tools for Visual Studio 1.21

PHP Tools for Visual Studio are being continuously updated and improved with new features, always supporting latest Visual Studio and PHP. Today we are introducing version 1.21 and what is new in there.

<!-- more -->

## PHP 7.1

With this release we have started supporting PHP 7.1 syntax. The version of PHP used by your project can be set in `Project | Properties`, otherwise PHP Tools recognizes whether you are using PHP 7.1 automatically.

![php71code](imgs\php71code.png)

New multi-type catches, nullable types, void type and iterable type are recognized by the parser and our unique type analysis to provide better IntelliSense and code validation features. For more information about PHP 7.1 features and how we check compatibility between various PHP versions please see [Code Validation#PHP 7.1](https://docs.devsense.com/code%20validation/php-version-validation#php-71).

## Visual Studio 2017 RC

We are happy to be Visual Studio Sim-Ship partner for several years already. With every new release of Visual Studio we are providing compatible version of PHP Tools. Since version 1.21 PHP Tools support VS 2017 which you can find in our [Download Page](https://www.devsense.com/download).

## Code Validation

There are several new code validation rules and features.

![CustomUses](imgs\CustomUses.png)

* `use` statements within your code are analysed whether they are used or not. Not used 'uses' are nicely dimmed as it is done in the C# editor.
* Newly we report compatibility issues in your PHP 7 code that are supported only in PHP 7.1 or newer.
* We report there are duplicate `case` values within a single `switch`.

## Editor Improvements

Except minor improvements in code analysis, we newly show a value of assigned-only variables in certain cases. Anyway there are more features coming in a future update..

## Fixes

Thanks to rich user's feedback we are continuously fixing issues and improving user experience. This release contains several memory optimizations, fixes rare cases in manual mapping of remote debugging, fixes UI of the Composer integration and fixes source code parsing.

## Download

[Update now](https://www.devsense.com/download) to the latest release and let us know what you think. We're always happy to receive feedback.
![Image description](imgs/phptoolsnewversionblog.jpg)
