'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ssr = require('@mantine/ssr');

function injectStyles(markup, stylesServer) {
  return markup.replace("__MANTINE_STYLES__", `${ssr.getSSRStyles(markup, stylesServer)}`);
}

exports.injectStyles = injectStyles;
//# sourceMappingURL=inject-styles.js.map
