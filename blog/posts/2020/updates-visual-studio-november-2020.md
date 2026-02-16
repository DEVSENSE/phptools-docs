---
title: Updates for Visual Studio (November 2020)
description: "The latest update of PHP Tools brings a lot of improvements and fixes for PHP in Visual Studio since 2010 up to the latest Visual Studio 2019. We're keen to show you a few of them."
date: 2020-11-24 07:56:27
authors:
  - jakub
tags:
  - news
  - announcement
  - visual-studio
categories:
  - announcement
---

# Updates for Visual Studio (November 2020)

![Cover Image](imgs/fa06b736-db2a-43d5-86ac-dcbb4513a562.png)

The latest update of PHP Tools brings a lot of improvements and fixes for PHP in Visual Studio since 2010 up to the latest Visual Studio 2019. We're keen to show you a few of them.

<!-- more -->

---

## New PHP 8 Attribute Syntax

As the final PHP 8 release is getting closer, it seems we know the final syntax as well. During the alpha versions there were various RFCs with various syntaxes. The final one is the hash with square brackets, as on the image above. PHP Tools respects it, provides tool tips, IntelliSense, and compatibility check in case you use PHP < 8.0.

![PHP 8 Attributes](imgs/9d00ae12-665b-470e-9de5-e5c9db348091.png)

## Laravel Project

There are a lot of improvements to either existing Laravel projects, or in case you are about to create a new one. The PHP Web Project wizard now provides a new project template - Laravel.

![New Web Project](imgs/959da0a4-05f7-4edf-a4e4-b94a9dbe7f77.png)

The new template creates an empty Laravel project, downloads and installs a selected version of PHP in case you don't have it, installs the appropriate version of Xdebug debugging extension, adds the Laravel composer package and the IDE helper package, and setups the project to be ready to run with the simple press of `F5` key.

![New Project with Laravel template](imgs/c97ca165-04b2-4f13-a8e1-2a1f9f40c598.png)

## Improved Code Analysis

Several more code analysis rules were added including a check for unused parameters and properties initializers type mismatch.

![Parameter Analysis](imgs/18cdcfe8-b428-4002-a862-0b95c999b698.png)

## Suppressing Warnings

You can newly annotate a function or a class with `@suppress` PHPDoc tag. This tells the editor to ignore specified warnings. The allowed PHPDoc tags are `@suppress` or `@SuppressWarnings` followed by the error code.

![suppress PHP errors in Visual Studio](imgs/396af091-3365-48d1-84d5-ded8fc869e85.png)

Additionally, there is the new `.editorconfig` file support that allows specifying ignored error codes globally.
 
## Code Suggestions

The editor checks for common typos and provides quick-fixes for them. This mainly includes common PHPDoc tags typos. This helps to keep code well organized and helps the editor to better understand your code.

![new PHP code suggestions](imgs/fe1d55b1-96ce-4be9-be91-dfd4b3d85841.png)

Additionally, the editor newly checks for type names in the context of its namespace context. In case you can make use of an existing use statement, it provides you with a suggestion.
 
## IIS Support

Projects can be now configured to run on Internet Information Services (IIS). The virtual directory of choice will be configured automatically, and PHP installed and configured.

![IIS Project](imgs/7e8f1ef4-94b7-47df-9366-ce05103f4993.png)

## Other Enhancements

Newly, the `@method` tags are correctly interpreted, fully colored, including IntelliSense.

![method PHPDoc tag](imgs/94807577-c0e1-4eb7-a4b5-2fbce8a9b236.png)

Additionally, the editor now understands Doctrine annotations, we have improved overall performance, fixed stability issues on Visual Studio 2012, and added new PHPDoc annotations for array types.
