//alert('Yolo Binches!')


function computerPlay() {
  let x = Math.floor(Math.random() * (3) + 1);
  switch (x) {
    case 1:
      return 'Rocks';
      break;

    case 2:
      return 'Paper';
      break;

    case 3:
      return 'Scissors';
      break;     
  }
};
