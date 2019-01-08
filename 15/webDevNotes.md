#Web Dev Bootcamp Notes


## Finding DOM elements

- document.getelementbyid
- document.getelemensbyclassname
- document.getlementsbytagname
- document.queryselector
- document.queryselectorall 

##Manipulating the Dom

**Select**: Find the object in the DOM and then
**Manipulate**: Modify the object in the DOM 

 ###Changing Style

Corresponding style for every element.

Example: element.style.color = "blue";

*Separation of Concerns:*
If there are too many styles it's better to **create/use a CSS class** and assign it dynamically to the element. 
Because you use javascript to manipulate... not CSS.

 ###Add/remove classes

All these allow you add or remove a .class to an element.
element.classList.add("some-class");
element.classList.remove("some-class");
element.classList.toggle("some-class");

 ###changing tag content.

This returns only the text content and not the tags:
element.textContent

 ###Changing attributes
 src,href,etc.

