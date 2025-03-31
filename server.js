import express from "express";
import { ItemManager } from "./classes/ItemManager.js";

import createItemRoute from "./routes/create-item-route.js";
import listItemRoute from "./routes/list-item-route.js";
import deleteItemRoute from "./routes/delete-item-route.js";
// import updateItemRoute from "./routes/update-item-route.js";

export const Manager = new ItemManager();

const app = express();
app.use(express.json());

app.use("/storage", listItemRoute);
app.use("/storage", createItemRoute);
app.use("/storage", deleteItemRoute);
// app.use("/storage", updateItemRoute);

const PORT = 3001;
app.listen(PORT, () => console.log("Server started at port: 3000"));
