// Hämta pristabellen
const priceRow = document.querySelector(".priceRow");
// hämta option tabellen
const optionRow = document.querySelector(".optionRow");
// hämta addBtn
const addBtn = document.querySelector(".addBtn");
// Hämta neka-knapp
const acceptBtn = document.querySelector(".acceptBtn");
//Godkänn -knapp
const denyBtn = document.querySelector(".denyBtn");
// option table
const optionTable = document.querySelector(".option-table");
// giltig till
const offertDate = document.querySelector(".offert-date");
// utan moms
const sumWithoutTax = document.querySelector(".sumWithoutTax");
//moms
const sumTax = document.querySelector(".sumTax");
//total price
const sumWithTax = document.querySelector(".sumWithTax");
//scroll_btn
const btnScroll = document.querySelector(".btn_scroll")
//prisförslag
const priceSection = document.querySelector("#price-section")

const nextStep = document.querySelector(".nextStep")
// Get the modal
const modal = document.getElementById("myModal");
// Get the button that opens the modal
const messageBtn = document.getElementById("messageBtn");
// Get the <span> element that closes the modal
const closeForm = document.getElementsByClassName("close")[0];
//skicka meddelande
const sendBtn = document.querySelector(".sendMessage")
// agree terms btn
const agreeTermsBtn = document.querySelector(".agreeTerms")
//feedback
const invalidFeedback = document.querySelector(".invalid_feedback")


//Form inputs
const modalForm = document.querySelector(".modalForm")
const nameInput = document.querySelector(".nameInput")
const emailInput = document.querySelector(".emailInput")
const subjectInput = document.querySelector(".subjectInput")
const messageInput = document.querySelector(".messageInput")

// Skapa en array med objekt av värden som ska läggas till i pristabellen
let priceValues = [
  {
    desc: "arbetsmoment1",
    quantity: 2,
    price: 1000,
    total: 1000,
  },
  {
    desc: "arbetsmoment2",
    quantity: 4,
    price: 2000,
    total: 2000,
  },
  {
    desc: "arbetsmoment3",
    quantity: 5,
    price: 3000,
    total: 3000,
  },
];
// En array med object av värden som ligger i valbara alternativ
let optionvalues = [
  {
    id: 0,
    desc: "option1",
    quantity: 2,
    price: 1000,
    total: 1000,
  },
  {
    id: 1,
    desc: "option2",
    quantity: 4,
    price: 2000,
    total: 2000,
  },
  {
    id: 2,
    desc: "option3",
    quantity: 4,
    price: 2000,
    total: 2000,
  }
];
//Modal Window
// When the user clicks on the button, open the modal
messageBtn.addEventListener('click', function() {
    modal.style.display = "block";
}) 

// When the user clicks on <span> (x), close the modal
closeForm.addEventListener('click', function() {
  modal.style.display = "none";
})
// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) { 
    if (event.target == modal) {
    modal.style.display = "none";
    }
})
// Scroll ner till prisförslaget
btnScroll.addEventListener('click', function(e) {
priceSection.scrollIntoView({behavior: "smooth"})
})
// Send message. Laddar om sidan 
modalForm.addEventListener('submit', function() {
})
//Validera formlär

// räkna ut totalpriset
const calcSum = function () {
  let arr = [];
  let total = priceValues.map((v) => {
    arr.push(v.total);
  });
  // console.log(arr);
  const sum = arr.reduce((cur, val) => cur + val);

  // Skriva ut totalpriset
  sumWithTax.innerHTML = `${sum} SEK`;
  sumTax.innerHTML = `${sum * 0.2} SEK`;
  sumWithoutTax.innerHTML = `${sum * 0.8} SEK`;
};
calcSum();

// lägga in värden i pristabellen
const addTableRow = function () {
  // loopa igenom priceValue och lägga in värden i pristabellen
  priceRow.innerHTML = " ";

  priceValues.forEach((priceVal) => {
    //lägga in värden i tabellen

    if(priceVal.id >= 0) {
       priceRow.innerHTML += `<tr>
      <th scope="row">${priceVal.desc}</th>
          <td>${priceVal.quantity}</td>
          <td>${priceVal.price}</td>
          <td>${priceVal.total}</td>
          <td>
          <button class="fas fa-times-circle table-trash" name="btnDel" id="${priceVal.id}"></button>
          </td>
      </tr>`;
    }
    else {
      priceRow.innerHTML += `<tr>
      <th scope="row">${priceVal.desc}</th>
          <td>${priceVal.quantity}</td>
          <td>${priceVal.price}</td>
          <td>${priceVal.total}</td>
          <td></td>
      </tr>`;
    }
  });
};

addTableRow();

//lägg in värden i valbara alternativ -tabellen
const addOptionRow = function () {
  optionRow.innerHTML = " ";
    optionvalues.forEach((optionVal) => {
      //lägga in värden i tabellen
      optionRow.innerHTML += `<tr>
    <td>
      <div class="custom-control custom-checkbox checkbox-lg">
       <input type="checkbox" class="custom-control-input checkbox" id="${optionVal.id}">
       <label class="custom-control-label" for="${optionVal.id}"></label>
      </div>
    </td>
    <th scope="row">${optionVal.desc}</th>
        <td>${optionVal.quantity}</td>
        <td>${optionVal.price}</td>
        <td>${optionVal.total}</td>
    </tr>`;
    });
  }

priceRow.addEventListener('click', function(e) {
  if(e.target.name == "btnDel") {
    remOption(e)
  }
})
const remOption = function(e) {
  priceValues.forEach(val => {
    if(val.id == e.target.id)
    //Lägger till option-värder i optionarray
    optionvalues.push(val)
    //filtrerar prislistan tar bort option som är ångrade
    priceValues = priceValues.filter(val => val.id != e.target.id )
    addOptionRow()
    calcSum()
  })
  addTableRow()
}

addOptionRow();

const checkbox = optionRow.querySelectorAll(".checkbox");
// console.log(checkbox)

optionRow.addEventListener("click", function (e) {
  // console.log(e.target.checked, e.target.id);
  let check = e.target.checked;
  let cb_id = e.target.id;
  // console.log(check, cb_id);
  //Lägg till alternativ i prisförslaget
  addOption(check, cb_id);

  // filtrera bort valt alternativ
  filterOption(check, cb_id);
});

// Lägg till knapp
addBtn.addEventListener("click", function () {
  addTableRow();
  addOptionRow();
  calcSum();
});
const addOption = function (check, cb_id) {
  // console.log(check, cb_id);
  optionvalues.forEach((val) => {
    if (val.id == cb_id && check == true) {
      priceValues.push(val);
    }
  });
};
const filterOption = function (check, cb_id) {
  if (check == true) {
    optionvalues = optionvalues.filter((opt) => opt.id != cb_id);
  }
};

// option btns div
const optionInnerText = document.querySelector(".option-innerText");

// Accept knapp
acceptBtn.addEventListener("click", function () {

  if(!agreeTermsBtn.checked) {
    
  invalidFeedback.innerHTML = `<div class="text-center">Please accept Terms and Conditions to continue</div>`
  }
  
  else{
  nextStep.innerHTML = " "
   optionInnerText.innerHTML = `
    <div class="">
    <h4>Offert Godkänd</h4>
    <div class="small mb-4">Godkändes ${dateToday}</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur
    vitae adipisci praesentium recusandae suscipit aperiam magnam
    reprehenderit. Rerum, minus unde recusandae rem dicta deserunt, quo nemo
    incidunt accusamus fugit, sint dignissimos vero! Voluptate doloremque
    hic cum culpa non quas voluptatum eveniet deleniti adipisci alias.
    suscipit debitis.</div>
    <div class="mt-4">
        <h5>Kontakt</h5>
        <div>073 123 45 67</div> 
        <div>company@mail.com</div> 
    </div>
    <img src="./images/logoipsum-logo-6.svg" class="mt-3"/>
    </div>
    `;
  
  }
});

// Deny knapp
denyBtn.addEventListener("click", function () {

  if(!agreeTermsBtn.checked) {
    invalidFeedback.innerHTML = `<div class="text-center">Please accept Terms and Conditions to continue</div>`
  }
  else{
  nextStep.innerHTML = " "
  optionInnerText.innerHTML = `
  <div class="">
  <h4>Offert Nekad</h4>
  <div class="small mb-4">Nekades ${dateToday}</div>
  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur
  vitae adipisci praesentium recusandae suscipit aperiam magnam
  reprehenderit. Rerum, minus unde recusandae rem dicta deserunt, quo nemo
  incidunt accusamus fugit, sint dignissimos vero! Voluptate doloremque
  hic cum culpa non quas voluptatum eveniet deleniti adipisci alias.</div>
  <div class="mt-4">
      <h5>Kontakt</h5>
      <div>073 123 45 67</div> 
      <div>company@mail.com</div> 
  </div>
  <img src="./images/logoipsum-logo-6.svg" class="mt-3"/>
  </div>
  `;
  }

});
// offert gilltig till

let dateToday = new Date();
let lastDate = new Date(2022, 01, 20);
// console.log(lastDate);

let differenceTime = lastDate.getTime() - dateToday.getTime();
lastDate = lastDate.toLocaleDateString("sv-se");
dateToday = dateToday.toDateString("sv-se")
let differenceDays = differenceTime / (1000 * 3600 * 24);
differenceDays = Math.floor(differenceDays);
// console.log(differenceDays);
offertDate.innerHTML = `<span class="offert_info_heading">Offert giltig till</span><div class="">${lastDate}(${differenceDays} dagar)</div>`;

// Räkna ut pris utan moms,moms och med moms
