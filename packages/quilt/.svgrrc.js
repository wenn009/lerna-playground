module.exports = {
  expandProps: false,
  icon: true,
  replaceAttrValues: {
    '#000': 'currentColor',
    '#fff': 'currentColor',
    '#FFF': 'currentColor',
  },
  svgoConfig: {
    plugins: [
      { convertColors: { currentColor: true } },
      { addAttributesToSVGElement: { attribute: { fill: 'currentColor' } } },
    ],
  },
};
