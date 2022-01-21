
// Hämta overview tabellen
const overviewTable = document.querySelector(".price_overview")

//Hämta valbara alternativ tabellen
const optionTable = document.querySelector(".price_option")


// Price table values
let overviewValArr = [
    {
        desc: "Arbetsmoment",
        id: 0,
        quan: 1,
        sumTax: 900,
        total: 900
    },
    {
        desc: "Arbetsmoment",
        id: 1,
        quan: 4,
        sumTax: 2000,
        total: 2000
    },
    {
        desc: "Arbetsmoment",
        id: 2,
        quan: 2,
        sumTax: 1800,
        total: 1800
    },
    {
        desc: "Arbetsmoment",
        id: 3,
        quan: 1,
        sumTax: 900,
        total: 900
    },
    {
        desc: "Arbetsmoment",
        id: 4,
        quan: 2,
        sumTax: 4000,
        total: 4000
    }
]
// Option values
let optionValArr = [
    {
        desc: "Valbart",
        id: 0,
        quan: 1,
        sumTax: 900,
        total: 900
    },
    {
        desc: "Valbart",
        id: 1,
        quan: 4,
        sumTax: 2000,
        total: 2000
    }
   
]

// Skriva ut värden från overviewVal i tabellen
const addOverviewToTable = function () {
    overviewTable.innerHTML = ""
    overviewValArr.forEach(val => {
        overviewTable.innerHTML += ` <tr>
        <th scope="row">${val.desc}</th>
        <td>${val.quan} h</td>
        <td>${val.sumTax} SEK</td>
        <td>${val.total} SEK</td>
      </tr>`
    })
}


// Skriva ut värden från optionVal i tabellen
const addOptionToTable = function () {
    optionTable.innerHTML = ""
    optionValArr.forEach(val => {
        optionTable.innerHTML += `<tr>
        <th scope="row">${val.desc}</th>
        <td>${val.quan} h</td>
        <td>${val.sumTax} SEK</td>
        <td>${val.total} SEK</td>
        <td>
          <div class="add_option_btn">
            <i class="fas fa-plus p-2 addOptionBtn" id="${val.id}"></i>
          </div>
        </td>
      </tr>`
    })
}

// Kör addOverviewToTable och addOptionToTable
addOverviewToTable()
addOptionToTable()


// Hämta lägg till knapparna och spara i addOptBtn. Loopa igenom och lägg till event som går till funktion
const addOptBtn = optionTable.querySelectorAll(".addOptionBtn").forEach(btn => {
    btn.addEventListener('click', function(e) {
        addNewOptionToTable(e)
        removeOptionFromTable(e)
    })
})

// Funktionen som lägger pushar valbart alternativ till overviewValArr och uppdaterar tabellen 
const addNewOptionToTable = function(e) {
    optionValArr.forEach(val => {
        if(e.target.id == val.id) {
            overviewValArr.push(val)
            // Uppdatera ny version av overviewTable
            addOverviewToTable()
        }
    })
}

// Funktionen som tar bort det valda alternativer från optionValArr
const removeOptionFromTable = function(e) {
    optionValArr = optionValArr.filter(val => {
         return e.target.id != val.id
    })
    // Uppdaterar ny version av optionTable
    addOptionToTable()
}