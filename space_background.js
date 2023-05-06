class Star {
    constructor(x, y, size, speed, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.color = color;
    }

    update() {
        this.y += this.speed;
        if (this.y > window.innerHeight) {
            this.y = -this.size;
            this.x = Math.random() * window.innerWidth;
        }
    }
}

const spaceBackground = document.getElementById("space-background");
const stars = [];

function createStar(x, y) {
    const posX = x || Math.random() * window.innerWidth;
    const posY = y || Math.random() * window.innerHeight;
    const size = Math.random() * 3 + 1;
    const speed = Math.random() * 2 + 0.5;
    const color = Math.random() < 0.1 ? "blue" : "white";
    const star = new Star(posX, posY, size, speed, color);

    const starElement = document.createElement("div");
    starElement.classList.add("star");
    starElement.style.width = `${star.size}px`;
    starElement.style.height = `${star.size}px`;
    starElement.style.left = `${star.x}px`;
    starElement.style.top = `${star.y}px`;
    starElement.classList.add("blue");

    spaceBackground.appendChild(starElement);
    stars.push({ star, starElement });
}

function updateStars() {
    stars.forEach(({ star, starElement }) => {
        star.update();
        starElement.style.top = `${star.y}px`;
    });

    requestAnimationFrame(updateStars);
}

for (let i = 0; i < 200; i++) {
    createStar();
}

document.addEventListener("mousedown", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    createStar(x, y);
});

updateStars();
