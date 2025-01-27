const toggle = document.getElementById('toggle-button');
const layer = document.getElementById('opacity-layer');
toggle.addEventListener('click', () => { 
    layer.classList.toggle('show');
});
