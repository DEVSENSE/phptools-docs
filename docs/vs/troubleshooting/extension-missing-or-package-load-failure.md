---
title: Extension Missing or Package Load Failure
description: How to fix issues where PHP Tools disappears from Visual Studio 2022 or fails to load correctly with a ProjectSystemPackage error.
---


# Extension Missing or Package Load Failure

After updating Visual Studio 2022 or PHP Tools, you may encounter one of the following issues:

* **Missing Extension:** PHP Tools is missing from **Extensions > Manage Extensions** (in the *Installed* tab).
* **Package Loading Error:** When opening a project, Visual Studio displays an error stating that `ProjectSystemPackage did not load correctly` (or similar package load failures).
---

## Cause

This behavior is caused by an issue where Visual Studio 2022 fails to discover installed PHP Tools extension or corrupts its internal extension configuration cache (tracked in the [Microsoft Developer Community](https://developercommunity.visualstudio.com/t/Visual-Studio-171425-fails-to-discover/11032270)).

---

## Solution

To resolve this issue, you need to clear Visual Studio's cached extension registry and force it to re-index installed extensions.

### Step 1: Close Visual Studio
Close all running instances of Visual Studio 2022. Check the Task Manager to ensure no `devenv.exe` processes remain active in the background.

### Step 2: Delete the Cache File
Navigate to your Visual Studio 2022 installation directory. For a standard Community installation, the default path is:

`C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\Extensions\`

*(Note: If you are using Professional or Enterprise editions, replace `Community` in the path with `Professional` or `Enterprise`.)*

Locate and delete the following file: `extensions.configurationchanged`

### Step 3: Re-index Visual Studio Extensions
Open the **Developer Command Prompt for VS 2022** (or standard Command Prompt) and run the following command:

`devenv /setup`

Wait for the command to finish. This process forces Visual Studio to re-scan and properly re-index all installed extensions.

---

!!! success "Result"
    After running `devenv /setup`, launch Visual Studio 2022. PHP Tools will be rediscovered, the package loading errors will be resolved, and the extension will function normally.