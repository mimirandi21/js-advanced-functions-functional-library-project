const fi = (function () {
	return {
		libraryMethod: function () {
			return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
		},

		each: function (coll, alert) {
			for (const key in coll) {
				alert(coll[key]);
			}
			return coll;
		},

		map: function (coll, func) {
			let newColl = [];
			for (const key in coll) {
				newColl.push(func(coll[key]));
			}
			return newColl;
		},

		reduce: function (coll, func, acc) {
			if (acc === undefined) {
				acc = coll[0];
				for (let i = 1; i < coll.length; i++) {
					acc = func(acc, coll[i]);
				}
				return acc;
			} else {
				for (const el of coll) {
					acc = func(acc, el);
				}
				return acc;
			}
		},

		find: function (coll, test) {
			for (const key in coll) {
				if (test(coll[key]) === true) return coll[key];
			}
		},

		filter: function (coll, test) {
			let newArr = [];
			for (const key in coll) {
				if (test(coll[key]) === true) newArr.push(coll[key]);
			}
			return newArr;
		},

		size: function (coll) {
			return Object.keys(coll).length;
		},

		first: function (coll, num) {
			if (num === undefined) {
				return coll[0];
			} else {
				return coll.slice(0, num);
			}
		},

		last: function (coll, num) {
			if (num === undefined) {
				return coll[coll.length - 1];
			} else {
				return coll.slice(coll.length - num);
			}
		},

		compact: function (coll) {
			let newArr = [];
			for (const key in coll) {
				if (!!coll[key]) newArr.push(coll[key]);
			}
			return newArr;
		},

		sortBy: function (coll, test) {
			return [...coll].sort(function (a, b) {
				return test(a) - test(b);
			});
		},

		flatten: function (array, shallow) {
			let flattened = [];
			if (shallow) {
				for (const element of array) {
					if (Array.isArray(element)) {
						for (const nestedElement of element) {
							flattened.push(nestedElement);
						}
					} else {
						flattened.push(element);
					}
				}
			} else {
				for (const element of array) {
					if (Array.isArray(element)) {
						const arrayFlatten = this.flatten(element);
						for (const nestedElement of arrayFlatten) {
							flattened.push(nestedElement);
						}
					} else {
						flattened.push(element);
					}
				}
			}
			return flattened;
		},

		uniq: function (array, isSorted, callback) {
			let newArr = [];
			if (callback) {
				let arr = [...array].map((element) => callback(element));
				newArr = array.filter(
					(value, index, array) => arr.indexOf(callback(value)) === index
				);
			} else {
				newArr = [...new Set(array)];
			}
			return newArr;
		},

		keys: function (obj) {
			return Object.keys(obj);
		},

		values: function (obj) {
			return Object.values(obj);
		},

		functions: function (obj) {
			let newArr = [];
			for (const key in obj) {
				if (typeof obj[key] === "function") newArr.push(key);
			}
			return newArr;
		},
	};
})();

fi.libraryMethod();
