import express from "express";
import { Manager } from "../server.js";

const Router = express.Router();

Router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		await Manager.deleteItem(id);
		res.status(200).json(`O item #${id} foi deletado com sucesso!`);
	} catch (error) {
		res
			.status(400)
			.json(
				`ERRO! Houveram problemas ao deletar o item #${id}. ${error.message} `,
			);
	}
});

export default Router;
