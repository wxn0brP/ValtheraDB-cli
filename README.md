# ValtheraDB CLI 

ValtheraDB CLI is a command-line tool for managing Valthera databases. It supports various database operations, starting a server, and dynamic commands. Powered by @wxn0brp/db (ValtheraDB)

## Installation

Install globally using Bun:

```bash
bun add -g github:wxn0brP/ValtheraDB-cli
```

After installation, the `vdb` command will be available.

## Usage

### Basic Commands

View help:
```bash
vdb --help
```

Check version:
```bash
vdb --version
```

Specify database directory (default: current directory):
```bash
vdb -d <path_to_directory>
```

### Start Server

Start the server on a specific port (or default):

```bash
vdb server [port]
```

> ### `Warning`: The server started by `vdb` is a development server and does `not include authentication`. It is not recommended to use it in a production environment.

### Run Operations

Execute database operations:
```bash
vdb <operation_name> [arguments]
```

Example:

```bash
vdb updateOne user "{id:123}" "{name: 'John'}"
```

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.