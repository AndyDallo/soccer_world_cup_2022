window.onbeforeunload = () => {
    window.scrollTo(0, 0)
}
function main(){  
    function addImage(){

        const container = document.querySelector('#container')
        const imgLength = 22
        for (let i = 0; i < imgLength; i++) {
            let div = document.createElement('div');
            let sourceImg = `images/${i}.jpeg`
        
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
    addImage()

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
    loader()
    
    function displayPercentage() {
        const percText = document.querySelector('.perc_text')

        window.onscroll = () => {
            const containerHeight = container.offsetHeight - window.innerHeight;
            const scrollPosition = container.getBoundingClientRect().y * - 1;
            const scrollPercentage = Math.floor((scrollPosition / containerHeight) * 100);  
            percText.innerHTML = `${scrollPercentage}%`
        }
    }
    displayPercentage()
}
main()