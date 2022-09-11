const numbers = [1,2,3,4,5,6]

console.log(numbers)


//length
console.group(numbers.length)


//checkif array
value = Array.isArray(numbers)
console.log(value)


//get single value

value = numbers[3]
console.log(value)

//insert into array
numbers[2] = 110
console.log(numbers)


//find index of value
value = numbers.indexOf(110)
console.log(value)

//add to array
//add to end of array
numbers.push(255)
console.log(numbers)


//add on the front of array
numbers.unshift(1230)
console.log(numbers)


//delete from end of array
numbers.pop()
console.log(numbers)


//delete from front of array
numbers.shift()
console.log(numbers)


//split value

numbers.splice(1,4,2)
console.log(numbers)

//concat array
const array2 = [ 25,10,20,30,50,]
value = numbers.concat(array2)
console.log(value)

//reverse array
numbers.reverse()
console.log(numbers)



//sorting array

value = numbers.sort()
console.log(numbers)


// use  the cocmpare function
val = numbers.sort(function(x,y){
    return x - y
})
console.log(val)

