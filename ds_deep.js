const DS_DEEP = {
	things: [
		{ a: 1, b: [1, 2, 3], c: { k1: 1, k2: 2, k3: 3 } },
		{ a: 2, b: [4, 5, 6], c: { k1: 4, k2: 5, k3: 6 } },
		{ a: 3, b: [7, 8, 9], c: { k1: 7, k2: 8, k3: 9 }, i: "should not be here" },
		{ a: 4, b: [10, 11, 12], c: { k1: 10, k2: 11, k3: 12 } },
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

function destr1(obj) {
	const { things } = obj;
	if (things != null && things != undefined) {
		return things;
	}

    else {
        return "no things in this object";
    }
}

console.log("task 1:", destr1(DS_DEEP));

//task 2

function destr2(obj) {
	const { things: [, second] } = obj;
	if (second != null && second != undefined) {
		return second;
	}

    else {
        return "no second in this object";
    }
}

console.log("task 2:", destr2(DS_DEEP));


