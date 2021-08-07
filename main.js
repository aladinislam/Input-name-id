const titel = document.querySelector('#name');
const number = document.querySelector('#number');
const date = document.querySelector('#date');
const Submit = document.querySelector('.Submit');
const listshow = document.querySelector('#listshow');


Submit.addEventListener('click', function(){
if(titel.value =='' && number.value == ''&& date.value == ''){
    alert('Vhi kiso akta dan')
}else{
    const listshow = document.createElement('tr')
// title
const newtitle = document.createElement('th');
newtitle.innerHTML = titel.value;
listshow.appendChild(newtitle);



const newnumber = document.createElement('th');
newnumber.innerHTML = number.value;
listshow.appendChild(newnumber);



const newdate = document.createElement('th');
newdate.innerHTML = date.value;
listshow.appendChild(newdate);

    
booklist.appendChild(listshow);



}
});