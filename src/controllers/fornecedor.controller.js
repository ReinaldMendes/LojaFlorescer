import Fornecedor from "../models/Fornecedor.js";

export const index = async (req, res) => {
  try {
    const fornecedores = await Fornecedor.find().exec();
    res.json(fornecedores);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const show = async (req, res) => {
  try {
    const fornecedor = await Fornecedor.findById(req.params.id).exec();
    if (!fornecedor) {
      return res.status(404).json({ error: "Fornecedor não encontrado" });
    }
    res.json(fornecedor);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const store = async (req, res) => {
  try {
    const fornecedor = await Fornecedor.create(req.body);
    res.status(201).json(fornecedor);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const update = async (req, res) => {
  try {
    const fornecedor = await Fornecedor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).exec();
    if (!fornecedor) {
      return res.status(404).json({ error: "Fornecedor não encontrado" });
    }
    res.json(fornecedor);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const destroy = async (req, res) => {
  try {
    const fornecedor = await Fornecedor.findByIdAndDelete(req.params.id).exec();
    if (!fornecedor) {
      return res.status(404).json({ error: "Fornecedor não encontrado" });
    }
    res.status(204).json();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
