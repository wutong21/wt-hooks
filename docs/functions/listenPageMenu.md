# listenPageMenu

多表单校验

## 示例

```vue
<template>
  <div>
    <el-form ref="baseForm" />
    <el-form ref="positionForm" />
    <el-form ref="manageForm" />
  </div>
</template>
<script>
import { listenPageMenu } from "sec-hooks";
export default {
  mounted() {
    // 传入菜单变化后需调用的方法数组
    this.listenPageMenu(array);
  },
};
</script>
```

## API
|参数|说明|类型|默认值|可选值|
|-|-|-|-|-|
|array|菜单变化后需调用的方法数组|Array|--|--|
