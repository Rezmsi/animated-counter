let numbers = document.querySelectorAll('.num')
let container = document.querySelector('.container')

// use flag to stop scroll event 
let flag =false

window.addEventListener('scroll', ()=>{
         
     numbers.forEach( (number)=>{

        if(window.scrollY > container.offsetTop){

            if(!flag){

                let  timer = setInterval(() => {

                    if (number.innerHTML === number.dataset.goal) {
                        clearInterval(timer);
                    }

                    number.innerHTML++;
                    flag=true

                }, 20);
            }
        }
    })
})
