
/*let personData = [];
let jsDOM = {
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

let jsFunc = {
    myFunction : () => {
        jsDOM.fname.innerHTML = `First Name: ${jsDOM.fname.value}`;
        jsDOM.lname.innerHTML = `Last Name: ${jsDOM.lname.value}`;
        jsDOM.email.innerHTML = `Email: ${jsDOM.email.value}`;
        jsDOM.number.innerHTML = `Phone number: ${jsDOM.number.value}`;
        jsDOM.city.innerHTML = `City: ${jsDOM.city.value}`;

    },
    showData: () => {
        
        let parentDiv = jsDOM.personData;
        parentDiv.innerHTML = '';

        let node = document.createElement("div");
        let nodeHeader = document.createElement("h3");
        let nodeHeaderText = document. createTextNode("Person Data");
        nodeHeader.appendChild(nodeHeaderText);
        node.appendChild(nodeHeader);

        let fullname, email, phone;
        
        personData.forEach (x => {
            fullname = `${x.fname} ${x.lname}`; email = x.email; phone = x.number;
            let personData = document.createElement('p');
            let personDataText= document.createTextNode(`Name: ${fullname} Email: ${email} Phone: ${phone}`);
            personData.appendChild(personDataText);
            node.appendChild(personData);
           
        })
        parentDiv.appendChild(node);
    },
    clearFields: () => {
        Object.values(jsDOM.data).forEach(x => x.value = " ");

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
jsDOM.btn.showData.addEventListener('click', jsFunc.showData);*/