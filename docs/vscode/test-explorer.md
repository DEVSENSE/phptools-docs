/*
Title: Test Explorer
Description: Visual PHPUnit test explorer
*/

# Test Explorer

The Test Explorer view enables the visual execution and debugging of PHPUnit tests. The tests are executed by the PHPUnit and the results are displayed in the **Test Explorer**, as shown in the next figure. The PHPUnit output is shown in the **PHP (PHPUnit)** output tab.

![Test Explorer](imgs/test-view.png)

Each test is listed in the Test Explorer view, and above each test function as a **code lens** with direct actions to *Run*, *Debug*, and the test status.

## Configuration

It is necessary to [configure](configuration) the editor before the tests can be executed. The process requires PHP, the PHPUnit package and a PHPUnit configuration file.

Tests are resolved quickly by parsing the `phpunit.xml` or `phpunit.xml.dist` files, and corresponding `.php` files in the workspace. Any changes to those files will automatically update the Test Explorer as well.

### PHP

Running the tests relies on the configured PHP executable. See [editor/php-version-select](Selecting PHP Executable) for more details.

By default, the workspace is configured to use the global `php` command.

### PHPUnit

The PHPUnit phar file or PHPUnit composer package are necessary to execute the tests. PHP Test Explorer uses the following PHPUnit:

1. From the vendor directory, usually created by composer.
2. Otherwise the PHPUnit PHAR (version 6.5.12.) bundled with PHP Tools.

### Configuration File

The tests rely on the `phpunit.xml` or `phpunit.xml.dist` configuration files ([PHPUnit configuration](https://phpunit.de/manual/6.5/en/appendixes.configuration.html)), which should be placed in the root of the workspace.

### Tests

The name, location, extension and settings of the tests are defined in the `phpunit.xml` configuration file. 
The tests should be located in a sub-directory, not directly in the workspace root, because PHPUnit does not recognize them there.

## Test Explorer View

Test Explorer View provides tools for manual and automatic test execution with visual representation of the results. The view is only visible if there are some tests or the `phpunit.xml` configuration file in the workspace.

![Test Explorer](imgs/test-explorer.gif)

## Debugging Tests

Tests can be debugged with Xdebug by clicking the bug-like icon ![Debugging Icon](imgs/test-debuging.png) in the Test Explorer view, or *Debug* action above the test function. The debugging process is the same as [standard debugging](Debug). The Test Explorer can debug one or more tests at once.

![Test Explorer](imgs/test-debug.gif)

## Test Results

Test results are displayed in the Test Explorer view as small icons next to each test with the following meaning:

* ![Test success](imgs/test-success.png) - The test was executed without errors.
* ![Test failure](imgs/test-failure.png) - The test was executed with errors; the error message is in the output tab.
* ![Test skipped](imgs/test-skipped.png) - The test was executed and skipped (see [incomplete-and-skipped-tests](https://phpunit.de/manual/6.5/en/incomplete-and-skipped-tests.html)).
* ![Test running](imgs/test-running.png) - Test is currently running (this is shown usually during debugging).

The actual result of the PHPUnit execution is displayed in the **PHP (PHPUnit)** output tab, while each test has its own output available by clicking on the test in the Test Explorer View.

![Test Output](imgs/test-output.png)

