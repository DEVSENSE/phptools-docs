/*
Title: Smart Indenting
Description: Automatic indentation of new lines.
*/

# Smart Indentation

The PHP editor supports the smart indentation feature. The editor's cursor is automatically indented on new lines to the desirable position. This is most noticeable after `{`, within `if`, after `;` or `:`.

## Settings

The option is enabled by default. The option can be disabled in `Tools | Options | Text Editor | PHP | Tabs`.

## Smart Indent Features

- <kbd>enter</kbd> key will place your caret to the best position for new statement or for continuing unfinished statement. This also works within PHPDoc or multi-lined comments, and adds `*` at the line beginning automatically.
- `{` character outdents current line to line up with code block start.
- `}` character outdents current line to match block start. If the code is syntactically valid, it also reformats the code block.
- `:` after `case` or `default`, it makes indentation of the line the same as previous cases within the switch.
