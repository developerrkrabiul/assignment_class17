//  all Selector


const Theme_tab_header = document.querySelectorAll('.theme_menu ul li a');
const Theme_tab_body = document.querySelectorAll('.theme_option_left_sec .tab_body .tab_pane');


Theme_tab_header.forEach(item =>{

    item.addEventListener('click', function(e){
        e.preventDefault();

        Theme_tab_header.forEach(item =>{

            if(item != this){
                item.classList.remove('active');
            }
        });

            item.classList.add('active');

            let tab_page = document.querySelector(this.getAttribute('href'));

            Theme_tab_body.forEach(item =>{
                item.classList.remove('active');
            });

            tab_page.classList.add('active');

    });
});