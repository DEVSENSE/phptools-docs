/*
Title: Desplazarse por el código con el depurador
Description: Stepping: executing code one line at a time.
*/

# Desplazarse por el código con el depurador

Una vez que inicia el depurador, puede ir paso a paso por el código, es decir, ejecutando una línea cada vez. Los comandos para moverse por el código incluyen **Paso a paso por instrucciones**, **Paso a paso por procedimientos** y **Paso a paso para salir**.

![Step commands](imgs\step-commands.png)

## Comandos para desplazarse

**Paso a paso por instrucciones** ejecutará la siguiente instrucción y se detiene. Si la siguiente instrucción es una llamada a una función, el depurador se detendrá en la primera línea con la instrucción de la función que está siendo llamada. Verifique el menú **Depuración**, **Paso a paso por instrucciones** para conseguir el atajo (generalmente es <kbd>F11</kbd>)

![Step commands](imgs\step-into.png)

> **Nota**: en la imagen anterior, el depurador funcionando **paso a paso por instrucciones** se detuvo en la primera línea con la instrucción, y no en el `{`, como es el comportamiento usual en Visual Studio. Esto se debe a que PHP no genera allí ninguna instrucción para pausar la ejecución.

**Paso a paso por procedimientos** ejecutará la siguiente instrucción, pero si es una llamada a una función, la función entera será ejecutada. Esto le permite saltarse funciones fácilmente cuando no está interesado en depurarlas. Verifique el menú **Depuración**, **Paso a paso por instrucciones** para conocer el atajo (generalmente es <kbd>F10</kbd>).

**Paso a paso para salir** ejecutará hasta el final de la función actual. Es útil cuando no hay más nada interesante en la función actual. Verifique en **Depuración**, **Paso a paso para salir** para conseguir el atajo (generalmente es <kbd>Shift+F11</kbd>).

> **Limitaciones conocidas de PHP**:
> salir de una función provista como un argumento no pausará en la función llamada, sino en la próxima línea con una instrucción.
> 
> Una muestra:
> 
> ![PHP specific Step Out](imgs\step-out.png)

Si quiere continuar la ejecución, presione <kbd>F5</kbd>. Su programa no pausará hasta el próximo punto de interrupción. Tome en cuenta que cuando se desplaza **Paso a paso por procedimientos** o **Paso a paso para salir**, si el código ejecutado llega a un punto de interrupción, se detendrá nuevamente, aunque no haya alcanzado el final de la función.

## Desplazarse cuando se están depurando solicitudes (procesos) múltiples

Puede depurar solicitudes (procesos) múltiples al mismo tiempo. En este caso, desplazarse como comúnmente lo hace no es suficiente, ya que solamente se desplaza por el proceso actual, pero ejecuta otros procesos. Lo que necesita es tener los demás procesos en modo de interrupción y desplazarse únicamente por el proceso actual. Puede lograrlo utilizando los siguientes comandos:

- **Paso a paso por instrucciones en el proceso actual** (generalmente <kbd>Ctrl + Alt + F11</kbd>)
- **Paso a paso por procedimientos en el proceso actual** (generalmente <kbd>Ctrl + Alt + F10</kbd>)
- **Paso a paso para salir en el proceso actual** (generalmente <kbd>Ctrl + Shift + Alt + F11</kbd>)
