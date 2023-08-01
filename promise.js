//prmoise is use to handle multiple asynchronus function
//producing a promise

const idGoodgrade = true;

const willGetNewPhone = new Promise((resolve, reject) => {
	if (idGoodgrade) {
		const phone = {
			brand: "samsung",
			color: "black",
		};
		resolve(phone);
	} else {
		const reason = new Error("did not get good grade");
		reject(reason);
	}
});

//consuming a promise

var askMom = function () {
	willGetNewPhone
		.then(function (fulfilled) {
			console.log(fulfilled);
		})
		.catch(function (error) {
			console.log(error.message);
		});
};

askMom();
