window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
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
    x = document.getElementById("myTable").insertRow(r); //insert row to the table
    for (var c = 0; c < cn; c++) {
      var y = x.insertCell(c); //insert cells to each row
    }

  }
}