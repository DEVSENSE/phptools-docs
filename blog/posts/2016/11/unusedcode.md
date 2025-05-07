---
title: Unnecessary uses
description: Unnecessary use reporting in PHP Tools
date: 2016-11-14 00:00:00
authors:
  - admin
tags:
  - php
  - unused-code
  - visualstudio
cover_image: imgs/PHP_Tools_for_VS.jpg
categories:
  - general
---

# Unnecessary uses

We are working very hard to bring new features to PHP Tools so we can improve the user experience and usability. Today we introduce newly added highlighting of unnecessary use declarations.

<!-- more -->

---

PHP use declarations allow developers to simplify their PHP source code by eliminating long confusing names. 
However, they can also clutter the code if there is too many of them, especially if some of them are not necessary, like in the following example.

![UnnecessaryUses](imgs\UnnecessaryUses.png)

This example shows a file with multiple use declarations, where the unnecessary declarations are dimmed (partially transparent), just as they are in latest implementation of C#.

## Unnecessary uses

PHP Tools helps developers keep their code clean, we analyze all the uses and track those that are actually used to translate type, function or constant names.
Uses that are declared but not applied are displayed as partially transparent so they can be easily located.
Unnecessary aliases are fully functional; they offer tooltips and navigation. 
PHP Tools analyze the code continuously and once a use is applied; it is displayed normally as it is no longer unnecessary.

## Function and constant uses

Function and constant aliases, supported since PHP 5.6, are analyzed in PHP Tools as well. 
We track them even in more complex situations, like the one in the following example.

![CustomUses](imgs\CustomUses.png)

This simple file demonstrates the highlighting of use declaration for functions and constants.

The following statement requires the first and last use declaration, but the alias *bar* is not needed, because only simple function names (those without namespace prefix) are translated.

```php
Space\bar(ClassA::x, Constant);
```

For example, the following code would require the third use declaration.

```php
bar(2, 5);
```

## Group uses

Group uses are supported since PHP 7.0. PHP Tools support them along with all the other PHP 7.0 features.

We track all the uses in a group separately and we highlight those that are not necessary.
The entire group is reported, only when all its uses are not necessary.

![GroupUses](imgs\GroupUses.png)

This example highlights the functionality, *ClassB* is not used in the code and it is dimmed as the result, but the group is not, because *ClassA* is necessary.

We treat the same way lists of uses, like the one in last use declaration in the second example, where the second constant is never used.

---

We hope that you will use and enjoy this feature and we look forward to your feedback.
Latest version can be downloaded from [download](https://www.devsense.com/download).
