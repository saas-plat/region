import {
  createEntityFromView,
  createTableFromEntity,
} from '@saas-plat/metaschema';

export { default as RegionEdit } from './views/RegionEdit';
export { default as RegionList } from './views/RegionList';
export { default as RegionRefer } from './views/RegionRefer';

// 通过模板快速生成对应的业务模型和查询模型
export const RegionEntity = createEntityFromView('RegionEntity', RegionEdit);
export const RegionTable = createTableFromEntity('RegionTable', RegionEntity);