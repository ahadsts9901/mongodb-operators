import express from 'express';
const app = express();
app.use(express.json()); // body parser

import comparisonRoutes from "./routes/comparison-operators.mjs"
import logicalRoutes from "./routes/logical-operators.mjs"

app.use("/api/v1", comparisonRoutes)
app.use("/api/v1", logicalRoutes)

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})