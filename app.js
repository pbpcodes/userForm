

function animatedForm(){
    const arrows = document.querySelectorAll(".fa-angle-down");

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextFormElement = parent.nextElementSibling;

            //Check form validation

            if(input.type === "text" && uservalidation(input)){
                nextSlide(parent, nextFormElement);
            } 
            else if(input.type === "email" && emailValidation(input)){
                nextSlide(parent, nextFormElement);
            }
            else if(input.type === "password" && uservalidation(input)){
                nextSlide(parent, nextFormElement);
            }
            else{
                parent.style.animation = "shake 0.3s ease"
            }

            //Keep the animation going
            parent.addEventListener('animationend', () =>{
                parent.style.animation = "";
            });

        });

    });
}

function uservalidation(user){
    if(user.value.length < 6 ){
        console.log('Less than 6 characters in not allowed!');
    }else{
        return true;

    }

}

function emailValidation(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(validation.test(email.value)){
        return true;
    } else{
        return false;
    }
}

function nextSlide(parent, nextFormElement){
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextFormElement.classList.add('active');
}

animatedForm();