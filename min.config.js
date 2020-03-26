const bem = require('postcss-bem');
const calc = require('postcss-calc');
const precss = require('precss');

const bemOptions = {
  defaultNamespace: undefined,
  style: 'suit',
  separators: {
    descendent: '__',
    modifier: '--'
  },
  shortcuts: {
    utility: 'u',
    component: 'b',
    descendent: 'e',
    modifier: 'm',
    when: 'is'
  }
};

module.exports = {
  "style": {
    "brandColor": "#FF0077",
    "controlColor": "#FF5777",
    "mainHeadingColor": "#333333",
    "subHeadingColor": "#666666",
    "darkPromptColor": "#999999",
    "splitLineColor": "#ECECEC",
    "backgroundColour": "#EFEFEF"
  },
  "prefix": "wxc",
  "dest": "dist",
  "npm": {
    "dest": "dist/packages"
  },
  "compilers": {
    "babel": {
      "sourceMaps": "inline",
      "presets": [
        "env"
      ],
      "plugins": [
        "syntax-export-extensions",
        "transform-class-properties",
        "transform-decorators-legacy",
        "transform-export-extensions",
        "transform-es2015-spread",
        ["transform-object-rest-spread", { "useBuiltIns": true }]
      ]
    },
    "postcss": {
      "plugins": [
        bem(bemOptions),
        precss,
        calc
      ]
    },
    "less": {
      compress: true
    },
  }
}
