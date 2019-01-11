/*
Title: Refactoring
Description: 
*/

# Refactoring

The refactoring feature allows for batch code modifications. It works best for well-documented code, with annotated types and type hints for function parameters and function return type.

> The refactoring is disabled (aborted) when there is a syntax error in your project. This avoids corrupting your code when there might be some incomplete code modification.

## Rename Symbol

> As of version `1.0` only name of local variables, constants and functions can be renamed. This is because an incomplete type information might corrupt your code.

![PHP variable rename](../imgs/rename-variable.gif)

Right click the name and choose `Rename Symbol`. Alter the name and confirm. If more than current document is affected by the change, documents are all opened in the Visual Studio Code window so the changes can be reviewed or reverted. Changes are not saved to disk.
