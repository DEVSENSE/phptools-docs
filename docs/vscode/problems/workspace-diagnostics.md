/*
Title: Workspace Diagnostics
Description: Configure PHP workspace diagnostics to analyze opened files, the entire workspace, or disable checks entirely. Learn about the php.problems.scope setting and its impact on code analysis.
*/

# Workspace Diagnostics

By default, the editor performs diagnostic only on opened documents. In order to check the entire workspace quickly, change the `php.problems.scope` setting.

> Note, analysis of entire workspace is a <span class="label label-premium">PREMIUM</span> feature.

## `php.problems.scope` setting

By default, static analysis reports all problems found in any document that is opened (`"opened"` setting value). It can be configured to analyze nothing (`"none"`), opened files (`"opened"`), or even the entire workspace almost instantaneously (`"all"`). Details for the possible settings are:

**Values:**

- `"php.problems.scope": "none"`: No analysis is performed. **Note**, this also disables unused `use` check, unreachable code checks, some code actions, and others.
- `"php.problems.scope": "opened"`: Only PHP documents opened in the editor are checked for problems. **Note**, parse errors are still reported in all files across the entire workspace.
- `"php.problems.scope": "all"`: Enables problems analysis across the entire workspace. **Note**, `/vendor/` is not analysed.

**Example:**

```json
"php.problems.scope" : "all"
```

## See Also

- [Suppressing Diagnostics](suppressing-diagnostics) - How to adjust severity or suppress problems completely.
