let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

const inc_sound = new Audio('increase.mp3');
const dec_sound = new Audio('decrease.mp3');
const res_sound = new Audio('reset.mp3');

console.log(btns);

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--;
            dec_sound.play();
        }
        else if(styles.contains('increase')){
            count++;
            inc_sound.play();
        }
        else if(styles.contains('reset')){
            count = 0;
            res_sound.play();
        }
        if(count < 0) {
            value.style.color = "red";
        }
        if(count > 0) {
            value.style.color = "green";
        }
        if(count === 0){
            value.style.color = "#222";
        }


        value.textContent = count;
    });
});