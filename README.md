# ValtheraDB CLI 

ValtheraDB CLI is a command-line tool for managing Valthera databases. It supports various database operations, starting a server, and dynamic commands. Powered by @wxn0brp/db (ValtheraDB)

## Installation

Install globally using Yarn:

```bash
yarn global add github:wxn0brP/ValtheraDB-cli#dist
```

After installation, the `valthera-cli` command will be available.

## Usage

### Basic Commands

View help:
```bash
valthera-cli --help
```

Check version:
```bash
valthera-cli --version
```

Specify database directory (default: current directory):
```bash
valthera-cli -d <path_to_directory>
```

### Start Server

Start the server on a specific port (or default):

```bash
valthera-cli server [port]
```

> ### `Warning`: The server started by `valthera-cli` is a development server and does `not include authentication`. It is not recommended to use it in a production environment.

### Run Operations

Execute database operations:
```bash
valthera-cli <operation_name> [arguments]
```

Example:

```bash
valthera-cli updateOne user "{\"id\":123}" "{\"name\": \"John\"}"
```

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.