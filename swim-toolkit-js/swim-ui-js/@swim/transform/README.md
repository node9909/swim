# @swim/transform

[![package](https://img.shields.io/npm/v/@swim/transform.svg)](https://www.npmjs.com/package/@swim/transform)
[![documentation](https://img.shields.io/badge/doc-TypeDoc-blue.svg)](https://docs.swimos.org/js/latest/modules/_swim_transform.html)
[![chat](https://img.shields.io/badge/chat-Gitter-green.svg)](https://gitter.im/swimos/community)

<a href="https://www.swimos.org"><img src="https://docs.swimos.org/readme/marlin-blue.svg" align="left"></a>

**@swim/transform** implements CSS and SVG compatible transform types with
unit-aware algebraic operators and parsers.  **@swim/transform** is part of the
[**@swim/ui**](https://github.com/swimos/swim/tree/master/swim-toolkit-js/swim-ui-js/@swim/ui)
framework.

## Installation

### npm

For an npm-managed project, `npm install @swim/transform` to make it a dependency.
TypeScript sources will be installed into `node_modules/@swim/transform/main`.
Transpiled JavaScript and TypeScript definition files install into
`node_modules/@swim/transform/lib/main`.  And a pre-built UMD script can
be found in `node_modules/@swim/transform/dist/main/swim-transform.js`.

### Browser

Browser applications can load `swim-ui.js`—which bundles the **@swim/transform**
library—along with its `swim-core.js` dependency, directly from the SwimOS CDN.

```html
<!-- Development -->
<script src="https://cdn.swimos.org/js/latest/swim-core.js"></script>
<script src="https://cdn.swimos.org/js/latest/swim-ui.js"></script>

<!-- Production -->
<script src="https://cdn.swimos.org/js/latest/swim-core.min.js"></script>
<script src="https://cdn.swimos.org/js/latest/swim-ui.min.js"></script>
```

Alternatively, the `swim-toolkit.js` script may be loaded, along with its
`swim-system.js` dependency, from the SwimOS CDN.  The `swim-toolkit.js`
script bundles **@swim/transform** together with all other
[**@swim/toolkit**](https://github.com/swimos/swim/tree/master/swim-toolkit-js/@swim/toolkit)
frameworks.

```html
<!-- Development -->
<script src="https://cdn.swimos.org/js/latest/swim-system.js"></script>
<script src="https://cdn.swimos.org/js/latest/swim-toolkit.js"></script>

<!-- Production -->
<script src="https://cdn.swimos.org/js/latest/swim-system.min.js"></script>
<script src="https://cdn.swimos.org/js/latest/swim-toolkit.min.js"></script>
```

## Usage

### ES6/TypeScript

**@swim/transform** can be imported as an ES6 module from TypeScript and other
ES6-compatible environments.

```typescript
import * as transform from "@swim/transform";
```

### CommonJS/Node.js

**@swim/transform** can also be used as a CommonJS module in Node.js applications.

```javascript
var transform = require("@swim/transform");
```

### Browser

When loaded by a web browser, the `swim-ui.js` script adds all
**@swim/transform** library exports to the global `swim` namespace.  The
`swim-ui.js` script requires that `swim-core.js` has already been loaded.

The `swim-toolkit.js` script also adds all **@swim/transform** library
exports to the global `swim` namespace, making it a drop-in replacement for
`swim-ui.js` and `swim-transform.js` when additional **@swim/toolkit**
frameworks are needed.
