
const person = {
    name : "reza",
    family:"amin",
    age:22,
    address:{
        country:"iran",
        city:"golshan"
    },
    gardes : [20 , 19 , 18 ]
}

let value 

value  = person
console.log(person)


//get specific value 

value = person.name
console.log(value)


value = person.gardes[0]
console.log(value)


value = person.address['city']
console.log(value)


value =person.address.city
console.log(value)
//