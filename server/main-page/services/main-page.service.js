import mongoose from "mongoose"

const LinksForMainCarousel = mongoose.model('LinksForMainCarousel', new mongoose.Schema({}))
const MainBannerInfo = mongoose.model('MainBannerInfo', new mongoose.Schema({}))
const Icons = mongoose.model('Icons', new mongoose.Schema({}))

export async function carouselService() {
    try {
        const result = await LinksForMainCarousel.find({})
        return result
    } catch (error) {
        console.log(error)
    }
}

export async function newsService() {
    try {
        const result = await MainBannerInfo.find({})
        return result
    } catch (error) {
        console.log(error)
    }
}

export async function iconsService() {
    try {
        const result = await Icons.find({})
        return result
    } catch (error) {
        console.log(error)
    }
}