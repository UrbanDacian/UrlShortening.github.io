function drop() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    if (dropdownMenu.style.display === "none") {
        dropdownMenu.style.display = "flex";
    } else {
        dropdownMenu.style.display = "none";
    }
}
function scrollToward(){
    const position = document.getElementById('urlBox');
    position.scrollIntoView({behavior: 'smooth', block:"center"})
}

async function generate(){
    const data = document.getElementById("urlBox").value;
    const URL = 'https://api.shrtco.de/v2/shorten?url=' +data;
    const request = await fetch(URL, {
        method: "GET",
        mode: "cors",
    });
    const response = await request.json();
    createDiv(data, response.result.short_link);
}

function createDiv(initial, url){
    const p1 = document.createElement("p");
    const div = document.createElement("div");
    const div1 = document.createElement("div");
    const p = document.createElement("p");
    const btn = document.createElement("button");
    p.textContent = url;
    p1.textContent = initial;
    div.className = "newDivs";
    div1.className = "linksContainer";
    btn.className = "copyBtn";
    btn.textContent = "Copy";
    btn.addEventListener("click",async ()=>{
        await navigator.clipboard.writeText(url);
        btn.textContent = "Copied";
        btn.style.backgroundColor = "hsl(257, 27%, 26%)";
        const time = setTimeout(()=>{
            btn.textContent = "Copy";
            btn.style.backgroundColor = "hsl(180, 66%, 49%)";
        }, 3000);
    });
    p.style.color = "hsl(180, 66%, 49%)";
    div1.appendChild(p1);
    div1.appendChild(p);
    div.appendChild(div1);
    div.appendChild(btn);
    document.getElementById("shortedLinks").appendChild(div);
}