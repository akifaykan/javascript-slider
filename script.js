class Slider {
    constructor(slider){
        this.leftArrow = document.querySelector('.arrow__left')
        this.rightArrow = document.querySelector('.arrow__right')
        this.imgs = document.querySelectorAll('.slider__image')
        this.slideItem = document.querySelectorAll('.slider__item')
        this.timeout = 4000
        this.time = setInterval(()=>this.nextSlide(), this.timeout)
        this.min = 1
        this.max = this.slideItem.length

        this.loadedImgs()

        slider.addEventListener('mouseenter', ()=> this.pouseSlider())
        slider.addEventListener('mouseleave', ()=> this.startSlider())

        this.leftArrow.addEventListener('click', ()=> this.prevSlide())
        this.rightArrow.addEventListener('click', ()=> this.nextSlide())
    }

    loadedImgs(){
        this.imgs.forEach((item, index) =>{
            index++
            item.innerHTML = `<img src="img/slider${index}.jpg">`
        })
    }

    pouseSlider(){
        clearInterval(this.time)
    }

    startSlider(){
        this.time = setInterval(()=>this.nextSlide(), this.timeout)
    }

    prevSlide(){
        this.min--
        this.slideProcess()
    }

    nextSlide(){
        this.min++
        this.slideProcess()
    }

    slideProcess(){
        if (this.min > this.max) this.min = 1
        if (this.min < 1) this.min = this.max

        this.removeClassess()
        this.addClassess()
    }

    removeClassess(){
        this.slideItem.forEach(item => item.classList.remove('active'))
    }

    addClassess(){
        document.getElementById(`slider${this.min}`).classList.add('active')
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    const slider = document.querySelector('.slider')
    if (!slider) return
    new Slider(slider)
})
