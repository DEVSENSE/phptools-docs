---
title: Faster PHP Coding with IntelliPHP Autocomplete
description: Local AI-powered code suggestions for PHP in Visual Studio Code.
date: 2026-11-03
authors:
  - jakub
tags:
  - php
  - ai
  - vscode
  - intelliphp
  - productivity
categories:
  - tutorial
---

# Faster PHP Coding with IntelliPHP Autocomplete

Typing the same class names, method calls, and boilerplate over and over slows you down. **IntelliPHP** is an AI-assisted autocomplete feature built into PHP Tools for Visual Studio Code that suggests likely completions as you type — from short snippets to whole lines of code.

Unlike cloud-based assistants, IntelliPHP runs entirely on your local machine. No code is sent to an external server, there's no network latency, and it works even offline.

<!-- more -->

## What IntelliPHP Does

IntelliPHP suggests context-aware completions while you write PHP:

- Function and method names
- Class names and namespace members
- Variables and properties
- Whole code snippets with placeholders you can tab through

The model has been trained in-house on PHP code, so it's tuned for PHP-specific patterns and frameworks such as Laravel, Symfony, Drupal, and WordPress.

## Enable IntelliPHP

IntelliPHP is included with PHP Tools for Visual Studio Code. Install the extension from the marketplace:

[PHP Tools for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=DEVSENSE.phptools-vscode)

IntelliPHP is enabled by default. You can turn it on or off with this setting:

```json
"intelliphp.inlineSuggestionsEnabled": true
```

## Accepting Suggestions

When IntelliPHP offers a suggestion:

- Press <kbd>Tab</kbd> to accept the full suggestion.
- If you've partially typed, the first <kbd>Tab</kbd> completes the first part, and a second <kbd>Tab</kbd> finishes the rest.
- Press <kbd>Ctrl</kbd> + <kbd>Right Arrow</kbd> to accept just the current word.
- Keep typing to dismiss a suggestion that doesn't fit; a new one may appear.

![IntelliPHP snippet navigation](https://docs.devsense.com/vscode/ai/imgs/intelliphp-vscode.gif)

Because IntelliPHP identifies the parts of a suggestion that need your input, pressing <kbd>Tab</kbd> moves the cursor between input locations until the snippet is complete.

## Local and Fast

IntelliPHP runs on the CPU — no GPU required — so there's no round-trip to a server and no per-token latency. Your code stays on your machine, which makes it a good fit for private or proprietary projects.

## Troubleshooting

If you don't see suggestions:

- Confirm `editor.inlineSuggest.enabled` is `true` in your VS Code settings.
- Check the **OUTPUT** panel, tab **IntelliPHP**, for log output.
- Verify your license state with the **`IntelliPHP: About ...`** command.

## Related Links

- [IntelliPHP documentation](https://docs.devsense.com/vscode/ai/intelliphp/)
- [Starred Suggestions (AI ranking)](https://docs.devsense.com/vscode/ai/starred-suggestions/)
- [PHP Tools for VS Code on the marketplace](https://marketplace.visualstudio.com/items?itemName=DEVSENSE.phptools-vscode)
