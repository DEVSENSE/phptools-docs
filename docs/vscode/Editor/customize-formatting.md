/*
Title: Customize Formatting
Description: Define and maintain consistent code style in your codebase by defining PHP code-style rules.
*/
# Customize formatting

Many companies have coding guidelines when creating source code. Our PHP formatter can be highly customized to follow those guidelines.

Since version `1.24` customizable formatter is available for <span class="label label-premium">PREMIUM</span> users. Community version users can still influence the formatter behavior through `php.format.codestyle` settings.

`php.format.codestyle` setting serves as a base and each formatting option you specify will override the particular behaviour.

> **Note:** The list of options grows each release, please let us know what option are you missing.


## General

#### Keep control statements on one line

**Setting:** `php.format.rules.keepControlStatementsOnOneLine`

Control statements are kept on one line.

**Enabled**
```php
if ($x) return;
```

**Disabled**
```php
if ($x)
	return;
```

## Braces

#### Open brace on a new line for functions

**Setting:** `php.format.rules.openBraceOnNewLineForFunctions`

Place open brace `{` on a new line for methods, functions and constructors.

**Enabled**
```php
function foo()
{
}
```

**Disabled**
```php
function foo() {
}
```

#### Open brace on a new line for lambda functions

**Setting:** `php.format.rules.openBraceOnNewLineForLambdas`

Place open brace `{` on a new line for lambda functions.

**Enabled**
```php
$lambda = function ()
{
}
```

**Disabled**
```php
$lambda = function () {
}
```

#### Open brace on a new line for anonymous classes

**Setting:** `php.format.rules.openBraceOnNewLineForAnonymousClasses`

Place open brace `{` on a new line for anonymous classes.

**Enabled**
```php
$c = new class extends \Foo implements
    \ArrayAccess
{
};
```

**Disabled**
```php
$c = new class extends \Foo implements
    \ArrayAccess {
};
```

#### Open brace on a new line for types

**Setting:** `php.format.rules.openBraceOnNewLineForTypes`

Place open brace `{` on a new line for types.

**Enabled**
```php
class X extends \Foo implements
    \ArrayAccess 
{
}
```

**Disabled**
```php
class X extends \Foo implements
    \ArrayAccess {
}
```

#### Open brace on a new line for namespaces

 > Comming soon...

**Setting:** `php.format.rules.openBraceOnNewLineForNamespaces`

Place open brace `{` on a new line for namespace declarations.

**Enabled**
```php
namespace A
{
}
```

**Disabled**
```php
namespace A {
}
```

#### Open brace on a new line for blocks

 > Comming soon...

**Setting:** `php.format.rules.openBraceOnNewLineForBlocks`

Place open brace `{` on a new line for all types of code blocks, except for those controlled by other formatting rules.

**Enabled**
```php
if (true)
{
}
```

**Disabled**
```php
if (true) {
}
```

## Indentation

#### Indent braces

**Setting:** `php.format.rules.indentBraces`

Indent curly braces (`{` and `}`).

**Enabled**
```php
function foo()
    {
    echo "Hello";
    }
```

**Disabled**
```php
function foo()
{
    echo "Hello";
}
```

## Spacing

#### Space after cast

**Setting:** `php.format.rules.spaceAfterCast`

Insert a space after a cast operator.

**Enabled**
```php
$x = (int) $obj;
```

**Disabled**
```php
$x = (int)$obj;
```

#### Space after unary not `!`

**Setting:** `php.format.rules.spaceAfterUnaryNot`

Insert a space after a unary not operator.

**Enabled**
```php
$x = ! $obj;
```

**Disabled**
```php
$x = !$obj;
```

#### Space around concatenation `.`

**Setting:** `php.format.rules.spaceAroundConcatenation`

Insert a space around concatenation operator.

**Enabled**
```php
$x = $str1 . $str2;
```

**Disabled**
```php
$x = $str1.$str2;
```

#### Space before parentheses in arrow functions

**Setting:** `php.format.rules.spaceBeforeParenthesesInArrowFunctions`

Insert a space before arrow function parentheses.

**Enabled**
```php
$x = fn () => 1;
```

**Disabled**
```php
$x = fn() => 1;
```

#### Space before parentheses in control statements

**Setting:** `php.format.rules.spaceBeforeParenthesesInControlStatements`

 > Comming soon...

Insert a space before parentheses in control statements.

**Enabled**
```php
if (true)
{
}
```

**Disabled**
```php
if(true)
{
}
```

#### Space before parentheses in function calls

**Setting:** `php.format.rules.spaceBeforeParenthesesInCalls`

 > Comming soon...

Insert a space before parentheses in method, function and constructor call parentheses.

**Enabled**
```php
foo ();
```

**Disabled**
```php
foo();
```

#### Space before parentheses in declarations

**Setting:** `php.format.rules.spaceBeforeParenthesesInDeclarations`

 > Comming soon...

Insert a space before parentheses in method, function and constructor declaration parentheses.

**Enabled**
```php
function foo ()
{
}
```

**Disabled**
```php
function foo()
{
}
```

#### Space before colon `:` in control flow statements

**Setting:** `php.format.rules.spaceBeforeColonInControlStatements`

Insert a space before colon in control flow blocks.

**Enabled**
```php
if (true) :
endif;
```

**Disabled**
```php
if (true):
endif;
```

#### Space before colon `:` in return type


**Setting:** `php.format.rules.spaceBeforeColonInReturnType`

Insert a space before colon in a return type

**Enabled**
```php
function foo() : int {
}
```

**Disabled**
```php
function foo(): int {
}
```

#### Space within call parentheses

**Setting:** `php.format.rules.spaceWithinCallParens`

Insert a space within method, function and constructor call parentheses.

**Enabled**
```php
foo( 1, 2 );
```

**Disabled**
```php
foo(1, 2);
```

#### Space within declaration parentheses

**Setting:** `php.format.rules.spaceWithinDeclParens`

Insert a space within method, function and constructor declaration parentheses.

**Enabled**
```php
function foo( $x, $y ) { }
```

**Disabled**
```php
function foo($x, $y) { }
```

#### Space within array initializer parentheses


**Setting:** `php.format.rules.spaceWithinArrayInitilizersParens`

Insert a space within array initializer parentheses.

**Enabled**
```php
$x = array( 1 => "first", 2 => "second" );
```

**Disabled**
```php
$x = array(1 => "first", 2 => "second");
```

#### Space within `if` parentheses

**Setting:** `php.format.rules.spaceWithinIfParens`

Insert a space within `if` statement header parentheses.

**Enabled**
```php
if ( true ) { }
```

**Disabled**
```php
if (true) { }
```

#### Space within `while` parentheses

**Setting:** `php.format.rules.spaceWithinWhileParens`

Insert a space within `while` statement header parentheses.

**Enabled**
```php
while ( $a != $b ) { }
```

**Disabled**
```php
while ($a != $b) { }
```

#### Space within `for` parentheses

**Setting:** `php.format.rules.spaceWithinForParens`

Insert a space within `for` statement header parentheses.

**Enabled**
```php
for ( $i = 0; $i < 100; $i++ ) { }
```

**Disabled**
```php
for ($i = 0; $i < 100; $i++) { }
```

#### Space within `foreach` parentheses


**Setting:** `php.format.rules.spaceWithinForeachParens`

Insert a space within `foreach` statement header parentheses.

**Enabled**
```php
foreach ( $expr as $key => $value ) { }
```

**Disabled**
```php
foreach ($expr as $key => $value) { }
```

#### Space within `switch` parentheses

**Setting:** `php.format.rules.spaceWithinSwitchParens`

Insert a space within `switch` statement header parentheses.

**Enabled**
```php
switch ( $x ) { }
```

**Disabled**
```php
switch ($x) { }
```

#### Space within `catch` parentheses

**Setting:** `php.format.rules.spaceWithinCatchParens`

Insert a space within `catch` statement header parentheses.

**Enabled**
```php
try { } catch ( Exception ) { }
```

**Disabled**
```php
try { } catch (Exception) { }
```

#### Space within brackets `[]`

**Setting:** `php.format.rules.spaceWithinBrackets`

Insert a space within brackets.

**Enabled**
```php
$y = $x[ 1 ];
```

**Disabled**
```php
$y = $x[1];
```

#### Space within brackets `[]` around expression

**Setting:** `php.format.rules.spaceWithinBracketsAroundExpression`

Insert a space within brackets around expression.

**Enabled**
```php
$y = $x[ $i + 1 ];
```

**Disabled**
```php
$y = $x[$i + 1];
```

#### Space within parentheses around expression

**Setting:** `php.format.rules.spaceWithinExpressionParens`

Insert a space within parentheses around expression.

**Enabled**
```php
$x = ( 1 + 2 );
```

**Disabled**
```php
$x = (1 + 2);
```

## Wrapping

### Array Initilizers

#### Wrap

**Setting:** `php.format.rules.arrayInitializersWrap`

Defines wrapping behavior for array initializers.

* `Off` - No wrapping is applied
* `On every item` - When this option is selected each item is placed on a new line and properly indented if the array initializer is split across multiple lines.


#### New line before first element

**Setting:** `php.format.rules.arrayInitializersNewLineBeforeFirstElement`

Place a new line before the first array element when wrapping.

**Enabled**
```php
$x = [
    1,
    2
];
```

**Disabled**
```php
$x = [1, 
    2
];
```


#### New line after last element

**Setting:** `php.format.rules.arrayInitializersNewLineAfterLastElement`

Place a new line after the last element when wrapping.

**Enabled**
```php
$x = [
    1,
    2
];
```

**Disabled**
```php
$x = [
    1, 
    2];
```


#### Align key-value pairs

**Setting:** `php.format.rules.arrayInitializersAlignKeyValuePairs`

Automatically align `=>` operators.

**Enabled**
```php
$x = [
    1    => 'foo',
    1234 => 'bar'
];
```

**Disabled**
```php
$x = [
    1 => 'foo',
    1234 => 'bar'
];
```

### Call parameters

#### Wrap

**Setting:** `php.format.rules.callParametersWrap`

Defines wrapping behavior for method, function and constructor call parameters.

* `Off` - No wrapping is applied
* `On every item` - When this option is selected each item is placed on a new line and properly indented if the call arguments are split across multiple lines.


#### New line after `(`

**Setting:** `php.format.rules.callParametersNewLineAfterLeftParen`

Place a new line after the left opening parenthesis `(` when wrapping.

**Enabled**
```php
foo(
    1,
    2
);
```

**Disabled**
```php
foo(1,
    2
);
```

#### New line before `)`

**Setting:** `php.format.rules.callParametersNewLineBeforeRightParen`

Place a new line before the right closing parenthesis `)` when wrapping.

**Enabled**
```php
foo(
    1,
    2
);
```

**Disabled**
```php
foo(
    1,
    2);
```

### Declaration parameters

#### Wrap

**Setting:** `php.format.rules.declParametersWrap`

Defines wrapping behavior for method or function declaration parameters.

* `Off` - No wrapping is applied
* `On every item` - When this option is selected each declaration parameter is placed on a new line and properly indented if the arguments are split across multiple lines.

#### New line after `(`

**Setting:** `php.format.rules.declParametersNewLineAfterLeftParen`

Place a new line after the left opening parenthesis `(` of function or method declaration header when wrapping.

**Enabled**
```php
function foo(
    $x,
    $y
) {
}
```

**Disabled**
```php
function foo($x,
    $y
) {
}
```

#### New line before `)`

**Setting:** `php.format.rules.declParametersNewLineBeforeRightParen`

Place a new line before the right closing parenthesis `)` of a function or method declaration header when wrapping.

**Enabled**
```php
function foo(
    $x,
    $y
) {
}
```

**Disabled**
```php
function foo(
    $x,
    $y) {
}
```

#### Keep `)` and `{` on one line

 > Comming soon...

**Setting:** `php.format.rules.declKeepRightParenAndOpenBraceOnOneLine`

Keep the right closing parenthesis `)` of a function or method declaration header on the one line as opening brace of the body `{`.

**Enabled**
```php
function foo(
    $x,
    $y
) {
}
```

**Disabled**
```php
function foo(
    $x,
    $y
)
{
}
```


### `While` statement

#### New line after `(`

**Setting:** `php.format.rules.whileStatementNewLineAfterLeftParen`

Place a new line after the left opening parenthesis `(` in a `while` statement header if it's split across multiple lines.

**Enabled**
```php
while(
    $x == 2
) {
}
```

**Disabled**
```php
while($x == 2
) {
}
```


#### New line before `)`

**Setting:** `php.format.rules.whileStatementNewLineBeforeRightParen`

Place a new line after the right closing parenthesis `)` in a `while` statement header if it's split across multiple lines.

**Enabled**
```php
while(
    $x == 2
) {
}
```

**Disabled**
```php
while(
    $x == 2) {
}
```

### `for` statement

#### Wrap

**Setting:** `php.format.rules.forStatementWrap`

Defines wrapping behavior for `for` statement.

* `Off` - No wrapping is applied
* `On every item` - When this option is selected each item in `for` statement is placed on a new line and properly indented if they are split across multiple lines.



#### New line after `(`

**Setting:** `php.format.rules.forStatementNewLineAfterLeftParen`

Place a new line after the left opening parenthesis `(` in a `for` statement header if it's split across multiple lines.

**Enabled**
```php
for(
    $i = 0; 
    $i < 100;
    $i++
) {
}
```

**Disabled**
```php
for($i = 0; 
    $i < 100;
    $i++
) {
}
```


#### New line before `)`

**Setting:** `php.format.rules.forStatementNewLineBeforeRightParen`

Place a new line after the right closing parenthesis `)` in a `for` statement header if it's split across multiple lines.

**Enabled**
```php
for(
    $i = 0; 
    $i < 100;
    $i++
) {
}
```

**Disabled**
```php
for($i = 0; 
    $i < 100;
    $i++
) {
}
```

### `if` statement

#### New line after `(`

**Setting:** `php.format.rules.ifStatementNewLineAfterLeftParen`

Place a new line after the left opening parenthesis `(` in a `if` or `elseif` statement header if it's split across multiple lines.

**Enabled**
```php
if(
    true
) {
}
```

**Disabled**
```php
if(true
) {
}
```


#### New line before `)`

**Setting:** `php.format.rules.ifStatementNewLineBeforeRightParen`

Place a new line after the right closing parenthesis `)` in a `if` or `elseif` statement header if it's split across multiple lines.

**Enabled**
```php
if(
    true
) {
}
```

**Disabled**
```php
if(
    true) {
}
```

#### `else` on a new line

**Setting:** `php.format.rules.elseOnNewLine`

Place `else` on a new line.

**Enabled**
```php
if (true)
{
}
else
{
}
```

**Disabled**
```php
if (true)
{
} else
{
}
```


### `switch` statement

#### New line after `(`

**Setting:** `php.format.rules.switchStatementNewLineAfterLeftParen`

Place a new line after the left opening parenthesis `(` in a `switch` statement header if it's split across multiple lines.

**Enabled**
```php
switch(
    $x
) {
}
```

**Disabled**
```php
switch($x
) {
}
```


#### New line before `)`

**Setting:** `php.format.rules.switchStatementNewLineBeforeRightParen`

Place a new line after the right closing parenthesis `)` in a `switch` statement header if it's split across multiple lines.

**Enabled**
```php
switch(
    $x
) {
}
```

**Disabled**
```php
switch(
    $x) {
}
```

### `try` statement

#### `catch` on a new line

**Setting:** `php.format.rules.catchOnNewLine`

Place `catch` on a new line.

**Enabled**
```php
try
{
}
catch
{
}
finally
{
}
```

**Disabled**
```php
try
{
} catch
{
}
finally
{
}
```


#### `finally` on a new line

**Setting:** `php.format.rules.finallyOnNewLine`

Place `finally` on a new line.

**Enabled**
```php
try
{
}
catch
{
}
finally
{
}
```

**Disabled**
```php
try
{
} 
catch
{
} finally
{
}
```

### `Implements` list

#### Wrap

**Setting:** `php.format.rules.implementsListWrap`

Defines wrapping behavior for `implements` list in type declarations.

* `Off` - No wrapping is applied
* `On every item` - When this option is selected each interface in `implements` list is placed on a new line and properly indented if they are split across multiple lines.


#### New line after `implements`

**Setting:** `php.format.rules.newLineAfterImplements`

Place a new line after `implements` in type declaration if the list of interfaces is split across multiple lines.


**Enabled**
```php
class X implements
    A,
    B,
    C
{
}
```

**Disabled**
```php
class X implements A, 
    B, 
    C
{
}
```

### Group `use` list

#### Wrap

**Setting:** `php.format.rules.groupUseWrap`

Defines wrapping behavior for group `use` list in type declarations.

* `Off` - No wrapping is applied
* `On every item` - When this option is selected each declaration in group `use` list is placed on a new line and properly indented if they are split across multiple lines.

#### New line before first group `use` declaration

**Setting:** `php.format.rules.groupUseNewLineBeforeFirstDeclaration`

Place a new line before first group `use` declaration if the list of declarations is split across multiple lines.

**Enabled**
```php
use Vendor\pkg\ns\{
    ns1\A,
    ns2\B,
};
```

**Disabled**
```php
use Vendor\pkg\ns\{ns1\A,
    ns2\B,
};
```

### Assignment statement

**Setting:** `php.format.rules.alignConsecutiveAssignments`

Automatically align consecutive `=` assignments

**Enabled**
```php
$a     = 1;
$bbb   = 2;
$ccccc = 3;
```

**Disabled**
```php
$a = 1;
$bbb = 2;
$ccccc = 3;
```
