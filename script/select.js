var select = document.getElementsByClassName('select');
var coding = document.getElementsByName('coding');
var design = document.getElementsByName('design');
var platform = document.getElementsByName('platform');

function changepage(event){
    for(var i = 0 ;i< select.length;i++){
        select[i].style.display = 'none';
    }
    switch(event.target){
        case coding[0]:
            select[0].style.display = 'flex';
            break;
        case design[0]:
            select[1].style.display = 'flex';
            break;
        case platform[0]:
            select[2].style.display = 'flex';
            break; 
    }
}

coding[0].addEventListener('click',changepage);
design[0].addEventListener('click',changepage);
platform[0].addEventListener('click',changepage);

