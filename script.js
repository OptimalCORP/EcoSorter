
document.querySelector('.learn-more').addEventListener('click', function() {
    document.getElementById('mySideMenu').style.width = '450px';
  });
  
  function closeMenu() {
    document.getElementById("mySideMenu").style.width = "0";
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search__input');
    const searchButton = document.querySelector('.search__button');
  
    searchButton.addEventListener('click', function() {
      const searchTerm = searchInput.value;
      // Add code here to search for the searchTerm on the website
      console.log('Searching for: ' + searchTerm);
    });
  
    searchInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        const searchTerm = searchInput.value;
        console.log('Searching for: ' + searchTerm);
      }
    });
  });
  
  