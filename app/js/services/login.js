'use strict';
define(['app'], function(app)
{
    app.factory("loginser", function($resource) {
        return $resource("/api/autharize", {}, {
            query: { method: "post", isArray: false}
        });
    });
});