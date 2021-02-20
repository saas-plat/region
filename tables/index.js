import {
  TreeTable,
  Types
} from '@saas-plat/metaschema';

export default TreeTable('Region', {
  name: String,
  code: String,
  enabled: Boolean
})
