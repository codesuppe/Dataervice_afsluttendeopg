import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

//ikon

let myMap;

export const initMap = (coordinates) => {

    myMap = L.map("mapcontainer");

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(myMap);

    myMap.setView(coordinates, 13);

}

// vis nyt sted på kortet uden reload
export const changeMapView = (coordinates) => {

    myMap.setView (coordinates, 13)
}

//fjern kortet - kaldes når component forlades (clean-up function)
export const removeMap = () => {

    if ( myMap) {

        myMap.off()
        myMap=null
    }
}