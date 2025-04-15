/*
Title: Code Styles
Description: Use predefined code styles.
Tags: formatting,codestyle,php
Generated: see Components/Devsense.PHP.DocumentationGeneratorApp
*/
# Code Style

Choose one of the pre-defined code styles to quickly adjust formatting settings. _Code Style_ setting is **free** for all users. It lets you to keep code formatted consistently according to a generally recognized style.

- **Setting**: `php.format.codeStyle`
- **Default**: The default code style is [`PSR-12`](#psr-12)
- **License**: Free



## PSR-2

**Preview:**

```php
<?php

class MyClass
{

    var $array = [
        'key' => 1,
        'another_key' => 2,
        'last_key' => 3,
    ];

    public function foo(string $text, $optional = null)
    {
        if ($optional !== false) {
            echo $optional;
        } else {
            echo $text;
        }
    }
}

```

**Settings included in PSR-2:**

| Setting | Description | Value |
| ---     | ---         | ---   |
| php.format.rules.openBraceOnNewLineForFunctions | Open brace on a new line for functions | `true` |
| php.format.rules.openBraceOnNewLineForLambdas | Open brace on a new line for lambda functions | `false` |
| php.format.rules.openBraceOnNewLineForAnonymousClasses | Open brace on a new line for anonymous classes | `false` |
| php.format.rules.openBraceOnNewLineForTypes | Open brace on a new line for types | `true` |
| php.format.rules.openBraceOnNewLineForNamespaces | Open brace on a new line for namespaces | `false` |
| php.format.rules.openBraceOnNewLineForBlocks | Open brace on a new line for blocks | `false` |
| php.format.rules.elseOnNewLine | `else` on a new line | `false` |
| php.format.rules.catchOnNewLine | `catch` on a new line | `false` |
| php.format.rules.finallyOnNewLine | `finally` on a new line | `false` |
| php.format.rules.spaceAfterCast | Space after cast | `true` |


## WordPress

**Preview:**

```php
<?php

class MyClass {

	var $array = [ 
		'key' => 1,
		'another_key' => 2,
		'last_key' => 3,
	];

	public function foo( string $text, $optional = null ) {
		if ( $optional !== false ) {
			echo $optional;
		} else {
			echo $text;
		}
	}
}

```

**Settings included in WordPress:**

| Setting | Description | Value |
| ---     | ---         | ---   |
| php.format.rules.openBraceOnNewLineForFunctions | Open brace on a new line for functions | `false` |
| php.format.rules.openBraceOnNewLineForLambdas | Open brace on a new line for lambda functions | `false` |
| php.format.rules.openBraceOnNewLineForAnonymousClasses | Open brace on a new line for anonymous classes | `false` |
| php.format.rules.openBraceOnNewLineForTypes | Open brace on a new line for types | `false` |
| php.format.rules.openBraceOnNewLineForNamespaces | Open brace on a new line for namespaces | `false` |
| php.format.rules.openBraceOnNewLineForBlocks | Open brace on a new line for blocks | `false` |
| php.format.rules.elseOnNewLine | `else` on a new line | `false` |
| php.format.rules.catchOnNewLine | `catch` on a new line | `false` |
| php.format.rules.finallyOnNewLine | `finally` on a new line | `false` |
| php.format.rules.spaceAfterCast | Space after cast | `true` |
| php.format.rules.spaceWithinCallParens | Space within call parentheses | `true` |
| php.format.rules.spaceWithinDeclParens | Space within declaration parentheses | `true` |
| php.format.rules.spaceWithinArrayInitilizersParens | Space within array initializer parentheses | `true` |
| php.format.rules.spaceWithinIfParens | Space within `if` parentheses | `true` |
| php.format.rules.spaceWithinWhileParens | Space within `while` parentheses | `true` |
| php.format.rules.spaceWithinForParens | Space within `for` parentheses | `true` |
| php.format.rules.spaceWithinForeachParens | Space within `foreach` parentheses | `true` |
| php.format.rules.spaceWithinSwitchParens | Space within `switch` parentheses | `true` |
| php.format.rules.spaceWithinBrackets | Space within brackets `[]` | `false` |
| php.format.rules.spaceWithinBracketsAroundExpression | Space within brackets `[]` around expression | `true` |
| php.format.rules.spaceWithinExpressionParens | Space within parentheses around expression | `true` |
| php.format.rules.spaceAfterUnaryNot | Space after unary not `!` | `true` |
| php.format.rules.spaceAroundConcatenation | Space around concatenation `.` | `true` |
| php.format.rules.spaceBeforeColonInControlStatements | Space before colon `:` in control flow statements | `true` |


## Allman

**Preview:**

```php
<?php

class MyClass
{

    var $array = [
        'key' => 1,
        'another_key' => 2,
        'last_key' => 3,
    ];

    public function foo(string $text, $optional = null)
    {
        if ($optional !== false)
        {
            echo $optional;
        }
        else
        {
            echo $text;
        }
    }
}

```

**Settings included in Allman:**

| Setting | Description | Value |
| ---     | ---         | ---   |
| php.format.rules.openBraceOnNewLineForFunctions | Open brace on a new line for functions | `true` |
| php.format.rules.openBraceOnNewLineForLambdas | Open brace on a new line for lambda functions | `true` |
| php.format.rules.openBraceOnNewLineForAnonymousClasses | Open brace on a new line for anonymous classes | `true` |
| php.format.rules.openBraceOnNewLineForTypes | Open brace on a new line for types | `true` |
| php.format.rules.openBraceOnNewLineForNamespaces | Open brace on a new line for namespaces | `true` |
| php.format.rules.openBraceOnNewLineForBlocks | Open brace on a new line for blocks | `true` |
| php.format.rules.elseOnNewLine | `else` on a new line | `true` |
| php.format.rules.catchOnNewLine | `catch` on a new line | `true` |
| php.format.rules.finallyOnNewLine | `finally` on a new line | `true` |
| php.format.rules.spaceAfterCast | Space after cast | `true` |


## K&amp;R

**Preview:**

```php
<?php

class MyClass {

    var $array = [
        'key' => 1,
        'another_key' => 2,
        'last_key' => 3,
    ];

    public function foo(string $text, $optional = null) {
        if ($optional !== false) {
            echo $optional;
        } else {
            echo $text;
        }
    }
}

```

**Settings included in K&R:**

| Setting | Description | Value |
| ---     | ---         | ---   |
| php.format.rules.openBraceOnNewLineForFunctions | Open brace on a new line for functions | `false` |
| php.format.rules.openBraceOnNewLineForLambdas | Open brace on a new line for lambda functions | `false` |
| php.format.rules.openBraceOnNewLineForTypes | Open brace on a new line for types | `false` |
| php.format.rules.openBraceOnNewLineForNamespaces | Open brace on a new line for namespaces | `false` |
| php.format.rules.openBraceOnNewLineForBlocks | Open brace on a new line for blocks | `false` |
| php.format.rules.elseOnNewLine | `else` on a new line | `false` |
| php.format.rules.catchOnNewLine | `catch` on a new line | `false` |
| php.format.rules.finallyOnNewLine | `finally` on a new line | `false` |
| php.format.rules.spaceAfterCast | Space after cast | `true` |


## PSR-12

**Preview:**

```php
<?php

class MyClass
{

    var $array = [
        'key' => 1,
        'another_key' => 2,
        'last_key' => 3,
    ];

    public function foo(string $text, $optional = null)
    {
        if ($optional !== false) {
            echo $optional;
        } else {
            echo $text;
        }
    }
}

```

**Settings included in PSR-12:**

| Setting | Description | Value |
| ---     | ---         | ---   |
| php.format.rules.openBraceOnNewLineForFunctions | Open brace on a new line for functions | `true` |
| php.format.rules.openBraceOnNewLineForLambdas | Open brace on a new line for lambda functions | `false` |
| php.format.rules.openBraceOnNewLineForAnonymousClasses | Open brace on a new line for anonymous classes | `false` |
| php.format.rules.openBraceOnNewLineForTypes | Open brace on a new line for types | `true` |
| php.format.rules.openBraceOnNewLineForNamespaces | Open brace on a new line for namespaces | `false` |
| php.format.rules.openBraceOnNewLineForBlocks | Open brace on a new line for blocks | `false` |
| php.format.rules.elseOnNewLine | `else` on a new line | `false` |
| php.format.rules.catchOnNewLine | `catch` on a new line | `false` |
| php.format.rules.finallyOnNewLine | `finally` on a new line | `false` |
| php.format.rules.spaceAfterCast | Space after cast | `true` |
| php.format.rules.arrayInitializersWrap | Wrap | `onEveryItem` |
| php.format.rules.arrayInitializersNewLineBeforeFirstElement | New line before first element | `true` |
| php.format.rules.arrayInitializersNewLineAfterLastElement | New line after last element | `true` |
| php.format.rules.callParametersWrap | Wrap | `onEveryItem` |
| php.format.rules.callParametersNewLineAfterLeftParen | New line after `(` | `true` |
| php.format.rules.callParametersNewLineBeforeRightParen | New line before `)` | `true` |
| php.format.rules.declParametersWrap | Wrap | `onEveryItem` |
| php.format.rules.declParametersNewLineAfterLeftParen | New line after `(` | `true` |
| php.format.rules.declParametersNewLineBeforeRightParen | New line before `)` | `true` |
| php.format.rules.whileStatementNewLineAfterLeftParen | New line after `(` | `true` |
| php.format.rules.whileStatementNewLineBeforeRightParen | New line before `)` | `true` |
| php.format.rules.forStatementWrap | Wrap | `onEveryItem` |
| php.format.rules.forStatementNewLineAfterLeftParen | New line after `(` | `true` |
| php.format.rules.forStatementNewLineBeforeRightParen | New line before `)` | `true` |
| php.format.rules.ifStatementNewLineAfterLeftParen | New line after `(` | `true` |
| php.format.rules.ifStatementNewLineBeforeRightParen | New line before `)` | `true` |
| php.format.rules.implementsListWrap | Wrap | `onEveryItem` |
| php.format.rules.newLineAfterImplements | New line after `implements` | `true` |
| php.format.rules.switchStatementNewLineAfterLeftParen | New line after `(` | `true` |
| php.format.rules.switchStatementNewLineBeforeRightParen | New line before `)` | `true` |
| php.format.rules.groupUseWrap | Wrap | `onEveryItem` |
| php.format.rules.groupUseNewLineBeforeFirstDeclaration | New line before first group `use` declaration | `true` |


## Laravel

**Preview:**

```php
<?php

class MyClass
{

    var $array = [
        'key' => 1,
        'another_key' => 2,
        'last_key' => 3,
    ];

    public function foo(string $text, $optional = null)
    {
        if ($optional !== false) {
            echo $optional;
        } else {
            echo $text;
        }
    }
}

```

**Settings included in Laravel:**

| Setting | Description | Value |
| ---     | ---         | ---   |
| php.format.rules.openBraceOnNewLineForFunctions | Open brace on a new line for functions | `true` |
| php.format.rules.openBraceOnNewLineForLambdas | Open brace on a new line for lambda functions | `false` |
| php.format.rules.openBraceOnNewLineForAnonymousClasses | Open brace on a new line for anonymous classes | `true` |
| php.format.rules.openBraceOnNewLineForTypes | Open brace on a new line for types | `true` |
| php.format.rules.openBraceOnNewLineForNamespaces | Open brace on a new line for namespaces | `false` |
| php.format.rules.openBraceOnNewLineForBlocks | Open brace on a new line for blocks | `false` |
| php.format.rules.elseOnNewLine | `else` on a new line | `false` |
| php.format.rules.catchOnNewLine | `catch` on a new line | `false` |
| php.format.rules.finallyOnNewLine | `finally` on a new line | `false` |
| php.format.rules.spaceAfterCast | Space after cast | `true` |
| php.format.rules.spaceAfterUnaryNot | Space after unary not `!` | `true` |
| php.format.rules.spaceBeforeParenthesesInArrowFunctions | Space before parentheses in arrow functions | `true` |
| php.format.rules.spaceBeforeColonInControlStatements | Space before colon `:` in control flow statements | `true` |
| php.format.rules.spaceBeforeColonInReturnType | Space before colon `:` in return type | `false` |


## Drupal

**Preview:**

```php
<?php

class MyClass {

  var $array = [
    'key' => 1,
    'another_key' => 2,
    'last_key' => 3,
  ];

  public function foo(string $text, $optional = NULL) {
    if ($optional !== FALSE) {
      echo $optional;
    }
    else {
      echo $text;
    }
  }
}

```

**Settings included in Drupal:**

| Setting | Description | Value |
| ---     | ---         | ---   |
| php.format.rules.openBraceOnNewLineForFunctions | Open brace on a new line for functions | `false` |
| php.format.rules.openBraceOnNewLineForLambdas | Open brace on a new line for lambda functions | `false` |
| php.format.rules.openBraceOnNewLineForAnonymousClasses | Open brace on a new line for anonymous classes | `false` |
| php.format.rules.openBraceOnNewLineForTypes | Open brace on a new line for types | `false` |
| php.format.rules.openBraceOnNewLineForNamespaces | Open brace on a new line for namespaces | `false` |
| php.format.rules.openBraceOnNewLineForBlocks | Open brace on a new line for blocks | `false` |
| php.format.rules.elseOnNewLine | `else` on a new line | `true` |
| php.format.rules.catchOnNewLine | `catch` on a new line | `true` |
| php.format.rules.finallyOnNewLine | `finally` on a new line | `true` |
| php.format.rules.endWithNewLine | Insert final newline | `true` |
| php.format.rules.spaceAfterCast | Space after cast | `true` |
| php.format.rules.booleanConstantCasing | Boolean constant casing | `uppercase` |
| php.format.rules.nullConstantCasing | Null constant casing | `uppercase` |


## Joomla

**Preview:**

```php
<?php

class MyClass
{

    var $array = [
        'key' => 1,
        'another_key' => 2,
        'last_key' => 3,
    ];

    public function foo(string $text, $optional = null)
    {
        if ($optional !== false)
        {
            echo $optional;
        }
        else
        {
            echo $text;
        }
    }
}

```

**Settings included in Joomla:**

| Setting | Description | Value |
| ---     | ---         | ---   |
| php.format.rules.openBraceOnNewLineForFunctions | Open brace on a new line for functions | `true` |
| php.format.rules.openBraceOnNewLineForLambdas | Open brace on a new line for lambda functions | `false` |
| php.format.rules.openBraceOnNewLineForAnonymousClasses | Open brace on a new line for anonymous classes | `false` |
| php.format.rules.openBraceOnNewLineForTypes | Open brace on a new line for types | `true` |
| php.format.rules.openBraceOnNewLineForNamespaces | Open brace on a new line for namespaces | `false` |
| php.format.rules.openBraceOnNewLineForBlocks | Open brace on a new line for blocks | `true` |
| php.format.rules.elseOnNewLine | `else` on a new line | `true` |
| php.format.rules.catchOnNewLine | `catch` on a new line | `true` |
| php.format.rules.finallyOnNewLine | `finally` on a new line | `true` |
| php.format.rules.spaceAfterCast | Space after cast | `true` |
| php.format.rules.arrayInitializersWrap | Wrap | `onEveryItem` |
| php.format.rules.arrayInitializersNewLineBeforeFirstElement | New line before first element | `true` |
| php.format.rules.arrayInitializersNewLineAfterLastElement | New line after last element | `true` |
| php.format.rules.callParametersWrap | Wrap | `onEveryItem` |
| php.format.rules.callParametersNewLineAfterLeftParen | New line after `(` | `true` |
| php.format.rules.callParametersNewLineBeforeRightParen | New line before `)` | `true` |
| php.format.rules.declParametersWrap | Wrap | `onEveryItem` |
| php.format.rules.declParametersNewLineAfterLeftParen | New line after `(` | `true` |
| php.format.rules.declParametersNewLineBeforeRightParen | New line before `)` | `true` |
| php.format.rules.whileStatementNewLineAfterLeftParen | New line after `(` | `true` |
| php.format.rules.whileStatementNewLineBeforeRightParen | New line before `)` | `true` |
| php.format.rules.forStatementWrap | Wrap | `onEveryItem` |
| php.format.rules.forStatementNewLineAfterLeftParen | New line after `(` | `true` |
| php.format.rules.forStatementNewLineBeforeRightParen | New line before `)` | `true` |
| php.format.rules.ifStatementNewLineAfterLeftParen | New line after `(` | `true` |
| php.format.rules.ifStatementNewLineBeforeRightParen | New line before `)` | `true` |
| php.format.rules.implementsListWrap | Wrap | `onEveryItem` |
| php.format.rules.newLineAfterImplements | New line after `implements` | `true` |
| php.format.rules.switchStatementNewLineAfterLeftParen | New line after `(` | `true` |
| php.format.rules.switchStatementNewLineBeforeRightParen | New line before `)` | `true` |
| php.format.rules.groupUseWrap | Wrap | `onEveryItem` |
| php.format.rules.groupUseNewLineBeforeFirstDeclaration | New line before first group `use` declaration | `true` |


## PER

**Preview:**

```php
<?php

class MyClass
{

    var $array = [
        'key' => 1,
        'another_key' => 2,
        'last_key' => 3,
    ];

    public function foo(string $text, $optional = null)
    {
        if ($optional !== false) {
            echo $optional;
        } else {
            echo $text;
        }
    }
}

```

**Settings included in PER:**

| Setting | Description | Value |
| ---     | ---         | ---   |
| php.format.rules.openBraceOnNewLineForFunctions | Open brace on a new line for functions | `true` |
| php.format.rules.openBraceOnNewLineForLambdas | Open brace on a new line for lambda functions | `false` |
| php.format.rules.openBraceOnNewLineForAnonymousClasses | Open brace on a new line for anonymous classes | `false` |
| php.format.rules.openBraceOnNewLineForTypes | Open brace on a new line for types | `true` |
| php.format.rules.openBraceOnNewLineForNamespaces | Open brace on a new line for namespaces | `false` |
| php.format.rules.openBraceOnNewLineForBlocks | Open brace on a new line for blocks | `false` |
| php.format.rules.elseOnNewLine | `else` on a new line | `false` |
| php.format.rules.catchOnNewLine | `catch` on a new line | `false` |
| php.format.rules.finallyOnNewLine | `finally` on a new line | `false` |
| php.format.rules.spaceAfterCast | Space after cast | `true` |
| php.format.rules.arrayInitializersWrap | Wrap | `onEveryItem` |
| php.format.rules.arrayInitializersNewLineBeforeFirstElement | New line before first element | `true` |
| php.format.rules.arrayInitializersNewLineAfterLastElement | New line after last element | `true` |
| php.format.rules.callParametersWrap | Wrap | `onEveryItem` |
| php.format.rules.callParametersNewLineAfterLeftParen | New line after `(` | `true` |
| php.format.rules.callParametersNewLineBeforeRightParen | New line before `)` | `true` |
| php.format.rules.declParametersWrap | Wrap | `onEveryItem` |
| php.format.rules.declParametersNewLineAfterLeftParen | New line after `(` | `true` |
| php.format.rules.declParametersNewLineBeforeRightParen | New line before `)` | `true` |
| php.format.rules.declCompactEmptyBody | Compact empty body into `{}` | `true` |
| php.format.rules.whileStatementNewLineAfterLeftParen | New line after `(` | `true` |
| php.format.rules.whileStatementNewLineBeforeRightParen | New line before `)` | `true` |
| php.format.rules.forStatementWrap | Wrap | `onEveryItem` |
| php.format.rules.forStatementNewLineAfterLeftParen | New line after `(` | `true` |
| php.format.rules.forStatementNewLineBeforeRightParen | New line before `)` | `true` |
| php.format.rules.ifStatementNewLineAfterLeftParen | New line after `(` | `true` |
| php.format.rules.ifStatementNewLineBeforeRightParen | New line before `)` | `true` |
| php.format.rules.implementsListWrap | Wrap | `onEveryItem` |
| php.format.rules.newLineAfterImplements | New line after `implements` | `true` |
| php.format.rules.switchStatementNewLineAfterLeftParen | New line after `(` | `true` |
| php.format.rules.switchStatementNewLineBeforeRightParen | New line before `)` | `true` |
| php.format.rules.groupUseWrap | Wrap | `onEveryItem` |
| php.format.rules.groupUseNewLineBeforeFirstDeclaration | New line before first group `use` declaration | `true` |
| php.format.rules.inlineHeredoc | Inline Heredoc/Nowdoc Declaration | `true` |
| php.format.rules.indentHeredoc | Heredoc/Nowdoc Content Indentation | `true` |
| php.format.rules.addCommaAfterLastArrayElement | Add a comma after the last array element | `true` |
| php.format.rules.addCommaAfterLastCallParameter | Add a comma after the last function call parameters | `true` |
| php.format.rules.addCommaAfterLastDeclParameter | Add a comma after the last function declaration parameters | `true` |


## See Also

- [Customize Formatting](customize-formatting.md) - Override chosen code style with specific format rules.


