import { View } from '@saas-plat/metaschema';

export default View(
  'RegionList',
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
          {
            type: 'toolbar',
            items: [
              {
                type: 'button',
                name: '新增地区',
                onClick: { action: 'Model.create', mode: 'modal' },
              },
              {
                type: 'button',
                style: 'link',
                name: '导入',
                onClick: 'Model.import',
                items: [
                  {
                    type: 'button',
                    name: '下载Excel模板',
                    onClick: 'Model.downloadTemplate',
                  },
                ],
              },
              {
                type: 'button',
                style: 'link',
                name: '导出',
                onClick: 'Model.export',
              },
            ],
          },
        ],
      },
      {
        type: 'table',
        columns: [
          {
            type: 'autocode',
            name: '编码',
            dataSource: 'Region.code',
          },
          {
            type: 'refer',
            name: '父级地区',
            displayField: 'name',
            dataSource: 'Region.parent',
          },
          {
            type: 'text',
            name: '名称',
            dataSource: 'Region.name',
          },
          {
            type: 'action',
            name: '操作',
            actions: [
              {
                type: 'button',
                style: 'icon',
                icon: 'edit',
                onClick: 'Model.editRow',
              },
              {
                type: 'button',
                style: 'icon',
                icon: 'delete',
                onClick: 'Model.deleteRow',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    model: 'FormListModel',
    editView: 'RegionEdit',
  }
);
