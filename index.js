let element = document.querySelector("main#main");
    element.remove();

    const newHeader = document.createElement('h1');
    console.log(newHeader);
    newHeader.id = 'victory';
    newHeader.innerHTML = `Brett is the champion`;

