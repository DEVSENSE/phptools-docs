/*
Title: Stepping
Description: Stepping: executing code one line at a time.
*/

# Stepping

Once you have broken into the debugger, you can step through your code - executing one line at a time. The step commands include **Step Into**, **Step Over**, and **Step Out**.

![Step commands](imgs\step-commands.png)

## Stepping commands

**Step Into** will execute the next statement and stop. If the next statement is a call to a function, the debugger will stop at the first line with the statement of the function being called. Check the **Debug**, **Step Into** menu to find the keyboard shortcut to use to step (typically <kbd>F11</kbd>)

![Step commands](imgs\step-into.png)

> **Note**: In the previous picture, **Step into** has broken at the first line with the statement, and not at `{`, as it is the usual behavior in Visual Studio. The reason is thath PHP does not generate any instruction there to break on.

**Step Over** will execute the next statement, but if it is a call to a function, then the entire function will be executed. This allows you to easily skip functions when you are not interested in debugging them. Check the **Debug**, **Step Over** menu to find the keyboard shortcut (typically <kbd>F10</kbd>).

**Step Out** will execute until the end of the current function. It is useful when there is nothing else interesting in the current function. Check the **Debug**, **Step Out** menu to find the keyboard shortcut (typically <kbd>Shift+F11</kbd>).

> **Known PHP limitation**:
> Stepping out from a function provided as an argument will not break in the calling function, but in the next line with statement instead.
> 
> Sample:
> 
> ![PHP specific Step Out](imgs\step-out.png)

If you want to continue running, press <kbd>F5</kbd>. Your program will not break until the next breakpoint. Note that when you **Step Over** or **Step Out**, if the running code hits a breakpoint it will break again, even if it has not reached the end of the function.

## Stepping when debugging multiple requests(processes)

You can debug multiple requests (processes) at a time. In this case, usual stepping is not sufficient, as usual stepping just steps in the current process, but runs other processes. What you want is to have other processes in break mode and just step in the current process. You can achieve this by using these commands:

- **Step Into Current Process** (typically <kbd>Ctrl + Alt + F11</kbd>)
- **Step Over Current Process** (typically <kbd>Ctrl + Alt + F10</kbd>)
- **Step Out Current Process** (typically <kbd>Ctrl + Shift + Alt + F11</kbd>)

