/*In our next task, we want you to have a go at creating your own object literal to represent one of your favorite bands. The required properties are:

name: A string representing the band name.
nationality: A string representing the country the band comes from.
genre: What type of music the band plays.
members: A number representing the number of members the band has.
formed: A number representing the year the band formed.
split: A number representing the year the band split up, or false if they are still together.
albums: An array representing the albums released by the band. Each array item should be an object containing the following members:
name: A string representing the name of the album.
released: A number representing the year the album was released.
Include at least two albums in the albums array.

Once you've done this, you should then write a string to the variable bandInfo, which will contain a small biography detailing their name, nationality, years active, and style, and the title and release date of their first album. */

const FavouriteBand={
name:'Coke Cola',
nationality:'Pakistan',
genre: 'All',
members: "Variable",
formed: "2009",
split: 'false',
albums: [{name:'alb1',release:'200'},
{name:'alb221',release:'200222'}]
}


let brandInfo="";
for(let h in FavouriteBand){
if(typeof FavouriteBand[h]==="object"){
   for(let p of FavouriteBand[h]){
brandInfo+=p.name+" "+p.release+" ";}
}else
brandInfo+=FavouriteBand[h]+" ";
}

let c=[];
console.log(brandInfo);
console.log(typeof FavouriteBand['albums']);
console.log( c.length);