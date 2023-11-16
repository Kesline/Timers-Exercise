function countDown(time){
    // using an anonymous function
    let timer = setInterval(function(){
        time--;
        if(time <= 0){
          clearInterval(timer);
          console.log('DONE!');
        }
        else {
          console.log(time);
        }
    
      },1000)
}

//   function countDown(){
//     console.log(time);
// }

// function repeat(num, time){
//     for(let i = 0; i<= num; i--){
//         time();
//     }
// }

// function repeating(time){
//     time();
//     time();
//     time();
// }

// //setInterval(repeating,1000);