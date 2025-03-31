import express from "express";
import { Manager } from "../server.js";

const Router = express.Router();

Router.post("/", async (req, res) => {
	try {
		const { name, quantity, price } = req.body;
		const itemData = { name, quantity, price };

		await Manager.createItem(itemData);
		console.log();

		res.status(201).json(`O item #${id} foi criado com sucesso!`);
	} catch (error) {
		res
			.status(400)
			.json(
				`ERRO! Houveram problemas ao criar o item #${itemData.name}. ${error.message} `,
			);
	}
});

export default Router;
