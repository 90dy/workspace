# Acid Technologies Workspace

## Philosophy

1. Security
2. Reliability
3. Efficiency (Optionality, Readability)

## Directory Structure

/js
  /internal   # workspace internal
  /private    # private packages
  /public     # publishable packages
  /vendor     # contribution for debugging or features
/mk         # dotmk contribution

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

1. Brew is mandatory as system package manager

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Volta is required as global package manager

```bash
curl https://get.volta.sh | bash
```

3. PNPM is required as local package manager

```bash
volta install pnpm@latest
```

### Repository

1. A `package.json` file will always be required at the root of the repository
2. Run `pnpm install --save-dev @acidtech/standard` to setup the repository
3. Run `pnpm update @acidtech/standard` to update repository

### Versioning

1. [Semver](https://semver.org/) will be installed to manage package versioning
2. [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) will be used as automation versioning

### Formatting

1. [EditorConfig](https://editorconfig.org) as basic configuration for each language
2. [Prettier](https://prettier.io) is the basic fixer that will be mandatory in CI/CD and precommit hooks
3. Each language have is own fixer that can be run before prettier

