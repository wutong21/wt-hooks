# validatePortFormat

校验端口(空值放行)

## 示例

```vue
<template>
  <div>
    <el-form ref="baseForm" :rules="rules"  >
      <el-form-item props="port">
        <el-input v-model="port">
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { validatePortFormat } from "wt-hooks";
export default {
    data() {
    return {
      port: undefined,
      rules: {
        port: { validator: validatePortFormat, trigger: 'change' },
      },
    }
  },
};
</script>
```
