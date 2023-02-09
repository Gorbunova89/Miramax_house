$(document).ready(function(){
    $('#showOptions').on('click', function() {
        let opt = document.getElementById('contentOptions');
        setVisually(opt); 

        let icon = document.getElementById('showOptions');
        setIcon(icon);
    });

    $('#showOptions2').on('click', function() {
        let opt = document.getElementById('contentOptions2');
        setVisually(opt);
        let icon = document.getElementById('showOptions2');
        setIcon(icon);
    });
});

function setVisually(opt) {
    if (opt.classList.contains("visually-hidden")) {
        opt.classList.remove("visually-hidden");
    } else {
        opt.classList.add("visually-hidden");
    }
};

function setIcon(icon) {
    if (icon.classList.contains("bi-arrow-down-square")) {
        icon.classList.remove("bi-arrow-down-square");
        icon.classList.add("bi-arrow-up-square");
    } else{
        icon.classList.remove("bi-arrow-up-square");
        icon.classList.add("bi-arrow-down-square");
    }

};