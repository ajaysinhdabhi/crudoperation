function validateForm(){

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var password = document.getElementById("password").value;
  var date = document.getElementById("date").value;
  var gender = document.querySelector('input[name=gender]:checked').value;
  


    if(name==""){
      alert("Name is required");
      return false;
    }
    if(email==""){
      alert("Email is required");
      return false;
    }
    else if(!email.includes('@')){
      alert("Invalid email");
      return false;
    }
    if(number==""){
      alert("phone number is required");
      return false;
    }
    else if(number<1){
      alert("Invalid mobile number");
      return false;
    }
    if(password==""){
      alert("password is required");
      return false;
    }
    var check = /^[0-9]{4}-[0-9]{2}-[0-9]{2}/
    if(check.test(date) == false){
      alert("date is required");
      console.log("Inside");
      return false;
    }
    else if(check.test(date) == true){
      return true
    }
    if(gender==""){
      alert("date is required");
      return false;
    }

    return true;
  
}




function showData() {
  var peopleList;

  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  var html = "";
  peopleList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.email + "</td>";
    html += "<td>" + element.number + "</td>";
    html += "<td>" + element.password + "</td>";
    html += "<td>" + element.date + "</td>";
    html += "<td>" + element.gender + "</td>";
    html +=
      '<td><button onclick="deleteData(' +
      index +
      ')"class="btn btn-success mx-2">delete</button><button data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="updateData(' +
      index +
      ')"class="btn btn-warning">Edit</button>';
    html += "</tr>";
  });

  document.querySelector("#crudTable tbody").innerHTML = html;
}

// when load documnet

//add data
function manageData() {
  // document.getElementById("myForm").reset();

  if(validateForm()==true){

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var password = document.getElementById("password").value;
  var date = document.getElementById("date").value;
  var gender = document.querySelector('input[name=gender]:checked').value;

  var peopleList;

  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  peopleList.push({
    name: name,
    email: email,
    number: number,
    password: password,
    date: date,
    gender: gender,
  });

  localStorage.setItem("peopleList", JSON.stringify(peopleList));
  showData();

  // document.getElementById("name").value = "";
  // document.getElementById("email").value = "";
  // document.getElementById("number").value = "";
  // document.getElementById("password").value = "";
  // document.getElementById("date").value = "";
  // document.querySelector('input[name=gender]:checked').value = "";

  }
  
}

// Delete

function deleteData(index) {


  conf = confirm("want to delete data?");
  if(conf){
  var peopleList;
  // if (localStorage.getItem("peopleList") == null) {
  //   peopleList = [];
  // } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  // }

  peopleList.splice(index, 1);
  localStorage.setItem("peopleList", JSON.stringify(peopleList));
  showData();
  
  }
}

// Edit
function updateData(index) {
  document.getElementById("saveBtn").style.display = "none";
  document.getElementById("Update").style.display = "block";

  var peopleList;

  // if (localStorage.getItem("peopleList") == null) {
  //   peopleList = [];
  // } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  // }

  document.getElementById("name").value = peopleList[index].name;
  document.getElementById("email").value = peopleList[index].email;
  document.getElementById("number").value = peopleList[index].number;
  document.getElementById("password").value = peopleList[index].password;
  document.getElementById("date").value = peopleList[index].date;
  document.querySelector('input[name=gender]:checked').value = peopleList[index].gender;

  document.querySelector("#Update").onclick = function () {

    if(validateForm()==true){

    peopleList[index].name = document.getElementById("name").value;
    peopleList[index].email = document.getElementById("email").value;
    peopleList[index].number = document.getElementById("number").value;
    peopleList[index].password = document.getElementById("password").value;
    peopleList[index].date = document.getElementById("date").value;
    peopleList[index].gender = document.querySelector('input[name=gender]:checked').value;

    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("password").value = "";
    document.getElementById("date").value = "";
    document.querySelector('input[name=gender]:checked').value = "";

    document.getElementById("saveBtn").style.display = "block";
    document.getElementById("Update").style.display = "none";
    }
  };
}

