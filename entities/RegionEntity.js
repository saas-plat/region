import {
  LevelData,
} from '@saas-plat/metaschema';

export default LevelData('RegionEntity',  {
  enabled: Boolean,
  parent: 'Region',
  childs: ['Region'],
})
