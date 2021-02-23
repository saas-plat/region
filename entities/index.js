import { LevelData } from '@saas-plat/metaschema';

export default LevelData('Region', {
  name: String,
  enabled: Boolean,
  parent: 'Region',
  childs: ['Region'],
});
