let domains = []

function fn(e) {
    let regex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/
    alert("ho: "+e.value + " ")
    let domain = e.value.match(regex)
    if(domain){
        domains.push(domain)
        refreshDomains();
    }
}

function refreshDomains() {
    let ul = document.getElementById("domains")
    ul.innerHTML = ""
    domains.forEach(d => {
        let txt = document.createTextNode(d)
        let li = document.createElement('li')
        li.appendChild(txt)
        ul.appendChild(li)
    })
}