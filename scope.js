function calAge(birthYear){
    const age  = 2026 -birthYear;
    
    function giveName(){
        const name = "Pant";
        console.log(`your name is ${name}, and age : ${age} + born in ${birthYear}`)
        if(birthYear > 1981 && birthYear <1996){
            var millenial = true;
            const str = `oh you are a millenial with ${age} age`;
            console.log(str)

            function add(a,b){
                return a+b
            }
        }
        console.log(millenial)  // var is a function scoped, they break the block 
        add(2,3)  // in strict mode function are block scoped
    }
    giveName()
    return age
}

const user = "Alex"
calAge(1994)


