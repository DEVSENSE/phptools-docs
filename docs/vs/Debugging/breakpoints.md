/*
Title: Breakpoints
Description: Overview of PHP breakpoints in Visual Studio 
*/

# Breakpoints

As shown in the image, below, **Breakpoints** are lines of code where the debugger should break (pause executing) and allow you to [investigate the program's state](). They can be set by clicking in the margin of the code editor, or by right-clicking on a line of code and selecting **Breakpoint**, **Insert Breakpoint**, or simply by pressing <kbd>F9</kbd> (This is a typical shortcut; check the **Debug**, **Toggle breakpoint** in the settings menu).

![Breakpoint](imgs\breakpoint.png)

PHP Tools also supports advanced Visual Studio breakpoints such as [conditional breakpoints](#conditional-breakpoints).

You can see all the breakpoints you have in your project in the **Breakpoints pane** ( `Debug | Windows | Breakpoints` )

![Breakpoints pane](imgs\breakpoints-pane.png)

## PHP Specific Behavior

In most of the cases, PHP **Breakpoints** behaves as a Visual Studio developer would expect. However, there are cases specific to PHP language:

- **Breakpoints** placed at class and global function header breaks when the program execution is introducing them in the current execution state, e.g. when `include "file.php"` is called, all the definitions from `file.php` are introduced in this moment.

- **Breakpoints** placed at the method header will not break.

- **Breakpoints** placed at `{` will never break. Place them to the next statement instead.

## Conditional Breakpoints

You can make a breakpoint conditional by right clicking on the breakpoint (in the editor left margin or in the breakpoint window) and choosing **Condition...**.

![Breakpoint context menu](imgs\breakpoints-menu.png)

This opens the **Breakpoint Condition** dialog, in which you may configure a breakpoint's condition criteria. Here you may choose to enable or disable the condition, provide a predicate expression for the condition, and choose whether to break when the condition is true or has changed (only `is true` is currently supported).

 As expected, enabling a condition keeps a breakpoint from breaking when "hit", unless the condition criteria are met.

![Conditional Breakpoint dialog](imgs\conditional-breakpoint-dialog.png)


## Break on Exception

You can define types of exception that should break your program when they are thrown. See [Exceptions](exceptions) to find out more about this.

## Known Issues

- If you have a single statement which is not enclosed in curly brackets inside control-flow statement (`if`, `for`, `while`, `else`) it will not break, but execution goes through this place as expected.

  It is generally a good idea not to use unenclosed nested statements and always enclose them in braces.

  Examples:

   ```php

    // Unenclosed statements nested in control-flow statements

    if(expression)          
        statement; //debugger never breaks here

    for (expression; expression; expression)
	    statement; // debugger never breaks here

    while (expression)
	    statement; // debugger never breaks here

    // Enclosed statements nested in control-flow statements

    if(expression)
    {
       statement; // debugger will break here
    }

    for (expression; expression; expression)
    {
	    statement; // debugger will break here
    }

    while (expression)
    {
	    statement; // debugger will break
    }

    ```

