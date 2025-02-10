/*
Title: Laravel
Description: Using Laravel in PHP extension for Visual Studio Code
*/

# Laravel

> [PHP extension](https://marketplace.visualstudio.com/items?itemName=DEVSENSE.phptools-vscode) version >= `1.55`.

Support for Laravel framework is built-in. The editor provides additional code completion, navigation, syntax highlighting, `.blade.php` editor, code formatting style for Laravel, and debugging using built-in server.

## Blade Templating

![blade file](img/blade-file.png)

The editor for `blade.php` files is extended with PHP syntax support, code folding, Blade directives completion, Laravel Components and Livewire Components completion and navigation, and Blade file formatting.

### Blade File Formatting

The formatter is built-in and provides code formatting for HTML, CSS, JS, and PHP, and the structure of Blade file. Use `Format Document` editor command.

The configuration respects configurations of PHP, HTML, JS, CSS settings in VSCode respectively, and no additional setting is needed.

### PHP Editor inside Blade Directives

![php in blade IntelliSense](img/blade-php-code.png)

Nested PHP code inside `.blade.php` files is treated as regular PHP code - all the PHP editor features are enabled including code completion, navigation, tooltips, diagnostics, inlay hints, code lenses, or formatting.

### Blade Directives Completion

![blade directive completion](img/blade-directive-completion.png)

Blade directives are completed upon typing `@` character. Completions representing a snippet are annotated with a _snippet_ icon.

The list contains common Blade directives, directives defined within user code using `Blade::directive()` and `Blade::if()` methods, and directives defined in `ide.json` customization file.

### Components Completion and Navigation

![component competion](img/blade-component-completion.png)

Blade views, components, and Livewire components are scanned in default Laravel directories. View classes and `.blade.php` files are suggested using the Laravel view notation:

- As HTML tags after `<x-`, or inside `@include`, `@each` and other directives.
- Livewire components after `<livewire:`, and inside `@livewire()` directive.
- In `view()` function and similar.

![view completion](img/view-completion.png)

Additionally, component attributes are suggested in related functions.

![view completion](img/view-completion.gif)

Component attributes defined as view class properties, view `@props`, or Livewire `mount()` parameters are suggested/navigated to.

![component competion](img/blade-attribute-completion.png)

### Component Attributes and Livewire Actions

> Since `1.56`

Component classes exposing properties and Livewire actions are used to provide additional completions of variables and possible values for `wire:` attributes.

![Livewire Actions and Component Porperties in Blade Files](img/laravel-component-property-completion-wire.gif)

### Sections Completion

> Since `1.56`

![Blade Sections Completion](img/blade-sections-completion.gif)

Section names are collected across the Blade files extended by or extending the current view. Sections are then suggested in appropriate directives.

### Switch between Blade View and Class

> Since `1.56`

To switch quickly from a view file to its corresponding class, and vice versa, create a keyboard shortcut and associate it with `"phptools.blade.switchViewClass"` command.

1. Open Visual Studio Code, navigate to **Preferences** and **Keyboard Shortcuts** (or use command palette `> Open Keyboard Shortcuts`):
    ![VSCode Keyboard Shortcuts Menu](img/preferences-keyboardshortcuts.png)
2. Search for `phptools.blade.switchViewClass`, and associate it with your keyboard shortcut:
    ![Blade Switch View Shortcut](img/preferences-keyboardshortcuts-blade-switchview.png)

## Laravel Code Formatting Style

Please see [Code Styles](../editor/code-styles.md) and make sure to switch to `Laravel` code style to enable all Laravel formatting rules.

![laravel code style setting](img/settings-codestyle-laravel.png)

## Facades, Services, and Class Aliases

The editor recognizes class aliases such as `Route` defined across Laravel framework and in `app` configuration. Class aliases are listed in PHP code completion togeher with other symbols.

![laravel service completion](img/laravel-service-completion.png)

Laravel is heavily based on service containers and dependency injection. Registered Laravel services from across the Laravel project are recognized and used for additional code completion after `app()` or in Laravel facades.

![laravel facades](img/laravel-facade-completion.png)

The editor traverses through Laravel Facades, their accessor service, and recognizes completion methods. In case the facade accessor service can't be recognized using static code analysis, annotate the Facace class with `@mixin` PHPDoc keyword, for example:

```php
/ ** @mixin \Illuminate\Cache\Repository * /
class Cache extends Facade { ... }
```

## Eloquent Models

> Since `1.56`

![eloquent model member completion](img/eloquent-model-completion.png)

Eloquent query builder has full code completion including extensive generic types inferrence, and completion of model columns defined by its model factory. Note, this works best in newer Laravel framework versions (9 and newer, 11+ preferably) since they are better annotated.

![eloquent local scopes](img/eloquent-local-scope-function.png)

Code completion provides local-scoped functions out of the box, and `where` functions for model columns, without additional annotation or configuration needed.

![eloquent where clausule](img/eloquent-where-function.png)

**Eloquent model table columns** are resolved from (what's defined first):
  - model class PHPDoc `@property`(s).
  - models Factory class `definition()` function.
  - using models table name (if can be resolved), and by looking up migrations in `database/migrations/` and `Schema` definitions.

> columns are not obtaind directly from database.

## Completion and Navigation in Laravel-Specific Functions

![view completion](img/view-completion.png)

Special Laravel functions such as `__()`, `lang()`, `@lang()` blade directive, `config()`, `env()`, `storage_path()`, `asset()`, `view()`, `@include()`-like blade directives, `mix()`, `route()`, `View::make()`, and others have additional code completions and navigations.

### Route Completion

![named route completion](img/laravel-route-completion.png)

Named routes are identified within `/routes/` directory. Route name and the route's parameters are suggested in `route()` function (and related functions) together with detailed tool-tip.

![route parameter completion](img/route-completion.gif)

## Laravel Idea `ide.json` Support

> Since `1.56`

![laravel idea ide.json](img/laravel-ide-json-example.png)

Additional code completions, blade directives, and blade components defined within special `ide.json` file(s) are supported. The `ide.json` can be placed anywhere in the VS Code workspace.

## Debugging using Built-in Server

> Please see [debugging overview](../debug/index.md) for configuring PHP and [Xdebug](https://xdebug.org/) binaries first. Note, you don't need additional VSCode extensions.

### Without Launch Profile

Without `.vscode/launch.json` launch file, simply press `F5` (Run / Start Debugging) with any opened `.php` file. VSCode will popup the following pre-configured profiles which initiate built-in Web Server with debugging enabled for the Laravel application.

![laravel debug](img/default-start-configurations.png)

`Launch built-in Server and Debug` starts built-in development Web Server (using [selected PHP](../php-version.md)), with Laravel routing, `.env` file, and debugging enabled.

### Launch Profile

![select profile](img/select-launch-profile.png)

For more customization, create a [launch profile](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations), and select PHP. The profile will be pre-configured for use with Laravel.

> Please watch DEBUG CONSOLE window for the development server log, or issues.

## See Also

- Selecting PHP Version: [PHP Version](../editor/php-version-select.md)
- Configuring code diagnostics: [Problems](../problems/configuration.md)
- Installing packages using Composer: [Composer](../composer.md)
- Running PHPUnit Tests: [Test Explorer](../test-explorer.md)
- Code Formatting Style: [Code Styles](../editor/code-styles.md)
- Profiling Laravel App Tutorial: [Profiling Laravel App in VS Code](https://blog.devsense.com/2025/profile-laravel-in-visual-studio-code)
