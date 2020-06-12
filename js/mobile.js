// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('.box');

  //  box.addEventListener('touchstart', function (event) {
  //      event.preventDefault();
  //      console.log("Blue box: touchstart");
  //      console.log(event.target);
  //      console.log(event.touches[0].target);
  //      console.log(event.changedTouches);
  //      console.log(event.targetTouches);
//
  //  });

    box.addEventListener('touchmove', function (event) {
        event.preventDefault();
        console.log("Blue box: " + event.touches[0].pageX);

    });
//
   // box.addEventListener('touchend', function (event) {
   //     event.preventDefault();
   //     console.log("Blue box: touchend");
//
   // });

   //new RegExp('pattern', 'flags');
   ///pattern/ 

//     let ans = prompt('Введите ваше имя');

//     let reg = /n/gi;

// //    //console.log(ans.search(reg));
// //    console.log(ans.match(reg)); 

  //  console.log(reg.test(ans));

   // i
   // g
   // m

   // \d \D
   // \w \W
   // \s \S
   

  // let pass = prompt('Введите пароль');

  // console.log(pass.replace(/./g, "*"));
  // alert('12-34-56'.replace(/-/g, ':'));

    // let ans = prompt('Введите число');

    // let reg = /\d/g;

    // console.log(ans.match(reg)); 

    let str = 'My name is/ R2D2';

    // console.log(str.match(/\w\d\w\d/i));

    console.log(str.match(/\//i));

    //console.log(str.match(/ /i));

});