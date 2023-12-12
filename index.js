const stars = document.querySelectorAll(".star");

stars.forEach((star,index)=>{
     star.addEventListener("click" , ()=>{
          for(let i = index; i >= 0; i--){
            stars[i].classList.add('marked');
          }
     })
})


stars.forEach((star,index)=>{
    star.addEventListener("dblclick" , ()=>{

        let marked = (stars[index].classList[1]);
        for(let i = index; i < stars.length; i++){
            if(marked === "marked"){
                stars[i].classList.remove('marked');
            }
        }
       
        
    })
})







