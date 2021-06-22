'use strict';


let form=document.getElementById('form');
let table=document.getElementById('table');
let grade=0;
let arrOfObj=[];

let arrHeader=['StudentName','StudentGrade','Course','Status'];

form.addEventListener('submit',handle);

function handle(event){
event.preventDefault();

let name=event.target.std.value;
let course=event.target.cor.value;

let newobj= new Combine(name,course);
renderAgain();

localStorage.setItem('ls',JSON.stringify(arrOfObj));


}

function Combine(name,course){

this.name=name;
this.course=course;
this.grade=randomGrade(grade);
this.status=status();

arrOfObj.push(this);

}

function renderHeader(){

let firstRow=document.createElement('tr')

for(let i=0;i<arrHeader.length;i++){

let th1=document.createElement('th');
th1.textContent=arrHeader[i];

firstRow.appendChild(th1);


}


table.appendChild(firstRow);

}

// renderHeader();



Combine.prototype.render=function(){

    let firstRow=document.createElement('tr');

    let td1=document.createElement('td');
    td1.textContent=this.name;
    
    let td2=document.createElement('td');
    td2.textContent=this.grade;

    let td3=document.createElement('td');
    td3.textContent=this.course;
    
    let td4=document.textContent('td');
    td4.textContent=status(this.grade);

    firstRow.appendChild(td1);
    firstRow.appendChild(td2);
    firstRow.appendChild(td3);
    firstRow.appendChild(td4);

    
    
    table.appendChild(firstRow);
    }

// render();


function renderAgain(){

for(let i=0;i<arrOfObj.length;i++){


    let firstRow=document.createElement('tr');

    let td1=document.createElement('td');
    td1.textContent=arrOfObj[i].name;
    
    let td2=document.createElement('td');
    td2.textContent=arrOfObj[i].grade;
    

    let td3=document.createElement('td');
    td3.textContent=arrOfObj[i].course;

    let td4=document.createElement('td');
    td4.textContent=status(arrOfObj[i].grade);
    
    firstRow.appendChild(td1);
    firstRow.appendChild(td2);
    firstRow.appendChild(td3);
    firstRow.appendChild(td4);
    
    
    table.appendChild(firstRow);



}


}


function getting(){

if(localStorage.getItem('ls')){

    arrOfObj=JSON.parse(localStorage.getItem('ls'));
}


}


function randomGrade(grade){

    for(let i=0;i<arrOfObj.length;i++){
    return Math.floor(Math.random() * (100 - 0) + 0) *grade;
    }

}

function status(i){
// let i;
let status;
if (i>50){
status='pass';
}
else if (i<50){
    status='fail';
}
return status;
};

localStorage.setItem('ls',JSON.stringify(arrOfObj));
arrOfObj=JSON.parse(localStorage.getItem('ls'));


renderAgain();
renderHeader();
getting();