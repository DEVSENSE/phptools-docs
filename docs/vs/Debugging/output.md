/*
Title: Output Window
Description: Using Output Window during debugging
*/

# Output Window

Visual Studio *Output Window* is used for various logging and informational messages.

*Output Window* can be opened from the Visual Studio menu `View` | `Output`.

## PHP Error Log

For **Built-in Web Server**, **IIS Express**, and **IIS**, the output window will attach to the PHP error log, and display any new content. PHP Error Log displays warnings, errors, and notices caused by the PHP code. This output works when running the project with or without debugging.

![php error log](imgs/output-php-error-log.png)

Additional text can be sent to the PHP Error Log with `error_log()` PHP function.

```php
<?php

error_log("test"); // this message will be sent to the PHP Error Log

```

> Note: The error log file is located at path specified with `error_log` PHP INI directive.

## Debugger Log

The debug session is logged in the *Output Window*, the tab *Debug*. This panel lists the debugging events, requests, and handled errors and exceptions.

![degug session log](imgs/output-debug.png)

> Use this panel to ensure the debugging is configured properly, and there are no unexpected issues with the Visual Studio debugging.
