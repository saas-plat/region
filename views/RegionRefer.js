import { View } from '@saas-plat/metaschema';

export default View(
  'RegionRefer',
  {
    type: 'view',
    items: [
      {
        type: 'view',
        items: [
          {
            type: 'filter',
            style: 'simple',
            filters: [
              {
                field: 'Region.name',
              },
              {
                field: 'Region.code',
              },
            ],
          },
        ],
      },
      {
        type: 'treetable',
        columns: [
          {
            type: 'text',
            name: '编码',
            dataSource: 'Region.code',
          },
          {
            type: 'text',
            name: '名称',
            dataSource: 'Region.name',
          },
        ],
      },
    ],
  },
  {
    model: 'TreeModel',
  }
);
