---
title: Updates for VS Code (September 2020)
description: "There have been a lot of updates and improvements to PHP Tools on VS Code. Check what's new and how it can help you with your PHP projects."
date: 2020-09-22 09:22:13
authors:
  - jakub
tags:
  - vscode
  - php
  - updates
categories:
  - annoucement
---

# Updates for VS Code (September 2020)

There have been a lot of updates and improvements to PHP Tools on VS Code. Check what's new and how it can help you with your PHP projects.

<!-- more -->

In short, there is the support for PHP 8.0 syntax, new diagnostics, quick fixes, improved tooltips, support for "Go To Implementation" command, performance and code analysis improvements, PCRE syntax checker, Test Explorer improvements, and more.

---

## Go To Implementation

![goto implementatoin](imgs/b9bcab88-8331-492e-8594-4886ff0274bf.png)

VS Code introduces a useful command for quickly going to function overrides, interface implementors, or class sub-classes. It is fully supported and provides you workspace-wide search for implementations.
 
## PCRE pattern check

![pcre check](imgs/19bdcae2-716a-490f-b01b-3beb0733ada0.png)

The code may be full of regullar expressions; and it's very easy to make a mistake. In addition to syntax highlighting, PHP Tools now validates the syntax for you and shows additional diagnostics in case anything may be wrong.
 
## PHP 8.0 syntax

![php 8.0 in vs code](imgs/d080ee24-b5d7-4468-8191-9e598dae0eee.png)

There is an upcoming big release of PHP 8.0. The editor now supports the entire PHP 8.0 syntax including:

- non-capturing catches: `try { .. } catch (Exception) { ... }`
- attributes: `#[PhpAttribute]`
- null-safe operator: `?->`
- union types
- mixed type, static type
- `match` expression
- constructor property promotion
- `throw` expression
- `::class` on objects
- trailing comma in the parameter list

Note, in order to actually use the new syntax, you'll need the PHP 8.0 beta installed. Until then, the editor will report all the new features usage as problems.
 
## Quick Fixes

![php quick fixes in vs code](imgs/16d9baea-40d4-46df-8740-180e0bf18840.png)

We have added several new quick fixes for common problems, and also a few refactoring quick actions. Now you can generate getters and setters for properties, shorten class names if possible, or implement missing abstract functions or whole interfaces.
 
## And more ...

All the other fixes, new features, and improvements are listed in the changelog. 

