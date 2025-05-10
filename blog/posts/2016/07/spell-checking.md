---
title: Spell Checking in PHP Code
description: "Ensure that your source code, including strings and comments, is spelt correctly."
date: 2016-07-04 00:00:00
authors:
  - miloslav
tags:
  - php
  - spellchecking
cover_image: imgs/spell2.jpg
categories:
  - general
---

# Spell Checking in PHP Code

# Spell Checking in PHP Code

<!-- more -->

Visual Studio has various spell checking extensions that support PHP Tools for Visual Studio. They make sure that your source code, including strings and comments, is spelt correctly.

For this purpose we can recommend to install VSSpellChecker, which can be downloaded from Visual Studio gallery (https://visualstudiogallery.msdn.microsoft.com/a23de100-31a1-405c-b4b7-d6be40c3dfff). Make sure you install at least version 2016.5.28.0, which is the first version to support PHP Tools for Visual Studio.

## Fix a typo

When a misspelled word is detected, the plugin highlights the word and a smart tag is displayed with a set of possible corrections. You can accept some of those and the word will automatically be corrected. Or you can choose **Ignore Once** to ignore the word for this occurrence only, **Ignore All** to ignore it for all occurrences or **Add to Dictionary**. The extension then stops reporting the word.

![fix-a-typo](imgs\fix-a-typo.png)

## Change dictionary

The extension comes with different dictionaries for the main languages. You can change the dictionary in `Tools | Spell Checker | Edit Global Configuration`, In the **Global Dictionary** section, choose the language you want and click **Add**. Press <kbd>Ctrl + S</kbd>, to save the configuration. Then you may need to reopen files so that the changed configuration takes effect.

## More information

Detailed information about VSSpellChecker can be found on [https://github.com/EWSoftware/VSSpellChecker/wiki](https://github.com/EWSoftware/VSSpellChecker/wiki).
