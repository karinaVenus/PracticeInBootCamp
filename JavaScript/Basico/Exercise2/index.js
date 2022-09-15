// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
// - Tu nombre (string)
// - Tu edad (number)
// - ¿Eres desarrollador? (boolean)
// - Tu fecha de nacimiento (Date)
// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

const Name = "karina";
const Age = 25;
const isDeveloper = true;
const DateBirth = new Date(1997,7,19);
const Book = {
    title: "Orgullo y prejuicio",
    author: "Jane Austen",
    date: new Date(2017,6,16),
    url: "WWW.BOOK.COM"
};

const MyDates = [Name,Age,isDeveloper,DateBirth,Book];

console.log(MyDates);
