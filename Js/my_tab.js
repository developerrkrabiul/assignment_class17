//  all Selector


const tab_header = document.querySelectorAll('.my_taba_sec ul li a');
const tab_body = document.querySelectorAll('.my_taba_sec .tab_body .tab_pane');


tab_header.forEach(item =>{

    item.addEventListener('click', function(e){
        e.preventDefault();

        tab_header.forEach(item =>{

            if(item != this){
                item.classList.remove('active');
            }
        });

            item.classList.add('active');

            let tab_page = document.querySelector(this.getAttribute('href'));

            tab_body.forEach(item =>{
                item.classList.remove('active');
            });

            tab_page.classList.add('active');

    });
});