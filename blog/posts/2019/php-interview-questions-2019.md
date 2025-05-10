---
title: Top PHP Interview Questions in 2019
description: Top PHP Interview Questions in 2019
date: 2019-01-31 00:00:00
authors:
  - admin
tags:
  - php
cover_image: imgs/interview2.jpg
categories:
  - general
---

# Top PHP Interview Questions in 2019

Do you have an interview with a hiring manager for a "PHP Developer" position? Are you worried about what will you be asked in the interview? Even if you're just studing for a test or you're an autodidact trying to master PHP, you should review the top 25 PHP interview questions and their answers.

<!-- more -->

## 1) What is the difference between `require_once()`, `require()`, `include()`, and `include_once()` functions?

 - `require()` will cause **E_COMPILE_ERROR** which is a fatal error and the script will stop. 

 - `include()` will only cause **E_WARNING** which is a warning and the script will continue. 

 - `require_once()` and `include_once()` statements are used when you need to include a file more than once. If it is found that the file has already been included, calling script is going to ignore further fatal errors or warnings respectively. 

## 2) What is the difference between `explode()`, `preg_split()` and `str_split()` functions?

 - `explode()` splits a given string into array by string. 

 - `preg_split()` splits a string by using a regular expression.

 - `str_split()` converts a given string to an array.

## 3) Define `ksort()`, `krsort()`, `asort()` and `arsort()` functions. 

 - `ksort()` function sorts an associative array according to the key in ascending order. 

 - `krsort()` function sorts an associative array according to the key in descending order. 

 - `asort()` function sorts an associative array according to the value* in ascending order.

 - `arsort()` function sorts an associative array according to the value in descending order.

## 4) What is a magic method?

The magic methods (or functions) begin with two underscores (__) and have special names. These methods are invoked by particular events. PHP calls the function instead of the coder and provides more functionality. Magic methods are: 

 - `__construct()`, `__destruct()`, `__call($funName, $arguments)`, `__callStatic($funName, $arguments)`, `__get($propertyName)`, `__set($property, $value)`, `__isset($content)`, `__unset($content)`, `__sleep()`, `__wakeup()`, `__toString()`, `__invoke()`, `__set_state($an_array)`, `__clone()`, `__autoload($className)`, `__debugInfo()`

## 5) What is the difference between `$var` and `$$var`?

`$var` and `$$var` are both variables. The first one is a normal variable, and the second one is a reference variable. `$var` has a fixed name, while the name of `$$var` is stored in `$var`.

![var_example](imgs\var_example.png)

## 6) What is the difference between `htmlentities()` and `htmlspecialchars()` functions?

 - `htmlentities()` converts all possible characters to HTML entities. 
 - `htmlspecialchars()` converts only predefined characters to HTML entities. 

## 7) What are the error types in PHP?

 - `Notices`: These are non-critical errors which occur during executing a script. These errors are not displayed to the user by default. For example, trying to call an undefined variable. 

 - `Warnings`: These are serious errors which are displayed to the user, but don't cause script termination. For example, trying to call a non-existent file. 

 - `Fatal errors`: These are critical errors which cause the termination of the script. For example, trying to call a non-existent function. 

## 8) Define the numeric array, associate array and multidimensional array.

 - Numeric array is an array that uses numeric index. Values are stored in a linear way. 

 - Associative array is the array in which the keys are strings.  

 - Multidimensional array is an array which contains one or more arrays. The values can be accessed by multiple indices.

## 9) How can you get environment variables?

 - `getenv()` function provides access to the value of all environment variables.

![getenv](imgs\getenv.gif)

## 10) Define `$_REQUEST`

`$_REQUEST` variable contains `$_GET`, `$_POST`, and `$_COOKIE`. `$_REQUEST` can be used to get form data sent with `GET` and `POST` methods. 

![request](imgs\request.gif)

## 11) What is the use of the array operator `===`?

The array operator checks the variables on the left and the right side, whether they have the same key-values in the same order and they are of the same types.

## 12) What is the difference between `preg_match()` and `preg_split()` functions? 

 - `preg_match()` function searches the given string for a required pattern, returning true if the pattern exists, or false, otherwise. 

 - `preg_split()` function uses regular expressions as input parameters for a pattern. It operates like `split()`.

## 13) What is function overriding?

In a child class, the definition of a function which is inherited from parent class can be changed by overriding. 

## 14) What is the `final` keyword?

The `final` keyword prevents the child class from overriding a method. If the class is defined `final`, then it can not be extended. 

## 15) What is the output of the following code?

![foreach](imgs\foreach.png)

**Answer**:

 - Joe

 - Jack

 - William

 - Avarel

## 16) There are two main types of filtering:

 - Validate filters

 - Sanitize filters

## 17) What is the output of the following code?

![filter](imgs\filter.png)

**Answer**: valid

![filter](imgs\filter.gif)

## 18) How many methods are there for the exception class?

The seven methods are: `getCode()`, `getFile()`, `getLine()`, `getMessage()`, `getPrevious()`, `getTrace()`, `getTraceAsString()`. 

## 19) Which function reads a file into a string variable?

`file_get_contents()`

![filegetcontents](imgs\filegetcontents.gif)

## 20) What is the output of the following code?

![classes](imgs\classes.png)

**Answer**:

 - bool(true)

 - bool(true)

## 21) What is the output of the following code?

![count](imgs\count.png)

**Answer**: *no output*

## 22) What is the output of the following code?

![ternary](imgs\ternary.png)

**Answer**: 2

![ternary](imgs\ternary.gif)

## 23) What is the use of `$_SERVER['PHP_SELF']`?

`$_SERVER['PHP_SELF']` is a variable that returns the filename of the current script. 

## 24) What is the output of the following code?

![arrayreverse](imgs\arrayreverse.png)

**Answer**: 

```php
Array ( [2] => Array ( [0] => William [1] => Avarel) [1] => Jack [0] => Joe)
```

![arrayreverse](imgs\arrayreverse.gif)

## 25) How can a session be started?

A session is started by calling `session_start()` function. This function checks if a session has already started. If not, it starts one. 

## Conclusion

In conclusion, these PHP questions are some of the most asked questions in interviews worldwide, but it doesn't mean that's all. You should continue to review and you might want to continue reading some interesting questions with their answers [here](https://www.codementor.io/blog/php-interview-questions-answers-du1080ext). If you think there are more questions that should be included in this list, please, share in the comments below. 