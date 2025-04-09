import { Schema, model } from "mongoose";

const saidaSchema = new Schema(
  {
    produto: { type: Schema.Types.ObjectId, ref: "Produto", required: true },
    quantidade: { type: Number, required: true },
    data_saida: { type: Date, default: Date.now },
    preco_unitario: { type: Number, required: true },
    total: { type: Number } // será calculado
  },
  { timestamps: true }
);

// Middleware para calcular total
saidaSchema.pre("save", function (next) {
  this.total = this.quantidade * this.preco_unitario;
  next();
});

const Saida = model("Saida", saidaSchema);

export default Saida;
