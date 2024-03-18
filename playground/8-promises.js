const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(a + b)
            reject("Error")
        }, 2000)
    })
}

// add(1, 2).then((sum) => {
//     console.log(sum)

//     add(sum, 5).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {   
//     console.log(e)
// })

const me = add(1, 1).then((sum) => {
    console.log(sum)
    return add(sum, 4);
});
me.then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})