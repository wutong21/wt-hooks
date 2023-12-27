# 正则表达式

## 示例


```js
import { regExp } from 'sec-hooks'

regExp.number11.test('...');

```

## API
|正则名称|正则内容|说明|
|-|-|-|
|number11|11位数字|--|
|ipNet|IP网段|参考格式：127.0.0.1/（0~32）|
|filename|文件名|1~50位长度的字符串|
|oneDecimalPlace|校验数字精确到小数点后一位, 整数也支持|--|
|ipCPath|IP C段|--|
|ipv6|ipv6格式|--|
