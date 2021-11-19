# Acid Workspace

## Philosophy

1. Security
2. Efficiency

## Directory Structure

```
/           # Workspace directory with all code rules
  /proxy    # (private) acid.tech redirections for git
```

## Setup

```bash
$> make setup
```

## Installation

```bash
$> pnpm install
```

## Definition

### Prerequisites

1. Brew is recommended as system package manager

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Volta is recommended as node versioner & global package manager

```bash
curl https://get.volta.sh | bash
```

3. PNPM is recommended as local package manager

```bash
volta install pnpm@latest
```

### Versioning

// TODO(versioning): setup rules

1. [Semver](https://semver.org/) will be installed to manage package versioning
2. [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) will be used as automation versioning

### Formatting

1. [EditorConfig](https://editorconfig.org) as basic configuration for each language
2. [Prettier](https://prettier.io) is the basic fixer that will be mandatory in CI/CD and precommit hooks
3. Each language have is own fixer that can be run before prettier
