//Traversing the DOM
//parent node
var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor ='red'
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElemnt
//parentnode and parentElemnt both similar
console.log(itemList.parentElement.parentElement.parentElement);

// childNode
//console.log(itemList.childNodes)

// children
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor ='yellow';

//firstChild
console.log(itemList.firstChild)
//fisrastelement child
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hello 1';
itemList.lastElementChild.textContent='hello 4';

// sibling
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color ='green';

// create element

var newDiv = document.createElement('div');
newDiv.className ='hello';
newDiv.id ='hello 1';
newDiv.setAttribute('title','hello div');
// create textnode

var newDivText = document.createTextNode('hello world');

// add text to div
newDiv.append(newDivText);

var container =document.querySelector('header .container');
var h1 =document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize ='30px';
container.insertBefore(newDiv,h1);