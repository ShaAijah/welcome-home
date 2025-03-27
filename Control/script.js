let hairImages = ["hair1.png", "hair2.png", "hair3.png"];
let outfitImages = ["outfit1.png", "outfit2.png", "outfit3.png"];
let accessoryImages = ["accessory1.png", "accessory2.png", "accessory3.png"];

let hairIndex = 0;
let outfitIndex = 0;
let accessoryIndex = 0;

function changeHair() {
    hairIndex = (hairIndex + 1) % hairImages.length;
    document.getElementById("hair").src = hairImages[hairIndex];
}

function changeOutfit() {
    outfitIndex = (outfitIndex + 1) % outfitImages.length;
    document.getElementById("outfit").src = outfitImages[outfitIndex];
}

function changeAccessory() {
    accessoryIndex = (accessoryIndex + 1) % accessoryImages.length;
    document.getElementById("accessory").src = accessoryImages[accessoryIndex];
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button:nth-child(1)").addEventListener("click", changeHair);
    document.querySelector("button:nth-child(2)").addEventListener("click", changeOutfit);
    document.querySelector("button:nth-child(3)").addEventListener("click", changeAccessory);
});
