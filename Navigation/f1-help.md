/*
Title: F1 Help
Description: Using help navigation (F1)
*/

# F1 Help

The help feature opens a web page with help corresponding to a symbol under the keyboard cursor. If help URL cannot be determined, informational message box is displayed instead.

The help web page is opened by pressing <kbd>F1</kbd> while the keyboard cursor is placed within a word of interest, inside the word, at its beginning or end.

By default, the help works for standard PHP functions, constants, classes, interfaces and most keywords. Moreover, the help works for class and interface members (class functions, properties and class constants), if the editor is able to recognize the member's class name.

In addition, help also looks at user's defined functions, classes and constants. In case their PHPDoc contains `@link` tag with URL, the URL is opened.
