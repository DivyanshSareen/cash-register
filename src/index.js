import "./styles.css";

var bill = document.getElementById("bill");
var paid = document.getElementById("paid");
var calc = document.getElementById("calc");
var data = document.getElementById("data");
calc.addEventListener("click", handleClick);
var cash_init = {
  2000: 0,
  500: 0,
  100: 0,
  20: 0,
  10: 0,
  5: 0,
  1: 0
};
var change = {
  2000: 0,
  500: 0,
  100: 0,
  20: 0,
  10: 0,
  5: 0,
  1: 0
};

const note = [2000, 500, 100, 20, 10, 5, 1];

data.innerHTML = `<th>No.</th>
<td>${change[note[0]]}</td>
<td>${change[note[1]]}</td>
<td>${change[note[2]]}</td>
<td>${change[note[3]]}</td>
<td>${change[note[4]]}</td>
<td>${change[note[5]]}</td>
<td>${change[note[6]]}</td>`;

function handleClick() {
  let bal = parseInt(paid.value, 10) - parseInt(bill.value, 10);
  change = cash_init;
  for (let i = 0; i < note.length; i++) {
    change[note[i]] = 0;
  }
  for (let i = 0; i < note.length; i++) {
    if (bal >= note[i]) {
      change[note[i]] = Math.floor(bal / note[i]);
      bal = bal - Math.floor(change[note[i]] * note[i]);
    }
  }
  data.innerHTML = `<th>No.</th>
<td>${change[note[0]]}</td>
<td>${change[note[1]]}</td>
<td>${change[note[2]]}</td>
<td>${change[note[3]]}</td>
<td>${change[note[4]]}</td>
<td>${change[note[5]]}</td>
<td>${change[note[6]]}</td>`;
}
