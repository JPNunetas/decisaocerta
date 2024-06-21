function updateSiteTags() {
    var siteTags = document.querySelectorAll('span#site');

    siteTags.forEach((e) => {
        e.innerText = window.location;
    });
}

updateSiteTags();