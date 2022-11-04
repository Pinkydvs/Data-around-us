//declare var title & print it
let title=['A Game of Thrones', 'The Hunger Games'];
console.log(title);

//declare var author & print it
let author=['George R.R. Martin', 'Suzzane Collins'];
console.log(author);

//declare var author & print it
let year=[1996, 2008];
console.log(year);

//declare var isNewerThan2000 & if the statement in the name is true then write true as a value, otherwise write false
let isNewerThan2000=['True','False'];
for (let i=0; i<year.Length; i++) 
{ if (year[i]<=2000)
                {console.log('The book is older than 2000);
                console.log(isNewerThan2000[1]);            
                }
   else
                {console.log('The book is newer than 2000');
                console.log(isNewerThan2000[0]);
                }
}               

//age
let age=[2022-year[0], 2022-year[1]];
console.log(age);

//declare var characters
let characters=['Eddard Stark', 'Arya Stark', 'Jon Snow', 'Catelyn Tully', 'Katniss Everdeen', 'Primrose Everdeen', 'Peeta Mellark', 'Haymitch Abernathy'];
console.log(characters);

//print the first 2 characters name from the list
console.log(characters[0]);
console.log(characters[1]);

//favoriteBook
let favoriteBook={title:'A Game of Thrones', author:'George R.R. Martin', year:1996, isNewerThan2000:'False', age:26, characters:['Eddard Stark', 'Arya Stark', 'Jon Snow', 'Catelyn Tully']};
console.log(favoriteBook);
