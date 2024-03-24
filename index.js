

function writeCards(namesArray, eventName) {
    let messages = [];

    for (let i = 0; i < namesArray.length; i++) {
      let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;

      messages.push(message);

      debugger;
    }

    return messages;
  }

  function countDown(startingNumber) {

      
      if (typeof startingNumber !== 'number' || startingNumber < 1 || !Number.isInteger(startingNumber)) {
          console.log("Please provide a positive integer as input.");
          return;
      }


      while (startingNumber >= 0) {
          console.log(startingNumber);
          startingNumber--;
      }

  }

  // Example usage:
  countDown(5);