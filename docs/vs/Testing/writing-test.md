/*
Title: Writing Test Case
Description: How to write a PHPUnit test case.
Version: 1.13 and higher
*/

# Writing Test Case

Test case is a PHP class containing test methods. See [phpunit.de/manual](http://phpunit.de/manual/current/en/writing-tests-for-phpunit.html) for more information about PHPUnit tests.

By default, Test Explorer looks for script files suffixed with `Test.php`, containing a class suffixed with `Test` and extending base test case class. Any public function within the test class prefixed with `test` (lowercased) or annotated with PHPDoc keyword `@test` is listed in the Test Explorer window.

![PHPUnit Test Case](imgs/testcase.png "PHPUnit Test Case implementation.")

> **Note:** script files have to be saved to reflect changes in the Test Explorer window.