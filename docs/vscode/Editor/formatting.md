/*
Title: Code Formatting
Description: Formatter will help you keep your PHP code in VS Code clean and maintain the preferred code style like PSR-12, PSR-2, Allman and K&R.
*/

## Code Formatting

The integrated _formatter_ helps you keep the code looking clean and maintain the selected code style (e.g. `"PSR-12"`).

> **Note:** In order to format the document, it must be syntax-error free.

![PHP document format](../imgs/format-document.gif)

The code formatting normalizes whitespaces, line endings, opening and closing braces, indentation, adds or removes new lines when necessary and pretty print spaces. It can also be [highly customized](customize-formatting).

### Triggering format

The formatting can be triggered explicitly by two actions:

 - Format Document (<kbd>Shift+Alt+F</kbd>) - Format the entire active file.
 - Format Selection (<kbd>Ctrl+K Ctrl+F</kbd>) - Format the selected text.

Or it can be triggered based on specific user actions, such as typing, saving or pasting. You can alter this behavior by setting:

- `editor.formatOnType` to `true` which enables the editor to format code blocks and statements upon typing `;` and `}`. 
- `editor.formatOnSave` to `true` instructs the formatter to run when saving the document.
- `editor.formatOnPaste` to `true` triggers format when pasting.

## Configuration

The formatting behavior is set in `settings.json`. All the relevant settings and their effects are summed up in the following table.

Setting | Effect
--- | ---
`editor.insertSpaces` | Spaces are used to indent code if `true`, tabs are used otherwise.
`editor.tabSize` | Number of spaces that represent a single tab, this value is used only when `editor.insertSpaces` is `true`
`editor.formatOnType` | Enables or disables automatic formatting of code block upon typing `;` or `}`.
`php.format.codeStyle` | The code style that formatter is going to follow.
`php.format.rules.*` | The formatting rules which override the selected code style


## Code Styles

There are various code styles available:
- [PSR-12](##PSR-12)
- [PHP Tools](##PHP-Tools)
- [PSR-2](##PSR-2)
- [Allman](##Allman)
- [K&R](##K&R)
- [Laravel](##laravel)
- [Wordpress](##wordpress)
- [Drupal](##drupal)

 The styles are selected in [settings](#Configuration). The styles share most features, summed up in the following table, while they differ in a couple of details, explained in their sections.

Feature | Behavior
--- | ---
Pretty print | Spaces are inserted after keywords, names and separators to make the code more readable.
Indentation | Code is indented based on the number of embedded blocks.
Multi-line comments | Subsequent lines are offset to match the first asterisk character on the first line
Statements | Every statement starts on a new line.
Anonymous functions | The body is indented from the beginning of the line where the `function` keyword is defined.
Use construct | The use construct in anonymous functions is always on the same line as the `function` keyword.
Control flow | Close keywords of control flow constructs (`endif`, `endfor`, ...) always start on a new line.
Namespace | An empty line is inserted after a namespace declaration.
Use statement | Use declarations are not separated by empty lines, but an empty line is inserted after all the declarations.
PHP blocks indentation |  Contents of PHP blocks is indented from the open tag (`<?php` or `<?=`).

```php
// Pretty print
if ($volume != 0) {
    $density = $mass / $volume;
}
```

```php
// Indentation
function foo ()
{
    if ($x) {
        if ($y) {
            echo $x + $y;
        }
    }
}
```

```php
// PHP blocks indentation
<?php 
echo $x;
?>
      <?php
      if ($x == 0)
          $x++;
      ?>
```


```php
// Multi-line comments
/* 
 * Following lines are offset
 * by the first asterisk
 */
```

```php
// Statements
echo "hello"; // the secod echo must be on a new line
echo "world";
```

```php
// Anonymous functions
if ($x) {
    $example = function ()
    {
        var_dump($x);
    };
}
```

```php
// Use construct
$example = function () use ($x) 
{
    var_dump($x);
};
```

```php
// Control flow
if ($a == 5):
    echo "a equals 5";
else:
    echo "a is not 5";
endif;
```

```php
// Namespace and Use statements
namespace foo;

use My\Full\Classname as Another;
use My\Full\NSname;
use ArrayObject;

echo "hello world";
```

### Code Style: `PSR-12`

This formatting style is compliant with [PSR-12](https://www.php-fig.org/psr/psr-12/) which expands and replaces [PSR-2](https://www.php-fig.org/psr/psr-2/), and requires adherence to [PSR-1](https://www.php-fig.org/psr/psr-1/).


### Code Style: `PSR-2`

This formatting style is compliant with [PSR-1](https://www.php-fig.org/psr/psr-1/) and [PSR-2](https://www.php-fig.org/psr/psr-2/) standards.

Feature | Behavior
--- | ---
Multi-line expressions | Subsequent lines are indented one level deeper than the initial line
Code blocks | Body of a declarations starts on a new line, while control flow block starts on the same line as the construct

```php
// Multi-line expressions
$x = $a +
    $b +
    $c;
```

```php
// Code blocks
function foo()
{
    if ($x) {
        echo $x;
    }
}
```

### Code Style: `Allman`

The `Allman` style is named after Eric Allman. This style puts the braces on the next line. This applies to all control statements and declarations.

```php
while ($x == $y)
{
    foo();
}
```

### Code Style: **`K&R`**

The `K&R` style (Kernighan & Ritchie Style) keeps open braces on the same line for control structures, types, functions and methods.

```php
while ($x == $y) {
    foo();
}
```

### Code Style: `Laravel`

> Comming soon...

Laravel follows the `PSR-2` coding standard with few formatting specifics we've added to this code style.

### Code Style: `Wordpress`

This formatting style is compliant with [Wordpress PHP Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/#php).

### Code Style: `Drupal`

This formatting style is compliant with [Drupal PHP Coding Standards](https://www.drupal.org/docs/develop/standards/php/php-coding-standards).


### Code Style: PHP Tools

The default code style is compliant with the formatting in PHP Tools for Visual Studio. This style focuses on leaving the code visual structure as untouched as possible while normalizing the whitespaces where possible.

Feature | Behavior
--- | ---
Multi-line expressions |  Subsequent lines maintain their indentation from the first line.
Code blocks |  Code blocks always start on a new line for both declarations and code.

```php
// Multi-line expressions
$x = $a +
     $b +
     $c;
```

```php
// Code blocks
function foo()
{
    if ($x)
    {
        echo $x;
    }
}
```

### Code Style: `Off`

To turn off the formatting select the setting `Off`. Remaining features like PHPDoc auto-generation will work but Document Format, Selection Format, Format On Paste and Format On Type will do nothing.

### Custom Code Style

Use `php.format.rules.*` settings to configure the formatter to behave as you wish. For a detailed list of formatting options, either open the Settings Editor (`Ctrl+,`) and type `php format` in the Search bar or see our documentation page [HERE](customize-formatting).

## HTML, JS and CSS Formatting

PHP Tools support HTML, JavaScript and CSS formatting in PHP files. The formatting of these different language sections is performed according to VS Code settings. To customize it, please consult the official VS code documentation for:
 - [HTML Formatting](https://code.visualstudio.com/docs/languages/html#_formatting)
 - [CSS Formatting](https://code.visualstudio.com/docs/languages/css#_formatting)
 - [Javascript Formatting](https://code.visualstudio.com/Docs/languages/javascript#_formatting)
