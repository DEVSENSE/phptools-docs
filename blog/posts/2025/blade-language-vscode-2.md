---
title: Blade Language Support in VS Code (part 2)
description: "Our latest update 1.55 introduced several enhancements for Blade files and Laravel, let's take a look!"
date: 2025-01-19 12:18:19
authors:
  - jakub
categories:
  - annoucement
---

# Blade Language Support in VS Code (part 2)

![Cover Image](imgs/images.png)

In a [previous blog post](https://blog.devsense.com/2024/blade-language-support-vs-code-1), we introduced the initial Blade editor support for Visual Studio Code. This support brought a seamless integration of PHP editor language features into Blade files. Users could enjoy enhanced productivity with features such as mouse tooltips, PHP code completion, inlay hints, refactorings, code actions, and intuitive navigation within their Blade templates. These features significantly improved the development experience for Laravel applications.

<!-- more -->

Now, we are excited to announce an expansion of these capabilities! The latest update adds even more powerful features, including improved Blade file formatting, enhanced completion and navigation for Laravel and Livewire components, and extended completions for routes, views, and file paths within Laravel-specific functions.

## Components Completion

![blade component completion](https://docs.devsense.com/vscode/frameworks/img/blade-component-completion.png)

With this update, the editor performs a comprehensive scan of all `.blade.php` files within your workspace. It also resolves directories specified for views and view classes in your project configuration. As a result, developers now benefit from intelligent code completion and navigation for Blade components.

For instance, after typing a `<x-` tag, a `<livewire:` tag, or within `view()`-like functions, the editor will provide relevant suggestions and navigation to the corresponding components. This ensures faster development and reduces the likelihood of errors.

![component attributes completion](https://docs.devsense.com/vscode/frameworks/img/blade-attribute-completion.png)

Additionally, component attributes are seamlessly handled. Attributes defined as view class properties, `@props` directives in views, or parameters of Livewire's `mount()` method are intelligently suggested and navigable. This enhancement simplifies working with complex components and makes the development process more efficient.

## Views Completion

![blade view completion](https://docs.devsense.com/vscode/frameworks/img/view-completion.png)

The updated editor also improves suggestions for views using Laravel's kebab-case notation. Inside directives such as `@include` and similar constructs, as well as within `view()`-like functions, the editor provides precise suggestions for available views. This feature ensures that developers can quickly find and reference the desired view files, saving valuable time and minimizing errors in large projects.

## Named Routes Completion

![named route completion](https://docs.devsense.com/vscode/frameworks/img/laravel-route-completion.png)

For developers working with Laravel routes, this update brings significant enhancements to named route completions. When routes are defined with the `->name()` method, the editor will suggest these named routes in the `route()` function. This addition streamlines the process of referencing routes, making it easier to build robust and maintainable applications.

## See Also

- [Laravel Blade Support - Part 1](https://blog.devsense.com/2024/blade-language-support-vs-code-1)
- [Laravel Support Documentation](https://docs.devsense.com/vscode/frameworks/laravel/)

With these updates, the Blade editor for Visual Studio Code becomes an even more indispensable tool for Laravel developers. These enhancements aim to further simplify the coding process, reduce errors, and increase productivity, ensuring a smoother development journey for your Laravel projects.

