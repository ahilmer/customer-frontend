var overview = {
  Augustiner: { price: 1, total: 0},
  Radler: { price: 1, total: 0},
  Spezi: { price: 1, total: 0},
  Wasser: { price: 1, total: 0},
  Mars: { price: 0.5, total: 0},
  Snickers: { price: 0.5, total: 0},
  Twix: { price: 0.5, total: 0},
  KitKat: { price: 0.5, total: 0}
  };

$(document).keypress(function(e){

  console.log(e.keyCode)
  if(e.keyCode == 13)
  {
    console.log(overview)
    overview = {
      Augustiner: { price: 1, total: 0},
      Radler: { price: 1, total: 0},
      Spezi: { price: 1, total: 0},
      Wasser: { price: 1, total: 0},
      Mars: { price: 0.5, total: 0},
      Snickers: { price: 0.5, total: 0},
      Twix: { price: 0.5, total: 0},
      KitKat: { price: 0.5, total: 0}
      };
  }
  else if(e.keyCode === 49)
  {
    overview.Augustiner.total += 1;
  }
  else if(e.keyCode === 50)
  {
    overview.Radler.total += 1;
  }
  else if(e.keyCode === 51)
  {
    overview.Spezi.total += 1;
  }
  else if(e.keyCode === 52)
  {
    overview.Wasser.total += 1;
  }
  else if(e.keyCode === 53)
  {
    overview.Mars.total += 1;
  }
  else if(e.keyCode === 54)
  {
    overview.Snickers.total += 1;
  }
  else if(e.keyCode === 55)
  {
    overview.Twix.total += 1;
  }
  else if(e.keyCode === 56)
  {
    overview.KitKat.total += 1;
  }

  else if(e.keyCode === 33)
  {
    overview.Augustiner.total = Math.max(0,overview.Augustiner.total-1);
  }
  else if(e.keyCode === 34)
  {
    overview.Radler.total = Math.max(0,overview.Radler.total-1);;
  }
  else if(e.keyCode === 167)
  {
    overview.Spezi.total = Math.max(0,overview.Spezi.total-1);;
  }
  else if(e.keyCode === 36)
  {
    overview.Wasser.total = Math.max(0,overview.Wasser.total-1);;
  }
  else if(e.keyCode === 37)
  {
    overview.Mars.total = Math.max(0,overview.Mars.total-1);;
  }
  else if(e.keyCode === 38)
  {
    overview.Snickers.total = Math.max(0,overview.Snickers.total-1);;
  }
  else if(e.keyCode === 47)
  {
    overview.Twix.total = Math.max(0,overview.Twix.total-1);;
  }
  else if(e.keyCode === 40)
  {
    overview.KitKat.total = Math.max(0,overview.KitKat.total-1);
  }

  $('#overview').empty();

  for(element in overview)
  {
      if(overview[element].total)
        $('#overview').append('<tr><td>' + element + ':</td>' + '<td>' + overview[element].total + ' x ' + overview[element].price.toFixed(2) + ' €' + '</td></tr>');
  }

  var sum = 0;

  for(element in overview)
  {
      if(overview[element].total)
        sum += overview[element].price * overview[element].total;
  }

  $('#total').text(sum.toFixed(2) + ' €');

});
