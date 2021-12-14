const dataModel = new DataModel()
const renderer = new Renderer()

const buttons = document.querySelectorAll(".menu__item");
let activeButton = document.querySelector(".menu__item.active");

buttons.forEach(item => {
    const text = item.querySelector(".menu__text");
    item.addEventListener("click", function() {
        if (this.classList.contains("active")) return;
        this.classList.add("active");  
        if (activeButton) {
            activeButton.classList.remove("active");
            activeButton.querySelector(".menu__text").classList.remove("active");
        }
        handleTransition(this, text);
        activeButton = this;
    });

    
});
function handleTransition(item, text) {

    item.addEventListener("transitionend", (e) => {

        if (e.propertyName != "flex-grow" || 
        !item.classList.contains("active")) return;
        text.classList.add("active");        
    });
}