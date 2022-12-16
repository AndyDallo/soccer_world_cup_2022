import addImage from './modules/images.js'
import loader from './modules/loader.js'
import displayPercentage from './modules/scrollPercentage.js'

window.onbeforeunload = () => {
    window.scrollTo(0, 0)
}
function main(){  
    addImage()
    loader()
    displayPercentage()
}
main()