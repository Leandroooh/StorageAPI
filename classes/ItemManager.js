import { DataBaseManager } from "./DataBaseManager.js";

const db = new DataBaseManager("http://localhost:3000");

export class ItemManager {
	async createItem(item) {
		if (!item.name || !item.price) {
			throw new Error(
				"As informações fornecidas não são suficientes para cadastrar um novo item!",
			);
		}

		const data = {
			name: item.name,
			quantity: item.quantity,
			price: item.price,
		};

		try {
			await db.createItem("storage", data);
			console.log(`${data.name} criado com sucesso!`);
			return;
		} catch (error) {
			console.log(error.message);
		}
	}

	async listItems() {
		try {
			const data = await db.getAllData("storage");

			if (!data || data.length === 0) {
				console.log("O Banco de Dados não possui itens!");
				return "O Banco de Dados está vazio";
			}
			return data;
		} catch (error) {
			console.log(`Erro ao listar Itens: ${error.message}`);
		}
	}

	async deleteItem(id) {
		try {
			if (!id) {
				throw new Error("Você precisa informar um ID válido!");
			}

			const data = await db.getAllData("storage");
			const deleteElement = data.find((item) => item.id === id);

			if (!deleteElement) {
				throw new Error(`O item ${id} não existe em nosso banco de dados.`);
			}

			await db.deleteItem("storage", deleteElement.id);
		} catch (error) {
			console.log(error.message);
		}
	}

	async updateItem(id, updateValues) {
		if (!id) {
			throw new Error("Você precisa informar um ID válido!");
		}

		const dbInfo = await db.getAllData("storage");
		const searchData = dbInfo.find((item) => item.id === id);

		if (!searchData) {
			throw new Error("O ID informado não foi encontrado no banco de dados!");
		}

		if (
			!updateValues ||
			!updateValues.name ||
			!updateValues.quantity ||
			!updateValues.price
		) {
			throw new Error(
				"Você precisa informar os valores para serem substituidos",
			);
		}

		const { name, quantity, price } = updateValues;

		const data = {
			name: name,
			quantity: quantity,
			price: price,
		};

		db.updateItem("storage", id, data);
	}
}
