export function deepmerge(target, source, options = {safe: false}) {
    for (let key in source) {
        if (options.safe && !target.hasOwnProperty(key) /* safe 模式下只有在源对象键上的部分进行合并 */) continue
        if (typeof target[key] === "object" && typeof source[key] === "object") {
            deepmerge(target[key], source[key], options)
        } else {
            target[key] = source[key]
        }
    }
    return target;
}
