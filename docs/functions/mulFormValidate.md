# mulFormValidate

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
import { mulFormValidate } from "sec-hooks";
export default {
  methods: {
    useDemo() {
      this.mulFormValidate(
        ["baseForm", "positionForm", "manageForm"],  // array
        this.$refs // refs
      )
        .then(() => {
          // ...
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
```

## API
|参数|说明|类型|默认值|可选值|
|-|-|-|-|-|
|array|表单数组|Array|--|--|
|refs|当前页面的refs|Object|--|--|