/*
Title: Explorador de Pruebas
Description: Visual PHPUnit test explorer
*/

# Explorador de Pruebas

La vista del Explorador de Pruebas permite la ejecución visual y depuración de las pruebas con PHPUnit. Las pruebas son ejecutadas por PHPUnit y los resultados se muestran en **Test Explorer**. La salida PHPUnit se muestra en la pestaña de salida **PHP (PHPUnit)**.

![Test Explorer](imgs/test-view.png)

Cada prueba se enumera en la vista del Explorador, y encima de cada función de prueba como una **code lens** con acciones directas para *Run*, *Debug* y el estado de la prueba.

## Configuración

Es necesario [configurar] (configuración) el editor antes de que se puedan ejecutar las pruebas. El proceso requiere PHP, el paquete PHPUnit y un archivo de configuración PHPUnit.

Las pruebas se resuelven rápidamente analizando los archivos `phpunit.xml` o` phpunit.xml.dist`, y los archivos `.php` correspondientes en el área de trabajo. Cualquier cambio en esos archivos también actualizará automáticamente el Explorador de pruebas.

### PHP

Las pruebas necesitan PHP runtime configurado. Consulte [editor/php-version-select](Selección de PHP ejecutable) para obtener más detalles.

De forma predeterminada, el espacio de trabajo está configurado para usar el comando global `php`.

### PHPUnit

El archivo phar PHPUnit o el paquete de composer PHPUnit son necesarios para ejecutar las pruebas. PHP Tools trata de localizarlo en:

1. El directorio de `vendor` creado por composer. 
2. PHPUnit phar integrado (versión 6.5.12) distribuido por PHP Tools.

### Archivo de configuración

Las pruebas se basan en los archivos de configuración `phpunit.xml` o` phpunit.xml.dist` ([configuración de PHPUnit] (https://phpunit.de/manual/6.5/en/appendixes.configuration.html)), que deberían colocarse en la raíz del área de trabajo.

### Pruebas

Los nombres, la ubicación, la extensión y los ajustes de las pruebas son definidos en el archivo de configuración de `phpunit.xml`. 
Las pruebas deberían ser ubicadas en un subdirectorio, no directamente en la raíz del área de trabajo, ya que el PHPUnit no los reconoce allí.

## Vista del Explorador de Pruebas

La vista del Explorador de Pruebas proporciona las herramientas para la ejecución automática y manual de las pruebas con la representación visual de los resultados.
La ventana será solamente visible si hay algunas pruebas o un archivo de configuración `phpunit.xml` en el área de trabajo.

![Test Explorer](imgs/test-explorer.gif)

## Depurar las pruebas

Las pruebas se pueden depurar con Xdebug haciendo click en el icono similar a un error [Icono de depuración](imgs/test-debuging.png) en la vista Explorador de pruebas, o en la acción *Debug* encima de la función de prueba. El proceso de depuración es el mismo que [depuración estándar](Depurar). El Explorador de pruebas puede depurar una o más pruebas a la vez. 

## Resultados de las pruebas

Los resultados de las pruebas se muestran en la vista del Explorador de Pruebas como pequeños íconos al lado de cada prueba con los siguiente significados:

* ![Test success](imgs/test-success.png) - Se ejecutó la prueba sin errores.
* ![Test failure](imgs/test-failure.png) - La prueba se ejecutó con errores. El mensaje de error se encuentra en la pestaña de salida.
* ![Test skipped](imgs/test-skipped.png) - La prueba fue ejecutada y omitida ([PHPUnit configuration].(https://phpunit.de/manual/6.5/en/incomplete-and-skipped-tests.html))
* ![Test running](imgs/test-running.png) - La prueba se está ejecutando actualmente (esto se muestra generalmente durante la depuración).

El resultado real de la ejecución **PHP (PHPUnit)** se muestra en la pestaña de salida, y cada una de las pruebas tiene su propia salida disponible al hacer clic en la prueba en la Vista del Explorador de Pruebas.

![Test Output](imgs/test-output.png)
