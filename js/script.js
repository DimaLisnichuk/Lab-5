// Отримання геоданих з API
fetch('https://get.geojs.io/v1/ip/geo.json')
    .then(response => response.json())
    .then(data => {
 // Виводимо дані на сторінку
        document.getElementById('ip').innerText = 'IP-адреса: ' + data.ip;
        document.getElementById('country').innerText = 'Країна: ' + data.country;
        document.getElementById('region').innerText = 'Область: ' + data.region;
        document.getElementById('city').innerText = 'Місто: ' + data.city;

 // Ініціалізуємо карту Leaflet та встановлюємо маркер на отримані координати
        var map = L.map('map').setView([data.latitude, data.longitude], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        L.marker([data.latitude, data.longitude]).addTo(map)
            .bindPopup('Your Location').openPopup();
    })
    .catch(error => console.error('Error fetching data:', error));

