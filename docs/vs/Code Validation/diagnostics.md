/*
Title: Error Codes
Description: List of Error Codes Description.
Generated: see Components/Devsense.PHP.DocumentationGeneratorApp
*/

# Error Codes

The following table lists most of the available code diagnostics.

## Diagnostics

## Message

| id | title | description |
| -- | --   | --          |
| `PHP6601` | Name can be simplified | The name can be written in a shorter or simpler form. |
## Warning

| id | title | description |
| -- | --   | --          |
| `PHP0171` | MagicMethodMustBePublicNonStatic |  |
| `PHP0172` | CallStatMustBePublicStatic |  |
| `PHP0401` | Array index type mismatch | Index of array must be of type string or integer. |
| `PHP0402` | Function name type mismatch | Expression must be callable when used as an indirect function call. E.g.<br /><br />$name = "foo";<br />$name(); // $name should be callable or string |
| `PHP0404` | Method on non-object | Instance functions can be called only using an object instance. E.g<br /><br />$obj->foo(); // $obj must not be a scalar type or null, it must be an object |
| `PHP0405` | Not all code paths return | When function is expected to return a value, all code paths have to return and all returns have to return a value. |
| `PHP0406` | Argument type mismatch | Values supplied to a function call must match its arguments type. |
| `PHP0407` | Property on non-object | Properties can be accessed only using an object instance. E.g<br /><br />echo $obj->prop; // $obj must be an object |
| `PHP0408` | Return type mismatch | Values returned from a function must match expected type which is defined in PHPDoc @return tag or other returned values. |
| `PHP0409` | Scalar used as array | Expressions accessed with [] operator have to be of type array, string or object. |
| `PHP0410` | Type mismatch | Value has to be assignable to the expected type. |
| `PHP0411` | Unused label | Defined labels should be used. |
| `PHP0412` | Uninitialized variable | Variables has to be assigned before they are used. |
| `PHP0413` | Unknown class name | Class or interface is unknown. |
| `PHP0414` | Unknown class constant | Class constant is unknown. |
| `PHP0415` | Unknown constant | Global constant is unknown. |
| `PHP0416` | Unknown field use | Property is unknown. |
| `PHP0417` | Unknown function call | Global function is unknown. |
| `PHP0418` | Unknown method call | Class function is unknown. |
| `PHP0419` | Unreachable code | Code won't be called in runtime. |
| `PHP0420` | Infinite loop | Code contains an infinite loop and the function never exits. |
| `PHP0421` | Unused variable | Assigned variables should be used. |
| `PHP0422` | Assignment made to same variable | Assigning a variable to itself has no effect. This may indicate a potentional typo or copy-paste bug. |
| `PHP0423` | Missing mandatory argument | All mandatory arguments to function call have to be supplied. |
| `PHP0424` | Object used as array | Object accessed with [] operator has to implement ArrayAccess interface. |
| `PHP0431` | Division by zero |  |
| `PHP0432` | Implemented type is not an interface |  |
| `PHP0433` | Duplicit case | The case is duplicated within the switch block. |
| `PHP0434` | Parent class is final | Parent class is declared as final. |
| `PHP0435` | Method must return string | The method only allows to return string value. |
| `PHP0436` | MethodMustNotReturnValue |  |
| `PHP0437` | ThisInGlobalCode |  |
| `PHP0438` | NonTraversableUnpacked |  |
| `PHP0439` | PCREPatternError | There is an error in the Perl Compatible Regular Expression (PCRE) pattern. |
| `PHP0440` | Duplicit array key | The key is already used in the array initializer. |
| `PHP0441` | Arguments when there is no constructor | NewArgsWithNoConstructor |
| `PHP1401` | Argument cannot be passed as alias | Only variables can be passed as aliased function argument. |
## Error

| id | title | description |
| -- | --   | --          |
| `PHP1008` | InterfaceMethodWithBody |  |
| `PHP1009` | AbstractMethodWithBody |  |
| `PHP1010` | NonAbstractMethodWithoutBody |  |
| `PHP1014` | DestructCannotBeStatic |  |
| `PHP1015` | AbstractPrivateMethodDeclared |  |
| `PHP1024` | ConstructCannotBeStatic |  |
| `PHP1037` | AbstractFinalMethodDeclared |  |
| `PHP1045` | MethodCannotTakeArguments |  |
| `PHP1402` | NonExceptionThrown |  |
| `PHP1403` | NonExceptionCatch |  |
| `PHP1404` | NeverReturningReturnsImplicitly |  |
| `PHP1405` | WritingToGlobals |  |
| `PHP1406` | ReferencingGlobals |  |
| `PHP1407` | AbstractMethodInNonabstractClassError | `abstract` methods can be defined in `abstract` classes only. |
| `PHP2407` | MustNotDeclareReturnType |  |
| `PHP2408` | MustTakeExactlyArgs |  |
| `PHP2409` | UnsupportedPropertyType |  |
| `PHP2411` | NotTrait | A class or interface can't be used within the `use` clausule, only `trait` is allowed. |
## FatalError

| id | title | description |
| -- | --   | --          |
| `PHP2000` | TypeRedeclared |  |
| `PHP2001` | FunctionRedeclared |  |
| `PHP2002` | ConstantRedeclared |  |
| `PHP2014` | Syntax error | Source code contains an unexpected token and can't be parsed. |
| `PHP2401` | New of abstract class | Instantiation of abstract class is not allowed. |
| `PHP2402` | New of interface | Instantiation of interface is not allowed. |
| `PHP2403` | Redefined label | Labels can be defined only once. |
| `PHP2404` | Assignment to $this | Assignment to $this variable is not allowed. |
| `PHP2405` | Undefined label | Used labels have to be defined. |
| `PHP2406` | ThisOutsideObject |  |
| `PHP2410` | TraitCreated |  |
| `PHP2412` | ParentTrait |  |
| `PHP2413` | ParentInterface |  |
| `PHP2414` | UnimplementedAbstracts |  |
| `PHP2415` | CtorPropertyInAbstractMember |  |
| `PHP2416` | CtorPropertyNotConstructor |  |
| `PHP2417` | CtorPropertyVariadic |  |
| `PHP2418` | TypeCannotBeNullable |  |
| `PHP2419` | ParameterTypeCannotBeVoid |  |
| `PHP2420` | UnsupportedUnionType |  |
| `PHP2421` | InvalidIterableDefault |  |
| `PHP2422` | UnknownNamedParam |  |
| `PHP2423` | PositionalParamAfterNamed |  |
| `PHP2424` | NamedParamOverwrites |  |
| `PHP2425` | Parameter Type Cannot Be Never | Parameters cannot have type "never", because it does not make any sense. "never" is only applicable as a function return type. |
| `PHP2426` | NeverReturningReturns |  |
| `PHP2427` | EnumCreated |  |
| `PHP2428` | NeedsArrayIndexForReading |  |
| `PHP2429` | ParameterTypeCannotBeStatic |  |
| `PHP2430` | CannotBeUsedAsIntersectionType |  |
| `PHP2431` | ReadOnlyPropertyMustHaveType |  |
| `PHP2432` | NamespaceMustBeTheOnlyStatement |  |
| `PHP2433` | Field already declared | Field with the same name cannot be declared more than once in the same class |
| `PHP2434` | BreakWrongContext |  |
## Compatibility Group

## Message

| id | title | description |
| -- | --   | --          |
| `PHP6403` | Deprecated construct | Deprecated type, function or constant |
| `PHP6404` | Not defined in target runtime | There is no definition in current version of your runtime. Update to a version that supports it. |
| `PHP6405` | Removed | The definition has been removed. Do not use it anymore. |
| `PHP6406` | UserDeprecated |  |
| `PHP6407` | PHP4-style constructor is deprecated | PHP 4 style constructors (methods that have the same name as the class they are defined in) are deprecated, and will be removed in the future. PHP 7 will emit E_DEPRECATED if a PHP 4 constructor is the only constructor defined within a class. Classes that implement a __construct() method are unaffected. |
| `PHP6408` | ResourceConstant |  |
## Warning

| id | title | description |
| -- | --   | --          |
| `PHP6402` | Future primitive type |  |
| `PHP6409` | ArrayConstant |  |
## Error

| id | title | description |
| -- | --   | --          |
| `PHP6401` | Unsupported construct |  |
## PhpDoc Group

## Message

| id | title | description |
| -- | --   | --          |
| `PHP6501` | PHPDocTagUseInstead |  |
| `PHP6502` | PHPDocTagUseInstead |  |
| `PHP6503` | PHPDocTagUseInstead |  |
| `PHP6504` | PHPDocTypeSuggestion |  |
| `PHP6506` | PHPDocNotFullyQualifiedTypeName |  |
## Warning

| id | title | description |
| -- | --   | --          |
| `PHP6505` | PHPDocInvalidTypeUsed |  |
## Outlining Group

## Message

| id | title | description |
| -- | --   | --          |
| `PHP6550` | #region missing | There is `#endregion` tag without a starting `#region` tag. |
| `PHP6551` | #endregion missing | A `#region` tag denotating a collapsible block is not closed with a corresponding `#endregion`. |

