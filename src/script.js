const modelViewer = document.getElementById("model-viewer");
const colorPicker = document.getElementById("color");
const scaleSlider = document.getElementById("scale");

// Wait for model to load before accessing materials
modelViewer.addEventListener("load", () => {
    const material = modelViewer.model.materials[0]; // Get first material

    // Apply color change
    colorPicker.addEventListener("input", () => {
        const hexColor = colorPicker.value;
        const rgb = hexToRgb(hexColor);
        material.pbrMetallicRoughness.setBaseColorFactor([rgb.r, rgb.g, rgb.b, 1]);
    });

    // Apply scale change
    scaleSlider.addEventListener("input", () => {
        const scaleValue = scaleSlider.value;
        modelViewer.scale = `${scaleValue} ${scaleValue} ${scaleValue}`;
    });
});

// Convert HEX to RGB
function hexToRgb(hex) {
    let bigint = parseInt(hex.replace("#", ""), 16);
    return {
        r: ((bigint >> 16) & 255) / 255,
        g: ((bigint >> 8) & 255) / 255,
        b: (bigint & 255) / 255
    };
}
