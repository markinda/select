function select() {

    const select = document.querySelectorAll('.select');

    select.forEach(item => {

        const itemS = item.querySelectorAll('.select__item');
        const inputS = item.querySelector('.select__input');
        const titleS = item.querySelector('.select__title');
        const btnS = item.querySelector('.select__btn');

        btnS.addEventListener('click', () => {

            if (item.classList.contains('select--active')) {
                item.classList.remove('select--active');
            }
            else {
                select.forEach(item => {
                    item.classList.remove('select--active');
                });
                item.classList.add('select--active');
            }
        });

        itemS.forEach(item => {

            item.addEventListener('click', () => {

                titleS.textContent = item.getAttribute('data-text');
                inputS.value = item.getAttribute('data-value');

                select.forEach(item => {
                    item.classList.remove('select--active');
                });
            });
        });
    })
}

select();