/*
Title: PHPUnit Package
Description: Using custom PHPUnit
Version: 1.24 and higher
*/

# PHPUnit Package

PHP Tools come with a bundled version of PHPUnit in case there isn't a user installation of PHPUnit in the project.

## Custom PHPUnit

PHP Tools will use a particular PHPUnit version when it's configured in the `composer.json`. Check [Composer section](../project/composer.md), and ensure there is `phpunit/phpunit` composer package installed.

## Bundled PHPUnit

In case there is no `phpunit/phpunit` composer package, the Test Explorer will use bundled PHPUnit; a stable version of PHPUnit chosen accordingly for the PHP version configured in the Project Properties.
