/*
Title: Xdebug on Mac
Description: 
*/

# Xdebug on Mac

To debug PHP applications with PHP Tools for Visual Studio Code, it is necessary to install and enable Xdebug extension.

There are multiple ways how to install Xdebug on macOS:
 - Compile it from the source code. We have prepared the detailed step-by-step tutorial how to do that. Please continue [here](https://blog.devsense.com/2019/how-to-install-xdebug-for-phptools-for-vscode-on-mac)
 - Use PECL and [Homebrew](https://formulae.brew.sh/formula/php). The rest of the document will explain this approach.

## Step-by-step guide

1. Install [Homebrew](https://brew.sh/)

   In the terminal enter the following command:
   
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. Install PHP through [Homebrew](https://formulae.brew.sh/formula/php). 

    Following command will get you the most recent PHP version:
    ```
    brew install php
    ```

3. Install Xdebug with PECL

   Choose which command to run depending on your Mac architecture:
   - **Intel**

      ```
      pecl install xdebug
      ```

   - **Apple M1**
      
      ```
      arch -arm64 sudo pecl install xdebug
      ```

      or if PHP was compiled for x86_64 architecure, then run this command:
      ```
      arch -x86_64 sudo pecl install xdebug
      ```

4. Verify the installation

   ```
   php -v
   ```
   You should see output like this:
   ```
   PHP 8.0.17 (cli) (built: Mar 18 2022 09:45:09) (NTS)
   Copyright (c) The PHP Group
   Zend Engine v4.0.17, Copyright (c) Zend Technologies
       with Xdebug v3.1.3, Copyright (c) 2002-2022, by Derick Rethans
       with Zend OPcache v8.0.17, Copyright (c), by Zend Technologies
   ```

   If the output contains Xdebug - the PECL updated your `php.ini` then you are done. If not, continue with Step 5.

5. Locate `php.ini` and append Xdebug configuration:

   Run the following command to find the location of `php.ini` file
   ```
   php --ini
   ```

   The output should look similar to this:
   ```
   Configuration File (php.ini) Path: /opt/homebrew/etc/php/8.0
   Loaded Configuration File:         /opt/homebrew/etc/php/8.0/php.ini
   Scan for additional .ini files in: /opt/homebrew/etc/php/8.0/conf.d
   Additional .ini files parsed:      /opt/homebrew/etc/php/8.0/conf.d/error_log.ini,
   /opt/homebrew/etc/php/8.0/conf.d/ext-opcache.ini,
   /opt/homebrew/etc/php/8.0/conf.d/php-memory-limits.ini
   ```

   Open `/opt/homebrew/etc/php/8.0/php.ini` file and append the following lines(if not already present):

   ```
   zend_extension="xdebug.so"
   xdebug.mode=debug
   ```

   save and verify the installation again by running `php -v` command.

6. (Optional) You can turn `xdebug.start_with_request=yes` (in Xdebug 2 it was xdebug.`remote_autostart = 1`). This option will activate the debugger on each request. By default Xdebug initiates the debug session only when it's instructed to, e.g. when the URL has  `XDEBUG_SESSION_START` query parameter, which might complicate scenarios like debugging AJAX requests.
## See Also

- [Debug Overview](.)
- [Launch Configurations](launch-json)