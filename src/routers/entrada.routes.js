import { Router } from "express";
import {
  index,
  show,
  store,
  update,
  destroy,
} from "../controllers/entrada.controller.js";
import jwtAuthenticator from "../middlewares/jwt-autenticator.js";
import authorizer from "../middlewares/authorizer.js";

const router = Router();

router.use(jwtAuthenticator);
router.use(authorizer("ADMINISTRATOR"));

router.get("/", index); // Listar todas as entradas 
router.get("/:id", show); // Buscar uma entradapor ID
router.post("/", store); // Criar uma nova entrada
router.put("/:id", update); // Atualizar uma entrada por ID
router.delete("/:id", destroy); // Deletar uma entrada por ID

export default router;