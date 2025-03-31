import { ItemManager } from "./classes/ItemManager.js";

const Manager = new ItemManager();

async function criar() {
	try {
		const teclado = { name: "Teclado", quantity: "22", price: "99" };
		await Manager.createItem(teclado);
	} catch (error) {
		console.error(error.message);
	}
}

async function listar() {
	try {
		await Manager.listItems("storage");
	} catch (error) {
		console.error(error.message);
	}
}
async function testarListagem() {
	const itens = await Manager.listItems();
	console.log("Itens listados:", itens);
}

const deleteItem = async () => {
	try {
		await Manager.deleteItem("a78e");
	} catch (error) {
		console.log(`Erro ao deletar Itens: ${error.message}`);
	}
};

const editar = async () => {
	try {
		const data = {
			name: "Placa",
			price: "999",
			quantity: "32",
		};

		await Manager.updateItem("eee9d", data);
		console.log("Item editado!");
	} catch (error) {
		console.log(`${error.message}`);
	}
};

testarListagem();
editar();
testarListagem();
