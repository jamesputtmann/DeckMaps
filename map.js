function loadMap() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCqE2bW7hClGL8yd-OpkOPsTd-Oqymud9U&callback=initMap&libraries=marker&v=beta&map_ids=b3539bbfec43ea22`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

function initMap() {
    const center = { lat: 34.00493516456416, lng: -83.92118813558204 };
    const map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 10,
        mapId: 'b3539bbfec43ea22'
    });

    const markerOptions = {
        position: center,
        map: map,
        title: 'Center Location'
    };
    const marker = new google.maps.marker.AdvancedMarkerElement(markerOptions);

    // Add InfoWindow with image
    const infoWindowContent = `
        <div>
            <img src="Photos/VanWest Partners Dacula.png" alt="VanWest Partners" style="width:50px;height:auto;">
            <p>VanWest Partners | ClearHome Self Storage Dacula</p>
        </div>
    `;
    const infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent
    });
    infoWindow.open(map, marker);

    const radius3Miles = 3 * 1609.34;
    const radius5Miles = 5 * 1609.34;
    const radius25Miles = 25 * 1609.34;

    const circle3Miles = new google.maps.Circle({
        map: map,
        center: center,
        radius: radius3Miles,
        fillColor: '#00183c',
        fillOpacity: 0.35,
        strokeColor: '#00183c',
        strokeOpacity: 0.5,
        strokeWeight: 2
    });

    const circle5Miles = new google.maps.Circle({
        map: map,
        center: center,
        radius: radius5Miles,
        fillColor: '#0084cb',
        fillOpacity: 0.25,
        strokeColor: '#0084cb',
        strokeOpacity: 0.5,
        strokeWeight: 2
    });

    const circle25Miles = new google.maps.Circle({
        map: map,
        center: center,
        radius: radius25Miles,
        fillColor: '#66c2ff',
        fillOpacity: 0.15,
        strokeColor: '#00183c',
        strokeOpacity: 1,
        strokeWeight: 2
    });
}

document.addEventListener('DOMContentLoaded', loadMap);