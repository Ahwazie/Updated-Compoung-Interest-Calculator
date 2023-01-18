function calculate() {
    var balance = document.getElementById("balance").value;
    var rate = document.getElementById("rate").value / 100;
    var time = document.getElementById("time").value;
    
    var table = document.getElementById("theBigResult");
    
    for (var i = 1; i <= time; i++) {
      var interest = balance * rate;
      var final = parseFloat(balance) + parseFloat(interest);
      balance = final;
    
      var row = table.insertRow();
      var yearCell = row.insertCell(0);
      var initialCell = row.insertCell(1);
      var profitCell = row.insertCell(2);
      var finalCell = row.insertCell(3);
    
      yearCell.innerHTML = i;
      initialCell.innerHTML = "$" + (balance - interest).toFixed(2);
      profitCell.innerHTML = "$" + interest.toFixed(2);
      finalCell.innerHTML = "$" + final.toFixed(2);
    }
  }
  
  