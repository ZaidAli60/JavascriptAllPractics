









  const inputName = document.getElementById("inputname")
  const rollNo = document.getElementById("inputroll")
  const formControl = document.getElementById("formcontrol")
  
  formControl.addEventListener("submit",function (e){
  e.preventDefault();
  
  var obj = {
  name: inputName.value,
  rollno:rollNo.value
  }
  // app.database(app).ref("obj").set("zaid")
  // const students = app.database().ref('student').set("zaid")
console.log(obj)


  
  emptyInput();
  })
  
  
  function emptyInput(){
  inputName.value = "";
  rollNo.value = "";
  }