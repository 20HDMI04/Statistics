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
//quantitynumbers is a frequencynumbers and frequencynumber is a quantitynumbers

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
      } else {
                if (quartilelist[mediannum3] == quartilelist[mediannum1]) {
                    med.push(quartilelist[mediannum1]);
              } else {
                    med.push(parseInt(quartilelist[mediannum1]) + parseInt(quartilelist[mediannum3]) / 2);
              }
        }
                
 }
 calculatequartileup()
}

 function calculatequartileup(){
    if (quartilelist.length & 1 == 1) {
      //páratlan
        let up_quartilevariable1 = (quartilelist.length -1) / 2;
        if (up_quartilevariable1 & 1 == 1) {
          //páratlan fél
          let up_quartilevariable2 = up_quartilevariable1 / 2;
          upperquartile.push(quartilelist[Math.ceil(parseInt(up_quartilevariable1 + up_quartilevariable2))]);
        } else {
          //páros fél 
          let up_quartilevariable3 = up_quartilevariable1 / 2;
          upperquartile.push(parseInt(parseInt(quartilelist[up_quartilevariable1 + up_quartilevariable3]) + parseInt(quartilelist[up_quartilevariable1 + up_quartilevariable3 + 1])) /2);
        }
    } else {
      //páros
      let up_quartilevariable4 = (quartilelist.length -2) / 2;
        if (up_quartilevariable4 & 1 == 1) {
          //páratlan fél
          let up_quartilevariable5 = up_quartilevariable4 / 2;
          upperquartile.push(quartilelist[Math.ceil(parseInt(up_quartilevariable4 + up_quartilevariable5))]);
        } else {
          //páros fél 
          let up_quartilevariable6 = up_quartilevariable4 / 2;
          upperquartile.push(parseInt((quartilelist[parseInt(up_quartilevariable4 + up_quartilevariable6)] + quartilelist[parseInt(up_quartilevariable4 + up_quartilevariable6 +1)]) / 2));
          
    }
  }
 calculatequartilelow()
}

 
 function calculatequartilelow(){
  if (quartilelist.length & 1 == 1) {
    //páratlan
          let low_quartilevariable1 = (quartilelist.length -1) / 2;
          if (low_quartilevariable1 & 1 == 1) {
            //páratlanfél
            let low_quartilevariable2 = low_quartilevariable1 / 2;
            lowerquartile.push(quartilelist[Math.floor(low_quartilevariable2)])
          } else {
            //párosfél
            let low_quartilevariable3 = low_quartilevariable1 / 2;
            let low_quartilevariable4 = low_quartilevariable3 - 1;
            lowerquartile.push(parseInt(parseInt(parseInt(quartilelist[low_quartilevariable4]) + parseInt(quartilelist[low_quartilevariable3])) /2))
          }
  } else {
    //páros
          let low_quartilevariable5 = (quartilelist.length -2) / 2;
          if (low_quartilevariable5 & 1 == 1) {
            //páratlanfél
            let low_quartilevariable6 = low_quartilevariable5 / 2;
            lowerquartile.push(quartilelist[Math.floor(low_quartilevariable6)])
          } else {
            //párosfél
            let low_quartilevariable7 = low_quartilevariable5 / 2;
            let low_quartilevariable8 = low_quartilevariable7 - 1;
            lowerquartile.push(parseInt((quartilelist[low_quartilevariable8] + quartilelist[low_quartilevariable7]) /2))
    } 
  }
  average_calculate()
}

let calculatelist = [];
let total = 0;
let quantitynumbertotal = 0;
function average_calculate() {
  for (let average_variable1 = 0; average_variable1 < quantitynumbers.length; average_variable1++) {
    calculatelist.push(parseInt(quantitynumbers[average_variable1] * frequencynumbers[average_variable1]));
  }
  for (let indx = 0; indx < calculatelist.length; indx++) {
    total = parseInt(total + calculatelist[indx]);
  }
  for (let avr = 0; avr < quantitynumbers.length; avr++) {
    quantitynumbertotal = parseInt(parseInt(quantitynumbertotal) + parseInt(quantitynumbers[avr]));
  }
  let average_num = (parseInt(total) / parseInt(quantitynumbertotal));
  average.push(average_num.toFixed(2));
  dispersion_calculate();
}

function dispersion_calculate() {
  let dispersionvariablelist = [];
  for (let index = 0; index < quantitynumbers.length; index++) {
    dispersionvariablelist.push(parseInt(parseInt(quantitynumbers[index]*(parseInt(parseInt(frequencynumbers[index]) - average)))**2));    
  };
  let dispersionvariablesum = 0;
  for (let idx4 = 0; idx4 < dispersionvariablelist.length; idx4++) {
    dispersionvariablesum = parseInt(dispersionvariablesum + parseInt(dispersionvariablelist[idx4]));
  }
  let dispersion_numcalculated = Math.sqrt(parseInt(dispersionvariablesum / 2))
  dispersion.push(dispersion_numcalculated.toFixed(2))
}

