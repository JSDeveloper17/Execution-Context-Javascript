console.log(addNum(9,3))
console.log(num) //!temporal dead zone. can not access befor initialization(let & const)
console.log(age)
const num = 6;
let age = 7

function addNum(a,b){
    return a-b
}