# validateMask

校验掩码

## 示例

```vue
<template>
  <div>
    <el-form ref="baseForm" :rules="rules"  >
      <el-form-item props="mask">
        <el-input v-model="mask">
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { validateMask } from "sec-hooks";
export default {
    data() {
    return {
      mask: '255.255.255.0',
      rules: {
        mask: { validator: validateMask, trigger: 'change' },
      },
    }
  },
};
</script>
```
