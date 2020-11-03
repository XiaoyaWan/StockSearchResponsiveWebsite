(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portfolio-portfolio-module"],{

/***/ "9enj":
/*!***********************************************!*\
  !*** ./src/app/portfolio/portfolio.module.ts ***!
  \***********************************************/
/*! exports provided: PortfolioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModule", function() { return PortfolioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio.component */ "zyDg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card.component */ "H6Pf");









const routes = [
    {
        path: '',
        component: _portfolio_component__WEBPACK_IMPORTED_MODULE_1__["PortfolioComponent"]
    }
];
class PortfolioModule {
}
PortfolioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PortfolioModule, bootstrap: [_portfolio_component__WEBPACK_IMPORTED_MODULE_1__["PortfolioComponent"], _card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"]] });
PortfolioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PortfolioModule_Factory(t) { return new (t || PortfolioModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortfolioModule, { declarations: [_portfolio_component__WEBPACK_IMPORTED_MODULE_1__["PortfolioComponent"],
        _card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ],
                exports: [],
                declarations: [
                    _portfolio_component__WEBPACK_IMPORTED_MODULE_1__["PortfolioComponent"],
                    _card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"]
                ],
                providers: [],
                bootstrap: [_portfolio_component__WEBPACK_IMPORTED_MODULE_1__["PortfolioComponent"], _card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "H6Pf":
/*!*********************************************!*\
  !*** ./src/app/portfolio/card.component.ts ***!
  \*********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio.service */ "pYqb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







function CardComponent_div_0__svg_svg_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_div_0__svg_svg_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quantity:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Avg. Cost/ Share:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Total Cost/ Share:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Change:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CardComponent_div_0__svg_svg_31_Template, 2, 0, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CardComponent_div_0__svg_svg_32_Template, 2, 0, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Current Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Market Value:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_0_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.resetValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_0_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.resetValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item == null ? null : ctx_r0.item.ticker);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item == null ? null : ctx_r0.item.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/details/" + (ctx_r0.item == null ? null : ctx_r0.item.ticker));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.formalizeNumber(ctx_r0.item == null ? null : ctx_r0.item.quantity, false));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.formalizeNumber(ctx_r0.getAvgCost(ctx_r0.item == null ? null : ctx_r0.item.totalCost, ctx_r0.item == null ? null : ctx_r0.item.quantity).toString(), true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.formalizeNumber(ctx_r0.item == null ? null : ctx_r0.item.totalCost, true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.getTextColor(ctx_r0.item == null ? null : ctx_r0.item.totalCost, ctx_r0.item == null ? null : ctx_r0.item.quantity, ctx_r0.item == null ? null : ctx_r0.item.last));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changeUpCaret(ctx_r0.item == null ? null : ctx_r0.item.totalCost, ctx_r0.item == null ? null : ctx_r0.item.quantity, ctx_r0.item == null ? null : ctx_r0.item.last));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changeDownCaret(ctx_r0.item == null ? null : ctx_r0.item.totalCost, ctx_r0.item == null ? null : ctx_r0.item.quantity, ctx_r0.item == null ? null : ctx_r0.item.last));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.formalizeNumber(ctx_r0.getChange(ctx_r0.item == null ? null : ctx_r0.item.totalCost, ctx_r0.item == null ? null : ctx_r0.item.quantity, ctx_r0.item == null ? null : ctx_r0.item.last).toString(), true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.getTextColor(ctx_r0.item == null ? null : ctx_r0.item.totalCost, ctx_r0.item == null ? null : ctx_r0.item.quantity, ctx_r0.item == null ? null : ctx_r0.item.last));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.formalizeNumber(ctx_r0.item == null ? null : ctx_r0.item.last, true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.getTextColor(ctx_r0.item == null ? null : ctx_r0.item.totalCost, ctx_r0.item == null ? null : ctx_r0.item.quantity, ctx_r0.item == null ? null : ctx_r0.item.last));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.formalizeNumber(ctx_r0.getMarketValue(ctx_r0.item == null ? null : ctx_r0.item.last, ctx_r0.item == null ? null : ctx_r0.item.quantity).toString(), true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#sellModal" + ctx_r0.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#buyModal" + ctx_r0.index);
} }
class CardComponent {
    constructor(missionService) {
        this.missionService = missionService;
        this.destroy = false;
        this.buyControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('0');
        this.buyModalTotalQuantity = 0;
        this.buyButtonDisable = true;
        this.sellControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('0');
        this.sellModalTotalQuantity = 0;
        this.sellButtonDisable = true;
    }
    ngOnInit() {
        this.buyControl.valueChanges.subscribe((input) => {
            if (input == null || !this.checkNum(input)) {
                this.buyModalTotalQuantity = 0;
            }
            else {
                this.buyModalTotalQuantity = parseInt(input, 10);
            }
            if (input > 0) {
                this.buyButtonDisable = false;
            }
            else {
                this.buyButtonDisable = true;
            }
        }, (error) => {
            console.log('ERROR');
            throw (error);
        });
        this.sellControl.valueChanges.subscribe((input) => {
            if (input == null || !this.checkNum(input)) {
                this.sellModalTotalQuantity = 0;
            }
            else {
                this.sellModalTotalQuantity = parseInt(input, 10);
            }
            if (input > 0 && input <= this.item.quantity) {
                this.sellButtonDisable = false;
            }
            else {
                this.sellButtonDisable = true;
            }
        }, (error) => {
            console.log('ERROR');
            throw (error);
        });
    }
    checkNum(nubmer) {
        const re = /^\d+$/;
        if (re.test(nubmer)) {
            return true;
        }
        else {
            return false;
        }
    }
    getAvgCost(totalCost, quantity) {
        return Math.round(parseFloat(totalCost) / parseInt(quantity, 10) * 100) / 100;
    }
    getChange(totalCost, quantity, last) {
        return Math.round((parseFloat(last) - this.getAvgCost(totalCost, quantity)) * 100) / 100;
    }
    getMarketValue(last, quantity) {
        return Math.round(parseFloat(last) * parseInt(quantity, 10) * 100) / 100;
    }
    buy(ticker, price, num) {
        const prevarray = JSON.parse(localStorage.getItem('portfolio'));
        const newarray = [];
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; prevarray != null && i < prevarray.length; i++) {
            if (prevarray[i].tickerId !== ticker) {
                newarray.push({ tickerId: prevarray[i].tickerId, name: prevarray[i].name,
                    totalCost: prevarray[i].totalCost, quantity: prevarray[i].quantity });
            }
            else {
                this.item.quantity = num + parseInt(prevarray[i].quantity, 10);
                this.item.totalCost = Math.round(parseFloat(prevarray[i].totalCost) * 100 + parseFloat(price) * num * 100) / 100;
                newarray.push({ tickerId: prevarray[i].tickerId, name: prevarray[i].name,
                    totalCost: Math.round(parseFloat(prevarray[i].totalCost) * 100 + parseFloat(price) * num * 100) / 100,
                    quantity: num + parseInt(prevarray[i].quantity, 10) });
            }
        }
        localStorage.removeItem('portfolio');
        localStorage.setItem('portfolio', JSON.stringify(newarray));
        this.missionService.announceMission('buy');
    }
    sell(ticker, price, num) {
        const prevarray = JSON.parse(localStorage.getItem('portfolio'));
        const newarray = [];
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; prevarray != null && i < prevarray.length; i++) {
            if (prevarray[i].tickerId !== ticker) {
                newarray.push({ tickerId: prevarray[i].tickerId, name: prevarray[i].name,
                    totalCost: prevarray[i].totalCost, quantity: prevarray[i].quantity });
            }
            else {
                const leftCost = Math.round(parseFloat(prevarray[i].totalCost) * 100 -
                    parseFloat(prevarray[i].totalCost) / parseInt(prevarray[i].quantity, 10) * num * 100) / 100;
                if (leftCost > 0) {
                    this.item.quantity = parseInt(prevarray[i].quantity, 10) - num;
                    this.item.totalCost = leftCost;
                    newarray.push({ tickerId: prevarray[i].tickerId, name: prevarray[i].name,
                        totalCost: leftCost,
                        quantity: parseInt(prevarray[i].quantity, 10) - num });
                }
                else {
                    this.destroy = true;
                }
            }
        }
        localStorage.removeItem('portfolio');
        localStorage.setItem('portfolio', JSON.stringify(newarray));
        this.missionService.announceMission('sell');
    }
    resetValue() {
        this.buyModalTotalQuantity = 0;
        this.buyControl.setValue('0');
        this.sellModalTotalQuantity = 0;
        this.sellControl.setValue('0');
    }
    getTextColor(totalCost, quantity, last) {
        if (this.getChange(totalCost, quantity, last) > 0) {
            return 'text-success';
        }
        else if (this.getChange(totalCost, quantity, last) < 0) {
            return 'text-danger';
        }
        else {
            return 'text-dark';
        }
    }
    changeUpCaret(totalCost, quantity, last) {
        if (this.getChange(totalCost, quantity, last) > 0) {
            return true;
        }
        else if (this.getChange(totalCost, quantity, last) < 0) {
            return false;
        }
        else {
            return false;
        }
    }
    changeDownCaret(totalCost, quantity, last) {
        if (this.getChange(totalCost, quantity, last) > 0) {
            return false;
        }
        else if (this.getChange(totalCost, quantity, last) < 0) {
            return true;
        }
        else {
            return false;
        }
    }
    formalizeNumber(num, isDigit) {
        if (isDigit) {
            let isNegative = '';
            if (parseFloat(num) < 0) {
                isNegative = '-';
            }
            const int = Math.abs(parseFloat(num)).toFixed(2).split('.')[0];
            const digit = parseFloat(num).toFixed(2).split('.')[1];
            return isNegative + this.formalizeNumber(int, false) + '.' + digit;
        }
        else {
            let isNegative = '';
            if (parseInt(num, 10) < 0) {
                isNegative = '-';
            }
            const str = parseInt(num, 10).toString();
            let newstr = '';
            for (let i = str.length; i >= 0; i -= 3) {
                if (i === str.length) {
                    if (i - 3 > 0) {
                        newstr = ',' + str.slice(i - 3, i);
                    }
                    else {
                        newstr = str.slice(0, i);
                    }
                }
                else {
                    if (i - 3 > 0) {
                        newstr = ',' + str.slice(i - 3, i) + newstr;
                    }
                    else {
                        newstr = str.slice(0, i) + newstr;
                    }
                }
            }
            return isNegative + newstr;
        }
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_portfolio_service__WEBPACK_IMPORTED_MODULE_2__["PortfolioService"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { item: "item", index: "index" }, decls: 45, vars: 17, consts: [["class", "card w-100 my-3 mx-0", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row", "col-12"], [1, "my-2"], [1, "row", "col-12", "flex-lg-row", "flex-column"], [1, "my-lg-auto", "pr-2", "my-2"], ["type", "number", "autofocus", "", "spinner", "", 1, "col-lg-9", "col-12", "form-control", "my-2", 3, "formControl"], [1, "modal-footer", "d-flex", "justify-content-between"], [1, "text-left"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "card", "w-100", "my-3", "mx-0"], [1, "card-header", "px-2", "px-lg-3"], [1, "row", "col-12", "d-flex", "align-items-end"], [1, "m-0", "m-lg-2", "font-weight-bold"], [1, "font-weight-bold", "text-muted", "my-0", "my-lg-2", "px-1"], [1, "stretched-link", 3, "routerLink"], [1, "card-body", "bg-transparent", "px-2", "px-lg-3"], [1, "card-text"], [1, "col-lg-6", "col-12", "float-left"], [1, "row"], [1, "col-6", "text-left", "px-lg-3", "px-0"], [1, "col-6", "text-right", "px-lg-3", "px-0"], ["style", "vertical-align: inherit", "width", ".7em", "height", ".7em", "viewBox", "0 0 16 16", "class", "bi bi-caret-up-fill", "fill", "green", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["style", "vertical-align: inherit", "width", ".7em", "height", ".7em", "viewBox", "0 0 16 16", "class", "bi bi-caret-down-fill", "fill", "red", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], [1, "card-footer", "d-flex", "flex-row-reverse"], ["data-toggle", "modal", "role", "button", 1, "btn", "btn-danger", "mx-2", 3, "click"], ["data-toggle", "modal", "role", "button", 1, "btn", "btn-primary", "mx-2", 3, "click"], ["width", ".7em", "height", ".7em", "viewBox", "0 0 16 16", "fill", "green", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-caret-up-fill", 2, "vertical-align", "inherit"], ["d", "M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"], ["width", ".7em", "height", ".7em", "viewBox", "0 0 16 16", "fill", "red", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-caret-down-fill", 2, "vertical-align", "inherit"], ["d", "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardComponent_div_0_Template, 49, 19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_button_click_21_listener() { return ctx.buy(ctx.item == null ? null : ctx.item.ticker, ctx.item == null ? null : ctx.item.last, ctx.buyModalTotalQuantity); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_button_click_43_listener() { return ctx.sell(ctx.item == null ? null : ctx.item.ticker, ctx.item == null ? null : ctx.item.last, ctx.sellModalTotalQuantity); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.destroy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "buyModal" + ctx.index)("aria-labelledby", "buyModalLabel" + ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "buyModalLabel" + ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item == null ? null : ctx.item.ticker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current Price: ", ctx.item == null ? null : ctx.item.last, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.buyControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Price: ", ctx.getMarketValue(ctx.item == null ? null : ctx.item.last, ctx.buyModalTotalQuantity.toString()).toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.buyButtonDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "sellModal" + ctx.index)("aria-labelledby", "sellModalLabel" + ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "sellModalLabel" + ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item == null ? null : ctx.item.ticker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current Price: ", ctx.item == null ? null : ctx.item.last, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.sellControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Price: ", ctx.getMarketValue(ctx.item == null ? null : ctx.item.last, ctx.sellModalTotalQuantity.toString()).toFixed(2), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.sellButtonDisable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'app-card', templateUrl: 'card.component.html' }]
    }], function () { return [{ type: _portfolio_service__WEBPACK_IMPORTED_MODULE_2__["PortfolioService"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "pYqb":
/*!************************************************!*\
  !*** ./src/app/portfolio/portfolio.service.ts ***!
  \************************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class PortfolioService {
    constructor(http) {
        this.http = http;
        this.missionAnnouncedSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.missionAnnounced$ = this.missionAnnouncedSource.asObservable();
    }
    announceMission(mission) {
        this.missionAnnouncedSource.next(mission);
    }
    getData(input) {
        return this.http.get('/simpledata?input=' + input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            console.log('error caught in portfolio service');
            console.error(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    }
}
PortfolioService.ɵfac = function PortfolioService_Factory(t) { return new (t || PortfolioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PortfolioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PortfolioService, factory: PortfolioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zyDg":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component */ "H6Pf");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio.service */ "pYqb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");







const _c0 = ["cardContainer"];
function PortfolioComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PortfolioComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Currently you don't have any stock.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PortfolioComponent_ng_template_5_Template(rf, ctx) { }
class PortfolioComponent {
    constructor(portfolioservice, resolver) {
        this.portfolioservice = portfolioservice;
        this.resolver = resolver;
        this.sortedInfoList = [];
        this.cardComponentRef = [];
    }
    updateData(isUpdate) {
        const temp = JSON.parse(localStorage.getItem('portfolio'));
        if (temp == null || temp.length === 0) {
            this.isEmpty = true;
        }
        else {
            this.isEmpty = false;
            this.sortedSticker = this.localInfoList.sort((a, b) => {
                const fa = a.tickerId;
                const fb = b.tickerId;
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
            const array = [];
            for (const item of this.sortedSticker) {
                array.push(item.tickerId);
            }
            this.portfolioservice.getData(array.toString()).subscribe((data) => {
                console.log('update');
                this.sortedInfoList = Array.from(Object.keys(data), k => data[k]);
                this.sortedInfoList = this.sortedInfoList.sort((a, b) => {
                    const fa = a.ticker;
                    const fb = b.ticker;
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                });
                for (let i = 0; i < this.sortedInfoList.length; i++) {
                    this.sortedInfoList[i].totalCost = this.sortedSticker[i].totalCost;
                    this.sortedInfoList[i].quantity = this.sortedSticker[i].quantity;
                    this.sortedInfoList[i].name = this.sortedSticker[i].name;
                }
                if (isUpdate) {
                    this.updateCardComponent(this.sortedInfoList);
                }
            }, (error) => {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            });
        }
    }
    createCardComponent(List) {
        // this.cardComponentRef = [];
        for (let i = 0; i < List.length; i++) {
            const factory = this.resolver.resolveComponentFactory(_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]);
            const component = this.container.createComponent(factory);
            component.instance.item = List[i];
            component.instance.index = i;
            this.cardComponentRef[i] = component;
        }
    }
    updateCardComponent(List) {
        for (let i = 0; i < List.length; i++) {
            console.log(i);
            if (this.cardComponentRef[i] != null) {
                console.log(this.cardComponentRef[i].instance.index);
                console.log(this.cardComponentRef[i].instance.item);
                console.log(List[i]);
                this.cardComponentRef[i].instance.item.last = List[i].last;
                console.log(this.cardComponentRef[i].instance.item);
            }
        }
        console.log('length:' + this.cardComponentRef.length);
    }
    ngOnDestroy() {
        clearTimeout(this.timeoutTimer);
    }
    ngAfterViewInit() {
        this.timeoutTimer = setTimeout(() => { this.isLoading = false; this.createCardComponent(this.sortedInfoList); }, 1200);
    }
    ngOnInit() {
        this.sortedInfoList = [];
        this.isLoading = true;
        this.localInfoList = JSON.parse(localStorage.getItem('portfolio'));
        this.updateData(false);
        this.subscription = this.portfolioservice.missionAnnounced$.subscribe(mission => {
            this.updateData(true);
        });
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_portfolio_service__WEBPACK_IMPORTED_MODULE_3__["PortfolioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], viewQuery: function PortfolioComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 7, vars: 2, consts: [[1, "my-lg-5", "my-4", "font-weight-bold", "text-left"], ["style", "display: flex; justify-content: center; align-items: center; height: calc(40vh - 20px);", 4, "ngIf"], ["class", "mx-auto my-auto alert alert-warning fade show", "role", "alert", 4, "ngIf"], ["class", "d-flex flex-column"], ["cardContainer", ""], [2, "display", "flex", "justify-content", "center", "align-items", "center", "height", "calc(40vh - 20px)"], ["mode", "indeterminate", 1, "mx-auto", "my-auto", 2, "margin", "0 auto", "display", "block"], ["role", "alert", 1, "mx-auto", "my-auto", "alert", "alert-warning", "fade", "show"], [1, "text-center", "my-auto"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " My Portfolio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PortfolioComponent_div_3_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PortfolioComponent_div_4_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PortfolioComponent_ng_template_5_Template, 0, 0, "ng-template", 3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.isEmpty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html'
            }]
    }], function () { return [{ type: _portfolio_service__WEBPACK_IMPORTED_MODULE_3__["PortfolioService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cardContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=portfolio-portfolio-module.js.map