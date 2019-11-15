let map = L.map('mapid').setView([26.356608, -80.080310], 11);

L.tileLayer('https://api.mapbox.com/styles/v1/khaltus/ck30i6jdt10er1dmmzaebs0tl/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2hhbHR1cyIsImEiOiJjazMwaG9mNXUwZTZiM2Jxc2IwcG5vNDhsIn0.HFJ578veKqy9lF-807NYDg', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18
}).addTo(map);

let marker1 = L.marker([26.354640, -80.085181]).addTo(map);
let marker2 = L.marker([26.338500, -80.071661]).addTo(map);
let marker3 = L.marker([26.366357, -80.070009]).addTo(map);
let marker4 = L.marker([26.428816, -80.156332]).addTo(map);

marker1.bindPopup("Mizner Park is an open plaza with luxurious shopping, eating, drinking and even movie theaters.");
marker2.bindPopup("Grab a day pass for the Boca Beach Club and chill out under a cabana with your toes in the sand.");
marker3.bindPopup("Get up close and personal with marine life at Gumbo Limbo. Hidden in the mangroves, you can feed stingrays and meet seat turtles.");
marker4.bindPopup("Stroll through this exotic Japanese garden on a sunny day and pack a picnic!");
