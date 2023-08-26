const express = require("express");
const app = express();

app.get("/api/v1/tours", (req, res) => {
    res.status(200)
        .json({message:'hello from server'});
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});