const activBtn = document.querySelectorAll(".link");
const showForm = document.querySelector('.modal_window');
const closeForm = document.querySelector('.btn_close');


activBtn.forEach(function(item){
    item.addEventListener('click', function(){
        showForm.style.display = 'block';
    });
});

closeForm.addEventListener("click", function(){
     showForm.style.display = 'none';
});
