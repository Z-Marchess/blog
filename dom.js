window.dom = {
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    style(node, name, value) {
        if (arguments === 3) {
            return node.style[name] = value
        } else if (arguments === 2) {
            if (typeof name === 'string') {
                return node.style[name]
            } else if (typeof name === 'object') {
                for (let key in object) {
                    node.style[key] = name[key]
                }
            }
        }
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    }
}