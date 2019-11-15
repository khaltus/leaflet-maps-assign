let map = L.map('mapid').setView([39.679550, -105.662710], 2.95);

for (let i = 0; i < places.length; i++) {
  L.marker([ places[i].Latit, places[i].Longit])
  .bindPopup('<h3>' + places[i].PlaceName + '</h3>' + '<p>' + places[i].Descrip + '</p>')
  .addTo(map);
}

L.tileLayer('https://api.mapbox.com/styles/v1/khaltus/ck30qnjiy18gk1cpltz8lu8xi/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2hhbHR1cyIsImEiOiJjazMwaG9mNXUwZTZiM2Jxc2IwcG5vNDhsIn0.HFJ578veKqy9lF-807NYDg', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18
}).addTo(map);
