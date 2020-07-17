module.exports = {
  space: [0, 4, 8, 16, 32, 48, 64, 128, 256, 512],
  fonts: {
    body:
      'relative-book-pro, Roboto, system-ui, -apple-system, BlinkMacSystemFont',
    faux:
      'relative-faux-book-pro, Roboto, system-ui, -apple-system, BlinkMacSystemFont',
    heading:
      'relative-medium-pro, Roboto, system-ui, -apple-system, BlinkMacSystemFont',
    monospace: 'relative-mono-11-pitch-pro, Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 18, 24, 34, 48, 64, 96],
  letterSpacings: {
    body: '0.01em',
    monospace: '0.02em',
    faux: '0.05em',
    heading: '-0.015em',
    wide: '0.07em',
    extra: '0.13em',
  },
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 400,
  },
  lineHeights: {
    body: 1.35,
    small: 1.3,
    heading: 1.05,
  },
  colors: {
    text: '#ebebec',
    background: '#1b1e23',
    primary: '#e4e4e4',
    secondary: '#808080',
    muted: '#363a3e',
    red: '#f07071',
    orange: '#ea9755',
    yellow: '#d4c05e',
    green: '#7eb36a',
    teal: '#64b9c4',
    blue: '#85a2f7',
    purple: '#bc85d9',
    pink: '#e587b6',
    grey: '#a9b4c4',
    modes: {
      light: {
        text: '#333333',
        background: '#ebebec',
        primary: '#484848',
        secondary: '#b0b0b0',
        muted: 'rgb(200,200,200)',
        red: '#f07071',
        orange: '#ea9755',
        yellow: '#d4c05e',
        green: '#7eb36a',
        teal: '#64b9c4',
        blue: '#85a2f7',
        purple: '#bc85d9',
        pink: '#e587b6',
        grey: '#a9b4c4',
      },
    },
  },
  layout: {
    container: {
      maxWidth: '1150px',
      '@media only screen and (min-width: 100em)': {
        maxWidth: '1500px',
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      letterSpacing: 'body',
    },
    a: {
      color: 'text',
      '&:active': {
        color: 'text',
      },
      '&:hover': {
        color: 'secondary',
      },
      textDecoration: 'underline',
      cursor: 'pointer',
    },
    hr: {
      border: 'none',
      borderStyle: 'solid',
      borderWidth: '0px',
      borderTopWidth: '1px',
      borderColor: 'muted',
    },
    p: {
      fontSize: [3],
      fontFamily: 'body',
      fontWeight: 'body',
      letterSpacing: 'body',
    },
    h1: {
      fontSize: [6, 7, 7],
      fontFamily: 'heading',
      letterSpacing: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      mt: [6],
      mb: [5],
    },
    h2: {
      fontSize: [5],
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      mt: [5],
      mb: [4],
    },
    h3: {
      fontSize: [4],
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      mt: [4],
      mb: [3],
    },
  },
  tags: {
    mineralization: 'grey',
    soil: 'orange',
    biomass: 'yellow',
    forests: 'green',
    ocean: 'teal',
    dac: 'purple',
    biochar: 'yellow',
    materials: 'yellow',
    broker: 'grey',
    beccs: 'yellow',
    reforestation: 'green',
    'avoided conversion': 'green',
    agroforestry: 'green',
    burial: 'yellow',
    phytoplankton: 'teal',
    injection: 'grey',
  },
}
