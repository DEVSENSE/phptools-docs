Available settings for adjusting code diagnostics:

- `php.problems.scope` - whether to analyze only opened documents, entire workspace, or nothing.
- `php.problems.exclude` - allows to exclude files and directories from analysis. Note, `vendor` is always excluded.
- `php.problems.excludeGitIgnore` - whether to implicitly ignore problems in git-ignored files.

Useful related settings:

- `php.stubs` - set of stubs, i.e. PHP extensions and known packages, to be treated by IntelliSense and code analysis. Value `"*"` is a shortcut for all standard extensions.
- `php.workspace.shortOpenTag` - how to treat short open tags (`<?`). By default, the editor decides automatically whether to allow it or not.
- `php.workspace.includePath` - additional set of paths to be included for the purposes of IntelliSense and code analysis.

## See Also

- [Suppressing Diagnostics](suppressing-diagnostics)