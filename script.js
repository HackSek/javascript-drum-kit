// listening to a keydown event on the window and firing up a function when that evet occurs
window.addEventListener('keydown', function(event) {

  // using ES6 template strings and the querySelector() method to find an audio element with value of data-key attribute being the keycode property of the event object parameter
  var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)

  // using ES6 template strings and the querySelector() method to find an element with class of "key" and the value of data-key attribute being the keycode property of the event object parameter
  var key = document.querySelector(`.key[data-key="${event.keyCode}"]`)

  // executing a set of instructions if the audio item exists
  if (audio) {

    // Rewinding the audio file
    audio.currentTime = 0

    // playing the audio element
    audio.play()

    // adding a class of playing to the item found using the querySelector() method of the document object
    key.classList.add("playing")

  }


})


// listening to a keyup event on the window and firing up a function when that event occurs
window.addEventListener('keyup', function(event) {

  // using ES6 template strings and the querySelector() method to find an element with class of "key" and the value of data-key attribute being the keycode property of the event object parameter
  var key = document.querySelector(`.key[data-key="${event.keyCode}"]`)

  // executing a set of instructions if the key item exists and has a class of "playing"
  if (key && key.classList.contains('playing')) {

    // removing the class of "playing" from that element
    key.classList.remove('playing')

  }

})