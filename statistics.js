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
const med = [];
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
  for (let idx2 = 0; idx2 < quantitynumbers.length; idx2++) {
    for (let idx3 = 0; idx3 < quantitynumbers[idx2]; idx3++) {
      quartilelist.push(frequencynumbers[idx2])
    }
  }
  median2()
}

function median2(){
  let mediannum1 = quartilelist.length / 2;
  let mediannum2 = mediannum1 + 1;
  let mediannum3 = mediannum1 - 1;
  let mediannum4 = Math.floor(quartilelist.length / 2);
  
  if (quartilelist.length & 1 == 1) {
                med.push(quartilelist[mediannum4]);
  } else {      
                if(quartilelist.length == 2){
                  if (quartilelist[mediannum1] == quartilelist[mediannum3]) {
                    med.push(quartilelist[mediannum1]);
                } else {
                    med.push(parseInt(quartilelist[mediannum1]) + parseInt(quartilelist[mediannum3]) / 2);
              }
      } else /*sanyi*/ {
                if (quartilelist[mediannum3] == quartilelist[mediannum1]) {
                    med.push(quartilelist[mediannum1]);
              } else {
                    med.push(parseInt(quartilelist[mediannum1]) + parseInt(quartilelist[mediannum3]) / 2);
              }
        }
                
 }
}