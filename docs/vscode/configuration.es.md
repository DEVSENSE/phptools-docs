/*
Title: Configuración
Description: 
*/

## Instalación

La extensión `"PHP Tools"` se instala a través de la ventana principal de VSCode. Por favor, si necesita información detallada, vea [managing extensions in VS Code](https://code.visualstudio.com/docs/editor/extension-gallery).

Después de la instalación exitosa, se le pedirá [activar](#license-activation) PHP Tools.

### Instalación sin conexión

El archivo de instalación `.vsix` puede descargarse en nuestra [sección de descargas](https://www.devsense.com/download#vscode). Éste  archivo debe ser instalado utilizando `Command palette` de VSCode, comando `Extensions: Install from VSIX`.

## Opciones de configuración

Los siguientes ajustes se introducen gracias a la extensión. Si necesita verlos o modificarlos, debe navegar hasta los [Ajustes de VSCode](https://code.visualstudio.com/docs/getstarted/settings).

Ajuste | Valores | Descripción
---     | ---    | ---
`php.version` | PHP version or a profile name defined in `php.executables` | Specifies the PHP version to be used by default by debugger, code analysis, and test explorer.
`php.problems.workspaceAnalysis` |  "true", "false" | 
`php.executablePath` | Ruta de acceso completa al programa `php`, o no establecido. | Especifica la ruta de acceso al programa `php` que será utilizado con el [Explorador de Pruebas](test-explorer) y la [Depuración](debug).
`phpTools.language` | "en", "de", "es", "fr", "ja", "pt", "ro", "ru", "tr", "zh", o no establecido. | Especifica el código de idioma de la documentación integrada. Si no se establece, la configuración predeterminada es el idioma del sistema.
`php.codeLens.enabled` | `true`/`false` | Enables/disables code lenses in PHP files above functions, types, properties, and constants.
`php.debug.port` | number or array of numbers | Default Xdebug port. This value is used when `port` is not specified in `launch.json` settings or when debugging without an opened folder. Defaults to `[9003,9000]`.
`php.executables` | Set of profile names and corresponding PHP executable path. | Defined profile names that can be chosen in `php.version` setting, or from the PHP version picker.
`php.format.codeStyle` | "PHP Tools", "PSR-2" | Code formatting profile.
`php.format.autoimport` | "auto-import", "fqn", "none", "hide" | Configures how to treat completion of names outside the current namespace. See [auto-import](editor/auto-import).
[`php.problems.exclude`](problems#configuration) | Associative map of paths and whether to exclude them from problems checking. | Specifies what problems will be hidden in specified directories. It is possible to set `true` to ignore all problems, or an array of error codes. Sample: `{'/vendor/**':true, '/tests/**':[6501,6555]}`. See [problems configuration](problems#configuration).
`files.exclude` | Associative map of paths to be excluded from the project. | Specifies files that won't be processed by the code analysis engine (code completion, navigation, problems).
`debug.inlineValues` | `true`, `false` | Enables or disables showing values relevant to the currently debugged statement.

## Activación de la licencia

En caso de que la extensión no haya sido activada, una ventana emergente se muestra durante el inicio de la extensión. Esta ventana ofrece las siguientes opciones: 

![Activate PHP Tools](imgs/activate-phptools-vscode.png)

- `I have the license key` le permite ingresar la clave de la licencia y activar la extensión.
- `Get trial` le envía un email con una clave de licencia válida por 14 días.
- `More information` abre la [página web](https://www.devsense.com/purchase) de información sobre la licencia y compra

Una vez que obtenga su clave de licencia y cierre la ventana emergente comentada más arriba, puede activar su copia de la extensión utilizando `Command palette`, comando `PHP Tools: Activate extension`. Ingrese su clave de licencia y confirme presionando `Enter`.

![Enter License Key](imgs/enter-license-key.png)

La activación requiere estar conectado al Internet. La instalación exitosa se confirma por medio de esta ventana emergente:

![Enter License Key](imgs/activation-succeeded-vscode.png)

## Requisitos PHP 

Las funciones de las pruebas y de la depuración necesitan que el programa [PHP](https://secure.php.net/) esté instalado y configurado. Es recomendable utilizar PHP 7.0 o más reciente; sin embargo, las versiones de PHP desde 5.4 en adelante también son compatibles.

**Para ejecutar las pruebas y el servidor de desarrollo incorporado** se necesita `php` con las extensiones  `dom`, `json`, `mbstring` y `xmlwriter`. Para esto, debe instalarse `php` globalmente, para que el comando `php` trabaje por todo el sistema o establezca la configuración de `php.executablePath` en la configuración de VSCode apuntando al ejecutable de PHP.

**La depuración local** necesita que la extensión [Xdebug](https://xdebug.org/) esté instalada y habilitada. Vea [Xdebug configuration](debug/xdebug) para más información.

### Recomendamos

- PHP 7.0 o más reciente
- Extensiones PHP `dom`, `xsl`, `mbstring`
- Extensión PHP `xdebug` con las siguientes opciones en su `php.ini`:
  - `xdebug.remote_enable = 1`
  - `xdebug.remote_autostart = 1`

## Artículos relacionados

- [Configuración de Xdebug](debug/xdebug)
- [Managing extensions in VS Code](https://code.visualstudio.com/docs/editor/extension-gallery) *(visualstudio.com)*
- [VSCode Settings](https://code.visualstudio.com/docs/getstarted/settings) *(visualstudio.com)*
