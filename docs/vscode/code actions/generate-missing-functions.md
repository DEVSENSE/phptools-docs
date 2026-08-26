/*
Title: Implement Abstracts &amp; Overrides
*/
# Implement Abstracts

## Implement Abstract Methods &mp; Properties

Error `PHP2414` indicates that the non-abstract class has some functions or properties missing. The quick fix or code action automatically implements the missing abstract functions and properties, including all the available documentation and type information. The generated code is inserted at the end of the class.

![Class is missing implementation of abstract functions](../imgs/missing-abstracts-error.png)

The code action resolves the complete class hierarchy, taking into account interfaces and classes. Generated code contains PHPDoc annotations and base implementation of methods if applicable.

![Implement missing functions](../imgs/impl-missing-abstracts.gif)

## Override Methods

Code action to generate function overrides analyzes your class hierarchy and lets you to select methods to override.

![override methods code action](../imgs/override-methods-action.png)

List of available overrides can be filtered, and selected signatures will be inserted into the class.

![override methods list](../imgs/override-mehods-selection.png)

## Extract Function

See [Extract Function Documentation](./extract.md) for `Extract function` and `Extract constant` code actions.
