const axios = require("axios");

const myFunction = async (event) => {
  // TODO implement
  try {
    const resp = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const jsonresp = resp.data;
    return {
      statusCode: 200,
      body: jsonresp,
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 400,
      msg: "Error",
    };
  }
};

exports.handler = myFunction;
