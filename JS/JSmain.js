(function(){
    const header = document.querySelector('.header')   
    const scrolling__up = document.querySelector('.scrolling__up')
    
    
    window.onscroll = () =>{
        if(window.pageYOffset > 50){
            header.classList.add('header_activ')
            scrolling__up.classList.add('scrolling__up_activ')
        }
        else{
            header.classList.remove('header_activ')
            scrolling__up.classList.remove('scrolling__up_activ')
        }
    }        
}())
