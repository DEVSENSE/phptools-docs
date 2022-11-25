# Customize formatting

> **NOTE:** This feature is not available yet

Many companies have coding guidelines when creating source code which might differ from our predefined code styles.

Since version `1.24` customizable formatter is available for <span class="label label-premium">PREMIUM</span> users. Community version users can still influence the formatter behavior through `php.format.codestyle` settings.

## `php.format.openBraceOnNewLineForFunctions`

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

Requires `PREMIUM`

## `php.format.openBraceOnNewLineForLambdas`

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

Requires `PREMIUM`

## `php.format.openBraceOnNewLineForAnonymousClasses`

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

Requires `PREMIUM`

## `php.format.openBraceOnNewLineForTypes`

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


Requires `PREMIUM`

## `php.format.elseOnNewLine`

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

Requires `PREMIUM`

## `php.format.catchOnNewLine`

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

Requires `PREMIUM`

## `php.format.finallyOnNewLine`

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

Requires `PREMIUM`

## `php.format.spaceAfterCast`

Insert a space after a cast operator.

**Enabled**
```php
$x = (int) $obj;
```

**Disabled**
```php
$x = (int)$obj;
```

Requires `PREMIUM`

## `php.format.arrayInitializersWrap`

Defines wrapping behavior for array initializers.

* `Off` - No wrapping is applied
* `On every item` - When this option is selected each item is placed on a new line and properly indented if the array initializer is split across multiple lines.


Requires `PREMIUM`

## `php.format.ArrayInitializersNewLineBeforeFirstElement`

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

Requires `PREMIUM`

## `php.format.ArrayInitializersNewLineAfterLastElement`

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

Requires `PREMIUM`

## `php.format.callParametersWrap`

Defines wrapping behavior for method, function and constructor call parameters.

* `Off` - No wrapping is applied
* `On every item` - When this option is selected each item is placed on a new line and properly indented if the call arguments are split across multiple lines.

Requires `PREMIUM`

## `php.format.callParametersNewLineAfterLeftParen`

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

## `php.format.callParametersNewLineBeforeRightParen`

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

Requires `PREMIUM`

## `php.format.declParametersWrap`

Defines wrapping behavior for method or function declaration parameters.

* `Off` - No wrapping is applied
* `On every item` - When this option is selected each declaration parameter is placed on a new line and properly indented if the arguments are split across multiple lines.


Requires `PREMIUM`

## `php.format.declParametersNewLineAfterLeftParen`

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

Requires `PREMIUM`

## `php.format.declParametersNewLineBeforeRightParen`

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

Requires `PREMIUM`

## `php.format.whileStatementNewLineAfterLeftParen`

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

Requires `PREMIUM`

## `php.format.whileStatementNewLineBeforeRightParen`

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

Requires `PREMIUM`

## `php.format.forStatementWrap`

Defines wrapping behavior for `for` statement.

* `Off` - No wrapping is applied
* `On every item` - When this option is selected each item in `for` statement is placed on a new line and properly indented if they are split across multiple lines.


Requires `PREMIUM`

## `php.format.forStatementNewLineAfterLeftParen`

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

Requires `PREMIUM`

## `php.format.forStatementNewLineBeforeRightParen`

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

Requires `PREMIUM`

## `php.format.ifStatementNewLineAfterLeftParen`

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

Requires `PREMIUM`

## `php.format.ifStatementNewLineBeforeRightParen`

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

Requires `PREMIUM`

## `php.format.switchStatementNewLineAfterLeftParen`

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

Requires `PREMIUM`

## `php.format.switchStatementNewLineBeforeRightParen`

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

Requires `PREMIUM`

## `php.format.implementsListWrap`

Defines wrapping behavior for `implements` list in type declarations.

* `Off` - No wrapping is applied
* `On every item` - When this option is selected each interface in `implements` list is placed on a new line and properly indented if they are split across multiple lines.


Requires `PREMIUM`

## `php.format.newLineAfterImplements`

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

Requires `PREMIUM`