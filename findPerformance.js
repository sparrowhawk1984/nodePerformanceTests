const timer  = require('./util');

function addFakeData() {
	const list = [];
	for (i = 0; i < 10000000; i++) {
		if (i != 9000000) {
		// if (i != 1000000) {
			const obj = {
				id: i + 1,
				firstName: "Joaquin",
				lastName: "Hidalgo",
				dob: "02.13.1984",
				address: "536 W Addison St. Apt 389, Chicago, IL, 60613"
			};
			list.push(obj);
		} else {
			const obj = {
				id: i + 1,
				firstName: "Element",
				lastName: "ToFind",
				dob: "09.09.1999",
				address: "My address of the element to be found"
			};
			list.push(obj);
		}
		
	}
	return list;
}

const data = addFakeData();
timer.clearTimer();
timer.tic();
const item1 = data.find(function(item) {
	return item.firstName == "Element" && item.lastName == "ToFind"
})
console.log("FOUND!", item1.id);
console.log("FIND time:", timer.toc(), "ms");

timer.clearTimer();
timer.tic();
for (i = 0; i < data.length; i++) {
	if (data[i].firstName == "Element" && data[i].lastName == "ToFind") {
		console.log("FOUND!", data[i].id);
		break;
	}
}
console.log("SIMPLE FOR time:", timer.toc(), "ms");
