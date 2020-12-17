/*
Title: Debugging Overview
Description: 
*/

# Debugging overview

PHP Tools for Visual Studio extends Visual Studio with PHP debugging capabilities. The debugging engine takes advantage of the [Xdebug](http://xdebug.org) PHP extension. 

For general information about debugging with Visual Studio, see [Debugging in Visual Studio](https://msdn.microsoft.com/en-us/library/sc65sadd.aspx).

## Requirements

 - Xdebug must be configured within your PHP installation in order to make the debugging function working. For more information, see [Configuring Xdebug](debugging/configuring-xdebug)

 - Xdebug extension must operate on the TCP port specified in the PHP Tools options page. And your firewall must be properly set up to allow communication through this port.

 - Use PHP Web Project or PHP Console Project (not ASP.NET Web Site)

## Visual Debugger

Visual Debugger allows you to examine the code while it is running and includes features that help you debug applications, including the following:

- **Breakpoints** - Breakpoints are places in the code where the debugger will stop the application, allow you to see the current data state of the application, and then step through each line of code. For more information, see [Breakpoints](debugging/breakpoints).

- **Stepping** - Once you have stopped at a breakpoint, you can run the code line by line (known as stepping through the code). Visual Debugger includes a number of features to help you step through your code, such as iterators that allow you to specify how many times to step through a loop before stopping again. For more information, see <PAVEOVER> Code Stepping Overview.

- **Data Viewing** - Visual Debugger gives you many different options for viewing and tracking data while the application is running. The debugger allows you to modify the data while the application is stopped in break mode and then continue to run the application with the modified data. For more information, see Viewing Data in the Debugger.

## Debugging a PHP Web Project

With a PHP Web project, you can start debugging by pressing <kbd>F5</kbd> (`Debug | Start Debugging`), which will launch the project as specified in the project properties (Startup page, Server).

Pressing <kbd>Ctrl+F5</kbd> (`Debug | Start  without Debugging`). Often, the code will run faster without the debugger attached, and starting it with these commands will also use the project settings.

### Supported Servers

The PHP Web Project has built-in support for several development servers to simplify development. Go to Project Properties (right click on Project Node in the **Solution Explorer**, then click on **Properties**) to specify the web server, which will be used when a user starts PHP Web Project.

- **PHP 5.4+ built-in web server** - a simple and fast web server used for web development. It can handle a single request at one time and has support for several document file types. There is more information at [PHP: Built-in web server](http://php.net/manual/en/features.commandline.webserver.php). The PHP Web Project utilizes the build-in web server, so the user can start debugging only by hitting the <kbd>F5</kbd> key.

- **IIS** - PHP Tools will configure virtual directory, folder permissions, handler, fastcgi mapping, and it also checks for PHP configuration automatically.

- **IIS Express** - PHP Tools allows the user to take advantage of IIS Express, which is a better option than **PHP build-in web server** as it can handle multiple requests at a time or you can take advantage of the **URL Rewriter Module**. PHP Tools will configure binding, virtual directory and it also checks for PHP configuration automatically.

- **Custom Web Server**. In case you have another web server, the options above are not sufficient. If you need to debug the PHP code remotely on another machine, it is possible by just to entering the server's URL. 
   > **Note**: If you choose this option, PHP Tools for Visual Studio is not able to check the configuration.

## Debugging Console Project

PHP Tools for Visual Studio enables debugging of PHP command-line applications.

To launch your script with certain command-line arguments, insert them as a Debug property.

Right-click on your project in the **Solution Explorer** and choose **Properties**, then select the **Debug** tab. Here, you can add the following options:

- Command line arguments
- PHP Options
- Working Directory

**Command line arguments** - This text will be added to the command used to launch your script, appearing after your scripts name. The first item here will be available to your script as `$argv[1]`, the second as `$argv[2]`, and so on. 

  > **Note**: The first argument $argv[0] is always the name that was used to run the script.

**PHP Options** are arguments for the php itself, and appear before the name of your script. e.g. -d foo[=bar] Defines INI entry foo with a value 'bar'.

The **Working Directory** property specifies the working directory from which the project is launched. 

## Features Summary
- Multi-session debugging, Remote debugging
- PHP, JavaScript and .NET debugging at once
- Breakpoints, Conditional breakpoints
- Step Into, Step Over, Step Out
- Quick Watch support, Add To Watch
- Edit values at run-time
- Watch, Autos, Locals, Immediate Window
- Call Stack Window
- Text View, HTML View, XML View of variables value
- Automatic file path mapping
