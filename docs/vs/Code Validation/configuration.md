/*
Title: Configuration
Description: Diagnostics Configuration
*/

> This topic only applies to Visual Studio 2019 and later. Visual Studio 2017 and older do not support diagnostics filtering.

> The feature is supported since PHP Tools for Visual Studio, **Version 1.40.12066 and newer**.

# Diagnostics Configuration

Code diagnostics are highlighted in the code editor and in the Visual Studio's *Error List* tool window. Each reported diagnostic has an error code in form `PHPxxxx`, for example `PHP0412`. By default, diagnostics are reported with severity like *fatal error*, *error*, *warning*, or *message*. The severity can be altered in the configuration, or even suppressed.

![Visual Studio 2019 Error List](imgs/dev16-error-list.png)

## .editorconfig

In order to configure diagnostics, edit or create `.editorconfig` file within the project directory. The file can be nested in a sub-directory. For more information, see [docs.microsoft.com](https://docs.microsoft.com/en-us/visualstudio/ide/create-portable-custom-editor-options).

To configure a diagnostic, add section matching the file names applying to, by default it would be `[*.php]`.

```ini
[*.php]
php_diagnostic_php6401 = false
php_diagnostic = true
```

Add rules, according to the diagnostic error code.

### Rule format

Rules are in format `php_diagnostic_php[ERROR_CODE] = [VALUE]` (lower cased). Possible values are:

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

For all the diagnostics with any error code, use rule in format `php_diagnostic = [VALUE]`.

```ini
[*Test.php]
php_diagnostic = error
```

> Note, rule with the error code (`php_diagnostic_php[ERROR_CODE]`) has a precedence over the rule without the error code (`php_diagnostic`). 

> Code editor will always highlight fatal errors, even tho the error will be suppressed using `false`, `off`, `none`, or `silent` rule.

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
