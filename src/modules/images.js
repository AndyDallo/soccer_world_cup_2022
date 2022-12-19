function addImage(){

    const container = document.querySelector('#container')
    const imgLength = 22
    for (let i = 0; i < imgLength; i++) {
        let div = document.createElement('div');
        let sourceImg = `/images/${i}.jpeg`
    
        div.classList.add('imgFrame')
        div.style.transition = 'opacity 1000ms'
        div.style.opacity = 0
        div.style.width = 81.771 + 'vw'
        div.style.height = 97.037 + 'vh'
        div.style.marginBottom = 166 + 'px'
        div.style.backgroundImage = `url(${sourceImg})`
        
        container.appendChild(div) 
    }
    const images = Array.from(document.querySelectorAll('.imgFrame'))
    images[0].style.transform = 'translate3d(0, 50%, 0)'
    const lazyLoad = target => {
        const io = new IntersectionObserver((entries, observer ) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const img = entry.target
                    img.style.opacity = 1
                    observer.disconnect()
                }
            })
        })  
        io.observe(target)
    }
    images.forEach(lazyLoad)
}
export default addImage