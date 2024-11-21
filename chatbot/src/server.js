import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/zendesk-webhook', (req, res) => {
    const { ticket } = req.body;

    if (!ticket || !ticket["ticket id"] || !ticket["email of user"] || !ticket["all comments"]) {
        return res.status(400).send({ error: "Invalid payload format" });
    }

    console.log("Received ticket:", ticket);

    res.status(200).send({ message: "Ticket data received successfully" });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
