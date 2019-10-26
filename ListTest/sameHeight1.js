/*https://benhowdle.im/easy-peasy-equal-heights.html*/
/*It also works with classes. I tried it and it worked.*/

function sameHeights(selector) {
    var selector = selector || '[class="SubList1"]',
        query = document.querySelectorAll(selector),
        elements = query.length,
        max = 0;
    if (elements) {
        while (elements--) {
            var element = query[elements];
            if (element.clientHeight > max) {
                max = element.clientHeight;
            }
        }
        elements = query.length;
        while (elements--) {
            var element = query[elements];
            element.style.height = max + 'px';
        }
    }
}

/*(the only important part is actually putting data-key="sameHeights" on the elements you want the same height)

Then to initialise the code, drop this in below where you included the above JavaScript:*/
if ('addEventListener' in window) {
    window.addEventListener('resize', function () {
        sameHeights();
    });
    window.addEventListener('load', function () {
        sameHeights();
    });
}



/*
To make different groups equal in height. Each set of elements you want to have equal heights must have the same value for their data-key="" set. E.g., data-key="sameHeights" for the first group, and data-key="otherSameHeights" for the second group and so on 

It also works with classes. I tried it with classes and it worked.
*/
if ('addEventListener' in window) {
    // first group
    window.addEventListener('resize', function () {
        sameHeights('[class="SubList1"]');
    });
    window.addEventListener('load', function () {
        sameHeights('[class="SubList1"]');
    });

    // second group
    window.addEventListener('resize', function () {
        sameHeights('[data-key="otherSameHeights"]');
    });
    window.addEventListener('load', function () {
        sameHeights('[data-key="otherSameHeights"]');
    });
}