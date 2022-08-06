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

const quantitynumbers = []
const frequencynumbers = []
function numsorter(){
  for (let i = 6; i < window.mynodelist.length; i++) {
    if (i & 1 == 1) {
      frequencynumbers.push[window.mynodelist[i].value];
    } else {
      quantitynumbers.push[window.mynodelist[i].value];
      }
  }
  ListSorted();
}
function ListSorted(){
  console.log(quantitynumbers);
  console.log(frequencynumbers);
}
 