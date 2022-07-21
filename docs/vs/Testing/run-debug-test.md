/*
Title: Run and Debug Tests
Description: Running and Debugging test cases.
Version: 1.13 and higher
*/

# Run and Debug Tests

[Test Explorer](/Testing/test-explorer) allows to run and debug listed test cases: all tests, not-run tests, failed tests, passed tests, selected tests or tests in a specific group or test suite. To run all tests, click `Run All` in the upper bar of the Test Explorer. To run only selected tests, select tests or a group, right-click and choose `Run Selected Tests`.

## Debugging tests

To debug tests, ensure you have [PHP interpreter](/debug/installing-php) properly configured. Tests always run locally and require PHP and Xdebug to be properly configured.

Choose tests to debug in the Test Explorer, right-click and select `Debug Selected Tests`. This will initiate the PHP Debugger with the ability to stop on breakpoints, and watch for variables and other debugger features.
