
```javascript
/**
 * 深度合并
 * @param target 目标对象
 * @param source 源对象
 * @param options
 * @param options.safe  是否是安全合并, 如果指定安全合并的话如果目标对象没有的键不会被合并
 * */
 
export function deepmerge<T extends Record<any, any>>(target: T, source: Record<any, any>, options:{safe: boolean}): T;
```





