const id = 60

//equal to 
if (id ==60){
    console.log('yes man')
}else{
    console.log('noman')
}



//not equal to 
if (id != 62){
    console.log('yyy')
}else{
    console.log('nnn')
}

//equal to value and type
if(id ===60){
    console.log('yes type and value')
}else{
    console.log('no type and value')
}


//no equal type and value
if(id !== 60){
    console.log('yesss')
}else{
    console.log('noooo')
}

//test if undefined
if (id !== 'undefined'){
    console.log('undefinedddd')
}else{
    console.log('defined')
}

//<= >=
if (id >= 52){
    console.log('yes grater than 50')
}else{
    console.log('no less than 50')
}

//if else

const color = 'red'

if (color == 'red'){
    console.log('yes color is red')
}else if (color == 'blue '){
    console.log('yes color is blue')
}else{
    console.log('not color')
}

//logical operators  and => &&  or => ||
const age = 22

if (age >10 && age <30){
    console.log('yes your age id normal')
}else{
    console.log('no your age id not normal')
}


//ternery operator

console.log(id ==60 ? 'yes' : 'no')

