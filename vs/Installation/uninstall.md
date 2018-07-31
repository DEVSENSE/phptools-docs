/*
Title: Uninstall
Description: Uninstall PHP Tools for Visual Studio
*/

# Uninstall

## Uninstall version 1.11 and higher

PHP Tools for Visual Studio is installed through Windows Installer. Use Programs and Features in Windows Control Panel for repair, change or uninstall. The extension is listed in Visual Studio in `Tools | Extension Manager` without the option to uninstall.

![Uninstall from Control Panel](imgs/phptools-uninstall.png)

## Uninstall previous versions

PHP Tools for Visual Studio versions lower than 1.11 were standard Visual Studio extension (`.vsix`). Installing, updating and removing this extension is managed through Visual Studio Extension Manager (see below).

Extension Manager is available in Visual Studio, in `Tools | Extensions and Updates`.
Any new installation, update or removal requires restarting Visual Studio. The user is notified about that, and it is recommended to perform installations or updates while other Visual Studio instances are closed.

![Uninstall from Extension manager](imgs/uninstall-extension-manager.png)