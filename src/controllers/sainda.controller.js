import Saida from "../models/Saida.js";

export const index = async (req, res) => {
  try {
    const saidas = await Saida.find().populate("produto").exec();
    res.json(saidas);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const show = async (req, res) => {
  try {
    const saida = await Saida.findById(req.params.id).populate("produto").exec();
    if (!saida) {
      return res.status(404).json({ error: "Saída não encontrada" });
    }
    res.json(saida);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const store = async (req, res) => {
  try {
    const saida = await Saida.create(req.body);
    res.status(201).json(saida);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const update = async (req, res) => {
  try {
    const saida = await Saida.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).exec();
    if (!saida) {
      return res.status(404).json({ error: "Saída não encontrada" });
    }
    res.json(saida);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const destroy = async (req, res) => {
  try {
    const saida = await Saida.findByIdAndDelete(req.params.id).exec();
    if (!saida) {
      return res.status(404).json({ error: "Saída não encontrada" });
    }
    res.status(204).json();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
