let age = document.getElementById("in")
let result = document.getElementById("out")
function validate(){
  console.log(age)
  if (age.value>18){
    result.innerHTML="valid"
  } 
  else{
    result.innerHTML="invalid"
  }

}
