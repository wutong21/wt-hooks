# arrayObjRemoveDuplicateByAttr

数组对象根据指定属性去重

## 示例

```js
import { arrayObjRemoveDuplicateByAttr } from "sec-hooks";

arrayObjRemoveDuplicateByAttr(array, attr)

console.log(
  arrayObjRemoveDuplicateByAttr([
    { net_attribute: "管理口", netcard_ip: "1" },
    { net_attribute: "镜像口", netcard_ip: "2" },
    { net_attribute: "业务口", netcard_ip: "3" },
    { net_attribute: "业务口", netcard_ip: "4" },
  ], 'net_attribute')
); 
/**
 * (3) [{…}, {…}, {…}]
    0: {net_attribute: '管理口', netcard_ip: '1'}
    1: {net_attribute: '镜像口', netcard_ip: '2'}
    2: {net_attribute: '业务口', netcard_ip: '3'}
    length: 3
    [[Prototype]]: Array(0)
 * /
```


## API
|参数|说明|类型|默认值|可选值|
|-|-|-|-|-|
|array|数组对象	|Array[Object]|--|--|
|attr|指定属性名	|String|--|--|