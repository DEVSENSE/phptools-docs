/*
Title: Test Explorer
Description: Visual PHPUnit test explorer
*/

# Test Explorer

The Test Explorer view enables the visual execution and debugging of PHPUnit tests. The tests are executed by the PHPUnit and the results are displayed in the **Test Explorer**, as shown in the next figure. The PHPUnit output is shown in the **PHP (PHPUnit)** output tab.

![Test Explorer](imgs/test-view.png)

Each test is listed in the Test Explorer view. In the code, tests are annotated with the test icon. The icon shows the current test status, and allows to quickly *Run*, and *Debug* the test.

## Configuration

It is necessary to [configure](configuration.md) the editor before the tests can be executed. The process requires PHP (`php`), the PHPUnit package (`phpunit/phpunit`) and a PHPUnit configuration file (`phpunit.xml` (`.dist`)).

Tests are resolved quickly by parsing the `phpunit.xml` or `phpunit.xml.dist` files, and corresponding `.php` files in the workspace. Any changes to those files will automatically update the Test Explorer as well.

### PHP

Running the tests relies on the configured PHP executable. See [Selecting PHP Executable](editor/php-version-select.md) for more details.

### PHPUnit

The PHPUnit phar file or PHPUnit composer package are necessary to execute the tests. PHPUnit Test Explorer lookups the following locations, in order:

1. `"phpunit.phpunit"` setting (can be relative to the workspace folder).
  ```json
  {
    "phpunit.phpunit" : "${workspaceFolder}/phpunit"
  }
  ```
2. `{**/bin/phpunit,**/phpunit/phpunit,**/phpunit.phar}` paths. If more files matching the pattern are found, the shortest one is prefered.

Watch the `OUTPUT` window, `PHP (PHPUnit)` for details.

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

Tests can be debugged with Xdebug by clicking the bug-like icon ![Debugging Icon](imgs/test-debuging.png) in the Test Explorer view, or *Debug Test* command in the test margin. The debugging process is the same as [standard debugging](debug/index.md). The Test Explorer can debug one or more tests at once.

![Test Explorer](imgs/test-debug.gif)

### Custom Debug Launch Profile

Specify a new `"php"` or `"phpunit"` launch profile in `.vscode/launch.json` file, and use it for debugging tests in Test Explorer.

**Example `launch.json` file:**

```json
{
    "configurations": [
        {
            "name": "Debug With Mapping",
            "type": "php",
            "request": "launch",
            "pathMappings": {
                "/var/www/html": "${workspaceFolder}"
            },
            "ignoreExceptions": ["NotSupported*"]
        }
    ]
}
```

**Notes:**

- the profile must have `"name"`
- `"type"` must be either `"php"` or `"phpunit"`
- there must not be `"program"` property

The custom (launch.json) profile will be listed in Test Explorer, under **Debug** menu:

![launch test using launch profile](imgs/test-with-launch-profile.png)

## Profiling Tests

Use the **Debug** menu in Test Explorer to Profile tests, or profile a single test with right click on the test -> `Debug with Profile` -> `Profile`.

![start tests profiling](imgs/test-profile-menu.png)

Browse through the profiling results which open after the session ends:

![see profiling results](imgs/test-profile-functions.png)

While the profiling results are still opened, see the hot paths in your code:

![see hot paths](imgs/test-profile-hot.png)

**Notes:**

- [Xdebug PHP extension](debug/index.md) needs to be properly installed
- [Profiler VSCode extension](https://marketplace.visualstudio.com/items?itemName=DEVSENSE.profiler-php-vscode) needs to be installed.
- See [profiling](profiling.md) for more details.

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
