'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ClientProvider({ children, emotionCache }) {
  const defaultCache = core.useEmotionCache();
  const cache = emotionCache || defaultCache;
  hooks.useIsomorphicEffect(() => {
    cache.sheet.container = document.head;
    const { tags } = cache.sheet;
    cache.sheet.flush();
    tags.forEach((tag) => {
      cache.sheet._insertTag(tag);
    });
  }, []);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, children);
}

exports.ClientProvider = ClientProvider;
//# sourceMappingURL=ClientProvider.js.map
