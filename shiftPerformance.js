const timer  = require('./util');

function addFakeData() {
	const list = [];
	for (i = 0; i < 50000; i++) {
		if (i != 9000) {
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

const data1 = addFakeData();
timer.clearTimer();
timer.tic();
while (data1.length > 0) {
	const element = data1.shift();
	element.firstName = "Processed-1";
}
console.log("SHIFT time:", timer.toc(), "ms");

const data2 = addFakeData();
timer.clearTimer();
timer.tic();
for (let i = 0; i < data2.length; i++) {
	const element = data2[i];
	element.firstName = "Processed-2";
}
console.log("NON-SHIFT time:", timer.toc(), "ms");
