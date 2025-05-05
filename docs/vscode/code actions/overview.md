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
- **Implement Methods Override**
- **Extract Function** or **Constant**

## Sample Code Actions

### Import Name

Error `PHP0413` indicates that the type does not exist in the current namespace context. If possible, a code action with all available fixes is provided.

![Resolve missing namespace](../imgs/missing-namespace-fix.png)

The code action allows you to add `use` declaration or fully qualify the name in place. Code actions include all the possible names that are found within the current workspace.

### Fix typo in PHPDoc Keyword

Error `PHP6503` suggests that there is a typo in the PHPDoc keyword and offers a quick fix.

![Fix common typos in PHPDoc](../imgs/phpdoc-typo-fix.png)

### Add Missing `$this->`

If applicable, a code action suggesting to add `$this->` is provided. This fixes a common issue when an instance function is called without specifying the `$this` object.

![Fix missing $this->](../imgs/missing-this-fix.gif)

## See Also

- [Visual Studio Code Documentation - Refactoring](https://code.visualstudio.com/docs/editor/refactoring)
