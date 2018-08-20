/*
Title: Puntos de interrupción
Description: Overview of PHP breakpoints in Visual Studio 
*/

# Puntos de interrupción

Los **puntos de interrupción** son líneas de código donde el depurador debe detenerse (pausar su ejecución) y permitirle que investigue el estado de su programa, como se muestra en la imagen más abajo. Los puntos de interrupción se pueden fijar al hacer clic en el margen del editor de código, o al hacer clic con el botón derecho sobre una línea de código y luego seleccionar **Punto de interrupción**, **Insertar punto de interrupción**, o simplemente al presionar <kbd>F9</kbd> (Éste es un atajo común; verifique en **Depurador**, **Puntos de Interrupción** en el menú de **Ajustes**).

![Breakpoint](imgs\breakpoint.png)

PHP Tools también es compatible con los puntos de interrupción avanzados de Visual Studio, como los [condicionales](#conditional-breakpoints).

Todos los puntos de interrupción del proyecto se encuentran en el panel de **Puntos de Interrupción** ( `Depurar | Ventanas | Puntos de Interrupción` )

![Breakpoints pane](imgs\breakpoints-pane.png)

## Comportamiento específico de PHP

En la mayoría de los casos, los **Puntos de interrupción** de PHP se comportan como un desarrollador de Visual Studio esperaría. Sin embargo, hay casos específicos para el lenguaje PHP:

- Los **Puntos de interrupción** ubicados en la clase y el encabezado de una función global detienen el depurador cuando la ejecución del programa los introduce en el estado de ejecución actual; por ejemplo, cuando se llama `include "file.php"`, todas las definiciones de `file.php` se introducen en este momento.

- Los **Puntos de interrupción** ubicados en el encabezado del método no detienen la ejecución.

- Los **Puntos de interrupción** ubicados en `{` nunca interrupen la ejecución. Hay que ubicarlos en la próxima instrucción.

## Condiciones de puntos de interrupción

Puede darle condiciones a un punto de interrupción al hacer clic con el botón derecho en el punto de interrupción (en el margen izquierdo del editor o en la ventana de puntos de interrupción) y elegir **Condiciones...**.

![Breakpoint context menu](imgs\breakpoints-menu.png)

Esto abrirá el cuadro de diálogo de condiciones para los puntos de interrupción en el que se pueden configurar los criterios de sus condiciones. Aquí puede elegir habilitar o deshabilitar una condición, proporcionar una expresión de predicado para la condición, y elegir si detener la ejecución cuando la condición `Es true` o `Cuando cambie`(por los momentos únicamente es compatible para `Es true`).

Como se espera, habilitar una condición evita que un punto de interrupción detenga la ejecución cuando éste es alcanzado, a menos de que se cumplan los criterios de condición. Vea [Excepciones](exceptions) para saber más.


![Conditional Breakpoint dialog](imgs\conditional-breakpoint-dialog.png)


## Administrar excepciones

 Puede definir los tipos de excepciones en los que se debería interrumpir el programa cuando se producen. Vea el artículo sobre Excepciones para más información. 

## Problemas conocidos

- Si se tiene una única instrucción que no se encuentra encerrada entre llaves dentro de la instrucción de flujo de control  (`if`, `for`, `while`, `else`), la ejecución no se interrumpe y continuará como se espera.

  Generalmente, es buena idea no utilizar instrucciones anidadas no encerradas. Siempre se deben encerrar entre llaves.

  Ejemplos:

   ```php

    // Unenclosed statements nested in control-flow statements

    if(expression)          
        statement; //debugger never breaks here

    for (expression; expression; expression)
	    statement; // debugger never breaks here

    while (expression)
	    statement; // debugger never breaks here

    // Enclosed statements nested in control-flow statements

    if(expression)
    {
       statement; // debugger will break here
    }

    for (expression; expression; expression)
    {
	    statement; // debugger will break here
    }

    while (expression)
    {
	    statement; // debugger will break
    }

    ```
