const [username, pin, month, year, cvc] = document.querySelectorAll('.is-invalid')
const usernameRender = document.querySelector('.username')
const pinRender = document.querySelector('.pin')
const monthRender = document.querySelector('.month')
const yearRender = document.querySelector('.year')
const cvcRender = document.querySelector('.cvc')
const submitButton = document.querySelector('#submit')
const form = document.querySelector('.forms')
const thankView = document.querySelector('.thanks')
const thankButton = document.querySelector('#thankSubmit')
const [userWarn, pinWarn, monthWarn, yearWarn, cvcWarn] = document.querySelectorAll(".warn")

submitButton.addEventListener('click', function(){
    const valids = document.querySelectorAll('.is-invalid')
    if(valids.length === 0){
        form.style.display = "none"
        thankView.style.display = "flex"
    }
});

thankButton.addEventListener('click', function(){
    thankView.style.display = "none"
    form.style.display = "flex"
});

username.addEventListener('keyup', function(){
    usernameRender.innerHTML = this.value || usernameRender.getAttribute("data-value");
    validation(this, userWarn)
})

pin.addEventListener('keyup', function(){
    pinRender.innerHTML = this.value || pinRender.getAttribute("data-value");
    validation(this, pinWarn)

})

month.addEventListener('keyup', function(){
    monthRender.innerHTML = this.value || monthRender.getAttribute("data-value");
    validation(this, monthWarn)
})

year.addEventListener('keyup', function(){
    yearRender.innerHTML = this.value || yearRender.getAttribute("data-value");
    validation(this, yearWarn)
})

cvc.addEventListener('keyup', function(){
    cvcRender.innerHTML = this.value || cvcRender.getAttribute("data-value");
    validation(this, cvcWarn)
})


function validation(valid, warn){
    const NumberOnly = "Wrong format, numbers only";
    const blank = "Can't be blank"
    warn.innerHTML =blank
    valid.addEventListener('keyup',e=>{
        e.preventDefault();
        if(valid.value === ""){
            valid.classList.add("is-invalid") 
            valid.classList.remove("is-valid")
            warn.style.display  = "block"
        }if(valid.value !== ""){
            valid.classList.remove("is-invalid") 
            valid.classList.add("is-valid")
            warn.style.display  = "none"
            if(valid.classList.contains("pins")){
                let pattern = /[a-zA-Z()]/.test(e.target.value)
                if(pattern){
                    warn.style.display  = "block"
                    warn.innerHTML = NumberOnly
                }
            }
        }
    });
}
