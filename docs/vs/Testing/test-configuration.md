/*
Title: Test Configuration
Description: Configuring test cases.
Version: 1.14 and higher
*/

# Test Configuration

Configuration of test cases is defined in a standard [PHPUnit Configuration file](http://phpunit.de/manual/current/en/appendixes.configuration.html). This allows specifying bootstrap script, timeouts, location of the test files, error handling and other PHPUnit framework options.

See [writing a test case](writing-test) for more details.

## Configuration Files

**Test Explorer** (in the menu `Test / Test Explorer`) lists all the available test suites by looking in `phpunit.xml` and `phpunit.xml.dist` configuration files within all the opened projects.

By default, there should be a single `phpunit.xml` file in the root of the PHP project with the following text:

```xml
<phpunit
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:noNamespaceSchemaLocation="https://schema.phpunit.de/6.3/phpunit.xsd"
         backupGlobals="true"
         backupStaticAttributes="false">
  <testsuites>
    <testsuite name="My Test Suite">
      <directory>tests</directory>
    </testsuite>
  </testsuites>
</phpunit>
```

Customize the file according to the [PHPUnit documentation](http://phpunit.de/manual/current/en/appendixes.configuration.html).