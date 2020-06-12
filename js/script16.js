let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

    box.style.backgroundColor = 'blue';
    btn[1].style.borderRadius = '100%';

    circle[0].style.backgroundColor = 'red';
    circle[1].style.backgroundColor = 'yellow';
    circle[2].style.backgroundColor = 'green';

  // for (let i = 0; i < heart.length; i++) {
  //     heart[i].style.backgroundColor = 'blue';
  // }

 //  heart.forEach(function(item, i, hearts) {
 //      item.style.backgroundColor = 'blue';

 //  });

    let div = document.createElement('div'),
        text = document.createTextNode('Тут был я');

    div.classList.add('black');

 //   document.body.appendChild(div);

 //wrapper.appendChild(div); 

// div.innerHTML = '<h1>Hello World!</h1>';

div.textContent = 'Hello World!';

 document.body.insertBefore(div, circle[0]);

 document.body.removeChild(circle[1]);

 wrapper.removeChild(heart[1]);

 document.body.replaceChild(btn[1], circle[1]);

    console.log(div);
    console.log(text);


    //console.log(box);
    //console.log(btn);
    //console.log(btn[0]);
    //console.log(circle[2]);
    console.log(heart[1]);
    //console.log(oneHeart);


    // Less 18
    let btnSecond = document.querySelectorAll("button"),
        wrap = document.querySelector('.wrapperr');

  // btnSecond[1].onclick = function() {
  //     alert('Вы нажали на вторую кнопку');
  // }; 

 // btnSecond[0].addEventListener('click', function(event) {
 //   //  console.log(event);
 //   //let target = event.target;
 //   //target.style.display = 'none';
 //   console.log('Произошло событие: ' + event.type + ' на элементе '
 //   + event.target);
 // });
//
 // wrap.addEventListener('click', function(event) {
 //   console.log('Произошло событие: ' + event.type + ' на элементе '
 //   + event.target);
 // });

 // btn[0].addEventListener('click', function() {
 //   alert('Вы опять нажали на вторую кнопку!');
 // });

 // btn[0].addEventListener('mouseenter', function(){
 //   alert('Вы навели на первую кнопку');
 // });

let link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Произошло событие: ' + event.type + ' на элементе '
    + event.target);
});

btnSecond.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('Мы вышли!');
    });
});