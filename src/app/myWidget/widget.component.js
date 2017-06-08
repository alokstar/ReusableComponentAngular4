"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by alokpandhare on 5/17/17.
 */
var core_1 = require("@angular/core");
var WidgetComponent = (function () {
    function WidgetComponent() {
    }
    WidgetComponent.prototype.changeBorder = function (val) {
        // alert(val);
        if (val === 'blue') {
            // console.log(this.colorValue);
            // document.getElementById('blue').style.border = '2px solid white';
            this.colorValueBlue.nativeElement.style.border = '2px solid white';
        }
        if (val === 'red') {
            console.log('in red');
            // document.getElementById('red').style.border = '2px solid white';
            this.colorValueRed.nativeElement.style.border = '2px solid white';
        }
        if (val === 'green') {
            // document.getElementById('green').style.border = '2px solid white';
            this.colorValueGreen.nativeElement.style.border = '2px solid white';
        }
    };
    return WidgetComponent;
}());
__decorate([
    core_1.ViewChild('red2'),
    __metadata("design:type", Object)
], WidgetComponent.prototype, "colorValueRed", void 0);
__decorate([
    core_1.ViewChild('green2'),
    __metadata("design:type", Object)
], WidgetComponent.prototype, "colorValueGreen", void 0);
__decorate([
    core_1.ViewChild('blue2'),
    __metadata("design:type", Object)
], WidgetComponent.prototype, "colorValueBlue", void 0);
WidgetComponent = __decorate([
    core_1.Component({
        selector: 'app-widget',
        templateUrl: './widget.component.html',
        styleUrls: ['./widget.component.less']
    })
], WidgetComponent);
exports.WidgetComponent = WidgetComponent;
//# sourceMappingURL=widget.component.js.map