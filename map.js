var northEast = L.latLng(44.1517, 27.7899),
southWest = L.latLng(43.5535, 26.5100),
mybounds = L.latLngBounds(southWest,northEast);
var LeafIcon = L.Icon.extend({
options: {
iconSize:     [50, 50],
//shadowAnchor: [4, 62],
popupAnchor:  [50, 50]
}
});
var busIcon = new LeafIcon({
iconUrl: 'bus_icon.png',
iconSize: [30,30]
});
var map = L.map('map').setView([44.0728, 27.2131],13);
    L.tileLayer('http://77.71.64.51/renderd/{z}/{x}/{y}.png', {
      minZoom:13,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
map.setMaxBounds(mybounds);
// var marker = L.marker([44.07984742015729, 27.236824035644535],  {icon: busIcon}).addTo(map);

var markers = [
                L.marker([44.07984742015729, 27.236824035644535],  {icon: busIcon}),
                L.marker([44.1103463, 27.2709583],  {icon: busIcon}),
                L.marker([44.1103463, 27.2709583],  {icon: busIcon}),
              ];
for (var i=0; i < markers.length; i++)
{
    markers[i].addTo(map);
}
