/*
Title: Xdebug on Linux
Description: Xdebug setup on Linux.
*/

# Xdebug on Linux

To debug PHP applications with PHP Tools for Visual Studio Code, it is necessary to install and enable Xdebug extension in PHP.

## Step-by-step guide

1. Install Xdebug

   - In [Debian-based Linux distributions](https://www.debian.org/) like Ubuntu, run the following command:
   
        ```
        sudo apt-get install php-xdebug
        ```

   - In [Fedora-based Linux distributions](https://getfedora.org/), run the following command:

        ```
        sudo dnf -y install php-xdebug
        ```

    - Commands for other Linux distributions are listed in [Xdebug documentation](https://xdebug.org/docs/install#linux)

2. Verify the installation

   ```
   php -v
   ```
   You should see output like this:

    ```
    PHP 8.1.7 (cli) (built: Jun  7 2022 18:21:38) (NTS gcc x86_64)
    Copyright (c) The PHP Group
    Zend Engine v4.1.7, Copyright (c) Zend Technologies
        with Zend OPcache v8.1.7, Copyright (c), by Zend Technologies
        with Xdebug v3.1.5, Copyright (c) 2002-2022, by Derick Rethans
    ```

   If the output contains Xdebug, you are done. If not, continue with the guide.

3. Locate `php.ini` by running the following command:
   ```
   php --ini
   ```

   The output should look similar to this:
    ```
    Configuration File (php.ini) Path: /etc/php/8.1/cli
    Loaded Configuration File:         /etc/php/8.1/cli/php.ini
    Scan for additional .ini files in: /etc/php/8.1/cli/conf.d
    Additional .ini files parsed:      /etc/php/8.1/cli/conf.d/10-opcache.ini,
    /etc/php/8.1/cli/conf.d/10-pdo.ini,
    /etc/php/8.1/cli/conf.d/20-calendar.ini,
    /etc/php/8.1/cli/conf.d/20-ctype.ini,
    /etc/php/8.1/cli/conf.d/20-exif.ini,
    /etc/php/8.1/cli/conf.d/20-ffi.ini,
    /etc/php/8.1/cli/conf.d/20-fileinfo.ini,
    /etc/php/8.1/cli/conf.d/20-ftp.ini,
    /etc/php/8.1/cli/conf.d/20-gettext.ini,
    /etc/php/8.1/cli/conf.d/20-iconv.ini,
    /etc/php/8.1/cli/conf.d/20-phar.ini,
    /etc/php/8.1/cli/conf.d/20-posix.ini,
    /etc/php/8.1/cli/conf.d/20-readline.ini,
    /etc/php/8.1/cli/conf.d/20-shmop.ini,
    /etc/php/8.1/cli/conf.d/20-sockets.ini,
    /etc/php/8.1/cli/conf.d/20-sysvmsg.ini,
    /etc/php/8.1/cli/conf.d/20-sysvsem.ini,
    /etc/php/8.1/cli/conf.d/20-sysvshm.ini,
    /etc/php/8.1/cli/conf.d/20-tokenizer.ini,
    /etc/php/8.1/cli/conf.d/20-xdebug.ini
    ```

   If there is a `ini` file with `xdebug` in the name, open that one. Otherwise create a new file in `conf.d` folder. You can name it `99-xdebug.ini` and copy the following content to the file:

   ```
   zend_extension="xdebug.so"
   xdebug.mode=debug
   ```
   
   > **Note** Make sure Xdebug configuration is present in the `php --ini` output after the `opcache.ini` configuration.

4. (Optional) You can turn `xdebug.start_with_request=yes` (in Xdebug 2 it was xdebug.`remote_autostart = 1`). This option will activate the debugger on each request. By default Xdebug initiates the debug session only when it's instructed to, e.g. when URL has  `XDEBUG_SESSION_START` query parameter. That might complicate scenarios like debugging AJAX requests.

5. Restart the webserver to reload the settings, if applicable.

## Things to try:

You should have Xdebug configured by now, you can try a simple scenario:

1. Open Visual Studio Code
2. Open a simple PHP file, like:

    ```
    <?php
    echo "hello world";
    ```

3. Add a breakpoint by pressing <kbd>F9</kbd> to a statement (*echo* in the example)
4. Start a debug session by pressing <kbd>F5</kbd> and selecting `Debug Current script in Console`
5. The breakpoint gets hit

## See Also

- [Debug Overview](.)
- [Launch Configurations](launch-json)
