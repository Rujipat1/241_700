<<<<<<< HEAD
let students = [
    {
        name: 'aa',
        age: 30,
        grade: 80
    },{
        name: 'bb',
        age: 35,
        grade: 65
    }
]

let student = students.find((s)=>{
    if (s.name === 'aa'){
        return true
    }
})

let double_score = student.map((s)=>{
    s.score =s.score*2
    return s
})

let hightScore = students.filter((s)=>{
    if(s.score>=120){
        return true
    }
})

console.log(student)

console.log('double_score',double_score)

/*
array


let score = [20,30,40,50]
let newScore = []

for (let index=0; index < score.length; index++){
    console.log('score',score[index])
    if (score[index] >= 30){    
        newScore.push(score[index])
    }
}

score.forEach((ns)=>{
    console.log('New Score',ns)
})
/*

/*
let score1 = 55
let score2 = 65

let grade = ''

function calculateGrade(score) {
    if (score >= 80) {
        grade = 'A'
    } else if (score >= 70) {
        grade = 'B'
    } else if (score >= 60) {
        grade = 'C'
    } else if (score >= 50) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade
}

//เรียกใช้ function
let grade1 = calculateGrade(score1)
console.log('Grade',grade1)
*/

/*
object


let student = [{
    age:30,
    name:'aa',
    grade:'A'
},{
    age:35,
    name:'bb',
    grade:'B'
}]

for (let index =0; index < student.length; index++){
    console.log('student Number',(index+1))
    console.log('age',student[index].age)
    console.log('name',student[index].name)
    console.log('grade',student[index].grade)
}
*/

/*
array

let ages = [50,20,25,30,35,40]

ages.sort()
console.log(ages)

let name_list = ['aa','bb','cc']
name_list.push('dd')
console.log(name_list)

name_list.pop()
console.log('pop name_list',name_list)
console.log('name_list',name_list.length)

for (let index =0; index < name_list.length; index++) {
    console.log('name_list', name_list[index])
}
*/

/*
&& และ
|| หรือ
!not ไม่ใช่


let number = 20
if ((number % 2 == 0 )) {
    console.log('you are even.')
}
*/

/*
Grade
>= 80 A
>= 70 B
>= 60 C
>= 50 D
< 50 F


let score = 55
if (score >= 80) { 
    console.log('Grade : A')
} else if (score >= 70){ 
    console.log('Grade : B')
}else if (score >= 60){ 
    console.log('Grade : C')
}else if (score >= 50){ 
    console.log('Grade : D')
} else  {
    console.log('Grade : F')
}
*/

/*
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
>= มากกว่าหรือเท่ากับ
< น้อยกว่า
<= น้อยกว่าหรือเท่ากับ


let number1 = 3
let number2 = 5

//if - else condition
if (number1 != number2) {
    console.log('this if')
} else if (number1 == number2){
    console.log('this else if')
} else {
    console.log('this else')
}
*/

/*
// String - ตัวอักษร
let fname = 'John'
console.log('Name', fname)
const idcard = '123'

// Number - ตัวเลข
let age = 30
let height = 150.5
const pi = 3.14

fname = 'Tom'

idcard = '456' 

console.log('ID Card:', idcard)

console.log('Name:', fname , 'Age:', age)
//console.log('Age:', age)
=======
let students = [
    {
        name: 'aa',
        age: 30,
        grade: 80
    },{
        name: 'bb',
        age: 35,
        grade: 65
    }
]

let student = students.find((s)=>{
    if (s.name === 'aa'){
        return true
    }
})

let double_score = student.map((s)=>{
    s.score =s.score*2
    return s
})

let hightScore = students.filter((s)=>{
    if(s.score>=120){
        return true
    }
})

console.log(student)

console.log('double_score',double_score)

/*
array


let score = [20,30,40,50]
let newScore = []

for (let index=0; index < score.length; index++){
    console.log('score',score[index])
    if (score[index] >= 30){    
        newScore.push(score[index])
    }
}

score.forEach((ns)=>{
    console.log('New Score',ns)
})
/*

/*
let score1 = 55
let score2 = 65

let grade = ''

function calculateGrade(score) {
    if (score >= 80) {
        grade = 'A'
    } else if (score >= 70) {
        grade = 'B'
    } else if (score >= 60) {
        grade = 'C'
    } else if (score >= 50) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade
}

//เรียกใช้ function
let grade1 = calculateGrade(score1)
console.log('Grade',grade1)
*/

/*
object


let student = [{
    age:30,
    name:'aa',
    grade:'A'
},{
    age:35,
    name:'bb',
    grade:'B'
}]

for (let index =0; index < student.length; index++){
    console.log('student Number',(index+1))
    console.log('age',student[index].age)
    console.log('name',student[index].name)
    console.log('grade',student[index].grade)
}
*/

/*
array

let ages = [50,20,25,30,35,40]

ages.sort()
console.log(ages)

let name_list = ['aa','bb','cc']
name_list.push('dd')
console.log(name_list)

name_list.pop()
console.log('pop name_list',name_list)
console.log('name_list',name_list.length)

for (let index =0; index < name_list.length; index++) {
    console.log('name_list', name_list[index])
}
*/

/*
&& และ
|| หรือ
!not ไม่ใช่


let number = 20
if ((number % 2 == 0 )) {
    console.log('you are even.')
}
*/

/*
Grade
>= 80 A
>= 70 B
>= 60 C
>= 50 D
< 50 F


let score = 55
if (score >= 80) { 
    console.log('Grade : A')
} else if (score >= 70){ 
    console.log('Grade : B')
}else if (score >= 60){ 
    console.log('Grade : C')
}else if (score >= 50){ 
    console.log('Grade : D')
} else  {
    console.log('Grade : F')
}
*/

/*
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
>= มากกว่าหรือเท่ากับ
< น้อยกว่า
<= น้อยกว่าหรือเท่ากับ


let number1 = 3
let number2 = 5

//if - else condition
if (number1 != number2) {
    console.log('this if')
} else if (number1 == number2){
    console.log('this else if')
} else {
    console.log('this else')
}
*/

/*
// String - ตัวอักษร
let fname = 'John'
console.log('Name', fname)
const idcard = '123'

// Number - ตัวเลข
let age = 30
let height = 150.5
const pi = 3.14

fname = 'Tom'

idcard = '456' 

console.log('ID Card:', idcard)

console.log('Name:', fname , 'Age:', age)
//console.log('Age:', age)
>>>>>>> 88f11ec84617876ecfc246aeeb96d0a1ab84cf21
*/