let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;
let ctx = canvas.getContext('2d');


// Options
const outputEl = document.getElementById('fps-output');
const decimalPlaces = 2;
const updateEachSecond = 1;

// Cache values
const decimalPlacesRatio = Math.pow(10, decimalPlaces);
let   timeMeasurements = [];

// Final output
let fps = 0;

const tick = function() {
  timeMeasurements.push(performance.now());
  
  const msPassed = timeMeasurements[timeMeasurements.length - 1] - timeMeasurements[0];
  
  if (msPassed >= updateEachSecond * 1000) {
    fps = Math.round(timeMeasurements.length / msPassed * 1000 * decimalPlacesRatio) / decimalPlacesRatio;
    timeMeasurements = [];
  }

  outputEl.innerText = fps;

//   requestAnimationFrame(() => {
//     tick();
//   });
}


function animate() {

        requestAnimationFrame(animate);
        tick()

}


animate()
