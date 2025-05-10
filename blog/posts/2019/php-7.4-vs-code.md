---
title: PHP 7.4 Support in VS Code
description: Support for PHP 7.4 and more
date: 2019-09-16 02:52:02
authors:
  - JohnHummel
cover_image: imgs/PHP_Tools_for_VS.jpg
categories:
  - annoucement
---

# PHP 7.4 Support in VS Code

# PHP Tools for VS Code

<!-- more -->


PHP Tools includes support for the new PHP 7.4, including:

* Editor support for all PHP 7.4 syntax such as:
  * Arrow Functions
  * PHP 7.4 Array support updates:
    - Spread arrays
    - Array returns
    - PHPDoc updates including array commenting
* Intellisense updates that include Serialization support
* Notifying users on depreciated functions

## Intellisense Updates

To keep up with the PHP 7.4 syntax, PHP Tools has been updated to handle all syntax updates.  Some of these updates:

* Arrow functions (using the `fn` command)
* Typed Properties
* Array references
* Serialized objects.

### Arrow Functions

Arrow functions, otherwise known as anonymous functions, allow developers to quickly define a function, the parameters, and the return value in one line.  For example:

```php
$squarethis = 9;

$squared = fn($square) => $square * $square;

echo "<p>Number to be squared: $squarethis.</p>";

echo "<p>Squared number: ." $squared($squarethis).".</p>";
```


<center><iframe width="640" height="360" src="https://www.youtube.com/embed/z5DbLZz_RqM?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>


### Typed Properties

PHP, like other scripted languages, has supported the ability to have variables which its data type (integer, string, etc) was derived based on the context.  So setting a variable from `$i = 5;` and then `$i = "5Bob";` are equally valid.

PHP 7.4 allows more control with scalar types and return values, allowing user to specify exactly what kind of data they are receiving and sending back.  PHP Tools is able to parse this syntax, and even return errors when detected.  For example:

```php
$squarethis = 9;

$squarebad = "Test";

function SquareValue(int $newNumber) : int
{
    return $newNumber * $newNumber;    
}

echo "<p>Using SquareValue function: " . SquareValue($squarebad) . ".</p>";
```


<center><iframe width="640" height="360" src="https://www.youtube.com/embed/I_DTYKoIiik?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>



### Arrays

#### Array Functions and Array Commenting

PHP Tools ability to resolved typed properties for variables and functions extends to arrays as well, and will issue warnings when arrays are expected and a different typed value is submitted:

```php
/**
 * Returns an array from $countdown down to 0.
 * @param int $countdown
 * @return array
 */
function ReturnArrayofValues(int $countdown) : array
{
    $list = array();
    for (; $countdown >= 0; $countdown--)
    {
        $list[] = $countdown;
    }
    return $list;
}

/**
 * Prints an array of integer values in order
 * @param array $list
 */
function PrintArrayofValues(array $list)
{
    echo "<p>";
    foreach($list as $item)
    {
        echo "<br>$item";
    }
    echo "</p>";
}

PrintArrayofValues(ReturnArrayofValues(10));
```



<center><iframe width="640" height="360" src="https://www.youtube.com/embed/ZbkfsnVoQig?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>



#### Spread Arrays

A new feature in PHP 7.4 is spread arrays, similar to how they work in JavaScript.  For example, previously arrays would have to be copied and expanded like so:

```php
    $a = array(1, 2, 3);
    $b = $a;
    $b[] = 4;
    $b[] = 5;
    $b[] = 6;
    print_r($b);
    //output:
    //Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 [5] => 6 )
```

The new spread method allows users to easily copy arrays into other arrays, or reference entire array elements at once:

```php
    $c = array(1, 2, 3);
    $d = [...$c, 4, 5, 6];
    print_r($d);
    //output:
    //Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 [5] => 6 )
```

### Serialize signatures

With PHP 7.4, the new standard for serialization is based on two new magic functions that developers can define within their class:

* `__serialize`:  Returns an array value that can then be parsed into a text string.
* `__unserialize`: Takes the serialized array object and assigns the class members value from that array.

With PHP Tools, developers are provided with helpful information processing these new magic functions.  For example:



![Serialize function](imgs/serialize.gif)



![Unserialize function](imgs/unserialize.gif)


### Depreciated Function Reporting

PHP 7.4 has [depreciated a number of functions](https://wiki.php.net/rfc/deprecations_php_7_4).  Rather than guess what functions have been depreciated, PHP Tools lets you know which are still valid, and which need to go from your code:.  Items that have been tagged with `@depreciated` will have an error display in the IDE, and will show that status on on a mouse-over:

![Depreciated Code](imgs/depreciated_VCode.gif)

---
# Related Articles


[PHP 7.4 support for Visual Studio](https://blog.devsense.com/2019/php74-visual-studio)

[Debugging PHP in VS Code](https://blog.devsense.com/debugging-in-visual-studio-code)

[Phar archives in VS Code](https://blog.devsense.com/phar-archives-in-visual-studio-code)

