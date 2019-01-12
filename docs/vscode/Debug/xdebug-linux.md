/*
Title: PHP Debugging on Linux
Description: Xdebug setup on Linux.
*/

# Xdebug setup on Linux

To debug php applications with PHP Tools for Visual Studio Code, it is necessary to install and enable Xdebug extension in PHP and set *remote_enable* and *remote_autostart* to true.

There are other ways to a remote debugger, like cookies, query parameters or browser extensions. See the [Xdebug documentation on remote debugging](https://xdebug.org/docs/remote#starting) for more information.

## Step-by-step guide

1. Install Xdebug (```apt-get install php-xdebug``` in Ubuntu).
2. Configure PHP to use Xdebug by adding ```zend_extension=path/to/xdebug``` to your *xdebug.ini*. The config file can be found by running ```locate xdebug.ini``` (in Ubuntu with PHP 7.2 it is located in */etc/php/7.2/mods-available/xdebug.ini*). The line should already be there, just make sure it is.
3. Enable remote debugging in *xdebug.ini* by adding the following code:

```
xdebug.remote_enable = 1
xdebug.remote_autostart = 1 // or append `XDEBUG_SESSION_START=1` parameter to the URL of page you want to debug
```

4. Restart webserver to reload the settings, if applicable.
5. Verify the installation by checking the Xdebug section in phpinfo().
6. Verify compatibility with PHP Tools:
    1. Open Visual Studio Code
    2. Open a simple PHP file, like:

    ```
    <?php
    echo "hello world";
    ?>
    ```

    3. Add a breakpoint to a statement (*echo* in the example)
    4. Start a debug session using the configuration *Launch current script in Console*
    5. The Xdebug is properly setup, if the breakpoint is hit
