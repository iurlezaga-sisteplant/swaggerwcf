window.onload = function () {
    //<editor-fold desc="Changeable Configuration Block">

    var url = window.location.search.match(/url=([^&]+)/);
    url = decodeURIComponent(url[1])
    window.ui = SwaggerUIBundle({
        url,
        dom_id: '#swagger-ui',
        deepLinking: true,
        defaultModelsExpandDepth: -1,
        tagsSorter: function (a, b) {
            if(a === 'Token') return -1
            return a.localeCompare(b);
        },
        presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset
        ],
        plugins: [
            SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout",
    });

    //</editor-fold>
};
