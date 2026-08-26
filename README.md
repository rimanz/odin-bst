# Odin Binary Search Tree

An implementation of a binary-search-trees created as an exercise for [The Odin Project](https://www.theodinproject.com/lessons/javascript-binary-search-trees).

## Overview

This repository contains an implementation of a `Binary Search Tree` wiht a lightweight test setup using Jest. It's intended for learning data structures and practicing JavaScript.

## Prerequisites

- Node.js (v14+ recommended)
- npm (bundled with Node.js)

## Quick Start

1. Clone the repo:

```bash
git clone https://github.com/rimanz/odin-bst.git
cd odin-bst
```

2. Install dependencies:

```bash
npm install
```

3. Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```

Run Jest with coverage:

```bash
npm test -- --coverage
```

## Project Structure

```
babel.config.js
package.json
src/
	bst.js
	bst.test.js
```

## Usage

Import the `Tree` class and use its methods:

```js
import Tree from "./src/bst.js";

const tree = new Binary Search Tree();
```

Note: `bst.js` is exported as an ES module (`export default class Binary Search Tree`).

## API

- `new Tree()` — create an empty list

## Tests

Tests are run with Jest. See the `test` script in `package.json`.

```bash
npm test
```

## Contributing

Contributions and improvements are welcome. Open an issue or submit a pull request with a clear description and tests for new behavior.

## License

ISC

## Author

Riman Das
