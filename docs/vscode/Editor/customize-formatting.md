/*
Title: Customize Formatting
Description: Define and maintain consistent code style in your codebase by defining PHP code-style rules.
*/
# Customize formatting

> **NOTE:** This feature is available in the Pre-release version

Many companies have coding guidelines when creating source code which might differ from our predefined code styles.

Since version `1.24` customizable formatter is available for <span class="label label-premium">PREMIUM</span> users. Community version users can still influence the formatter behavior through `php.format.codestyle` settings.

## `php.format.rules.openBraceOnNewLineForFunctions`

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


## `php.format.rules.openBraceOnNewLineForLambdas`

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

## `php.format.rules.openBraceOnNewLineForAnonymousClasses`

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


## `php.format.rules.indentBraces`

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


## `php.format.rules.openBraceOnNewLineForTypes`

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



## `php.format.rules.elseOnNewLine`

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


## `php.format.rules.catchOnNewLine`

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


## `php.format.rules.finallyOnNewLine`

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


## `php.format.rules.spaceAfterCast`

Insert a space after a cast operator.

**Enabled**
```php
$x = (int) $obj;
```

**Disabled**
```php
$x = (int)$obj;
```


## `php.format.rules.arrayInitializersWrap`

Defines wrapping behavior for array initializers.

* `Off` - No wrapping is applied
* `On every item` - When this option is selected each item is placed on a new line and properly indented if the array initializer is split across multiple lines.



## `php.format.rules.arrayInitializersNewLineBeforeFirstElement`

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


## `php.format.rules.arrayInitializersNewLineAfterLastElement`

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


## `php.format.rules.arrayInitializersAlignKeyValuePairs`

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



## `php.format.rules.callParametersWrap`

Defines wrapping behavior for method, function and constructor call parameters.

* `Off` - No wrapping is applied
* `On every item` - When this option is selected each item is placed on a new line and properly indented if the call arguments are split across multiple lines.


## `php.format.rules.callParametersNewLineAfterLeftParen`

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

## `php.format.rules.callParametersNewLineBeforeRightParen`

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


## `php.format.rules.declParametersWrap`

Defines wrapping behavior for method or function declaration parameters.

* `Off` - No wrapping is applied
* `On every item` - When this option is selected each declaration parameter is placed on a new line and properly indented if the arguments are split across multiple lines.



## `php.format.rules.declParametersNewLineAfterLeftParen`

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


## `php.format.rules.declParametersNewLineBeforeRightParen`

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


## `php.format.rules.whileStatementNewLineAfterLeftParen`

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


## `php.format.rules.whileStatementNewLineBeforeRightParen`

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


## `php.format.rules.forStatementWrap`

Defines wrapping behavior for `for` statement.

* `Off` - No wrapping is applied
* `On every item` - When this option is selected each item in `for` statement is placed on a new line and properly indented if they are split across multiple lines.



## `php.format.rules.forStatementNewLineAfterLeftParen`

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


## `php.format.rules.forStatementNewLineBeforeRightParen`

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


## `php.format.rules.ifStatementNewLineAfterLeftParen`

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


## `php.format.rules.ifStatementNewLineBeforeRightParen`

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


## `php.format.rules.switchStatementNewLineAfterLeftParen`

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


## `php.format.rules.switchStatementNewLineBeforeRightParen`

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


## `php.format.rules.implementsListWrap`

Defines wrapping behavior for `implements` list in type declarations.

* `Off` - No wrapping is applied
* `On every item` - When this option is selected each interface in `implements` list is placed on a new line and properly indented if they are split across multiple lines.


## `php.format.rules.newLineAfterImplements`

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
