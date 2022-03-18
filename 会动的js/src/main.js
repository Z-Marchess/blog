let demo = document.querySelector('#demo')
let str = '你好，我是一名前端新人'
let n = 0
let step = function() {
    if (n < str.length) {
        setTimeout(() => {
            demo.innerHTML += str[n]
                // demo.innerHTML = str.substring(0, n + 1)
            n++
            step()
        }, 100);
    }
}
step()