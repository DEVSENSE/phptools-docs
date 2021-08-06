/*
Title: Configuration
Description: PHP project configuration options
*/

# Project Configuration

PHP project represents a single PHP website or a PHP console application. The project has configurable properties, specifying its required PHP version, startup options, additional include paths, and more.

Most of the properties are obtained from a corresponding `php.ini` which is already a part of PHP installation. It means the most important is to choose the right PHP executable to be used by the project.

Following is the list of configurable options:

## PHP Executable

In Project properties, tag `Server`, choose your PHP executable to be used internally and for purposes of built-in web server.

If not set, PHP Tools will set most appropriate PHP by itself. If PHP is not installed, PHP Tools will install PHP automatically.

![project PHP executable](..\Installation\imgs\phpproject-properties-server.png)

PHP executable affects what `php.ini` configuration file will be treated, and what `Language Level` is taken into account in editor and when analysing the code.

Additionally the correcponding `php.ini` is checked for errors and default configuration options are set according to directives in the file.

## PHP Version (Language Level)

PHP version treated by the editor and code analysis corresponds with the `PHP executable` (if not using a *Custom Web Server*).

In Project properties, tab `Application`, selecting `Langugae level:`, will change the way how editor treats the code. It also sets your `Runtime` to the corresponding PHP executable.

## Environment Variables

In case the code expects some environment variables to be set, for the development purposes, navigate to Project properties, tab `Settings`. Change the value of `Environment Variables` option, optionally comma-separated list of more values.

Note, this setting does not have affect when running a *Custom web server*.

## Include Path

In case the project have dependencies on an external folder (containing frameworks, PEAR, or 3rd party components), additional include paths can be set in Project properties, tab `Settings`. The option will have an effect for the code editor only (not when running the code), allowing you to have IntelliSense from scripts in external folders.

This option is useful when developing a plugin to a framework which is outside of the project folder.

## Web Root

In Project properties, tab `Application`, you can change `Web Root` configuration.

When running or debugging the project, it is possible the change it's root folder. By default it is the project root folder. The configuration can be an absolute or relative path (Example: `wwwroot`).

## Short Open Tags

The code editor and code analysis treats short open tags (`<?`) depending on the configuration. By default it is enabled when `Language Level` is `5.x`, and disabled for `7.0` and above.

When using the "Built-in Web Server", the correct configuration respects the directive `short_open_tag` in the corresponding `php.ini` configuration file.

The short open tag configuration can be forced by editting the PHP project file itself (`.phpproj` file). The following XML fragement has to be added/altered within the root XML node of the project `.phpproj` file:

```xml
<PropertyGroup>
  <LanguageFeatures>ShortOpenTags</LanguageFeatures>    
</PropertyGroup>
```

Reload the project within Visual Studio after modifying the project file.