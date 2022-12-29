/*
Title: Customize Formatting
Description: Define and maintain consistent code style in your codebase by defining PHP code-style rules.
*/
# Customize formatting

Many companies have coding guidelines when creating source code. Our PHP formatter can be highly customized to follow those guidelines.

Since version `1.24` customizable formatter is available for <span class="label label-premium">PREMIUM</span> users. Community version users can still influence the formatter behavior through `php.format.codestyle` settings.

`php.format.codestyle` setting serves as a base and each formatting option you specify will override the particular behaviour.

> **Note:** The list of options grows each release, please let us know what option are you missing.

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

### `While` statement

#### Wrap

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

 > Comming soon...

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