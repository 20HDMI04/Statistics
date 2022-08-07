window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        500
    )
});


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});
document.querySelector("#close1").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});

var x, rn, cn;
function makegrid() // function called after submit button is clicked
{
  rn = parseInt(document.getElementById("n1").value); //fetches the entered rows by user
  cn = parseInt(document.getElementById("n2").value); //fetches the entered column by user

  for (var r = 0; r < rn; r++) {
    x = document.getElementById("table").insertRow(r); //insert row to the table
    for (var c = 0; c < cn; c++) {
      var y = x.insertCell(c); //insert cells to each row
    }
  }inputmaker()
}

function inputmaker(){
const td = document.querySelectorAll('td')
for (let i = 6; i < td.length; i++) {
  const input = document.createElement('input')
  input.type = 'number'
  td[i].appendChild(input).setAttribute("id", `${i}`)
 }
inputselector()
}
function inputselector(){
  const myNodelist = document.querySelectorAll('input')
  window.mynodelist = myNodelist

  }

const quantitynumbers = [];
const frequencynumbers = [];

const modus = [];
const median = [];
const quartilelist = [];
const upperquartile = [];
const lowerquartile = [];
const average = [];
const dispersion = [];


function numsorter(){
  let ind = 4;
  while (ind < window.mynodelist.length) {
    if ( ind & 1 == 1) {
      frequencynumbers.push(window.mynodelist[ind].value);
  } else {
      quantitynumbers.push(window.mynodelist[ind].value);
  }
   ind++; 
  }
    Modus();
}

function Modus(){
  let idx1 = -1;
  while (idx1 < quantitynumbers.length) {
    if (quantitynumbers[idx1] == Math.max(...quantitynumbers)) {
      modus.push(frequencynumbers[idx1])
      break;
    } else {
      idx1++;
    }
  }
  median1()
}

function median1(){
  let idx2 = 0;
   while (idx2 < quantitynumbers.length) {
    let idx3 = 0;
    while( idx3 < quantitynumbers[idx2]){
      quartilelist.push(frequencynumbers[idx2])
    }
    idx3++;
  }
  idx2++;
}
 

