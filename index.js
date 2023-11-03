(function() {
  'use strict';
  // YOUR CODE HERE

  let stopButton = document.getElementsByTagName('stopButton');
  let slowButton = document.getElementsByTagName('slowButton');
  let goButton = document.getElementsByTagName('goButton');
  let stopLight = document.getElementsByTagName('stopLight')[0];
  console.log(stopLight);
  let slowLight = document.getElementsByTagName('slowLight');
  let goLight = document.getElementsByTagName('goLight');

  const button = function(event){
    console.log(event.target);
    if(event.target.id === "stopButton"){
      stopLight.classList.add(".stop");
    }
  }
  window.addEventListener("click",button);

})();
