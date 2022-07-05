function isEmpty(obj) {
    let m = ''
    for (let prop in obj) {
        m += prop
    }
    if (m) {
        return false
    } else {
        return true
    }
}
