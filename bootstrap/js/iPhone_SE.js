window.onload = function () {
    var start = document.getElementById('start');
    var main = document.getElementById('main');
    var footer = document.getElementById('footer');
    var hardware = start.getElementsByClassName('hardware')[0];
    var copy_block = document.querySelector('.copy_block');
    var red = document.querySelector('.red');
    var h1 = document.querySelector('h1');
    var h3 = document.querySelector('h3');
    document.addEventListener('scroll', () => {
        //start
        var scrollTop = document.documentElement.scrollTop;
        let hardware_opacity = scrollTop / 150;
        let copy_block_opacity = (scrollTop - 100) / 250;
        let h1_opacity = (scrollTop - 150) / 300;
        let h3_opacity = (scrollTop - 550) / 800;
        let copy_block_reverse_opacity = (scrollTop - 300) / 400;
        let h1_reverse_opacity = (scrollTop - 350) / 450;

        if (hardware_opacity >= 1) {
            hardware_opacity = 1
        }
        if (h1_opacity >= 1) {
            h1_opacity = 1
        }
        hardware.style.setProperty('--hardware_opacity', `${hardware_opacity * 60}%`);

        if (scrollTop >= 100) {
            if (copy_block_opacity >= 1) {
                copy_block_opacity = 1
            }
            if (copy_block_opacity >= 1) {
                copy_block_opacity = 1
            }
            copy_block.style.setProperty('--copy_block_opacity', `${copy_block_opacity * 100}%`);
            copy_block.style.setProperty('--copy_block_top', `-${copy_block_opacity * 30}px`);
            h1.style.setProperty('--copy_block_opacity', `${h1_opacity * 100}%`);
            h1.style.setProperty('--copy_block_top', `-${h1_opacity * 30}px`);
            if (scrollTop >= 300) {
                if (copy_block_reverse_opacity >= 1) {
                    copy_block_reverse_opacity = 1
                }
                if (h1_reverse_opacity >= 1) {
                    h1_reverse_opacity = 1
                }
                copy_block.style.setProperty('--copy_block_opacity', `${100 - copy_block_reverse_opacity * 100}%`);
                h1.style.setProperty('--copy_block_opacity', `${100 - h1_reverse_opacity * 100}%`);
            }
            if (scrollTop >= 600) {
                if (h3_opacity >= 1) {
                    h3_opacity = 1
                }
                h3.style.setProperty('--h3_opacity', `${h3_opacity * 100}%`);
                h3.style.setProperty('--h3_top', `-${h3_opacity * 50}px`);
            } else {
                h3.style.setProperty('--h3_opacity', `${h3_opacity * 0}%`);
            }
        } else {
            copy_block.style.setProperty('--copy_block_opacity', `${copy_block_opacity * 0}%`);
            h1.style.setProperty('--copy_block_opacity', `${h1_opacity * 0}%`);
        }

        //sticky_container
        let noStickyOffset = document.documentElement.clientHeight * 2;
        let sticky_container_scrolled = (document.documentElement.scrollTop - main.offsetTop) / noStickyOffset;
        let $white = document.querySelector('.white');
        let $red = document.querySelector('.red');

        $white.style.clipPath = `inset(${((0.5 - sticky_container_scrolled) / 0.5) * 100}% 0 0 0)`;
        $red.style.clipPath = `inset(${((1 - sticky_container_scrolled) / 0.5) * 100}% 0 0 0)`;

        if (sticky_container_scrolled >= 1) {
            document.querySelector('.sticky-container').classList.add('no-sticky');
        } else {
            document.querySelector('.sticky-container').classList.remove('no-sticky');
        }

    });


};