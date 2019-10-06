//const axios = require('axios');

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g

function extractPhotos(content) {
  var links = [];
 //const links = new Set()
  //let match
  while (match = regex.exec(content)) {
    links.push(match[1])
  }
  return Array.from(links)
}

async function getAlbum(id) {
  try {
    const response = await axios.get(`https://photos.app.goo.gl/${id}`)
    return extractPhotos(response.data)
  }
  catch(e) {
    return null
  }
}

/*
module.exports = {
 getAlbum
}
*/
var photos = getAlbum("mRoTJW8mNoqxqc4UA")
var element = document.getElementById("div1");
while (photo in photos) {element.appendChild(document.createTextNode(photo));}
var test = document.createTextNode("TestNode");
element.appendChild(test);
