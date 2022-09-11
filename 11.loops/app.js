//for loop

// for (let i = 0 ;i<10 ; i++)
// console.log(i)


//while loop

// let t =0
// while(t<10){
//     console.log('number' + t)
//     t++;
// }


//do while

// const num = 0

// do {
//     console .log('numbers' + num)
//     num ++
// }
// while(num<10)


//
const cars = ['toyota' , 'honda' , 'bogati']
for(let i =0 ;i< cars.length ; i++){
    console.log(cars[i])
}

//for each
cars.forEach(function(car){
    console.log(car)
})

//map
const users= [
    {id : 10},
    {id : 11},
    {id : 12},
    {id : 13}
]

const ids = users.map(function(user){
    return user.id
})

console.log(ids)


//for in loop

const user = {
    name : 'reza',
    family : 'amin',
    age:22

}
for (let x in user ){
    console.log(`${x}:${user[x]}`)
}



