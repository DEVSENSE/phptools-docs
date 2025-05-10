---
title: PHP code validation
description: PHP code structure validation and PHP version compatibility
date: 2016-12-06 00:00:00
authors:
  - admin
tags:
  - php
  - code-validation
  - visualstudio
cover_image: imgs/PHP_Tools_for_VS.jpg
categories:
  - general
---

# PHP code validation

We are working very hard to improve PHP Tools so we can provide new and better tools for creating safe and efficient code.
Today, we will spotlight numerous new features, introduced in the latest PHP Tools, that focus on code validation and PHP version compatibility.

<!-- more -->

---

PHP Tools validate the source code and report syntax errors, incorrect constructs and features supported in newer versions of PHP.
The reported errors are separated into three categories based on what causes them and how they are usually fixed.

## General syntax errors

This first category contains fatal errors, which signal incorrect syntax. 
These errors can be the most intricate to fix, because they usually require code refactoring.
PHP Tools highlight the errors and provide a tooltip with detailed information to help the users find the cause more easily.

PHP Tools report syntax errors, duplicate use declaration (including function and constant uses), parent keyword used outside of a class and many more. 
The following example shows duplicate use declaration as it is reported by PHP Tools
  
![duplicit-use](imgs\duplicit-use.png)

The next example shows a simple syntax error including the tooltip displayed by PHP Tools. All the syntax errors are highlighted and reported the same way.

![syntax-error](imgs\syntax-error.png)

The other errors have custom tooltips that explain the what went wrong, as shown in the next example.

![no-parent](imgs\no-parent.png)

## Code structure errors

This category contains errors caused by incorrect code structure - the code is syntactically correct, but it contains misused or unknown types.
These errors usually indicate a missing include statement or a typo in a type name.

PHP Tools report unknown classes, unknown interfaces, classes used in place of interfaces and more.

The following example shows an incorrect class hierarchy as it is reported by PHP Tools.

![code-structure](imgs\code-structure.png)

## PHP version compatibility errors

Aside from the general errors, PHP Tools report compatibility issues caused by using features supported in another version of PHP than the one currently used for the project.
These issues are reported as errors, because their usage causes the PHP runtime to crash. PHP Tools report the unsupported features for the PHP 5.5 and newer, up to the latest PHP 7.1. 
PHP Tools report all the issues located in the code, even when multiple errors are cause by a single construct, like in the following example for PHP 7.0.

![php-70-compatibility](imgs\php-70-compatibility.png)

All these errors can be fixed by switching to a newer version of PHP. 
If that is not possible, PHP Tools report all the unsupported constructs so they can be easily tracked and fixed.
The next example shows new features introduced in PHP 7.1 as they are reported by PHP Tools when using PHP 7.0.

![php-71-compatibility](imgs\php-71-compatibility.png)

---

We hope that these features will help you create safer code and we look forward to your feedback.
Latest version of PHP Tools can be downloaded from [download](https://www.devsense.com/download).
The complete list of all reported errors and more detailed information can be found in our [documentation](https://docs.devsense.com/code%20validation/code-validation).
![Image description](imgs/PHP_Tools_for_VS.jpg)
