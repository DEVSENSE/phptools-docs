---
title: Debugging PHP by multiple users through Xdebug proxy
description: 
date: 2021-09-14 06:18:24
authors:
  - miloslav
---

# Debugging PHP by multiple users through Xdebug proxy

Two developers and one server. They both want to debug php code there. And now what?

<!-- more -->

Xdebug only allows you to specify one IP address to the ``
You can just add `xdebug.discover_client_host=true` (xdebug.remote_connect_back in Xdebug 2) to `php.ini` and Xdebug will connect back to the developer.

BUT, what if someone else with bad intentions would like to debug your server too? Now, he has wide open doors.

Sure this is not much of an issue when both developers and the web server is on the same private netwok, but in other cases you might want to continue to read.

## Xdebug proxy



