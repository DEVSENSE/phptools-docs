---
title: PHP Tools for VS Code (November 2020)
description: "New PHP 8 attribute syntax, more code suggestions, more PHPDoc annotations, suppressing warnings, more quick code fixes, and improved code analysis; those are the highlights of the recent updates."
date: 2020-11-09 09:29:15
authors:
  - jakub
tags:
  - php
  - updates
  - visual-studio
  - vscode
  - code
categories:
  - annoucement
---

# PHP Tools for VS Code (November 2020)

![Cover Image](imgs/phptools-vscode-512x.png)

We are keeping updating PHP Tools for VS Code. Scroll down and check out new features and improvements, we have added for the VS Code development platform.

<!-- more -->

New PHP 8 attribute syntax, more code suggestions, more PHPDoc annotations, suppressing warnings, more quick code fixes, and improved code analysis; those are the highlights of the recent updates.

---

## Code Suggestions

New quick fixes and name-checks lets you simplify your code in case it is possible. This takes into account the existing type aliases and namespaces.

![php typo suggestion](imgs/a8768c31-5e41-46dd-aab2-f83fd847da43.png)

Eventually, there are common typos in PHPDoc which are usually ignored by the IDE, and as a result, you are not benefiting from it at all. PHPTools recognize the common typos we've seen in various open-source projects, and lets you to fix them within a simple quick fix.
 
![name can be simplified suggestion](imgs/713da9d0-ffec-4f3b-87c3-e6da03680ed9.png)
 
##PHPDoc annotations

The recent updates recognize a less common PHPDoc annotations for array types, such as `bool[string]` or `array<string>` or similar, sometimes used by various projects.

![@suppress PHPDoc tag](imgs/4611bdb5-ef28-4bbf-96e3-cadb4f61856a.png)

Additionally, it is now possible to suppress specified warnings in your code; for instance, the code above does not return a string as suggested in the PHPDoc - you can now suppress it so no warning will be generated for it.

## PHP 8 Attributes

![new php 8 attribute syntax](imgs/5c85d56c-793d-4911-94fb-867820c09d18.png)

The new version of PHP is coming. In case you're about to its new features, we got it covered. Attributes are supported by code completion, navigation, and code analysis. 
