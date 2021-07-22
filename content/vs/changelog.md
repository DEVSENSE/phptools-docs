## 1.55.14016 (July 22, 2021) preview

- new **WordPress project template**
- new **Project Fixes Wizard**
- fixes occasional missing project properties content
- automatic project fix asks for elevated rights just once

### Visual Studio 2022 PREVIEW 2 support

- Requires *Visual Studio 2022 Preview 2*
- Requires *ASPNET Web Development* Workload

### Editor

- editor brace matching color respects user settings
- context aware keywords in code completion

## 1.55.13902 (July 14, 2021) stable

### New Features

- new **New Web Project** Wizard
- new **From Existing Code** Wizard
- new integration into `File / New / Project From Existing Code`
- `Project From Existing Code` allows to create project from remote source
- added context menu command `Add / New / New PHP Script`
- since Visual Studio 2019: Common Project System (CPS) used by default
- **Publish** functionality added to the new CPS project type

### Improvements

- the new project wizard verifies and updates configurations
- code completion sorts the variables by its name, so they are next to other items with the same name
- code completion preselection prefers variables and local symbols
- publish/download tries to reconnect automatically when connection is lost
- debugger fixes and improvements
- integrated composer updates
- enabled a few more features without activation
- performance improvements

### Fixes

- improved extension startup
- removed forgotten and unused PHPUnit menu commands
- fixed menu icons on VS 2019
- debugger stability fixes
- stability fixes

## 1.52.13623 (June 28, 2021) stable

- new **auto-import** on code completion
  - configurable in **Tools / Options** - **Text Editor / PHP / IntelliSense**
  - automatically adds `use` alias or inserts fully qualified name
- completion filtering with letters
- completion inserts fully qualified name if there would be a conflict with existing alias
- completion tooltip does not show URLs information (they can't be clicked anyways)
- (VS 2019) completion shows full namespace for symbols that will be imported
- fixes slow startup time and notification by Visual Studio
- fixes incorrectly underlined errors in PHP Editor
- more undocumented *.phpstorm.meta* notation supported (e.g. `&` as a type separator)
- notification InfoBar about expired license
- optimizations
- freeze fixes

## 1.52.13483 (June 17, 2021)

- Common Project System provides `Ctrl+F5` functionality
- PHP installed as a part of XAMPP can be used by projects
- integrated composer gets updated to version 2
- *Tools/Options/PHP Tools* UI layout cleanups
- fixes editor highlighting occurences
- updated PHP 5.4 installer

### PHP diagnostics

  - restrict `$GLOBALS` use in PHP 8.1
  - use of `[]` in read expression

### Legacy VS Support

- fixed smart tags and corresponding VS crashes in VS 2010 - 2015
- fixed VS2010 - VS2015 support (some configurations have a missing DLL)
- re-enabled smart tag actions in VS2015

## 1.52.13439 (June 4, 2021)

- `short-open-tag` directive read from *php.ini* when using built-in PHP
- added project property `<ShortOpenTag>true</ShortOpenTag>` to force enable short open tags
- optimizes background tasks
- Debug fixes for globals in Watch window
- Updated PHP builds
- Updated networking protocols

### Visual Studio 2019 fixes

- reflects VS 16.10 API updates
- fixes PHP Editor with custom file extension
- Common Project System (CPS) option enabled in *New|Project|PHP Web Project*
- fixes cursor color in Regex Tool Window in Dark Theme
- Regex editor fixes for double-quoted strings

## 1.52.13403 (May 25, 2021)

- fixes invalid path in Test Explorer
- fixes errors in case of invalid paths in project system
- fixes debug being terminated in exception handling
- `eval()` has tooltip

## 1.52.13380 (May 15, 2021) preview

- **PHP 8.1**
  - new enum syntax, icons in navigation, IntelliSense, tooltips
  - octal number notation
  - `never` return type, highlighting, analysis and checks
- completion: static functions listed after `$this->` as well
- fixes

## 1.52.13357 (May 10, 2021) stable

### [Regex Editor (VS 2019)](https://docs.devsense.com/vs/editor/regex)

- Regular expression inside `preg_***` function or HEREDOC is colorized and highlighted
- Regular expression provides brace matching
- Quick action `Regex Designer` on regex opens *Regex Tool Window*
- *Regex Tool Window* panel with regex analysis, sync with code
- *Regex Tool Window* shows defined groups
- *Regex Tool Window* allows to test agains a test subject, shows detailed matches
- *More information at the [documentation](https://docs.devsense.com/vs/editor/regex)*

### PHP 8.1 (dev)

- **development** version of PHP 8.1 can be installed automatically

### Other

- (VS 2017) Test Explorer support `Open Folder` projects
- Updated Xdebug and PHP releases.
- updated publish protocols to the latest

### Fixes and Improvements

- code action for getter/setter annotates type hints correctly
- correct project name in Text Explorer
- Composer dependencies tree fixes and improvements
- (VS 2017, VS 2019) fixes Folder Project handling
- general optimizations and fixes
- HEREDOC parsing fixes
- named parameters fixes for built-in functions with unusual parameter names

## 1.51.13247 (April 9, 2021) stable

- Test Explorer works with **Open Folder** feature (VS 2019)
- code action **Sort Uses** (PSR-12)
- code action **Remove and Sort Uses**
- improved remote debug mapping UI (in Project Properties)
  - local path suggestions
  - path validation
- improved DBGpProxy UI (in Project Properties)
  - validation and connection verification
- updated PHP 8 validation, checks the extension `php_gd.dll` instead of `php_gd2.dll`
- reports use of curly braces as error in PHP `>= 8.0`
- fixes crashing the app on rare cases with legacy project types

## 1.51.13160 (April 2, 2021) preview

- updated Pico CMS project template (2.1.4)
- outputs more information during debug in output window
- reports use of deprecated or not available methods as warnings
- CPS project template updated
- updated PHP parser

### x64

- 64-bit PHP 8.0, 7.4, 7.3, and 7.2 available to be selected in project properties
- 64-bit PHPs get installed automatically
- corresponding Xdebug extension for 64-bit PHP gets installed automatically
- if there is no PHP yet, the 64-bit version gets installed by default

### Editor

- code action for generating property setter, or getter, or both
- code action for generating __construct method
- code action for generating __construct from defined properties
- correct URL in tooltip over PHPDoc tag

### Debugger

- shows stack frames of fatal errors
- navigates to failed line in case of fatal error

### Test Explorer

- lists all the phpunit configurations
- test projects are correctly named
- improved performance
- fixes tests debugging when Xdebug port number is not `9000`

## 1.50.13071 (March 24, 2021) preview

- Fixes lag when opening code completion.
- Shows PHP log in Output's `Debug` pane.
- Improves code analysis in try/catch.
- Improves tooltip perf. for variables.
- Memory optimizations.
- Fixes phpunit integration when phpunit is required in `composer.json`.

## 1.50.13029 (March 11, 2021) preview

- (VS 2019) Option to choose whether to analyse user code and/or vendor folder(s). "User code" only by default.
- Smart indenting of `finally` block.
- Clickable URLs in tool tips.
- Improves editor responsiveness.
- Fixes not disapearing signature help in anonymous functions.
- Fixes error underlining when `.editorconfig` is applied.
- Fixes debugger when using Xdebug 3.0.
- Stability fixes (fixes crash on malformed `.editorconfig`).
- Composer integration fixes.
- Composer window fixes.

## 1.50.12929 (February 26, 2021) stable

- (VS 2019) Fixes of Publish functionality.
- Reverted asynchronous code completion.
- Fixes `NullReferenceException` dialog when renaming files.
- Fixes crash on opening a project.
- Fixes crash when working with Drupal projects.
- (VS 2019) Shows details about indexing PHP files in VS progress status (lower left corner).
- Improves performance when having composer packages.
- Improves project load times.
- Overall performance improvements.
- Logs details from WebPlatformInstaller process.

## 1.50.12866 (February 18, 2021) stable

- fixes possible stuck on project load
- fixes tests run
- fixes invalid composer failure reported to user
- allows new project even if PHP cannot be installed
- updated pcre check
- updates PHP0423 warning for ambigous functions
- updates PHP 8.0 installation from WebPI
- (VS 2019) speedups project open

## 1.50.12845 (February 17, 2021) preview

- updated PHP manual with more PHP 8 declarations
- avoided a few falsely reported problems
- fixes type analysis for reserved keywords within PHPDoc `@return` tag
- more details in tool-tips for built-in type keywords
- DBGp Proxy support fixes for the server downloaded from the Xdebug home page
- fixes missing declarations in IntelliSense
- speedups project load
- Twig editor fixes.
- PHPDoc generated above local and global variables.

### Composer

- Fixes list of required composer packages.
- fixes falsely reported composer missing packages warning
- fixes duplicate composer warning bar
- fixes composer tree (performance and too many packages listed)

## 1.50.12791 (February 10, 2021) preview

- Fixes new project creation.
- Asynchronous code completion popup.
- (VS2019) Improves editor responsiveness.
- Fixes exception during project analysis.
- Less warnings about suspicious type conversions between `string` and `number`.
- Improves analysis of WordPress code base.
- Stability fixes.

## 1.50.12752 (February 3, 2021) preview

- Colorizing and analysing code in rename refactoring preview.
- Colorizing code in peek window.
- Code analysis respects subtypes, trait implementors, and mixins.
- Improves type analysis of standard functions.
- Improves type analysis and code analysis of user's code.
- Avoids some falsely reported warnings.
- Updated PCRE checks.
- Improves rename refactoring for fuctions as strings.
- Validating and automatically enabling PHP extensions in Laravel.
- Updates Xdebug to 3.0.2. (3.0.0 has issues when unsetting breakpoints)
- Better tooltip in case it can be either a class or function.
- Improves phpstorm metadata processing.
- Optimizations.
- Stability fixes.
- Test executor uses correct arguments.

### Debug

- Fixes remote debugging with path mapping with spaces.

## 1.50.12628 (January 8, 2021) stable


### Code Analysis

- optimizations
- respects @template annotation in PHPDoc
- handles inline @var annotation
- signature help for ambiguous constructors (new \ReflectionMethod)
- PHPDoc array type with union elements annotation (array<A\B\C>)
- PHPDoc allows for nullable type annotation (e.g. ?int)
- improves code analysis, avoids some false positives
- improves code flow analysis, isset(), is_resource(), and type inference
- improves analysis for lambda function use variables
- CLI specific constants and variables are allowed and code completed
- updates .phpstorm.meta.php parser for type inference
- does not respect PHP4-style ctor when using PHP 7.1+
- fixes return check of generator functions
- fixes check for __clone() magic method, can be private
- fixes check for array access on \SplObjectStorage
- fixes case and array key duplicity check for non-printable characters

### Editor

- (VS2017, VS2019) Progress UI in lower left corner of VS.
- (VS2019) Improves type names shown in tool tips.
- performance optimizations
- "Go to Implementation" for traits
- fixes "Go to Implementation" in case of an anonymous class

## 1.40.12554 (December 29, 2020) preview

- IntelliSense improvements
- Warnings consolidations
- Memory optimizations
- IIS/Express more HTTP requests methods added to php handlers
- allows to debug multiple PHP projects
- fixes Simple CMS template in New Project wizard

## 1.40.12483 (December 23, 2020) stable

- support for `@mixin` annotations
- fixes IntelliSense of type names in PHPDoc
- fixes `@method` tag with `$this` return type
- implements Find All References of methods specified in `@method` tag
- fixes debugging of PHPUnit Tests (VS 2019 16.8+)
- fixes crash during processing of `composer.json`
- fixes editor exception when getting a tooltip right after opening a file
- updates PCRE checks

## 1.40.12460 (December 17, 2020) stable

- fixes type names in generated code and tool tips
- fixes error during navigating into a PHAR file
- fixes code analysis of class/interface declaration and overrides
- fixes test explorer - running selected tests
- fixes error when processing `composer.json`

## 1.40.12447 (December 16, 2020) stable

- smart indent within `match` expression
- updated PHP manual
- fixes missing `die` in IntelliSense
- More code actions for invalid union types
- More diagnostics for union types
- Updated PCRE check
- Updated displayed type names in tool-tips
- stability fixes
- test explorer discovery and execution fixes
- IIS setup improvements

## 1.40.12409 (December 4, 2020) stable


### IntelliSense

- named arguments code completion (PHP 8)
- named arguments hover information
- functions annotated with `#[Deprecated]` attribute reported in diagnostics
- diagnostics for matching or unknown named arguments (PHP 8)
- diagnostics for `iterable` type hint
- diagnostics for nullable types
- diagnostics for union types (PHP 8)
- `null` type name within unions (PHP 8)
- improved `.phpstorm.metadata.php` annotations
- shorter type names in tool tips

### Debug

- support for Xdebug 3.0 and PHP 8.0 debugging

### Project

- PHP 8.0 can be selected as the project language version
- PHP 8.0 + Xdebug 3.0 automatic installation
- Laravel project ide helpers restored automatically
- IIS support improvements and fixes

## 1.40.12331 (November 21, 2020) stable


### IntelliSense

- Updates Error List when `.editorconfig` changes.
- PHP 8 `mixed` type correctly handled in type analysis
- `PHP0418` for use of an undefined method
- `PHP0415` for use of an undefined constant
- Doctrine @Annotation, and annotation classes in PHPDoc IntelliSense
- Updated PHP constants information
- Updated PHP manual translations
- Performance improvements

### Project

- IIS Express configuration is kept in the local `applicationHost.config` is possible
- Internet Information Services (IIS) server support
- Automatic installation of PHP w/ Xdebug on IIS

### VS 2019

- Performance improved for larger projects with a lot of warnings

## 1.40.12223 (October 28, 2020) stable


### General

- New Project wizard improvements.
- Stability fixes

### IntelliSense

- Supports more PHPDoc array syntax conventions
- Improved analysis of functions returning `static`
- Improved analysis of `isset()`
- Supports `@suppress` and `@SuppressWarnings` PHPDoc tags to ignore specified warnings

### VS 2019

- Fixes possible VS freezing when there is a lot of errors in Error List
- Project publish fix
- Colorize @method tag

### VS 2012

- Stability fixes

## 1.40.12103 (September 25, 2020) stable

- PHP 8 new attribute syntax '#[ ... ]'
- PHP 8 new named arguments syntax (not in IntelliSense yet)
- Diagnostic for names that can be simplified (PHP6601).
- Diagnostic for unused parameters in constructors and private functions.
- Stability fixes

## 1.40.12083 (September 18, 2020) stable

- Stability improvements.

### Editor

- PHP 8.0 "match" syntax support (you need to have PHP 8.0 installed)
- PHP 8.0 "null-safe" operator syntax support
- Improved type analysis, and bug fixes
- Improved override resolution analysis
- "@dataProvider" PHPDoc keyword IntelliSense
- Updated PCRE syntax and error checking
- "PHP0437" error respects PHPDoc with "@var $this"

### VS 2019

- Diagnostic suppressions with ".editorconfig"
- Laravel project template
- Test Explorer (test discovery) fixes
- (preview) New project system initial support

## 1.40.12022 (August 19, 2020) preview

- (VS 2019) Go To Implementation
- Code completion after "namespace" keyword
- Analysis respects "void" in PHPDoc's @return
- More PHPDoc type error suggestions
- Analysis of parenthesis expressions fixes
- Tooltips show correct namespace in some cases

## 1.40.12000 (August 12, 2020) preview

- Expandable phar archives in Solution Explorer (fixes for latest formats)

### Debug

- Remote PHAR debugging support

### Publish

- Improvements and fixes of TLS 1.2, TLS 1.3

### Editor

- Analysis enhancements
- Fixes stability issues
- Lambda type analysis improvements
- "iterable" phpdoc type hint
- "smart action" to add "use" for unknown type in phpdoc
- Format respects EditorConfig file

## 1.40.11953 (July 15, 2020) stable

- Fixed Composer package search.
- Performance improvements.

### Editor

- Fixed PHP Editor initializing IntelliSense forever upon solution open.
- PHP 8.0 throw expression.
- Deprecations in deprecated functions not reported.
- Type analysis improvements for type juggling.
- Type analysis improvements for PHPDoc @var hinted properties.
- Type analysis for `instanceof`.
- Type analysis when returning `static`.
- Fixes occasional nullref exception.
- Analysis of PHPDoc improvements.
- Twig editor exception fix.
- Implement abstract methods for traits respects type hints.

### Test Explorer

- Test discovery fix.

## 1.40.11890 (June 27, 2020) stable

- fixed activation on VS 2010-2013
- Enhancements in TLS,SSH protocols
- Composer engine was refactored, and ready for new project system

### Editor

- PHP 8.0 syntax support
- PHP 8.0 attributes IntelliSense
- PHP 8.0 constructor property type analysis
- PHP 8.0 analysis for unsupported syntax
- newline PCRE options handled

### Testing

- Support for PHPUnit 9.0

### Debug

- More exceptions in exception list to break on

## 1.40.11855 (May 27, 2020) stable


### Debug

- Support for debugging PHAR files
- More robust CLI debugging issues handling

### Testing

- Support for PHPUnit 9.0

## 1.40.11823 (May 5, 2020) preview

- New SSH, FTPS, SFTP protocols and encryptions.
- Updated certificates of installer and binaries
- Stability fixes
- Improved High-DPI support (VS 2019)

### Editor

- 'use' marked as used if used in PHPDoc
- Outlining of multi-lined arrays
- PHPDoc type hints respect current namespace
- Locals in arrow functions get annotated correctly

## 1.32.11768 (March 25, 2020) preview

- Improved High-DPI support (VS 2019)
- Fix: No composer packages shown in Solution Explorer (VS2019)

## 1.32.11732 (March 5, 2020) preview

- PCRE syntax check (Visual Studio 2015 and newer)
- Composer statibility updates
- WebPI progress is shown in Visual Studio Output pane
- Support for Visual Studio Code Map during Debug

## 1.32.11706 (February 5, 2020) preview

- Twig editor stability updates
- Internally complies with Twig 3.x
- VS stability updates
- Debugger checks for the port availability
- WebPI update to Xdebug and PHP 7.4 release

## 1.32.11656 (December 9, 2019) preview

- Improved "finally" control flow analysis
- PHP 7.4 (final) can be installed automatically
- Smart indent of lambda functions
- Generated PHPDoc with possible "@throws"
- Updates to twig & freezing issues for publish-on-save

## 1.32.11632 (November 12, 2019) stable

- Updated PHP manual
- Improved IntelliSense in traits, after `use`, in PHPDoc
- Improved publish-on-save
- Update to issues with publish-on-save

## 1.32.11595 (October 14, 2019) preview

- Publish can run automatically on changed files.
- Check for not implemented abstract functions
- Check for trait instantiations
- Debug watch and watch tooltips allow to edit value of private properties
- Fixed composer packages integration (VS 2019)
- Improved tooltips with links to definitions (VS 2019)
- Improved check for missing composer packages (VS 2019)
- Stability fixes

## 1.32.11522 (September 23, 2019) stable

- PHP Editor fixes on Visual Studio 2019
- Editing JS fixes on Visual Studio 2017 and earlier
- New project from existing code does not force PHP 7.1
- Circular dependency in traits crash fix
- Overall performance improvements
- Overall rare crashes fixes
- Diagnostic when instantiating a trait.
- New internal composer integration (VS 2019)
- Missing composer packages shows infobar instead of dialog (VS 2019)
- Blade syntax for @section and @yield
- Substitution of `{@inheritdoc}` within tooltips
- `{@link}` gets displayed in tooltips as hyperlink (VS 2019)

## 1.32.11482 (September 7, 2019) stable

- Expanding files in solution explorer - added support for user-mapped PHP file types.
- Installer updated to PHP 7.4 Beta 4, Xdebug updates.
- Stability fixes.
- Twig Editor fixes.
- FTP publish does not stop on response 550.
- Performance improvements.

## 1.32.11427 (August 14, 2019) stable

- Files in Solution Explorer can be expanded.
- Class aliasing handled by type analysis and IntelliSense
- Updated IntelliSense glyphs (icons) for traits and aliased class name
- Improved type analysis of function arguments passed by reference
- Twig file templates stability fixes
- More statibility fixes
- Completion after "use" gets full type names and namespaces.
- Outlining does not get lost when typing.
- Files in `vendor` folder are editable
- Default location for PublishProfiles changed to `.vs` subfolder
- Installer updated to PHP 7.4 Beta 2

## 1.32.11358 (July 18, 2019) stable

- performance improvements
- unpack operator type check
- phpstorm meta container improvements (array access and type hierarchy)
- Web Platform Installer provides log with failure details

### PHP 7.4

- PHP 7.4 support
- arrow functions, typed properties, spread array, `??=` operator, underscores in numbers
- PHP 7.4 features reported when using an older PHP
- PHP 7.4 features analysis, type analysis, problems analysis
- Built-in `PHP 7.4 alpha 3`, automatic online installation

## 1.31.11311 (July 11, 2019) preview

- VS 2019: New project dialog lists "PHP" language.
- offline activation dialog fix for long codes
- twig editor fixes

### IntelliSense

- improved code analysis of numbers and conditions
- support for metadata from `.phpstorm.meta.php` file/folder
- less strict analysis of use of uninitialized variables
- analysis of duplicit function parameters
- analysis of magic methods
- completion after `use` gets fully qualified names

## 1.31.11274 (July 1, 2019) stable

- update explode() signature
- update microtime() signature
- Oxid framework support
- Catch variable analysis

## 1.30.11262 (June 27, 2019) preview

- new diagnostics: unused variables, array constants (PHP5), unset cast
- improved analysis of lambda functions
- more details IntelliSense for lambda functions and its params
- support for PHPDoc above lambda functions
- updated IntelliSense tool tip texts
- project load and general performance optimizations
- Composer self update fixes
- VS2019: Mouse click to go to definition.

## 1.30.11233 (June 17, 2019) stable

- Updated PHP manual and translations.
- Validation of value passed to `define()`
- Validation of `define()` for PHP >= 7.3
- VS2019: highlighting inside Watch and Conditional Breakpoints.

## 1.30.11217 (May 23, 2019) preview

- Updated PHP manual for PHP 7.3, PHP 7.4.
- Updated PHP functions signature.

## 1.30.11199 (May 10, 2019) preview

- Performance fixes for projects with composer packages

### IntelliSense

- Disabled warning PHP0424 when passing an object in foreach
- IntelliSense of use params within lambda function
- Minor IntelliSense fixes

### Twig

- Twig editor fixes

### Debug

- Automatic installation of PHP 7.3 with Xdebug
- Xdebug auto update to 2.7.2 for PHP 7.1, PHP 7.2
- Xdebug auto update to 2.6.1 for PHP 7.0

### VS2019

- Reimplemented PHP Editor using new API
- Browser selector enabled
- Script debugging toggle enabled

## 1.30.11154 (March 1, 2019) stable

- PHPDoc improvements and fixes
- Updated PHP manual
- Debugger logs when proxy/VPN or other software interupts debug session
- Other fixes

## 1.30.11131 (February 8, 2019) preview


### VS2019

- Experimental release for VS2019
- Using new error list API - providing solution wide list of errors and issues
- Asynchronous loading of packages
- QuickInfo and code actions are asynchronous now

## 1.30.11095 (January 18, 2019) stable

- PHPDoc for local variables and globals.
- Unknown function code suggestion to add `$this->` (will be more in future).
- Editor exceptions fixes.
- PHPUnit 7 support
- Fix: Changes outside of VS causes IntelliSense to forget some types

### Debug

- Chrome JS Debugger supported (VS2017 and VS2019)

## 1.29.11015 (October 22, 2018) stable

- PHP up to 7.3 warnings: trailing commas, list ref assignment, instanceof with literal.
- Code analysis improvements
- Renaming of a name within 'use' statement
- Renaming of a class within a namespace
- Renaming of a file with a class asks for automatic refactoring

## 1.29.10958 (September 24, 2018) stable


### Editor

- Implement Interface/overrides respects base's return type.
- Options for implement Interface/overrides to not generate PHPDoc.
- Options for implement Interface/overrides to not generate TODO comment.

### Code Validation

- is_callable() analysis.
- More PHPDoc suggestions.

### Fixes

- Formatting code with syntax errors is not allowed.
- Smarty syntax and colorization.

### PHAR Inspector

- PHAR inspector supports gz compressed entries.
- PHAR inspector reads files not included in the project.
- PHAR inspector optimizations.

## 1.29.10925 (August 20, 2018) stable


### Code Validation

- __tostring() return type diagnostic.
- Unified diagnostic codes.

### Editor

- Option to disable collapsing of comments by default.
- Drag&drop does not corrupt code indentation.
- Twig editor fixes.

### Debug

- The condition expression in conditional breakpoint is casted to bool implicitly.
- Inspecting expression avoids "cannot get property" error.

## 1.29.10893 (July 24, 2018) stable

- Blade templating integration fixes and improvements.
- Twig templating handles extensions from referenced projects.
- More UI localizations.
- Possible deadlock fix, hanging during project load.

### IntelliSense

- IntelliSense respects "include_path" option in project properties.
- Description of properties from @var tag.

### Code Validation

- Code validation warning for array to string conversion.
- Code validation improvements for 'setlocale'.
- Validation of using '$this' outside a valid context.
- Validation of throw argument which must be Exception or Throwable.
- Validation of type after implements keyword.
- __tostring, __construct, __destruct return types check.

### Debug

- Editing long string values in debug.

## 1.28.10848 (May 28, 2018) stable

- PHP 7.2 automatic installation.
- Xdebug updates for older PHP frameworks.
- Custom server form respects properties window size.
- Fix of freezing when opening certain SMB mapped projects.

### Code Validation

- password_hash not deprecated, just its parameter.

### IntelliSense

- STDIN,STDOUT,STDERR in IntelliSense of CLI projects.

### Blade (VS2015+)

- Reimplemented Blade Template Engine support.

### Twig (VS2015+)

- Custom filter quick info enhanced.
- Twig parent() function enabled in design split view.
- Fix: extends keyword help.
- Twig extensions analyzed even in references.

### VS2017

- Fix: When pasting formating gets messed up.
- Fix: Browser selector works in VS 15.7.0 and later.

## 1.27.10773 (April 11, 2018) stable

- New project wizard when creating PHP Web Project.
- New project template for Simple CMS (based on PicoCMS).
- Code Analysis CPU improvements.
- @method with "static" supported.

### Debug

- Checking expressions validity before sending them to Xdebug

### Editor

- New snippets (#region, #todo, @phpdoc_tag).
- F1 supported for phpdoc tags.
- Custom snippets showed in completion lists.
- "echo" keyword occurances (F1, F12, semantic highlighting, do not allow refactoring).

### Localization

- Partial localization to major languages (de, es, fr, ja, pt-br, ro, ru, tr, zh).
- PHP manual localized to major languages.

### Smarty

- Editor optimizations.
- Fix of multiline comments.

### Twig

- Editor optimizations.
- Fix: Completion list showed twice when Ctrl+Space pressed.
- Fix: Code preview did not show some generated code.

### Code Validation

- Report warnings for duplicate array key in array initializer.
- void reported as invalid in @param, @var, @property.
- Type name "\" is ignored by CFG, but reported.

## 1.26.10606 (March 6, 2018) stable

- Fix of Test Explorer when runing tests without phpunit.config.
- Warn a user when he saves a file about data loss if he's saving in the encoding which doesn't include needed characters
- Fix of Legacy Import from Existing Code option
- When copy/paste we do not display error message of malformated html document.
- Reading php.ini short_open_tag option and parse the code accordingly when PHP build-in server is used.
- vararg @param type hint treated as array type as well

### Twig

- Twig support optimizations and improvements.
- Minor fix when non existing filter is used.

## 1.26.10589 (February 26, 2018) stable

- Reporting of PHP4 style constructs deprecation.
- IntelliSense handles files changed outside IDE.
- Refactoring of indirectly used constants.
- Refactoring improvements and fixes.
- Fix of VS startup freezing.
- Fix for Visual Studio 2017 15.6.0 Preview 1.0 (and newer).
- Fix of Test Explorer with custom non-standard phpunit config.
- Fix of possible deadlock when used with Resharper.

### Twig

- Twig split view UI improvements.
- Twig split view can be disabled in options.
- Twig design view (experimental).
- Twig design view macros and imports (experimental).

### Twig (VS2017)

- Twig blocks work inside CSS blocks.

### Debug

- Fix: Hovering on function arguments or initializers could alter execution of the program.
- Fix: Debugger didn't step after hiting a breakpoint set in the first statement of the program.
- Minor remote debugging improvements.

### Editor

- Fix: HTML formatting eats whitespace when triming text elements.
- Support for structure guide lines in VS2017.

### Composer

- Fixes Install New package dialog when number of results is greater than 750.

### Smarty (VS2015 and newer)

- Optimizations and other enhancements.
- Smarty blocks work inside CSS blocks.

## 1.25.10474 (December 14, 2017) stable

- PHP parser fixes.
- Improved deprecations analysis.
- Find references improvements.
- Various stability enhancements.

### Testing

- Fix of Test Explorer for custom phpunit config.

## 1.25.10447 (November 28, 2017) stable

- Underlining deprecated PHP constructs.
- Updated IntelliSense database to latest PHP manual.
- "object" type hint fix.

## 1.25.10441 (November 26, 2017) stable

- IntelliSense improvements for F1 and GoToDef, not showing duplicities.
- Memory usage optimizations.
- Experimental .phar file navigation and debug features.
- Various UI enhancements on high DPI displays.
- Refactoring fixes.
- Crash fixes of PHP parser.
- Crash fixes when running composer with IIS Express.

### Twig

- Implemented Twig Editor for .twig files.
- Twig code colorization, mixture of HTML/JS/CSS/Twig supported.
- Highlighting of identifier under cursor and its occurances.
- Contextual IntelliSense, Code Completion, F1 Help and Go To Definition.
- Tool Tip Text for Twig constructs, variables and keywords.
- Code Outlining for Twig blocks, constructs and macros.
- Syntax checking with error underlining.
- Detection of Twig framework and eventual automatic installation into the project.
- Twig Split View, providing view on generated PHP code and mapping between generated PHP and Twig.

## 1.24.10137 (August 18, 2017) stable

- UTF detection improvements.

### Debug

- Breakpoints displays hit counts.
- Hit Count breakpoints (equal | greater than or equal | is multiple of) supported.
- Conditional breakpoints support 'when changed' conditions.
- Supported break on first statement (F10, F11).
- "When Hit" breakpoints supported (Tracepoints).

### DBGp

- Added support for DGBp proxy.

### Testing

- PHPUnit 6.x supported.
- PHPUnit version detected from composer.json.
- Custom PHPUnit can be used.
- PHPUnit is bundled in case.
- Compatible PHPUnit engine choosen according to selected PHP runtime.

### VS2017

- Experimental support for Visual Studio 2017
- Fix: Unable to discover tests.
- Fix: Smarty files didn't work in Update 3.

## 1.23.9750 (March 24, 2017) stable

- PHP 7.1 automatic installation.
- Xdebug updated.
- Startup speed improvements.
- Updated PHP parser
- Minor fixes
- Respecting primitive types in PHP < 7.0
- Parsing files from disk respects system encoding and detects UTF

### Editor

- Inserting snippet indenting fix when there are tabs.
- Nodes outside the current namespace are listed in the completition set as well together with warning icon.

### Refactoring

- Autogenerate the use statement for selected class.
- Suggestions added for unknown types in PHPDoc.
- Short name suggestions for types.
- Unknown type handling added for trait uses, return types and catch variable types.

### Smarty (VS2015 and newer)

- Smarty has its dedicated editor.
- Smarty delimiters can be modified in project properties.
- Javascript and CSS integration.
- Fixes of some edge cases.
- Fixes a syntax error exception.
- Installation suggestion for smarty composer package.
- Include snippet added.
- Break and continue keywords added.

### VS2017

- Experimental support for Visual Studio 2017
- Fix: failed to open PHP project
- Removed Nuget support for PHP projects

## 1.22.9523 (January 23, 2017) stable

- Fix of Class View not being loaded.
- Fix of toolbars and menus displayed when a Smarty file is opened.

### Smarty (VS2015 and newer)

- More tolerant syntax checker.
- New Keyword.
- Fix of Smarty editor exception messages.

### VS2017

- Experimental support for Visual Studio 2017 RC

## 1.22.9478 (January 17, 2017) stable


### Editor

- PHP interfaces in integrated PHP manual updated.
- Light bulbs in VS 2015 and newer instead of legacy smart tags.
- Fix of Visual Studio freezes.

### Project

- Crash fix for VS2017RC.

### Smarty (VS2015 and newer)

- Smarty code colorization.
- Smarty autocompetion of pair keywords (pressing Tab).
- Smarty IntelliSense for keywords, multiword keywords, functions, modifiers and variables.
- IntelliSense analyses PHP source code for user defined variables.
- Basic Smarty syntactic error checking.
- Smarty tooltips for functions and modifiers.
- Support for Go To Definition (pressing F12) for smarty variables, functions and modifiers.
- Smarty syntax verification and errors underlining.

### Composer

- Improved new Composer package dialog (displays more relevant information).
- Dialog shows amount of package downloads and stars.
- Abandoned packages have warning note.
- License and publish date is shown.
- Faster packagist repository loading.

### VS2017

- Experimental support for Visual Studio 2017 RC

## 1.21.9350 (December 8, 2016) stable

- PHP 7.1 syntax support.
- Improved PHP 7.0 syntax support.
- Parsing and tokenization fixes.
- Rare OutOfMemoryException fix, less memory needed for value analysis.
- Composer UI fixes.

### Editor

- If possible, value of expression is displayed in tooltip.
- Code colorization of keywords fixes.
- Smart indent after a function fixes.

### IntelliSense

- PHP 7 anonymous classes support improvements.

### Code Validation

- PHP compatibility code validation.
- Duplicit switch cases validation.
- Unnecessary 'use' is dimmed in source code.

### Debug

- Manual mapping fixes.

### VS2017

- Experimental support for Visual Studio 2017 RC

## 1.20.9101 (October 12, 2016) stable

- PHP 5.5, 5.6, 7.0 syntax support.
- PHP 7 return type hints.
- High DPI support improved.
- Editing in compare window supported.
- Warnings about unsupported functions, classes, constants and constructs.
- Warnings about duplicit case labels within switch.
- Compatibility warnings for PHP 5.4, 5.5, 5.6, 7.0

### Editor

- Signature help is colorized.
- Tooltip shows return type to the right of function header.
- IntelliSense localization in Japanese and Brazilian Portuguese.
- Formatting and editor fixes.

### Debug

- Manual path mapping supported.

### Project

- Updates to project system, stability and features fixes.
- Open Command Prompt, Copy Full Path command added.
- Added many web development relevant file templates (JSON, bower, grunt, gulp, angularjs, jsx).
- Fix: Renaming file extension of php item template wasn't possible in the New File dialog.
- Fix: Issues when making changes to the projects outside of VS.

## 1.19.8876 (July 18, 2016) stable

- Fix of an exception message during project load.

## 1.19.8851 (July 5, 2016) stable

- Updated integrated manual to latest.
- Complete descriptions of builtin PHP symbols.
- IntelliSense provides help for DOTNET, COM, mysqli* symbols.
- Support for Project Home different than Project Directory.
- Formatting of lambda functions.
- Smart indent of lambda functions.
- Fixes of internal exceptions.
- Fixed "Bad Length" within the activation process.
- Automatic update of Xdebug and PHP 5 if possible.
- Automatic installation of PHP 7 if selected (syntax not fully supported yet).

## 1.19.8776 (April 28, 2016) stable

- Fixed Import Dialog crash when Project path is invalid.
- (VS2013) Update in VS2013 notification fix.
- (VS2015) EXPERIMENTAL - Mixed HTML/CSS/JS/PHP formatting.
- (VS2015) Fixes for code formatting.
- Improved smart indent when cursor is between { and }.
- Improved IntelliSense when there are both @property PHPDoc and field declaration.
- Error List shows syntax errors from files not included in a project as well.
- Smart Tag for Implement Abstract Members implements interfaces and base types as well.
- Fix of VS crash in Interpreters dialog.

## 1.19.8736 (March 29, 2016) stable

- Fixed VS crashes when using IIS without having IIS installed.
- HTML formatting on paste fix.
- Wordwrap can be enabled/disabled using Ctrl+E,W.
- (VS2015) Laravel @foreach @endforeach.
- IIS Express project uses configuration from existing binding if any.
- Fix of interpreters dialog crashing VS in case of an unexpected php.exe version string.

## 1.19.8685 (February 29, 2016) stable

- Running tests within a project in a solution folder fix.
- Composer handles plugin API correctly.
- Find All References looks into whole project.
- "switch" snippet updated.
- Workaround for crash issue with SassyStudio.

## 1.19.8647 (February 19, 2016) stable

- General improvements and fixes.
- HighDPI UI improvements.
- Code Definition Window.
- Web Platform Installer utilization improvements.
- Memory usage optimization.

### Server

- Per-project PHP version setting.
- IIS Express server improvements and fixes
- IIS Express with support for SSL site.
- IIS Express works even if there isn't IIS.
- Improved server configuration validation.
- Option to automatically download and install selected PHP version.
- PHPRC environment variable set correctly.
- Option to set Web Root other than project directory.

### Composer

- Performance optimizations.

### Editor

- Split Window fixes.
- HTML+PHP selection format fixes.
- (VS2010 - VS1013) Fix of code formatting when there is CSS or JS.
- Class item template with a namespace.

### Phalanger

- Switching between PHP and Phalanger seamlessly (requires Phalanger Tools).

## 1.18.8503 (January 15, 2016) stable


### Publish

- TLS 1.2 enhancements.
- Enhanced interactive authentication support.
- Support X509 certificate host key algorithm in SFTP

## 1.18.8473 (January 5, 2016) stable


### Editor

- Fix of crash when smart tag action resulted in exception.

### Activation

- Fix of activation issue when firewall doesn't allow us to reach license server.

## 1.18.8451 (December 23, 2015) stable


### Editor

- comment/uncomment fixes.
- comment/uncomment at begining of line works.
- comment/uncomment of selection with HTML/PHP handled properly.
- (VS2015) Split window fixes.
- (VS2015) Fix of corrupted HTML when pasting code or formatting selection.
- formatting selection (e.g. on paste) fix.

### PHP

- Fix of Visual Studio crash when php.exe version is in an unexpected format.

### Activation

- Fix of activation issue when current user account was not configured to allow delegation.

## 1.18.8331 (October 29, 2015) stable


### Editor

- (VS2015) fix of crash when Microsoft ASP.NET and Web Tools 2015 (Beta8) is installed.
- Automatic format after semicolon closing a colon block (endif; endswitch; endfor; endforeach; endwhile;).
- Outlining of colon blocks.
- Outlining of try/catch/finally blocks.
- Colorization of true/false/null as keywords (blue).
- Fix of IntelliSense not containing symbols from composer packages.

### Publish

- Update of file transfer protocol library.

## 1.18.8281 (October 15, 2015) stable


### Setup

- Fix of loading the extension into Visual Studio.

### Editor

- Major editor performance improvement for large files.
- (VS2015) Overlapping JavaScript/CSS with PHP code colorizes now.
- Fix of error underlining location.

### Composer

- Fix of crash in case of circular dependency in unused packages.

### Extensibility

- Introducing Devsense.PHP.Nodes.dll.

## 1.18.8215 (October 2, 2015) stable

- From Existing Code project template.
- (VS2015) Fix of Text Explorer - listing and running tests works in VS RC without admin.

### IntelliSense

- PHPDoc above local variable works even without @var.
- @ignore PHPDoc tag above a local variable avoids reporting it as unused.

### Editor

- (VS2015) Fix of lost PHP code colorization after HTML code edit.
- Fix of tool tips during debugging.
- Fix of HTML formatter.
- Fix of code analysis crash of huge complex functions.
- (VS2015) Laravel blade templating experimental support.

### Debug

- (VS2015) Fix of Autos Window.

## 1.18.8182 (September 25, 2015) stable


### IntelliSense

- Correct completion of aliases and use of aliased namespaces.
- IntelliSense inside PHPDoc for type hints and PHPDoc tags.
- Code completion after "new" looks at function signature to preselect class name.
- F1 onto user-defined function/class/constant looks into @link PHPDoc and opens it if any.
- Fix of IntelliSense update for files out of PHP project.

### Refactoring

- When renaming a file from Solution Explorer, user is prompted to refactor name of contained class.

### Editor

- Option to outline code blocks (if, switch, case, for, foreach).
- Navigate To (Ctrl+,) looks into referenced packages as well.
- PHPDoc tags colorization and completion fixes.
- Fix of Go To Brace (Ctrl+]).
- Editor fixes.
- Option to reformat line of code after moved using Alt+Up/Down (VS2013 and later).
- Editor performance improvements.
- 'elseif' in IntelliSense and snippet.
- 'Operator' color is customizable.
- Major editor engine change.
- Fix of brace completion within strings and comments.
- Fix of signature helper bolding wrong parameter after comma.
- Fix of smart indentation after mixture of HTML and PHP.

### Heredoc

- Colorization of HEREDOC and NOWDOC with XML or HTML code.
- Outlining of HEREDOC and NOWDOC content.
- Background color for HEREDOC and NOWDOC content.

### HTML Editor

- Visual Studio 2015 HTML Editor.
- Fixes (VS2015 only) - outlining, items in context menu.

### Miscellaneous

- Fixes for importing/upgrading wizard.
- Visual Studio 2010 fixes - Options Dialog crash, Smart Indent.

## 1.17.8075 (August 14, 2015) stable

- Fix of Options Dialog when php.ini contains an invalid path.
- Fix of PHP Web Project for Microsoft Platforms couldn't be published

### Editor

- Fix of parser when file contains 'else:' construct.
- Fix of lost outlining while editing code.
- Fix of snippets completion.
- Fix of editor internal exceptions.

### Testing

- phpunit.xml.dist in Core or Tests directories set as test configuration automatically.

## 1.17.8026 (July 21, 2015) hotfix


### Editor

- Stability fix.
- Document format fix.
- Smart Indent fix after "\something;".

### Testing

- Test Explorer fix Visual Studio 2015.

## 1.17.8005 (July 9, 2015) 


### Editor

- Optimizations.
- Fix of syntax errors below DOC comments.
- Go to brace (Ctrl+]) scrolls window to new cursor position.
- Smart indent fixes within PHPDoc.
- Smart indent fixes after do{}while();.

### Code Validation

- Assignment to the same variable warnings fix.

### Debug

- Fix when path contains Unicode characters.
- Fix of watching some expressions containing space.
- Fix of debugger freeze when editing values.
- Datatips work even if the code contains syntax errors.

## 1.16.7958 (June 29, 2015) 

- Tooltip colors in dark theme fixes.
- Formatting options for semicolon and right brace handled.
- IntelliSense after $somevar:: fix.
- Block indentation supported.
- Smart new line in PHPDoc disabled in Block indent.

## 1.16.7912 (June 15, 2015) 


### Project

- Installing PHP 5.6 instead of 5.4 from WebPlatformInstaller if there is no PHP yet.

### Publish

- FTP/SFTP library updated.
- Project publish not allowed during debug, fixes issues with Visual Studio not responding.

### IntelliSense

- Missing description of a method is taken from parent declaration.
- Magic properties shown even if real declaration is not visible.
- Optimizations.
- New implementation of code completion.
- New implementation of function signature help.
- Code completion pre-selects most recent item.
- Code completion improvements after backslash, new, global and function.
- Code completion has WPF tool tips (formatted and coloured).
- Code completion works better with namespaces.
- Code completion shows only next part of a namespaced name. Backslash commits and shows the next part.
- After typing "$" and deleting the "$", completion is dismissed.
- Editor exception fixes.
- Minor IntelliSense fixes.
- Option for enabling/disabling preselection of most recently used member.
- Better IntelliSense after "use".
- Fixes of code completion when cursor is between two non-string tokens.
- Fixes for special function names (echo, empty, isset, __construct, ...).
- Fix of newly declared variables missing from code completion.
- Symbol icon in tooltips.

### Editor

- Refactoring | Rename in context menu (HTML Editor must be disabled).
- Drag&Droping files from Windows Explorer opens them.
- Go To Brace with extending selection (Ctrl+Shift+]).
- Shift+F12 looks into referenced projects as well.
- Shift+F12 highlights "new" of corresponding "__construct".
- Tooltip during debugging fixes.
- Name of class or interface is coloured.
- Code completion fixes between a word and variable name.
- (VS2013+) Matching ' and " is not autocompleted inside strings and comments.
- New Smart Indent engine (major change).
- Fixes.
- Snippets are formatted after insertion.
- Fix of cases where VS shows error dialog after deleting portion of code.

### PHPDoc

- When generating PHPDoc (after typing /**), selection is placed over 'summary' text.
- Syntax in PHPDoc comments is highlighted (type names, variable names, tags, delimiters).
- Colours of PHPDoc syntax in Tools | Options | Fonts and Colors, PHP Doc ...

### Code Validation

- Closure is callable.
- compact() function handled.
- Fix of duplicitous warning messages.
- Fix of duplicitous error messages.
- Fix of foreach variable warnings, Iterator objects allowed, strings not.

### Refactoring | BETA

- After changing an identifier name, smart tag (Ctrl+.) with rename action is displayed.
- Smart tag for rename allows to show preview.
- Variables, labels, types, interfaces, functions, methods, fields, constants, class constants.
- Rename dialog (Ctrl+R,R).
- Fix of cases where renamed identifier is a part of string or with prefixed namespaces.

### Testing

- Other test errors (syntax error, unknown class etc.) handled.
- Other PHPUnit output noted in Output window.

### Debug

- Variable '$user' can be watched.

### Setup

- The extension is installed for all users.

### Composer

- Composer integration fixes.
- Replace property in composer.json handled.

## 1.15.7750 (March 21, 2015) 

- Improvements of automatic directory mapping during remote debugging .
- Fix of MsBuild targets files.

## 1.15.7746 (March 18, 2015) 

- Faster installation. Fixes for 32bit Windows.
- __TRAIT__ constant added, parser, IntelliSense.
- Composer package properties fixes.
- Fix of line endings when formatting and inserting new line.
- Fix of IntelliSense when there are two classes with the same full name.

## 1.15.7721 (March 6, 2015) 

- Visual Studio 2015 CTP5, CTP6 supported.
- MSBuild capabilities improvements.
- Microsoft Web PHP Project template (which allows azure publish and web deploy).
- Fixes.

### Editor

- Ctrl+M,L supported when using advanced HTML Editor.
- Collapsed /** summary */ contains first line of the description.
- IntelliSense improvements based on code analysis.
- Fix of navigation bar when advanced HTML Editor is enabled.
- Fix of navigation bar when advanced HTML Editor is disabled.
- Source code validation and analysis.
- Type in tooltips is shortened according to current namespace.
- Tooltip text is wrapped.
- Fix for tooltips when debugging from array chains and foreach variables.
- Function header text contains '&' for references.
- Fixes.
- Fix of HTML highlighting when support for HTML Editor is enabled.
- Memory leak fix.
- Task list, Error List with too many items processed on background.
- Optimizations.
- Find All References (Shift+F12).
- Contextual highlighting of references.
- Correct F1 Help URL for $_COOKIE and $_ENV.
- IntelliSense analyses @var PHPDoc tag above class when accessing object as array.
- Errors underlining, outlining, smart tags fixes.
- Known type of functions/variables/constants in tool tips.

### Code Validation

- Type analysis running on background.
- Error detection based on type analysis.
- /** @var T $x */ in local scope forces type of local variable.
- Detection of unused variables and uninitialized variables.
- Detection of undefined classes.
- Detection of type mismatch.
- Detection of unreachable code.
- Detection of unused or undefined labels.
- Detection of common typos and common runtime errors.

### Composer

- Composer packages handled by Solution Explorer, Code Analysis and IntelliSense.
- Direct actions to Install new, update or install missing.
- Packages from composer.json are shown in Project References in tree hierarchy.
- Missing packages downloaded automatically on project load.
- Packages are included in IntelliSense.

### Test Explorer

- Bundled PHPUnit updated to version 4.5.
- Running selected tests with @dataProvider fix.
- Faster tests discovery.
- '*phpunit*.xml.dist' and '*phpunit*.xml' allowed as PHPUnit configuration file names.

## 1.14.5747 (November 27, 2014) 

- Fix of crash, when extension_dir directive in php.ini contains invalid characters.
- Fix of F12 when window is scrolled few lines up.

## 1.14.5606 (October 16, 2014) 

- $argv and $argc in IntelliSense.
- Fix for Tab settings when indenting and unindenting (Tab, Shift+Tab).
- When changing File Extension/Editor options, IntelliSense cache is reloaded immediatelly.
- Memory usage optimization.
- Project system improvements.
- IntelliSense performs more tasks on background.
- S/FTP faster target directory check.
- IntelliSense cursor position fixes.
- IntelliSense fix for self, parent, static when inside a namespace.
- When navigating from Navigation Bar into a collapsed region, region is expanded.

## 1.14.5548 (September 19, 2014) 

- Fix of code formatting within try/catch block.
- Fix of crash when there is a file missing on disk.
- Fix of Tool Tip crash when first letter of an identifier is mouseovered.
- Fix of IntelliSense exception.
- Fix of old HTML support IntelliSense.
- Fix of Error List and Task List; only errors of opened files or files within a PHP project are listed, only tasks of a file within a PHP project are listed

## 1.14.5536 (September 14, 2014) 

- Include and Exclude performance improvements.
- Error List performance improvements.
- Navigation Bar performance improvements.
- Fix of crash when .NET Performance and Diagnostics is launched with PHP Project.
- Fix of crash when debugging is stopped.
- IntelliSense engine runs max for few seconds.
- Fixed IntelliSense when cursor is at the end of file.
- Fixed IntelliSense for functions and constants.
- Fixed IntelliSense when PHPDoc type names have to be translated using current naming context.
- Fixed IntelliSense over identifiers which name should be translated using current naming context.

## 1.14.5514 (September 8, 2014) 

- IntelliSense object members.
- Opening documents fix.
- Starting web project fix.
- Items in navigation bar are sorted alphabetically.
- Conditionally declared functions and classes are visible in IntelliSense.

## 1.14.5495 (August 30, 2014) 

- Feedback form in Help | PHP Tools Feedback.
- Feedback form when app crashes from PHP Tools.

### Debug

- Fix of debugging when path contains '#' character.
- Debug path mapping considers project references and SubPath property.

### Project

- Support for NuGet.

### Testing

- Test Configuration Editor.
- Support for custom PHPUnit configuration file.
- Organizing tests by a test suite defined in a configuration file.
- Support for bootstrapper and other PHPUnit options.
- Faster test discovery.
- By default, only files suffixed with Test.php are probed.
- Test class must have 'Test' suffix.

## 1.14.5458 (August 22, 2014) 

- High DPI UI support.
- Support for JS debugging in PHP main file.
- Fixes.

### Editor

- Peek to definition.
- Quick Info syntax colored.
- More information in IntelliSense.
- Redesigned IntelliSense.
- Over "new" expression, F1 and F12 jumps to the constructor of class.
- Code collapsing of lambda functions.
- Fix of crash when there is "func() = expr;" code.
- Fix when there is a method called "assert".
- Fix when using declare().

### Project

- Project-wide Error List.

## 1.13.5416 (July 22, 2014) 

- Brace completion of ' disabled when typing in comments.
- Fix of smart indentation causing editor to freeze.

## 1.13.5386 (July 9, 2014) 

- Task List from code comments fixes.

### Publish

- Publish fixes.
- Publish of selected files and folders added.
- Improved publish performance.

### Editor

- Full automatic brace completion.
- Comment selection fix when the selection ends on beginning of a line.
- Changing options updates editor of already opened files properly.

### Test Adapter

- Stack trace fixes.
- ReflectionException fix.
- Incomplete test fix.
- Support for risky tests.

## 1.13.5282 (June 8, 2014) 

- Extended code analysis for classes, interfaces and member methods.
- Task List updated with TODOs from code comments (customizable in Options|Tools|Environment|Task List) and from PHPDoc/@todo.
- Smart Tags implementation for implement Interface, Implement Abstract Members and Override Members.
- Project From Existing Code excludes .svn and .hg directories.
- Project From Existing Code excludes hidden directories and its content.
- Project From Existing Code allows to specify list of wildcards for ignored file names.
- Faster project opening.
- Project system improvements.
- Smaller package.
- Less memory requirements.
- .NET 4.5 required.
- @link PHPDoc keyword.
- Fixed use of navigation bar immediately after opening a file.
- Find Symbol Results fixes.
- FTP/SFTP publish is handeling profiles with server names with explicit port number but without scheme.

## 1.12.5211 (May 12, 2014) 

- Fix of PHP Editor when Navigation Bar is hidden.
- Setup configures file association with .php and .phpproj properly.

## 1.12.5187 (April 29, 2014) 

- Project From Existing Code creates correct msbuild file in case of special characters in file names.
- IntelliSense exception fix in case of license is not activated.
- Microsoft.VisualStudio.Web.Application support for .php extension.
- Web Projects uses "Set As Start Page" command instead of ".. Start File".
- Setup fixes for VS2010.
- Setup fixes when there is an older version installed.
- VS2012 Options page mishmashed characters fix.
- PHP build-in server hostname option is used properly in opened browser.

## 1.12.5174 (April 18, 2014) 

- Console PHP Project template.
- Fix of CSS files colorization when opening them by double-click from Solution Explorer in Visual Studio 2010.
- Fix for Split Window when using mixed HTML/PHP Editor.
- Fix for IIS Express PHP registration when starting debug of PHP project.
- Fix for internal detection of installed VS packages and languages in case of non-standard VS config registry root.

## 1.12.5112 (April 1, 2014) 

- Files from [metadata] includes private/protected keywords properly.
- Check for conflict with PHP Language Support extension.

### Test Adapter

- Test Explorer integration, PHPUnit included.
- PHPUnit classes available in IntelliSense.

### Phalanger

- Compatibility with Phalanger Tools 1.12+.

## 1.11.5062 (March 10, 2014) 


### MSI installer

- Fix when there is running Visual Studio during install.

## 1.11.5051 (March 7, 2014) 

- Debug Quick Watch fixes (inside return and array use)
- IntelliSense shows types of properties and constants of builtin PHP types.
- Project properties scroll bars fix.
- Project properties on first load marked as dirty.
- Visual Studio 2010 without 'Visual Web Developer' feature does not allow HTML Editor.

### MSI installer

- Fixed issues with updating or uninstalling the extension.
- Fixed issues with missing project and item templates.
- Allowed downgrade to an older version.

### Debug

- Improved php.ini check.
- Fixing php.ini under non-Administrator account or with UAC enabled.
- "xdebug.remote_host" option validated properly.
- Opening php.ini from Interpreters dialog allows edit with UAC.
- Debug launch with debug issues fix.
- Silverlight debugging without IE shows readable error message.

## 1.10.4967 (February 14, 2014) 

- "Browse With" support, user is able to choose browser used to debug
- Fixed processing of files under long paths (under directories > 255 chars)
- Opening documents from last solution session fix (Visual Studio 2013)
- Debugger improvements
- Silverlight debugging (requires Internet Explorer)
- "Start without debugging" runs correct browser application
- Fix for Web Essentials and certain commands (like Create CSS bundle)
- Brace Completion option available (VS 2013)

## 1.9.4910 (January 19, 2014) 

- IntelliSense after static::.
- IntelliSense of parameters with type hint inside a namespace fix.
- Fix of PHPDoc parser; use of @method without parameters fix.
- Icons in Visual Studio 2013 Navigate To window.
- Option to remove UTF8 BOM of PHP files.
- Option to specify hostname for built-in PHP server.
- "Show All Files" switch is available on VS Shell Integrated as well.
- Stopping debug session properly closes server.
- Debugging works if IE has been uninstalled from the system.
- Show Line Numbers and Word Wrap options work in new PHP/HTML/JS/CSS editor.
- Compatibility fixes for ReSharper - PHP editor, false warnings, snippets, formatting etc.

## 1.9.4839 (December 1, 2013) 

- Fix for included/excluded files appearing in IntelliSense.
- Fix for indentation of generated PHPDoc.
- Fix for IntelliSense completion in PHPDoc.
- Generated PHPDoc has "mixed" types by default and contains @throws if there is "throw new" statement.

## 1.9.4832 (November 28, 2013) 

- Compatibility fixes when Phalanger is installed.
- Compatibility check for VS 2010 *without* SP1.
- Fix of parser failing for lines with certain length.
- Fix of error reporting during package initialization.
- Fix of IntelliSense initialization for multiple projects in solution.

### Source Control

- Added support for syntax highlighting in diff window.

### Project System

- Performance improvements of Drag&Drop operation, and adding items into project in general.
- Created .phpproj.user file us backward compatible with previous version of Visual Studio.

## 1.9.4815 (November 20, 2013) 


### Project System

- Fix of adding items with semi-colon in its name.
- Fix of flickering and collapsing when deleting items.
- Fix of correct item selected after deletion.
- Fix of IDE inresponsibility.

## 1.9.4792 (November 13, 2013) 

- Improved project system
- Fix of nested file nodes (e.g. .coffee files and Web Essentials)
- Support for Xdebug using IPv6 address
- Fix of Collapse To Def command
- Fix of wrong snippets path not updated by Visual Studio
- Fix of Tool Tips / Quick Watch when debugging
- Fix of outlining being continuously collapsed when typing
- Fix of debugging when a Web App Project is in solution
- Fix of debug keeping listening on port
- Publish takes also dependent file nodes (e.g. generated from .coffee)
- Fix of code snippets not being available
- Explorer icons associated also under non-administrator account

## 1.9.4736 (October 28, 2013) 

- Removed Start Page
- Visual Studio manages file associations with .phpproj and .php
- Support for Visual Studio 2013
- Inserting snippets with reformat fix
- Updated icons for VS2013 and VS2013
- About box with additional package information
- Experimental HTML/JS/CSS support (enable in TOOLS|OPTIONS|PHP Tools)

### Project System

- Improved project system
- Improved source control support
- Bolding of startup file on PHP project
- Improved project loading
- Asynchronous project loading

## 1.8.4704 (October 19, 2013) 

- SFTP publish allows empty private key
- Expired subscription does not cause notification to appear every VS startup
- Fix of conflicting PhpNetCore.dll when Phalanger is installed
- Fix of debugger keeping socket opened after VS is closed

## 1.8.4608 (September 17, 2013) 

- Memory usage optimizations
- .coffee and .less item templates added (if supported by VS)
- PHP 5.5 syntax supported
- php.ini configuration issue checker improvements
- Code commenting improvements for mixed tabs/spaces on commented lines
- Improved metadata generation for native PHP functions and classes (F12 on builtin PHP stuff)
- Publish dialog fix; saves data when enter is pressed
- Allowing to use some 3rd party extensions getting color information improperly
- File System publisher doesn't propage readonly and hidden attributes
- SFTP publisher supports private key
- Navigating to php files via Find Results fix

### Debug

- Xdebug configuration checks improvements
- Debugger/Watch allows complex expressions
- Debugger handles evaluation with side effect
- Debugger hexadecimal view support
- During debugging on IIS Express, verbose messages are printed to VS Output
- If IIS Express fails to start, user is notified and debug session won't start

### IntelliSense

- Support for generators added into IntelliSense
- F1 Help provided for more PHP keywords
- updated integrated documentation (Sep 3rd 2013)
- Some optional parameters of PHPManual functions shown properly as optional
- Initial value of PHPManual function parameters shown in tool tips

## 1.8.4504 (August 22, 2013) 

- Asking for trial at Visual Studio startup can be disabled now
- Option to disable keyword reference highlighting under the cursor
- Option to disable PHPDoc generating for /**

### Debug

- Autos window during debugging
- Remote debugging through SSH tunnel allowed

## 1.8.4473 (August 8, 2013) 

- start page shows subscription expiration
- project system fixes for dragging and removing
- version date is checked against subscription expiration
- start page shows changelog
- requires to try professional features
- license is valid for any Visual Studio version until subscription is valid

## 1.8.4452 (July 16, 2013) 

- occurences of the identifier under the caret is highlighted across the whole file
- Publishable property fix, listing files to publish fix
- HTML IntelliSense (code completion, including smart closing tag)
- HTML element pair highlighting
- HTML automatic closing element inserted on >
- HTML commenting/uncommenting selection (applicable only if HTML xor PHP are selected)
- formatting HTML document
- improvements in HTML colorizer, more "non-standard" HTML code allowed
- improved performance and stability of colorizer
- creating new PHP project automatically opens 'index.php'
- fixed IntelliSense of DOMNodeList
- foreach of DOMNodeList, DirectoryIterator, ArrayIterator
- foreach of classes derived from Iterator with function current()
- PHP project publish bug fixes

## 1.7.4340 (June 3, 2013) 

- Automatic installation of PHP with Xdebug from Web Platform Installer
- IntelliSense enhancements
- no code completion after "var" keyword
- private static and non-static functions and properties only shown in its class context
- overriding of builtin PHP functions shows valid type hints
- update of builtin PHP manual to April 2013 version
- PDO:: constants in IntelliSense
- PDO methods have proper return type and -> after them works
- F1 works for built-in PHP classes and their members
- fix of smart indent after "(new X)->xxx;" statement
- Class Search allows searching for class members too
- Object Browser shows additional PHPDoc information
- Debugger improvements
- Debugger allows to select what kind of errors are handled
- Fatal, Parse, Unknown errors breaks debug
- fix when running VS as Guest; fixes startup crash and activating trial crash
- fix when running project after configuration error; new configuration takes an effect

## 1.6.4251 (April 25, 2013) 

- remote debugging fix

## 1.6.4231 (April 14, 2013) 

- PHP Debugger improvements
- strings longer than 1024 handled, can be previewed and edited
- arrays and objects with more than 32 elements handled, can be viewed and edited
- modified values/objects in immediate window are updated in debug view
- fix of automatic port selection
- project located in disk root starts up properly
- fix of startup url, forward slashes instead of backward
- formatting fix of return expression
- devsense.com web site is not opened after installation
- F12 and F1 when cursor is just before the word
- project properties can be saved even if no PHP interpreter is configured
- fix when VS is being closed with built-in PHP web server running
- fix of project properties port number input text box

## 1.6.4187 (March 31, 2013) 

- PHP class item template
- fix of scrolling the document to the cursor position on enter after long lines
- fix of formatting on code using heredoc
- start page is displayed after an update and disable checkbox is more visible
- start page contains more information about features

## 1.6.4160 (March 23, 2013) 

- Navigate To support (Ctrl + ,)
- PHP 5.4 traits syntax
- PHP 5.4 function array dereference syntax
- PHP 5.4 function call on object instantioation
- IntelliSense of new PHP 5.4 constructs
- IntelliSense hides private members out of its class
- IntelliSense after use/extends/implements/new improved, traits handled
- proper icons of interfaces in IntelliSense lists
- fix of adding handlers into IIS configuration
- JavaSript debugger (JScript) support (implies use of IE)
- selection of debuggers (PHP and/or JavaScript) in project properties
- improved PHPDoc, handles @property-write, @property-read and more @method syntaxes
- PHP debugger improvements
- IntelliSense improvements
- Project Publish "Skip missing files check" option
- Project system improvements when using source control binding
- overriding of functions fix; autocompletes type hints and parameters default value
- control variable from catch() block in IntelliSense
- php item templates do not have BOM

## 1.6.4064 (March 3, 2013) 

- minor fix when VS freezes on first opened php file
- PHPDoc @param without variable name handled
- feedback button crash fix
- publishing issue fix with new files
- debugging path mapping fixes
- formatter handles class field initializers
- singleline PHPDoc not collapsible
- class search shows classes, global functions, constants
- tooltip stability issue fix
- closing file crash while IntelliSense is active fix
- renaming files under source control fix

## 1.6.4040 (February 22, 2013) 

- Minor fix of IntelliSense and Class View within solutions with more than one PHP project loaded

## 1.6.4039 (February 21, 2013) 

- Project Publish
- Manual Publish command
- Publish profiles management
- Publish Wizard, connection validation
- File System, FTP, FTPS, SFTP protocols
- Automatic publish before Run
- Fast incremental Publish
- Remote Debugging / Custom server
- Automatic directory mapping
- Publish before run
- PHP Built-in server Routing Script option
- Class View, Class search
- structured by namespaces
- Object Browser
- IntelliSense improvements:
- Asynchronous IntelliSense (Completor, Word Completion, ToolTip, MethodTip) immediate editor response
- IntelliSense of array items, foreach enumeration
- array type hint in PHPDoc supported (e.g. ObjType[])
- Global constants defined thru define() with PHPDoc
- Global variables defined thru PHPDoc (using @global tag)
- Other IntelliSense engine improvements
- IntelliSense engine optimizations
- fast editor response when matching/highlighting braces
- Description of more PHP keywords and built-in functions
- 'Go To Declaration' (F12) in case of variables and properties does not show implicit declarations
- 'Go To Declaration' (F12) of declarations from @method or @property jumps to corresponding PHPDoc tag
- options for disabling code collapsing by default, collapsing of PHPDoc blocks or #region/#endregion
- option for IntelliSense variable preselection when $ is typed
- collapsing of <?php ?> code blocks
- collapsing of group of line comments, allowing to have whitelines between them
- VS 2012 light/dark project icons
- .php file is opened in an existing instance of Visual Studio when opening from Windows Explorer
- VS 2012 faster response in large projects
- Start Page with News re-enabled only after major update
- project system fixes, improvements
- fixed Method Info for multilined function calls
- fixed performance issue of huge PHP projects when whole VS was laggy

## 1.5.3865 (January 8, 2013) 

- new PHP Variable color
- better support for VS2012 dark theme
- VS 2012 preview tab supported
- fixed reseting of HTML colors on VS 2012
- fixed IntelliSense replacement span, e.g. right before a string
- fixed syntax error of class constant set to a string containing $

## 1.5.3802 (December 17, 2012) 

- fixed debugging when user stopped debug manually before debug session ended
- fixed debugging of projects located in paths containing Unicode characters
- fixed 'project from existing code' wizard messages
- fixed entering new line with 'virtual space' option and with caret after the line end
- fixed IntelliSense deduction of abstract methods but with PHPDoc information
- support for improved method call syntax $classname::$methodname()
- support for improved array syntax [1,2,3, 'key' => $value]

## 1.5.3767 (November 27, 2012) 

- PHP code formatting fixes
- project system fixes
- more IntelliSense within FTP site and FileSystem site

## 1.5.3746 (November 27, 2012) 

- Windows 8 Debugger Systray fix
- fix of crashing when RedGate Reflector is installed
- IntelliSense optimizations
- IntelliSense of namespaces fixes
- beta of arrays IntelliSense, foreach
- version in Start Page
- IIS Express debugging fix when default URL is used
- PHP Project system improvements
- Drag&Drop and Ctrl+C/X/V within same project
- solution explorer refresh button
- missing files marked with exclamation mark in solution explorer
- VS12 additional colors fix
- debugging of certain servers (PHP 5.4, IIS Express) allowed without Administrator rights
- debugger catch Exceptions
- PHP Exceptions listed in Debug -> Exceptions
- HTML highlighting uses VS settings, Spellchecker addon compatibility fix

## 1.5.3650 (October 30, 2012) 

- PHP code debugging (XDebug support)
- Immediate Window during debugging
- Debug Quick Watch and Tooltips with actual value
- Editting values during debugging
- PHP projects
- @property and @method PHPDoc tags
- package fix on Windows XP
- performance fix of Visual Studio Web Site
- IntelliSense fixes
- Comment/Uncomment selection fix
- Project From Existing Code... (File -> New)
- Custom file extensions available free
- Built-in PHP 5.4 server support
- IIS Express server support
- PHP configuration issues manager
- Automatic one-time file association

## 1.1.3415 (September 1, 2012) 

- formatting fixes
- duplicities in navigation bar fixes
- automatic generaton of PHPDoc when /** is typed above declaration
- minor IntelliSense fix when new function is being typed

## 1.1.3385 (August 22, 2012) 

- IntelliSense shows static functions after object operator
- IntelliSense fixes
- Smart Indent and Reformatter fixes

## 1.1.3330 (August 12, 2012) 

- typing variable name fix
- smart indent fixes
- more keywords in IntelliSense
- right brace inside string fix (smart indent, highlighting, brace matching)
- IntelliSense during Method Info fix
- Go to Brace supported (Ctrl+])

## 1.1.3267 (August 1, 2012) 

- outlining bug fix

## 1.1.3266 (August 1, 2012) 

- smart indentation improvements
- namespace formating fixes
- Code completer improvements

## 1.1.3248 (July 28, 2012) 

- F1 Help
- #region/#endregion outlining
- all PhpDoc tags
- improved PHPDoc parser
- smart indentation
- smart outdentation of '{', 'case', 'default'
- formatting options
- automatic PHP document formatting
- automatic code block reformat after '}', ':' or ';'
- formatting of code selection
- Whole PHP Manual integrated
- fixes of namespaces handling
- fixed namespaced names code completion
- namespace blocks collapsing
- Mac New Lines (CR) supported
- Files in Solution Explorer handled properly

## 1.0.3045 (June 18, 2012) 

- tooltip handling fix

## 1.0.3039 (June 15, 2012) 

- code snippets, code surrounding, expansion browser
- PHPDoc highlighting
- added missing keywords in code sense
- updated integrated documentation (PDO, Zip)
- automatic $ when inserting static class field
- comment/uncomment lines refinement

## 1.0.2940 (May 23, 2012) 

- Automatic .php file association

## 1.0.2930 (May 20, 2012) 

- IntelliSense improvements & fixes
- PHPDoc of class fields in ToolTip

## 1.0.2896 (May 11, 2012) 

- PHP documentation updated
- optimizations, improved IntelliSense for functions with PHPDoc
- Caching progress in status bar
- Custom file extensions supported

## 1.0.2848 (May 2, 2012) 

- fix when changing outside Visual Studio
- __DIR__ constant added
- improvements when coding in namespace

## 1.0.2842 (May 1, 2012) 

- code sense fixes
- code sense of 'new' improvements
- more PHP documentation
- "Find Symbol Results" window shows full line of code if possible
- 'Go to definition' centers view
- generated metadata file contains PHP documentation if available
- welcome dialog showed, fix
- lambda functions support if available

## 1.0.2818 (April 25, 2012) 

- 'global' keyword handled, type inference enhancements
- code sense improvements and fixes
- 'Show All Files'/'Include'/'Exclude' commands in solution explorer
- 'Open folder in Windows Explorer' in colution explorer
- package metadata updated
- package Welcome dialog, licensing, trial, buy
- PHP documentation for class library symbols
- performance improvements

## 1.0.2667 (March 30, 2012) 

- collapse to definition
- brace matching
- web root based on solution explorer
- go to definition of class library symbol shows generated metadata file
- HTML scanner allows single quoted attributes
- "Find symbol results" window
- Fonts&Colors setting fix when improperly loaded by VS
- $ before a variable name autocompleted properly on VS11
- Navigation bar fixes

## 1.0.2567 (March 12, 2012) 

- performance improvements
- VS11 support added
- HTML colors changed
- bug fixes

## 1.0.2529 (March 5, 2012) first release

- Initial release.

