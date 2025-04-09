import { Schema, model } from "mongoose";

const fornecedorSchema = new Schema(
  {
    nome: { type: String, required: true },
    cnpj: { type: String },
    telefone: { type: String },
    email: { type: String },
    endereco: { type: String },
    produtos_fornecidos: [{ type: String }] // lista de produtos ou codigos
  },
  { timestamps: true }
);

const Fornecedor = model("Fornecedor", fornecedorSchema);

export default Fornecedor;
