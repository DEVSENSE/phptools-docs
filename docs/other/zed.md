/*
Title: Zed IDE
Description: PHP Tools integration into Zed IDE.
*/

The [Zed editor](https://zed.dev/) is designed for high performance and AI-powered collaboration. The PHP Tools extension brings advanced features such as IntelliSense, diagnostics, code actions, quick fixes, and Laravel IDE support.

### Enabling PHP Tools in Zed

Go to Zed / Extensions, and install the extension `php`.

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
        "0": "Your_License_Key"
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
