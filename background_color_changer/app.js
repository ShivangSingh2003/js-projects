const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach( function (button) {
    button.addEventListener('click', function(e) {

        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id //'grey'
                break;
            case 'white':
                body.style.backgroundColor = e.target.id //'white'
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id //'blue'
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id //'yellow'
                break;
            case 'purple':
                body.style.backgroundColor = e.target.id //'yellow'
                break;
        
            default:
                body.style.backgroundColor = 'white'
                break;
        }
    });
});