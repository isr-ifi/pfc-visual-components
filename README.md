# visual-components

## Install library as dependency

```bash
npm install --save https://github.com/isr-ifi/pfc-visual-components#master
```

## Installing dependencies for runnung example app
```bash
npm install
cd example
npm install
```

## Runnung example app
Step 1: cd into the project and run npm start. This will watch the src/ module and recompile it into dist/ whenever you make changes.

Step 2: Open a 2nd command line, cd into the /example folder and run npm start.

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'visual-components'
import 'visual-components/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

MIT © [](https://github.com/)
