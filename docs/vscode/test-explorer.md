/*
Title: Test Explorer
Description: Visual PHPUnit test explorer
*/

# Test Explorer

The Test Explorer view enables the visual execution and debugging of PHPUnit tests. The tests are executed by the PHPUnit and the results are displayed in the **Test Explorer**, as shown in the next figure. The PHPUnit output is shown in the **PHP (PHPUnit)** output tab.

![Test Explorer](imgs/test-view.png)

Each test is listed in the Test Explorer view. In the code, tests are annotated with the test icon. The icon shows the current test status, and allows to quickly *Run*, and *Debug* the test.

## Configuration

It is necessary to [configure](configuration) the editor before the tests can be executed. The process requires PHP (`php`), the PHPUnit package (`phpunit/phpunit`) and a PHPUnit configuration file (`phpunit.xml` (`.dist`)).

Tests are resolved quickly by parsing the `phpunit.xml` or `phpunit.xml.dist` files, and corresponding `.php` files in the workspace. Any changes to those files will automatically update the Test Explorer as well.

### PHP

Running the tests relies on the configured PHP executable. See [editor/php-version-select](Selecting PHP Executable) for more details.

### PHPUnit

The PHPUnit phar file or PHPUnit composer package are necessary to execute the tests. PHPUnit Test Explorer uses the following PHPUnit:

1. From the vendor directory, usually created by composer.
2. Otherwise the PHPUnit PHAR (version 6.5.12.) bundled with PHP Tools.

In case there is the `phpunit/phpunit` composer package, it is used implicitly for the tests execution.

To manually specify path to the `phpunit` binary, use setting `phpunit.phpunit`. *Example setting:*

```json
{
    "phpunit.phpunit" : "${workspaceFolder}/phpunit"
}
```

If none of the above is found, bundled PHPUnit PHAR (version 6.5.12.) is used.

### Custom Command

Running PHPUnit can be customized using the setting `"phpunit.command"`.

_Default value:_ `"\"${php}\" ${phpargs} \"${phpunit}\" ${phpunitargs}"`

The string command can have the following variables:

`${phpunit}` - will be replaced with phpunit binary path.
`${phpunitxml}` - will be path to corresponding `phpunit.xml`.
`${phpunitargs}` - the arguments we provide, including generated filters for executing specific tests or groups.
`${php}` - resolved path to php executable.
`${phpargs}` - the default arguments for php we provide.
`${cwd}` - current working directory.

See the VSCode's `Output` > `PHP (PHPUnit)` tab for details.

### Configuration File

The tests rely on the `phpunit.xml` or `phpunit.xml.dist` configuration files ([PHPUnit configuration](https://phpunit.de/manual/6.5/en/appendixes.configuration.html)), which should be placed in the root of the workspace.

### Tests

The name, location, extension and settings of the tests are defined in the `phpunit.xml` configuration file. 
The tests should be located in a sub-directory, not directly in the workspace root, because PHPUnit does not recognize them there.

## Test Explorer View

Test Explorer View provides tools for manual and automatic test execution with visual representation of the results. The view is only visible if there are some tests or the `phpunit.xml` configuration file in the workspace.

![Test Explorer](imgs/test-explorer.gif)

## Debugging Tests

Tests can be debugged with Xdebug by clicking the bug-like icon ![Debugging Icon](imgs/test-debuging.png) in the Test Explorer view, or *Debug Test* command in the test margin. The debugging process is the same as [standard debugging](Debug). The Test Explorer can debug one or more tests at once.

![Test Explorer](imgs/test-debug.gif)

## Test Results

Test results are displayed:

- the Test Explorer view shows small icons next to each test and the test run duration. The icons meaning is:
  * ![Test success](imgs/test-success.png) - The test was executed without errors.
  * ![Test failure](imgs/test-failure.png) - The test was executed with errors; the error message is in the output tab.
  * ![Test skipped](imgs/test-skipped.png) - The test was executed and skipped (see [incomplete-and-skipped-tests](https://phpunit.de/manual/6.5/en/incomplete-and-skipped-tests.html)).
  * ![Test running](imgs/test-running.png) - Test is currently running (this is shown usually during debugging).
- the icon next to each test right in the code shows icon with the last test result as well.
- failures are displayed inline, right on the failed assertion:
  ![Failed assertion with diff](imgs/test-diff.png)

The actual result of the PHPUnit execution is displayed in the **PHP (PHPUnit)** output tab, while each test has its own output available by clicking on the test in the Test Explorer View.

![Test Output](imgs/test-output.png)
