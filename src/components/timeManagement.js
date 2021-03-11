const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let now = new Date();
let options = { weekday: 'long' };
let today = now.toLocaleDateString('en-EN', options);

today = today.charAt(0).toUpperCase() + today.slice(1);

let order_1 = daysOfWeek.slice(daysOfWeek.indexOf(today));
let order_2 = daysOfWeek.slice(0, daysOfWeek.indexOf(today));

let orderedDay = order_1.concat(order_2);
