
function displayPercentage() {
    const percText = document.querySelector('.perc_text')

    window.onscroll = () => {
        const containerHeight = container.offsetHeight - window.innerHeight;
        const scrollPosition = container.getBoundingClientRect().y * - 1;
        const scrollPercentage = Math.floor((scrollPosition / containerHeight) * 100);  
        percText.innerHTML = `${scrollPercentage}%`
    }
}
export default displayPercentage