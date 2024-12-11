/*
Title: Organize Uses
*/
# Organize Uses

## Unused `use` Fix

Any `use`, group of `use`, or a single alias that is not needed in the code is immediately dimmed.

![remove unused `use`](../imgs/vscode-unnecessary-use.gif)

Code action `Remove unnecessary 'use'` quickly cleanups the block of uses.

## Remove and Sort Uses on Save

To automatically organize `use`s (remove unused ones and sort the rest), open your [`settings.json`](https://code.visualstudio.com/docs/getstarted/settings), and add one of the following:

```json
"editor.codeActionsOnSave": {
    "source.organizeImports": "explicit",      // sort uses
    "source.sortImports": "explicit",          // sort uses (same as "source.organizeImports"
    "source.sortAndRemoveImports": "explicit", // removes unused uses and sorts them 
}
```

Specify either `"explicit"` (the action will be called when file is explicitly saved) or `"always"` (the action will be called whenever the window gets focus).

## Settings

- `"php.sortUses.caseSensitive"`: Case sensitive sorting puts upper case letters on top before lower case letters. `False` by default, so sorting is **not** case sensitive.
