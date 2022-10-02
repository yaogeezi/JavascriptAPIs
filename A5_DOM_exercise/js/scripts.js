/*

1. Update the style attribute of the first `<p>` tag on the page to have a different color, size or family.

*/

document.querySelector("p").style.color="red"



/*
2. Add a new `<p>` element right below the first one and add some content to it.
*/

const new_para = document.createElement("p")
new_para.textContent = "this is a new paragraph."
document.querySelector("p").appendChild(new_para) 

/*
3. Write code that inserts an image and inserts it inside the `<section>` tag. 
Use this url for the image: https://source.unsplash.com/randomLinks to an external site.
*/

let new_img = document.createElement("img")
new_img.src = "js/Subject.png"
new_img.alt = "this is my cat Jenga"
new_img.style = "width: 50 px"

const new_link = document.createElement("a")
new_link.href = "https://source.unsplash.com/randomLinks"

let sec = document.querySelector("section")
let h11 = document.querySelector("h1")
let img_link = sec.insertBefore(new_link,h11)

img_link.appendChild(new_img)

/*
3a. Start from 3 and now write code that, on click of a button ('click' eventListener), 
can randomly fetch an image from that url and insert it somewhere inside the body. To make it more fun, 
try to assign it as a background image to the whole body(make it cover fit). Then update your code so that the 
 image can change every time you click the button.**
*/

const new_button = document.createElement("button")
new_button.textContent = "click me"

let header = document.querySelector("header")
header.appendChild(new_button)

new_button.addEventListener("click", function(e){
   // window.location = "http://www.google.com/";
   window.open("https://unsplash.com/")
   e.preventDefault()
})



/*
4.  Extend the existing table with a few additional rows (tr and td) in the html. Then write code to select the 
table rows and build a loop to assign alternative colors to the rows.**
*/


let new_td1 = document.createElement("td")
new_td1.textContent = "Row 2   Cell 1"

let new_td2 = document.createElement("td")
new_td2.textContent = "Row 2  Cell 2"

let new_tr = document.createElement("tr")
new_tr.appendChild(new_td1)
new_tr.appendChild(new_td2)
new_tr.style.color = "black"

document.querySelector("tbody").appendChild(new_tr)


for(let i=0; i<2; i++){
   let colors = ["green", "red","blue"]
   document.querySelectorAll("tr")[i].style.color = colors[i]
}


// another way to loop through every element
// const sp = document.querySelectorAll( 'tr' );
// sp.forEach( function( e ) { // another way to loop through arraylist and change its elements
//   e.style.color ='red';
// } );
