// const mongoose = require("mongoose");
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const { connectDb } = require("../../models/mongoose");
// dotenv.config();

// const app = express();
// connectDb();

// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json()); // middleware function that parses that body data in coming requests into a JSON

// try {
//   app.listen(PORT, () => {
//     console.log(`Server running at ${PORT}`);
//   });
// } catch (error) {
//   console.log(error);
// }

// // ! REQUEST:
// // 1. Request line: {method: POST/GET/PUT/delete, URL: the url of the resource being requested, HTTP version}
// // 2. Headers: { details about the client’s browser, the types of responses that the client will accept, cookies, and more.}
// // 3. Blank line: end of header section
// // 4. Body: data sent by client
