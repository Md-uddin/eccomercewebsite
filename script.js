window.addEventListener('scroll',function(){
    const header = document.querySelector("header");
    console.log('scroll')
    header.classList.toggle("sticky",window.scrollY>0)
})