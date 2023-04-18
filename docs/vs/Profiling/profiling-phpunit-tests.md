/*
Title: PHPUnit Tests
Description: Profiling PHPUnit tests.
Version: 1.73 and higher
*/

> Applies only for Visual Studio editions with `Test Explorer` functionality.

# Profile PHPUnit Test Case

> Make sure, [requirements](overview) are met.

Open `Test Explorer` in `Test` / `Test Explorer`. Then:

![profile PHPUnit test case](imgs/vs-profile-phpunit-testpng.png)

- Navigate to the single test case.
- Right click.
- Choose `Profile`.

A new `php.exe` process will start and collects profiling data. After it's finished, [Profiler View](profiler-view) will be opened with the results.

> For details about the test run or possible errors, see Visual Studio _Output_ window.

## See also

- [Profiler View](profiler-view)
- [Profiling PHPUnit Tests](profiling-phpunit-tests)
- [Installing PHP with Xdebug](../Installation/install-php)
- [Custom Xdebug configuration](../Debugging/configuring-xdebug)