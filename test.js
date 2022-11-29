


  function deletePlayer(e) {
    const item = e.target
    if(item.classList[0] === 'fa') {
      const players = item.parentElement
      players.addEventListener('click', function(){
        players.remove()
      })
    }
}

function clearItems() {
    const items = document.querySelectorAll('players');
    if (items.length > 0) {
      items.forEach(function (item) {
        players.removeChild(item);
      });
    }
  }

 








