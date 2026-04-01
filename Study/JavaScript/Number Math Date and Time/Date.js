/*
     
      Date in Js
      
      Fundamentals
      1. GMT(Greenwich Mean Time) 
          it was the first global standard time

      2. UTC(Coordinated Universal Time)
          it is the modern standard for time measurement similar to GMT but more accurate (Usaes atomic clocks)
          it's the reference time zone used by the computer and systems
          Time zones are usually written as offsets from UTC like UTC+1, UTC-4, etc
     
      3. ISO Standard (Internationa Organization for Standardization)
          ISO 8601 is the international standard for date and time formats.
          It helps avoid confusion caused by different formats (Like dd/mm/yyyy vs mm/dd/yyyy).
          The ISO format is
          YYYY-MM-DDTHH:mm:ss.sssZ
          Example: 2025-05-19T14:30:00Z
          T represent date and time
          Z means UTC time      
      
      4. Unix Time and Unix Epoch
          Unix Epoch is the zero point for time in most computer systems, especially those  based on Unix(including, macOS, and modern operationg, system).
          so the Unix Epoch is the starting point
          January 1, 1970, 00:00:00 UTC

          Unix Time(or Epoch time ) = Number of seconds (or milliseconds) since that  moment
          2038  there will be time cricess for 32-bit os becasue we can not store the milliseconds

      5. Computer system does not store time like human redable time 
          computer count the time
      6. Time Zones
          Earth is divided into 24 time zones, base on the rotation of the planet.
          Each time zone represents a regiion where the local time is the same
          
          example:
          India(IST) = UTC+5:30
          London(GMT/UTC) = UTC+0
          New York (EST) = UTC-5

          From js  js will give you time based on your local time zone

      Note-  Months are zero-indexed in js: 0 = january, 11 = December.

*/

//  let date  = new Date('2025-03-30T22:30:00');

// console.log(date);
// console.log(date.toString()); // Show local time

// console.log(Date.now()/1000/60/60/24/365);

// console.log(date.toString());

// let date  = new Date();
// console.log(date.toString());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// date.setFullYear(2025);

// console.log(date.toString());

// Working with time stamp

// let date = new Date();

// console.log(date.getTime());

// let timeStamp = Date.now();

// console.log(timeStamp);

// Formatting dates  

// let date = new Date();

// console.log(date.toString()); // gives in local time zone
// console.log(date.toISOString()); // gives ISO UTC zone

// console.log(date.toDateString());   //
// console.log(date.toTimeString());

// console.log(date.toLocaleString());
// console.log(date.toUTCString());

// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());

// formatting date 

    // 05 day 10 month 2025 year

// let date = new Date();

// console.log(`${date.getDate()} day ${date.getMonth() + 1} month ${date.getFullYear()} year`);

let date1 = new Date('2025-01-01');
let date2 = new Date('2026-01-03');


let x = date1.getTime();
let y = date2.getTime();

let z = Math.abs(x - y);

console.log(z / 1000/60/60/24);
