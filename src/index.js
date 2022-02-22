module.exports = function reverse (n) {
    let arr = Array.from(String(n), Number)
    let rev = arr.reverse()
    rev.length = 3
    let res = rev.join('')
    return res
  
}
