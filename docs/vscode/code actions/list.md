/*
Title: Code Actions List
Description: List of code actions.
Generated: see Components/Devsense.PHP.DocumentationGeneratorApp
Tags: php,code actions,refactoring
*/
# List of Non-Diagnostic Code Actions

Code actions for quick refactorings are listed below. These actions do not fix any problem, they let you to simplify the code. Optionally, these code actions can be configured to be applied automatically on save, or you can change their severity so they will appear as errors or warnings instead of just hints.

## Configuration

- Setting `"php.problems.exclude"`: pair of { path, [array of problems ßand actions] } that will be hidden.
- Setting `"editor.codeActionsOnSave": { "source.fixAll": "explicit" }`: lets you to enable auto-fix. When code actions are marked as auto-fix, they will be applied as auto-fix.
- File `.editorconfig`: allows to change severity of code actions, suppress them, or mark them as auto-fix.

## List


- **php_add_const_type**: 
- **php_extract_function**: 
- **php_fqn_class**: Makes the class name fully qualified.
- **php_fqn_function**: Makes the function name fully qualified.
- **php_fix_class_name_casing**: Fix the letter casing of class name so it matches its original declaration.
- **php_import_class**: Add corresponding 'use FQN;' at the top of the namespace scope and simplify name if possible.
- **php_import_function**: Add corresponding 'use function FQN;' at the top of the namespace scope and simplify name if possible.
- **php_lowercase_class_pseudo_const**: When using the ::class constant for class name resolution, the class keyword should be in lowercase 
- **php_remove_parentheses**: 
- **php_remove_redundant_closing_tag**: If there is only PHP code in the file, the closing tag should be omitted. Otherwise the whitespace after the tag may be unintentionally rendered to the output. This is required for example in PER code style.
- **php_remove_unused_uses**: 
- **php_replace_shorthand_opening_tag**: It is not recommended to use shorthand syntax.
- **php_replace_with_class_pseudo_const**: 
- **php_replace_with_conditional_expression**: 
- **php_replace_with_const**: 
- **php_replace_with_json_validate**: 
- **php_replace_with_simple_namespace**: 
- **php_replace_with_strict_null_equal**: 
- **php_replace_with_switch**: 
- **php_short_array_syntax**: Use the new and simpler array syntax.
- **php_simplify_class_name**: The class name can be simplified using existing 'use' statement.
- **php_simplify_with_compound_assign**: 
- **php_simplify_with_inc_dec**: 
- **php_simplify_with_null_coalescing_operator**: 
- **php_simplify_with_null_safe**: 
- **php_simplify_with_short_ternary_operator**: 
- **php_sort_and_remove_unused_uses**: 
- **php_sort_uses**: 
- **php_switch_to_match**: 
- **php_to_string_cast**: 
- **php_to_string_interpolation**: 
- **php_uppercase_magic_constant**: The PHP native __*__ magic constants should be written in uppercase when used.
