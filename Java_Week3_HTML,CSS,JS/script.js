let students = [];
function addData() {
  
   var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var website = document.getElementById("website").value;
  var imagelink = document.getElementById("imagelink").value;

  var radio = document.getElementsByName('gender');
  var genderValue = '';

  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked)
      genderValue = radio[i].value;
  }

  var checkboxes = document.getElementsByName('skill');
  var skill = '';
  var sk = 0;
  for (var checkbox of checkboxes) {
    if (checkbox.checked) {
      if (skill == '') {
        skill = skill + checkbox.value;
      }
      else {
        skill = skill + ', ' + checkbox.value;
      }
    }
  }


  if (!skill == '') {
    var student = {
      name: name, email: email, website: website, imagelink: imagelink, gender: genderValue, skill: skill
    }

    if (!sessionStorage.getItem('StudentsJSON')) {
      students.push(student);
      sessionStorage.setItem('StudentsJSON', JSON.stringify(students));

    }
    else {
      var stored = JSON.parse(sessionStorage.getItem('StudentsJSON'));
      stored.push(student);
      sessionStorage.setItem('StudentsJSON', JSON.stringify(stored));
    }

    document.querySelector('form').reset();
    printTable();
  }
  else {
    var err = document.getElementById('alert');
    var division = `<div class="alert alert-warning" role="alert">
    Select Atleast one skill
  </div>`;

    err.innerHTML += division;

  }
}

function printTable() {
  if (!sessionStorage.getItem('StudentsJSON')) {

  }
  else if (JSON.parse(sessionStorage.getItem('StudentsJSON')).length >= 1) {
    var table = document.getElementById('studentTable');

  }
  var preObj = JSON.parse(sessionStorage.getItem('StudentsJSON'));

  if (preObj != null) {
    if (preObj.length == 1) {
      var table = document.getElementById('studentTable');

      var table = document.getElementById('studentTable');

      for (var i = preObj.length - 1; i < preObj.length; i++){
        var row =
          `<tr class="newtr">
              <td>${preObj[i].name}<br>${preObj[i].gender}<br>${preObj[i].email}<br><a href="https://${preObj[i].website}" target="_blank">${preObj[i].website}</a><br>${preObj[i].skill}</td>
              <td><img src=${preObj[i].imagelink} height="100" width="100" ></td>
          </tr>`

          row.classname="fade";
        table.innerHTML += row;
      }
    }
    else {
      var table = document.getElementById('studentTable');

      for (var i = preObj.length - 1; i < predObj.length; i++) {
        var row =
        `<tr class="newtr">
        <td>${preObj[i].name}<br>${preObj[i].gender}<br>${preObj[i].email}<br><a href="https://${preObj[i].website}" target="_blank">${preObj[i].website}</a><br>${preObj[i].skill}</td>
        <td><img src=${preObj[i].imagelink} height="100" width="100"></td>
    </tr>`

        table.innerHTML += row;
      }
    }
  }
  prevData();
  
}


function prevData() {

  var preObj = JSON.parse(sessionStorage.getItem('StudentsJSON'));

  var table = document.getElementById('studentTable');
  var header =
      `<tr class="heads">
      <th>Description</th>
      <th>Image</th>
    </tr>`

    table.innerHTML += header;

  

  if (preObj != null) {

    for (var i = 0; i < preObj.length; i++) {

      var row =
      `<tr class="newtr">
      <td>${preObj[i].name}<br>${preObj[i].gender}<br>${preObj[i].email}<br><a href="https://${preObj[i].website}" target="_blank">${preObj[i].website}</a><br>${preObj[i].skill}</td>
      <td><img src=${preObj[i].imagelink} height="100" width="100" onclick="window.open('${preObj[i].imagelink}')"></td>
  </tr>`

      table.innerHTML += row;
    }
  }
}


