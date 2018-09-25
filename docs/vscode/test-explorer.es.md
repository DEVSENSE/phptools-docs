/*
Title: Explorador de Pruebas
Description: Visual PHPUnit test explorer
*/

# Explorador de Pruebas

La vista del Explorador de Pruebas permite la ejecución visual y depuración de las pruebas con PHPUnit. Las pruebas son ejecutadas por PHPUnit y los resultados se muestran en **Test View**. La salida PHPUnit se muestra en la pestaña de salida **PHP (PHPUnit)**.

![Test Explorer](imgs/test-view.png)

## Configuración

Es necesario configurar el sistema antes de que puedan ejecutarse las pruebas. El proceso requiere PHP, el archivo phar de PHPUnit y un archivo de configuración.

> Internamente, PHP Tools resuelve las pruebas al ejecutar **php -d display_errors=on PHPUnit.phar --teamcity** en el directorio raíz del área de trabajo. Este comando necesita que *phpunit.xml* esté presente en la raíz. El archivo de configuración debe identificar todas pruebas que se desean y proveer todos los ajustes a PHPUnit.

### PHP

Las pruebas necesitan PHP runtime en funcionamiento, que es:
1. El comando especificado por el valor *php.executablePath* en los ajustes del usuario; o
2. *php* en la línea de comando si el ajuste no está presente.

### PHPUnit

El archivo phar de PHPUnit es necesario para ejecutar las pruebas. PHP Tools trata de localizarlo en:

1. El directorio de proveedores, generalmente creado por composer. 
2. PHPUnit phar integrado (versión 6.5.12) distribuido por PHP Tools, en el caso de que no se consiga en el directorio de proveedores.

### Archivo de configuración

Las pruebas se basan en el archivo de configuración *phpunit.xml* ([PHPUnit configuration](https://phpunit.de/manual/6.5/en/appendixes.configuration.html)), que debe ser ubicado en la raíz del área de trabajo.

PHP Tools puede generar un archivo de configuración básico, si ubica algunas pruebas y no se consigue el archivo de configuración. 
Si el archivo de configuración no se consigue, pero puede localizarse algún archivo llamado \*test.php, PHP Tools ofrecerá crear una configuración básica a través de un mensaje emergente.

![Configuration pop-up](imgs/test-pop-up.png)

### Pruebas

Los nombres, la ubicación, la extensión y los ajustes de las pruebas son definidos en el archivo de configuración de *phpunit.xml*. 
Las pruebas deberían ser ubicadas en un subdirectorio, no directamente en la raíz del área de trabajo, ya que el PHPUnit no los reconoce allí.

## Vista del Explorador de Pruebas

La vista del Explorador de Pruebas provee las herramientas para la ejecución automática y manual de las pruebas con la representación visual de los resultados.
La ventana será solamente visible si hay algunas pruebas o un archivo de configuración *phpunit.xml* en el área de trabajo.

![Test Explorer](imgs/test-explorer.gif)

## Resultados de las pruebas

Los resultados de las pruebas se muestran en la vista del Explorador de Pruebas como pequeños íconos al lado de cada prueba con los siguiente significados:

* ![Test success](imgs/test-success.png) - Se ejecutó la prueba sin errores.
* ![Test failure](imgs/test-failure.png) - La prueba se ejecutó con errores. El mensaje de error se encuentra en la pestaña de salida.
* ![Test skipped](imgs/test-skipped.png) - La prueba fue ejecutada y omitida ([PHPUnit configuration].(https://phpunit.de/manual/6.5/en/incomplete-and-skipped-tests.html))
* ![Test running](imgs/test-running.png) - La prueba se está ejecutando actualmente (esto se muestra generalmente durante la depuración).

El resultado real de la ejecución **PHP (PHPUnit)** se muestra en la pestaña de salida, y cada una de las pruebas tiene su propia salida disponible al hacer clic en la prueba en la Vista del Explorador de Pruebas.

![Test Output](imgs/test-output.png)

## Depurar pruebas

Las pruebas pueden ser depuradas con el Xdebug al hacer clic en el ícono del insecto ![Debugging Icon](imgs/test-debuging.png) en la vista del Explorador de Pruebas. Las pruebas pueden ser depuradas una por una, no es posible depurarlas todas al mismo tiempo. El proceso es el mismo que el de la [depuración estándar](Debug).

![Test Explorer](imgs/test-debug.gif)

## Pruebas continuas

Las pruebas pueden ser ejecutadas continuamente al habilitar la ejecución automática en la vista del Explorador de Pruebas. Una vez habilitada, las pruebas serán ejecutadas en cada ocasión que el archivo en prueba se guarde después de una modificación.

![Test Autorun](imgs/test-autorun.png)
