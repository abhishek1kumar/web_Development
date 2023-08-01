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

var li =document.getElementsByTagName('li')
for(var i=0;i<li.length;i++)
{
    li[i].style.fontWeight='bold';
    li[i].style.color ='blue'
}
/* var ul =document.getElementsByTagName('ul');
ul.li[4].innerHTML='<h1> add iten <h1>'
li[5].innerHTML='<h2>item 6 </h2>'okay bro
 */
items[3].textContent='fruits'
items[2].textContent='vegetable'
//items[5].innerHtml ='<h1>item 5</h1>'
li[4].textContent='egg'

var secondItem =document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.background = 'blue'
var thrirditem =document.querySelector('.list-group-item:nth-child(3)');
secondItem.style.display ='none'

//querry selecter all
var fourthlis =document.querySelectorAll('.list-group-item');
fourthlis[3].style.color='green'
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
       odd[i].style.background='#f4f4f4'
}



