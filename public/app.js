console.log("Created by Lucas Mace");
console.log("lucasmace@gmail.com");
console.log("www.lucasmace.com");

let unit = "grams";

const oldpart = document.getElementById("old");
const newpart = document.getElementById("new");
const cost = document.getElementById("cost");

const bg = document.getElementById("alert-container");
const alertMessage = document.getElementById("alert-message");
const output = document.getElementById("output");

const go = () => {
    const delta = oldpart.value - newpart.value;
    let dpg = cost.value / delta;

    if (isNaN(dpg)) {
        myAlert("All inputs must be numbers.");
        return;
    }

    if (dpg <= 0 || dpg === Infinity) {
        myAlert("That is not an upgrade.");
        return;
    }
    dpg = dpg.toFixed(2);
    
    // Remove the "s" for the output --
    output.innerText = `$${dpg} per ${unit.slice(0, -1)}`;
}

const clearInputs = () => {
    oldpart.value = "";
    newpart.value = "";
    cost.value = "";
    output.innerText = "";
}

const myAlert = (x) => {
    bg.style.display = "flex";
    alertMessage.innerText = x;
    output.innerText = "";
}

const clearAlert = () => {
    bg.style.display = "none";
}

const toggle = () => {
    const title = document.getElementsByTagName("h1")[0];
    const spans = document.getElementsByClassName("unit");
    const switchButton = document.getElementById("switch");

    switch (unit) {
        case "grams":
            unit = "ounces";
            switchButton.innerText = "Switch to Grams";
            gto();
            break;
        case "ounces":
            unit = "grams";
            switchButton.innerText = "Switch to Ounces";
            otg();
            break;
    }

    for (let i = 0; i < spans.length; i++) {
        spans[i].innerText = unit;
    }

    // Capitalize the unit for the title --
    title.innerText = `${unit.charAt(0).toUpperCase() + unit.slice(1)} Per Dollar Calculator`;

}

const gto = () => {
    // Grams to Ounces Conversion --
    const cr = 0.03527396198;

    oldpart.value = (oldpart.value * cr).toFixed(2);
    newpart.value = (newpart.value * cr).toFixed(2);

    if(output.innerText) go();
}

const otg = () => {
    // Ounces to Grams Conversion --
    const cr = 28.34952;

    oldpart.value = (oldpart.value * cr).toFixed(2);
    newpart.value = (newpart.value * cr).toFixed(2);
    
    if(output.innerText) go();
}

// For Example Buttons. Ultegra to DA... --