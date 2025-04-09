import e from "express";
import "dotenv/config";
import "./config/db.js";
import usuario_router from "./routers/usuario.router.js";
import produto_router from "./routers/produto.routes.js";
import saida_router from "./routers/saida.routes.js";
import entrada_router from "./routers/entrada.routes.js";
import fornecedor_router from "./routers/fornecedor.routes.js";




const app = e();
app.use(e.json());
app.use("/usuario", usuario_router);
app.use("/produtos", produto_router);
app.use("/saida", saida_router);
app.use("/entrada", entrada_router);
app.use("/fornecedor", fornecedor_router);
app.listen(process.env.API_PORT, () => console.log("Server Running"));