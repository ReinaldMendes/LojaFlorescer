import { Router } from "express";
import {
  index,
  show,
  store,
  update,
  destroy,
} from "../controllers/fornecedor.controller.js";
import jwtAuthenticator from "../middlewares/jwt-autenticator.js";
import authorizer from "../middlewares/authorizer.js";

const router = Router();

router.use(jwtAuthenticator);
router.use(authorizer("ADMINISTRATOR"));

router.get("/", index); // Listar todos os fornecedores
router.get("/:id", show); // Buscar um fornecedor por ID
router.post("/", store); // Criar um novo forncedor
router.put("/:id", update); // Atualizar um fornecedor por ID
router.delete("/:id", destroy); // Deletar um fornecedorpor ID

export default router;