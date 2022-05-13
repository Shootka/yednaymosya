import { Router } from "express"
import { carouselController, newsController, iconsController } from "../controllers/main-page.controller.js"

const router = new Router()

router.get('/carousel', carouselController)
router.get('/icons', iconsController)
router.get('/news', newsController)

export default router