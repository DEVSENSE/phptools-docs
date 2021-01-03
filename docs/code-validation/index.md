/*
Title: Code validation
Description: Code validation reference.
*/

# Code validation reference

All the range of *DEVSENSE* products provide the code validation feature. Based on our smart type analysis, heuristics and fine tuned validation rules, the list of diagnostics is populated. See sub-sections for detailed reference of reported diagnostics.

## Configuration

### .editorconfig

Example `.editorconfig` file:

```
[*.php]
php_diagnostic_php6401 = false
php_diagnostic = true
```

### @suppress tag

Following PHPDoc tags allows to suppress warnings in the associated function block or class block:

- `@suppresswarnings`
- `@suppress`
- `@suppresswarning`

Suppressed error codes can be specified separated by spaces or commas. Example code:

```php
<?php

/**
 * @suppress PHP6401
 */
function foo() {
    // something with error 6401, won't be reported
}

```
