/*
Title: Navigation Overview
Description: Code navigation 
*/

# Navigation Overview

PHP Tools provides three ways to efficiently navigate the PHP source code. All the approaches integrate with the existing Visual Studio Code user interface. 

>> The navigation may not be able to locate symbols in syntactically invalid PHP files, because syntax errors generally change the meaning of code.

## Settings

- `"files.exclude"`, `"php.files.exclude"`: patterns of files and folders excluded from indexing and searching.
- `"search.exclude"`: patterns of files and folders excluded from search, find references, code lense / references, search in workspace. Note, _go to definition_ will jumps to an excluded file in case there is no definition found in any non-excluded file.

## Go To Definition

PHP Tools supports the [Go To Definition](https://code.visualstudio.com/docs/editor/editingevolved#_go-to-definition) feature invoked by the `F12` key.

## Go to Symbol

PHP Tools supports the [Go to Symbol](https://code.visualstudio.com/docs/editing/editingevolved#_go-to-symbol) feature invoked by the `Ctrl+Shift+O` key.

## Go to Implementation

## Open Symbol by Name

PHP Tools supports the [Open Symbol by Name](https://code.visualstudio.com/docs/editor/editingevolved#_open-symbol-by-name) feature invoked by the `Ctrl+T` key.
