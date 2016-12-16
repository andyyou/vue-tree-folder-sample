var TreeFolder = require('./tree-folder.js')

module.exports = {
  props: [
    'children'
  ],
  components: {
    TreeFolder
  },
  template: `
    <ul>
      <li v-for="child in children">
        <tree-folder v-if="child.children" :folder="child"/>
        <span v-else>{{ child.name }}</span>
      </li>
    </ul>
  `
}
