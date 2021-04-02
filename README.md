<img
  src='https://carbonplan-assets.s3.amazonaws.com/monogram/dark-small.png'
  height='48'
/>

# carbonplan / theme

**lightweight Theme-UI configuration for CarbonPlan websites**

[![GitHub][github-badge]][github]
[![Build Status]][actions]
![MIT License][]
![NPM Version][]

[github]: https://github.com/carbonplan/theme
[github-badge]: https://badgen.net/badge/-/github?icon=github&label
[build status]: https://github.com/carbonplan/theme/actions/workflows/main.yml/badge.svg
[actions]: https://github.com/carbonplan/theme/actions/workflows/main.yml
[mit license]: https://badgen.net/badge/license/MIT/blue
[npm version]: https://badgen.net/npm/v/@carbonplan/theme

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

All the code in this repository is [MIT](https://choosealicense.com/licenses/mit/) licensed, but we request that you please provide attribution if reusing any of our digital content (graphics, logo, articles, etc.).

## about us

CarbonPlan is a non-profit organization that uses data and science for climate action. We aim to improve the transparency and scientific integrity of carbon removal and climate solutions through open data and tools. Find out more at [carbonplan.org](https://carbonplan.org/) or get in touch by [opening an issue](https://github.com/carbonplan/theme/issues/new) or [sending us an email](mailto:hello@carbonplan.org).
