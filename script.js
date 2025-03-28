function simulate() {
    let pages = document.getElementById("pages").value.split(",").map(Number);
    let frames = parseInt(document.getElementById("frames").value);

    fetch("http://127.0.0.1:5000/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pages: pages, frames: frames })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = 
            `Page Faults: ${data.faults} \n Memory States: ${JSON.stringify(data.states)}`;
    })
    .catch(error => console.error("Error:", error));
}
