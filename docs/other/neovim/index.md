/*
Title: Neovim
Description: PHP Tools integration into Neovim.
*/

# PHP Tools for Neovim

PHP Tools for Neovim is provided as a language server (LSP).

## Requirements

- Node.js: [nodejs.org/download](https://nodejs.org/en/download)
- Neovim: [neovim.io](https://neovim.io/)

## Installation

1. Use Neovim Language Server [Quickstart Config](https://github.com/neovim/nvim-lspconfig):
    
    > [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)
2. Make sure the [Language Server](../lsp/index.md) is installed.
    ```
    npm i devsense-php-ls -g
    ```
3. Enable "phptools" config in your `init.lua`:
    ```
    vim.lsp.enable('phptools')
    ```

## Configuration

Open `./lsp/phptools.lua` and update `init_options` section. Valid configuration keys are:
- `['0']` = `'<YOUR_LICENSE_KEY>'` or license key offline signature
- any setting listed at [the configuration](../../vscode/configuration.md#configuration-options)

## Registration

Get any license key (both _Visual Studio_ and _Visual Studio Code_ are accepted) on our [purchase page](https://www.devsense.com/en/purchase).

Insert `<YOUR_LICENSE_KEY>` in the `"init_options"` above to enable additional premium features including [code actions](../../vscode/code%20actions/overview.md) and [starred suggestions](../../vscode/ai/starred-suggestions.md).