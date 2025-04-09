import Produto from "../models/Produto.js";

export const index = async (req, res) => {
  try {
    const produtos = await Produto.find().exec();
    res.json(produtos);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const show = async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id).exec();
    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }
    res.json(produto);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const store = async (req, res) => {
  try {
    const dados = req.body;

    // Calcular margem percentual
    if (dados.preco_fornecedor > 0 && dados.preco_venda > 0) {
      dados.margem_percentual =
        ((dados.preco_venda - dados.preco_fornecedor) / dados.preco_fornecedor) * 100;
    } else {
      dados.margem_percentual = 0;
    }

    const produto = await Produto.create(dados);
    res.status(201).json(produto);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const update = async (req, res) => {
  try {
    const dados = req.body;

    // Calcular margem percentual
    if (dados.preco_fornecedor > 0 && dados.preco_venda > 0) {
      dados.margem_percentual =
        ((dados.preco_venda - dados.preco_fornecedor) / dados.preco_fornecedor) * 100;
    }

    const produto = await Produto.findByIdAndUpdate(req.params.id, dados, {
      new: true,
    }).exec();

    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.json(produto);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const destroy = async (req, res) => {
  try {
    const produto = await Produto.findByIdAndDelete(req.params.id).exec();
    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }
    res.status(204).json(); // Exclusão bem-sucedida sem conteúdo
  } catch (error) {
    res.status(400).send(error.message);
  }
};
