/*
Title: PHPUnit Package
Description: Using custom PHPUnit
Version: 1.24 and higher
*/

# PHPUnit Package

PHP Tools come with bundled version of PHPUnit in case there is no user installation of PHPUnit in the project.

## Custom PHPUnit

PHP Tools will use users phpunit package in case it is configured in project' `composer.json` (as a composer package). In order to use custom phpunit see [Composer section](../project/composer).

## Bundled PHPUnit

In case there is no 'phpunit/phpunit' composer package, the Test Explorer will use bundled PHPUnit; a stable version of PHPUnit chosen accordingly to currently set PHP runtime version.
