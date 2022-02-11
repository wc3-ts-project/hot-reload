import "./modules/utils/index"
import "./modules/obj-edit/index"
import "./modules/obj-edit/test"
import { initGlobals } from "./src/global"
import { setTimeout } from "./modules/utils/timer"
import "./modules/wts-parser/index"
import "./modules/hot-reload/index"

InitGlobals = () => {
    initGlobals()
    setTimeout(0., () => {
        require("src.index")
    })
}