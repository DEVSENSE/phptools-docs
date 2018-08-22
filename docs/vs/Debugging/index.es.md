/*
Title: Depurador: Información General
Description: 
*/

# Información general sobre el depurador

PHP Tools for Visual Studio extiende Visual Studio con capacidades de depuración de PHP. El motor de depuración aprovecha la extensión de PHP [Xdebug](http://xdebug.org). 

Para conocer más acerca de la depuración con Visual Studio, vea [Depurar en Visual Studio](https://msdn.microsoft.com/es-es/library/sc65sadd.aspx).

## Requisitos

 - Xdebug debe estar configurado dentro de su instalación de PHP para que el depurador funcione correctamente. Más información en [Configuring Xdebug](configuring-xdebug).

 - La extensión Xdebug debe operar en el puerto TCP especificado en la página de opciones de PHP Tools. Su cortafuegos (firewall) debe estar correctamente instalado para permitir la comunicación a través de este puerto.

 - Utilice PHP Web Project o PHP Console Project (y no ASP.NET Web Site).

## Depurador Visual

El Depurador Visual  le permite examinar el código mientras se ejecuta e incluye características que ayudan a depurar aplicaciones, incluidas las siguientes:

- **Puntos de Interrupción** - Los  puntos de interrupción son lugares en el código donde el depurador detiene la aplicación, permitiéndole ver el estado actual de los datos de la aplicación, y también detenerse en cada línea del código. Para más información, vea [Puntos de Interrupción](breakpoints).

- **Examinar el código** - Una vez que la ejecución se ha detenido en un punto de interrupción, puede ejecutar el código línea por línea (paso a paso por instrucciones). El depurador visual incluye una cantidad de funciones para ayudar a examinar el código, como los iteradores que permiten especificar cuantas veces debe entrar paso a paso en un bucle antes de detenerse nuevamente. Para más información, vea [Comandos de depuración](https://docs.devsense.com/en/debugging/stepping).

- **Vista de los datos** - El depurador visual le ofrece diferentes opciones para ver y controlar los datos mientras la aplicación se está ejecutando. Además, le permite modificar los datos mientras la aplicación está detenida en el modo interrupción y después continuar de ejecutar la aplicación con los datos modificados. Para más información, vea [Inspección de datos en el depurador](https://docs.devsense.com/en/debugging/inspecting-data)

## Depurar un proyecto Web PHP

Un proyecto PHP Web puede comenzar a depurarse presionando <kbd>F5</kbd> (`Depurar | Iniciar depuración`); esto iniciará el proyecto como se especifica en las propiedades (Startup page, Server).

Presione <kbd>Ctrl+F5</kbd> (`Depurar | Iniciar sin depurar`) para comenzar sin el depurador. Frecuentemente, el código se ejecutará más rápidamente sin el depurador asociado, e iniciar con ese comando también utilizará los ajustes del proyecto.

### Servidores compatibles

El proyecto Web PHP incluye compatibilidad con varios servidores de desarrollo para simplificar su desarrollo. En Propiedades del proyecto (haciendo click derecho en el nodo Proyecto en el **Explorador de Soluciones**, y luego en **Propiedades**) para especificar el servidor web, que será utilizado cuando un usuario comience un nuevo proyecto PHP Web.

- **PHP 5.4 + servidor web interno** - un servidor simple y rápido utilizado para desarrollo web. Puede manejar una sola solicitud en el momento y es compatible con diferentes tipos de archivos de documentos. Más información en [PHP: Servidor web interno](http://php.net/manual/es/features.commandline.webserver.php). El proyecto web PHP utiliza el servidor web interno, de manera que el usuario puede comenzar a depurar simplemente al presionar la tecla <kbd>F5</kbd>.

- **IIS Express** - PHP Tools permite que el usuario tome ventaja de IIS Express, que es una mejor opción que el **servidor interno PHP**, ya que puede manejar múltiples solicitudes al mismo tiempo, y además, el usuario puede sacar provecho del **módulo URL Rewriter**. me or you can take advantage of the **URL Rewriter Module**.

- **Servidor web personalizado**. En el caso de tener otro servidor web, las opciones nombradas anteriormente no son suficientes. Si necesita depurar su código PHP remotamente en otra máquina, es posible hacerlo solamente con escribir la dirección URL del servidor. 
   > **Nota**: Si elige esta opción, PHP Tools para Visual Studio no será capaz de verificar la configuración.

## Proyecto consola de depuración
PHP Tools for Visual Studio permite la depuración de aplicaciones de línea de comando de PHP.

Para ejecutar su script con argumentos de línea de comando determinados, insértelos como propiedad de depuración.

Haga clic con el botón derecho en el **Explorador de soluciones** de su proyecto y elija **Propiedades**, después seleccione la pestaña **Depurar**. Allí puede añadir las siguientes opciones:

- Argumentos de línea de comando
- Opciones PHP
- Directorio de trabajo

**Argumentos de línea de comando** - este texto será añadido al comando utilizado para ejecutar su script, y aparecerá luego del nombre del script. El primer objeto aquí estará disponible para su script como `$argv[1]`, el segundo como `$argv[2]`, etcétera. 

  > **Nota**: el primer argumento $argv[0] es siempre el nombre que fue utilizado para ejecutar el script.

**Opciones de PHP**: son argumentos para el propio PHP, y aparacen después del nombre de su script, por ejemplo, -d foo[=bar] define INI entry foo con el valor 'bar'.

Las propiedades del **Directorio de trabajo** especifican el directorio de trabajo desde el cual se inicia el proyecto. 

## Resumen de las características
- Depuración en sesión múltiple, depuración remota.
- Depuración de PHP, JavaScript y .NET al mismo tiempo.
- Puntos de interrupción, puntos de interrupción condicionales.
- Depuración paso a paso por instrucciones, paso a paso por procedimientos y paso a paso para salir.
- Compatibilidad con Inspección rápida, Agregar inspección.
- Edición de valores durante el tiempo de ejecución.
- Inspección, Ventana Automático, Ventana de Variables Locales, Ventana Inmediato.
- Ventana Pila de Llamadas.
- Vista de Texto, Vista HTML, Vista XML de valores de variables.
- Asignación de rutas de archivo automático.
