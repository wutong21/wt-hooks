# throttleFirstExt

节流函数

概念：让一个函数不要执行得太频繁，减少一些过快的调用来节流

应用场景：

scroll/resize/mousemove 事件

## 示例


```js
import { throttleFirstExt } from 'wt-hooks'

throttleFirstExt(fn, wait);

```


## API
|参数|说明|类型|默认值|可选值|
|-|-|-|-|-|
|fn|节流函数回调	|Function|--|--|
|wait|节流时间间隔	|Number(ms)|16(ms)|--|