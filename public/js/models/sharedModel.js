define(['app', 'jquery'], function (app, $) {
    return app.factory('sharedModel',
        function SharedModel() {
            var sharedModel = {
                value: "Initial value"
            };

            sharedModel.updateValue = function(value) {
                sharedModel.value = value;
            };

            return sharedModel;
        }
    );
});
