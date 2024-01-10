<p align="left" >
<a href='https://carbonplan.org'>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://carbonplan-assets.s3.amazonaws.com/monogram/light-small.png">
  <img alt="CarbonPlan monogram." height="48" src="https://carbonplan-assets.s3.amazonaws.com/monogram/dark-small.png">
</picture>
</a>
</p>

# carbonplan / theme

**lightweight Theme-UI configuration for CarbonPlan websites**

[![CI](https://github.com/carbonplan/theme/actions/workflows/main.yml/badge.svg)](https://github.com/carbonplan/theme/actions/workflows/main.yml)
![NPM Version](https://img.shields.io/npm/v/@carbonplan/theme)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## usage

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

All the code in this repository is [MIT](https://choosealicense.com/licenses/mit/)-licensed, but we request that you please provide attribution if reusing any of our digital content (graphics, logo, articles, etc.).

## about us

CarbonPlan is a nonprofit organization that uses data and science for climate action. We aim to improve the transparency and scientific integrity of climate solutions with open data and tools. Find out more at [carbonplan.org](https://carbonplan.org/) or get in touch by [opening an issue](https://github.com/carbonplan/theme/issues/new) or [sending us an email](mailto:hello@carbonplan.org).
