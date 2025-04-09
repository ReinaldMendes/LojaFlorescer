import Entrada from "../models/Entrada.js";

export const index = async (req, res) => {
  try {
    const entradas = await Entrada.find().populate("produto fornecedor").exec();
    res.json(entradas);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const show = async (req, res) => {
  try {
    const entrada = await Entrada.findById(req.params.id).populate("produto fornecedor").exec();
    if (!entrada) {
      return res.status(404).json({ error: "Entrada não encontrada" });
    }
    res.json(entrada);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const store = async (req, res) => {
  try {
    const entrada = await Entrada.create(req.body);
    res.status(201).json(entrada);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const update = async (req, res) => {
  try {
    const entrada = await Entrada.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).exec();
    if (!entrada) {
      return res.status(404).json({ error: "Entrada não encontrada" });
    }
    res.json(entrada);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const destroy = async (req, res) => {
  try {
    const entrada = await Entrada.findByIdAndDelete(req.params.id).exec();
    if (!entrada) {
      return res.status(404).json({ error: "Entrada não encontrada" });
    }
    res.status(204).json();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
