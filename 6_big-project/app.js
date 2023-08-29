const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

app.use(morgan("dev"))

app.use(express.json());

app.use((req,res,next)=>{
	req.myVariable = "hello from middleware"
	next()
});


const toursJson = JSON.parse(
	fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
);

// read all
function getAllTours(req, res) {
	res.status(200).json({
		message: 'success',
		results: toursJson.length,
		data: {
			tours: toursJson,
		},
	});
}
// read one
function getOneTour(req, res) {
	const urlPrams = req.params;
	const id = urlPrams.id * 1;
	const queryResult = toursJson.find((tour) => tour.id === id);
	console.log();
	if (!queryResult) {
		return res.status(404).json({ message: 'failed', message: 'invalid ID' });
	} else {
		res.status(200).json({
			message: 'success',
			results: 1,
			data: [queryResult],
		});
	}
}
// create one
function createOneTour(req, res) {
	const newId = toursJson[toursJson.length - 1].id + 1;
	const newTour = Object.assign({ id: newId }, req.body);
	toursJson.push(newTour);
	fs.writeFile(
		`${__dirname}/dev-data/data/tours-simple.json`,
		JSON.stringify(toursJson),
		(error) => {
			console.log('success');
		}
	);
	res.status(201).send({ massage: { status: 'success', 'new-tour': newTour } });
}
// update
function updateOneTour(req, res) {
	const id = req.params.id * 1;
	if (id > toursJson.length) {
		return res.status(404).json({ message: 'failed', message: 'invalid ID' });
	} else {
		return res.status(200).json({
			status: 'success',
			data: {
				id: id,
				tour: '<updated tour...>',
			},
		});
	}
}
// delete one
function deleteOneTour(req, res) {
	const id = req.params.id * 1;
	const filtered = toursJson.filter((e) => (e.id !== id ? e : null));

	console.log(req.myVariable)
	res.status(204).json({
		status: 'success',
		data: null,
	});
}


/* user */
const getAllUsers=(req,res) => {
	res.status(500).json({
		status: 'error',
		message:"this rout is not defined"
	});
}
const createUser=(req,res) => {
	res.status(500).json({
		status: 'error',
		message:"this rout is not defined"
	});
}
const getUser=(req,res) => {
	res.status(500).json({
		status: 'error',
		message:"this rout is not defined"
	});
}
const updateUser=(req,res) => {
	res.status(500).json({
		status: 'error',
		message:"this rout is not defined"
	});
}
const deleteUser=(req,res) => {
	res.status(500).json({
		status: 'error',
		message:"this rout is not defined"
	});
}


app.route('/api/v1/tours')
	.get(getAllTours)
	.post(createOneTour);

app.route('/api/v1/tours/:id')
	.get(getOneTour)
	.patch(updateOneTour)
	.delete(deleteOneTour);

// users
app.route("/api/v1/users")
	.get(getAllUsers)
	.post(createUser)

app.route("/api/v1/users/:id")
	.get(getUser)
	.patch(updateUser)
	.delete(deleteUser)


const PORT = 3000;
app.listen(PORT, () => {
	console.log(`server started at http://localhost:${PORT}`);
});
