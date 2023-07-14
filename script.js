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
    const URL = 'https://shrtco.de/';
    const request = await fetch(URL, {
        method: "POST",
        "Content-Type": "application/json",
        cors: "cors",
        body: JSON.stringify(data),
    });
    console.log(request);
    const response = await request.json();
    console.log(response);
}