document.querySelector('button').addEventListener("click", function() {
     const city = document.getElementById("city").value
     const country = document.getElementById("country").value
     const inputValue = city + ','+ country.toUpperCase()
     const display = city.charAt(0).toUpperCase() + city.slice(1);
     fetch("https://api.openweathermap.org/data/2.5/weather?q="+`${inputValue}`+"&appid=bc535b125f010e0beaf71fc79a1232c9")
     .then(res => res.json())
     .then(response => {
        let fahrenheit = (response.main.temp - 273.15) * 9 / 5 + 32 // converts K to Farenheit
        document.getElementById('temp').innerHTML = Math.ceil(fahrenheit) + "&#176;" + "F"+ " in " + display
      })

      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0');
      var yyyy = today.getFullYear();
      today = mm + '/' + dd + '/' + yyyy;
      document.getElementById('date').innerHTML = today


      .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
       });
 });


 // weather api key: bc535b125f010e0beaf71fc79a1232c9
