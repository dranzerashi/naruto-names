# naruto-names

A simple Node.js package to get random Naruto character names.

## Installation

Install the package using npm:

```bash
npm install naruto-names
```

Or using yarn:

```bash
yarn add naruto-names
```

## Usage

```javascript
const naruto = require('naruto-names');

// Get all character names
const allNames = naruto.all;
console.log(`There are ${allNames.length} names in total.`);
// Example: Output a few names
console.log('Some names:', allNames.slice(0, 5));

// Get a single random character name
const randomName = naruto.random();
console.log('Random name:', randomName);

// Get a specific number of random character names
try {
  const threeRandomNames = naruto.random(3);
  console.log('Three random names:', threeRandomNames);

  // Requesting 0 names
  const zeroNames = naruto.random(0);
  console.log('Zero names:', zeroNames); // Output: []
} catch (error) {
  console.error('Error getting random names:', error.message);
}

// Error Handling Examples
try {
  // Requesting too many names
  naruto.random(10000); // Assuming 10000 is more than available
} catch (error) {
  console.error(error.message); 
  // Output: "Requested number of items exceeds the total number of available names."
}

try {
  // Requesting a negative number of names
  naruto.random(-2);
} catch (error) {
  console.error(error.message);
  // Output: "Requested number of items cannot be negative."
}

```

## API

### `naruto.all`

*   Returns: `Array<String>`

An array containing all Naruto character names.

### `naruto.random([number])`

*   `number` (Optional): `Number` - The number of random names to return.
*   Returns: `String` | `Array<String>`
*   Throws: `RangeError` if `number` is negative or if `number` exceeds the total number of available names.

Returns a single random name if no argument is provided.
Returns an array of `number` random names if a `number` is provided.
Returns an empty array if `number` is `0`.
