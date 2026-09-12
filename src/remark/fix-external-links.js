const visit = require('unist-util-visit').visit;

function plugin() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      if (node.url && node.url.startsWith('http')) {
        node.data = node.data || {};
        node.data.hProperties = node.data.hProperties || {};
        node.data.hProperties.target = '_blank';
        node.data.hProperties.rel = 'noopener';  // 无 noreferrer
      }
    });
  };
}

module.exports = plugin;