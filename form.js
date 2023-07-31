console.log('hello from from')
var headerTitle =document.getElementById('header-title')
console.log(headerTitle);
//headerTitle.textContent ='hello'
headerTitle.style.borderBottom='solid 5px #000';
var header =document.getElementById('main-header');
header.style.borderBottom ='solid 8px #900';
var item =document.getElementById('title1')

console.log(item);
item.style.color = 'green'
item.style.fontWeight='bold'

var items =document.getElementsByClassName('list-group-item')
items[2].style.background ='green'
//items.style.fontWeight = 'bold'
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';
    items[i].style.color ='red'
}