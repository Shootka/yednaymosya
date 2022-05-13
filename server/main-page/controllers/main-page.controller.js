import mongoose from "mongoose"
import { carouselService, newsService, iconsService } from "../services/main-page.service.js"

export async function carouselController(req, res) {
    try {
       const result = await carouselService()
       res.send(result)
    } catch (error) {
        console.log(error)
    }
}

export async function newsController(req, res) {
    try {
       const result = await newsService()
       res.send(result)
    } catch (error) {
        console.log(error)
    }
}

export async function iconsController(req, res) {
    try {
       const result = await iconsService()
       res.send(result)
    } catch (error) {
        console.log(error)
    }
}