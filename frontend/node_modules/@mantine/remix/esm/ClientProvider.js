import React from 'react';
import { useEmotionCache } from '@mantine/core';
import { useIsomorphicEffect } from '@mantine/hooks';

function ClientProvider({ children, emotionCache }) {
  const defaultCache = useEmotionCache();
  const cache = emotionCache || defaultCache;
  useIsomorphicEffect(() => {
    cache.sheet.container = document.head;
    const { tags } = cache.sheet;
    cache.sheet.flush();
    tags.forEach((tag) => {
      cache.sheet._insertTag(tag);
    });
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
}

export { ClientProvider };
//# sourceMappingURL=ClientProvider.js.map
