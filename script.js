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

// Hämta totala priset

// Skapa en array med objekt av värden som ska läggas till i pristabellen
const priceValues = [
  {
    desc: "test",
    quantity: 0,
    price: 1000,
    total: 1000,
  },
  {
    desc: "test2",
    quantity: 1,
    price: 2000,
    total: 2000,
  },
];
// En array med object av värden som ligger i valbara alternativ
let optionvalues = [
  {
    id: 0,
    desc: "option1",
    quantity: 1,
    price: 1000,
    total: 1000,
  },
  {
    id: 1,
    desc: "option2",
    quantity: 2,
    price: 2000,
    total: 2000,
  },
];

// lägga in värden i pristabellen
const addTableRow = function () {
  // loopa igenom priceValue och lägga in värden i pristabellen
  priceRow.innerHTML = " ";
  priceValues.forEach((priceVal) => {
    //lägga in värden i tabellen
    // priceRow.innerHTML = " ";
    priceRow.innerHTML += `<tr>
      <th scope="row">${priceVal.desc}</th>
          <td>${priceVal.quantity}</td>
          <td>${priceVal.price}</td>
          <td>${priceVal.total}</td>
      </tr>`;
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
      <div class="custom-control custom-checkbox">
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
};

addOptionRow();

const checkbox = optionRow.querySelectorAll(".checkbox");

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
  optionInnerText.innerHTML = `
  <div class="w-75">
  <h4>Offert Godkänd</h4>
  <div>Suscipit aperiam magnam reprehenderit. Rerum, minus unde recusandae rem dicta deserunt, quo nemo incidunt perspiciatis aut odio est consequatur
  tenetur quos, quibusdam,
  suscipit debitis.</div>
  <div class="option-font">Viktoria. P</div>
  </div>
  `;
});

// Deny knapp
denyBtn.addEventListener("click", function () {
  optionInnerText.innerHTML = `
  <div class="w-75">
  <h4>Offert Nekad</h4>
  <div>Rerum, minus unde recusandae rem dicta deserunt, quo nemo incidunt perspiciatis aut odio est consequatar.</div>
  <div class="option-font">Viktoria. P</div>
  </div>
  `;
});
