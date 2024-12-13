/*
Title: ActivityLog.xml
Description: Getting Visual Studio Log file to solve technical issues.
*/

# ActivityLog.xml

To determine issues in the Visual Studio, please collect additional information. Enable logging with the steps below:

1. Close Visual Studio first.
2. Start Visual Studio (`devenv.exe`) with `/Log` parameter. You can press <kbd>Start+R</kbd> and then enter the command below for Visual Studio 2019 Enterprise. *Change the path to `devenv.exe` depending on the actual Visual Studio version.*
    
    *Visual Studio 2022 Enterprise:*
    ```bash
    "C:\Program Files\Microsoft Visual Studio\2022\Enterprise\Common7\IDE\devenv.exe" /Log
    ```
    *Visual Studio 2019 Enterprise:*
    ```bash
    "C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\devenv.exe" /Log
    ```
3. Replicate the issue and close Visual Studio
4. The log file will be found in `%AppData%\Microsoft\VisualStudio\`, under a subdirectory **(\*)**. You can press <kbd>Start+R</kbd> and enter the path into the window.
5. E-mail us your `ActivityLog.xml` file so we can try to find possible issues.

> **Note (\*)**: The subdirectories with the version of your Visual Studio

* `17.0_xxxxxxxx` for Visual Studio 2022
* `16.0_xxxxxxxx` for Visual Studio 2019
* `15.0` for Visual Studio 2017
* `14.0` for Visual Studio 2015
* `12.0` for Visual Studio 2013
* `11.0` for Visual Studio 2012
* `10.0` for Visual Studio 2010
