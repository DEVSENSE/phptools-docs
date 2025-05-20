---
title: Update 1.58 for VSCode - news, technical improvements, language server, features
description: Version 1.58 of our extension for VS Code is moving forward.
date: 2025-03-24 07:30:09
authors:
  - jakub
tags:
  - php
  - language server
  - performance
categories:
  - annoucement
---

# Update 1.58 – Major Improvements, New Features, and a Fresh Foundation

We’re excited to announce the release of [**Update 1.58**](https://www.devsense.com/en/download/vscode#15817223) for our Visual Studio Code extension. This update comes on the heels of a major internal change in our technology stack and brings a suite of new features, improvements, and foundational enhancements for future development.

<!-- more -->

## 🚀 Background: New Stack, New Possibilities

After more than 15 years of development, we've finally moved our source code from the legacy **Team Foundation Server (TFS)** to **Git**. Hard to believe? Our journey began as a plugin for **Microsoft Visual Studio 2008**, hosted on platforms such as the now-defunct [**CodePlex**](https://en.wikipedia.org/wiki/CodePlex).

This transition opens the door to better workflows, easier collaboration, and future open-source components—although the core of our extension remains proprietary.

In parallel, we're upgrading the extension's runtime from **.NET 6** to **.NET 9**, starting with the next version. This change will bring several technical benefits, including:

* Improved performance
* Better compatibility with modern systems
* A more future-proof foundation for features to come

---

## 🧠 Refactoring: Method Overrides

One of the most requested features is finally here — [**Method Overrides**](https://www.devsense.com/en/download/vscode#method-overrides).

![method overrides](https://raw.githubusercontent.com/DEVSENSE/phptools-docs/master/docs/vscode/imgs/vscode-method-overrides.gif)

To use it:

1. Click on the class header.
2. Open the **Quick Fix** menu (💡 light bulb icon).
3. Choose **Override Methods**.
4. Select one or more methods from the quick pick panel and confirm.

This action simplifies the implementation of inherited methods and helps maintain consistency in your object-oriented code.

---

## ✨ Code Actions: Smarter Quick Fixes

We've improved how **code actions** and **quick fixes** work for selected text. Now, all occurrences within your selection can be grouped and fixed in one go.

![code actions](https://raw.githubusercontent.com/DEVSENSE/phptools-docs/master/docs/vscode/imgs/vsc-grouped-action.png)

Highlights:

* Select a portion of code
* Apply a quick fix or refactoring
* The changes are automatically applied to all matching parts

This streamlines cleanup tasks and enhances the existing **Auto-Fix** functionality.

---

## 🌐 Standalone Language Server: A Giant Leap

Until now, the [**PHP Tools for VS Code extension**](https://marketplace.visualstudio.com/items?itemName=DEVSENSE.phptools-vscode) has been tightly coupled with the editor itself. However, we’re now introducing an **experimental standalone Language Server (LS)**, based on the [**Language Server Protocol (LSP)**](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/).

While some advanced features like *Method Overrides* require tight editor integration, the standalone LS offers core functionality—making it usable in other environments and editors.

You can find the initial release here:
👉 [**npmjs.com/devsense-php-ls**](https://www.npmjs.com/package/devsense-php-ls)

**Why this matters:**
We’re opening the door for broader IDE support, improved flexibility, and exciting new integrations.

---

## 🧪 Experimental CLI Tool: `phpy`

As a proof of concept for our new standalone language server, we’ve created **`phpy`** — a command-line tool for analyzing PHP files.

It runs the language server internally and provides a summary of issues just like your IDE would.

### Install `phpy` globally with npm:

```bash
npm i -g phpy
```

Or check it out here:
👉 [**npmjs.com/package/phpy**](https://www.npmjs.com/package/phpy)

---

## 🔮 What’s Next?

The upcoming versions will take full advantage of **.NET 9**, delivering up to **\~15% performance improvements**.

And there's more:
We’re getting ready to release the long-awaited **"Extract Method"** code action — making your refactoring workflow even more powerful.

Stay tuned for more updates!

---

Thanks for using PHP Tools — your feedback helps shape the future of this extension.

Happy coding!
— The DEVSENSE Team

---

