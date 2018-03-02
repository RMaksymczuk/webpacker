const styleRuleFactory = require('./style_rule_factory')

module.exports = styleRuleFactory(
  /\.(scss|sass)$/i,
  false,
  [{
    loader: 'sass-loader',
    options: { sourceMap: true }
  }]
)
