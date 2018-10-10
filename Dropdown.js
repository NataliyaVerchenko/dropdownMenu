/**
 * Created by user on 10-Oct-18.
 */
 class Dropdown {
    constructor() {
        this.toggler = 'data-toggle'
        this.value = 'dropdown'
        this.state = {
            current: null,
            previous: null,
        }
    }

    init() {
        document.addEventListener('click', event => {
            let isToggle =
                event.target.hasAttribute(this.toggler) &&
                event.target.getAttribute(this.toggler) === this.value;


        if(isToggle) {
            this.toggle(event.target);

            if(this.state.previous !== this.state.current && this.state.previous !== null) {
                this.state.previous.classList.remove('show');
            }

        } else {
            this.state.current.classList.remove('show');
        }

    })
    }

    toggle(element) {

        let parent = element.parentNode;

        [...parent.children].forEach(child => {

            if(child.classList.contains('dropdown-menu')) {

            if (child.classList.contains('show')) child.classList.remove('show');
            else child.classList.add('show');


            this.state.previous = this.state.current;
            this.state.current = child;
        }

    })

    }
}

let drop = new Dropdown();
drop.init();
