function loader(){

    const loaderNum = document.querySelector('.loaderNum')
    const textTitle1 = document.querySelector('.text_title1')
    const textTitle2 = document.querySelector('.text_title2')
    const perc = document.querySelector('#perc')
    const images = Array.from(document.querySelectorAll('.imgFrame'))
    images[0].style.transition = 'transform 2000ms cubic-bezier(0.42, 0, 0.58, 1)'
    images[0].style.willChange = 'transform'
    function randomNum() {
        return Math.floor((Math.random() * 3) + 1)
     }

    let count = 0

    const incrLoader = setInterval(() => {

        document.body.style.overflow = 'hidden'
        count = count + randomNum()

        if(count < 89) {
            loaderNum.innerHTML = `${count}'`
        }

    }, randomNum() * 100)

    window.onload = () => {
        
        clearInterval(incrLoader)

        loaderNum.innerHTML = `${90}'`
        loaderNum.style.transform = 'translate3d(0, -101%, 0)'
        container.style.transform = 'translate3d(0, 0vh, 0)'
        document.body.style.overflow = 'initial'
        images[0].style.transform = 'translate3d(0, 0, 0)'
        
        
       

        setTimeout(() => {
            textTitle1.style.transform = 'translate3d(0, 0, 0)'
            textTitle2.style.transform = 'translate3d(0, 0, 0)'
            perc.style.opacity = 1
        }, 1000);
    }
}
export default loader