window.addEventListener('mousemove', 
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;

        console.log(mouse.x)
    
})

function Player(w, h, color, x, y, type) {
    this.image = new Image();
    this.image.src = color;

    this.w = w;
    this.h = h;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    
    this.draw = function() {
            // ctx.drawImage(this.image, mouse.x - 30, mouse.y, this.w, this.h);
            
            if (type == "image") {
                ctx.drawImage(this.image, 
                    this.x, 
                    this.y,
                    this.w, this.h);
            } else {
                ctx.fillStyle = color;
                ctx.fillRect(mouse.x, mouse.y, this.w, this.h);
            }

    }
        this.update = function() {
        this.draw();
        
            
        }
    }

    

    function playerSpawn() {
        let x = mouse.x
        let y = mouse.y

        playerArray.push(new Player(60, 82, "red", 100, 100, "none"))
        console.log(playerArray)
    }

    playerSpawn()