const card = document.querySelectorAll('.cards-container');
const backFace = document.querySelectorAll('.backface');

card.forEach((cards, index) => {
    cards.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
    
        let bounds = cards.getBoundingClientRect();
    
        const leftX = x - bounds.x;
        const topY = y - bounds.y;
    
        const center = {
            x: leftX - bounds.width / 2,
            y: topY - bounds.height / 2
        }
    
        const distance = Math.sqrt(center.x**2 + center.y**2);

        backFace[index].style.transform = `rotate3d(${center.y / 100}, ${-center.x / 100}, 0, ${Math.log(distance)* 2}deg)`;
    });
});

card.forEach((cards, index) => {
    cards.addEventListener('mouseout', () => {
        backFace[index].style.transform = "";
    });
});