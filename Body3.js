function(){
    let man = document.getElementById('man');
    let startButton = document.getElementById('startButton');
    let stopButton = document.getElementById('stopButton');
    }
    
    let walking;
    let position = 0;     
           
           function startWalking() {
                walking = setInterval(() => {
                    position += 5;
                    man.style.transform = `translateX(${position}px)`;
                    if (position > window.innerWidth) {
                        position = -man.offsetWidth; // Reset position if it goes off screen
                    }
                }, 50);
            }
    
            function stopWalking() {
                clearInterval(walking);
            }
    
            startButton.addEventListener('click', startWalking);
            stopButton.addEventListener('click', stopWalking);