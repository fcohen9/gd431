function generateMilkshakes() {

    // get our milkshake element from the DOM and store it
    var originalMilkshake = document.querySelector(".assets__milkshake");

    // access our milkshake element's parent container
    var milkshakeContainer = originalMilkshake.parentNode;

    // get our browser's size
    browserWidth = document.documentElement.clientWidth;
    browserHeight = document.documentElement.clientHeight;

    // create each individual milkshake
    for (var i = 0; i < numberOfMilkshakes; i++) {

        // clone our original milkshake and add it to milkshakeContainer
        var milkshakeCopy = originalmilkshake.cloneNode(true);
        milkshakeContainer.appendChild(milkshakeCopy);

        // set our milkshake's initial position and related properties
        var initialXPos = getPosition(50, browserWidth);
        var initialYPos = getPosition(50, browserHeight);
        var speed = 5 + Math.random() * 40;

        // create our milkshake object
        var milkshakeObject = new Milkshake(milkshakeCopy,
            speed,
            initialXPos,
            initialYPos);
        milkshakes.push(milkshakeObject);
    }

    // remove the original milkshake because we no longer need it visible
    milkshakeContainer.removeChild(originalMilkshake);

    // call the movemilkshakes function every 30 milliseconds
    movemilkshakes();
}
