function loadMap() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDA-B_ko1Fp7mmi2oyOeaDGVISyBGSHOBA&callback=initMap&libraries=marker&v=beta&map_ids=b3539bbfec43ea22`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

function initMap() {
    const center = { lat: 34.00493516456416, lng: -83.92118813558204 };
    const map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 12,
        mapId: 'b3539bbfec43ea22' // Replace 'b3539bbfec43ea22' with your actual Map ID
    });

    const markerOptions = {
        position: center,
        map: map,
        title: 'Center Location'
    };
    const marker = new google.maps.marker.AdvancedMarkerElement(markerOptions);

    const radius3Miles = 3 * 1609.34;
    const radius5Miles = 5 * 1609.34;

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
}

document.addEventListener('DOMContentLoaded', loadMap);
