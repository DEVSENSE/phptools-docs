/*
Title:Generate PHPDoc
*/
# Generate PHPDoc

PHP documentary comment is created in several ways:

- Type `/**` above declaration.
- Use code action _"Add Missing /**"_.

![PHPDoc generation](../imgs/phpdoc-generate.gif)

## Add Missing `/**` Code Action

The code action applies to all the selected text, so it can be used to generate missing documentary comments in multiple places at once. It also adds all the missing documentary comments in all class members.

## Settings

`php.docblock.***Snippet`: set of settings for specific PHP symbols. Key is a tag name, value is a template according to VSCode snippet syntax, or `false` to skip the tag.

_Sample:_

```json
"php.docblock.classSnippet": {
  "@author": "${name:John}",
  "@copyright": "(c) $CURRENT_YEAR"
},
"php.docblock.functionSnippet": {
  "@author": "${name:John}",
  "@throws": false
},
"php.docblock.variableSnippet": {
  "singleline": true
}
```

## See Also

- [PHPDoc Support](../editor/phpdoc.md)
