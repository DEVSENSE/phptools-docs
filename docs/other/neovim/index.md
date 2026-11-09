/*
Title: Neovim
Description: PHP Tools integration into Neovim.
*/

# PHP Tools for Neovim

PHP Tools for Neovim is provided as a language server (LSP).

## Requirements

- Node.js: [nodejs.org/download](https://nodejs.org/en/download)
- Neovim: [neovim.io](https://neovim.io/)

## Install with Mason

[mason.nvim](https://github.com/mason-org/mason.nvim) installs the `devsense-php-ls` package from the [Mason registry](https://github.com/mason-org/mason-registry). The package provides the `devsense-php-ls` executable.

1. Install the server:
    ```
    :MasonInstall devsense-php-ls
    ```
2. Enable "phptools" config in your `init.lua`:
    ```
    vim.lsp.enable('phptools')
    ```

Optional: [mason-lspconfig](https://github.com/mason-org/mason-lspconfig.nvim) maps the nvim-lspconfig name `phptools` to the `devsense-php-ls` package. Add it to `ensure_installed` to install the server. Installed servers are enabled automatically:

```
require('mason-lspconfig').setup({
    ensure_installed = { 'phptools' },
})
```

The license key in [Registration](#registration) still applies.

## Installation

Install the server manually:

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

The same license key applies when the server is installed with Mason.
