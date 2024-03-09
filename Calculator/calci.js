// (function(){

    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.btn');
    const equal = document.querySelector('.btn-equal');
    const clear = document.querySelector('.btn-clear');


    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            // var val = e.getAttribute('data-num');
        //    var val = e.target.dataset.num;
        //     screen.value += val;
     var val = e.target.innerHTML;
     if(val !== '='){
        screen.value += val;
     }
     else{
        screen.value = eval(screen.value);
     }

            // console.log("heii")
            console.log(val);
        })
    });

    // equal.addEventListener('click', function(e){
    //     if(screen.value === '='){
    //         screen.value = e.eval(screen.value);
    //     }else{

    //     }
    // })

    clear.addEventListener('click', function(e){
        screen.value = ' ';

    })


// })();