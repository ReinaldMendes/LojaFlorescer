import { Schema, model } from "mongoose";

const entradaSchema = new Schema(
  {
    produto: { type: Schema.Types.ObjectId, ref: "Produto", required: true },
    fornecedor: { type: Schema.Types.ObjectId, ref: "Fornecedor" },
    quantidade: { type: Number, required: true },
    data_entrada: { type: Date, default: Date.now },
    preco_unitario: { type: Number, required: true },
    total: { type: Number } // será calculado
  },
  { timestamps: true }
);

// Middleware para calcular total
entradaSchema.pre("save", function (next) {
  this.total = this.quantidade * this.preco_unitario;
  next();
});

const Entrada = model("Entrada", entradaSchema);

export default Entrada;
