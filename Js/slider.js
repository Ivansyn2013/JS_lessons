'use srtict;'

class Slider  {
    constructor (selector, options = {}){
        this.selectorEl = document.querySelector(selector);
        if (!this.selectorEl) {
            throw new Error ('Wrong selector');
        }
        this.heigth = options.heigth ?? 720;
        this.width = options.width ?? 480;
        
        this.images = document.querySelectorAll('.slider-item');
        this.imageIdx = 0;
    }

    init(){
        this.selectorEl.style.width = `${this.width}px`;
        this.selectorEl.style.heigth = `${this.heigth}px`;

        const leftArrow = document.createElement('i');
        leftArrow.classList.add('fa-solid','fa-arrow-left','slider-leftArrow');
        this.selectorEl.append(leftArrow);

        const rigthArrow = document.createElement('i');
        rigthArrow.classList.add('fa-solid','fa-arrow-rigth','slider-rigthArrow');
        this.selectorEl.append(rigthArrow);

        const firstImg = this.images[this.imageIdx].querySelector('img');
        
        const run = () => {
            leftArrow.addEventListener('click', ()=> {

            });
            rigthArrow.addEventListener('click', ()=> {
            
            });

            this.images[this.imageIdx].classList.remove('hidden-slide');
        };

        // событие загружена ли картинка? если да то 
        if (firstImg.complete) {
            run();
            return;
        }

        const spiner = document.createElement('i');
        spiner.classList.add('fa-duotone', 'fa-spinner-third');
        this.selectorEl.prepend(spiner);

        //событие картинка загружена
        firstImg.addEventListener('load', () => {
            spiner.remove();
            run();
        });

    }
}

