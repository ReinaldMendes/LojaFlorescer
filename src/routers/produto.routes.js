import { Router } from "express";
import {
  index,
  show,
  store,
  update,
  destroy,
} from "../controllers/produto.controller.js";
import jwtAuthenticator from "../middlewares/jwt-autenticator.js";
import authorizer from "../middlewares/authorizer.js";

const router = Router();

router.use(jwtAuthenticator);
router.use(authorizer("ADMINISTRATOR"));

router.get("/", index); // Listar todos os produtos
router.get("/:id", show); // Buscar um produto por ID
router.post("/", store); // Criar produto
router.put("/:id", update); // Atualizar produto por ID
router.delete("/:id", destroy); // Deletar produto por ID

export default router;