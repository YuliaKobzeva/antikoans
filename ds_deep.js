const DS_DEEP = {
	things: [
		{
			a: 1,
			b: [1, 2, 3],
			c: {
				k1: 1,
				k2: 2,
				k3: 3,
			},
		},
		{
			a: 2,
			b: [4, 5, 6],
			c: {
				k1: 4,
				k2: 5,
				k3: 6,
			},
		},
		{
			a: 3,
			b: [7, 8, 9],
			c: {
				k1: 7,
				k2: 8,
				k3: 9,
			},
			i: "should not be here",
		},
		{
			a: 4,
			b: [10, 11, 12],
			c: {
				k1: 10,
				k2: 11,
				k3: 12,
			},
		},
	],

	mouse: {
		cat: {
			dog: {
				kid: {
					granma: {
						grandad: {
							repka: "get rid of me, you idiots!",
						},
					},
				},
			},
		},
		cheese: "1kilo",
	},
};

//task 1

function destr1({ things }) {
	return things;
}

console.log("task 1:", destr1(DS_DEEP));

//task 2

function destr2(obj) {
	const {	things: [, , third],} = obj;
	return third;
}

console.log("task 2:", destr2(DS_DEEP));

//task 3

function destr3(obj) {
	const {	things: [first, , third],} = obj;
	return [third, first];
}

console.log("task 3:", destr3(DS_DEEP));

//task 4

function destr4(obj) {
	const { things } = obj;
	return things.slice(-2, -1);
}

console.log("task 4:", destr4(DS_DEEP));

//task 5

function destr5(obj) {
	const {	things: [, secondObject],} = obj;
	const {	b: [first, ...rest],} = secondObject;
	return rest;
}

console.log("task 5:", destr5(DS_DEEP));

//task 6

function destr6(obj, gluedKeys) {

	const unGluedKeys = gluedKeys.split(".");

	let nestedObj = obj;

	for (let i = 0; i < unGluedKeys.length; i++) {
		for (a in nestedObj) {
			if (a == unGluedKeys[i]) {
				nestedObj = nestedObj[a];
			}
		}
	}

	return nestedObj;
}

console.log("task 6:", destr6(DS_DEEP, "mouse.cat.dog"));
