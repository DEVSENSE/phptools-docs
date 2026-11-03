---
description: "Connect OpenAI Codex to the DEVSENSE PHP MCP Server and give your AI coding agent access to PHP-aware code intelligence, semantic search, call hierarchy, diagnostics, and Composer dependencies."
---

# Codex IDE/CLI

Codex runs its agent locally on the user's computer and can connect directly to a locally running DEVSENSE MCP Server.

## Using DEVSENSE PHP MCP Server with OpenAI Codex

[OpenAI Codex](https://developers.openai.com/codex/) is an AI coding agent that can inspect, understand, and modify your codebase. By connecting it to the **DEVSENSE PHP MCP Server**, Codex gains access to advanced PHP code intelligence provided by the DEVSENSE PHP Language Server.

Instead of relying exclusively on text searches and its own interpretation of PHP source code, Codex can query the PHP language server for semantic information about your project.

This enables more accurate code exploration, dependency analysis, debugging, and code modifications.

## What does the PHP MCP Server provide?

The DEVSENSE PHP MCP Server analyzes your PHP workspace and exposes specialized tools to AI agents.

It understands PHP syntax, namespaces, classes, methods, properties, functions, inferred types, and relationships between symbols.

With these capabilities, Codex can:

- **Understand your codebase:** Find classes, methods, functions, and properties, even when you only know part of their names.
- **Find symbol references:** Discover where a particular class, method, or function is used throughout your workspace.
- **Explore dependencies:** Analyze actual function and method calls to understand how different parts of your application interact.
- **Inspect diagnostics:** Retrieve PHP errors, warnings, and other code analysis problems.
- **Understand your dependencies:** Inspect installed Composer packages and their exact versions.
- **Identify your PHP version:** Determine which PHP version is configured for the workspace.

The server uses the same PHP language intelligence that powers DEVSENSE PHP Tools.

## 1. Install the DEVSENSE PHP MCP Server

The MCP server is distributed as an npm package.

Make sure you have [Node.js](https://nodejs.org/) installed, then install the package globally:

```bash
npm install -g devsense-php-mcp
```

This makes the `devsense-php-mcp` command available from your terminal.

## 2. Start the MCP Server

Open a terminal in your PHP project directory and start the server:

```bash
devsense-php-mcp -p 9101 .
```

The arguments are:

| Argument | Description |
|---|---|
| `-p 9101` | Specifies the MCP server port. |
| `.` | Specifies the directory to index. |

The server starts analyzing the specified workspace and makes its PHP intelligence available through the MCP protocol.

You can also specify an explicit workspace directory:

```bash
devsense-php-mcp -p 9101 -r /path/to/your/php-project
```

Keep the server running while you work with Codex.

> **Tip:** Start the MCP server with the root directory of your PHP project. This allows the language server to analyze the project as a whole, including its namespaces, dependencies, and cross-file references.

## 3. Configure OpenAI Codex

Codex supports connecting to external MCP servers using Streamable HTTP transport.

The DEVSENSE PHP MCP Server exposes this transport on the port specified when starting the server.

There are two ways to configure Codex.

### Option A: Configure using the Codex CLI

The easiest way is to use the Codex command-line interface.

Run:

```bash
codex mcp add phptools --url http://127.0.0.1:9101
```

This registers the DEVSENSE PHP MCP Server under the name `phptools`.

To verify the configuration, execute:

```bash
codex mcp list
```

You should see `phptools` in the list of configured MCP servers.

### Option B: Configure manually

Alternatively, you can configure the MCP server directly in Codex's configuration file:

`~/.codex/config.toml`

Add the following entry:

```toml
[mcp_servers.phptools]
url = "http://127.0.0.1:9101"
enabled = true
```

On Windows, the configuration file is typically located at:

```text
%USERPROFILE%\.codex\config.toml
```

If you already have other MCP servers configured, simply add the new section without replacing your existing configuration.

For more information about MCP configuration, see the [official Codex documentation](https://developers.openai.com/codex/mcp/).

## 4. Give Codex a PHP Intelligence Skill

Connecting an MCP server gives Codex access to additional tools, but it does not necessarily teach the agent when to use them or how to combine them effectively.

For this reason, we recommend adding a **DEVSENSE PHP Intelligence skill** to Codex.

A Codex skill is a reusable set of instructions that teaches an AI agent how to approach a particular type of task. It complements MCP tools by explaining when to use them, which information to retrieve, and how to incorporate the results into its work.

### Create the skill

In your PHP project, create the following directory structure:

```text
.agents/
└── skills/
    └── devsense-php/
        └── SKILL.md
```

Create `SKILL.md` with the following content:

```markdown
---
name: devsense-php
description: PHP code intelligence using the DEVSENSE PHP MCP Server. Use when exploring PHP projects, finding symbols and references, understanding method calls and dependencies, investigating diagnostics, reviewing PHP code, or modifying PHP applications.
---

# DEVSENSE PHP Intelligence

You have access to the DEVSENSE PHP MCP Server, which provides
semantic understanding of the current PHP workspace.

Use its PHP intelligence tools whenever they can provide
more accurate information than manually inspecting source files.

## Guidelines

- Prefer semantic symbol search over plain text search when
  looking for PHP classes, methods, functions, or properties.
- Use semantic references to identify actual usages of a symbol.
  Do not assume that matching text represents a PHP reference.
- Use call hierarchy to understand incoming and outgoing
  method calls and dependencies.
- Resolve symbols before analyzing their usages or call relationships.
- Use PHP diagnostics to identify existing errors and warnings
  before modifying code and to verify affected files afterward.
- Check the configured PHP version before introducing
  language features.
- Check Composer dependencies and their installed versions
  before using third-party APIs or generating integration code.
- Combine semantic information with direct source inspection.
  MCP results provide context; source files remain the authority
  for understanding implementation details.

## When modifying PHP code

1. Locate the relevant classes, functions, and methods.
2. Understand their references and call relationships.
3. Inspect related diagnostics and dependencies.
4. Make the requested changes.
5. Recheck diagnostics in affected files.
6. Summarize the changes and any remaining issues.

Do not guess about symbol relationships, dependency versions,
or PHP compatibility when the MCP server can provide this information.

If the MCP server is unavailable, continue using normal
code exploration and clearly distinguish verified findings
from assumptions.
```

### Use the skill

Codex automatically discovers project skills from the `.agents/skills/` directory.

Restart Codex if necessary, then check the available skills using `/skills`.

You can also explicitly invoke the skill in a prompt:

```text
$devsense-php

Analyze the architecture of the payment processing module.
Identify its main entry points, dependencies, and potential
problems before suggesting improvements.
```

The skill can also be selected automatically when Codex recognizes that a task involves PHP code intelligence.

> **Tip:** You can install the skill globally in `~/.agents/skills/devsense-php/` instead of adding it to a project. This makes it available across your PHP workspaces.

For more information, see [OpenAI Codex – Agent Skills](https://developers.openai.com/codex/skills/).

## 5. Start Using PHP Intelligence in Codex

Once the server is running and configured, Codex can discover and use the available PHP MCP tools.

You can ask Codex questions about your project using natural language. Codex will decide when to invoke the PHP MCP tools to retrieve additional information.

For example:

**Explore a class and its usages**

```text
Find the UserRepository class and show me all places
where it is used in the project.
```

Codex can locate the class and use semantic occurrence search to find its references, rather than relying on simple text matching.

**Understand the call hierarchy**

```text
Analyze the call hierarchy of the
App\Services\PaymentService::process method.

Show me which methods call it and which methods
it invokes.
```

Codex can inspect incoming and outgoing calls using the PHP language server's call hierarchy.

**Investigate potential problems**

```text
Inspect the diagnostics in src/PaymentService.php.

Explain the errors and warnings, and suggest how
to fix them.
```

Codex can retrieve actual PHP diagnostics and use them to guide its analysis.

**Understand project dependencies**

```text
Which version of Laravel and PHPUnit is installed
in this project?

Show me the relevant Composer dependencies.
```

Codex can query the indexed Composer dependency information instead of guessing versions from source code.

**Understand the project's PHP version**

```text
Which PHP version is configured for this project?

Are there any language features I should avoid
when modifying the code?
```

Codex can retrieve the workspace's configured PHP version and use it when proposing changes.

**Perform a more thorough code review**

```text
Review the payment processing implementation.

1. Find the main entry points.
2. Analyze the call hierarchy.
3. Identify all relevant usages of the payment classes.
4. Inspect PHP diagnostics in the affected files.
5. Check whether the implementation is compatible
   with the installed Composer dependencies.

Summarize potential problems and suggest improvements.
```

By combining semantic search, call hierarchy, diagnostics, and dependency information, Codex can build a much more accurate understanding of the implementation.

## 6. Available PHP MCP Tools

The DEVSENSE PHP MCP Server exposes a collection of specialized tools for PHP code intelligence, workspace analysis, and dependency inspection.

For the complete list of available tools, their descriptions, parameters, and usage examples, see the [PHP MCP Tools Reference](./mcptools-list.md).

## 7. Why Use PHP MCP Instead of Plain Text Search?

AI coding agents can read PHP source code directly, but understanding a large PHP application requires more than reading files and searching for strings.

Consider a method call:

```php
$service->process($payment);
```

A text search can find occurrences of `process`, but it cannot reliably distinguish between unrelated methods, resolve the actual declaration, or understand the inferred type of `$service`.

The DEVSENSE PHP Language Server already maintains this semantic information.

By exposing it through MCP, Codex can delegate these tasks to specialized PHP intelligence tools.

| Task | Plain text search | DEVSENSE PHP MCP |
|---|---|---|
| Find a class by partial name | Text matching | Semantic symbol search |
| Find all references | May include unrelated matches | Semantic occurrence search |
| Identify a symbol at a code position | Requires source interpretation | Direct symbol resolution |
| Analyze method dependencies | Requires manual inspection | Call hierarchy |
| Retrieve PHP diagnostics | Requires separate analysis | Existing language server diagnostics |
| Inspect installed Composer versions | Requires reading lock files | Indexed dependency information |

The result is a more efficient workflow, particularly in large PHP projects and applications with complex dependencies.

## 8. Troubleshooting

**Codex does not see the PHP MCP tools**

- Make sure the DEVSENSE MCP server is running.
- Check that the configured URL and port match the server.
- Run `codex mcp list` to verify that the server is registered.
- Restart Codex if necessary.

**The server cannot analyze my project**

- Make sure you started the server with the correct workspace directory.
- Verify that the project contains PHP source files.
- Allow the initial indexing process to complete.

**The server is not reachable**

Make sure that port `9101` is available and that local connections to `127.0.0.1` are not blocked by your firewall.

---

## Learn More

- [DEVSENSE PHP MCP Server – Installation and Configuration](https://docs.devsense.com/other/mcp/docs/)
- [PHP MCP Tools Reference](./mcptools-list.md)
- [OpenAI Codex – MCP Configuration](https://developers.openai.com/codex/mcp/)
- [OpenAI Codex – Agent Skills](https://developers.openai.com/codex/skills/)
- [Model Context Protocol](https://modelcontextprotocol.io/)

**Give Codex a deeper understanding of your PHP codebase with DEVSENSE PHP Tools.**
