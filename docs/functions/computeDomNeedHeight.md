# computeDomNeedHeight

计算当前Dom的高度
当前Dom的高度 = 100vh - excludeClassList的高度和 - Gap

## 示例


```vue

<script>
import { computeDomNeedHeight } from 'wt-hooks'
const excludeClassList = ['the-header', 'h-page-header', 'tabs', 'base-card'] // 高度总和 = 200px
export default {
  methods: {
    computeContentHeight(){
      return computeDomNeedHeight(excludeClassList, 32) // calc(100vh - ${200 + 32}px)
    }
  }
}
</script>

```


## API
|参数|说明|类型|默认值|可选值|
|-|-|-|-|-|
|excludeClassList|需要减去其他元素的class数组	|Array|--|--|
|Gap|自定义偏差	|Number|--|32|