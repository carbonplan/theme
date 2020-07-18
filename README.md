<img
  src='https://carbonplan-assets.s3.amazonaws.com/monogram/dark-small.png'
  height='48'
/>

# carbonplan / theme

**lightweight Theme-UI configuration for CarbonPlan sites**

[![GitHub][github-badge]][github]
![Build Status][]
![dependabot][]
![MIT License][]

[github]: https://github.com/carbonplan/theme
[github-badge]: https://flat.badgen.net/badge/-/github?icon=github&label
[build status]: https://flat.badgen.net/github/checks/carbonplan/theme
[dependabot]: https://flat.badgen.net/dependabot/carbonplan/theme?icon=dependabot
[mit license]: https://flat.badgen.net/badge/license/MIT/blue

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

CarbonPlan is a non-profit organization working on the science and data of carbon removal. We aim to improve the transparency and scientific integrity of carbon removal and climate solutions through open data and tools. Find out more at [carbonplan.org](https://carbonplan.org/) or get in touch by [opening an issue](https://github.com/carbonplan/theme/issues/new) or [sending us an email](mailto:hello@carbonplan.org).
