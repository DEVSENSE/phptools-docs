/*
Title: PHP Debugging on Linux
Description: Xdebug setup on Linux.
*/

# Xdebug setup on Linux

To debug php applications with PHP Tools for Visual Studio Code, it is necessary to install and enable Xdebug extension in PHP and set *remote_enable* and *remote_autostart* to true.

There are other ways to a remote debugger, like cookies, query parameters or browser extensions. See the [Xdebug documentation on remote debugging](https://xdebug.org/docs/remote#starting) for more information.

## Step-by-step guide

Install XDebug I highly recommend you make a simple test.php file, put a phpinfo(); statement in there, then copy the output and paste it into the XDebug installation wizard. It will analyze it and give you tailored installation instructions for your environment. In short: 
On Windows: Download the appropiate precompiled DLL for your PHP version, architecture (64/32 Bit), thread safety (TS/NTS) and Visual Studio compiler version and place it in your PHP extension folder.
On Linux: Either download the source code as a tarball or clone it with git, then compile it.
Configure PHP to use XDebug by adding zend_extension=path/to/xdebug to your php.ini. The path of your php.ini is shown in your phpinfo() output under "Loaded Configuration File".
Enable remote debugging in your php.ini:

```
[XDebug]
xdebug.remote_enable = 1
xdebug.remote_autostart = 1
```
