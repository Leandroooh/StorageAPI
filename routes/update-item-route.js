import express from "express";
import { Manager } from "../server.js";

const Router = express.Router();

Router.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { name, quantity, price } = req.body;
		const updateData = { name, quantity, price };

		Manager.updateItem(id, updateData);

		res.status(200).json(`O item #${id} foi alterado com sucesso!`);
	} catch (error) {
		res
			.status(400)
			.json(
				`ERRO! Houveram problemas ao deletar o item #${id}. ${error.message} `,
			);
	}
});

export default Router;
