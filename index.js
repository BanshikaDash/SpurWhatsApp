const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/webhook", (req, res) => {
    console.log("Dialogflow Request Body:", req.body);
    
    const intent = req.body.queryResult.intent.displayName;
    let responseText = "I didn’t understand that. Can you try again?";

    if (intent === "User Inquiry") {
        responseText = "Hello! How can I assist you today?";
    }

    res.json({
        fulfillmentText: responseText
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(Server is running on port ${PORT});
});