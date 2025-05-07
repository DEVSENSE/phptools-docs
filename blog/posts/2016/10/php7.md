---
title: PHP Tools with PHP 7 support
description: "PHP Tools with built-in PHP 7 and more"
date: 2016-10-03 00:00:00
authors:
  - jakub
tags:
  - php
  - php7
  - visualstudio
cover_image: imgs/phptoolsnewversionblog.jpg
categories:
  - general
---

# PHP Tools with PHP 7 support

PHP 7 proves it is faster and more secure than PHP has ever been. We are happy to announce the public availability of PHP 7 support into Visual Studio, including code colorization, IntelliSense, debugging, refactoring, unit testing and all the Visual Studio features you like.

<!-- more -->

---

![php7-transparent](imgs\php7-transparent.png)

## Background

Before we introduce all the yummy features we've prepared for you, let me tell you about the hard work we had to do.

First, we had to develop a completely new language parser. It had to be able to process any PHP version since PHP 5.4, be fast, memory efficient and extensible. Our new parser is ready for much more than we are currently doing, so stay tuned for plenty of new features we will be able to implement now. Since the parser is the core component of our product, almost every second line of our sources has been changed.

Second, there is a lot of information a developer needs to know during coding, like the declaration of all the functions and classes in PHP, in detail. We had to find a way of providing up to date information about PHP functions, possibly in your native language, in a natural and easy way. There is a lot of work and computer semantization involved in the precision of the information we serve in a little thing like a tooltip.

This is a big change and we will be happy for your feedback and ideas how to make thinks even better.

## PHP 7 Editor Features

The PHP Editor supports the full PHP 7 (and older PHP versions) syntax now. It includes the following:

* Function return types!

```php
function __toString() : string
```

* Primitive types type hinting, you can now specify int, float, string and bool as function parameter types.

```php
function foo(int $i)
```

* Anonymous classes

```php
$x = new class {
    function __invoke() {
	    // ...
	}
};
```

* New operators like null coalescing (??) or spaceship (<=>)

```php
if (($a <=> $b) == -1) echo $a ?? $default;
```

* And other syntactic improvements ...

In addition to syntax support
* PHP 7 code is highlighted
* types are colorized
* tooltips are nice and smooth, respecting your editor settings and PHP 7 notations
* refactoring looks at new PHP 7 constructs as well

## Code Validation Features

With the new PHP 7, there is also a new IntelliSense database included in PHP Tools. We have updated and annotated the whole PHP manual including information about supported PHP versions. Since PHP Tools 1.20, we recognize and underline pieces of code that are available only in a newer version of PHP than you actually use.

If you use the new return types or another construct not supported by your PHP, you'll be notified: 

![return_type_err](imgs\return_type_err.png)

Also if you use a function or a class, that is present only in a newer PHP, you'll get an immediate warning:

![newtype_err](imgs\newtype_err.png)

## Download

Get PHP 7 into your Visual Studio on [www.devsense.com/download](http://www.devsense.com/download).