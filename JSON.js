/*var student = {
    Name:'sharmin Sultana',
    id:1834902565,
    age:56,
    address:{
        vaillage:'Rownat',
        postOffice:'Rownat',
        thana:'kapasia',
        zila:'gazipur'
    }

}
console.log(student)

var studentJSON = JSON.stringify(student);
console.log(studentJSON);

var studentObj = JSON.parse(studentJSON);
console.log(studentObj);*/


var student = {
    name:'Sharmin Sultana',
    id:1834902565,
    age:23,
    address:{
        village:'Rownat',
        post:'rownat'
    }
}

var studentString = JSON.stringify(student);
console.log(studentString);

var studentObj = JSON.parse(studentString );
console.log(studentObj);