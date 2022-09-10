window.addEventListener("load", function () {
  setTimeout(
    function open(event) {
      document.querySelector(".popup").style.display = "block";
    },
    500
  );
});


document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});
document.querySelector("#close1").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

let x, rn, cn;
function makegrid() // function called after submit button is clicked
{
  rn = parseInt(document.getElementById("n1").value); //fetches the entered rows by user
  cn = parseInt(document.getElementById("n2").value); //fetches the entered column by user

  for (let r = 0; r < rn; r++) {
    x = document.getElementById("table").insertRow(r); //insert row to the table
    for (let c = 0; c < cn; c++) {
      x.insertCell(c); //insert cells to each row
    }
  }
  inputmaker();
}

function inputmaker() {
  const td = document.querySelectorAll('td');
  for (let i = 6; i < td.length; i++) {
    const input = document.createElement('input');
    input.type = 'number';
    td[i].appendChild(input).setAttribute("id", `${i}`);
  }
  inputselector();
}

function inputselector() {
  const myNodelist = document.querySelectorAll('input');
  window.mynodelist = myNodelist;
}
//quantitynumbers is a frequencynumbers and frequencynumber is a quantitynumbers

const darabszamok = [];
const ertekek = [];
let kicsomagolt = [];

const modus = [];
const med = [];
const quartilelist = [];
const upperquartile = [];
const lowerquartile = [];
const average = [];
const dispersion = [];


function numsorter() {
  let ind = 4;
  while (ind < window.mynodelist.length) {
    if ((ind & 1) == 1) {
      ertekek.push(window.mynodelist[ind].value);
    } else {
      darabszamok.push(window.mynodelist[ind].value);
    }
    ind++;
  }
  Modus();
}

function Modus() {
  let idx1 = -1;
  while (idx1 < darabszamok.length) {
    if (darabszamok[idx1] == Math.max(...darabszamok)) {
      modus.push(ertekek[idx1]);
      break;
    } else {
      idx1++;
    }
  }
  median1();
}


function median1() {
  kicsomagolt = [];
  for (let i = 0; i < darabszamok.length; i++) {
    for (let j = 0; j < darabszamok[i]; j++) {
      kicsomagolt.push(parseFloat(ertekek[i]));
    }
  }
  kicsomagolt = kicsomagolt.sort((a, b) => a - b);
  const middle = Math.floor(kicsomagolt.length / 2);

  if (kicsomagolt.length % 2 == 0) {
    med.push((kicsomagolt[middle] + kicsomagolt[middle - 1]) / 2);
  } else {
    med.push(kicsomagolt[middle]);
  }

  calculatequartileup();
}

function calculatequartileup() {
  // 0.75
  const harmad = (kicsomagolt.length - 1) * 0.75;
  const kerek_harmad = Math.floor(harmad);
  const kulonbseg = harmad - kerek_harmad;
  if (kicsomagolt[kerek_harmad + 1] !== undefined) {
    upperquartile.push(kicsomagolt[kerek_harmad] + kulonbseg * (kicsomagolt[kerek_harmad + 1] - kicsomagolt[kerek_harmad]));
  } else {
    upperquartile.push(kicsomagolt[kerek_harmad]);
  }
  calculatequartilelow();
}


function calculatequartilelow() {
  const harmad = (kicsomagolt.length - 1) * 0.25;
  const kerek_harmad = Math.floor(harmad);
  const kulonbseg = harmad - kerek_harmad;
  if (kicsomagolt[kerek_harmad + 1] !== undefined) {
    lowerquartile.push(kicsomagolt[kerek_harmad] + kulonbseg * (kicsomagolt[kerek_harmad + 1] - kicsomagolt[kerek_harmad]));
  } else {
    lowerquartile.push(kicsomagolt[kerek_harmad]);
  }
  average_calculate();
}

let calculatelist = [];
let total = 0;
let quantitynumbertotal = 0;
function average_calculate() {
  let sum = kicsomagolt.reduce((e, szam) => e + szam);
  average.push((sum / kicsomagolt.length).toFixed(2));
  dispersion_calculate();
}

let dispersionletiablelist = [];
function dispersion_calculate() {
  for (let index = 0; index < darabszamok.length; index++) {
    dispersionletiablelist.push(darabszamok[index] * ((ertekek[index] - average) ** 2));
  }
  let dispersionletiablesum = 0;
  for (let idx4 = 0; idx4 < dispersionletiablelist.length; idx4++) {
    dispersionletiablesum = dispersionletiablesum + dispersionletiablelist[idx4];
  }
  let dispersion_numcalculated = Math.sqrt(dispersionletiablesum / 2);
  dispersion.push(dispersion_numcalculated.toFixed(2));
  finalresult();
}

function finalresult() {
  document.querySelector(".popup2").style.display = "block";
  document.getElementById("modus").innerHTML = modus;
  document.getElementById("median").innerHTML = med;
  document.getElementById("quartilelist").innerHTML = quartilelist;
  document.getElementById("upperquartile").innerHTML = upperquartile;
  document.getElementById("lowerquartile").innerHTML = lowerquartile;
  document.getElementById("average").innerHTML = average;
  document.getElementById("dispersion").innerHTML = dispersion;
}

document.querySelector("#close2").addEventListener("click", function () {
  document.querySelector(".popup2").style.display = "none";
});

