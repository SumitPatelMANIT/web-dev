//   data come from server to client in the form of JSON(javaScript object notation ) / XML (extensible markup language)

// it's light weight data format used to store data and exchange data
// it's string not object

// let obj = {
//       "name":"Sumit",
//       "age": 21,
//       "isMarried": false,
// }

// console.log(obj.name);

// let json2 = [
//            {
//       "name":"Sumit",
//       "age": 21,
//       "isMarried": false,
// },
//  {
//       "name":"Sumit",
//       "age": 21,
//       "isMarried": false,
// }, {
//       "name":"Sumit",
//       "age": 21,
//       "isMarried": false,
// }
// ]
// number, string, Null, Boolean, Object, Array can take
// function, date, undefined can not take
// .json -> strinct
// double quests(key, value)

// let stringJson = `{
//       "name":"Sumit",
//       "age": 21,
//       "isMarried": false
// }`

// console.log(stringJson);

// let json = JSON.parse(stringJson); // convert stirng -> object

// console.log(json);

// let newstringJson = JSON.stringify(json);  // convert object -> string

// console.log(newstringJson);

// console.log(JSON.parse(newstringJson));


// Now API
//  API stands for application Programming interface
// Application Programming interface, is a set of rules and protocols that allows different software applications to communicate and interact with each other.
/*

   Communication between different languages/systems
   controlled, secure access to data
   monitoring & analytics
   faster development with third-party services
   automation & integration
   microservices architecture
   easy scalling and maintenance

*/

// Web app in browser ->>> internet->> API ->> WebServer -->> Database

async function fetchData(){
      let response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2026-02-28&sortBy=publishedAt&apiKey=8fcb3db15ce143d1abd54b934098ba81');

      let data = await response.json();
      console.log(data);
      
}

fetchData();


