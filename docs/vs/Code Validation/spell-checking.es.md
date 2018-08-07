/*
Title: Spell Checking
Description: Ensure that your source code, including strings and comments, is spelt correctly.
*/

# Revisión de escritura

Existen muchas extensiones de Visual Studio que son compatibles con PHP Tools para Visual Studio. Su función es asegurar que el código fuente, incluidas cadenas y comentarios, esté escrito correctamente.

Para este propósito, recomendamos instalar VSSpellChecker, que puede ser descargado de la [Galería de Visual Studio](https://visualstudiogallery.msdn.microsoft.com/a23de100-31a1-405c-b4b7-d6be40c3dfff). Asegúrese de instalar al menos la versión **2016.5.28.0**, que es la versión más antigua compatible con PHP Tools para Visual Studio.

## Corregir un error de tipeo

 Cuando una palabra mal escrita es detectada, VSSpellCheck la resalta y muestra una etiqueta inteligente con varias correcciones posibles. Si el usuario acepta alguna de esas, la palabra será corregida automáticamente. También puede elegir entre **Ignorar una vez**, para ignorar la palabra solamente una vez, o **Ignorar Todas**, para ignorar las sugerencias cada vez que aparece la palabra. Otra opción es elegir **Añadir al diccionario** y de esta manera, la extensión deja de reportar la palabra.

 ![Fix a typo](imgs/fix-a-typo.png)

## Cambiar el diccionario

  La extensión viene con diferentes diccionarios para los lenguajes más comunes. El diccionario se puede cambiar en `Herramientas | Spell Checker | Editar Configuración`, en la sección de **Diccionario Global** se elige el lenguaje preferido y luego ser hace clic en **Añadir**. Al presionar <kbd>Ctrl + S</kbd> se guarda la configuración. Puede ser necesario reabrir los archivos para que entre en efecto la nueva configuración.

## Más información

  Para más información sobre el VSSpellChecker, visite [https://github.com/EWSoftware/VSSpellChecker/wiki](https://github.com/EWSoftware/VSSpellChecker/wiki).
