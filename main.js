const img = document.getElementById("fotoMia");
const height = img.clientHeight;
const width = img.clientWidth;

img.addEventListener('mousemove', (evt) => {
    const {layerX, layerY} = evt;

    const yRotation = (
        (layerX - width / 2) / width
    ) * 20;

    const xRotation = (
        (layerY - height / 2) / height
    ) * 20;

    const string = `
    perspective(500px)
    scale(1.1)
    rotateX(${xRotation}deg)
    rotateY(${yRotation}deg)`;

    img.style.transform = string;
});

img.addEventListener('mouseout', () => {
    img.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`;
});