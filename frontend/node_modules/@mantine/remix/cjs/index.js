'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ssr = require('@mantine/ssr');
var ClientProvider = require('./ClientProvider.js');
var StylesPlaceholder = require('./StylesPlaceholder.js');
var injectStyles = require('./inject-styles.js');



exports.ClientProvider = ClientProvider.ClientProvider;
exports.StylesPlaceholder = StylesPlaceholder.StylesPlaceholder;
exports.injectStyles = injectStyles.injectStyles;
Object.keys(ssr).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = ssr[k];
});
//# sourceMappingURL=index.js.map
