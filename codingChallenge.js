"use strict";

// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const text = document.querySelector("textarea").value;

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  for (const [index, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, " ")} ${"✅".repeat(index + 1)}`);
  }
});

// trim(), split(), padEnd(), padStart(),toUpperCase(), toLowerCase(),replace(), repeat()
// practice 2
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";


  const arr = flights.toLowerCase().trim().split("+_")
  const getCode = str=> str.slice(0,3).toUpperCase()
  
  for(const values of arr){
    const [type, from, to, time] = values.split(";")    
    const output = `${type.startsWith("delayed")||type.startsWith("_delayed") ? "🛑": (" ")}${type.replaceAll("_", " ").trim()} from ${getCode(from)} to ${getCode(to)} ${time.replace(":", "h")}`.padStart(50)
    console.log(output);





    // const [first, second] = spaced[0].trim().split("_")
    // const textResult = `${first}${second[0].toUpperCase()}`
    // console.log(textResult);
    
    // const uppText = `${spaced[1].slice(0,3).toUpperCase()} to ${spaced[2].slice(0,3).toUpperCase()} ${spaced[3].replace((":"),"h")}`
    // console.log(uppText);
    
  }
  
  