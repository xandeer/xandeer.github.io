window.addEventListener('load', function () {
    var parent = document.getElementById('content');
    parent.insertBefore(document.getElementById('preamble'), parent.firstElementChild);

    if (document.body.classList.contains('home')) {
        return;
    }

    var cachedHash = '';
    var TOC_HASH = '#table-of-contents';
    $('.open-sidebar')[0].addEventListener('click', function (e) {
        if (location.hash !== TOC_HASH) {
            cachedHash = location.hash;
            location.hash = TOC_HASH;
            e.stopPropagation();
        }
    });

    // $(".close-sidebar")[0].addEventListener('click', function () {
    //     location.hash = cachedHash;
    // });

    $(TOC_HASH)[0].addEventListener('click', function (e) {
        e.stopPropagation();
    });

    $('body')[0].addEventListener('click', function () {
        if (location.hash === TOC_HASH) {
            location.hash = cachedHash;
        }
    });
});
