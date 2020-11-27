window.onload = function () {
    var main = document.getElementById('main');
    var phone_show = document.getElementById('phone_show');
    var footer = document.getElementById('footer');
    var sticky_box = main.getElementsByClassName('sticky_box')[0];
    var phone = main.getElementsByClassName('phone')[0];
    var h1 = document.getElementsByClassName('h1')[0];
    const rows = document.querySelectorAll('.ui ul li');

    //sticky_box
    document.addEventListener('scroll', (e) => {
        let sticky_box_scrolled = (document.documentElement.scrollTop - main.offsetTop) / phone.scrollHeight;
        if (sticky_box_scrolled >= 1) {
            sticky_box_scrolled = 1
        } else if (sticky_box_scrolled <= 0) {
            sticky_box_scrolled = 0
        }
        h1.style.setProperty('--percentage', `${sticky_box_scrolled * 100}%`)
    });

    //phone
    document.addEventListener('scroll', (e) => {
        let scrolled = (document.documentElement.scrollTop - phone.offsetTop / 2 - 500) / (footer.offsetTop / 2);
        let total = 1 / rows.length;
        for (let [index, row] of rows.entries()) {
            let start = total * index;
            let end = total * (index + 1);

            let progress = (scrolled - start) / (end - start);
            if (progress >= 1) progress = 1;
            if (progress <= 0) progress = 0;

            row.style.setProperty('--progress', progress)
        }
    });

}