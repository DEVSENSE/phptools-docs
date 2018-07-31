/*
Title: Test Configuration
Description: Configuring test cases.
Version: 1.14 and higher
*/

# Test Configuration

Custom configuration of test cases can be defined in a standard [PHPUnit Configuration file](http://phpunit.de/manual/current/en/appendixes.configuration.html). This allows to specify bootstrap script, timeouts, error handling and other PHPUnit framework options.

## Choosing Configuration File

The Configuration file must be a valid XML file containing `<phpunit>` root element. To choose active test configuration, go to the Solution Explorer, right click onto a configuration file and choose 'Active PHPUnit Configuration'.

> **Note:** Active PHPUnit Configuration setting is stored per user (within Solution User Options (.suo) file).

![PHPUnit configuration context menu](imgs/testconfig-menu.png "PHPUnit configuration context menu.")

If no configuration file is set, the test runner will try to find a configuration file in the root of your solution directory and then in the root of your projects.

## Editing Configuration File

The second command in the menu is `Open in Configuration Editor`. This opens the configuration editor which allows to set various PHPUnit options. See PHPUnit documentation for more information.

![PHPUnit configuration](imgs/phpunit-config-editor.png "PHPUnit configuration.")