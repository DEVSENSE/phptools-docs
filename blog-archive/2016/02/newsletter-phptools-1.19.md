/*
Title: PHP Tools 1.19 Release
Description: PHP Tools 1.19 Release Notes
Template: blog
Author: Jakub Misek
Date: 2016/02/09
Tags: newsletter, news, release, php
*/

We are happy to announce that the new version of PHP Tools for Visual Studio - 1.19 - is available.

Please visit the [downloads page](http://www.devsense.com/download) to download and for more information about the improvements we are introducing. 

## Improved Per-Project Properties

Project properties were extended. In the future, there will be much more to enable and configure.
For example, since version 1.19, it is possible to set the project **Web Root**; the relative path used as the web site root.

![Project Properties](img/app-props.png)

## Smart Issues Resolver

Every project and server configuration is checked to ensure the user won't have to deal with common issues. Both in project properties or during project launch (<kbd>F5</kbd>), issues are checked and automatic repairs are offered to the user.
Simply by clicking *Continue*, PHP is downloaded, php.ini directives fixed or common recommendations are applied.

![Project Issues](img/project-issues.png)

## IIS Express & SSL Support

This update improves IIS Express support as well. Together with general improvements and fixes, it is now possible to enable **SSL binding**.
In addition to new features, the web site configuration is checked for common problems and certificate issues. Furthermore, the selected PHP version is automatically downloaded and installed if applicable.

![IIS Express](img/iisexpress-props.png)

## Code Definition Window

A little used feature that makes programming easier; **Code Definition Window** allows users to view the definition of a symbol under the cursor continuously in a separate tool window. The default shortcut to open the window is <kbd>Ctrl+\,D</kbd>.
Typically the user moves the window to a second monitor to keep track of the definitions.

![Code Def Window](img/php-code-def-window.png)

## Optimizations

We are always trying to make programming fluent and well-arranged. While supporting bigger and bigger projects, hardware requirements should remain the same as before.
With version 1.19 we have introduced **major optimizations** - mainly lowering memory requirements. Up to 75% less system memory is used while providing the same coding experience.

![CPU & Memory Optimizations](img/optimization.png)

---

For more information see the [change log](http://www.devsense.com/download) or our [features page](http://www.devsense.com/features).