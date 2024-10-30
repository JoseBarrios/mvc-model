# My Package

A template npm package with best practices, designed to kickstart your Node.js project. This template includes TypeScript, ESLint, Prettier, GitHub Actions CI, and example configurations for common project needs.

## Table of Contents
1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Folder Structure](#folder-structure)
4. [Configuration Files](#configuration-files)
5. [Scripts](#scripts)
6. [Contributing](#contributing)
7. [License](#license)

## Features

- **TypeScript**: Strong typing support to ensure code reliability.
- **ESLint and Prettier**: Enforced code standards and formatting.
- **GitHub Actions CI**: Automated testing and linting on pull requests.
- **Basic Project Structure**: Predefined folders for easy organization.
- **Example Tests**: A sample test to kickstart test-driven development.

## Getting Started

### Prerequisites
- **Node.js** (version 14.x or higher)
- **npm** (comes with Node.js) or **yarn** if preferred.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/my-package.git
   cd my-package
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   Or if using yarn:
   ```bash
   yarn install
   ```

3. **Start Development**: You’re ready to begin building your npm package. Edit files under `src/`, run tests, and build for production.

## Folder Structure

The template has the following structure:

```
my-package/
├── .github/                   # GitHub-specific files
│   ├── ISSUE_TEMPLATE/        # Templates for issues
│   │   └── bug_report.md
│   │   └── feature_request.md
│   ├── workflows/             # GitHub Actions workflows
│   │   └── ci.yml
├── src/                       # Main source code (TypeScript/JavaScript files)
│   └── index.js
├── dist/                      # Distribution folder (generated after build)
├── tests/                     # Folder for tests
│   └── example.test.js
├── .gitignore                 # Ignored files for Git
├── .npmignore                 # Ignored files for npm
├── LICENSE                    # License file (MIT)
├── README.md                  # Project documentation
├── package.json               # npm package configuration
├── tsconfig.json              # TypeScript configuration
├── .eslintrc.js               # ESLint configuration
├── .prettierrc                # Prettier configuration
├── .babelrc                   # Babel configuration (if using Babel)
├── CONTRIBUTING.md            # Contribution guidelines
├── CHANGELOG.md               # Changelog for releases
└── CODE_OF_CONDUCT.md         # Code of conduct for contributors
```

## Configuration Files

- **`.gitignore`**: Specifies files ignored by Git.
- **`.npmignore`**: Specifies files excluded from the npm package.
- **`tsconfig.json`**: TypeScript configuration file.
- **`.eslintrc.js`**: ESLint configuration for linting JavaScript/TypeScript files.
- **`.prettierrc`**: Prettier configuration to enforce code style.
- **`.babelrc`**: Babel configuration (optional, if using Babel).
- **`package.json`**: Defines package metadata and dependencies.

## Scripts

This template includes npm scripts for common tasks. You can run these using `npm run <script-name>`:

- **`build`**: Compiles TypeScript files to JavaScript (output in `dist/`).
  ```bash
  npm run build
  ```
- **`lint`**: Checks code for linting errors based on ESLint rules.
  ```bash
  npm run lint
  ```
- **`format`**: Formats code using Prettier.
  ```bash
  npm run format
  ```
- **`test`**: Runs tests with Jest.
  ```bash
  npm run test
  ```
- **`prepublishOnly`**: Runs lint, tests, and build before publishing to ensure code quality.

## Using GitHub Actions for CI

The `.github/workflows/ci.yml` file defines a GitHub Actions workflow for Continuous Integration (CI). The CI workflow runs linting and tests automatically on every push or pull request to the `main` branch, ensuring code quality and reliability.

## Contributing

We welcome contributions to improve this template. Here’s how you can help:

1. **Fork the repository**.
2. **Clone your forked repository**:
   ```bash
   git clone https://github.com/yourusername/my-package.git
   ```
3. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature
   ```
4. **Make your changes and commit**.
5. **Push your changes**:
   ```bash
   git push origin feature/your-feature
   ```
6. **Create a pull request** on GitHub.

Please read `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` for more details on contributing and guidelines.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
