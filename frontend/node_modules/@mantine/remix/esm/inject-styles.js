import { getSSRStyles } from '@mantine/ssr';

function injectStyles(markup, stylesServer) {
  return markup.replace("__MANTINE_STYLES__", `${getSSRStyles(markup, stylesServer)}`);
}

export { injectStyles };
//# sourceMappingURL=inject-styles.js.map
