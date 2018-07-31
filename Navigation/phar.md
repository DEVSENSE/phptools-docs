/*
Title: Phar Packages
Description: Opening and Navigating Phar packages
*/

# Phar Package

PHP comes with a built-in support for Phar packages. This allows to bundle a complete PHP library or an application into a single `.phar` file. It not only simplifies the distribution but also keeps PHP projects clean and well organized.

The user of the package does not usually have to know what is inside the package or even how it works.

PHP Tools Editor provides seamless integration of Phar packages into PHP projects. It recognizes Phar packages contained in PHP projects, provides full IntelliSense of declarations from `.phar` files, navigation features allowing to jump and inspect specific file and location within Phar and even debugging support.

# Browsing Phar Package

Every `.phar` file in PHP project is expandable in the Solution Explorer. Clicking the arrow expands the package and reveals its content. Every file contained within the package can be inspected by double-clicking, which opens the standard Visual Studio editor associated with the corresponding file type.

![Browsing Phar Package](imgs/phar-browse.png)

# Navigating

The content of the Phar package is processed and its functions, classes and constants are handled by the PHP Editor navigation features. As the result, commands like *Go To Definition* <kbd>F12</kbd>, Navigate To <kbd>Ctrl+,</kbd> or Find All References <kbd>Shift+F12</kbd> navigate to declarations directly in the Phar package.

# IntelliSense

PHP Editor IntelliSense takes Phar packages into account and provides code completion, tool tips and signature helper for declarations in Phar packages as well.

![Phar IntelliSense](imgs/phar-intellisense.png)

