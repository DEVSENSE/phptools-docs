---
title: PHP Tools for Visual Studio (Late October 2021)
description: "Introducing PHP Tools for Visual Studio - v1.57 ."
date: 2021-10-26 12:07:48
authors:
  - jakub
tags:
  - php
  - visual-studio
  - visual-studio-2022
  - publish
  - debug
categories:
  - announcement
---

# PHP Tools for Visual Studio (Late October 2021)

![Cover Image](imgs/phptools-v1-57-oct.png)

Introducing PHP Tools for Visual Studio, version 1.57! This update brings the new **Object ID** support in debugger, **Project Events**, improvements to **Remote Explorer** and corresponding remote profiles, and improves overall stability and existing features.

<!-- more -->

---

## Debugger

This update improves the existing debugger functionality and adds new features. Neat improvements are:

- the ability to add static properties to Watch window,
- distinguish static properties in Watch Window with a new icon,
- to set protected and private properties values,
- and tracking objects with `Make Object ID` below.

### Make Object ID

The new debugger feature allows **marking an object** from Watch Window or Quick Watch using `Make Object ID` context menu command. The marked object can be tracked during the whole request execution.

![make object id](https://www.devsense.com/content/updates/vs/imgs/make-object-id.png)

Marking an object creates a weak reference which can be always revealed in **Locals** window or in **Watch** window using **`$1`** alias (or `$2`, `$3`, ... correspondingly). Marked objects are also marked in quick watches by its {$-index} alias. This works even within arrays and inside other objects.

![watch object id](https://www.devsense.com/content/updates/vs/imgs/watch-object-id.png)

### Complex Expressions

Newly, the Watch and the Immediate Window allow expanding complex expressions, including results of function calls, magic properties, and complex combinations with operators.

![expand complex expressions](https://www.devsense.com/content/updates/vs/imgs/evaled-expr-expand.png)

Also, array values as a result of such complex expressions can be now expanded and listed through all its entries. It is not limited to 32 entries anymore.

## Editor

IntelliSense tool-tips and error tool-tips are now shown even during debugging. Previously, tool-tips were only displayed when Visual Studio was in design mode (not debug mode).

## Project Events

An important part of the project workflow is automatization. With the new update, there are customizable [`Project Events`](https://docs.devsense.com/en/vs/project/project-events) allowing to trigger commands upon certain events. Open the `Project Events` in Project Properties:

![project events](https://www.devsense.com/content/updates/vs/imgs/project-events.png)

Creating or editing events looks like the following dialog.

![project event UI](https://www.devsense.com/content/updates/vs/imgs/files-changed-event.png)

Initially, there are the following triggers:

- `Project Opened` gets triggered when a project is opened in Visual Studio.
- `Before Publish` is called before publish (i.e. upload pending changes) gets started.
- `After Publish` gets called after the publish.
- `After Clean` is triggered by Project / Clean command.
- `Files Changed` happens when a file is modified both inside or outside Visual Studio.
- `File Saved` is caused by saving a file inside Visual Studio.

And the following actions to choose from:

- `Publish` uploads pending changes using a selected remote profile. In the case of `File Saved` only that file is uploaded.
- `Custom Command` allows entering custom cmd commands. The commands have `php.exe` (chosen on `Application` project property page) in its %PATH% environmental variable.

## Remote Explorer

The Publish and the whole Remote Explorer are more configurable now. Open the [Remote Explorer](https://docs.devsense.com/en/vs/project/remote-explorer) and follow the `Manage` button.

It is now possible to specify wildcard file mask to simply ignore files or folders from being tracked by the Remote Explorer. Folders or files matching the *Ignored* wildcards won't be shown and won't be uploaded to the remote servers.

Secondly, there is an option to choose `Publish Scope`; whether to track the whole project directory (`All Files in Project Folder`) or to track files included in the project, i.e. the files shown in the project in Solution Explorer (`Files Included in Project`).

![new remote profile settings](https://www.devsense.com/content/updates/vs/imgs/remote-profile-source-ignore.png)

Finally, the Remote Explorer respects the legacy setting - **`Publishable`** - which could be set in project items properties. File items annotated with this project property are ignored by the Remote Explorer. This feature requires you to set the `Publish Scope` to `Files Included in Project`.

## Automatic Publish

We have made improvements when configuring automatic uploads to the remote server. It is more configurable, using the new **Project Events**, and the option is more accessible.

![automatic publish](https://www.devsense.com/content/updates/vs/imgs/remote-explorer-auto.gif)

Open the [Remote Explorer](https://docs.devsense.com/en/vs/project/remote-explorer) and change the `Auto` setting.  Clicking `Manage Project Events` opens all the project events, where additional settings can be changed.

## Visual Studio 2022

### Phar Browser with Icons

Expanding `.phar` files in Solution Explorer reveals corresponding file icons as well now. See the screenshot below:

![expanded phar file](https://www.devsense.com/content/updates/vs/imgs/phar-expanded.png)

## Fixes

- Rename refactoring correctly replaces class names within `extends` and `implements`.
- Fixed opening project properties on VS 2022.
- Fixed `Remote Explorer` to correctly create directories on SFTP server.
- Fixed `Remote Explorer` to be working with **Open Folder** feature.
- Fixed `Remote Explorer` UI glitches.
- Adds more logging during the remote publish process.
- Fixes some errors locations, e.g. the warning about overflowing an integer number into a floating-point number.
  ![integer overflow warning](https://www.devsense.com/content/updates/vs/imgs/big-number-error.png)


---

Please follow the [**Release Notes**](https://www.devsense.com/en/updates/vs/v1-57) for the details.

