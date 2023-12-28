# useFormatLongNumber

实现将数字过千就加逗号的， 过万就写四舍五入成1.3w这种

## 示例


```js
import { useFormatLongNumber } from 'wt-hooks'

console.log(useFormatLongNumber(9000)) // 9,000
console.log(useFormatLongNumber(1000009000)) // 100000.9w

```
