// This filter uses the html from text being sent from the database instead of displaying it
app.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
