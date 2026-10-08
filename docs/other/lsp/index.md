# PHP Language Server

Many editors support direct integration with language servers, often with minimal configuration.

## Installation

The PHP Tools Language Server is available as a standalone [NodeJS command-line tool `devsense-php-ls`](https://www.npmjs.com/package/devsense-php-ls).

_Install:_

```
npm install --global devsense-php-ls
```

## MCP Server Built-in

Once you are running the `devsense-php-ls` process, note that it already provides MCP functionality within the same process. Enable it using the command line arguments below:

```
devsense-php-ls -mcp -mcp-server-port 9101
```
