function animateCounter(id, targetNumber, duration) {
    const element = document.getElementById(id);
    let startNumber = 0;
    const stepTime = Math.abs(Math.floor(duration / targetNumber));
    
    const timer = setInterval(() => {
      startNumber++;
      startNumber++;
      element.textContent = startNumber;
      if (startNumber >= targetNumber) {
        clearInterval(timer);
      }
    }, stepTime);
  }