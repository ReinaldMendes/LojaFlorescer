import { Router } from "express";
import {
  index,
  show,
  store,
  destroy,
} from "../controllers/sainda.controller.js";
import jwtAuthenticator from "../middlewares/jwt-autenticator.js";
import authorizer from "../middlewares/authorizer.js";

const router = Router();

router.use(jwtAuthenticator);
router.use(authorizer("ADMINISTRATOR"));

router.get("/", index); // Listar todas as saidas
router.get("/:id", show); // Buscar uma saida por ID
router.post("/", store); // Cria saida / venda
router.delete("/:id", destroy); // Deletar uma venda por ID (restaura o estoque)

export default router;