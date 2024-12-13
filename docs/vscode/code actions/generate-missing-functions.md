/*
Title: Generate Missing Functions
*/
# Missing Functions

Error `PHP2414` indicates that the non-abstract class has some functions missing. The quick fix or code action automatically implements the missing abstract functions, including all the available documentation and type information. The generated code is inserted at the end of the class.

![Class is missing implementation of abstract functions](../imgs/missing-abstracts-error.png)

The code action resolves the complete class hierarchy, taking into account interfaces and classes. Generated code contains PHPDoc annotations and base implementation of methods if applicable.

![Implement missing functions](../imgs/impl-missing-abstracts.gif)
