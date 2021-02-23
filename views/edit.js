import { View } from '@saas-plat/metaschema';

export default View(
  'RegionEdit',
  {
    type: 'view',
    items: [
      {
        type: 'autocode',
        lable: '编码',
        dataSource: 'Region.code',
      },
      {
        type: 'text',
        lable: '名称',
        dataSource: 'Region.name',
      },
      {
        type: 'refer',
        lable: '父级地区',
        displayField: 'name',
        dataSource: 'Region.parent',
      },
      {
        type: 'footbar',
        flex: 1,
        items: [
          {
            type: 'switch',
            dataSource: 'Region.enabled',
          },
          {
            type: 'button',
            text: '保存',
            style: 'primary',
          },
          {
            type: 'button',
            text: '保存新增',
          },
        ],
      },
    ],
  },
  {
    model: 'FormModel',
  }
);
