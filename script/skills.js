var nav = document.getElementsByClassName('navskill');
function changetab(event){
    for(var i = 0 ;i< nav.length;i++){
        nav[i].style.color = 'var(--light-blue)';
        nav[i].style.textShadow = '0 0 0px white';
       
    }
    
  
    event.target.style.color = "aliceblue";
    event.target.style.textShadow = "0 0 10px white";
   
}

for(var i = 0 ;i< nav.length;i++){
    nav[i].addEventListener('click',changetab);
   
}
