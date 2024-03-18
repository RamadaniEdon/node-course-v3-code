const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }

            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    console.log("Po thirrna do work")
    const sum = await add(1, -99)
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, -3)
    return sum3
}

const he = await doWork()
console.log(he)
doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e', e)
})

console.log("Po thirrna jasht")