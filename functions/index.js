const functions = require("firebase-functions");
const admin = require('firebase-admin')

exports.helloWorld = functions.https.onRequest(async (req, resp) => {
	functions.logger.info("Hello logs!", {structuredData: true});

	const app = admin.initializeApp();

	const db = app.database();

	const v = await db.ref('/test').once('value')
	console.log("The value is:", v.val())

	resp.send( "Hello from IR!");
});