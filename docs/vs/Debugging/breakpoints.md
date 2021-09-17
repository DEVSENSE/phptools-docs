/*
Title: Breakpoints
Description: Overview of PHP breakpoints in Visual Studio 
*/

# Breakpoints

As shown in the image, below, **Breakpoints** are lines of code where the debugger should break (pause executing) and allow you to [investigate the program's state](inspecting-data). They can be set by clicking in the margin of the code editor, or by right-clicking on a line of code and selecting **Breakpoint**, **Insert Breakpoint**, or simply by pressing <kbd>F9</kbd> (This is a typical shortcut; check the **Debug**, **Toggle breakpoint** in the settings menu).

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

## Function breakpoints

You can break execution when a function is called. This is useful when you know function or method name, but you don't know the location (or you do know and you just don't want search for it). The other use case would be if there are multiple methods or function with the same name (e.g. same function in different namespaces or method implemeneted on multiple classes) and you would like to break on all of them.

- To place a function breakpoint, go to `Debug | New Breakpoint | Function Breakpoint`, or press <kbd>Ctrl + K</kbd>, followed by <kbd>B</kbd>.
Or if you have **Breakpoints pane** opened, click **New** and select **Function Breakpoint**

- When in the **New Function Breakpoint** dialog, enter the function name.
  
  ![New Function Breakpoint dialog](imgs\function-breakpoint.png)

  You can either write:
   - simple function name (e.g. foo) and let the breakpoint to bind on all possible cases.

    ![Multiple bound breakpoints](imgs\function-breakpoints-pane.png)

   - or you can be specific and enter fully qualified function name (e.g. \A\B::foo)

- Make sure **PHP** is select in the language drop down
- Hit <kbd>ENTER</kbd>

## Break on Exception

You can define types of exception that should break your program when they are thrown. See [Exceptions](exceptions) to find out more about this.