/*
Title: Configuration
Description: PHP Tools for VS Code configuration options.
*/

# Configuration

Configure PHP Tools for Visual Studio Code through VS Code settings. This page lists the major settings for language, debugging, code analysis, formatting, and more.

## Configuration options

The following major settings are introduced by the extension. Navigate to [VSCode's Settings](https://code.visualstudio.com/docs/getstarted/settings) to see or modify them.

Setting | Values | Description
---     | ---    | ---
`phpTools.language` | "en", "de", "es", "fr", "ja", "pt", "ro", "ru", "tr", "zh". | Specifies the language code of integrated documentation. If not set, the setting defaults to system's language.
[`php.version`](./php-version.md) | PHP version or a profile name defined in `php.executables` | Specifies the PHP version to be used by default by debugger, code analysis, and test explorer.
`php.stubs` | `"*"`, `"all"`, `"xdebug"`, `"imagick"`, `"com"`, `"wordpress"`, ... | Array of PHP extension names included in IntelliSense. `"*"` is the default set of extensions; `"all"` includes everything.
[`php.codeLens.enabled`](editor/code-lens.md) | `true`,`false` | Enables/disables code lenses in PHP files above functions, types, properties, and constants.
`php.debug.port` | number or array of numbers | Default Xdebug port. This value is used when `port` is not specified in `launch.json` settings or when debugging without an opened folder. Defaults to `[9003,9000]`.
[`php.executables`](./php-version.md#custom-php-paths) | Set of profile names and corresponding PHP executable path. | Defined profile names that can be chosen in `php.version` setting, or from the PHP version picker.
`php.executablePath` | Full path to the `php` executable, or not set. | Legacy option. Specifies the full path to the `php` executable that will be used within [test explorer](test-explorer.md), [debugging](debug/index.md), and to determine the PHP version for code validation.
`php.completion.autoimport` | "auto-import", "auto-import-grouped", "fqn", "none", "hide" | Configures how to treat completion of names outside the current namespace. See [auto-import](editor/auto-import.md).
`php.completion.starredSuggestions` | `true`,`false` | Enables or disables starred pre-select.
[`php.format.codeStyle`](formatting/code-styles.md) | "PHP Tools", "PSR-2", "PSR-12", "Laravel", "PER", "WordPress", ... | Code formatting profile.
[`php.problems.scope`](problems/configuration.md) | "none", "opened", "all" | What workspace folders get analyzed for problems. Default is `"opened"`. _Note, **fatal errors** and **parse errors** are always reported across the entire workspace._
[`php.problems.exclude`](problems/configuration.md) | Associative map of paths and whether to exclude them from problems checking. | Specifies what problems will be hidden in specified directories. It is possible to set `true` to ignore all problems, or an array of error codes. Sample: `{'/vendor/**':true, '/tests/**':[6501,6555]}`. See [problems configuration](problems/configuration.md).
`php.workspace.includePath` | {relative path} | Additional include path(s) for the code completion and code analysis. Separated with semi-colon.
`files.exclude` | Associative map of paths to be excluded from the project. | Specifies files that won't be processed by the code analysis engine (code completion, navigation, problems).
`php.files.exclude` | | File patterns that won't be indexed and/or searched in by the extension.
`search.exclude` | | File patterns not included in search results, i.e. 'find references', 'symbols in workspace', 'code lenses', find implementations'.
[`debug.inlineValues`](debug/index.md#debug-adornments) | `true`, `false` | Enables or disables showing values relevant to the currently debugged statement.

## License activation

If the extension is not activated, a pop-up window is shown during its first startup. It offers the following options:

- **I have the license key** lets you enter the license key and activate the extension.
- **Get trial** sends you an email with a 30-day license key.
- **More information** opens the [purchase page](https://www.devsense.com/purchase) with purchase and license information.

Once you obtain a license key, activate your copy of the extension using the **Command Palette** command **`PHP Tools: Activate License`**. Enter your license key and confirm with **Enter**. Activation requires an Internet connection.

## PHP Requirements

Testing and debugging features require [PHP](https://secure.php.net/) to be installed and configured. PHP 7.0 or newer is recommended; PHP 5.4 and newer are supported as well.

Running tests and the built-in development server requires `php` with the extensions `dom`, `json`, `mbstring`, and `xmlwriter`. Either install `php` globally so the `php` command works across the system, or set `php.executablePath` in VS Code Settings pointing to the PHP executable.

Debugging locally requires the [Xdebug](https://xdebug.org/) extension. See how to install and configure Xdebug depending on your operating system:

- [Xdebug on Linux](debug/xdebug-linux.md)
- [Xdebug on Mac](debug/xdebug-mac.md)
- [Xdebug on Windows](debug/xdebug-win.md)

### Recommended for Testing and Debugging Functionality

- PHP 7.0 or newer
- PHP extensions `dom`, `xsl`, `mbstring`
- PHP extension `xdebug`

## Related links

- [Problems configuration](problems/configuration.md)
- [PHPUnit Test Explorer](test-explorer.md)
- [Managing extensions in VS Code](https://code.visualstudio.com/docs/editor/extension-gallery) (visualstudio.com)
- [VS Code Settings](https://code.visualstudio.com/docs/getstarted/settings) (visualstudio.com)
