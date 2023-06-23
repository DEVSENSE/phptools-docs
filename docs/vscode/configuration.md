/*
Title: Configuration
Description: PHP Tools for VS Code configuration options.
*/

## Configuration options

The following major settings are introduced by the extension. Navigate to [VSCode's Settings](https://code.visualstudio.com/docs/getstarted/settings) to see or modify them.

Setting | Values | Description
---     | ---    | ---
`phpTools.language` | "en", "de", "es", "fr", "ja", "pt", "ro", "ru", "tr", "zh". | Specifies the language code of integrated documentation. If not set, the setting defaults to system's language.
`php.version` | PHP version or a profile name defined in `php.executables` | Specifies the PHP version to be used by default by debugger, code analysis, and test explorer.
`php.stubs` | `"*"`, `"all"`, `"xdebug"`, `"imagick"`, `"com"`, ... | Array od PHP extension names which will be included in the IntelliSense. `"*"` stays for the default set of extensions, `"all"` for everything.
`php.codeLens.enabled` | `true`/`false` | Enables/disables code lenses in PHP files above functions, types, properties, and constants.
`php.debug.port` | number or array of numbers | Default Xdebug port. This value is used when `port` is not specified in `launch.json` settings or when debugging without an opened folder. Defaults to `[9003,9000]`.
`php.executables` | Set of profile names and corresponding PHP executable path. | Defined profile names that can be chosen in `php.version` setting, or from the PHP version picker.
`php.executablePath` | Full path to the `php` executable, or not set. | Legacy option. Specifies the full path to the `php` executable that will be used within [test explorer](test-explorer), [debugging](debug), and to determine the PHP version for code validation.
`php.completion.autoimport` | "auto-import", "fqn", "none", "hide" | Configures how to treat completion of names outside the current namespace. See [auto-import](editor/auto-import).
`php.format.codeStyle` | "PHP Tools", "PSR-2" | Code formatting profile.
`php.problems.scope` | "none", "opened", "user", "all" | What workspace folders get analyzed for problems. Default is `"user"` which excludes "/vendor" folder. _Note, **fatal errors** and **parse errors** are always reported across the entire workspace._
[`php.problems.exclude`](problems#configuration) | Associative map of paths and whether to exclude them from problems checking. | Specifies what problems will be hidden in specified directories. It is possible to set `true` to ignore all problems, or an array of error codes. Sample: `{'/vendor/**':true, '/tests/**':[6501,6555]}`. See [problems configuration](problems#configuration).
`files.exclude` | Associative map of paths to be excluded from the project. | Specifies files that won't be processed by the code analysis engine (code completion, navigation, problems).
`debug.inlineValues` | `true`, `false` | Enables or disables showing values relevant to the currently debugged statement.

## License activation

In case the extension is not activated, a pop-up window is shown during the extension's first startup. It gives the following options:

![Activate PHP Tools](imgs/activate-phptools-vscode.png)

- `I have the license key` lets you enter the license key section and activate the extension.
- `Get trial` sends you an e-mail with a 30-day license key.
- `More information` opens [this web page](https://www.devsense.com/purchase) with purchase and license information.

Once you obtain the license key and you close the pop-up window above, you can activate your copy of the extension using the VSCode's `Command palette`, command `PHP Tools: Activate License`. Enter your license key and confirm with `Enter`.

![Enter License Key](imgs/enter-license-key.png)

The activation requires an Internet connection. The successful installation is confirmed with the following pop-up window:

![Enter License Key](imgs/activation-succeeded-vscode.png)

## PHP requirements

Testing and debugging features require the [PHP](https://secure.php.net/) program to be installed and configured. It is recommended to use PHP 7.0 or newer; however, PHP 5.4 and newer are supported as well.

**Running tests and built-in development server** requires `php` with extensions `dom`, `json`, `mbstring` and `xmlwriter`. Either install `php` globally, so the command `php` will work across the system, or set `php.executablePath` setting within VSCode's Settings pointing to PHP executable.

**Debugging locally** requires the [Xdebug](https://xdebug.org/) extension. See how to install and configure Xdebug depending on your operating system:
- [Xdebug on Linux](debug/xdebug-linux)
- [Xdebug on Mac](debug/xdebug-mac)
- [Xdebug on Windows](debug/xdebug-win)

### Recommended

- PHP 7.0 or newer
- PHP extensions `dom`, `xsl`, `mbstring`
- PHP extension `xdebug` with the following options in your `php.ini`:
  - `xdebug.remote_enable = 1`
  - `xdebug.remote_autostart = 1`

## Related links

- [Problems configuration](problems#configuration)
- [Managing extensions in VS Code](https://code.visualstudio.com/docs/editor/extension-gallery) *(visualstudio.com)*
- [VSCode Settings](https://code.visualstudio.com/docs/getstarted/settings) *(visualstudio.com)*
