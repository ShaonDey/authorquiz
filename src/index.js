import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthorQuiz from "./AuthorQuiz";
import * as serviceWorker from "./serviceWorker";
import {shuffle, sample} from 'underscore';

const authors = [
  {
    name:'Mark Twain',
    imageUrl:'images/authors/marktwain.jpg',
    imageSource:'Wkimedia Commons',
    books: [
        'The Adventures of Huckleberry Finn',
        'Life on the Mississippi',
        'Roughing'
    ]
  },
  {
    name:'JK Rowling',
    imageUrl:'images/authors/jk.jpg',
    imageSource:'Wkimedia Commons',
    books: [
        'Harry Potter and the Philosophers Stone',
        'The Tales of Beedle the Bard',
        'Fantastic Beasts and Where to Find Them'
    ]
  },
  {
    name:'William Shakespeare',
    imageUrl:'images/authors/ws.jpg',
    imageSource:'Wkimedia Commons',
    books: [
        'Romeo and Juliette',
        'Macbeth',
        'The Merry Wives of Windsor'
    ]
  },
  {
    name:'Gloria Fuertes',
    imageUrl:'images/authors/gf.jpg',
    imageSource:'Wkimedia Commons',
    books: [
        'Songs for kids',
        'The months',
        'Ponytail the poet'
    ]
  },
  {
    name:'Ernest Hemingway',
    imageUrl:'images/authors/eh.jpg',
    imageSource:'Wkimedia Commons',
    books: [
        'The Torrents of Spring',
        'Islands in the Stream',
        'The Garden of Eden'
    ]
  },
  {
    name:'León Tolstói',
    imageUrl:'images/authors/lt.jpg',
    imageSource:'Wkimedia Commons',
    books: [
        'War & Peace',
        'Anna Karenina',
        'Resurrection'
    ]
  }
];

function getTurnData(authors){
  const allBooks = authors.reduce(function (p,c,i) {
      return p.concat(c.books);
  }, []);

  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomBooks);

  return {
      books: fourRandomBooks,
      author: authors.find((author) => 
              author.books.some ((title) => 
                  title === answer)),
  }
}

const state = {
  turnData: getTurnData(authors)
};

ReactDOM.render(
  <React.StrictMode>
    <AuthorQuiz {...state} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
