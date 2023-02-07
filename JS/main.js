$(document).ready(function(){
    $('#showOptions').on('click', function() {
        let opt = document.getElementById('contentOptions');
        if(opt.classList.contains("visually-hidden")){
            opt.classList.remove("visually-hidden");
        }else{
            opt.classList.add("visually-hidden");
        }
       
        
    });
});