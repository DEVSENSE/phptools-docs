/*
Title: Generate Getter/Setter
*/
# Generate Getter and Setter

Generating getters and/or setters for private and protected properties can be done using the following code action. This will add the function `get` and `set` for the selected property at the end of the current class.

![Add getters and/or setters](../imgs/getter-setter-action.png)

The inserted code contains all the available type annotations. In case the current version of PHP is `7` or higher, also the return type is added. For PHP `7.4` and higher, the property's type hint is taken into account as well.

![Add getters and/or setters](../imgs/getter-setter-action.gif)

The code action supports adding getter only, setter only, or both. In case more properties are selected, the code action allows to generate getters/setters for all of them at once.

![Add getters/setters for more properties](../imgs/getter-setter-more-properties.gif)

## Doc Block Settings

Generated Doc Block above `__get`/`__set` is configurable using `"php.docblock.getterSetterSnippet"` setting.

**Disable** doc block above getters and setters:

```json
"php.docblock.getterSetterSnippet": false
```

**Custom** tags in doc block with placeholders:

```json
"php.docblock.getterSetterSnippet": {
    "summary": false,
    "@author": "${name:John}"
}
```