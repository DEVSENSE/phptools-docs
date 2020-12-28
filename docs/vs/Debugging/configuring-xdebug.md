/*
Title: Configuring Xdebug
Description: Configuring Xdebug
*/

# Configuring Xdebug

The [Xdebug PHP extension](http://xdebug.org/) is required to allow PHP Tools to integrate debugging features into Visual Studio.

## Choose the Right Xdebug Binaries

Choose the version depending on your PHP version, but always **32bit**. It is strongly recommended to use the **non-thread safe** (NTS) version on Windows.

You can also use the tool provided by Xdebug developers: [Xdebug Wizard](http://xdebug.org/wizard.php). You can copy and paste your phpinfo output. It will give you the correct version to download.

## Copy Xdebug binary to your PHP Extensions Folder

PHP extensions folder is usually located within your PHP runtime, in `ext` subfolder.

Copy downloaded Xdebug binaries into the PHP extensions folder.

## Update PHP Configuration

Edit [PHP Configuration file](http://php.net/manual/en/configuration.file.php). Its name is usually `php.ini`, and it is located within your PHP runtime folder.

Add the following lines at the end of your configuration file depending on Xdebug version you have. Change the absolute path for Xdebug so it corresponds to the correct path on your system.

### Xdebug 2

```
[XDEBUG]
zend_extension = "C:\Program Files (x86)\php-5.4.8\ext\php_xdebug-2.2.1-5.4-vc9-nts.dll"
xdebug.remote_enable = on
xdebug.remote_handler = dbgp
xdebug.remote_host = 127.0.0.1
xdebug.remote_port = 9000
xdebug.remote_mode = req
xdebug.idekey="php-vs"
```

### Xdebug 3

```
[XDEBUG]
zend_extension="C:\Program Files (x86)\PHP\v8.0\ext\php_xdebug.dll"
xdebug.mode=debug
xdebug.client_host = 127.0.0.1
xdebug.client_port = 9003
xdebug.start_with_request=trigger
```

> **Notice**:
>
> -  From PHP 5.3 onwards, you need to use `zend_extension` and not `zend_extension_ts`.
> - **Xdebug** is incompatible with the Zend Optimizer and Zend Studio Debugger extensions. These extensions should be commented out.
> - PHP Tools for Visual Studio has a configuration check feature that can recommend and apply configuration changes depending on your system.

`xdebug.remote_port` setting has to be the same as in PHP Tools options (in Visual Studio, `Tools | Options | PHP Tools | Advanced`). The default value is `9000` (For Xdebug 3 it's `9003`) and it is usually enough just to leave it as it is.

> **Note**: **nginx** server using **FastCGI** may block port `9000` by default. Change **Xdebug** port to `9001` both in `php.ini` and in Visual Studio settings. Note that restarting **nginx** will not reload `php.ini`! You will need to restart **PHP**, or your server.

## Verify Installation

To verify your **Xdebug** installation, follow these steps:

1. Create a simple PHP file containing the following: 
```php
<?php phpinfo(); ?>
```

2. Open the corresponding URL in your browser.
3. You should see the **Xdebug** section in the output.

If you do not see the section above in your phpinfo output, there may be something wrong with your PHP configuration or you may need to restart your web server to let PHP update its configuration. If PHP Tools debugging session was started before a configuration change, it is recommended to close it by exiting its systray icon or restarting Visual Studio.
