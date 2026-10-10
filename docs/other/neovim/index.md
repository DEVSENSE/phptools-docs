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
