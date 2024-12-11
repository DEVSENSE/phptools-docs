/*
Title: Configurar Xdebug
Description: Configuring Xdebug
*/

# Configurar Xdebug

La [extensión PHP Xdebug](http://xdebug.org/) es necesaria para permitir a PHP Tools integrar las funciones de depuración en Visual Studio.

## Elegir el archivo binario Xdebug correcto

Elija la versión de acuerdo con su versión de PHP, pero siempre **32bits**. Es altamente recomendado utilizar la versión **non-thread safe** (NTS) en Windows.

También es posible utilizar la herramienta provista por sus desarrolladores: [Xdebug Wizard](http://xdebug.org/wizard.php). Puede copiar y pegar la salida de phpinfo y esta herramienta le mostrará la versión correcta que debe descargar.

## Copiar el archivo binario Xdebug a su carpeta de Extensiones PHP

La carpeta de extensiones de PHP generalmente está ubicada dentro del tiempo de ejecución, en la subcarpeta `ext`.

Copie el archivo binario Xdebug descargado dentro la carpeta tiempo de ejecución de PHP.

## Actualizar la configuración de PHP

Edite el archivo [PHP Configuration file](http://php.net/manual/en/configuration.file.php). Generalmente su nombre es `php.ini`, y está localizado dentro de la carpeta tiempo de ejecución de PHP.

Añada las siguientes líneas al final de su archivo de configuración. Cambie la ruta de acceso absoluta de Xdebug para que corresponda con la ruta correcta en su sistema.

### Xdebug 2

```ini
[XDEBUG]
zend_extension = "C:\Program Files (x86)\php-5.4.8\ext\php_xdebug-2.2.1-5.4-vc9-nts.dll"
xdebug.remote_enable = on
xdebug.remote_handler = dbgp
xdebug.remote_host = 127.0.0.1
xdebug.remote_port = 9000
xdebug.remote_mode = req
xdebug.idekey="php-vs"
```

### Xdebug 3

```ini
[XDEBUG]
zend_extension="C:\Program Files (x86)\PHP\v8.0\ext\php_xdebug.dll"
xdebug.mode=debug
xdebug.client_host = 127.0.0.1
xdebug.client_port = 9003
xdebug.start_with_request=trigger
```


> **Tome en cuenta que:**
>
> -  A partir de 5.3, es necesario utilizar `zend_extension` y no `zend_extension_ts`.
> - **Xdebug** es incompatible con la extensiones Zend Optimizer y Zend Studio Debugger. Estas extensiones deben ser descomentadas.
> - PHP Tools for Visual Studio tiene una función de verificación de configuración que puede recomendar y aplicar cambios de configuración dependiendo de su sistema.

El ajuste de `xdebug.remote_port` tiene que ser el mismo que en las opciones de PHP Tools (en Visual Studio, `Herramientas | Opciones | PHP Tools | Avanzado`). El valor predeterminado es `9000` y generalmente dejarlo así es suficiente.

> **Nota:** al utilizar **FastCGI**, el servidor **nginx** puede bloquear el puerto `9000` por defecto, tanto en el **nginx** como en los ajustes de Visual Studio. Tome en cuenta que reiniciar **nginx** no volverá a cargar `php.ini`. Necesitará reiniciar **PHP**, o su servidor.

## Verificar la instalación

Siga los pasos a continuación para verificar la instalación de **Xdebug**:

1. Cree un archivo simple de PHP que contenga lo siguiente: 
```php
<?php phpinfo(); ?>
```

2. Abra la dirección URL correspondiente en su navegador.
3. Verifique que la sección **Xdebug** aparezca en el resultado.

Si no ve la sección arriba en la salida de phpinfo, debe haber algo incorrecto con su configuración de PHP o es necesario reiniciar su servidor web para permitir que PHP actualice su configuración. Si la sesión de depuración de PHP Tools fue iniciada antes de un cambio de configuración, es recomendado que se cierre desde su ícono de bandeja de sistema o que reinicie Visual Studio.
