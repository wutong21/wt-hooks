# validatePort

校验端口

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
import { validatePort } from "wt-hooks";
export default {
    data() {
    return {
      port: 8000,
      rules: {
        port: { validator: validatePort, trigger: 'change' },
      },
    }
  },
};
</script>
```
