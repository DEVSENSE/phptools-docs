/*
Title: Go To Definition
Description: Using Go To Definition (F12)
*/

# Go To Definition

Having the keyboard cursor at a symbol and pressing <kbd>F12</kbd>, or right-clicking to a symbol and choosing `Go To Definition`, navigates the editor to the definition of the symbol if possible. If there are more possibilities, the *Find All Reference* window is opened with the list of possibilities.

## User Code

*Go To Definition* works within the project content, referenced composer packages and referenced projects. User files have to be added to the project. In case of non-standard file extensions like .inc or .php5, they have to be mapped to *PHP Editor* first in `Tools | Options | Text Editor | File Extensions`.

Navigating to a user-defined symbol (e.g. function, class or constant declared within the PHP project) opens the file within Visual Studio editor and moves the keyboard cursor at the beginning of the declaration.

## PHP Manual

*Go To Definition* works even for symbols, that are not declared within the PHP project, like built-in PHP functions, classes and constants (e.g. class Exception). When navigating to such symbols, the editor opens a generated file in read-only mode, containing PHP-like declaration of the symbol. The generated declaration contains detailed PHPDoc comments, the file has all the navigation features such as the Navigation Bar and others.

## Referenced Packages

When navigating to a symbol declared in a composer package, the corresponding file is opened in read-only mode. This prevents modifying the files that should only be updated through composer install/update commands.

## File Names

In case of a string value within `include`, `include_once`, `require` and `require_once`, the editor treats whole inclusion expression as a pattern, and tries to navigate to a file within the project that matches the pattern.

> **Note**: Navigation to the included file is available since version 1.18.

## See also

- [Navigation Bar](navigation-bar.md)
- [CodeLens](codelens.md)
- [F1 Help](f1-help.md)
