/*
Title: PHP Editor Code Sense - Best Practices
Description: Get max from Code Sense in PHP Tools for Visual Studio
Template: blog
Author: Jakub Misek
Date: 2015/10/02
Tags: phpdoc, vs2015, intellisense, codesense
*/

Visual Studio IDE provides useful information that helps with coding and might warn the programmer about typos and possible run-time issues already during the development. In the case of a PHP Editor, understanding the programmer's source code is important. Since PHP is a dynamic language, most of the information needed for a *smooth editor experience* is available only at runtime. However, there are several patterns recognized by the PHP Editor - so we can provide you a guideline that helps you to keep the code clean, to reveal possible bugs and to allow you to get the maximum out of the PHP Editor code sense. 

The PHP Editor, as it is analyzing the whole PHP code, performs control flow analysis, guesses types and values of variables, constants and functions and more. This analysis has certain limitations, but works great if the code is well written.

## Write PHPDoc above functions

The most useful hint you can provide to the PHP Editor is writing PHPDoc comments. These were originally intended for documentation purposes. However, the PHP Editor makes big use of this kind of comments.

![PHPDoc comments above function](img/phpdoc.png)

Information contained in PHPDoc is all parsed and processed. Parameters and return type information is checked against the actual/implied types and summaries are shown in tool tips. PHPDoc represents how you intend to use the function, so it is used as a hint, and anything that does not match your intention is reported as a warning directly in the editor (see below). If you don't provide the return type in PHPDoc, the PHP Editor aggregates all returns from the function and lets you know in case you return a value in one location and you don't somewhere else.

![Return type mismatch](img/return-type-mismatch.png)

Properly written PHPDoc makes your code clean, gives you the chance to clarify what your function is about and helps code completion and code analysis to provide better results.

## Mind purpose of your functions

This is rather good programmer practice. Sometimes the function body grows and grows, it starts doing more things instead of one, has side effects etc. This results in undocumented pieces of code, which are often buggy and hard to analyze. In addition to runtime performance reasons, the PHP Editor might not analyze such functions well, resulting in all local variable types implied as *mixed*. Of course if the PHP Editor only knows that a variable is of the *mixed* type, it does not provide IntelliSense for its members at all.

Keeping functions small with a clearly stated purpose in PHPDoc and documenting parameter types force a programmer to keep the program design clean and improves code analysis.

## Do not use single variable for everything

Larger functions usually tend to have more *variables for everything*. `$i`, `$j`, `$tmp` or `$x` are common variable names that are used for various purposes within a single function. This results in a variable of more than one type. Code analysis then may ignore several warnings about type mismatches, warnings implied from using such variables may be also suppressed and so on.

## Less global code

Shortly global code is evil. It breaks everything what editor can assume from code flow. Any global variable can be changed anywhere in the whole program, in any function. This makes code analysis harder.

The PHP Editor aggregates all the type information it knows about a single global variable from all the source code. Then, when using a global variable in a function scope (using the keyword global), it assumes its initial type is the aggregation of everything you ever assigned to the variable in all the program. Results are indeterminate.

Also note that each global function and constant will be listed by code completion. Moving global code into functions and using class functions and class constants instead of globals may improve code completion, since it would have fewer words to select from.

## Think your object model

It is popular practice not to provide base interfaces or a base class, and to rely on the dynamicity of PHP. The programmer *knows* an object has a property called *$items*, and it works at runtime, so why bother with a base interface or at least a type hint.

Clean object design may require some time, but it definitely makes the code easier to read, reveals possible bugs and helps the code sense.

The PHP Editor handles dynamic properties, but only on typed variables. If it is able to resolve a variable type, it remembers all dynamic properties used as a left side of an assignment. In case the variable is resolved as *mixed*, its dynamic properties are not used further.

## Dynamicity with discretion

In most cases, the PHP Editor is able to guess the results of a dynamic operation. In order not to support programmers in unclean coding, this was limited on purpose. Also it is a cause of higher memory and performance requirements.

If possible, simply avoid:
- Dynamic properties - write properties in class declaration or provide the class with PHPDoc, e.g. `@property string $field My dynamic property.`
- Indirect variables - such constructs won't be analyzed and result in suppressing warnings about the use of uninitialized variables and unused variables.
- `eval` - just don't.
- Indirect function call - editor won't report missing arguments or type mismatches.
- Indirect new - resulting type will be unknown (*mixed*) which breaks the other analysis.

## Hint variables with PHPDoc

You can always write PHPDoc within a function body or global code to describe a variable - its type and summary.

![PHPDoc for local variables](img/phpdoc-locals.png)

Since PHP Tools 1.18, you can also denote that the variable should be ignored (won't be shown by code completion and warnings about the variable will be suppressed). To ignore a variable by the editor, add `@ignore` into its PHPDoc.
Also since 1.18, you can write a variable description without denoting the variable name, just by adding `/** summary */` above an assignment to that variable.

## Miscellaneous

There are a few other options how to improve the editor in PHP Tools.

### Custom File Extensions

Many PHP frameworks and libraries use a different file extension for PHP content than `.php`. Additional extensions have to be enabled in Visual Studio. Go to `Tools | Options | Text Editor | File Extensions`. Enter the extension name e.g. `.inc`, select `PHP Editor` in the drop down box and click `Add`.

### Split code into composer packages

Composer makes it easier to manage and update the dependencies you use in your project. In addition, code analysis will be faster, since composer packages will be listed as read-only dependencies, which will be analyzed only once during a Visual Studio run. Also by moving your dependencies into a composer package, you won't be allowed to modify their source code manually from Visual Studio.

### Tool Tips

To check what the PHP Editor knows about your code, you can always hover your mouse over a variable, a constant or a function. It shows a neat tool tip with everything it knows about that construct. If you see *mixed* instead of a proper type, try following the steps above to improve the type information and improve the code sense within your project.

## Conclusion

PHP Editor is a tool that performs well-known and well-tuned code analysis algorithms to make the coding experience better and smoother. It works on top of your code. As any other tool, it works best with clean and well-documented input parameters - your code. In any case, there is always room for improvements, so leave us a comment if you would like to teach our tool new practices.