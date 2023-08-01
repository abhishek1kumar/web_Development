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

