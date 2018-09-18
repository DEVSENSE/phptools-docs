/*
Title: Blade
Description: Compatibilidad con plantillas Blade.
*/

# Compatibilidad con plantillas Blade

Las plantillas Blade son una parte integral de Laravel Framework. PHP Tools es compatible de forma nativa con las plantillas Blade comenzando desde la versión 1.28 en Visual Studio 2015 y más nuevas y además provee Intellisense y navegación para éstas. Las siguientes secciones dan información detallada de todas las funciones disponibles. La compatibilidad con Blade está completamente integrada y sus características no requieren que Blade o Laravel estén instalados en el proyecto.

## Resaltado de sintaxis

PHP Tools proporciona resaltado de sintaxis completo para las plantillas Blade. 
Los colores respetan el esquema de color de Visual Studio y son compatibles con temas.

![Blade syntax highlighting](imgs/blade-syntax.png "Blade syntax highlighting.")

<center><i>Esta imagen muestra la sintaxis resaltada de una plantilla corta de Blade.</i></center>

## Información sobre herramientas

PHP Tools proporciona información sobre herramientas para todas las directivas conocidas, variables y funciones (tanto las definidas por el usuario como las intrínsecas).
PHP Tools provee información básica sobre herramientas para todas las construcciones; la información adicional se provee por directivas definidas por el usuario y declaradas con la documentación PHPDoc. 
PHP proporciona ayuda de información de herramientas para las siguientes directivas: 
- Directivas integradas.
- Directivas definidas por el usuario. 
- Funciones y variables PHP utilizadas en la instrucción <code>{{ }}</code>.

![Blade tooltip](imgs/blade-tooltip.png "Blade tooltip.")

<center><i>Esta imagen muestra un ejemplo de la información de herramientas con una directiva <code>datetime</code>, definida por el usuario, incluendo su comentario PHPDoc.</i></center>

## Finalización IntelliSense

PHP Tools proporciona Intellisense, ayuda para finalizar automáticamente la escritura, que provee las directivas disponibles, las funciones y variables.
Una lista de sugerencias de finalización se muestra cuando el usuario comienza a escribir una nueva palabra o cuando la finalización es directamente activada por el comando `Complete Word` (<kdb>Ctrl+Space</kdb>).
La finalización automática es compatible con las siguientes funciones:
- Directivas integradas.
- Directivas definidas por el usuario. 
- Funciones y variables PHP utilizadas con la instrucción `{{ }}`.

![Blade intellisense completion](imgs/blade-completion.png "Blade intellisense completion.")

<center><i>La imagen muestra las opciones de finalización para el texto <code>@s</code> con la directiva integrada  <code>section</code> seleccionada como la mejor correspondencia.</i></center>

## Navegación

PHP Tools es compatible con el comando `Go To Definition` (<kdb>F12</kdb>) para todas las directivas definidas por el usuario y las funciones y variables PHP.
Éste comando abre el archivo que contiene la definición de la variable o directiva seleccionada actualmente y coloca el signo de intercalación al principio de la definición.
La navegación es compatible con las siguientes funciones:
- Directivas definidas por el usuario. 
- Funciones y variables PHP utilizadas en la instrucción `{{ }}`.

![Blade navigation](imgs/blade-navigation.png "Blade navigation.")

<center><i>El ejemplo muestra la instruccion en un menu de contexto para la directiva <code>datetime</code>.</i></center>

## Compatibilidad con la extensión del usuario

PHP Tools es compatible con todas las extensiones del usuario permitidas por el motor Blade. 
Las extensiones del usuario son compatibles a través de todas las funciones, incluyendo Intellisense y navegación. PHP Tools es compatible con las siguientes funciones:
- Alias del componente Blade utilizando el método de `component` (`Blade::component('components.alert', 'alert')`). 
- Directivas definidas por el usuario… (`Blade::directive('test', "test_function")`). 
- Declaraciones if personalizadas (`Blade::if('env', function ($environment) { return true; })`). 

![User extension filter](imgs/blade-extension.png "User extension filter.")

<center><i>Ejemplo de una lista de finalización que muestra una directiva `datetime`.</i></center>

## Instalación de Blade

Blade puede ser instalado a través de un paquete composer.
Blade está disponible como parte del paquete oficial que contiene el marco Laravel o en paquetes independientes que contienen únicamente Blade.

## Limitaciones de Blade

PHP Tools es compatible con la integración de Blade de HTML en Visual Studio 2015 y versiones más recientes. La integración con Cascading Style Sheets (CSS), JavaScript y TypeScript actualmente no es compatibles.
