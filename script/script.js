const toggleBtn = document.getElementById("toggle-btn");
const navList = document.getElementById("nav-list");

toggleBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});

const dropSelect = document.getElementById("select");
const dropList = document.getElementById("drop-item");
// console.log(dropList)

var elem = document.querySelectorAll(".dropdown-item");

// console.log(elem)
Array.from(elem).forEach((e) =>
  e.addEventListener("click", () => {
    // this.parentElement.getElementsByClassName('dropdown-items')[0];
    dropSelect.innerHTML = e.textContent;
    // console.log(e);
  })
);

var fName = document.querySelector("#fname");
var lName = document.getElementById("lname");
var submitBtn = document.getElementById("submit");
var aNo = document.getElementById("aNo");
var religion = document.getElementById("religion");
var Gender = document.querySelectorAll("#gender");
// var GenderF = document.getElementById("gender");
var education = document.getElementById("select");
var dob = document.getElementById("date");
var cat = document.querySelectorAll(".c");
var No = document.getElementById("num");
var Uname;
var aadharNo;
var rel;
var Gen;
var edu;
var category;
var DOB;
var num;
submitBtn.addEventListener("click", () => {
  Uname = fName.value + " " + lName.value;
  aadharNo = aNo.value;
  rel = religion.value;
  edu = education.textContent;
  DOB = dob.value;
  num = No.value;

  Array.from(Gender).forEach((g) => {
    if (g.checked) Gen = g.value;
  });

  Array.from(cat).forEach((c) => {
    // console.log(c.checked);
    if (c.checked) {
      category = c.value;
    }
  });

  //   var temp = document.getElementById("n").innerHTML;
  //   temp = temp + ": " + Uname;
  //   document.getElementById("n").innerHTML = temp;
  //   var temp = document.getElementById("an").innerHTML;
  //   temp = temp + ": " + aadharNo;
  //   var temp = document.getElementById("r").innerHTML;
  //   temp = temp + ": " + rel;
  //   var temp = document.getElementById("no").innerHTML;
  //   temp = temp + ": " + num;
});
