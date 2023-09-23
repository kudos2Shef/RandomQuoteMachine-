



const hex="0123456789ABCDEF";
const quotes=["Look at usual things with unusual eyes. ~ Vico Magistetti","Any code of your own that you haven't looked at for six or more months might as well have been written by someone else. ~ Eagleson's Law","Tell me and I forget. Teach me and I remember. Involve me and I learn. ~ Benjamin Franklin","Success often comes to those who have the aptitude to see way down the road. ~ Laing Burns, Jr",
	"I rate enthusiasm even above professional skill. ~ Edward Appleton",
	"There's no limit to what a man can achieve, if he doesn't care who gets the credit. ~ Laing Burns, Jr",
	"The world at large does not judge us by who we are and what we know; it judges us by what we have. ~ Joyce Brothers",
	"Imagination is everything. It is the preview of life's coming attractions. ~ Albert Einstein",
	"To have faith is to trust yourself to the water. When you swim you don't grab hold of the water, because if you do you will sink and drown. Instead you relax, and float. ~ Alan Watts",
	"Everything is in a state of flux, and this includes the world of chess. ~ Mikhail Botvinnik",
	"Real knowledge is to know the extent of one's ignorance. ~ Confucius",
	"We cannot solve our problems with the same thinking we used when we created them. ~ Albert Einstein"];

const bg=document.getElementById("text");
const btn=document.getElementById("new-quote");
//const author=document.getElementsById("author");
const fa=document.querySelectorAll(".fa");//all elements with this class will be considered
//const fa=document.querySelector(".fa");//only one i.e.left double quote willconsider
const x=document.getElementById("tweet-quote");

/*
function randomQuotes(){
	const newQuote= randomGenerator(quotes);
	const newBg= getRandomColour();
	console.log(newBg,hex[newBg]);
	const text=quotes[newQuote].split("~");//randomly generated text from array split into quotes=text[0] and author=text[1].
	document.body.style.backgroundColor=newBg;
	//bg.innerHTML=quotes[newQuote];
	bg.innerHTML=text[0];
	bg.style.color=newBg;
	btn.style.backgroundColor=newBg;
	author.textContent="~ "+text[1];
	author.style.color=newBg;
	//fa.style.color=newBg; works only for 1 element/left quote i.e. querySelector("") 
	
	/* In your code, you're using querySelectorAll to select elements with the class ".fa," 
	but this method returns a NodeList, not a single element. To set the color property on multiple elements, 
	you need to loop through the NodeList and set the property on each element individually. */
/*	fa.forEach(function(element){
		element.style.color=newBg;

	});
	x.style.backgroundColor=newBg;


}

function randomGenerator(arr){
	return Math.floor(Math.random()*arr.length);

}

function getRandomColour(){
    let temp='#'
    for(let i=0;i<6;i++){
        temp=temp+hex[Math.floor(Math.random()*16)];
    }
    //console.log(temp,"yes");
    return temp;
}


btn.addEventListener("click",randomQuotes);
*/


btn.addEventListener("click",function () {
	const newQuote= randomGenerator(quotes);
	const newBg= getRandomColour();
	console.log(newBg,hex[newBg]);
	const text=quotes[newQuote].split("~");//randomly generated text from array split into quotes=text[0] and author=text[1].
	document.body.style.backgroundColor=newBg;
	//bg.innerHTML=quotes[newQuote];
	bg.innerHTML=text[0];
	bg.style.color=newBg;
	btn.style.backgroundColor=newBg;
	author.textContent="~ "+text[1];
	author.style.color=newBg;
	fa.forEach(function(element){
		element.style.color=newBg;

	});
	
	x.style.backgroundColor=newBg;

	//fa.style.color=newBg;
     
     /**/
	/*
	const newQuote= randomGenerator(quotes);
	const newBg= getRandomColour();
	console.log(newBg,hex[newBg]);
	const text=quotes[newQuote].split("~");//randomly generated text from array split into quotes=text[0] and author=text[1].
	document.body.style.backgroundColor=newBg;
	//bg.innerHTML=quotes[newQuote];
	bg.innerHTML=text[0];
	bg.style.color=newBg;
	btn.style.backgroundColor=newBg;
	author.textContent="~ "+text[1];
	author.style.color=newBg;
	//fa.style.color=newBg; works only for 1 element/left quote i.e. querySelector("") 
	
	/* In your code, you're using querySelectorAll to select elements with the class ".fa," 
	but this method returns a NodeList, not a single element. To set the color property on multiple elements, 
	you need to loop through the NodeList and set the property on each element individually. */
/*	fa.forEach(function(element){
		element.style.color=newBg;

	});
	x.style.backgroundColor=newBg;*/


});




function randomGenerator(arr){
	return Math.floor(Math.random()*arr.length);

}

function getRandomColour(){
    let temp='#'
    for(let i=0;i<6;i++){
        temp=temp+hex[Math.floor(Math.random()*16)];
    }
    //console.log(temp,"yes");
    return temp;
}