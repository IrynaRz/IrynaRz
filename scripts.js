const accordion = selector => {
    const containers = document.querySelectorAll(selector);

    const clickHandler = (e, elems) => {
        const parent = e.target.parentNode;
        console.log(parent);
        parent.classList.toggle('hide');

        elems.forEach(elem => {
            if (elem !== parent) {
                elem.classList.add('hide');
            }
        });
    }

    const accordionHandler = container => {
        const elems = container.querySelectorAll('.accordion__elem');

        elems.forEach(elem => {
            const title = elem.querySelector('.title');
            title.addEventListener('click', (e) => clickHandler(e, elems));
        });
    }

    containers.forEach(container => {
        accordionHandler(container);
    });
    
}

accordion('.accordion');