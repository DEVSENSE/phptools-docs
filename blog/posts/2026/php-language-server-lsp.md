---
title: PHP Language Server for Other Editors (LSP)
description: Use devsense-php-ls in Neovim, Sublime Text, Zed, and other LSP-compatible editors.
date: 2026-11-03
authors:
  - jakub
tags:
  - php
  - lsp
  - language-server
  - neovim
  - sublime
  - zed
categories:
  - tutorial
---

# PHP Language Server for Other Editors (LSP)

You don't need Visual Studio or Visual Studio Code to get PHP Tools intelligence. The **devsense-php-ls** language server brings PHP IntelliSense, diagnostics, navigation, and refactoring to any editor that speaks the Language Server Protocol (LSP) — Neovim, Sublime Text, Zed, Antigravity, and more.

This guide shows how to install and connect the standalone PHP language server to your editor of choice.

<!-- more -->

## Install the Language Server

The PHP Tools Language Server is a Node.js command-line tool distributed on npm:

```bash
npm install --global devsense-php-ls
```

Verify it works:

```bash
devsense-php-ls -version
```

## Activate Premium Features

The language server supports a free tier and a premium tier (code actions, AI-powered completions, and more). Activate with a license key:

```bash
export DEVSENSE_PHP_LS_LICENSE=Your_License_Key
```

Or pass the key through your editor's LSP initialization options (see each editor section below).

## Connect to Your Editor

### Neovim

Install the language server globally, then enable the `phptools` config via `nvim-lspconfig`:

```lua
vim.lsp.enable('phptools')
```

In `./lsp/phptools.lua`, set `init_options`:

```lua
init_options = {
    ['0'] = '<YOUR_LICENSE_KEY>',
    'php.stubs' = { '*', 'wordpress', 'composer' },
}
```

### Sublime Text

Install Package Control and the LSP package, then add to `LanguageServers.sublime-settings`:

```json
{
    "phptools": {
        "command": ["devsense-php-ls"],
        "selector": "embedding.php",
        "initialization_options": {
            "0": "<YOUR_LICENSE_KEY>",
            "php.stubs": "*",
            "php.version": "8.5"
        }
    }
}
```

### Zed

Install the `php` extension in Zed, then add to your settings:

```json
"languages": {
  "PHP": {
    "language_servers": ["phptools", "!intelephense", "!phpactor"]
  }
},
"lsp": {
    "phptools": {
      "initialization_options": {
        "0": "Your_License_Key"
      }
    }
}
```

## Features You Get

Once connected, the language server provides:

- Code completion and IntelliSense
- Diagnostics and error checking
- Go to definition and find references
- Code actions and refactorings (premium)
- Inlay hints and hover information
- Workspace-wide code analysis

## Related Links

- [PHP Language Server documentation](https://docs.devsense.com/other/lsp/)
- [PHP MCP Server documentation](https://docs.devsense.com/other/mcp/)
- [Zed Editor PHP setup](https://docs.devsense.com/other/zed/)
- [Neovim PHP setup](https://docs.devsense.com/other/neovim/)
- [Sublime Text PHP setup](https://docs.devsense.com/other/sublime/)
