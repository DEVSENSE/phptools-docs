/*
Title: Configuración
Description: 
*/

## Opciones de configuración

Los siguientes ajustes se introducen gracias a la extensión. Si necesita verlos o modificarlos, debe navegar hasta los [Ajustes de VSCode](https://code.visualstudio.com/docs/getstarted/settings).

Ajuste | Valores | Descripción
---     | ---    | ---
`php.version` | Versión de PHP o un nombre de perfil definido en `php.executables` | Especifica la versión de PHP que utilizará de forma predeterminada el depurador, el análisis de código y el explorador de pruebas.
`php.codeLens.enabled` | `true`/`false` | Habilita/deshabilita lentes de código en archivos PHP sobre funciones, tipos, propiedades y constantes.
`php.debug.port` | número o matriz de números | Puerto Xdebug predeterminado. Este valor se usa cuando `port` no se especifica en `launch.json` la configuración o cuando se depura sin una carpeta abierta. El valor predeterminado es `[9003,9000]`.
`php.executables` | Conjunto de nombres de perfil y ruta ejecutable de PHP correspondiente. | Nombres de perfil definidos que se pueden elegir en php.versionla configuración o desde el selector de versión de PHP.
`php.executablePath` | Ruta de acceso completa al programa `php`, o no establecido. | Especifica la ruta de acceso al programa `php` que será utilizado con el [Explorador de Pruebas](test-explorer) y la [Depuración](debug).
`php.format.codeStyle` | "PHP Tools", "PSR-2" | Perfil de formato de código.
`php.format.autoimport` | "auto-import", "fqn", "none", "hide" | Configura cómo tratar la finalización de nombres fuera del espacio de nombres actual. Ver [auto-import](editor/auto-import).
`php.problems.exclude` |  Mapa asociativo de rutas y si excluirlas de la verificación de problemas. | Especifica qué problemas se ocultarán en los directorios especificados. Es posible configurar `true` para ignorar todos los problemas o una serie de códigos de error. Muestra: `{'/vendor/**':true, '/tests/**':[6501,6555]}`.. Ver [configuración de problemas](problems#configuration). .
`php.problems.workspaceAnalysis` |  "true", "false" | Permite deshabilitar el análisis del espacio de trabajo completo. Recomendado para proyectos más grandes.
`phpTools.language` | "en", "de", "es", "fr", "ja", "pt", "ro", "ru", "tr", "zh", o no establecido. | Especifica el código de idioma de la documentación integrada. Si no se establece, la configuración predeterminada es el idioma del sistema.
`files.exclude` | Associative map of paths to be excluded from the project. | Specifies files that won't be processed by the code analysis engine (code completion, navigation, problems).
`debug.inlineValues` | `true`, `false` | Habilita o deshabilita la visualización de valores relevantes para la declaración actualmente depurada.

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

**La depuración local** necesita que la extensión [Xdebug](https://xdebug.org/) esté instalada y habilitada. Vea cómo instalar y configurar Xdebug según su sistema operativo:
- [Xdebug on Linux](debug/xdebug-linux)
- [Xdebug on Mac](debug/xdebug-mac)
- [Xdebug on Windows](debug/xdebug-win)

### Recomendamos

- PHP 7.0 o más reciente
- Extensiones PHP `dom`, `xsl`, `mbstring`
- Extensión PHP `xdebug` con las siguientes opciones en su `php.ini`:
  - `xdebug.remote_enable = 1`
  - `xdebug.remote_autostart = 1`

## Artículos relacionados

- [Configuración de Problemas](problems#configuration)
- [Managing extensions in VS Code](https://code.visualstudio.com/docs/editor/extension-gallery) *(visualstudio.com)*
- [VSCode Settings](https://code.visualstudio.com/docs/getstarted/settings) *(visualstudio.com)*
