import "./styles.css";

// getting all the DOM elements
var bill = document.getElementById("bill");
var paid = document.getElementById("paid");
var calc = document.getElementById("calc");
var data = document.getElementById("data");

calc.addEventListener("click", handleClick);

// calculated values will be stored here for display
var change = {
  2000: 0,
  500: 0,
  100: 0,
  20: 0,
  10: 0,
  5: 0,
  1: 0
};

// array of available notes
const note = [2000, 500, 100, 20, 10, 5, 1];

// displays 'change' values for each note
data.innerHTML = `<th>No.</th>
<td>${change[note[0]]}</td>
<td>${change[note[1]]}</td>
<td>${change[note[2]]}</td>
<td>${change[note[3]]}</td>
<td>${change[note[4]]}</td>
<td>${change[note[5]]}</td>
<td>${change[note[6]]}</td>`;

// callback function for onclick event on calc button
function handleClick() {
  let bal = parseInt(paid.value, 10) - parseInt(bill.value, 10);

  // intializing all the change values to 0
  for (let i = 0; i < note.length; i++) {
    change[note[i]] = 0;
  }
  // calculating minimum number of notes to get the balance amount
  for (let i = 0; i < note.length; i++) {
    if (bal >= note[i]) {
      change[note[i]] = Math.floor(bal / note[i]);
      bal = bal - Math.floor(change[note[i]] * note[i]);
    }
  }

  // displaying the new values of change object
  data.innerHTML = `<th>No.</th>
<td>${change[note[0]]}</td>
<td>${change[note[1]]}</td>
<td>${change[note[2]]}</td>
<td>${change[note[3]]}</td>
<td>${change[note[4]]}</td>
<td>${change[note[5]]}</td>
<td>${change[note[6]]}</td>`;
}
