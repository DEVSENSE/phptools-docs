/*
Title: Troubleshooting
Description: Troubleshoot most common issues with debugging PHP code in Visual Studio
*/

# Troubleshooting

This list shows common issues with the debugger and their solutions, so you can solve problems quickly. In case you could not find an answer here, please feel free to ask on our [Support forum](http://support.devsense.com).

## Checklist

- Run the following script:
```php
<?php phpinfo(); ?>
 ``` 
 
 Check whether **Xdebug** extension is loaded. The correct output is depicted bellow.

![phpinfo() output sample](imgs/troubleshooting-phpinfo-xdebug.png)

- Ensure `xdebug.remote_port` directive in `php.ini` is matching the settings in your Visual Studio (`Tools | Options | PHP Tools | Advanced`). 

![Remote port directive](imgs/troubleshooting-remote-port.png)

- Ensure you are using a **PHP Web Project**, not an **ASP.NET Web Site**. You can [convert web to the PHP project from menu](Project/from-existing-code).

## Using WAMP Server

WAMP setup installs its own PHP configuration. To use WAMP installation with PHP Tools, set up Custom Server in your project properties and ensure php.ini corresponding to your WAMP server is configured properly. PHP Tools does not check for php.ini in WAMP installation.

## Most Common Issues

### Browser Opens an Empty White Page

Ensure that your first loaded page is syntax-error-free, and that there are not two functions with the same name. The debugger does not handle parse error on the entering script.

### I get this message in the output window: "There wasn't established any directory mapping. Debugging most likely won't work correctly."

Make sure the file you are requesting as the first one is included in your project. Automatic mapping mechanism requires that a file is part of the project in order to map it correctly.

### I can't get the debugger to work. I'm running Zend Framework. Is that a known issue?

No, there are just a few things that have to be configured in order to be able to debug the Zend framework application with Xdebug:

Make sure ZendExtensionManager loads after **Xdebug** (switch the order in `php.ini`); or comment it out completely.
Turn off zend_optimizer.

### While using QuickWatch, Watch or Immediate window, debugging stops working

There is a known issue with **Xdebug** causing debugging sessions to stop working for the current request. You have to use `set_error_handler()` function to catch errors and to use QuickWatch, Watch or Immediate window to evaluate an expression throwing an error. This combination makes **Xdebug** unusable for the rest of the request.

As a workaround, it is recommended not to call `set_error_handler()` in your code when debugging. 

More at [xdebug.org/docs/faq](http://xdebug.org/docs/faq).

### "Stepping through code works, but PHP exceptions are not thrown in Visual Studio"

Check your `php.ini` for `xdebug.default_enable directive` and make sure it is set to 1 (this is a default value).

### "Debugger won't work when 'Don't open a page. Wait for a request from an external application' is set in the project settings."

The problem has to do with the fact that **Xdebug** is expecting a GET initialization string to be supplied in the URL request. The solution to this problem would be to instruct Xdebug to start the debug session by opening your project in your browser with `?XDEBUG_SESSION_START=1` query string or add 

```
xdebug.remote_autostart = 1
```

to `php.ini` file in the **Xdebug** configuration section which will force it to start on every request.
