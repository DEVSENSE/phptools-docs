/*
Title: Remote Explorer
Description: Synchronizing files between remote host and local machine
*/

# Remote Explorer

Version 1.56 introduces **Remote Explorer** tool window which provides the following features:

- **Browsing** Remote Files.
- **Uploading** local modifications to the remote host.
- **Reverting** local modifications.
- **Tracking** locally modified files.
- **Including and Excluding** files and folder from the upload/publish process.
- **Downloading** remote files and folders to the project or to a custom folder.
- **Comparing** a local file with the remote file.
- **Managing** remote connections.

![PHP Remote Explorer](imgs/remote-explorer-window.png)

## Opening the Tool Window

To open the Remote Explorer, either

- Go to menu `View` / `Other Windows` / `Remote Explorer`.
- Right click on a PHP Project in Solution Explorer, and choose `Publish`. The project **must not** be a *Microsoft Publish* project.

![menu publish](imgs/menu-publish.png)

## Switching Profiles

The tool window works with the selected project and remote profile. In case there are more profiles, choose the current one in the upper drop down box.

The drop down also allows to manage profiles for a specified project, to create new profiles, remove profiles, or rename profiles.

![](imgs/remote-explorer-switch.png)

## Uploading Files to Remote

- **Upload Changes** - uploads all the files listed in `Local changes` to the server.
- **Upload** - is the same as `Upload Changes`.
- **Right Click** / **Upload** - only specified file or folder can be uploaded with mouse right click inside the `Local Changes` or `Excluded` sections.

## Getting Files from Remote

- **Pull** - downloads all the files from remote host to the project directory.
- **Restore** - option in the context menu, upon right clicking on a file or a folder inside `Local Changes` or `Excluded` sections. Local modifications will be overwritten with files from the remote host.
- **Pull to Project** - option in the context menu in the `Remote Browser` section. This allows to download only selected file or folder to the project, respecting the relative file locations.
- **Pull to ...** - this option in the context menu in the `Remote Browser` asks for a folder on the local computer, and downloads the files there.

## Local Changes Menu

`Local Changes` section provides additional context menu options. Right click on a file or a folder to access the following:

- Open file in the Visual Studio editor.
- Compare local file with remote version
- Upload single file or folder to the remote host
- Exclude or Include the file or folder from the list of local changes
- Restore the file from the version on the remote host

![compare command](imgs/remote-explorer-menu.png)

### Comparing Local Changes

The `Compare with Remote Version` context menu checks the differences between the local file and the same file on the remote host using the Visual Studios *diff* window. The window highlights different lines, and characters, and allows to further modify the local file to see the differences immediatelly.

![compare command](imgs/remote-explorer-compare.png)

### Include, Exclude

Local changes can be excluded from the `Local changes` list with the `Exclude` menu command, or the `Exclude All` button. Excluded items won't be uploaded upon initiating the `Upload Changes` command.

Excluded items can be included back into the `Local changes` list of the Remote Explorer.

![include to local changes](imgs/remote-explorer-include.png)

## Remote Browser

The last section of the *Remote Explorer* tool window provides access to the remote host files. The list of files is obtained from the remote host only when the section is expanded.

Files in the list can be opened, which downloads them locally and opens them in the Visual Studio editor. Other options are `Pull to Project` and `Pull to ...` which downloads them to the local directory respectively.

![remote browser](imgs/remote-explorer-remote.png)

## Automatic Upload

The option `Auto` popups a context menu with several triggers (i.e. events). Choosing from the menu makes the pending files being automatically uploaded.

![auto publish](imgs/remote-explorer-auto.gif)

Options are the following:

- `Off`: disabled automatic upload.
- `Project Opened`, etc.: enables automatic upload using the current remote profile upon selected trigger.
- ad `After Build`: triggers upload before running the project.
- ad `File Saved`: triggers upload of a file saved within Visual Studio.
- ad `File Changed`: triggers upload of all pending changes whenever a file in project is modified (inside or outside the Visual Studio).
- `Manage Project Events`: opens the window with more details events configuration. This allows for example to specify file filters for `File Changed` triggers.

## Related links

- [New Project](new-project) - creating a new PHP project, either empty or from a template.
- [New Project from Remote location](new-project-remote) - creating a new PHP project that is initialized with files from a remote location, and setups both-way synchronization.
