let links = document.getElementsByTagName("a")

console.log(links)

for (var i = 0; i < links.length; i++) {

    links[i].className = "links - " + i

}