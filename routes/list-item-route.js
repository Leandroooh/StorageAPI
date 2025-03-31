import express from "express";
import { Manager } from "../server.js";

const Router = express.Router();

Router.get("/", async (_req, res) => {
	try {
		const itemsList = await Manager.listItems();
		res.status(200).json({ itemsList });
	} catch (error) {
		res
			.status(400)
			.json(
				`ERRO! Houveram problemas ao deletar o item #${id}. ${error.message} `,
			);
	}
});

export default Router;
