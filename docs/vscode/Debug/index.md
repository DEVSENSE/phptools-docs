/*
Title: Debug Overview
Description: 
*/

# Debug Overview

Debug integration allows for debugging your local develoment server and remote server.

Please refer to [Xdebug](https://xdebug.org/) for more details on debugging configurations. Xdebug is the backend of PHP Tools debugging integration.

## Initial setup

Requirements:

- PHP 5.6 or newer with compatible Xdebug extension

Checklist:

- Ensure Xdebug is properly configured: run `php --version` and check the last line is `with Xdebug`.
- Ensure `php.ini` states following directives:

```
xdebug.remote_enable = 1
xdebug.remote_autostart = 1 // or append `XDEBUG_SESSION_START=1` parameter to the URL of page you want to debug
```

## Features

Deugging features following:

- Stepping by line, step in, step out
- Putting breakpoints, conditional breakpoints, break on hit count
- Logging breakpoint hit into 'Debug console'
- Breaking on exceptions, warnings and errors
- Specifying non-user files (exceptions won't break debugging, stepping through)
- Watch tool tips
- Listing locals and superglobals
- Editting variable or property value, handling long string values efficiently
- Long arrays watch efficiently
- Debug watch expands objects and arrays
- Evaluating code in 'Debug console'
- Debug launch profiles
- Built-in web development server
- Debugging of 'PHP Unit' test cases

## Troubleshooting

## Related links

- [Xdebug.org](https://xdebug.org/)
