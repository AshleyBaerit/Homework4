let currentDay = new Date(); 
let currentMonth = currentDay.getMonth(); 
let currentYear = currentDay.getFullYear(); 

let firstDay = new Date(currentYear, currentMonth, 1);


let firstFriday = firstDay.getDay();
if (firstFriday > 5) {
  firstFriday = firstFriday - 7 + 6;
} else {
  firstFriday = 6 - (5 - firstFriday);
}


for (let day = firstFriday; day <= 31; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}