$(function() {
    window.onload = function() {
        var prm = [];
        var tags = document.querySelectorAll("a");
        for(var i = 0; i < tags.length; i++) {
            (function(i) {
                prm[i] = new Promise(function(resolve) {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', tags[i].getAttribute("href"));
                    xhr.responseType = 'arraybuffer';
                    xhr.addEventListener("load" ,function() {
                        resolve(xhr.status == 404 ? tags[i] : null);
                    });
                    xhr.send();
                });
            })(i);
            Promise.all(prm).then(function(data) {
                for(var i = 0; i < data.length; i++){
                    if(data[i]) {
                        var url = data[i].href;
                        var language = $('html').attr('lang');
                        if(language != 'en') {
                            var reg = new RegExp('/' + language + '/');
                            data[i].href = url.replace(reg, '/en/');
                        }
                    }
                }
            });
        }
    };
});