/*
Title: Web Extension
Description: PHP Tools in the Browser.
*/

## PHP IntelliSense in the Browser

The PHP Tools extension offers [support](https://blog.devsense.com/2022/php-intellisense-web) when running on [vscode.dev](https://vscode.dev) (including [github.dev](https://github.dev)). All the editor features can be used in this browser-based development environment.

## Installation

Navigate to `Extensions` view, and search for `"PHP Tools"`. Click `Install` to confirm.

![installing php tools in vscode web](https://blog.devsense.com/bl-content/uploads/pages/9d26e9e377702d34f7091b7db1c63e51/vscode-web-install.png)

During the first run, the extension may take some time to load since it needs to be downloaded first. Watch the VSCode status bar at the bottom, where is a loading progress icon.

## Limitations

The limitations are described on the VS Code's documentation page: https://code.visualstudio.com/docs/editor/vscode-web#_limitations.

Since the editor won't process all the files in your workspace, the IntelliSense might not be complete. In the result, code lenses with useful commands are not enabled since they would not provide complete results, code problems do not mention unknown classes and functions, tooltips might not provide the complete information, and Laravel facades might not provide complete IntelliSense either.

## Related Links

- [PHP IntelliSense in the Browser (blog)](https://blog.devsense.com/2022/php-intellisense-web)
