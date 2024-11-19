/*
Title: EditorConfig
Description: Learn how to use EditorConfig in VS Code for PHP development to maintain consistent code style across your project. Ensure your PHP code adheres to standards like PSR-12, PSR-2, and custom formatting preferences.
*/

# EditorConfig

The PHP extension for VS Code supports the `.editorconfig` file, ensuring consistent coding styles across your project and your team. This document outlines how `.editorconfig` integrates with the PHP extension, the properties it recognizes, and how it takes precedence over `settings.json` for PHP-specific formatting. It also explains how to suppress diagnostics when needed.

## What is .editorconfig?

`.editorconfig` is a file format that helps to maintain consistent coding styles between different editors and IDEs. It allows developers to define coding rules such as indentation, character sets, and more, which can be enforced project-wide, or directory-wide.

## How Does `.editorconfig` Work with the PHP Extension in VS Code?

The PHP extension for VS Code leverages the `.editorconfig` file to apply consistent formatting rules to your PHP code. When a PHP file is opened or edited, the extension reads the `.editorconfig` file and applies the specified formatting rules, ensuring that your code is aligned with the project’s style guide.

## Priority of `.editorconfig` over `settings.json`

For PHP-specific formatting, `.editorconfig` takes precedence over `settings.json` in your workspace or user settings. This means that any PHP formatting rules defined in `.editorconfig` will override settings in `settings.json`. This ensures that the project-specific styles are enforced even if a user has different global settings in VS Code.

### General `.editorconfig` Directives:
These directives apply to all file types, including PHP, and control basic formatting settings:

- **`indent_style`**: Specifies whether tabs or spaces are used for indentation.
  - Values: `space`, `tab`
  - Default: `space`

- **`indent_size`**: Specifies the number of spaces per indentation level when `indent_style` is set to `space`.
  - Values: `2`, `4`, `8`, etc.
  - Default: `4`

- **`tab_width`**: Defines the width of a tab character when `indent_style` is set to `tab`. Defaults to `indent_size` if not set.
  - Values: `2`, `4`, `8`, etc.
  - Default: `4`

- **`end_of_line`**: Specifies the line-ending style.
  - Values: `lf`, `crlf`, `cr`
  - Default: `lf`

- **`charset`**: Defines the character set encoding for the file.
  - Values: `utf-8`, `utf-16le`, `latin1`, etc.
  - Default: `utf-8`

- **`trim_trailing_whitespace`**: Automatically removes any trailing whitespace from the end of lines.
  - Values: `true`, `false`
  - Default: `true`

- **`insert_final_newline`**: Ensures that a newline is inserted at the end of the file.
  - Values: `true`, `false`
  - Default: `true`

- **`max_line_length`**: Defines the maximum allowed line length. (Not supported yet)

### PHP-Specific Formatting Directives:

In addition to the general directives above, the PHP extension for VS Code supports several specific settings that control PHP formatting. These PHP-specific directives allow you to customize the appearance of your PHP code in greater detail.

For a complete list of PHP-specific `.editorconfig` properties, refer to our [customize formatting documentation](https://docs.devsense.com/en/vscode/editor/customize-formatting).

## Suppressing Diagnostics

You can configure and suppress diagnostics using the `.editorconfig` file for fine-grained control over PHP code warnings and errors. For full details on how to set up and adjust diagnostic severity, refer to the [Suppressing Diagnostics Documentation](https://docs.devsense.com/en/vscode/problems/suppressing-diagnostics).

Additional configuration options are available via `settings.json` or PHPDoc tags. See the full guide for more information.