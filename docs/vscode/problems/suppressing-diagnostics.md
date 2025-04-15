/*
Title: Supress Diagnostics
Description: Learn how to suppress or adjust PHP diagnostic problems using .editorconfig, settings.json, PHPDoc tags, and phpcs comments. Customize severity or ignore issues entirely.
*/

# Supress Diagnostics

Reported problems can be adjusted, their severity changed or the problem ignored completely. There are several ways of changing problems severity or suppressing them.

## `.editorconfig`

Most flexible way of configuring diagnostics; edit or create `.editorconfig` file within the project directory. The file can be nested in a sub-directory as well. For more information, see [docs.microsoft.com](https://docs.microsoft.com/en-us/visualstudio/ide/create-portable-custom-editor-options).

To configure a diagnostic, add section matching the file path and file name applying to, by default it would be `[*.php]`.

```ini
[*.php]
php_diagnostic_php6401 = false
php_diagnostic = true
```

Add rules, according to the problem error code.

### Rule format

Rules are in format `php_diagnostic_php[error_code] = [value]` (lower cased). Possible values are:

- `true`, `on`: the diagnostic will be listed with its default severity.
- `false`, `silent`, `off`, `none`: the diagnostic won't be listed.
- `fatalerror`: the diagnostic will be listed as fatal error.
- `error`: the diagnostic will be listed as error.
- `warning`: the diagnostic will be listed as a warning.
- `message`, `suggestion`: the diagnostic will be listed as a message.

```ini
[*.php]
php_diagnostic_php6401 = message
php_diagnostic_php6402 = false
```

For all the diagnostics with any error code, use rule in format `php_diagnostic = [value]`.

```ini
[*Test.php]
php_diagnostic = error
```

> Note, rule with the error code (`php_diagnostic_php[error_code]`) has a precedence over the rule without the error code (`php_diagnostic`). 

## settings.json

Problems can be disabled in VSCode's `settings.json` file.

### `php.problems.exclude`

The setting allows to exclude problems found in specified files or entire directories from being shown in *Problems* panel. There are two possible values:

```json
"php.problems.exclude" : {
    "path" : true,
    "path" : [1111, 2222],
}
```

- Boolean value `true` marks the files or directories matching given glob pattern `path` to be excluded in problems panel.
- Array value `[]` may contain only specific problem codes to be excluded within files matching the glob pattern `path`.

Any rules matching the same folder are merged, as depicted on the sample below. The sample disables all warnings in 'vendor' directory and disables additionaly one warning `PHP0406` in the entire project.

```json
"php.problems.exclude" : {
    "**/*" : [406],
    "vendor/" : true,
}
```

## @suppress PHPDoc tag

Problems can be suppressed for a specified function or a class only. Following PHPDoc tags allows to suppress warnings in the associated function block or class block: `@suppresswarnings`, `@suppress`, or `@suppresswarning`.

```php
<?php

/**
 * @suppress PHP6401
 */
function foo() {
    // something with error 6401, won't be reported
}
```

Suppressed error codes can be optionally separated by a comma or a space.

## `phpcs:ignorefile` comment

Using one of the comments below (including optional comment) disables error reporting:

- `// phpcs:ignorefile - this file is generated`
- `// phpcs:disable`, `// phpcs:enable`
