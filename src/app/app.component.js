"use strict";
var core_1 = require('@angular/core');
var shared_1 = require('./shared');
require('../style/app.scss');
var AppComponent = (function () {
    function AppComponent(api) {
        this.api = api;
        this.url = 'https://github.com/preboot/angular2-webpack';
        // Do something with api
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
        }), 
        __metadata('design:paramtypes', [shared_1.ApiService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map