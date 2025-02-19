
const firstname = 'reza'
const lastname = 'amin'

let value

value = firstname + lastname
console.log(value)

//concateanation

value = firstname + ' ' + lastname
console.log(value)

//append
value = 'reza'
value += 'amin'

console.log(value)

//es6
value = `hello my name is ${firstname} and family is a ${lastname}`
console.log(value)


//length
value = 'rezaamin is here'
console.log(value.length)


//concat
value = firstname.concat(' ' + lastname)
console.log(value)


//uppercase
value = firstname.toUpperCase()
console.log(value)

//lowercase

value = lastname.toLowerCase()
console.log(value)

//
value =  firstname[3]
console.log(value)


//charat
value = firstname.charAt('2')
console.log(value)


//substring
value = lastname.substring(0,22)
console.log(value)

//slice
value = lastname.slice(0,2222)
console.log(value)

//split()
const str = 'hello my name is reza amin'
value = str.split(' ')
console.log(value)

//replace 
value = str.replace('reza' , 'king reza')
console.log(value)


//includes()
value = str.includes('reza')
console.log(value)

























