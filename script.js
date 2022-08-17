let count = 0;

const value = document.querySelector(".value");
const buttons = document.querySelectorAll(".button");


buttons.forEach(function(parameter){
    parameter.addEventListener('click', function(e){
        const style = e.currentTarget.classList;

        if(style.contains("decrease")){
            count--;
        }
        else if(style.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        value.textContent = count;
    });
});