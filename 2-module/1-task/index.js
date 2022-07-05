function sumSalary(salaries) {
    let m = 0
    for (let key in salaries) {
        if (typeof salaries[key] === 'number' && isFinite(salaries[key])) {
            m += salaries[key]
        }
    }
    return m
}



