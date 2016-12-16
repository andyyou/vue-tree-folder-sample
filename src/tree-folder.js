var TreeFolderContents = require('./tree-folder-contents.js')

module.exports = {
  props: [
    'folder'
  ],
  components: {
    TreeFolderContents
  },
  template: `
    <p>
      <span>{{ folder.name }}</span>
      <tree-folder-contents :children="folder.children"/>
    </p>
  `
}
