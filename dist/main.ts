
var personData = [];
var jsDOM = {
    data: {
        fname: document.getElementById('fname'),
        lname: document.getElementById('lname'),
        email: document.getElementById('email'),
        phone: document.getElementById('number'),
        city: document.getElementById('city')
    },
    btn: {
        addBtn: document.getElementById('addPerson'),
        showData: document.getElementById('showData')
    },
    personData: document.getElementById('personData')
}

var jsFunc = {
    myFunction : () => {
        jsDOM.fname.innerHTML = `First Name: ${jsDOM.fname.value}`;
        jsDOM.lname.innerHTML = `Last Name: ${jsDOM.lname.value}`;
        jsDOM.email.innerHTML = `Email: ${jsDOM.email.value}`;
        jsDOM.number.innerHTML = `Phone number: ${jsDOM.number.value}`;
        jsDOM.city.innerHTML = `City: ${jsDOM.city.value}`;

    },
    showData: () => {
        
        var parentDiv = jsDOM.personData;
        parentDiv.innerHTML = '';

        var node = document.createElement("div");
        var nodeHeader = document.createElement("h3");
        var nodeHeaderText = document. createTextNode("Person Data");
        nodeHeader.appendChild(nodeHeaderText);
        node.appendChild(nodeHeader);

        var fullname, email, phone;
        
        personData.forEach (x => {
            fullname = `${x.fname} ${x.lname}`; email = x.email; phone = x.number;
            var personData = document.createElement('p');
            var personDataText= document.createTextNode(`Name: ${fullname} Email: ${email} Phone: ${phone}`);
            personData.appendChild(personDataText);
            node.appendChild(personData);
           
        })
        parentDiv.appendChild(node);
    },
    clearFields: () => {
        Object.values(jsDOM.data).forEach(function (x: { value: string; }) {return x.value = ""}); 

    },
    addData: () => {
        personData.push({fname: jsDOM.data.fname.value, lname: jsDOM.data.lname.value, email: jsDOM.data.email.value, number: jsDOM.data.phone.value});
        
        jsFunc.clearFields();
    },
    validateForm() {
        var x = document.forms["contactForm"]["fname"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
      }
}
jsDOM.btn.addBtn.addEventListener('click', jsFunc.addData);
jsDOM.btn.showData.addEventListener('click', jsFunc.showData);