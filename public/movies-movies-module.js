(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movies-movies-module"],{

/***/ "1GfR":
/*!*************************************************************!*\
  !*** ./src/app/movies/movie-cards/movie-cards.component.ts ***!
  \*************************************************************/
/*! exports provided: MovieCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCardsComponent", function() { return MovieCardsComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../api-service.service */ "CmMg");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = ["searchForm"];
function MovieCardsComponent_div_0_span_63_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MovieCardsComponent_div_0_span_63_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.loadMorePre(ctx_r8.page); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MovieCardsComponent_div_0_span_65_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MovieCardsComponent_div_0_span_65_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.loadMorePre(ctx_r10.page - 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.page - 2);
} }
function MovieCardsComponent_div_0_span_67_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MovieCardsComponent_div_0_span_67_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.loadMore(ctx_r12.page - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.page - 1);
} }
const _c1 = function (a0) { return { "stickedNav": a0 }; };
function MovieCardsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Movie Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MovieCardsComponent_div_0_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.searchValueText = $event; })("keypress", function MovieCardsComponent_div_0_Template_input_keypress_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.textChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MovieCardsComponent_div_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.themeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ol", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h5", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "New Arrivals ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "app-commonmoviesearch", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ul", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, MovieCardsComponent_div_0_span_63_Template, 3, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, MovieCardsComponent_div_0_span_65_Template, 2, 1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, MovieCardsComponent_div_0_span_67_Template, 2, 1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MovieCardsComponent_div_0_Template_span_click_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.loadMoreNext(ctx_r18.page); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MovieCardsComponent_div_0_Template_span_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.loadMoreNext(ctx_r19.page); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, ctx_r0.valueScroll > 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.searchValueText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 10, ctx_r0.themeVal), "\u00A0THEME ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("movies", ctx_r0.movies)("valueScroll", ctx_r0.valueScroll)("page", ctx_r0.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.page > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.page > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.page > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.page, "");
} }
function MovieCardsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MovieCardsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MovieCardsComponent_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.scrollTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MovieCardsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-searc-page", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("event1", function MovieCardsComponent_div_5_Template_app_searc_page_event1_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.setTags($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("searchText", ctx_r3.searchMovies)("page", ctx_r3.page);
} }
class MovieCardsComponent {
    constructor(document, service, toast, route) {
        this.document = document;
        this.service = service;
        this.toast = toast;
        this.route = route;
        // constructor(private service: ApiServiceService,private toast: ToastrService) {}
        this.searchValueText = '';
        this.searchMovies = [];
        this.searchText = false;
        this.page = 2;
        this.valueScroll = 0;
        // movies = [];
        this.movies = [
            {
                description: "",
                genres: "",
                title: "",
                uuid: ""
            }
        ];
        this.arrayOfMain = [];
        this.loading = false;
        this.themeVal = 'dark';
    }
    textChange() {
        var _a, _b, _c, _d, _e;
        this.searchMovies = [];
        console.log((_a = this.searchForm) === null || _a === void 0 ? void 0 : _a.value.searchTerm);
        if (((_c = (_b = this.searchForm) === null || _b === void 0 ? void 0 : _b.value.searchTerm) === null || _c === void 0 ? void 0 : _c.length) > 2 && ((_d = this.searchForm) === null || _d === void 0 ? void 0 : _d.valid)) {
            // const formValue = this.searchForm?.valueChanges;
            // formValue?.pipe(
            //   map(data => data.searchTerm),
            //   debounceTime(250),
            //   distinctUntilChanged(),
            // ).subscribe((res) => {
            let val = (_e = this.searchForm) === null || _e === void 0 ? void 0 : _e.value.searchTerm.toLowerCase();
            this.searchMovies = this.movies.filter((data) => {
                var _a, _b, _c, _d;
                console.log(this.searchMovies, (_a = data.title) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(val), val);
                return ((_b = data.title) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(val)) || ((_c = data.description) === null || _c === void 0 ? void 0 : _c.toLowerCase().includes(val)) || ((_d = data.genres) === null || _d === void 0 ? void 0 : _d.toLowerCase().includes(val));
            });
            this.searchText = true;
            console.log(this.searchMovies);
        }
    }
    ngOnInit() {
        $('.modal').on('hidden.bs.modal', () => {
            this.getPages();
        });
        this.getPages();
        // this.themeChange()
        if (!localStorage.getItem('token')) {
            this.route.navigate(["/login"]);
        }
        let val = localStorage.getItem('theme');
        if (val == 'dark') {
            this.theme = 'dark';
        }
        else {
            this.theme = 'light';
        }
    }
    getPages() {
        this.loading = false;
        this.service.getMovies(this.page).subscribe((res) => {
            this.arrayOfMain = res.results;
            console.log(res);
            this.movies = [];
            let val = {
                uuid: "388c99da-0cba-4ff0-a528-faea153b43c3"
            };
            this.arrayOfMain.forEach((element, index) => {
                if (index == 8) {
                    this.movies.push(val);
                    this.movies.push(element);
                }
                else {
                    this.movies.push(element);
                }
            });
            console.log(res);
            this.loading = false;
        }, (error) => {
            this.loading = false;
            console.log(error);
            // this.toast.warning('Sorry Something went worng !!!')
            $('#exampleModal').modal('show');
        });
    }
    onWindowScroll() {
        //.scrollTop
        this.valueScroll = this.document.documentElement.scrollTop;
        console.log(this.document.documentElement.scrollTop);
    }
    scrollTop() {
        let scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    }
    loadMore(page) {
        console.log(page);
        if (page !== 1) {
            this.page = page - 1;
            this.getPages();
        }
    }
    loadMorePre(page) {
        console.log(page);
        this.page--;
        this.getPages();
    }
    loadMoreNext(page) {
        console.log(page);
        this.page = this.page + 1;
        this.getPages();
    }
    setTags(event) {
        console.log(event);
        if (event == 'false')
            this.searchText = false;
    }
    themeChange() {
        if (this.themeVal == 'dark') {
            localStorage.setItem('theme', 'dark');
            this.themeVal = 'light';
        }
        else {
            localStorage.setItem('theme', 'light');
            this.themeVal = 'dark';
        }
    }
}
MovieCardsComponent.ɵfac = function MovieCardsComponent_Factory(t) { return new (t || MovieCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
MovieCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MovieCardsComponent, selectors: [["app-movie-cards"]], viewQuery: function MovieCardsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchForm = _t.first);
    } }, hostBindings: function MovieCardsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function MovieCardsComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 8, vars: 4, consts: [[4, "ngIf"], [1, "row"], [1, "col-md-8", "ml-auto"], ["class", "col-md-3 ml-auto", "style", "position: absolute;height: 100vh;z-index: 111111111;", 4, "ngIf"], [4, "ngIfVh", "ngIf"], [1, "containerGet", 2, "text-align", "center", "border-radius", "0", "padding", "20px 1px 20px 57px", "color", "white"], [1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-dark", "bg-drak", "row", "navbarCode", 3, "ngClass"], [1, "col-md-2", "w-100"], ["routerLink", "/movies/Card", 1, "navbar-brand", "navbarFOnt"], [1, "navbarColor"], [1, "col-md-5", "ml-auto"], [1, "form-inline", "col-md-11"], ["searchForm", "ngForm"], [1, "ml-auto", "d-flex"], [1, "inputTag"], ["placeholder", "Search", "name", "searchTerm", "aria-label", "Search", 1, "form-control", "mr-2", "pb-1", 2, "width", "100%", "padding-left", "16px", "border", "none", "box-shadow", "none", "text-decoration", "none", "background", "transparent", "font-size", "14px", 3, "ngModel", "ngModelChange", "keypress"], ["aria-hidden", "true", 1, "fa", "fa-search", 2, "margin", "11px 6px 8px -18px", "color", "grey", "font-size", "15px"], [1, "theme", 3, "click"], [2, "z-index", "-1", "margin-top", "70px"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "3"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "4"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "5"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "6"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "7"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "8"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/prime1.webp", "alt", "", 2, "height", "50vh", "width", "100vw"], [1, "carousel-item"], ["src", "assets/prime2.webp", "alt", "", 2, "height", "50vh", "width", "100vw"], ["src", "assets/prime3.webp", "alt", "", 2, "height", "50vh", "width", "100vw"], ["src", "assets/prime4.webp", "alt", "", 2, "height", "50vh", "width", "100vw"], ["src", "assets/prime5.webp", "alt", "", 2, "height", "50vh", "width", "100vw"], ["src", "assets/prime6.webp", "alt", "", 2, "height", "50vh", "width", "100vw"], ["src", "assets/prime7.webp", "alt", "", 2, "height", "50vh", "width", "100vw"], ["src", "assets/prime8.webp", "alt", "", 2, "height", "50vh", "width", "100vw"], ["src", "assets/prime9.webp", "alt", "", 2, "height", "50vh", "width", "100vw"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [2, "color", "#fff", "margin", "32px 52px"], [1, "fas", "fa-forward"], [3, "movies", "valueScroll", "page"], [1, "container", "mt-2", "mr-0", "col-md-12", 2, "text-align", "center"], [1, "pagination"], [1, "pointer", 2, "color", "#fff"], ["class", "noclick pointer pl-2 pr-2 pt-1 pb-1 m-1 page", 3, "click", 4, "ngIf"], [1, "pointer"], ["class", " noclick num pointer pl-2 pr-2 pt-1 pb-1 m-1 page", "style", "color: #fff;", 3, "click", 4, "ngIf"], ["class", "activeClass pointer pl-2 pr-2 pt-1 pb-1 m-1 page", 3, "click", 4, "ngIf"], [1, "noclick", "num", "pointer", "pl-2", "pr-2", "pt-1", "pb-1", "m-1", "page", 2, "color", "#fff", 3, "click"], [1, "noclick", "pointer", "pl-2", "pr-2", "pt-1", "pb-1", "m-1", "page", 3, "click"], [1, "fas", "fa-chevron-circle-right"], [1, "fas", "fa-chevron-circle-left"], [1, "activeClass", "pointer", "pl-2", "pr-2", "pt-1", "pb-1", "m-1", "page", 3, "click"], [1, "col-md-3", "ml-auto", 2, "position", "absolute", "height", "100vh", "z-index", "111111111"], ["src", "assets/0b19df1c842634f3b669df87059e0c8f.gif", "alt", "", 2, "margin-top", "53%"], [1, "scrollButton", 3, "click"], [1, "fas", "fa-angle-up"], [3, "searchText", "page", "event1"]], template: function MovieCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MovieCardsComponent_div_0_Template, 75, 14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MovieCardsComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MovieCardsComponent_div_4_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MovieCardsComponent_div_5_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "footer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\nMovie Show @copywrite ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.valueScroll > 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchText);
    } }, styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.pics[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 362px;\n}\n\n.picccc[_ngcontent-%COMP%] {\n  box-shadow: 10px 10px 10px rgba(46, 56, 68, 0.5) !important;\n  margin: 3.8% 3.8%;\n}\n\n.ackdrop[_ngcontent-%COMP%] {\n  display: none;\n  background: rgba(0, 0, 0, 0.8);\n  width: 100%;\n  height: 500px;\n  margin-top: -320px;\n  opacity: 0.8;\n  z-index: 1;\n}\n\n.pics[_ngcontent-%COMP%]:hover   .ackdrop[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.pic-img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 50%;\n  margin: -19% 25.5%;\n}\n\n.person-info[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  bottom: 30px;\n  width: 100%;\n  padding: 0;\n  text-align: center;\n  color: aliceblue;\n}\n\n.pic-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 50%;\n  width: 100%;\n}\n\n.pic-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin: 3%;\n  padding: 5px 7px;\n  background-color: #fff;\n  height: 34px;\n  width: 34px;\n  display: inline-block;\n  font-size: 18px;\n  transition: 0.6s;\n  z-index: 11111;\n}\n\n.pic-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: transparent;\n  transform: scale(1.5);\n}\n\n.main[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.navbarCode[_ngcontent-%COMP%] {\n  height: 90px;\n  width: 102vw;\n  z-index: 11111;\n  background-color: rgba(255, 255, 255, 0.02) !important;\n  -webkit-backdrop-filter: blur(40px) !important;\n          backdrop-filter: blur(40px) !important;\n  box-shadow: 5px 5px 5px rgba(193, 198, 204, 0.5) !important;\n  justify-content: space-around;\n  transition: 0.6s;\n}\n\n.stickedNav[_ngcontent-%COMP%] {\n  height: 60px;\n  box-shadow: 5px 5px 5px rgba(70, 110, 161, 0.5) !important;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #5e5a5a;\n  opacity: 1;\n  \n}\n\n.blank[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-family: \"Archivo Black\", sans-serif;\n  font-weight: normal;\n  font-size: 2em;\n  text-align: center;\n  margin-bottom: 0;\n  margin-bottom: -0.25em;\n}\n\nul.pagination[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 5% 0 5% 0;\n}\n\nul.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  font-weight: bolder !important;\n}\n\nul.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  float: left;\n  padding: 5px 12px;\n  background-color: lightgrey;\n  border: 1px solid grey;\n  text-decoration: none;\n  border-radius: 5px;\n}\n\n.noclick[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.noclick[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #66a5e4;\n}\n\n.activeClass[_ngcontent-%COMP%] {\n  color: #66a5e4;\n}\n\n.inputTag[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #a7a5a5;\n  border-radius: 5px;\n  color: grey;\n  background-color: white;\n  border-radius: 30px;\n  width: 100%;\n  height: 40px;\n  margin: auto 0 auto auto;\n  transition: 0.8s;\n}\n\n.inputTag[_ngcontent-%COMP%]:hover {\n  display: flex;\n  border: 1px solid #a7a5a5;\n  border-radius: 5px;\n  color: grey;\n  background-color: white;\n  border-radius: 30px;\n  width: 100%;\n}\n\ninput[_ngcontent-%COMP%]   .navbarFOnt[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: bolder;\n  text-transform: uppercase;\n  margin-left: 32px;\n  color: white;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 10px 10px 0px 0px;\n}\n\n@media (max-width: 1040px) {\n  .pic-icon[_ngcontent-%COMP%] {\n    position: relative;\n    top: 46%;\n    width: 100%;\n  }\n}\n\n@media (max-width: 800px) {\n  .pic-img[_ngcontent-%COMP%] {\n    height: 70%;\n    width: 50%;\n    margin: 2% 25.5% 8%;\n  }\n}\n\n@media (max-width: 770px) {\n  .tag[_ngcontent-%COMP%] {\n    margin-top: -44px;\n  }\n\n  .taged[_ngcontent-%COMP%] {\n    margin-top: -34px;\n  }\n}\n\n.detailButton[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 43px;\n  border: 2px solid #fff;\n  outline: none;\n  background-color: #fff;\n  color: #666363;\n  font-weight: bolder;\n  position: relative;\n  top: 41%;\n  left: 27%;\n  transition: 0.5s linear;\n}\n\n.detailButton[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: black;\n}\n\n.navbarColor[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-left: 18px;\n}\n\n.containerGet[_ngcontent-%COMP%] {\n  padding: 15px;\n  z-index: 11111;\n  margin-top: 5%;\n  margin-left: -8%;\n  background-color: rgba(255, 255, 255, 0.2) !important;\n  -webkit-backdrop-filter: blur(40px) !important;\n          backdrop-filter: blur(40px) !important;\n  border-radius: 10px;\n  box-shadow: 10px 10px 10px rgba(46, 56, 68, 0.5) !important;\n}\n\n.styleDisplayNone[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.6s ease-in-out;\n  transform: translateX(500%);\n}\n\n.styleDisplay[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n\n#myDIV[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 220vh;\n  background-image: linear-gradient(to right top, #88a63c, #969933, #a18c30, #a77f32, #aa7338, #b56c46, #ba6657, #bb6368, #bd6888, #b474a7, #9f82c1, #8092d2);\n  transition: 0.5s;\n  animation: mymove 5s infinite;\n}\n\n@keyframes mymove {\n  from {\n    background-image: linear-gradient(to right top, #55bd47, #6f8948, #828533, #997f21, #b27518, #c5672c, #d35843, #da4c5e, #ce2d70, #ae579e, #8663ae, #576cb1);\n  }\n  to {\n    background-image: linear-gradient(to right top, #88a63c, #969933, #a18c30, #a77f32, #ec8d27, #b56c46, #a74837, #bb6368, #bd6888, #b474a7, #9f82c1, #3c53aa);\n  }\n}\n\n.scrollButton[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 45px;\n  border: 1px solid grey;\n  background-color: rgba(255, 255, 255, 0.5);\n  text-align: center;\n  position: fixed;\n  bottom: 70px;\n  right: 10px;\n  border-radius: 5px;\n  font-size: 25px;\n  z-index: 1111111111;\n}\n\n.theme[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  outline: none;\n  background-color: transparent;\n  color: white;\n  margin-left: 20px;\n  padding: 5px;\n  transition: 0.6s;\n}\n\n.theme[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vdmllLWNhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRO0VBQ0ksc0JBQUE7QUFBWjs7QUFLUTtFQUVJLGdCQUFBO0VBQ0EsYUFBQTtBQUhaOztBQWFRO0VBQ0ksMkRBQUE7RUFDSixpQkFBQTtBQVZSOztBQVlRO0VBQ0osYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBVEo7O0FBV1E7RUFDSSxjQUFBO0FBUlo7O0FBV1E7RUFDRyxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBUlg7O0FBWVE7RUFFQSxpQkFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFWWjs7QUFZUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFUWjs7QUFXUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVJaOztBQVVRO0VBQ0ksV0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUFQWjs7QUFVUTtFQUNJLGFBQUE7QUFQWjs7QUFVRTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNEQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDJEQUFBO0VBQ0osNkJBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVJO0VBQ0UsWUFBQTtFQUNGLDBEQUFBO0FBUEo7O0FBVUU7RUFDQSxjQUFBO0VBRUEsVUFBQTtFQUFZLFlBQUE7QUFQZDs7QUFVQTtFQUNJLFdBQUE7QUFQSjs7QUFVQTtFQUNFLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBUEY7O0FBU0E7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7QUFORjs7QUFTQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQU5GOztBQVNBO0VBQ0ksZUFBQTtBQU5KOztBQVVBO0VBQ0ssZUFBQTtFQUNGLGNBQUE7QUFQSDs7QUFTQTtFQUNHLGNBQUE7QUFOSDs7QUFRQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0osbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFMQTs7QUFRQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBTEo7O0FBU0E7RUFFSSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFQSjs7QUFVQTtFQUVBLFlBQUE7RUFDQSxnQ0FBQTtBQVJBOztBQVVBO0VBQ0U7SUFDRyxrQkFBQTtJQUNPLFFBQUE7SUFDQSxXQUFBO0VBUFY7QUFDRjs7QUFTQTtFQUNFO0lBQ0ssV0FBQTtJQUNILFVBQUE7SUFDQSxtQkFBQTtFQVBGO0FBQ0Y7O0FBVUE7RUFDRTtJQUNNLGlCQUFBO0VBUk47O0VBVUE7SUFDRSxpQkFBQTtFQVBGO0FBQ0Y7O0FBV0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBVEo7O0FBV0E7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7QUFSSjs7QUFVQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQVBKOztBQVNBO0VBQ0ksYUFBQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxREFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSxtQkFBQTtFQUNBLDJEQUFBO0FBTk47O0FBUUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtBQUxBOztBQU9BO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FBSkE7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUVBLDJKQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQUpGOztBQU9BO0VBQ0U7SUFBTSwySkFBQTtFQUhOO0VBSUE7SUFBSSwySkFBQTtFQURKO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSx1QkFBQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDRSxnQkFBQTtBQUNOOztBQUNBO0VBQ0csdUJBQUE7RUFDQyxZQUFBO0FBRUoiLCJmaWxlIjoibW92aWUtY2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgKntcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vICRiYWNrR3JvdW5kR3JhZGllbnQ6bGluZWFyLWdyYWRpZW50KDc1ZGVnLCNiNmJmYzksICMzNTgwY2MpO1xuICAgICAgICAucGljc3tcbiAgICAgICAgLy8gIGZsZXg6IDE7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNjJweDtcbiAgICAgICAgICAvLyAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAvLyAgIHRyYW5zaXRpb246IC42cztcbiAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgNjMsIDE0NCk7XG4gICAgICAgIC8vICAgIGJhY2tncm91bmQtaW1hZ2U6ICRiYWNrR3JvdW5kR3JhZGllbnRcbiAgICAgICAgLy8gICAgZmlsdGVyOiBncmF5c2NhbGUoODAlKTtcbiAgICAgICAgICAgXG5cbiAgICAgICAgfVxuICAgICAgICAucGljY2Nje1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSg0Niw1Niw2OCwwLjUpIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAzLjglIDMuOCU7XG4gICAgICAgIH1cbiAgICAgICAgLmFja2Ryb3B7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBtYXJnaW4tdG9wOiAtMzIwcHg7XG4gICAgb3BhY2l0eTogLjg7XG4gICAgei1pbmRleDogMTtcbn1cbiAgICAgICAgLnBpY3M6aG92ZXIgLmFja2Ryb3B7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgLnBpYy1pbWd7XG4gICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgbWFyZ2luOiAtMTklIDI1LjUlIDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICBcbiAgICAgICAgLnBlcnNvbi1pbmZve1xuICAgICAgICAvLyAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICAgICAgYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IGFsaWNlYmx1ZVxuICAgICAgICB9XG4gICAgICAgIC5waWMtaWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5waWMtaWNvbiBhe1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgbWFyZ2luOiAzJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCA3cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuNnM7XG4gICAgICAgICAgICB6LWluZGV4OiAxMTExMTtcbiAgICAgICAgfVxuICAgICAgICAucGljLWljb24gYTpob3ZlcntcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm1haW57XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICBcbiAgICAgICAgfVxuICAgIFxuICAubmF2YmFyQ29kZXtcbiAgICAgIGhlaWdodDogOTBweDtcbiAgICAgIHdpZHRoOiAxMDJ2dztcbiAgICAgIHotaW5kZXg6IDExMTExO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjAyKSFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCkhaW1wb3J0YW50O1xuICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgxOTMsIDE5OCwgMjA0LCAwLjUpIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRyYW5zaXRpb246IC42cztcbiAgICB9XG5cbiAgICAuc3RpY2tlZE5hdntcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDcwLCAxMTAsIDE2MSwgMC41KSFpbXBvcnRhbnQ7XG5cbiAgICB9XG4gIDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiKDk0LCA5MCwgOTApO1xuXG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cbiAgXG59XG4uYmxhbmt7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmg0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXJjaGl2byBCbGFja1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAtMC4yNWVtO1xufVxudWwucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA1JSAwIDUlIDA7XG59XG5cbnVsLnBhZ2luYXRpb24gbGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtd2VpZ2h0OmJvbGRlciFpbXBvcnRhbnQ7XG59XG5cbnVsLnBhZ2luYXRpb24gbGkgYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBcbn1cbi5ub2NsaWNrIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICBcbn1cblxuLm5vY2xpY2s6aG92ZXJ7XG4gICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgIGNvbG9yOiAjNjZhNWU0OyBcbn1cbi5hY3RpdmVDbGFzc3tcbiAgIGNvbG9yOiAjNjZhNWU0OyBcbn1cbi5pbnB1dFRhZ3tcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTY3LCAxNjUsIDE2NSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuYm9yZGVyLXJhZGl1czozMHB4O1xud2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDQwcHg7XG5tYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG50cmFuc2l0aW9uOiAuOHMgO1xuXG59XG4uaW5wdXRUYWc6aG92ZXJ7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2NywgMTY1LCAxNjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbmlucHV0XG4ubmF2YmFyRk9udHtcbiAgICBmb250LXNpemU6MTJweCFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyB0ZXh0LXNoYWRvdzogM3B4IDFweCAxcHggIHJnYmEoMjAxLCAyMTYsIDE2NywgMC41KTtcbn1cbi5tb2RhbC1oZWFkZXJ7XG4vLyBiYWNrZ3JvdW5kLWltYWdlOiAkYmFja0dyb3VuZEdyYWRpZW50O1xuY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbmJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6MTA0MHB4KXtcbiAgLnBpYy1pY29ue1xuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDQ2JTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDo4MDBweCl7XG4gIC5waWMtaW1ne1xuICAgICAgIGhlaWdodDogNzAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAyJSAyNS41JSA4JTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDo3NzBweCl7XG4gIC50YWcge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNDRweFxuICB9XG4gIC50YWdlZHtcbiAgICBtYXJnaW4tdG9wOiAtMzRweDtcbiAgfVxuXG59XG5cbi5kZXRhaWxCdXR0b24ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA0M3B4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiByZ2IoMTAyLCA5OSwgOTkpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNDElO1xuICAgIGxlZnQ6IDI3JTtcbiAgICB0cmFuc2l0aW9uOiAuNXMgbGluZWFyIDtcbn1cbi5kZXRhaWxCdXR0b246aG92ZXJ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjayA7XG59XG4ubmF2YmFyQ29sb3J7XG4gICAgZm9udC1zaXplOjIycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG59XG4uY29udGFpbmVyR2V0e1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICB6LWluZGV4OiAxMTExMTtcbiAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgbWFyZ2luLWxlZnQ6IC04JTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKSFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCkhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoNDYsNTYsNjgsMC41KSFpbXBvcnRhbnQ7ICBcbn1cbi5zdHlsZURpc3BsYXlOb25le1xub3BhY2l0eTogMDsgIFxudHJhbnNpdGlvbjpvcGFjaXR5IC42cyBlYXNlLWluLW91dDtcbnRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDAlKTtcbn1cbi5zdHlsZURpc3BsYXl7XG5vcGFjaXR5OiAxO1xudHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuI215RElWIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDIyMHZoO1xuICAgICAgLy8gYm94LXNoYWRvdzogNTBweCA1MHB4IDUwcHggcmdiYSgxNjgsIDE3NiwgMTg3LCAxKSFpbXBvcnRhbnQ7ICBcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgIzg4YTYzYywgIzk2OTkzMywgI2ExOGMzMCwgI2E3N2YzMiwgI2FhNzMzOCwgI2I1NmM0NiwgI2JhNjY1NywgI2JiNjM2OCwgI2JkNjg4OCwgI2I0NzRhNywgIzlmODJjMSwgIzgwOTJkMik7XG4gIHRyYW5zaXRpb246IC41cztcbiAgYW5pbWF0aW9uOiBteW1vdmUgNXMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgbXltb3ZlIHtcbiAgZnJvbSB7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgIzU1YmQ0NywgIzZmODk0OCwgIzgyODUzMywgIzk5N2YyMSwgI2IyNzUxOCwgI2M1NjcyYywgI2QzNTg0MywgI2RhNGM1ZSwgI2NlMmQ3MCwgI2FlNTc5ZSwgIzg2NjNhZSwgIzU3NmNiMSk7fVxuICB0byB7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgIzg4YTYzYywgIzk2OTkzMywgI2ExOGMzMCwgI2E3N2YzMiwgI2VjOGQyNywgI2I1NmM0NiwgI2E3NDgzNywgI2JiNjM2OCwgI2JkNjg4OCwgI2I0NzRhNywgIzlmODJjMSwgIzNjNTNhYSk7fVxufVxuLnNjcm9sbEJ1dHRvbntcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA3MHB4O1xuICByaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIHotaW5kZXg6IDExMTExMTExMTE7XG59XG4udGhlbWV7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIHRyYW5zaXRpb246IC42cztcbn1cbi50aGVtZTpob3ZlcntcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn0iXX0= */"] });


/***/ }),

/***/ "348/":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MoviesComponent {
    constructor() { }
    ngOnInit() {
    }
}
MoviesComponent.ɵfac = function MoviesComponent_Factory(t) { return new (t || MoviesComponent)(); };
MoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesComponent, selectors: [["app-movies"]], decls: 2, vars: 0, template: function MoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hkjdhkwej");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3ZpZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "EA54":
/*!*****************************************!*\
  !*** ./src/app/movies/movies.module.ts ***!
  \*****************************************/
/*! exports provided: MoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movies_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies-routing.module */ "fLFp");
/* harmony import */ var _movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies.component */ "348/");
/* harmony import */ var _movie_cards_movie_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie-cards/movie-cards.component */ "1GfR");
/* harmony import */ var _searc_page_searc_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searc-page/searc-page.component */ "fdD1");
/* harmony import */ var _commonmoviesearch_commonmoviesearch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commonmoviesearch/commonmoviesearch.component */ "L7EQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");













class MoviesModule {
}
MoviesModule.ɵfac = function MoviesModule_Factory(t) { return new (t || MoviesModule)(); };
MoviesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: MoviesModule });
MoviesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _movies_routing_module__WEBPACK_IMPORTED_MODULE_3__["MoviesRoutingModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MoviesModule, { declarations: [_movies_component__WEBPACK_IMPORTED_MODULE_4__["MoviesComponent"],
        _movie_cards_movie_cards_component__WEBPACK_IMPORTED_MODULE_5__["MovieCardsComponent"],
        _searc_page_searc_page_component__WEBPACK_IMPORTED_MODULE_6__["SearcPageComponent"],
        _commonmoviesearch_commonmoviesearch_component__WEBPACK_IMPORTED_MODULE_7__["CommonmoviesearchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _movies_routing_module__WEBPACK_IMPORTED_MODULE_3__["MoviesRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetComponentScope"](_movie_cards_movie_cards_component__WEBPACK_IMPORTED_MODULE_5__["MovieCardsComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _commonmoviesearch_commonmoviesearch_component__WEBPACK_IMPORTED_MODULE_7__["CommonmoviesearchComponent"],
    _searc_page_searc_page_component__WEBPACK_IMPORTED_MODULE_6__["SearcPageComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]]);


/***/ }),

/***/ "L7EQ":
/*!*************************************************************************!*\
  !*** ./src/app/movies/commonmoviesearch/commonmoviesearch.component.ts ***!
  \*************************************************************************/
/*! exports provided: CommonmoviesearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonmoviesearchComponent", function() { return CommonmoviesearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../api-service.service */ "CmMg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CommonmoviesearchComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonmoviesearchComponent_div_2_div_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const movie_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.openModal(movie_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://ui-avatars.com/api/?background=random&&name=", movie_r3.title, "&&rounded=true", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r3.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 4, movie_r3.description, 0, 20), "....");
} }
function CommonmoviesearchComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommonmoviesearchComponent_div_2_div_1_Template, 24, 8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", movie_r3.title);
} }
function CommonmoviesearchComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Genres :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.genres);
} }
function CommonmoviesearchComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Description :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.discription);
} }
class CommonmoviesearchComponent {
    constructor(service) {
        this.service = service;
        this.title = '';
        this.discription = '';
        this.genres = '';
        this.arrayOfMain = [];
    }
    ngOnInit() {
        $('.modal').on('hidden.bs.modal', () => {
            this.getPages();
        });
    }
    getPages() {
        console.log(this.page);
        this.service.getMovies(this.page).subscribe((res) => {
            this.arrayOfMain = res.results;
            console.log(res);
            this.movies = [];
            let val = {
                uuid: "388c99da-0cba-4ff0-a528-faea153b43c3"
            };
            this.arrayOfMain.forEach((element, index) => {
                if (index == 8) {
                    this.movies.push(val);
                    this.movies.push(element);
                }
                else {
                    this.movies.push(element);
                }
            });
            console.log(res);
        }, (error) => {
            console.log(error);
            // this.toast.warning('Sorry Something went worng !!!')
            $('#exampleModal').modal('show');
        });
    }
    openModal(item) {
        console.log(item);
        this.title = item.title;
        this.discription = item.description;
        this.genres = item.genres;
        $('#1exampleModal').modal('show');
    }
    loadMoreNext(page) {
        console.log(page);
        this.page = this.page + 1;
        this.getPages();
    }
}
CommonmoviesearchComponent.ɵfac = function CommonmoviesearchComponent_Factory(t) { return new (t || CommonmoviesearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ApiServiceService"])); };
CommonmoviesearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommonmoviesearchComponent, selectors: [["app-commonmoviesearch"]], inputs: { movies: "movies", valueScroll: "valueScroll", page: "page", searchdata: "searchdata" }, decls: 34, vars: 5, consts: [[1, "main", "row", "mx-4"], [1, "row", "ml-2", 2, "width", "100%"], ["class", " col-md-3 p-0 styleDisplay", 4, "ngFor", "ngForOf"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "1111111111", "margin-top", "14%", "width", "83%"], ["role", "document", 1, "modal-dialog"], [2, "border-radius", "10px"], [1, "containerGet", 2, "background-color", "rgba(255, 255, 255, 0.8) !important", "margin-left", "40%"], ["align", "center", "id", "exampleModalLabel", 1, "modal-title"], [1, "modal-body", "m-auto", 3, "click"], ["type", "button", "data-dismiss", "modal", 2, "border", "none", "text-decoration", "none", "background-color", "transparent", "z-index", "1111111111", "width", "100%", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-refresh", 2, "font-size", "20px"], ["id", "1exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "z-index", "1111111111", "margin-top", "8%", "max-height", "100vh", "overflow-y", "auto!important", "width", "100%"], ["role", "document", 1, "modal-dialog", 2, "max-width", "80% !important"], [1, "modal-header", "modal-body", "containerGet", 2, "border-radius", "10px", "border", "2px solid grey"], ["id", "exampleModalLabel", 1, "modal-title", "row", "w-100"], [1, "col-md-8", "containerGet", 2, "width", "100%", "min-height", "250px", "margin", "0 0 0 9%"], [1, "", 2, "padding-right", "13%"], [1, "d-flex"], [2, "flex", "2", "color", "black"], [2, "margin-top", "-3px", "flex", "7"], ["class", "d-flex", 4, "ngIf"], [1, "col-md-4", 2, "margin-left", "-9%", "z-index", "111111"], ["alt", "", 1, "pic-img", 2, "width", "65%", "margin", "0px", 3, "src"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 2, "z-index", "11111111"], ["aria-hidden", "true"], [1, "col-md-3", "p-0", "styleDisplay"], ["class", "picccc containerGet", "style", "margin-left: 0;", 4, "ngIf"], [1, "picccc", "containerGet", 2, "margin-left", "0"], [1, "pics"], [2, "height", "317px"], ["alt", "", 1, "pic-img", 3, "src"], [1, "person-info"], [2, "color", "white"], [1, "ackdrop"], [1, "detailButton", 3, "click"], ["align", "center", 1, "pic-icon"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-instagram"], [1, "fab", "fa-linkedin"]], template: function CommonmoviesearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommonmoviesearchComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Something went wrong please ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Click on refresh icon!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonmoviesearchComponent_Template_div_click_11_listener() { return ctx.getPages(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonmoviesearchComponent_Template_button_click_12_listener() { return ctx.getPages(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Title :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CommonmoviesearchComponent_div_27_Template, 6, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CommonmoviesearchComponent_div_28_Template, 6, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.discription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://ui-avatars.com/api/?background=random&&name=", ctx.title, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.pics[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 362px;\n}\n\n.picccc[_ngcontent-%COMP%] {\n  box-shadow: 10px 10px 10px rgba(46, 56, 68, 0.5) !important;\n  margin: 3.8% 3.8%;\n}\n\n.ackdrop[_ngcontent-%COMP%] {\n  display: none;\n  background: rgba(0, 0, 0, 0.8);\n  width: 100%;\n  height: 500px;\n  margin-top: -320px;\n  opacity: 0.8;\n  z-index: 1;\n}\n\n.pics[_ngcontent-%COMP%]:hover   .ackdrop[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.pic-img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 50%;\n  margin: -19% 25.5%;\n}\n\n.person-info[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  bottom: 30px;\n  width: 100%;\n  padding: 0;\n  text-align: center;\n  color: aliceblue;\n}\n\n.pic-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 50%;\n  width: 100%;\n}\n\n.pic-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin: 3%;\n  padding: 5px 7px;\n  background-color: #fff;\n  height: 34px;\n  width: 34px;\n  display: inline-block;\n  font-size: 18px;\n  transition: 0.6s;\n  z-index: 11111;\n}\n\n.pic-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: transparent;\n  transform: scale(1.5);\n}\n\n.main[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.navbarCode[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 100vw;\n  z-index: 11111;\n  background-color: rgba(255, 255, 255, 0.02) !important;\n  -webkit-backdrop-filter: blur(40px) !important;\n          backdrop-filter: blur(40px) !important;\n  box-shadow: 10px 10px 10px rgba(46, 56, 68, 0.5) !important;\n  justify-content: space-around;\n  transition: 0.6s;\n}\n\n.stickedNav[_ngcontent-%COMP%] {\n  height: 60px;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #5e5a5a;\n  opacity: 1;\n  \n}\n\n.blank[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-family: \"Archivo Black\", sans-serif;\n  font-weight: normal;\n  font-size: 2em;\n  text-align: center;\n  margin-bottom: 0;\n  margin-bottom: -0.25em;\n}\n\nul.pagination[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 5% 0 10% 0;\n}\n\nul.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  font-weight: bolder !important;\n}\n\nul.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  float: left;\n  padding: 5px 12px;\n  background-color: lightgrey;\n  border: 1px solid grey;\n  text-decoration: none;\n  border-radius: 5px;\n}\n\n.noclick[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.noclick[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #66a5e4;\n}\n\n.activeClass[_ngcontent-%COMP%] {\n  color: #b4e73c;\n}\n\n.inputTag[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #a7a5a5;\n  border-radius: 5px;\n  color: grey;\n  background-color: white;\n  border-radius: 50px;\n  width: 30px;\n  height: 30px;\n  margin: auto 0 auto auto;\n  transition: 0.8s;\n}\n\n.inputTag[_ngcontent-%COMP%]:hover {\n  display: flex;\n  border: 1px solid #a7a5a5;\n  border-radius: 5px;\n  color: grey;\n  background-color: white;\n  border-radius: 30px;\n  width: 100%;\n}\n\ninput[_ngcontent-%COMP%]   .navbarFOnt[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: bolder;\n  text-transform: uppercase;\n  margin-left: 32px;\n  color: white;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 10px 10px 0px 0px;\n}\n\n@media (max-width: 1040px) {\n  .pic-icon[_ngcontent-%COMP%] {\n    position: relative;\n    top: 46%;\n    width: 100%;\n  }\n}\n\n@media (max-width: 800px) {\n  .pic-img[_ngcontent-%COMP%] {\n    height: 70%;\n    width: 50%;\n    margin: 2% 25.5% 8%;\n  }\n}\n\n.detailButton[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 43px;\n  border: 2px solid #fff;\n  outline: none;\n  background-color: #fff;\n  color: #666363;\n  font-weight: bolder;\n  position: relative;\n  top: 41%;\n  left: 27%;\n  transition: 0.5s linear;\n}\n\n.detailButton[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: black;\n}\n\n.navbarColor[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-left: 18px;\n}\n\n.containerGet[_ngcontent-%COMP%] {\n  padding: 15px;\n  z-index: 11111;\n  margin-top: 5%;\n  margin-left: -8%;\n  background-color: rgba(255, 255, 255, 0.2) !important;\n  -webkit-backdrop-filter: blur(40px) !important;\n          backdrop-filter: blur(40px) !important;\n  border-radius: 10px;\n  box-shadow: 10px 10px 10px rgba(46, 56, 68, 0.5) !important;\n}\n\n.styleDisplayNone[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 2s ease-in-out;\n  transform: translateX(500%);\n}\n\n.styleDisplay[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbW1vbm1vdmllc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRO0VBQ0ksc0JBQUE7QUFBWjs7QUFLUTtFQUVJLGdCQUFBO0VBQ0EsYUFBQTtBQUhaOztBQWFRO0VBQ0ksMkRBQUE7RUFDSixpQkFBQTtBQVZSOztBQVlRO0VBQ0osYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBVEo7O0FBV1E7RUFDSSxjQUFBO0FBUlo7O0FBV1E7RUFDRyxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBUlg7O0FBWVE7RUFFQSxpQkFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFWWjs7QUFZUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFUWjs7QUFXUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVJaOztBQVVRO0VBQ0ksV0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUFQWjs7QUFVUTtFQUNJLGFBQUE7QUFQWjs7QUFVRTtFQUNJLFlBQUE7RUFDTSxZQUFBO0VBRU4sY0FBQTtFQUNBLHNEQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDJEQUFBO0VBQ0osNkJBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVdJO0VBQ0UsWUFBQTtBQVJOOztBQVVFO0VBQ0EsY0FBQTtFQUVBLFVBQUE7RUFBWSxZQUFBO0FBUGQ7O0FBVUE7RUFDSSxXQUFBO0FBUEo7O0FBVUE7RUFDRSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQVBGOztBQVNBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQU5GOztBQVNBO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0FBTkY7O0FBU0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFORjs7QUFTQTtFQUNJLGVBQUE7QUFOSjs7QUFTQTtFQUNLLGVBQUE7RUFDRixjQUFBO0FBTkg7O0FBUUE7RUFDRyxjQUFBO0FBTEg7O0FBT0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0osV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBSkE7O0FBT0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUpKOztBQVFBO0VBRUksMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBTko7O0FBU0E7RUFFQSxZQUFBO0VBQ0EsZ0NBQUE7QUFQQTs7QUFTQTtFQUNFO0lBQ0csa0JBQUE7SUFDTyxRQUFBO0lBQ0EsV0FBQTtFQU5WO0FBQ0Y7O0FBUUE7RUFDRTtJQUNLLFdBQUE7SUFDSCxVQUFBO0lBQ0EsbUJBQUE7RUFORjtBQUNGOztBQVVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQVJKOztBQVVBO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0FBUEo7O0FBU0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFOSjs7QUFRQTtFQUNJLGFBQUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscURBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSwyREFBQTtBQUxOOztBQU9BO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7QUFKQTs7QUFNQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQUhBIiwiZmlsZSI6ImNvbW1vbm1vdmllc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICp7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyAkYmFja0dyb3VuZEdyYWRpZW50OmxpbmVhci1ncmFkaWVudCg3NWRlZywjYjZiZmM5LCAjMzU4MGNjKTtcbiAgICAgICAgLnBpY3N7XG4gICAgICAgIC8vICBmbGV4OiAxO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGhlaWdodDogMzYycHg7XG4gICAgICAgICAgLy8gIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgLy8gICB0cmFuc2l0aW9uOiAuNnM7XG4gICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDYzLCAxNDQpO1xuICAgICAgICAvLyAgICBiYWNrZ3JvdW5kLWltYWdlOiAkYmFja0dyb3VuZEdyYWRpZW50XG4gICAgICAgIC8vICAgIGZpbHRlcjogZ3JheXNjYWxlKDgwJSk7XG4gICAgICAgICAgIFxuXG4gICAgICAgIH1cbiAgICAgICAgLnBpY2NjY3tcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoNDYsNTYsNjgsMC41KSFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMy44JSAzLjglO1xuICAgICAgICB9XG4gICAgICAgIC5hY2tkcm9we1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTMyMHB4O1xuICAgIG9wYWNpdHk6IC44O1xuICAgIHotaW5kZXg6IDE7XG59XG4gICAgICAgIC5waWNzOmhvdmVyIC5hY2tkcm9we1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgIC5waWMtaW1ne1xuICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgIG1hcmdpbjogLTE5JSAyNS41JSA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgIC5wZXJzb24taW5mb3tcbiAgICAgICAgLy8gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgICAgIGJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiBhbGljZWJsdWVcbiAgICAgICAgfVxuICAgICAgICAucGljLWljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAucGljLWljb24gYXtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMyU7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggN3B4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgIHdpZHRoOiAzNHB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjZzO1xuICAgICAgICAgICAgei1pbmRleDogMTExMTE7XG4gICAgICAgIH1cbiAgICAgICAgLnBpYy1pY29uIGE6aG92ZXJ7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5tYWlue1xuICAgICAgICAgICAgZGlzcGxheTogZmxleCAgXG4gICAgICAgIH1cbiAgICBcbiAgLm5hdmJhckNvZGV7XG4gICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG5cbiAgICAgIHotaW5kZXg6IDExMTExO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjAyKSFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCkhaW1wb3J0YW50O1xuICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSg0Niw1Niw2OCwwLjUpIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRyYW5zaXRpb246IC42cztcbiAgICB9XG5cbiAgICAuc3RpY2tlZE5hdntcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICB9XG4gIDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiKDk0LCA5MCwgOTApO1xuXG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cbiAgXG59XG4uYmxhbmt7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmg0IHtcbiAgZm9udC1mYW1pbHk6IFwiQXJjaGl2byBCbGFja1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAtMC4yNWVtO1xufVxudWwucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA1JSAwIDEwJSAwO1xufVxuXG51bC5wYWdpbmF0aW9uIGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmb250LXdlaWdodDpib2xkZXIhaW1wb3J0YW50O1xufVxuXG51bC5wYWdpbmF0aW9uIGxpIGEge1xuICBjb2xvcjogYmxhY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA1cHggMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgXG59XG4ubm9jbGlja3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbn1cbi5ub2NsaWNrOmhvdmVye1xuICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICBjb2xvcjogIzY2YTVlNDsgXG59XG4uYWN0aXZlQ2xhc3N7XG4gICBjb2xvcjogI2I0ZTczYzsgXG59XG4uaW5wdXRUYWd7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2NywgMTY1LCAxNjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xud2lkdGg6IDMwcHg7XG5oZWlnaHQ6IDMwcHg7XG5tYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG50cmFuc2l0aW9uOiAuOHMgO1xuXG59XG4uaW5wdXRUYWc6aG92ZXJ7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2NywgMTY1LCAxNjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbmlucHV0XG4ubmF2YmFyRk9udHtcbiAgICBmb250LXNpemU6MTJweCFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyB0ZXh0LXNoYWRvdzogM3B4IDFweCAxcHggIHJnYmEoMjAxLCAyMTYsIDE2NywgMC41KTtcbn1cbi5tb2RhbC1oZWFkZXJ7XG4vLyBiYWNrZ3JvdW5kLWltYWdlOiAkYmFja0dyb3VuZEdyYWRpZW50O1xuY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbmJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6MTA0MHB4KXtcbiAgLnBpYy1pY29ue1xuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDQ2JTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDo4MDBweCl7XG4gIC5waWMtaW1ne1xuICAgICAgIGhlaWdodDogNzAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAyJSAyNS41JSA4JTtcbiAgfVxufVxuXG5cbi5kZXRhaWxCdXR0b24ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA0M3B4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiByZ2IoMTAyLCA5OSwgOTkpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNDElO1xuICAgIGxlZnQ6IDI3JTtcbiAgICB0cmFuc2l0aW9uOiAuNXMgbGluZWFyIDtcbn1cbi5kZXRhaWxCdXR0b246aG92ZXJ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjayA7XG59XG4ubmF2YmFyQ29sb3J7XG4gICAgZm9udC1zaXplOjIycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG59XG4uY29udGFpbmVyR2V0e1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICB6LWluZGV4OiAxMTExMTtcbiAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgbWFyZ2luLWxlZnQ6IC04JTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKSFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCkhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoNDYsNTYsNjgsMC41KSFpbXBvcnRhbnQ7ICBcbn1cbi5zdHlsZURpc3BsYXlOb25le1xub3BhY2l0eTogMTsgIFxudHJhbnNpdGlvbjpvcGFjaXR5IDJzIGVhc2UtaW4tb3V0O1xudHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMCUpO1xufVxuLnN0eWxlRGlzcGxheXtcbm9wYWNpdHk6IDE7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59Il19 */"] });


/***/ }),

/***/ "fLFp":
/*!*************************************************!*\
  !*** ./src/app/movies/movies-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MoviesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesRoutingModule", function() { return MoviesRoutingModule; });
/* harmony import */ var _searc_page_searc_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searc-page/searc-page.component */ "fdD1");
/* harmony import */ var _movie_cards_movie_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-cards/movie-cards.component */ "1GfR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: 'Card', component: _movie_cards_movie_cards_component__WEBPACK_IMPORTED_MODULE_1__["MovieCardsComponent"]
    },
    {
        path: 'search', component: _searc_page_searc_page_component__WEBPACK_IMPORTED_MODULE_0__["SearcPageComponent"]
    }
];
class MoviesRoutingModule {
}
MoviesRoutingModule.ɵfac = function MoviesRoutingModule_Factory(t) { return new (t || MoviesRoutingModule)(); };
MoviesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MoviesRoutingModule });
MoviesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MoviesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "fdD1":
/*!***********************************************************!*\
  !*** ./src/app/movies/searc-page/searc-page.component.ts ***!
  \***********************************************************/
/*! exports provided: SearcPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearcPageComponent", function() { return SearcPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../api-service.service */ "CmMg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _commonmoviesearch_commonmoviesearch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../commonmoviesearch/commonmoviesearch.component */ "L7EQ");








const _c0 = ["searchForm"];
const _c1 = function (a0) { return { "stickedNav": a0 }; };
class SearcPageComponent {
    constructor(service, document) {
        this.service = service;
        this.document = document;
        this.movies = [];
        this.valueScroll = 0;
        this.searchMovies = [];
        this.searchValueText = '';
        this.search = true;
        this.event1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.themeVal = 'dark';
    }
    ngOnInit() {
        console.log(this.searchText);
        this.movies = this.searchText;
        $('.modal').on('hidden.bs.modal', () => {
            this.getPages();
        });
        let val = localStorage.getItem('theme');
        if (val == 'dark') {
            this.theme = 'dark';
        }
        else {
            this.theme = 'light';
        }
    }
    textChange() {
        var _a, _b, _c, _d, _e;
        this.searchMovies = [];
        console.log((_a = this.searchForm) === null || _a === void 0 ? void 0 : _a.value.searchTerm);
        // this.route.navigate(["/movies/search"])
        if (((_c = (_b = this.searchForm) === null || _b === void 0 ? void 0 : _b.value.searchTerm) === null || _c === void 0 ? void 0 : _c.length) > 2 && ((_d = this.searchForm) === null || _d === void 0 ? void 0 : _d.valid)) {
            // const formValue = this.searchForm?.valueChanges;
            // formValue?.pipe(
            //   map(data => data.searchTerm),
            //   debounceTime(250),
            //   distinctUntilChanged(),
            // ).subscribe((res) => {
            let val = (_e = this.searchForm) === null || _e === void 0 ? void 0 : _e.value.searchTerm.toLowerCase();
            this.searchMovies = this.movies.filter((data) => {
                var _a, _b, _c, _d;
                console.log(this.searchMovies, (_a = data.title) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(val), val);
                return ((_b = data.title) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(val)) || ((_c = data.description) === null || _c === void 0 ? void 0 : _c.toLowerCase().includes(val)) || ((_d = data.genres) === null || _d === void 0 ? void 0 : _d.toLowerCase().includes(val));
            });
            //this.searchText = true
            console.log(this.searchMovies);
            this.movies = this.searchMovies;
            if (this.movies.length == 0) {
                this.movies = this.searchText;
            }
        }
    }
    loadMoreNext(page) {
        console.log(page);
        this.page = this.page + 1;
        this.getPages();
    }
    getPages() {
        console.log(this.page);
        this.service.getMovies(this.page).subscribe((res) => {
            console.log(res);
            this.searchText = [...this.movies, ...res.results];
            console.log(this.movies);
            this.movies = this.searchText;
        }, (error) => {
            console.log(error);
            // this.toast.warning('Sorry Something went worng !!!')
            $('#exampleModal').modal('show');
        });
    }
    back() {
        this.event1.emit('false');
    }
    onWindowScroll() {
        //.scrollTop
        this.valueScroll = this.document.documentElement.scrollTop;
        console.log(this.document.documentElement.scrollTop);
    }
    themeChange() {
        if (this.themeVal == 'dark') {
            localStorage.setItem('theme', 'dark');
            this.themeVal = 'light';
        }
        else {
            localStorage.setItem('theme', 'light');
            this.themeVal = 'dark';
        }
    }
}
SearcPageComponent.ɵfac = function SearcPageComponent_Factory(t) { return new (t || SearcPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
SearcPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearcPageComponent, selectors: [["app-searc-page"]], viewQuery: function SearcPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchForm = _t.first);
    } }, hostBindings: function SearcPageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function SearcPageComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { page: "page", searchText: "searchText" }, outputs: { event1: "event1" }, decls: 25, vars: 12, consts: [[2, "min-height", "100vh"], [1, "navbar", "containerGet", "fixed-top", "navbar-expand-lg", "navbar-dark", "bg-drak", "row", "navbarCode", 3, "ngClass"], ["routerLink", "/movies/Card", 2, "margin-left", "100px", "color", "white", "font-size", "23px", "font-weight", "bold", "cursor", "pointer", 3, "click"], [1, "col-md-8", "ml-auto"], [1, "form-inline", "col-md-12", "ml-auto"], ["searchForm", "ngForm"], [1, "d-flex", "ml-auto", "searchbar"], ["placeholder", "Search", "name", "searchTerm", "aria-label", "Search", 1, "form-control", "mr-2", "pb-2", 2, "width", "50%", "padding-left", "16px", "border", "none", "box-shadow", "none", "text-decoration", "none", "background", "transparent", "font-size", "14px", 3, "ngModel", "ngModelChange", "keypress"], ["aria-hidden", "true", 1, "fa", "fa-search", "ml-auto", 2, "color", "grey", "font-size", "15px", "margin", "9px 24px 2px 0px"], [1, "theme", 3, "click"], [2, "margin-top", "10%"], [3, "movies", "valueScroll", "searchdata", "page"], [2, "color", "white", "margin", "10% 0 0 5%", 3, "hidden"], [2, "display", "flex"], [2, "text-align", "left", "width", "100%"], [1, "detailButton", 3, "click"], [2, "text-align", "right", "width", "100%"]], template: function SearcPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearcPageComponent_Template_span_click_3_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "MOVIE SHOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearcPageComponent_Template_input_ngModelChange_9_listener($event) { return ctx.searchValueText = $event; })("keypress", function SearcPageComponent_Template_input_keypress_9_listener() { return ctx.textChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearcPageComponent_Template_button_click_11_listener() { return ctx.themeChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-commonmoviesearch", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " No data Found.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearcPageComponent_Template_button_click_20_listener() { return ctx.loadMoreNext(ctx.page); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "LOAD MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearcPageComponent_Template_button_click_23_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.valueScroll > 50));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValueText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 8, ctx.themeVal), "\u00A0THEME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies", ctx.movies)("valueScroll", 281)("searchdata", ctx.search)("page", ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.movies.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _commonmoviesearch_commonmoviesearch_component__WEBPACK_IMPORTED_MODULE_5__["CommonmoviesearchComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]], styles: [".searchbar[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 15px;\n  width: 50%;\n}\n\n.inputTag[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.detailButton[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 43px;\n  border: 2px solid #fff;\n  outline: none;\n  background-color: #fff;\n  color: #666363;\n  font-weight: bolder;\n  position: relative;\n  margin: 10%;\n  border-radius: 15px;\n  transition: 0.5s linear;\n}\n\n.detailButton[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: transparent;\n}\n\n.containerGet[_ngcontent-%COMP%] {\n  padding: 15px;\n  z-index: 11111;\n  margin-left: -8%;\n  background-color: rgba(255, 255, 255, 0.2) !important;\n  -webkit-backdrop-filter: blur(40px) !important;\n          backdrop-filter: blur(40px) !important;\n  border-radius: 10px;\n  box-shadow: 10px 10px 10px rgba(46, 56, 68, 0.5) !important;\n}\n\n.navbarCode[_ngcontent-%COMP%] {\n  height: 90px;\n  width: 110vw;\n  z-index: 11111;\n  background-color: rgba(255, 255, 255, 0.02) !important;\n  -webkit-backdrop-filter: blur(40px) !important;\n          backdrop-filter: blur(40px) !important;\n  box-shadow: 5px 5px 5px rgba(193, 198, 204, 0.5) !important;\n  justify-content: space-around;\n  transition: 0.6s;\n}\n\n.stickedNav[_ngcontent-%COMP%] {\n  height: 60px;\n  box-shadow: 5px 5px 5px rgba(70, 110, 161, 0.5) !important;\n}\n\n.theme[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  outline: none;\n  background-color: transparent;\n  color: white;\n  margin-left: 20px;\n  padding: 5px;\n  transition: 0.6s;\n  margin-left: 180px;\n}\n\n.theme[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlYXJjLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNKLG1CQUFBO0VBQ0EsVUFBQTtBQUNBOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFBO0VBQ0ssVUFBQTtFQUNELFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSw2QkFBQTtBQUlKOztBQUZBO0VBQ0ksYUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFEQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkRBQUE7QUFLTjs7QUFIQTtFQUNNLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNEQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDJEQUFBO0VBQ0osNkJBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUpLO0VBQ0MsWUFBQTtFQUNGLDBEQUFBO0FBT0o7O0FBSkk7RUFDRix1QkFBQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNELFlBQUE7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEE7RUFDRyx1QkFBQTtFQUNDLFlBQUE7QUFRSiIsImZpbGUiOiJzZWFyYy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaGJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbmJvcmRlci1yYWRpdXM6IDE1cHg7XG53aWR0aDogNTAlO1xufVxuLmlucHV0VGFne1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmRldGFpbEJ1dHRvbiB7XG4gICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA0M3B4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiByZ2IoMTAyLCA5OSwgOTkpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjoxMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB0cmFuc2l0aW9uOiAuNXMgbGluZWFyIDtcbn1cbi5kZXRhaWxCdXR0b246aG92ZXJ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCA7XG59XG4uY29udGFpbmVyR2V0e1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICB6LWluZGV4OiAxMTExMTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtOCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMikhaW1wb3J0YW50O1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDQwcHgpIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2JhKDQ2LDU2LDY4LDAuNSkhaW1wb3J0YW50OyAgXG59XG4ubmF2YmFyQ29kZXtcbiAgICAgIGhlaWdodDogOTBweDtcbiAgICAgIHdpZHRoOiAxMTB2dztcbiAgICAgIHotaW5kZXg6IDExMTExO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjAyKSFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCkhaW1wb3J0YW50O1xuICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgxOTMsIDE5OCwgMjA0LCAwLjUpIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRyYW5zaXRpb246IC42cztcbiAgICB9XG4gICAgIC5zdGlja2VkTmF2e1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoNzAsIDExMCwgMTYxLCAwLjUpIWltcG9ydGFudDtcblxuICAgIH1cbiAgICAudGhlbWV7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgcGFkZGluZzogNXB4O1xuICAgIHRyYW5zaXRpb246IDAuNnM7XG4gICAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xufVxuLnRoZW1lOmhvdmVye1xuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=movies-movies-module.js.map