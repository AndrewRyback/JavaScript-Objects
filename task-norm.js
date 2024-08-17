
const time = {
  hours: 20,
  minutes: 59,
  seconds: 45,

  
  displayTime() {
    const h = String(this.hours).padStart(2, "0");
    const m = String(this.minutes).padStart(2, "0");
    const s = String(this.seconds).padStart(2, "0");
    console.log(`${h}:${m}:${s}`);
  },

 
  addSeconds(sec) {
    this.seconds += sec;


    if (this.seconds >= 60) {
      this.minutes += Math.floor(this.seconds / 60);
      this.seconds %= 60;
    }

  
    if (this.minutes >= 60) {
      this.hours += Math.floor(this.minutes / 60);
      this.minutes %= 60;
    }

   
    if (this.hours >= 24) {
      this.hours %= 24;
    }

    this.displayTime(); 
  },

  
  addMinutes(min) {
    this.minutes += min;

   
    if (this.minutes >= 60) {
      this.hours += Math.floor(this.minutes / 60);
      this.minutes %= 60;
    }

   
    if (this.hours >= 24) {
      this.hours %= 24;
    }

    this.displayTime(); 
  },

 
  addHours(hours) {
    this.hours += hours;

    
    if (this.hours >= 24) {
      this.hours %= 24;
    }

    this.displayTime(); 
  },
};


time.displayTime(); 
time.addSeconds(30);
time.addMinutes(75); 
time.addHours(3); 
