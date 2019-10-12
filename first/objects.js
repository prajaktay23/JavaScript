let obj = {
    key: 'value',
    age: 10,
    color: 'red',
    isAuto: false,
    fn: function () {
        console.log(`Function Called`)
    },
    
    objIn : {
        ram : '8GB'
    }
}
console.log(obj.age)
console.log(obj.isAuto)
obj.fn()
console.log(obj)
console.log(console)