/*
Title: PHP Tools for Visual Studio 1.25
Description: PHP Tools for Visual Studio, 1.25
Template: blog
Author: Jakub Misek
Date: 2017/11/26
Tags: PHP, news, release, VS2017, Twig, Phar
*/

Check out the latest update of PHP Tools for Visual Studio which brings several interesting features and enhancements.

## Twig Templating

We newly provide Twig templates editor with contextual code completion, tool tips, navigation, error checking, snippets, outlining, code colorization, reference highlighting and more.

The editor automatically finds out that your projects does not have a Twig framework installed and gives you one-click option to install it. It understands your code and provides you even with your custom user extensions such as variables and filters.

![Twig Templating](img/twig_templating.png)

There is also a new feature for fine tuning your code called Twig Split View; where you see what actual PHP code is produced from your template and matches cursor in source Twig with position in generated code. In this way developers can really understand the Twig.

For more information please see [https://docs.devsense.com/editor/twig](https://docs.devsense.com/editor/twig).

## Phar Explorer

Every `.phar` file included in PHP project is processed. Its content can be seamlessly expanded right in the Solution Explorer to see files inside the package. Files can be browsed, searched and opened. Also all the navigation features like IntelliSense, Navigate To or Tool Tips provide you with functions and classes from the Phar files now.

See [https://docs.devsense.com/navigation/phar](https://docs.devsense.com/navigation/phar) for more info.

# PHP 7.2 ready

We are ready for PHP 7.2 release. If you install it by yourself now, the editor already understands its new syntax. For the next major release of PHP Tools we are preparing a lot of analysis features that will help you with migration from older versions of PHP to the newer standards.

## Improvements

Additionally there are hundreds of enhancements to PHP Tools. We have improved the memory usage and UI on High DPI displays. Also refactoring and code parser were fixed based on users feedback.

## Visual Studio 2017

The update supports Visual Studio 2017 and fully integrates PHP into this industry standard development environment. Please note, the installation package for VS 2017 comes as a separate file.

More at [https://www.devsense.com/download](https://www.devsense.com/download).