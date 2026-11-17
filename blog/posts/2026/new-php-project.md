---
title: Creating a New PHP Project in PHP Tools
description: Start a new PHP application from scratch, from Composer, or from existing code.
date: 2026-11-03
authors:
  - jakub
tags:
  - php
  - project
  - composer
  - getting-started
  - vscode
  - vs
categories:
  - tutorial
---

# Creating a New PHP Project in PHP Tools

PHP Tools helps you create a new PHP application and get it ready to run and debug — whether you start from an empty template, a Composer package, or existing source code.

<!-- more -->

## In Visual Studio Code

Open a folder with your PHP application, or create an empty one. PHP Tools activates when you open a `.php` file:

1. **Open Folder** with your PHP code.
2. Select your PHP version in the status bar (see [Selecting PHP Version](https://docs.devsense.com/vscode/php-version/)).
3. Install dependencies with Composer — open the Command Palette and run `Composer: install` or `Composer: require`.
4. Configure debugging with Xdebug if needed (see [Debugging](https://docs.devsense.com/vscode/debug/)).

## In Visual Studio

Use **File → New → Project** and choose a PHP project template:

- **PHP Web Project** — for browser-based applications (built-in server, IIS, IIS Express).
- **PHP Console Project** — for command-line scripts.
- **PHP Project from Existing Code** — for source already on disk.
- **PHP Project from Composer** — initializes from a Composer package via `composer create-project`.
- **PHP Project from Remote** — syncs files from a remote server.

The wizard installs PHP if needed, restores Composer packages, and configures the project so you can press **F5** to run or debug.

## Related Links

- [New Project (Visual Studio)](https://docs.devsense.com/vs/project/new-project/)
- [New Project from Composer](https://docs.devsense.com/vs/project/new-project-composer/)
- [New Project from Existing Code](https://docs.devsense.com/vs/project/from-existing-code/)
- [Installing PHP (Visual Studio)](https://docs.devsense.com/vs/installation/install-php/)
- [PHP Tools for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=DEVSENSE.phptools-vscode)
