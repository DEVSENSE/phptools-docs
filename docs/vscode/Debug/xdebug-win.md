/*
Title: Xdebug on Windows
Description:
*/

# Xdebug on Windows

To debug PHP applications with PHP Tools for Visual Studio Code, it is necessary to install and enable Xdebug extension.

## With installer

[XAMPP](https://www.apachefriends.org) or [WAMPP](https://www.wampserver.com) will install and configure PHP, Xdebug and Apache server. 

## Adding Xdebug to existing PHP installation

If you already have PHP installed, but missing Xdebug, download binaries directly from [Xdebug](https://xdebug.org/download#releases)

Choose the version depending on your PHP version. You can use the tool provided by Xdebug developers: [Xdebug Wizard](http://xdebug.org/wizard.php). Copy and paste your `phpinfo()` function output or output of `php -i` command. The tool will give you the correct version to download.

Copy downloaded binaries into the PHP extensions folder(`ext` sub-folder of the PHP installation).

## Configuring Xdebug

You will need to edit [PHP Configuration file](http://php.net/manual/en/configuration.file.php)

You can locate it by running the following command:

```
php --ini
```

The command will output similar lines:
```
Configuration File (php.ini) Path:
Loaded Configuration File:         C:\Program Files\PHP\v8.1\php.ini
Scan for additional .ini files in: (none)
Additional .ini files parsed:      (none)
```

Open the `php.ini` file and make sure following lines are present:

```
[XDEBUG]
zend_extension="C:\Program Files\PHP\v8.1\ext\php_xdebug.dll"
xdebug.mode=debug
xdebug.client_host = 127.0.0.1
xdebug.client_port = 9003
xdebug.start_with_request=trigger
```

Alter the path to `php_xdebug.dll` according to your PHP installation and make sure it's an absolute path.

## Verify the installation

Verify the installation by running the following command:

```
php -v
```

The output should indicate both PHP and Xdebug is installed:

```
PHP 8.1.0 (cli) (built: Nov 23 2021 21:46:10) (NTS Visual C++ 2019 x64)
Copyright (c) The PHP Group
Zend Engine v4.1.0, Copyright (c) Zend Technologies
    with Xdebug v3.1.1, Copyright (c) 2002-2021, by Derick Rethans
```

## See Also

- [Debug Overview](.)
- [Launch Configurations](launch-json)
