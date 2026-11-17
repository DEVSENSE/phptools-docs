---
title: Give AI Agents Deeper PHP Context with the MCP Server
description: Connect AI coding agents to PHP Tools for VS Code through the Model Context Protocol for workspace-aware code assistance.
date: 2026-11-03
authors:
  - jakub
tags:
  - php
  - ai
  - mcp
  - vscode
  - cursor
categories:
  - tutorial
---

# Give AI Agents Deeper PHP Context with the MCP Server

AI coding agents are powerful, but they still need to discover the structure of your PHP codebase before they can make useful changes. A text-based agent has to read files and guess which symbols refer to the same class, which methods call each other, and how your Laravel application is wired together.

PHP Tools for Visual Studio Code now includes a built-in **MCP (Model Context Protocol) server** that exposes the language server's understanding of your project to compatible AI agents such as Claude, Cursor, Windsurf, and Trae. Instead of inferring everything from raw file contents, the agent can query PHP Tools directly for:

- PHP symbols and their locations
- Types and type relationships
- Class inheritance and implementations
- References and usages
- Call hierarchies
- Framework-specific information (Laravel, WordPress, Symfony)
- Project structure

In this guide you'll learn how to enable the MCP server and connect it to your AI editor.

<!-- more -->

## Requirements

- PHP Tools for Visual Studio Code version `1.74` or later.
- A VS Code-based editor that supports the `contributes.mcpServerDefinitionProviders` extension point, such as VS Code, Cursor, Windsurf, or Trae.

## Step 1: Enable the MCP Server in PHP Tools

The MCP server runs inside the PHP Tools language server process. You only need to tell your editor which tool approvals to allow.

1. Open the **Command Palette** (`F1` or `Ctrl+Shift+P` / `Cmd+Shift+P`).
2. Search for and run **`Chat: Manage Tool Approval`**.
3. **Untick** the "Folder" button so the setting applies to all workspaces.
4. **Tick** _Run any tool without approval_ so agents can query PHP Tools without you confirming every action.

![MCP Tool Approval Command](https://docs.devsense.com/vscode/ai/imgs/mcp-tool-approval-command.png)

![MCP Tool Approval](https://docs.devsense.com/vscode/ai/imgs/mcp-tool-approval.png)

## Step 2: Connect Your AI Editor

Once tool approval is configured, PHP Tools advertises itself as an MCP server to your editor. In editors like Cursor and Windsurf, the PHP Tools server appears automatically in the list of available MCP servers once you open a PHP workspace.

If your editor requires manual configuration, add PHP Tools as an MCP server using the stdio transport provided by the language server. Refer to your editor's MCP documentation for the exact UI.

## What the Agent Can Do

With MCP connected, an AI agent can ask PHP Tools questions like:

> "Which methods call `calculateTotal()` in this codebase?"

> "Show me all implementations of the `PaymentGateway` interface."

> "Find every route named `checkout` in this Laravel application."

Because the answers come from the language server's semantic analysis—not from grep—the agent gets accurate results even in large projects with dynamic code, magic methods, and framework conventions.

## Example Workflow: Rename with Confidence

Before asking an agent to rename a service, use the MCP server's **call hierarchy** capability to list every caller. The agent can then confirm the change is safe, or warn you about indirect callers you might have missed.

This is especially valuable for:

- Refactoring controllers, services, and repositories
- Renaming classes across namespaces
- Removing deprecated methods

## Related Links

- [MCP Server documentation](https://docs.devsense.com/vscode/ai/mcp/)
- [Call Hierarchy documentation](https://docs.devsense.com/vscode/tools/call-hierarchy/)
- [PHP Tools for VS Code on the marketplace](https://marketplace.visualstudio.com/items?itemName=DEVSENSE.phptools-vscode)
