/*
Title: Registro  de Actividad
Description: Getting Visual Studio Log file to solve technical issues.
*/

# ActivityLog.xml

La información adicional puede ser útil para determinar problemas con la configuración de Visual Studio. 
Para habilitar el registro, siga estos pasos:

1. En primer lugar, cierre Visual Studio.
2. Inicie Visual Studio con el parámetro `/Log`. Puede presionar <kbd>Start+R</kbd> y luego escribir el siguiente comando:
```bash
"C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\devenv.exe" /Log
```
3. Reproduzca el problema y cierre Visual Studio
4. El registro del archivo lo conseguirá en  `%AppData%\Microsoft\VisualStudio\`. Puede presionar <kbd>Start+R</kbd> e ingresar la ruta de acceso en la ventana.
5. Envíenos por correo electrónico su `16.0_xxxx` \ `ActivityLog.xml` para intenatr descubrir los posibles problemas.

> **Nota**: Reemplace `15.0` con la versión de su Visual Studio
* `10.0` para Visual Studio 2010
* `11.0` para Visual Studio 2012
* `12.0` para Visual Studio 2013
* `14.0` para Visual Studio 2015
* `15.0` para Visual Studio 2017
* `16.0_xxxxxxxx` para Visual Studio 2019
* `17.0_xxxxxxxx` para Visual Studio 2022
