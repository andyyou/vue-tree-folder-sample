var Vue = require('vue')
var TreeFolder = require('./tree-folder.js')

new Vue({
  el: '#app',
  data: {
    children: [
      { name: 'Documents',
        children: [
          { name: 'Document A' },
          { name: 'Document B' },
          { name: 'Document C' }
        ]
      },
      { name: 'Users',
        children: [
          { name: 'File A' },
          { name: 'File B' }
        ]
      },
      { name: 'Downloads',
        children: [
          { name: 'File C' },
          { name: 'File D' }
        ]
      },
      { name: 'Applications',
        children: [
          { name: 'File E' },
          { name: 'File F' }
        ]
      }
    ]
  },
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
})
