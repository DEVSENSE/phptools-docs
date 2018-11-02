/*
Title: Code Completion
Description: PHP code completion.
*/

# Code Completion

Code completion analyses all of the project source files, determines expressions type, functions return type, properties type and local variables type. The type information can be improved by providing further details using PHPDoc. See below.

Code completion is context-aware, scope-aware, type-aware, with respect to conventions and additional heuristics. The completion works within the context of PHP code, PHPDoc, HTML, JS and CSS.

## Automatic triggers

The completion can be triggered manually (`Ctrl+Space` by default) or automatically. The automatic triggers are:

- a letter, completes available symbols in the current context
- `::` after a class/interface/trait name, completes the type static members and constants
- `->` after an object instance, completes the object's non-static members
- `\` as a part of a qualified name, completes the namespaced (qualified) type name
- `$` as a first letter, shows local variables
- a letter or `Ctrl+Space` after `new` keyword, completes possible class names
- a letter or `Ctrl+Space` after `throw new`, completes only throwable classes

## Additional information

The editor provides an option to show additional information about the symbol in the code completion list. The information contains the symbol's description as it is written in the corresponding PHPDoc or PHP manual.

## Improving the completion

In case variable's or function's type information cannot be inherited, it is advised to provide the expected type in form of a PHPDoc comment. The type hinting works for functions, properties and variables.

Example of type hinting follows:

```php
class SomeClass
{
    /**
     * @var array|null
     */
    var $property;

    /**
     * @return SomeClass
     */
    function foo()
    {
        $x = eval('magic1()');
        /** @var $x PDOStatement */
        $x->query();

        return eval('magic2()');
    }
}
```

## Known limitations

Code editor does not recognize aliased classes introduced with `class_alias()` function call.

Code editor won't recognize files containing a syntax error.

Code editor may not provide precise completion after `eval()` or classes instantiated indirectly (using an expression insted of a qualified name).
