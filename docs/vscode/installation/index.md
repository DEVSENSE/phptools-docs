/*
Title: Installation
Description: Installing PHP Extension for Visual Studio Code.
*/

## Installation

The extension is installed through the Visual Studio Code' `Extensions` window.

- Navigate to `Extensions` view (`View` / `Extensions`)
- Search for `"devsense.phptools-vscode"`
- Install the extension, and eventually reload your VS Code window.

![phptools install vscode](../imgs/phptools-install.png)

After the successful installation, please [activate](#license-activation) your copy of PHP Tools for VS Code to unlock PREMIUM features.

## License Activation

### Premium

Valid license gives access to _PREMIUM_ features. For more information about purchasing a license and FAQ, see our [purchase page](https://www.devsense.com/purchase).

### Activation

To activate your premium license:  

1. Open the **Command Palette** from the **View** menu.  
2. Search for the command **PHP Tools: Activate License**.  
3. Enter your license key into the pop-up window and press Enter.  

  ![Enter License Key](../imgs/enter-license-key.png)

> If there is no Internet connection, a popup message with URL will open. Open this URL on a machine with Internet connection. There will be futrher instructions with offline activation code.

### Activation (Programically)

> Version 1.60 and never

To activate the premium license programically, put the license key into the environmetal variable `DEVSENSE_PHP_LS_LICENSE`.

```bash
# Linux
export DEVSENSE_PHP_LS_LICENSE=Your_License_Key
```

When the extension starts, and premium is not activated already, it checks the variable and tries to perform online activation silently. The result of activation can be checked in OUTPUT / PHP log.

> **Offline activation (programically)**: To activate the license without Internet connection, go to https://www.devsense.com/purchase/validation, fill in the form and obtain an activation code. Set the whole code `{...}` into the environmental variable `DEVSENSE_PHP_LS_LICENSE` instead of the license key.

### Free Trial

Not ready to commit yet? Try our premium features for free!  
1. Open the **Command Palette**.  
2. Search for the command **PHP Tools: Begin Free Trial**.  

The trial lets you explore all PREMIUM features at no cost for 30 days.

## Offline installation

Download the `.vsix` installation file from [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=DEVSENSE.phptools-vscode). The installation file has to be installed using the Visual Studio Code' `Command palette`, using the command `Extensions: Install from VSIX`.

## Pre-Release Installation

PHP Tools are released in a Stable and Pre-Release version. By default, the stable version is installed. The Pre-Release versions are updated more frequently, containing the most recent fixes and new features.

![php for vscode pre-release](../imgs/vscode-extension-prerelease.png)

Navigate to the `Extensions` view, choose `PHP Tools`, and click `Install`. In case, there is a Pre-Release version available, `Install Pre-Release Version` will appear.

## Related Links

- [Pre-Release of PHP Tools (blog)](https://blog.devsense.com/2022/php-vscode-pre-release)
