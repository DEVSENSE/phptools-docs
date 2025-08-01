/*
Title: Other IDEs Support
Description: PHP Tools support for alternative development environments and editors.
*/

# Other IDEs

PHP Tools are available for a wide range of development environments. In addition to dedicated integrations, we also provide a standalone Language Server package for building custom editor support.

## VS Code Compatible Editors

For **Cursor**, **VSCodium**, and similar editors. (see [docs](../vscode/))

Most forks of Visual Studio Code are compatible with the [PHP Tools for VS Code extension](https://marketplace.visualstudio.com/items?itemName=DEVSENSE.phptools-vscode).

The extension is also available on [open-vsx.org](https://open-vsx.org/extension/devsense/phptools-vscode), the open-source registry for VS Code-compatible editors.

## Zed IDE

The [Zed editor](https://zed.dev/) is designed for high performance and AI-powered collaboration. The PHP Tools extension brings advanced features such as IntelliSense, diagnostics, code actions, quick fixes, and Laravel IDE support.

### Enabling PHP Tools in Zed

Add the following to your Zed _settings_ to enable PHP Tools:

```json
"languages": {
  "PHP": {
    "language_servers": ["phptools", "!phpactor", "!intelephense"]
  }
}
```

To activate your license, add [`initialization_options`](https://zed.dev/docs/configuring-zed#lsp):

```json
"lsp": {
    "phptools": {
      "initialization_options": {
        "0": "{json from https://www.devsense.com/en/purchase/validation}"
      },
    }
}
```

### Settings

Add any setting into the `"initialization_options"` section. For example:

```json
"lsp": {
    "phptools": {
      "initialization_options": {
        "php.stubs": ["*", "zip", "zlib", "pcntl", "com", "composer", "wordpress"],
        "php.workspace.includePath": "file:///Users/me/projects/php_stubs"
      }
    }
}
```

The list of settings has not a documentation page (yet). In general they are the same as `php.` settings in VSCode's `settings.json`.

## Language Server Protocol (LSP)

Many editors support direct integration with language servers, often with minimal configuration.

The PHP Tools Language Server is available as a standalone [NodeJS package `devsense-php-ls`](https://www.npmjs.com/package/devsense-php-ls). Visit the [devsense-php-ls](https://www.npmjs.com/package/devsense-php-ls) for installation instructions and usage details.

## Resources

- [PHP Tools for VS Code on open-vsx.org](https://open-vsx.org/extension/devsense/phptools-vscode) - Installation files for VS Code-compatible editors.
- [PHP Tools Language Server on npm](https://www.npmjs.com/package/devsense-php-ls) - Standalone language server for custom setups.
- [PHP Tools for Visual Studio Downloads](https://www.devsense.com/en/download) - Installers for Microsoft Visual Studio and Visual Studio Code.