const addBtn = document.querySelector(".addBtn");
const checkbox = document.querySelector(".cb");
const priceRow = document.querySelector(".priceRow");

const addTableRow = function () {
  priceRow.insertAdjacentHTML(
    "afterend",
    `<tr>
    <th scope="row">test</th>
    <td>5</td>
    <td>2000</td>
    <td>2000</td>
</tr>`
  );
};

addBtn.addEventListener("click", function () {
  //endast en checkbox, med flera måste jag lopa ut respektive och sedan kolla om den valda checkboxen är ifylld
  if (checkbox.checked === true) {
    addTableRow();
    removeOption();
  }
});
