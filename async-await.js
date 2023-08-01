//async keyword is attach with function without function we cant write async-await

//Await keyword pauses the execution of the function in which it's declared
//In this case, wrapping it iniside another function paused the execution of that function not the main function

function getUserAvtar() {
	fetch("/user")
		.then((res) => res.json())
		.then((users) => {
			for (let user of users) {
				fetch(`/users/${user.id}`)
					.then((res) => res.json())
					.then((data) => console.log(data.imageUrl));
			}
		});
}

//the above can be converted to async await

async function getUserAvate() {
	const res = await fetch("/user");
	const users = await res.json();
	for (let user of users) {
		const resp = await fetch(`users/${user.id}`);
		const data = await resp.json();
		console.log(data.imageURl);
	}
}

//here the issue is that the execution of async-await is not the same as that of promise function
//because in promise execution is going on parallel i.e second call doesn't wait for the completion of first call
//where in above async-await the second call is blocked until and unless first call is completed it is due to await keyword

//so above async-await can be resolved
//by declaring another function as getAvtar and calling it into for loop so that the execution must go on parallel

function getAvtar(user) {
	const resp = await fetch(`users/${user.id}`);
	const data = await resp.json();
	console.log(data.imageURl);
}

async function getUserAvate() {
	const res = await fetch("/user");
	const users = await res.json();
	for (let user of users) {
		getAvtar(user);
	}
}

//now above execution will be in parallel

//to overcome from .then hell we use async-await
//for e.g

function getUserDetails() {
	fetch("/authenticate").then((token) => {
		fetch("/userId", token).then((userId) => {
			fetch("/userDetails", userID).then((userData) => {
				console.log(userData);
			});
		});
	});
}

//so in async- await

async function getUserDetails() {
	const token = await fetch("/authentication");
	const userID = await fetch("/userId", token);
	const userDetails = await fetch("/userDetails", userID);

	console.log(userDetails);
}
