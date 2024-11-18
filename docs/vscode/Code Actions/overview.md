/*
Title: Code Actions
Description: Editor Code Actions Overview
*/
# Code Actions

The editor provides so-called **Code Actions**. Code actions are available for quick refactorings and quick fixes of code problems. The available code action is annotated with a light bulb next to the text.

![Light Bulb in VS Code](../imgs/light-bulb.png)

Available code actions are listed by clicking on the light bulb or pressing an associated keyboard shortcut (by default) <kbd>Ctrl+.</kbd> or <kbd>Cmd+.</kbd>.

Certain code problems have also `Quick Fix` available. This provides code actions that should resolve the problem. Quick fixes are also available right in _Problems_ window, next to each problem listed.

![Quick Fix in VS Code](../imgs/quick-fixes.png)

For more details about editor actions, please see [Visual Studio Code Documentation](https://code.visualstudio.com/docs/editor/refactoring).

## Code Actions Kinds

There are several kinds of actions:

- **Problem Fix**: a code problem can have associated quick fix.
- **Code Action**: a quick refactoring for the code, not fixing any issue, just makes the code simpler. Can be configured to be marked as problem as well, or to be applied automatically on file save. 
- **Generate PHPDoc comment**: creates a documentary comment`/** ... */` above declaration. Also generated when typing `/**` above declaration.
- **Generate Getter/Setter**: creates `__get` or `__set` or both stubs. Applies to class non-public properties.
- **Export Function** _(not provided yet)_

## See Also

- [Visual Studio Code Documentation - Refactoring](https://code.visualstudio.com/docs/editor/refactoring)
