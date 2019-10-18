import {
  Router
} from "express";
const router = Router();
import Controllers from "../controllers";
import Validators from "../validators";
import Middlewares from "../middlewares";

const validateInputMiddleware = Middlewares.Validation.validateInput;
const creationValidator = Validators.Blog.create();

router.get("/", Controllers.Blog.getAll);
router.post("/", [creationValidator, validateInputMiddleware], Controllers.Blog.create);

export default router;