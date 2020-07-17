# carbonplan / theme

[![Build](https://github.com/carbonplan/theme/workflows/CI/badge.svg)](https://github.com/carbonplan/theme/actions)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=carbonplan/theme)](https://dependabot.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/carbonplan/theme/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/%40carbonplan%2Ftheme.svg)](https://badge.fury.io/js/%40carbonplan%2Ftheme)

Theme for styling our websites using `theme-ui`.

To use, import into your package

```js
import theme from '@carbonplan/theme'
```

and then either use it directly or extend it for further customization

```js
export default {
  ...theme,
  styles: {
    ...theme,
  },
}
```

## license

All the code in this repository is [MIT](https://choosealicense.com/licenses/mit/) licensed, but we request that you please provide attribution if reusing any of our digital content (graphics, logo, articles, etc.).

## about us

CarbonPlan is a non-profit organization working on the science and data of carbon removal. We aim to improve the transparency and scientific integrity of carbon removal and climate solutions through open data and tools. Find out more at [carbonplan.org](https://carbonplan.org/) or get in touch by [opening an issue](https://github.com/carbonplan/research/issues/new) or [sending us an email](mailto:hello@carbonplan.org).
