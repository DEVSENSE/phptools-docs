/*
Title: Breakpoints
Description: Overview of PHP breakpoints in Visual Studio
*/

# Breakpoints

**Breakpoints** are an essential tool for debugging your applications. You set the breakpoints whenever you want to pause the execution. When paused you can [investigate the program's state](inspecting-data.md) - check the values of variables or look at the call stack.

## Set a breakpoint on a line in source code

You can set a breakpoint on any line of [executable code](#executable-code-and-breakpoint-resolution) by clicking in the margin of the code editor, or by right-clicking on a line of code and selecting **Breakpoint**, **Insert Breakpoint**, or simply by pressing <kbd>F9</kbd> (This is a typical shortcut; check the **Debug**, **Toggle breakpoint** in the settings menu).

![Breakpoint](imgs\breakpoint.png)

When you debug, the debugger will pause the execution before the line with the breakpoint is executed.

### Executable code and breakpoint resolution

The breakpoint will only work when placed on a location associated with actual PHP executable code.

When the breakpoint is placed on a location without PHP executable code, **breakpoint resolution** mechanism is used to move the breakpoint to a line where it can break (it has to be within 5 lines). This feature is supported since Xdebug version `2.8` and higher.

## Breakpoint conditions

You can control when breakpoint stops the execution of the program by setting conditions.

**To set a breakpoint condition**:

- right click on the breakpoint symbol (in the editor left margin or in the **Breakpoint** window) and select **Condition...**  (or press <kbd>Alt + F9</kbd>, <kbd>C</kbd>), which will open **Breakpoint Settings** window.

![Breakpoint context menu](imgs\breakpoints-menu.png)

 - To set a breakpoint condition, in the first drop-down menu select `Conditional Expression`.

 - In the second drop-down menu, choose `Is true` to break when the expression is satisfied, or `When changed` to break when the value of the expression has changed.
 
 ![Conditional Breakpoint dialog](imgs\breakpoint-condition.png)

 > **Note:** When the breakpoint with `When changed` condition is first evaluated, the debugger doesn't consider it to be a change, so it doesn't break.

### Set a hit count condition

When you want a breakpoint to break after it has been hit a certain amount of times, you can choose `Hit Count` in the **Breakpoint Settings** and specify the number of iterations.

![Tracepoint](imgs\hitcount.png)

This is feature is useful when you notice that a certain loop misbehaves after a certain number of iterations. Rather than stepping through the loop by repeatedly pressing <kbd>F5</kbd>, use `Hit count`.

## Tracepoints (Breakpoint Actions)

Tracepoint is a breakpoint that prints a message to **Output pane - Debug** when hit, but it doesn't break the execution of the program.

**To set a tracepoint:**

In **Breakpoint Settings** window check **Actions** and provide a log message. The log message can contain variables (placed between `{` and `}`), including predefined special variables listed below:

| Keyword | What is Displayed |
| ----------- | ----------- |
| $ADDRESS | Current instruction |
| $CALLER | Calling function name |
| $FUNCTION | Current function name |
| $PID | Process ID |
| $PNAME | Process name |
| $TID | Thread ID |
| $TNAME | Thread name |
| $TICK | Tick count (from Windows GetTickCount) |

 ![Tracepoint](imgs\tracepoint.png)

A sample of the output is depicted below:

![Tracepoint message in Output Pane](imgs\tracepoint-result.png)

You can find the sample use case [here](https://blog.devsense.com/2017/07/advanced-debug#heading-5)

## Function breakpoints

You can break execution when a function is called. This is useful when you know a function or method name, but you don't know the location (or you do know and you just don't want to search for it). The other use case would be if there are multiple methods or functions with the same name (e.g. same function in different namespaces or method implemented on multiple classes) and you would like to break on all of them.

- To place a function breakpoint, go to `Debug | New Breakpoint | Function Breakpoint`, or press <kbd>Ctrl + K</kbd>, followed by <kbd>B</kbd>.
Or if you have **Breakpoints pane** opened, click **New** and select **Function Breakpoint**

- When in the **New Function Breakpoint** dialog, enter the function or method name.
  
  ![New Function Breakpoint dialog](imgs\vs-php-function-breakpoint.gif)

- Make sure **PHP** is selected in the language drop-down
- Hit <kbd>ENTER</kbd>

If the function or method is in the project the breakpoint will bind.

When providing a function name, you can be more specific. The syntax for the function breakpoint is `<directory_string>!<type_name>::<function_name>()`, where `type_name` and `function_name` can be fully qualified or the namespace part can be omitted.

These syntaxes are possible:
- `function_or_method_name`
- `function_or_method_name()`
- `fully\qualified\function_name`
- `::method_name`
- `type_name::method_name`
- `fully\qualified\type_name::method_name`
- `directory_string!function_or_method_name`
- `directory_string!type_name::method_name`

Names that are not fully qualified will be searched for within available namespaces, so you can type the name without the namespace. 
 
> **Tip:** Restrict the breakpoints only to functions defined in files that have the specified `directory_string!` as a part of their path.


## Break on Exception

You can define types of an exception that should break your program when they are thrown. See [Exceptions](exceptions.md) to find out more about this.

## Managing breakpoints

To see all the breakpoints in your solution, open **Breakpoints** window from `Debug | Windows | Breakpoints` or press <kbd>Ctrl+ Alt + B</kbd>.

From this window, you can enable/disable or delete breakpoints, search and sort them. You can change breakpoint settings directly from this dialog.

![Breakpoints pane](imgs\breakpoints-pane.png)

> **Tip:** You can see how many times the breakpoint was hit in the `Hit Count` column.
