---
title: Debugging Multiple PHP Sites/Projects
description: Debugging Multiple PHP Sites/Projects with PHP Tools for Visual Studio and Xdebug
date: 2015-10-27 00:00:00
authors:
  - miloslav
tags:
  - debug
  - xdebug
cover_image: imgs/debuggingmultiple.jpg
categories:
  - general
---

# Debugging Multiple PHP Sites/Projects

When you develop applications that need to communicate with each other you might need to debug two or more projects at once. You can achieve this very easily with PHP Tools for VS.

<!-- more -->

Let's say we have a PHP web site, which will be sending requests (e.g. AJAX, SOAP or anything else) to the web service. The web site will be handling the responses and do some work with it. For this scenario we will assume both are running locally (it would be similar to when run it on a remote sever).

<a class="btn btn-primary" style="margin-top:10px" href="https://devsense.blob.core.windows.net/phptools/pub/DebuggingMultiplePHPProjects.zip">
    <i class="fa fa-download"></i>
    Download Sample Project
</a>

## Setting it up

I'm going to assume you have [**PHP Tools for Visual Studio**](https://blog.devsense.com/php-tools-at-a-glance) installed with **PHP** and **Xdebug** properly configured. For more information, see [Configuring Xdebug](http://docs.devsense.com/debugging/configuring-xdebug)

I'll demonstrate this scenario with a simple example.

1. We will create one solution with two PHP Web Projects (`*.phpproj`). One for the web site, let's call it just simply **PHPWebProject** and the second **PHPWebService**.

   ![project](imgs\project.png)

2. I will use a simple code:

   **PHPWebProject** | index.php :

   ```php
   <?php
 
   $ch = curl_init("http://localhost:38190/");
   curl_setopt($ch, CURLOPT_HEADER, 0);
   curl_setopt($ch,  CURLOPT_RETURNTRANSFER, 1);
   $response = curl_exec($ch);
   curl_close($ch);
 
   echo $response;
 
   ?>
   ```

   **PHPWebService** | index.php :

   ```php
   <?php
  
   echo "Hello World from WebService";
    
   ?>
   ```

3. We want both projects to start when <kbd>F5</kbd> is pressed. In the solution Properties (right click on Solution node in the **Solution Explorer** and choose **Properties**), select **Startup Project** tab, choose **Multiple startup projects** and select **Action** for both projects to **Start**.

   ![solution-properties](imgs\solution-properties.png)

4. The second step makes sure that when we press <kbd>F5</kbd> both PHP web Projects will start. But that would mean two browsers would be launched. That's obviously something we don't want for **PHPWebService**. Let's open **PHPWebService** properties (right on **PHPWebService** node in the **Solution Explorer**, choose **Properties**). As **Start Action** select **Don't open a page. Wait for a request from and external application**.

   ![start-action](imgs\start-action.png)

5. Since in **PHPWebProject** is addressing `http://localhost:38190/`, we have to make sure **PHPWebService** is listening on this particular port. In the **PHPWebService** project properties, open **Server** tab and change the port to `38190`.

   ![project-port](imgs\project-port.png)

6. PHP Tools would usually initiate debug session by opening your project in browser with `?XDEBUG_SESSION_START=1` query string. But **PHPWebService** will not open any browser on <kbd>F5</kbd>. So we need to instruct Xdebug to start debugging (and connect back to Visual Studio) with other means.

   **Update 2/24/2022:** In the latest PHP Tools version if you are using PHP Built-in server, there is no need to do anything, this should work by itself.

   We can do that by adding this line `xdebug.start_with_request = yes` (in previous version of Xdebug it was `xdebug.remote_autostart = 1`) to `php.ini` file in Xdebug configuration section which will force it to start on every request.

   There are more options available, but this one is the easiest one to use.

## Demonstration

1. Put a breakpoint at the first line of code at both index.php at **PHPWebProject** and **PHPWebService**. Press <kbd>F5</kbd>. It will break in the **PHPWebProject** at the breakpoint location.

2. By pressing <kbd>F10</kbd> you can step until the line with `curl_exec`.
 
   ![debugging-phpwebproject-1](imgs\debugging-phpwebproject-1.png)

3. Another <kbd>F10</kbd> will break at **PHPWebService**

   ![debugging-phpwebservice](imgs\debugging-phpwebservice.png)
 
4. Press <kbd>F10</kbd> twice and you'll get back to **PHPWebProject**

   ![debugging-phpwebproject-2](imgs\debugging-phpwebproject-2.png)

## Summary

This simple scenario demonstrates how you can debug multiple projects. Both projects can be in PHP, or one of them could be written in another language, e.g. C#. It would work exactly the same. 

If you have any questions, please, add them in the comments below.

## Related articles

[Introduction to PHP on Docker with Visual Studio Code](https://blog.devsense.com/introduction-to-php-on-docker-with-visual-studio-code)

[Commenting your PHP Code](https://blog.devsense.com/commenting-your-php-code)




