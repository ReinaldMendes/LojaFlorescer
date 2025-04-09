import { Schema, model } from "mongoose";

const produtoSchema = new Schema(
  {
    codigo: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    unidade: {
      type: String,
      required: true,
    },
    fornecedor: {
      type: String,
      required: true,
    },
    estoque_minimo: {
      type: Number,
      default: 0,
    },
    estoque_inicial: {
      type: Number,
      default: 0,
    },
    estoque_atual: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["ativo", "inativo"],
      default: "ativo",
    },
    preco_fornecedor: {
      type: Number,
      default: 0,
    },
    preco_venda: {
      type: Number,
      default: 0,
    },
    margem_percentual: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Produto = model("Produto", produtoSchema);

export default Produto;
