import {
  View,
} from '@saas-plat/metaschema';

export default View('Region', {
  type: 'view',
  items: [{
    type: 'autocode',
    lable: '编码',
    dataSouce: "Region.code"
  }, {
    type: 'text',
    lable: '名称',
    dataSouce: "Region.name"
  }, {
    type: 'refer',
    lable: '父级地区',
    dataSouce: "Region.parent"
  }, {
    type: 'footbar',
    flex: 1,
    items: [{
      type: 'switch',
      dataSouce: "Region.enabled"
    }, {
      type: 'button',
      text: '保存',
      style: 'primary'
    }, {
      type: 'button',
      text: '保存新增'
    }]
  }]
})
