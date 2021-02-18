/*
Title: ActivityLog.xml
Description: Getting Visual Studio Log file to solve technical issues.
*/

# ActivityLog.xml

To determine issues with the Visual Studio configuration, additional information may be helpful. To enable logging, follow the steps below:

1. Close Visual Studio first.
2. Start Visual Studio (`devenv.exe`) with `/Log` parameter. You can press <kbd>Start+R</kbd> and then enter the command below for Visual Studio 2017 Enterprise. *Change the path to `devenv.exe` depending on the actual Visual Studio version.*
```bash
"C:\Program Files (x86)\Microsoft Visual Studio\2017\Enterprise\Common7\IDE\devenv.exe" /Log
```
3. Replicate the issue and close Visual Studio
4. The log file will be found in `%AppData%\Microsoft\VisualStudio\15.0\`. You can press <kbd>Start+R</kbd> and enter the path into the window.
5. E-mail us your `ActivityLog.xml` file so we can try to find possible issues.

> **Note**: Replace `15.0` with the version of your Visual Studio

* `10.0` for Visual Studio 2010
* `11.0` for Visual Studio 2012
* `12.0` for Visual Studio 2013
* `14.0` for Visual Studio 2015
* `15.0` for Visual Studio 2017
* `16.0_xxxxxxxx` for Visual Studio 2019
