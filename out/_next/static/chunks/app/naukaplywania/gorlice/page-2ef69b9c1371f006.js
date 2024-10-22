(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[377,454],{

/***/ 3028:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9715, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8679));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1402));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3529));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5905));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2020));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4708));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4058));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2937));


/***/ }),

/***/ 5486:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ Groups_Groups; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./components/Globals/Groups/groups.module.scss
var groups_module = __webpack_require__(3046);
var groups_module_default = /*#__PURE__*/__webpack_require__.n(groups_module);
// EXTERNAL MODULE: ./components/Globals/GroupLvl/groupLvl.module.scss
var groupLvl_module = __webpack_require__(173);
var groupLvl_module_default = /*#__PURE__*/__webpack_require__.n(groupLvl_module);
// EXTERNAL MODULE: ./components/Ui/StickerH4/StickerH4.tsx
var StickerH4 = __webpack_require__(5348);
// EXTERNAL MODULE: ./components/Ui/AboutTextPoppins/AboutTextPoppins.tsx
var AboutTextPoppins = __webpack_require__(215);
;// CONCATENATED MODULE: ./components/Globals/GroupLvl/GroupLvl.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const GroupLvl = (param)=>{
    let { stickerH4, aboutTextPoppins, skills } = param;
    const [showSkills, setShowSkills] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (groupLvl_module_default()).groupLvl,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(StickerH4/* default */.Z, {
                titleStrip: stickerH4.titleStrip,
                title: stickerH4.title,
                stripTextColor: stickerH4.stripTextColor,
                stripBgColor: stickerH4.stripBgColor,
                scale: stickerH4.scale,
                paddingBottom: stickerH4.paddingBottom
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AboutTextPoppins/* default */.Z, {
                title: aboutTextPoppins.title,
                titleColor: aboutTextPoppins.titleColor,
                description: aboutTextPoppins.description
            }),
            skills.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                    className: (groupLvl_module_default()).groupLvl__button,
                    style: {
                        flexDirection: showSkills ? "column-reverse" : "column"
                    },
                    onClick: ()=>setShowSkills(!showSkills),
                    children: [
                        "Umiejętności",
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            style: {
                                transform: showSkills ? "rotate(180deg)" : ""
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M4.4545 7.8295C4.89384 7.39017 5.60616 7.39017 6.0455 7.8295L12 13.784L17.9545 7.8295C18.3938 7.39017 19.1062 7.39017 19.5455 7.8295C19.9848 8.26884 19.9848 8.98116 19.5455 9.4205L12.7955 16.1705C12.3562 16.6098 11.6438 16.6098 11.2045 16.1705L4.4545 9.4205C4.01517 8.98116 4.01517 8.26884 4.4545 7.8295Z",
                                fill: "#ff914c"
                            })
                        })
                    ]
                })
            }),
            showSkills && /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                    style: {
                        opacity: showSkills ? "1" : "0"
                    },
                    children: skills.length > 0 && skills.map((skill, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: skill
                        }, index))
                })
            })
        ]
    });
};
/* harmony default export */ var GroupLvl_GroupLvl = (GroupLvl);

// EXTERNAL MODULE: ./components/Ui/StripH2/StripH2.tsx
var StripH2 = __webpack_require__(5445);
;// CONCATENATED MODULE: ./components/Globals/Groups/Groups.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Groups = (param)=>{
    let { stripH2, groups } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (groups_module_default()).groups,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(StripH2/* default */.Z, {
                title: stripH2.title,
                stripBgColor: stripH2.stripBgColor,
                stripTextColor: stripH2.stripTextColor,
                scale: stripH2.scale
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (groups_module_default())["groups__row-box"],
                children: groups.length > 0 && groups.map((group, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(GroupLvl_GroupLvl, {
                        stickerH4: group.stickerH4,
                        aboutTextPoppins: group.aboutTextPoppins,
                        skills: group.skills
                    }, index))
            })
        ]
    });
};
/* harmony default export */ var Groups_Groups = (Groups);


/***/ }),

/***/ 8679:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _lessonType_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9916);
/* harmony import */ var _lessonType_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lessonType_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6648);
/* harmony import */ var _components_Ui_StickerH4_StickerH4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5348);
/* harmony import */ var _utils_UI_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9891);
/* harmony import */ var _components_Ui_AboutTextPoppins_AboutTextPoppins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(215);
/* harmony import */ var _components_Ui_Scrap_Scrap2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2937);
/* __next_internal_client_entry_do_not_use__ default auto */ 







const LessonType = (param)=>{
    let { bgColor, lessonType } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_lessonType_module_scss__WEBPACK_IMPORTED_MODULE_2___default().lessonType),
        style: {
            background: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_5__/* .COLORS */ .D[bgColor]
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: (_lessonType_module_scss__WEBPACK_IMPORTED_MODULE_2___default().lessonType__opacity),
                style: {
                    background: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_5__/* .COLORS */ .D[bgColor]
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                src: "/assets/swimming/lessonsTypes/".concat(lessonType.img),
                fill: true,
                alt: "lekcja",
                objectFit: "cover",
                objectPosition: "top"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_lessonType_module_scss__WEBPACK_IMPORTED_MODULE_2___default().lessonType__content),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Ui_StickerH4_StickerH4__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        title: lessonType.stickerH4.title,
                        titleStrip: lessonType.stickerH4.titleStrip,
                        stripBgColor: lessonType.stickerH4.stripBgColor,
                        stripTextColor: lessonType.stickerH4.stripTextColor,
                        scale: lessonType.stickerH4.scale,
                        paddingBottom: lessonType.stickerH4.paddingBottom
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Ui_AboutTextPoppins_AboutTextPoppins__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        title: lessonType.aboutTextPoppins.title,
                        titleColor: lessonType.aboutTextPoppins.titleColor,
                        description: lessonType.aboutTextPoppins.description
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Ui_Scrap_Scrap2__WEBPACK_IMPORTED_MODULE_7__["default"], {
                position: "bottom",
                color: bgColor
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__["default"] = (LessonType);


/***/ }),

/***/ 2941:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _naukaPlywaniaAbout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9955);
/* harmony import */ var _naukaPlywaniaAbout_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_naukaPlywaniaAbout_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Ui_StickerH2_StickerH2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9803);
/* harmony import */ var _components_Ui_AboutTextPoppins_AboutTextPoppins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(215);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6648);
/* harmony import */ var _components_Ui_Buttons_LinkButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7920);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const NaukaPlywaniaAbout = (param)=>{
    let { stickerH2, aboutTextPoppins, image, button } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_naukaPlywaniaAbout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().about),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_naukaPlywaniaAbout_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["about__text-box"]),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Ui_StickerH2_StickerH2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        title: stickerH2.title,
                        titleStrip: stickerH2.titleStrip,
                        scale: stickerH2.scale,
                        stripTextColor: stickerH2.stripTextColor,
                        stripBgColor: stickerH2.stripBgColor,
                        paddingBottom: stickerH2.paddingBottom
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Ui_AboutTextPoppins_AboutTextPoppins__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        titleColor: aboutTextPoppins.titleColor,
                        title: aboutTextPoppins.title,
                        description: aboutTextPoppins.description
                    }),
                    button !== undefined && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        style: {
                            width: "fit-content"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Ui_Buttons_LinkButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            title: button.title,
                            href: button.href,
                            bgColor: stickerH2.stripBgColor,
                            textColor: stickerH2.stripTextColor
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: (_naukaPlywaniaAbout_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["about__image-box"]),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    objectFit: "cover",
                    objectPosition: "left",
                    src: "/assets/swimming/".concat(image.src),
                    alt: image.alt,
                    fill: true
                })
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__.Z = (NaukaPlywaniaAbout);


/***/ }),

/***/ 1402:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3926);
/* harmony import */ var _poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6648);
/* harmony import */ var _utils_UI_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9891);
/* harmony import */ var _components_Ui_StickerH2_StickerH2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9803);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const PoolInformations = (param)=>{
    let { poolInformation } = param;
    var _poolInformation_icons_pool1, _poolInformation_icons_pool2, _poolInformation_icons_stand, _poolInformation_icons_cloakroomWomen, _poolInformation_icons_cloakroomMen, _poolInformation_icons_cloakroomFamily, _poolInformation_icons_parking;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default().poolInformations),
        style: {
            background: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_4__/* .COLORS */ .D[poolInformation.color]
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                src: "/assets/swimming/pools/".concat(poolInformation.imageSrc),
                fill: true,
                objectFit: "cover",
                alt: poolInformation.title,
                objectPosition: "top"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Ui_StickerH2_StickerH2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: poolInformation.stickerH2.title,
                titleStrip: poolInformation.stickerH2.titleStrip,
                stripBgColor: poolInformation.stickerH2.stripBgColor,
                stripTextColor: poolInformation.stickerH2.stripTextColor,
                scale: poolInformation.stickerH2.scale,
                paddingBottom: poolInformation.stickerH2.paddingBottom
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box"]),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list"]),
                        children: [
                            ((_poolInformation_icons_pool1 = poolInformation.icons.pool1) === null || _poolInformation_icons_pool1 === void 0 ? void 0 : _poolInformation_icons_pool1.exists) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item"]),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                                        width: "162",
                                        height: "73",
                                        viewBox: "0 0 162 73",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item__svg"]),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M141.869 6.78712C144.285 5.34778 147.119 5.55682 149.867 6.91149C152.395 8.15816 154.851 10.9149 155.569 15.209C155.796 16.5709 157.085 17.4903 158.447 17.2626C159.809 17.0349 160.728 15.7464 160.5 14.3846C159.522 8.53001 156.073 4.39666 152.078 2.42697C148.316 0.572176 143.572 -0.0823295 139.248 2.52923L139.209 2.5526L139.171 2.57735C136.984 4.00857 135.3 5.51549 134.244 7.62015C133.21 9.68089 132.931 12.0189 132.905 14.7727L132.905 14.7848V14.7968V17.3199H116.779V15.925C117.135 10.5315 118.621 8.67137 120.277 8.0629L120.314 8.04904L120.352 8.03397C123.843 6.62191 126.515 7.13385 128.966 8.05618C130.259 8.54243 131.7 7.88904 132.187 6.59678C132.673 5.30452 132.019 3.86276 130.727 3.37651C127.542 2.17794 123.518 1.37139 118.513 3.38431C113.892 5.10554 112.156 9.84507 111.784 15.6849L111.779 15.7644V15.8439V19.2364C111.734 19.4236 111.71 19.619 111.71 19.8199C111.71 20.0209 111.734 20.2163 111.779 20.4035V38.8257V49.3918C111.779 50.7725 112.898 51.8918 114.279 51.8918C115.659 51.8918 116.779 50.7725 116.779 49.3918V41.3257H132.905V48.3447C132.905 49.098 133.238 49.7735 133.765 50.2318C132.763 50.0937 131.753 50.0096 130.712 49.9859C126.079 49.8806 121.002 50.9697 113.202 53.3249L113.195 53.327C106.54 55.3571 101.58 56.7372 96.0789 56.9541C90.6093 57.1698 84.4356 56.2364 75.48 53.3396L75.4186 53.3197L75.3561 53.303C70.9238 52.1184 67.0042 51.2441 63.2467 50.7273C63.603 50.6645 63.9811 50.571 64.4035 50.4481L67.6948 49.4916L66.0492 41.8401C65.5912 40.2953 65.1149 39.4822 63.7106 38.2192L47.5433 25.3706C46.651 24.9881 45.8601 24.7785 44.461 24.9183L23.6091 26.9468C22.1438 27.2775 21.5244 27.8722 21.0034 28.3887C19.6019 29.7781 19.5688 31.5578 21.0034 32.8333L21.0634 32.8867C21.7017 33.4558 22.6003 34.2568 24.3008 34.2568L43.0961 33.1637L46.9071 37.8093L18.065 49.4916L23.6091 51.3362C39.0136 45.1718 46.788 44.8642 59.8554 50.3564C58.5505 50.252 57.2525 50.1941 55.9459 50.1848C49.8148 50.141 43.635 51.1665 35.7879 53.3063L35.7795 53.3086L35.7585 53.3144C30.127 54.8711 26.3362 55.9191 22.6426 56.092C19.0722 56.2591 15.4717 55.603 10.3951 53.4213L10.3624 53.4073L10.3292 53.3941C8.48149 52.6617 6.8477 52.2029 5.19489 52.2188C3.49597 52.2351 2.04196 52.7492 0.5625 53.4718L2.7569 57.9646C3.91365 57.3996 4.59578 57.2248 5.24296 57.2186C5.93168 57.2119 6.84638 57.3944 8.45475 58.0296C14.0289 60.421 18.3822 61.2969 22.8764 61.0865C27.135 60.8871 31.4068 59.7057 36.675 58.2486L37.1075 58.129C44.7021 56.0584 50.3984 55.1453 55.9102 55.1847C61.4123 55.224 66.8694 56.213 74.0032 58.1169C83.2658 61.1081 90.0375 62.1963 96.2759 61.9502C102.495 61.705 108.017 60.134 114.65 58.1106C122.391 55.7735 126.816 54.8987 130.598 54.9846C134.336 55.0695 137.632 56.0909 143.206 58.0451C146.457 59.4742 149.25 60.2431 152.211 60.218C155.167 60.193 158.058 59.377 161.476 58.0483L159.664 53.3881C156.441 54.6412 154.22 55.2008 152.169 55.2182C150.152 55.2353 148.068 54.7281 145.136 53.4318L145.046 53.3919L144.953 53.3592C141.672 52.2081 138.93 51.2789 136.277 50.6882C137.228 50.3342 137.905 49.4185 137.905 48.3447V14.809C137.93 12.2849 138.201 10.8822 138.713 9.8622C139.2 8.89155 140.049 7.9835 141.869 6.78712ZM116.779 22.3199H132.905V26.9084H116.779V22.3199ZM116.779 31.9084V36.3257H132.905V31.9084H116.779ZM130.665 66.0076C127.213 65.9232 123.147 66.7813 115.957 69.1177C109.796 71.14 104.626 72.7256 98.7954 72.973C92.9426 73.2214 86.6088 72.1212 77.986 69.1251C71.3722 67.2259 66.3364 66.2468 61.2703 66.2078C56.1945 66.1687 50.9361 67.0729 43.895 69.1388L43.4701 69.2653C38.5959 70.7161 34.5928 71.9078 30.5951 72.1092C26.3502 72.3231 22.2536 71.4293 17.0489 69.0267C15.5664 68.3969 14.766 68.2357 14.1963 68.2416C13.672 68.2471 13.0891 68.3956 12.0265 68.9542L9.70003 64.5284C11.0869 63.7994 12.489 63.259 14.1446 63.2419C15.7507 63.2253 17.3178 63.7054 19.0439 64.4418L19.0784 64.4565L19.1124 64.4722C23.8027 66.6414 27.0958 67.2791 30.3435 67.1155C33.7312 66.9448 37.2168 65.909 42.4736 64.3451L42.4825 64.3425C49.7896 62.1982 55.5663 61.1637 61.3088 61.2079C67.0456 61.2521 72.5961 62.3722 79.4335 64.3387L79.4995 64.3577L79.5643 64.3803C87.866 67.2702 93.559 68.1908 98.5834 67.9775C103.644 67.7628 108.213 66.3972 114.4 64.366L114.407 64.3637C121.657 62.008 126.42 60.9023 130.787 61.0091C135.18 61.1165 138.961 62.4522 144.126 64.4025L144.223 64.4392L144.317 64.4839C147.024 65.7724 148.911 66.2577 150.714 66.2413C152.554 66.2245 154.571 65.6847 157.558 64.435L159.488 69.0476C156.304 70.3797 153.572 71.2155 150.759 71.2411C147.94 71.2668 145.298 70.4782 142.264 69.044C137.084 67.0899 134.071 66.0909 130.665 66.0076ZM90.0487 36.2625C90.0487 41.0841 85.0448 44.9927 78.8722 44.9927C72.6995 44.9927 67.6956 41.0841 67.6956 36.2625C67.6956 31.4409 72.6995 27.5322 78.8722 27.5322C85.0448 27.5322 90.0487 31.4409 90.0487 36.2625Z",
                                            fill: "#FF914C"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item__text"]),
                                        children: poolInformation.icons.pool1.title
                                    })
                                ]
                            }),
                            ((_poolInformation_icons_pool2 = poolInformation.icons.pool2) === null || _poolInformation_icons_pool2 === void 0 ? void 0 : _poolInformation_icons_pool2.exists) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item"]),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                                        width: "162",
                                        height: "73",
                                        viewBox: "0 0 162 73",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item__svg"]),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M141.869 6.78712C144.285 5.34778 147.119 5.55682 149.867 6.91149C152.395 8.15816 154.851 10.9149 155.569 15.209C155.796 16.5709 157.085 17.4903 158.447 17.2626C159.809 17.0349 160.728 15.7464 160.5 14.3846C159.522 8.53001 156.073 4.39666 152.078 2.42697C148.316 0.572176 143.572 -0.0823295 139.248 2.52923L139.209 2.5526L139.171 2.57735C136.984 4.00857 135.3 5.51549 134.244 7.62015C133.21 9.68089 132.931 12.0189 132.905 14.7727L132.905 14.7848V14.7968V17.3199H116.779V15.925C117.135 10.5315 118.621 8.67137 120.277 8.0629L120.314 8.04904L120.352 8.03397C123.843 6.62191 126.515 7.13385 128.966 8.05618C130.259 8.54243 131.7 7.88904 132.187 6.59678C132.673 5.30452 132.019 3.86276 130.727 3.37651C127.542 2.17794 123.518 1.37139 118.513 3.38431C113.892 5.10554 112.156 9.84507 111.784 15.6849L111.779 15.7644V15.8439V19.2364C111.734 19.4236 111.71 19.619 111.71 19.8199C111.71 20.0209 111.734 20.2163 111.779 20.4035V38.8257V49.3918C111.779 50.7725 112.898 51.8918 114.279 51.8918C115.659 51.8918 116.779 50.7725 116.779 49.3918V41.3257H132.905V48.3447C132.905 49.098 133.238 49.7735 133.765 50.2318C132.763 50.0937 131.753 50.0096 130.712 49.9859C126.079 49.8806 121.002 50.9697 113.202 53.3249L113.195 53.327C106.54 55.3571 101.58 56.7372 96.0789 56.9541C90.6093 57.1698 84.4356 56.2364 75.48 53.3396L75.4186 53.3197L75.3561 53.303C70.9238 52.1184 67.0042 51.2441 63.2467 50.7273C63.603 50.6645 63.9811 50.571 64.4035 50.4481L67.6948 49.4916L66.0492 41.8401C65.5912 40.2953 65.1149 39.4822 63.7106 38.2192L47.5433 25.3706C46.651 24.9881 45.8601 24.7785 44.461 24.9183L23.6091 26.9468C22.1438 27.2775 21.5244 27.8722 21.0034 28.3887C19.6019 29.7781 19.5688 31.5578 21.0034 32.8333L21.0634 32.8867C21.7017 33.4558 22.6003 34.2568 24.3008 34.2568L43.0961 33.1637L46.9071 37.8093L18.065 49.4916L23.6091 51.3362C39.0136 45.1718 46.788 44.8642 59.8554 50.3564C58.5505 50.252 57.2525 50.1941 55.9459 50.1848C49.8148 50.141 43.635 51.1665 35.7879 53.3063L35.7795 53.3086L35.7585 53.3144C30.127 54.8711 26.3362 55.9191 22.6426 56.092C19.0722 56.2591 15.4717 55.603 10.3951 53.4213L10.3624 53.4073L10.3292 53.3941C8.48149 52.6617 6.8477 52.2029 5.19489 52.2188C3.49597 52.2351 2.04196 52.7492 0.5625 53.4718L2.7569 57.9646C3.91365 57.3996 4.59578 57.2248 5.24296 57.2186C5.93168 57.2119 6.84638 57.3944 8.45475 58.0296C14.0289 60.421 18.3822 61.2969 22.8764 61.0865C27.135 60.8871 31.4068 59.7057 36.675 58.2486L37.1075 58.129C44.7021 56.0584 50.3984 55.1453 55.9102 55.1847C61.4123 55.224 66.8694 56.213 74.0032 58.1169C83.2658 61.1081 90.0375 62.1963 96.2759 61.9502C102.495 61.705 108.017 60.134 114.65 58.1106C122.391 55.7735 126.816 54.8987 130.598 54.9846C134.336 55.0695 137.632 56.0909 143.206 58.0451C146.457 59.4742 149.25 60.2431 152.211 60.218C155.167 60.193 158.058 59.377 161.476 58.0483L159.664 53.3881C156.441 54.6412 154.22 55.2008 152.169 55.2182C150.152 55.2353 148.068 54.7281 145.136 53.4318L145.046 53.3919L144.953 53.3592C141.672 52.2081 138.93 51.2789 136.277 50.6882C137.228 50.3342 137.905 49.4185 137.905 48.3447V14.809C137.93 12.2849 138.201 10.8822 138.713 9.8622C139.2 8.89155 140.049 7.9835 141.869 6.78712ZM116.779 22.3199H132.905V26.9084H116.779V22.3199ZM116.779 31.9084V36.3257H132.905V31.9084H116.779ZM130.665 66.0076C127.213 65.9232 123.147 66.7813 115.957 69.1177C109.796 71.14 104.626 72.7256 98.7954 72.973C92.9426 73.2214 86.6088 72.1212 77.986 69.1251C71.3722 67.2259 66.3364 66.2468 61.2703 66.2078C56.1945 66.1687 50.9361 67.0729 43.895 69.1388L43.4701 69.2653C38.5959 70.7161 34.5928 71.9078 30.5951 72.1092C26.3502 72.3231 22.2536 71.4293 17.0489 69.0267C15.5664 68.3969 14.766 68.2357 14.1963 68.2416C13.672 68.2471 13.0891 68.3956 12.0265 68.9542L9.70003 64.5284C11.0869 63.7994 12.489 63.259 14.1446 63.2419C15.7507 63.2253 17.3178 63.7054 19.0439 64.4418L19.0784 64.4565L19.1124 64.4722C23.8027 66.6414 27.0958 67.2791 30.3435 67.1155C33.7312 66.9448 37.2168 65.909 42.4736 64.3451L42.4825 64.3425C49.7896 62.1982 55.5663 61.1637 61.3088 61.2079C67.0456 61.2521 72.5961 62.3722 79.4335 64.3387L79.4995 64.3577L79.5643 64.3803C87.866 67.2702 93.559 68.1908 98.5834 67.9775C103.644 67.7628 108.213 66.3972 114.4 64.366L114.407 64.3637C121.657 62.008 126.42 60.9023 130.787 61.0091C135.18 61.1165 138.961 62.4522 144.126 64.4025L144.223 64.4392L144.317 64.4839C147.024 65.7724 148.911 66.2577 150.714 66.2413C152.554 66.2245 154.571 65.6847 157.558 64.435L159.488 69.0476C156.304 70.3797 153.572 71.2155 150.759 71.2411C147.94 71.2668 145.298 70.4782 142.264 69.044C137.084 67.0899 134.071 66.0909 130.665 66.0076ZM90.0487 36.2625C90.0487 41.0841 85.0448 44.9927 78.8722 44.9927C72.6995 44.9927 67.6956 41.0841 67.6956 36.2625C67.6956 31.4409 72.6995 27.5322 78.8722 27.5322C85.0448 27.5322 90.0487 31.4409 90.0487 36.2625Z",
                                            fill: "#FF914C"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item__text"]),
                                        children: poolInformation.icons.pool2.title
                                    })
                                ]
                            }),
                            ((_poolInformation_icons_stand = poolInformation.icons.stand) === null || _poolInformation_icons_stand === void 0 ? void 0 : _poolInformation_icons_stand.exists) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item"]),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                                        width: "253",
                                        height: "101",
                                        viewBox: "0 0 253 101",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item__svg"]),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                            d: "M45.9106 4.63184H31.1327C23.3826 4.71677 20.9503 6.77823 20.849 14.5924V57.0055M20.849 57.0055C15.9665 57.291 14.0088 58.0564 13.7812 62.1465V71.7858C13.9024 75.8733 15.6761 76.8167 20.849 76.6055H45.9106V95.8559M20.849 57.0055H45.9106M45.9106 22.9465H37.5594M45.9116 4.63184H60.6896C68.4396 4.71677 70.8719 6.77823 70.9733 14.5924V57.0055M70.9733 57.0055C75.8557 57.291 77.8134 58.0564 78.041 62.1465V71.7858C77.9198 75.8733 76.1461 76.8167 70.9733 76.6055H45.9116V95.8559M70.9733 57.0055H45.9116M45.9116 22.9465H54.2628M126.269 4.63184H111.491C103.741 4.71677 101.309 6.77823 101.208 14.5924V57.0055M101.208 57.0055C96.3251 57.291 94.3674 58.0564 94.1399 62.1465V71.7858C94.2611 75.8733 96.0347 76.8167 101.208 76.6055H126.269V95.8559M101.208 57.0055H126.269M126.269 22.9465H117.918M126.27 4.63184H141.048C148.798 4.71677 151.231 6.77823 151.332 14.5924V57.0055M151.332 57.0055C156.214 57.291 158.172 58.0564 158.4 62.1465V71.7858C158.278 75.8733 156.505 76.8167 151.332 76.6055H126.27V95.8559M151.332 57.0055H126.27M126.27 22.9465H134.621M206.625 4.63184H191.847C184.097 4.71677 181.665 6.77823 181.564 14.5924V57.0055M181.564 57.0055C176.681 57.291 174.723 58.0564 174.496 62.1465V71.7858C174.617 75.8733 176.391 76.8167 181.564 76.6055H206.625V95.8559M181.564 57.0055H206.625M206.625 22.9465H198.274M206.626 4.63184H221.404C229.154 4.71677 231.586 6.77823 231.688 14.5924V57.0055M231.688 57.0055C236.57 57.291 238.528 58.0564 238.756 62.1465V71.7858C238.634 75.8733 236.861 76.8167 231.688 76.6055H206.626V95.8559M231.688 57.0055H206.626M206.626 22.9465H214.977M77.9757 67.0957H94.1703M158.657 67.0957H174.562M14.0665 97.1704H239.339",
                                            stroke: "#FF914C",
                                            strokeWidth: "5",
                                            strokeLinecap: "round"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item__text"]),
                                        children: poolInformation.icons.stand.title
                                    })
                                ]
                            }),
                            ((_poolInformation_icons_cloakroomWomen = poolInformation.icons.cloakroomWomen) === null || _poolInformation_icons_cloakroomWomen === void 0 ? void 0 : _poolInformation_icons_cloakroomWomen.exists) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item"]),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item__svg"]),
                                        width: "82",
                                        height: "82",
                                        viewBox: "0 0 82 82",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                d: "M49.5405 25.5784C48.4973 27.5742 43.6853 41.7322 43.6853 41.7322C43.2737 42.6294 42.9082 42.9332 42.2089 43.2838C41.0814 43.6108 40.4173 43.4111 39.1932 42.5203C38.3384 41.7131 38.4334 41.2547 38.7192 40.4191L45.3255 20.6826C46.854 16.6925 48.538 15.7951 52.8205 15.7198H66.1923C70.4047 15.6375 71.8392 16.8989 73.3467 20.6826L80.501 40.4191C80.6231 41.301 80.6605 41.7728 79.6493 42.5203C78.6193 43.2528 77.8906 43.3356 76.498 43.2838C75.2982 43.1365 75.0022 42.6831 74.5391 41.7322C74.5391 41.7322 69.7698 27.0481 68.8326 25.5784C67.8954 24.1088 66.5017 24.4047 66.7034 25.5784C66.905 26.7522 76.498 54.9801 76.498 54.9801H67.4699V78.1783C67.499 79.4159 66.8207 79.9297 65.2555 80.698C64.5679 80.9899 63.9293 81.0286 62.53 80.698C60.7385 80.1628 60.4487 79.587 60.4007 78.1783C60.4007 78.1783 61.0231 56.7743 60.4007 55.7298C59.7783 54.6852 58.6508 54.656 58.1011 55.7298C57.5515 56.8035 58.1011 78.1783 58.1011 78.1783L58.1006 78.2246C58.0846 79.5705 58.078 80.1284 55.8867 80.698C54.7931 80.9494 54.3383 80.9486 53.1612 80.698C51.2987 80.1242 50.9669 79.5107 50.8801 78.1783V54.9801H42.2089L51.769 25.9212C52.3779 23.6044 50.5837 23.5827 49.5405 25.5784Z",
                                                fill: "#FF914C"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                d: "M66.7202 7.37077C66.7202 10.927 63.5044 13.8099 59.5377 13.8099C55.5709 13.8099 52.3551 10.927 52.3551 7.37077C52.3551 3.81454 55.5709 0.931642 59.5377 0.931642C63.5044 0.931642 66.7202 3.81454 66.7202 7.37077Z",
                                                fill: "#FF914C"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                d: "M17.5803 11.8396C17.9971 11.8303 18.4173 11.9487 18.9201 12.2023C19.8984 12.6957 31.0592 18.0634 32.9801 19.3821C34.901 20.7009 34.589 22.5345 31.8233 23.0516C29.0575 23.5688 3.08214 23.0516 3.08214 23.0516C-0.0966189 22.636 0.0594501 20.359 1.74696 19.3821C3.43448 18.4053 15.4026 12.6775 16.3394 12.2023C16.7948 11.9714 17.1861 11.8483 17.5803 11.8396ZM17.5803 11.8396V7.31642L17.503 7.29481C15.1119 6.62626 14.24 6.38246 14.095 4.193C13.9486 1.98011 15.6053 0.940993 17.5803 0.931699C19.5553 0.922405 20.9246 2.02194 21.2545 4.193M43.6853 41.7322C43.6853 41.7322 48.4973 27.5742 49.5405 25.5784C50.5837 23.5827 52.3779 23.6044 51.769 25.9212L42.2089 54.9801H50.8801V78.1783C50.9669 79.5107 51.2987 80.1242 53.1612 80.698C54.3383 80.9486 54.7931 80.9494 55.8867 80.698C58.078 80.1284 58.0846 79.5705 58.1006 78.2246L58.1011 78.1783C58.1011 78.1783 57.5515 56.8035 58.1011 55.7298C58.6508 54.656 59.7783 54.6852 60.4007 55.7298C61.0231 56.7743 60.4007 78.1783 60.4007 78.1783C60.4487 79.587 60.7385 80.1628 62.53 80.698C63.9293 81.0286 64.5679 80.9899 65.2555 80.698C66.8207 79.9297 67.499 79.4159 67.4699 78.1783V54.9801H76.498C76.498 54.9801 66.905 26.7522 66.7034 25.5784C66.5017 24.4047 67.8954 24.1088 68.8326 25.5784C69.7698 27.0481 74.5391 41.7322 74.5391 41.7322C75.0022 42.6831 75.2982 43.1365 76.498 43.2838C77.8906 43.3356 78.6193 43.2528 79.6493 42.5203C80.6605 41.7728 80.6231 41.301 80.501 40.4191L73.3467 20.6826C71.8392 16.8989 70.4047 15.6375 66.1923 15.7198H52.8205C48.538 15.7951 46.854 16.6925 45.3255 20.6826L38.7192 40.4191C38.4334 41.2547 38.3384 41.7131 39.1932 42.5203C40.4173 43.4111 41.0814 43.6108 42.2089 43.2838C42.9082 42.9332 43.2737 42.6294 43.6853 41.7322ZM66.7202 7.37077C66.7202 10.927 63.5044 13.8099 59.5377 13.8099C55.5709 13.8099 52.3551 10.927 52.3551 7.37077C52.3551 3.81454 55.5709 0.931642 59.5377 0.931642C63.5044 0.931642 66.7202 3.81454 66.7202 7.37077Z",
                                                stroke: "#FF914C",
                                                strokeLinecap: "round"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item__text"]),
                                        children: poolInformation.icons.cloakroomWomen.title
                                    })
                                ]
                            }),
                            ((_poolInformation_icons_cloakroomMen = poolInformation.icons.cloakroomMen) === null || _poolInformation_icons_cloakroomMen === void 0 ? void 0 : _poolInformation_icons_cloakroomMen.exists) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item"]),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item__svg"]),
                                        width: "81",
                                        height: "82",
                                        viewBox: "0 0 81 82",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                d: "M50.2814 26.9137C50.0684 27.5792 50.1322 41.2498 49.6527 42.6384C49.1732 44.027 46.0405 44.1059 45.8459 42.6384C45.6512 41.1709 45.8533 27.2702 45.8496 22.1478C45.8459 17.0254 49.2273 17.3901 53.7302 17.3168H67.7901C72.2191 17.2367 75.3125 17.311 75.3125 22.1478V42.9833C75.3125 44.0021 72.0891 44.474 71.5601 42.9833C71.5601 42.9833 70.7494 27.73 70.5662 26.9137C70.3829 26.0973 69.4875 26.3535 69.1333 26.9137C68.7792 27.4738 69.1333 48.9373 69.1333 48.9373V78.1166C69.164 79.3214 68.4508 79.8215 66.805 80.5695C66.0821 80.8535 65.4106 80.8912 63.9393 80.5695C62.0556 80.0484 61.7509 79.488 61.7005 78.1166C61.7005 78.1166 62.3549 57.2811 61.7005 56.2643C61.0461 55.2474 59.8605 55.219 59.2825 56.2643C58.7046 57.3095 59.2825 78.1166 59.2825 78.1166L59.282 78.1617C59.2652 79.4719 59.2583 80.0149 56.9542 80.5695C55.8043 80.8142 55.3261 80.8134 54.0885 80.5695C52.1302 80.0109 51.7812 79.4137 51.69 78.1166V27.207C51.4918 26.0777 50.4944 26.2481 50.2814 26.9137Z",
                                                fill: "#FF914C"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                d: "M68.0928 9.18371C68.0928 12.6455 64.7116 15.4518 60.5407 15.4518C56.3698 15.4518 52.9887 12.6455 52.9887 9.18371C52.9887 5.72192 56.3698 2.91558 60.5407 2.91558C64.7116 2.91558 68.0928 5.72192 68.0928 9.18371Z",
                                                fill: "#FF914C"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                d: "M23.2059 11.4151C23.6442 11.4061 24.086 11.5214 24.6146 11.7682C25.6433 12.2486 37.3783 17.4737 39.3981 18.7574C41.4179 20.0411 41.0898 21.826 38.1817 22.3295C35.2736 22.8329 7.96178 22.3295 7.96178 22.3295C4.61947 21.9248 4.78357 19.7083 6.55791 18.7574C8.33225 17.8065 20.9162 12.2308 21.9012 11.7682C22.38 11.5434 22.7914 11.4237 23.2059 11.4151ZM23.2059 11.4151V7.0121L23.1247 6.99106C20.6105 6.34027 19.6937 6.10294 19.5413 3.97163C19.3873 1.8175 21.1293 0.805979 23.2059 0.796932C25.2825 0.787884 26.7223 1.85822 27.0692 3.97163M49.6527 42.6384C50.1322 41.2498 50.0684 27.5792 50.2814 26.9137C50.4944 26.2481 51.4918 26.0777 51.69 27.207V78.1166C51.7812 79.4137 52.1302 80.0109 54.0885 80.5695C55.3261 80.8134 55.8043 80.8142 56.9542 80.5695C59.2583 80.0149 59.2652 79.4719 59.282 78.1617L59.2825 78.1166C59.2825 78.1166 58.7046 57.3095 59.2825 56.2643C59.8605 55.219 61.0461 55.2474 61.7005 56.2643C62.3549 57.2811 61.7005 78.1166 61.7005 78.1166C61.7509 79.488 62.0556 80.0484 63.9393 80.5695C65.4106 80.8912 66.0821 80.8535 66.805 80.5695C68.4508 79.8215 69.164 79.3214 69.1333 78.1166V48.9373C69.1333 48.9373 68.7792 27.4738 69.1333 26.9137C69.4875 26.3535 70.3829 26.0973 70.5662 26.9137C70.7494 27.73 71.5601 42.9833 71.5601 42.9833C72.0891 44.474 75.3125 44.0021 75.3125 42.9833V22.1478C75.3125 17.311 72.2191 17.2367 67.7901 17.3168H53.7302C49.2273 17.3901 45.8459 17.0254 45.8496 22.1478C45.8533 27.2702 45.6512 41.1709 45.8459 42.6384C46.0405 44.1059 49.1732 44.027 49.6527 42.6384ZM68.0928 9.18371C68.0928 12.6455 64.7116 15.4518 60.5407 15.4518C56.3698 15.4518 52.9887 12.6455 52.9887 9.18371C52.9887 5.72192 56.3698 2.91558 60.5407 2.91558C64.7116 2.91558 68.0928 5.72192 68.0928 9.18371Z",
                                                stroke: "#FF914C",
                                                "stroke-linecap": "round"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item__text"]),
                                        children: poolInformation.icons.cloakroomMen.title
                                    })
                                ]
                            }),
                            ((_poolInformation_icons_cloakroomFamily = poolInformation.icons.cloakroomFamily) === null || _poolInformation_icons_cloakroomFamily === void 0 ? void 0 : _poolInformation_icons_cloakroomFamily.exists) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item"]),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item__svg"]),
                                        width: "82",
                                        height: "83",
                                        viewBox: "0 0 82 83",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                            d: "M19.6098 18.6678C16.0823 20.7828 14.2703 22.2138 11.2161 28.1233C11.2161 28.1233 0.219074 56.1701 1.0355 56.1701H9.3116M20.4222 38.5408C20.4222 38.5408 27.4077 56.1701 26.3995 56.1701H18.0295M9.3116 56.1701V81.3594M9.3116 56.1701H18.0295M18.0295 56.1701V81.3594M24.5195 21.8749C24.5195 21.8749 26.9412 34.8481 28.0067 35.0403C29.0722 35.2325 40.4055 40.2295 40.4055 40.2295M43.2146 44.5539H49.8014C50.6732 44.5539 49.8014 50.512 49.8014 51.5691C49.8014 52.6262 62.2971 52.6262 62.2971 51.5691V42.4398M42.4397 56.6623L80.9922 56.1701M36.305 9.80375C36.305 14.4675 32.4941 18.2481 27.7931 18.2481C23.0921 18.2481 19.2812 14.4675 19.2812 9.80375C19.2812 5.14005 23.0921 1.35938 27.7931 1.35938C32.4941 1.35938 36.305 5.14005 36.305 9.80375ZM78.275 46.9321C78.275 50.2497 75.564 52.9392 72.2199 52.9392C68.8758 52.9392 66.1648 50.2497 66.1648 46.9321C66.1648 43.6145 68.8758 40.925 72.2199 40.925C75.564 40.925 78.275 43.6145 78.275 46.9321Z",
                                            stroke: "#FF914C",
                                            strokeWidth: "3",
                                            strokeLinecap: "round"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item__text"]),
                                        children: poolInformation.icons.cloakroomFamily.title
                                    })
                                ]
                            }),
                            ((_poolInformation_icons_parking = poolInformation.icons.parking) === null || _poolInformation_icons_parking === void 0 ? void 0 : _poolInformation_icons_parking.exists) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item"]),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item__svg"]),
                                        children: "P"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__list__item__text"]),
                                        children: poolInformation.icons.parking.title
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe", {
                        src: poolInformation.mapSrc,
                        width: "600",
                        height: "450",
                        style: {
                            border: 0,
                            borderRadius: 30
                        },
                        loading: "lazy",
                        referrerPolicy: "no-referrer-when-downgrade",
                        className: (_poolInformations_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolInformations__row-box__map"])
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__["default"] = (PoolInformations);


/***/ }),

/***/ 3529:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _poolNecessaryItems_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(167);
/* harmony import */ var _poolNecessaryItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_poolNecessaryItems_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Ui_BackgroundText_BackgroundText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1025);
/* harmony import */ var _utils_UI_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9891);
/* harmony import */ var _components_Ui_StickerH2_StickerH2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9803);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const PoolNecessaryItems = (param)=>{
    let { color } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_poolNecessaryItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default().poolNecessaryItems),
        style: {
            background: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_4__/* .COLORS */ .D[color]
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Ui_BackgroundText_BackgroundText__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: "CO ZABRAĆ NA BASEN"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Ui_StickerH2_StickerH2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: "NIEZBĘDNIK",
                titleStrip: "BASENOWY",
                stripBgColor: "basicOrange",
                stripTextColor: color,
                scale: 1.2,
                paddingBottom: 0
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_poolNecessaryItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolNecessaryItems__row-box"]),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_poolNecessaryItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolNecessaryItems__row-box__item"]),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                width: "102",
                                height: "101",
                                viewBox: "0 0 102 101",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: (_poolNecessaryItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolNecessaryItems__row-box__item__svg"]),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M51.0039 0.798867V0.796875C87.1216 4.07136 104.989 21.5646 100.424 62.054C82.3473 53.8183 71.7921 50.3872 51.0039 49.3689C30.2157 50.3872 19.6605 53.8183 1.58402 62.0541C-2.98096 21.5646 14.8862 4.07335 51.0039 0.798867Z",
                                        fill: "#FF914C"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M101.125 87.4589V76.3608C82.7136 65.8354 73.0134 63.4009 58.8802 76.3608C55.8714 78.8668 54.1301 79.5524 51.0041 78.1413V85.3109C54.677 84.2154 56.4762 84.5504 58.8802 87.4589C72.8173 100.281 82.3815 98.7078 101.125 87.4589ZM65.8123 82.0126C65.8123 86.9224 71.4043 90.9026 78.3023 90.9026C85.2004 90.9026 90.7923 86.9224 90.7923 82.0126C90.7923 77.1027 85.2004 73.1225 78.3023 73.1225C71.4043 73.1225 65.8123 77.1027 65.8123 82.0126ZM0.882812 87.4589V76.3608C19.2943 65.8354 28.9944 63.4009 43.1276 76.3608C46.1364 78.8668 47.8777 79.5524 51.0037 78.1413V85.3109C47.3308 84.2154 45.5316 84.5504 43.1276 87.4589C29.1905 100.281 19.6263 98.7078 0.882812 87.4589ZM36.1955 82.0126C36.1955 86.9224 30.6035 90.9026 23.7055 90.9026C16.8074 90.9026 11.2155 86.9224 11.2155 82.0126C11.2155 77.1027 16.8074 73.1225 23.7055 73.1225C30.6035 73.1225 36.1955 77.1027 36.1955 82.0126Z",
                                        fill: "#FF914C"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: (_poolNecessaryItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolNecessaryItems__row-box__item__title"]),
                                children: "CZEPEK I OKULARY"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_poolNecessaryItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolNecessaryItems__row-box__item"]),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                                width: "101",
                                height: "101",
                                viewBox: "0 0 101 101",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: (_poolNecessaryItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolNecessaryItems__row-box__item__svg"]),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M35.1016 0.796875H41.8631C42.0436 12.116 44.4797 15.8082 50.8788 16.8965C57.278 15.8082 59.7141 12.116 59.8946 0.796875H66.6561C66.7294 6.41673 66.8141 9.5814 67.7834 15.4476C68.689 17.6845 68.9859 18.9234 68.9104 21.0825C73.4824 30.1552 74.8199 34.7826 70.5203 40.5632C67.8883 48.6197 68.2306 53.3922 70.5203 62.1368C72.1258 64.616 72.7945 66.4157 73.0963 70.3477C61.9927 75.3407 57.1098 80.3618 55.2256 100.615H50.879H50.8786H46.5321C44.6479 80.3618 39.765 75.3407 28.6614 70.3477C28.9632 66.4157 29.6319 64.616 31.2374 62.1368C33.5271 53.3922 33.8693 48.6197 31.2374 40.5632C26.9378 34.7826 28.2753 30.1552 32.8473 21.0825C32.7717 18.9234 33.0686 17.6845 33.9743 15.4476C34.9436 9.5814 35.0283 6.41673 35.1016 0.796875Z",
                                    fill: "#FF914C"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: (_poolNecessaryItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolNecessaryItems__row-box__item__title"]),
                                children: "STR\xd3J KĄPIELOWY"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_poolNecessaryItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolNecessaryItems__row-box__item"]),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                width: "101",
                                height: "101",
                                viewBox: "0 0 101 101",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: (_poolNecessaryItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolNecessaryItems__row-box__item__svg"]),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                        d: "M33.7645 14.4745C28.369 12.5217 25.7083 12.7274 21.2386 14.4745C15.3834 17.4831 12.8381 20.1362 10.4368 27.4601C8.559 36.6619 8.88674 41.1929 10.4368 48.8345C13.1089 60.9825 14.466 67.9037 16.6437 80.4365C17.1716 85.8065 16.9008 88.9491 20.4349 95.0308C26.8941 103.712 35.4323 101.514 42.3839 93.9966C44.6615 90.9129 43.9916 85.7605 42.3839 79.0575C40.0988 68.4359 39.4794 61.8115 40.4303 47.8002C42.2226 40.0309 42.7099 35.5919 42.3839 27.4601C41.6156 21.2228 40.2834 18.0907 33.7645 14.4745Z",
                                        fill: "#FF914C"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M26.8254 24.9986C26.8785 23.6928 27.045 22.9844 27.6496 22.3059C28.5865 21.3706 30.4255 21.5889 30.2384 22.3059C30.0512 23.0228 29.6935 23.1737 28.9287 23.3975C28.5048 23.9453 28.4002 24.3592 28.6715 25.0761C29.1441 25.2558 29.6482 25.5568 30.2294 25.9835C44.387 39.0532 44.0359 50.6171 37.3898 67.9434C34.9404 70.0282 31.9401 67.894 32.8072 65.6521C40.1169 49.3574 39.6869 41.5697 29.5134 30.423C28.214 29.2707 27.5085 29.1883 26.2196 30.423C10.9947 49.4393 11.2524 56.8181 21.3506 66.3681C22.0002 67.1891 21.1741 71.3386 17.4834 69.0891C13.8029 64.7106 12.2454 62.1877 11.4694 57.5312C11.0282 54.8249 11.1934 53.2124 11.3713 51.4763C11.4049 51.1487 11.4389 50.8167 11.4694 50.4721C14.4961 39.485 16.8854 33.7736 24.9308 25.9835C25.6573 25.4951 26.2628 25.1643 26.8254 24.9986Z",
                                        fill: "white"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                        d: "M68.0883 2.18049C73.4647 0.234621 76.116 0.43956 80.5698 2.18049C86.4043 5.1785 88.9406 7.82219 91.3334 15.1201C93.2045 24.2893 92.878 28.8043 91.3334 36.4189C88.6708 48.5238 87.3185 55.4205 85.1485 67.909C84.6224 73.2599 84.8923 76.3915 81.3707 82.4516C74.9343 91.1025 66.4264 88.9116 59.4994 81.4211C57.2298 78.3483 57.8974 73.2141 59.4994 66.5348C61.7764 55.9508 62.3936 49.3499 61.4461 35.3883C59.6602 27.6464 59.1745 23.2232 59.4994 15.1201C60.265 8.90496 61.5924 5.78393 68.0883 2.18049Z",
                                        fill: "#FF914C"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M75.0121 13.755C74.9607 12.4876 74.7992 11.8002 74.2126 11.1418C73.3036 10.2344 71.5196 10.4462 71.7011 11.1418C71.8827 11.8373 72.2297 11.9837 72.9716 12.2008C73.3826 12.7318 73.4842 13.1332 73.2218 13.8278C72.7621 14.0019 72.272 14.2945 71.7066 14.7095C57.972 27.3888 58.3126 38.6072 64.7601 55.416C67.1364 57.4384 70.047 55.368 69.2058 53.1931C62.1145 37.3851 62.5317 29.8301 72.4012 19.0164C73.6618 17.8985 74.3462 17.8185 75.5966 19.0164C90.3667 37.4646 90.1167 44.623 80.3202 53.8877C79.69 54.6842 80.4914 58.7097 84.0719 56.5274C87.6425 52.2797 89.1534 49.8322 89.9062 45.3148C90.3343 42.6893 90.174 41.125 90.0014 39.4408C89.9688 39.1229 89.9358 38.8008 89.9062 38.4665C86.9699 27.8077 84.652 22.2668 76.847 14.7095C76.1436 14.2366 75.557 13.9161 75.0121 13.755Z",
                                        fill: "white"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: (_poolNecessaryItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolNecessaryItems__row-box__item__title"]),
                                children: "KLAPKI"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_poolNecessaryItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolNecessaryItems__row-box__item"]),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                width: "101",
                                height: "101",
                                viewBox: "0 0 101 101",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: (_poolNecessaryItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolNecessaryItems__row-box__item__svg"]),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                        d: "M10.2656 16.4707H91.4922",
                                        stroke: "white",
                                        strokeWidth: "5",
                                        strokeLinecap: "round"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M25.097 9.83398H53.353H55.0205H83.2766L83.2774 85.538C83.4886 91.4206 81.8756 92.9977 76.7005 92.772L54.1868 92.3823L31.673 92.772C26.498 92.9977 24.8849 91.4206 25.0961 85.538L25.097 9.83398Z",
                                        fill: "#FF914C"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                        d: "M25.097 9.83398V7.33398H22.597L22.597 9.83396L25.097 9.83398ZM83.2766 9.83398L85.7766 9.83396L85.7766 7.33398H83.2766V9.83398ZM83.2774 85.538L80.7774 85.538V85.5828L80.779 85.6277L83.2774 85.538ZM76.7005 92.772L76.8095 90.2744L76.7767 90.273L76.7438 90.2724L76.7005 92.772ZM54.1868 92.3823L54.2301 89.8826L54.1868 89.8819L54.1435 89.8826L54.1868 92.3823ZM31.673 92.772L31.6298 90.2724L31.5969 90.273L31.5641 90.2744L31.673 92.772ZM25.0961 85.538L27.5945 85.6277L27.5961 85.5828L27.5961 85.538L25.0961 85.538ZM53.353 7.33398H25.097V12.334H53.353V7.33398ZM53.353 12.334H55.0205V7.33398H53.353V12.334ZM55.0205 12.334H83.2766V7.33398H55.0205V12.334ZM80.7766 9.83401L80.7774 85.538L85.7774 85.5379L85.7766 9.83396L80.7766 9.83401ZM80.779 85.6277C80.8839 88.549 80.4483 89.4525 80.1777 89.7436C79.9754 89.9613 79.331 90.3844 76.8095 90.2744L76.5916 95.2696C79.2452 95.3854 81.9948 95.1328 83.84 93.1477C85.6169 91.236 85.8821 88.4096 85.7758 85.4483L80.779 85.6277ZM76.7438 90.2724L54.2301 89.8826L54.1435 94.8819L76.6573 95.2716L76.7438 90.2724ZM31.7163 95.2716L54.2301 94.8819L54.1435 89.8826L31.6298 90.2724L31.7163 95.2716ZM22.5977 85.4483C22.4914 88.4096 22.7567 91.236 24.5336 93.1477C26.3787 95.1328 29.1284 95.3854 31.782 95.2696L31.5641 90.2744C29.0426 90.3844 28.3982 89.9613 28.1959 89.7436C27.9253 89.4525 27.4897 88.549 27.5945 85.6277L22.5977 85.4483ZM22.597 9.83396L22.5961 85.5379L27.5961 85.538L27.597 9.83401L22.597 9.83396Z",
                                        fill: "white"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                        d: "M19.0953 8.80381H26.1785V84.8409H19.0953C16.6877 84.8229 15.9627 83.7583 15.9708 79.4246V12.5535C15.9346 9.85126 16.3548 8.74743 19.0953 8.80381Z",
                                        fill: "white"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                        d: "M19.7706 10.876H24.4192V82.7677H19.7706C18.1906 82.7507 17.7148 81.7441 17.7201 77.6466V14.4213C17.6964 11.8663 17.9721 10.8227 19.7706 10.876Z",
                                        fill: "#FF914C"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                        d: "M33.3906 58.4336C37.351 61.9256 39.4441 62.6369 42.5736 58.4336C46.4634 54.7975 48.6313 54.4767 52.5232 58.4336C58.0216 63.2864 61.1049 62.5329 66.605 58.4336C70.1222 54.8421 71.9237 55.563 75.0234 58.4336",
                                        stroke: "#0F48B7",
                                        strokeWidth: "5",
                                        strokeLinecap: "round"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                        d: "M33.3906 69.2989C37.351 72.7909 39.4441 73.5022 42.5736 69.2989C46.4634 65.6627 48.6313 65.3419 52.5232 69.2989C58.0216 74.1516 61.1049 73.3981 66.605 69.2989C70.1222 65.7074 71.9237 66.4283 75.0234 69.2989",
                                        stroke: "white",
                                        strokeWidth: "5",
                                        strokeLinecap: "round"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: (_poolNecessaryItems_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolNecessaryItems__row-box__item__title"]),
                                children: "RĘCZNIK"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__["default"] = (PoolNecessaryItems);


/***/ }),

/***/ 5905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _poolTutorial_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7968);
/* harmony import */ var _poolTutorial_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_poolTutorial_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Ui_BackgroundText_BackgroundText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1025);
/* harmony import */ var _utils_UI_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9891);
/* harmony import */ var _components_Ui_StripH4_StripH4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3245);
/* __next_internal_client_entry_do_not_use__ default auto */ 



// import { customColors } from "@/types/UI/colors";


const PoolTutorial = (param)=>{
    let { poolTutorial } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_poolTutorial_module_scss__WEBPACK_IMPORTED_MODULE_2___default().poolTutorial),
        style: {
            background: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_4__/* .COLORS */ .D[poolTutorial.color]
        },
        children: [
            poolTutorial.header && poolTutorial.stripH4 !== undefined && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Ui_StripH4_StripH4__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: poolTutorial.stripH4.title,
                stripBgColor: poolTutorial.stripH4.stripBgColor,
                stripTextColor: poolTutorial.stripH4.stripTextColor,
                scale: poolTutorial.stripH4.scale,
                marginBottom: poolTutorial.stripH4.marginBottom
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_poolTutorial_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolTutorial__row-box"]),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Ui_BackgroundText_BackgroundText__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        title: "PORADNIK KROK PO KROKU"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: (_poolTutorial_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolTutorial__row-box__circle"]),
                        children: poolTutorial.firstRule
                    }),
                    poolTutorial.rules.map((rule, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                                    width: "124",
                                    height: "58",
                                    viewBox: "0 0 124 58",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: (_poolTutorial_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolTutorial__row-box__arrow"]),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                        d: "M124.011 29L74.0112 0.132486V57.8675L124.011 29ZM0.929688 34H79.0112V24H0.929688V34Z",
                                        fill: index % 2 === 0 ? "white" : _utils_UI_colors__WEBPACK_IMPORTED_MODULE_4__/* .COLORS */ .D.basicOrange
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: (_poolTutorial_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["poolTutorial__row-box__circle"]),
                                    children: rule
                                })
                            ]
                        }))
                ]
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__["default"] = (PoolTutorial);


/***/ }),

/***/ 2020:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Globals_VideosSection; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./components/Globals/videosSection.module.scss
var videosSection_module = __webpack_require__(1908);
var videosSection_module_default = /*#__PURE__*/__webpack_require__.n(videosSection_module);
// EXTERNAL MODULE: ./components/Ui/StickerH2/StickerH2.tsx
var StickerH2 = __webpack_require__(9803);
// EXTERNAL MODULE: ./components/Ui/StickerH1/stickerH1.module.scss
var stickerH1_module = __webpack_require__(9121);
var stickerH1_module_default = /*#__PURE__*/__webpack_require__.n(stickerH1_module);
// EXTERNAL MODULE: ./components/Ui/StripH1/StripH1.tsx
var StripH1 = __webpack_require__(2873);
;// CONCATENATED MODULE: ./components/Ui/StickerH1/StickerH1.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const StickerH1 = (param)=>{
    let { stripBgColor, stripTextColor, scale, title, title2, titleStrip, paddingBottom } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (stickerH1_module_default()).box,
        style: {
            paddingBottom: "".concat(paddingBottom, "%")
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                className: (stickerH1_module_default()).box__title,
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                className: (stickerH1_module_default())["box__title-2"],
                children: title2
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(StripH1/* default */.Z, {
                scale: scale,
                stripTextColor: stripTextColor,
                stripBgColor: stripBgColor,
                title: titleStrip
            })
        ]
    });
};
/* harmony default export */ var StickerH1_StickerH1 = (StickerH1);

// EXTERNAL MODULE: ./components/Ui/Scrap/Scrap2.tsx
var Scrap2 = __webpack_require__(2937);
;// CONCATENATED MODULE: ./components/Globals/VideosSection.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const VideosSection = (param)=>{
    let { scrapColor, col1, col2, col3, oneSticker, oneStickerContent } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (videosSection_module_default()).container,
        children: [
            !oneSticker && col1.stickerH2 !== undefined && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: (videosSection_module_default())["container__image-box__mobileSticker"],
                children: [
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(StickerH1_StickerH1, {
                        title: "NEMO",
                        title2: "SPORTOWA",
                        titleStrip: "PRZYGODA",
                        stripBgColor: "basicOrange",
                        stripTextColor: "white",
                        scale: 1.8,
                        paddingBottom: 30
                    })
                ]
            }),
            oneSticker && oneStickerContent !== undefined && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: (videosSection_module_default())["container__image-box__oneSticker-box"],
                children: [
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(StickerH1_StickerH1, {
                        title: oneStickerContent.title,
                        title2: oneStickerContent.title2,
                        titleStrip: oneStickerContent.titleStrip,
                        stripBgColor: oneStickerContent.stripBgColor,
                        stripTextColor: oneStickerContent.stripTextColor,
                        scale: oneStickerContent.scale,
                        paddingBottom: 30
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Scrap2["default"], {
                position: "bottom",
                color: scrapColor
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (videosSection_module_default())["container__image-box"],
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (videosSection_module_default())["container__image-box__opacity-cover"]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("video", {
                        src: "/assets/videos/".concat(col1.video.src),
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        preload: "metadata"
                    }),
                    !oneSticker && col1.stickerH2 !== undefined && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: (videosSection_module_default())["container__image-box__sticker-box"],
                        style: {
                            bottom: "30%"
                        },
                        children: [
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(StickerH2/* default */.Z, {
                                title: col1.stickerH2.title,
                                titleStrip: col1.stickerH2.titleStrip,
                                stripBgColor: col1.stickerH2.stripBgColor,
                                stripTextColor: col1.stickerH2.stripTextColor,
                                scale: col1.stickerH2.scale,
                                paddingBottom: 30
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (videosSection_module_default())["container__image-box"],
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (videosSection_module_default())["container__image-box__opacity-cover"]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("video", {
                        src: "/assets/videos/".concat(col2.video.src),
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true
                    }),
                    !oneSticker && col2.stickerH2 !== undefined && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: (videosSection_module_default())["container__image-box__sticker-box"],
                        style: {
                            bottom: "15%"
                        },
                        children: [
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(StickerH2/* default */.Z, {
                                title: col2.stickerH2.title,
                                titleStrip: col2.stickerH2.titleStrip,
                                stripBgColor: col2.stickerH2.stripBgColor,
                                stripTextColor: col2.stickerH2.stripTextColor,
                                scale: col2.stickerH2.scale,
                                paddingBottom: 50
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (videosSection_module_default())["container__image-box"],
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (videosSection_module_default())["container__image-box__opacity-cover"]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("video", {
                        src: "/assets/videos/".concat(col3.video.src),
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true
                    }),
                    !oneSticker && col3.stickerH2 !== undefined && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: (videosSection_module_default())["container__image-box__sticker-box"],
                        style: {
                            bottom: "25%"
                        },
                        children: [
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(StickerH2/* default */.Z, {
                                title: col3.stickerH2.title,
                                titleStrip: col3.stickerH2.titleStrip,
                                stripBgColor: col3.stickerH2.stripBgColor,
                                stripTextColor: col3.stickerH2.stripTextColor,
                                scale: col3.stickerH2.scale,
                                paddingBottom: 40
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ var Globals_VideosSection = (VideosSection);


/***/ }),

/***/ 4708:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ NaukaPlywaniaBasen_NaukaPlywaniaBasen; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./components/NaukaPlywaniaBasen/naukaPlywaniaBasen.module.scss
var naukaPlywaniaBasen_module = __webpack_require__(4921);
var naukaPlywaniaBasen_module_default = /*#__PURE__*/__webpack_require__.n(naukaPlywaniaBasen_module);
// EXTERNAL MODULE: ./components/Globals/NaukaPlywaniaAbout/NaukaPlywaniaAbout.tsx
var NaukaPlywaniaAbout = __webpack_require__(2941);
// EXTERNAL MODULE: ./utils/UI/colors.ts
var colors = __webpack_require__(9891);
// EXTERNAL MODULE: ./components/Globals/PriceList/priceList.module.scss
var priceList_module = __webpack_require__(2622);
var priceList_module_default = /*#__PURE__*/__webpack_require__.n(priceList_module);
// EXTERNAL MODULE: ./components/Globals/PriceLessons/priceLessons.module.scss
var priceLessons_module = __webpack_require__(1469);
var priceLessons_module_default = /*#__PURE__*/__webpack_require__.n(priceLessons_module);
// EXTERNAL MODULE: ./components/Ui/StickerH4/StickerH4.tsx
var StickerH4 = __webpack_require__(5348);
// EXTERNAL MODULE: ./components/Ui/Buttons/buttons.module.scss
var buttons_module = __webpack_require__(1845);
var buttons_module_default = /*#__PURE__*/__webpack_require__.n(buttons_module);
// EXTERNAL MODULE: ./node_modules/next/dist/api/link.js
var api_link = __webpack_require__(7138);
;// CONCATENATED MODULE: ./components/Ui/Buttons/SignInButton.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const SingInButton = (param)=>{
    let { bgColor, textColor, title, href } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(api_link["default"], {
        className: (buttons_module_default()).signInButton,
        style: {
            background: colors/* COLORS */.D[bgColor],
            color: colors/* COLORS */.D[textColor]
        },
        href: href,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                width: "25",
                height: "25",
                viewBox: "0 0 25 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.90625 12.2764C1.90625 11.8622 2.24204 11.5264 2.65625 11.5264H15.0956L12.6259 9.0567C12.333 8.7638 12.333 8.28893 12.6259 7.99604C12.9188 7.70314 13.3937 7.70314 13.6866 7.99604L17.4366 11.746C17.7295 12.0389 17.7295 12.5138 17.4366 12.8067L13.6866 16.5567C13.3937 16.8496 12.9188 16.8496 12.6259 16.5567C12.333 16.2638 12.333 15.7889 12.6259 15.496L15.0956 13.0264H2.65625C2.24204 13.0264 1.90625 12.6906 1.90625 12.2764ZM9.40625 17.9014C9.40625 18.1997 9.52478 18.4859 9.73575 18.6969C9.94673 18.9078 10.2329 19.0264 10.5312 19.0264H20.2812C20.5796 19.0264 20.8658 18.9078 21.0767 18.6969C21.2877 18.4859 21.4062 18.1997 21.4062 17.9014V6.65137C21.4062 6.353 21.2877 6.06685 21.0767 5.85587C20.8658 5.64489 20.5796 5.52637 20.2812 5.52637L10.5313 5.52637C10.2329 5.52637 9.94673 5.64489 9.73575 5.85587C9.52478 6.06685 9.40625 6.353 9.40625 6.65137V8.52637C9.40625 8.94058 9.07046 9.27637 8.65625 9.27637C8.24204 9.27637 7.90625 8.94058 7.90625 8.52637V6.65137C7.90625 5.95517 8.18281 5.28749 8.67509 4.79521C9.16738 4.30293 9.83506 4.02637 10.5313 4.02637H20.2812C20.9774 4.02637 21.6451 4.30293 22.1374 4.79521C22.6297 5.28749 22.9062 5.95517 22.9062 6.65137V17.9014C22.9062 18.5976 22.6297 19.2652 22.1374 19.7575C21.6451 20.2498 20.9774 20.5264 20.2812 20.5264H10.5312C9.83506 20.5264 9.16738 20.2498 8.67509 19.7575C8.18281 19.2652 7.90625 18.5976 7.90625 17.9014V16.0264C7.90625 15.6122 8.24204 15.2764 8.65625 15.2764C9.07046 15.2764 9.40625 15.6122 9.40625 16.0264V17.9014Z",
                    fill: "#0F48B7"
                })
            })
        ]
    });
};
/* harmony default export */ var SignInButton = (SingInButton);

;// CONCATENATED MODULE: ./components/Globals/PriceLessons/PriceLessons.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const PriceLessons = (param)=>{
    let { stickerH4, oneLesson, tenLessons, button } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (priceLessons_module_default()).priceLessons,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(StickerH4/* default */.Z, {
                stripTextColor: stickerH4.stripTextColor,
                stripBgColor: stickerH4.stripBgColor,
                title: stickerH4.title,
                titleStrip: stickerH4.titleStrip,
                scale: stickerH4.scale,
                paddingBottom: stickerH4.paddingBottom
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (priceLessons_module_default())["priceLessons__content-box"],
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: (priceLessons_module_default())["priceLessons__content-box__orange"],
                        children: "1 LEKCJA"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            oneLesson.price,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            oneLesson.time,
                            " min"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (priceLessons_module_default())["priceLessons__content-box"],
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: (priceLessons_module_default())["priceLessons__content-box__orange"],
                        children: "10 LEKCJI"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            tenLessons.price,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            tenLessons.time,
                            " min"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SignInButton, {
                title: button.title,
                textColor: button.textColor,
                bgColor: button.bgColor,
                href: button.href
            })
        ]
    });
};
/* harmony default export */ var PriceLessons_PriceLessons = (PriceLessons);

;// CONCATENATED MODULE: ./components/Globals/PriceList/PriceList.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


// import BackgroundText from "@/components/Ui/BackgroundText/BackgroundText";

const PriceList = (param)=>{
    let { priceList } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (priceList_module_default()).priceList,
        children: priceList.map((listItem)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PriceLessons_PriceLessons, {
                stickerH4: listItem.stickerH4,
                oneLesson: listItem.oneLesson,
                tenLessons: listItem.tenLessons,
                button: listItem.button
            }, listItem.stickerH4.titleStrip))
    });
};
/* harmony default export */ var PriceList_PriceList = (PriceList);

// EXTERNAL MODULE: ./components/Globals/Groups/Groups.tsx + 1 modules
var Groups = __webpack_require__(5486);
;// CONCATENATED MODULE: ./components/NaukaPlywaniaBasen/NaukaPlywaniaBasen.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const NaukaPlywaniaBasen = (param)=>{
    let { about, backgroundColor, groups, priceList } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (naukaPlywaniaBasen_module_default()).naukaPlywaniaBasen,
        style: {
            background: colors/* COLORS */.D[backgroundColor]
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NaukaPlywaniaAbout/* default */.Z, {
                stickerH2: about.stickerH2,
                aboutTextPoppins: about.aboutTextPoppins,
                image: about.image,
                button: about.button
            }),
            priceList !== undefined && /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceList_PriceList, {
                priceList: priceList
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Groups/* default */.Z, {
                stripH2: groups.stripH2,
                groups: groups.groups
            })
        ]
    });
};
/* harmony default export */ var NaukaPlywaniaBasen_NaukaPlywaniaBasen = (NaukaPlywaniaBasen);


/***/ }),

/***/ 215:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _aboutTextPoppins_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4043);
/* harmony import */ var _aboutTextPoppins_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aboutTextPoppins_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9891);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const AboutTextPoppins = (param)=>{
    let { titleColor, title, description, descriptionColor } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_aboutTextPoppins_module_scss__WEBPACK_IMPORTED_MODULE_2___default().box),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: (_aboutTextPoppins_module_scss__WEBPACK_IMPORTED_MODULE_2___default().box__title),
                style: {
                    color: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[titleColor]
                },
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                style: {
                    color: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[descriptionColor !== undefined ? descriptionColor : "white"]
                },
                children: description
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__.Z = (AboutTextPoppins);


/***/ }),

/***/ 1025:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _backgroundText_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5307);
/* harmony import */ var _backgroundText_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backgroundText_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const BackgroundText = (param)=>{
    let { title } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: (_backgroundText_module_scss__WEBPACK_IMPORTED_MODULE_2___default().text),
        children: title
    });
};
/* harmony default export */ __webpack_exports__.Z = (BackgroundText);


/***/ }),

/***/ 4058:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _bubbles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3112);
/* harmony import */ var _bubbles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bubbles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9891);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Bubbles = (param)=>{
    let { colorTop, colorBottom } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (_bubbles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bubbles),
        style: {
            background: "linear-gradient(180deg,".concat(_utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[colorTop], " 0%, ").concat(_utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[colorBottom], " 100%)")
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "1921",
            height: "416",
            viewBox: "0 0 1921 416",
            fill: "none",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-1",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "434.742",
                            y: "249.934",
                            width: "59",
                            height: "59",
                            rx: "29.5",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "484.742",
                            cy: "271.934",
                            r: "10",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "1443",
                            y: "102.434",
                            width: "59",
                            height: "59",
                            rx: "29.5",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "1493",
                            cy: "124.434",
                            r: "10",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "1466",
                            y: "233.934",
                            width: "59",
                            height: "59",
                            rx: "29.5",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "1516",
                            cy: "255.934",
                            r: "10",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "1211.5",
                            y: "99.4336",
                            width: "59",
                            height: "59",
                            rx: "29.5",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "1261.5",
                            cy: "121.434",
                            r: "10",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "321",
                            y: "232.434",
                            width: "72",
                            height: "72",
                            rx: "36",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "366.872",
                            cy: "250.305",
                            r: "5.87152",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-6",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "605",
                            y: "295.434",
                            width: "77",
                            height: "76",
                            rx: "38",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "655",
                            cy: "317.434",
                            r: "10",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-7",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "789.875",
                            y: "241.434",
                            width: "77",
                            height: "76",
                            rx: "38",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "839.875",
                            cy: "263.434",
                            r: "10",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-8",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "1584",
                            y: "193.434",
                            width: "49",
                            height: "49",
                            rx: "24.5",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "1599.25",
                            cy: "208.684",
                            r: "6.25",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-9",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "373.742",
                            y: "106.934",
                            width: "77",
                            height: "76",
                            rx: "38",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "423.742",
                            cy: "128.934",
                            r: "10",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-10",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "757",
                            y: "132.934",
                            width: "77",
                            height: "76",
                            rx: "38",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "807",
                            cy: "154.934",
                            r: "10",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-11",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "935.5",
                            y: "106.934",
                            width: "77",
                            height: "76",
                            rx: "38",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "985.5",
                            cy: "128.934",
                            r: "10",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-12",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "1163",
                            y: "287.434",
                            width: "77",
                            height: "76",
                            rx: "38",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "1213",
                            cy: "309.434",
                            r: "10",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-13",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "935.5",
                            y: "249.934",
                            width: "77",
                            height: "76",
                            rx: "38",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "985.5",
                            cy: "271.934",
                            r: "10",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-14",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "1042",
                            y: "54.9336",
                            width: "77",
                            height: "76",
                            rx: "38",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "1092",
                            cy: "76.9336",
                            r: "10",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-15",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "526",
                            y: "145.934",
                            width: "77",
                            height: "76",
                            rx: "38",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "576",
                            cy: "167.934",
                            r: "10",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-16",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "1600.25",
                            y: "294.934",
                            width: "77",
                            height: "76",
                            rx: "38",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "1650.25",
                            cy: "316.934",
                            r: "10",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-17",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "1277",
                            y: "206.434",
                            width: "77",
                            height: "76",
                            rx: "38",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "1327",
                            cy: "228.434",
                            r: "10",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-18",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "143",
                            y: "97.4336",
                            width: "59",
                            height: "58",
                            rx: "29",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "189.211",
                            cy: "115.644",
                            r: "6.21069",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    id: "bubble-19",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "143",
                            y: "265.434",
                            width: "61",
                            height: "59",
                            rx: "29.5",
                            stroke: "white",
                            strokeWidth: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "193",
                            cy: "287.434",
                            r: "10",
                            fill: "white",
                            fillOpacity: "0.62"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ __webpack_exports__["default"] = (Bubbles);


/***/ }),

/***/ 7920:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _buttons_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1845);
/* harmony import */ var _buttons_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_buttons_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9891);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7138);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const LinkButton = (param)=>{
    let { bgColor, textColor, title, href } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: (_buttons_module_scss__WEBPACK_IMPORTED_MODULE_2___default().linkButton),
        style: {
            background: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[bgColor],
            color: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[textColor]
        },
        href: href,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                children: title
            }),
            " ",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                width: "25",
                height: "25",
                viewBox: "0 0 25 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.4545 5.21439C12.8938 4.77505 13.6062 4.77505 14.0455 5.21439L20.7955 11.9644C21.2348 12.4037 21.2348 13.116 20.7955 13.5554L14.0455 20.3054C13.6062 20.7447 12.8938 20.7447 12.4545 20.3054C12.0152 19.866 12.0152 19.1537 12.4545 18.7144L17.284 13.8849H5.375C4.75368 13.8849 4.25 13.3812 4.25 12.7599C4.25 12.1386 4.75368 11.6349 5.375 11.6349H17.284L12.4545 6.80538C12.0152 6.36604 12.0152 5.65373 12.4545 5.21439Z",
                    fill: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[textColor]
                })
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__.Z = (LinkButton);


/***/ }),

/***/ 2937:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var _utils_UI_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9891);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2265);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Scrap2 = (param)=>{
    let { position, color } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
        width: "1922",
        height: "139",
        viewBox: "0 0 1922 139",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
            position: "absolute",
            width: "100%",
            top: position === "top" ? 0 : "",
            bottom: position === "bottom" ? "-65px" : "",
            rotate: position === "top" ? "180deg" : "",
            zIndex: 3
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M1920.63 137.546C1920.63 137.607 1920.63 137.668 1920.63 137.729L0.595367 138.011L0.59375 20.1477C1.35732 17.1913 13.7375 15.8115 61.8913 12.0542C102.682 8.8927 113.047 8.32259 135.114 7.90796C159.188 7.49333 164.203 7.54515 198.641 9.04819C219.371 9.92927 240.101 10.9658 244.782 11.3286C249.463 11.6914 258.491 12.3134 264.843 12.6244C271.196 12.9871 281.226 13.6091 286.91 13.9719C292.594 14.3865 300.284 14.7493 303.628 14.853C307.306 14.9048 311.318 15.1121 313.324 15.2676C314.996 15.4749 322.352 15.8896 329.039 16.2005C336.06 16.5633 341.744 17.0298 341.744 17.2889C341.744 17.9109 359.799 17.0298 373.173 15.7859C379.192 15.1639 389.557 14.6975 395.575 14.6975C401.928 14.6975 412.293 14.4383 418.645 14.1274C429.01 13.6091 539.012 12.4689 569.104 12.5725C637.98 12.728 672.753 13.0908 681.112 13.6091C695.823 14.5938 730.596 15.3713 761.356 15.4749C776.068 15.4749 795.795 15.6822 805.491 15.9414C820.871 16.3042 824.883 16.1487 843.941 14.7493C855.309 13.8682 868.683 13.1426 873.364 13.1426C878.045 13.1426 891.419 12.417 903.456 11.536C920.174 10.2921 931.541 9.87743 951.937 9.67012C977.013 9.35915 982.029 9.10001 1035.86 5.00556C1087.35 1.11841 1094.71 0.703782 1111.09 0.755616C1137.84 0.859269 1156.23 1.58487 1171.61 3.19156C1188.66 4.9019 1210.06 6.81955 1234.46 8.68538C1240.27 9.16534 1246.41 9.6453 1251.14 10.0147L1251.15 10.0158C1254.59 10.2841 1257.27 10.494 1258.54 10.603C1261.88 10.8622 1266.56 11.0695 1269.24 11.0695C1271.58 11.0695 1275.59 11.3805 1277.6 11.7951C1279.6 12.1579 1284.95 12.3652 1289.3 12.2616C1297.99 12.0024 1327.41 13.7127 1368.87 16.8225C1372.22 17.0816 1382.25 17.2889 1391.61 17.2889C1400.64 17.2889 1414.68 17.5999 1422.37 17.9627C1455.47 19.6212 1477.54 19.9322 1495.93 19.1547C1507.96 18.6883 1526.35 18.481 1552.1 18.5328C1586.2 18.6883 1592.56 18.8438 1608.94 20.1395C1634.68 22.1608 1638.36 22.2126 1694.2 22.109C1754.05 22.0053 1809.89 21.1761 1839.64 20.0358C1851.68 19.6212 1870.74 19.0511 1882.11 18.7919C1893.47 18.5846 1915.28 17.2371 1920.63 16.8225C1921 16.8242 1920.56 16.8277 1920.87 16.8242H1921.13V137.545L1920.63 137.546Z",
            fill: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_1__/* .COLORS */ .D[color]
        })
    });
};
/* harmony default export */ __webpack_exports__["default"] = (Scrap2);


/***/ }),

/***/ 9803:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _stickerH2_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5237);
/* harmony import */ var _stickerH2_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stickerH2_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StripH2_StripH2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5445);
/* harmony import */ var _utils_UI_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9891);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const StickerH2 = (param)=>{
    let { stripBgColor, stripTextColor, scale, title, titleStrip, paddingBottom, titleColor } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_stickerH2_module_scss__WEBPACK_IMPORTED_MODULE_2___default().box),
        style: {
            paddingBottom: "".concat(paddingBottom, "%")
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                className: (_stickerH2_module_scss__WEBPACK_IMPORTED_MODULE_2___default().box__title),
                style: {
                    color: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_4__/* .COLORS */ .D[titleColor !== undefined ? titleColor : "white"]
                },
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StripH2_StripH2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                scale: scale,
                stripTextColor: stripTextColor,
                stripBgColor: stripBgColor,
                title: titleStrip
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__.Z = (StickerH2);


/***/ }),

/***/ 5348:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _stickerH4_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4896);
/* harmony import */ var _stickerH4_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stickerH4_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StripH4_StripH4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3245);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const StickerH4 = (param)=>{
    let { stripBgColor, stripTextColor, scale, title, titleStrip, paddingBottom } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_stickerH4_module_scss__WEBPACK_IMPORTED_MODULE_2___default().box),
        style: {
            paddingBottom: "".concat(paddingBottom, "%")
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                className: (_stickerH4_module_scss__WEBPACK_IMPORTED_MODULE_2___default().box__title),
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StripH4_StripH4__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                scale: scale,
                stripTextColor: stripTextColor,
                stripBgColor: stripBgColor,
                title: titleStrip
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__.Z = (StickerH4);


/***/ }),

/***/ 2873:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _strip_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2603);
/* harmony import */ var _strip_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strip_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9891);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const StripH1 = (param)=>{
    let { scale, stripBgColor, stripTextColor, title } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: (_strip_module_scss__WEBPACK_IMPORTED_MODULE_2___default().box),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                width: "400",
                height: "151",
                viewBox: "0 0 400 151",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                    scale: scale
                },
                className: (_strip_module_scss__WEBPACK_IMPORTED_MODULE_2___default().box__mainScrap),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M123.942 0.953491C121.015 1.23906 117.659 1.8102 116.446 2.23856C115.303 2.66692 112.948 3.16667 111.305 3.30945C109.663 3.45224 107.807 3.952 107.236 4.45174C105.88 5.59402 97.6694 7.45024 97.1697 6.66492C97.0269 6.37935 95.0279 6.45073 92.7433 6.73631C86.8891 7.52164 62.901 7.80721 58.6175 7.16467C56.6898 6.80771 51.1926 6.59352 46.4806 6.59352C41.7687 6.59352 36.7712 6.30795 35.2719 5.95099C26.4192 3.52362 14.8536 3.16666 10.8555 5.16566C9.21351 5.95099 6.78615 6.73631 5.35829 7.02188C3.2165 7.30745 2.64536 7.80721 2.35978 9.37785C2.14561 10.5915 2.50257 11.948 3.35929 13.1617C4.14461 14.304 4.92993 16.9455 5.14411 19.4443C5.42968 21.943 6.00083 23.8706 6.57197 24.0848C7.14311 24.299 7.50008 26.0838 7.57147 29.2965C7.85704 42.7898 8.14262 46.4308 8.92794 48.0014C9.49908 49.0723 9.71326 50.7858 9.3563 52.8562C9.07072 54.998 9.21351 56.3544 9.78465 57.1398C10.8555 58.3534 10.7842 62.1373 9.71326 63.4223C9.3563 63.9221 9.21351 64.4932 9.42769 64.7074C10.3558 65.6355 8.99933 68.5626 7.14311 69.4907C4.50157 70.99 2.43118 75.6305 3.00232 78.986C3.28789 81.0564 3.14511 82.0559 2.14561 83.1268C1.43168 83.9121 1.28889 84.4833 1.71725 84.4833C3.00232 84.4833 2.71675 89.1238 1.50307 90.1947C0.860532 90.6945 0.646353 91.4084 0.931925 91.694C1.2175 91.9795 1.28889 94.7639 1.00332 97.8338C0.717746 100.904 0.432174 104.83 0.289388 106.615C0.0752094 108.4 0.432174 110.899 1.00332 112.327C1.64585 113.683 2.00282 115.111 1.93143 115.468C1.86003 115.825 2.00282 116.61 2.28839 117.253C3.07371 119.109 3.35929 120.323 3.71625 123.678C3.93043 125.463 4.35879 127.248 4.78715 127.747C5.2869 128.319 5.14411 129.389 4.43018 131.103C3.2165 134.03 3.93043 135.172 6.92894 135.172C7.99983 135.172 8.99933 135.529 9.14212 135.886C9.2849 136.386 11.7837 136.457 16.8526 136.029C24.206 135.458 31.3453 135.886 36.1287 137.243C37.4851 137.6 40.912 138.599 43.6249 139.456C46.4093 140.241 49.9075 141.098 51.4782 141.241C52.9774 141.455 54.905 142.026 55.7617 142.597C58.0463 144.025 60.3309 144.596 66.4707 145.167C78.8217 146.31 86.6035 147.38 89.6734 148.38C91.4582 148.951 95.1707 149.522 97.8836 149.594C102.096 149.665 103.381 149.379 106.094 147.809C107.879 146.809 111.091 145.667 113.233 145.31C119.159 144.239 151 145.167 157.14 146.595C159.139 147.024 165.136 147.38 170.704 147.238C176.202 147.166 189.124 147.166 199.333 147.166C216.681 147.309 218.252 147.38 221.465 148.808C224.606 150.165 226.534 150.379 241.026 150.593C253.235 150.807 258.375 150.593 262.444 149.808C267.156 148.88 275.367 148.523 291.002 148.666C293.572 148.737 298.783 148.094 302.567 147.309C306.351 146.524 311.848 145.881 314.775 145.881C321.486 145.881 331.053 144.096 334.837 142.169C337.693 140.67 338.121 140.67 349.187 141.455C364.251 142.597 374.603 141.455 383.241 137.671C390.809 134.387 393.308 132.388 394.379 128.818C395.592 124.82 395.521 115.539 394.236 111.327C393.379 108.614 393.308 106.615 393.807 102.76C394.379 98.0479 394.236 93.5502 393.379 89.695C393.236 88.8382 392.308 87.339 391.38 86.4823C390.452 85.5542 389.524 84.0549 389.31 83.0554C388.81 80.985 391.023 74.631 394.95 66.8492C397.163 62.5656 397.52 61.2805 397.234 58.4962C396.949 56.4258 397.163 54.7838 397.805 53.9271C398.662 52.642 399.59 38.7918 398.805 38.7918C398.591 38.7918 398.377 38.2206 398.305 37.5067C398.162 36.0788 397.449 32.0808 396.949 29.6535C396.735 28.5112 396.163 28.0828 394.664 28.0828C391.309 28.0828 389.524 27.2975 389.524 25.7982C389.524 25.0843 388.739 23.2995 387.739 21.8716C386.454 19.8726 386.168 18.9445 386.74 17.945C387.097 17.2311 387.81 16.6599 388.31 16.6599C389.881 16.6599 387.168 15.3035 383.099 14.0898C378.172 12.5905 369.534 12.305 369.534 13.6614C369.534 14.2326 369.177 14.3754 368.677 14.0184C367.749 13.4473 358.825 13.0903 339.906 12.8047C329.911 12.6619 323.985 11.8052 320.987 10.2346C320.273 9.87759 318.345 9.44925 316.632 9.23506C314.918 9.09227 311.563 8.23557 309.278 7.45024C306.922 6.59352 304.423 6.09377 303.71 6.37935C302.996 6.59352 302.424 6.45073 302.424 6.09377C302.424 5.16566 297.356 5.16566 296.213 6.02238C295.714 6.52213 295.214 6.45073 294.928 6.02238C294.643 5.52263 293.857 5.66542 292.572 6.52213C289.645 8.44974 276.58 9.52063 272.439 8.23557C270.655 7.66441 268.941 6.95049 268.513 6.66492C268.156 6.37935 265.3 5.95099 262.302 5.66542C259.232 5.37984 255.519 4.73732 254.091 4.23756C252.592 3.73781 250.093 3.45224 248.451 3.66641C246.452 3.8092 245.167 3.59503 244.453 2.80971C243.525 1.95299 242.526 1.88159 238.813 2.38135C236.315 2.73831 227.962 3.23807 220.323 3.45224C212.683 3.73781 204.687 4.02339 202.546 4.16617C200.475 4.30896 197.905 4.09477 196.834 3.8092C193.407 2.66692 187.268 2.30995 166.064 2.02438C147.359 1.8102 140.862 1.52463 131.795 0.667908C130.439 0.525131 126.869 0.667908 123.942 0.953491Z",
                    fill: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[stripBgColor]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                width: "25",
                height: "89",
                viewBox: "0 0 25 89",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: (_strip_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["box__scrap-left"]),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M24.4601 0.805469C17.2601 0.320749 14.1932 0.348468 11.7932 0.804676C8.59325 1.43196 6.05995 3.65597 7.12662 4.96757C7.52662 5.50931 8.05994 7.64779 8.19327 9.67221C8.3266 13.2078 8.45994 13.4359 11.9266 14.5194C15.7933 15.717 16.5933 16.886 14.1933 17.8269C13.3933 18.1406 12.7266 19.3381 12.7266 20.4786C12.7266 22.4175 12.3266 22.6741 8.19327 23.7861C5.65994 24.4704 3.65992 25.2118 3.52658 25.4684C3.52658 25.725 3.12656 26.1812 2.8599 26.4949C1.52656 27.7779 0.993243 30.4296 2.05991 30.7433C4.05991 31.285 4.72658 32.5966 3.52658 33.7371C0.193251 36.9021 -0.873436 40.3521 0.859898 41.9774C2.8599 43.7167 3.5266 44.515 4.45993 46.8816C4.99327 47.9081 5.79327 48.8775 6.19327 49.0201C6.7266 49.1912 7.25992 50.1036 7.52658 51.073C7.79325 52.4987 7.12661 53.2115 4.19327 54.5801C2.3266 55.521 0.993284 56.5475 1.39328 56.8612C1.79328 57.1748 1.65995 57.4884 1.12662 57.5455C-0.206712 57.7165 0.859906 65.0729 2.32657 66.1279C2.99324 66.6126 3.92657 67.7816 4.32657 68.751C4.99324 70.0912 6.05993 70.7184 8.7266 71.3172C11.6599 72.0015 12.0599 72.3437 11.9266 73.9689C11.7933 74.9954 12.3266 76.0219 12.9933 76.25C13.7933 76.5351 13.2599 76.8772 11.1266 77.3905C7.12656 78.3029 3.79327 80.6695 4.45993 81.9526C4.85993 82.4943 5.25992 83.4637 5.52658 84.091C5.79325 84.6898 6.59325 85.2601 7.52658 85.3171C8.32658 85.3741 8.99326 85.6022 8.99326 85.8303C8.99326 86.0584 9.92659 86.315 10.9933 86.4291C12.1933 86.5146 13.9266 86.9423 14.9933 87.37C18.0599 88.6531 21.3851 88.9097 24.4599 88.9097C24.4617 86.9496 24.4609 4.96836 24.4601 0.805469Z",
                    fill: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[stripBgColor]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                style: {
                    color: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[stripTextColor],
                    background: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[stripBgColor]
                },
                children: title
            }),
            " ",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                width: "25",
                height: "89",
                viewBox: "0 0 25 89",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: (_strip_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["box__scrap-right"]),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M0.000796026 88.5568C7.2008 89.0416 10.2677 89.0138 12.6677 88.5576C15.8677 87.9303 18.401 85.7063 17.3343 84.3947C16.9343 83.853 16.401 81.7145 16.2677 79.6901C16.1343 76.1545 16.001 75.9264 12.5343 74.8429C8.66766 73.6453 7.86767 72.4763 10.2677 71.5354C11.0677 71.2218 11.7343 70.0242 11.7343 68.8837C11.7343 66.9448 12.1343 66.6882 16.2677 65.5762C18.801 64.8919 20.801 64.1505 20.9344 63.8939C20.9344 63.6373 21.3344 63.1811 21.601 62.8675C22.9344 61.5844 23.4677 58.9327 22.401 58.619C20.401 58.0773 19.7344 56.7657 20.9344 55.6252C24.2677 52.4602 25.3344 49.0102 23.601 47.3849C21.601 45.6456 20.9343 44.8473 20.001 42.4807C19.4677 41.4542 18.6677 40.4848 18.2677 40.3422C17.7343 40.1711 17.201 39.2587 16.9344 38.2893C16.6677 36.8636 17.3343 36.1508 20.2677 34.7822C22.1343 33.8413 23.4677 32.8148 23.0677 32.5012C22.6677 32.1875 22.801 31.8739 23.3343 31.8168C24.6676 31.6458 23.601 24.2894 22.1344 23.2345C21.4677 22.7497 20.5344 21.5807 20.1344 20.6113C19.4677 19.2712 18.401 18.6439 15.7343 18.0451C12.801 17.3608 12.401 17.0186 12.5343 15.3934C12.6677 14.3669 12.1343 13.3405 11.4677 13.1124C10.6677 12.8272 11.201 12.4851 13.3344 11.9718C17.3344 11.0594 20.6677 8.69284 20.001 7.40975C19.601 6.86801 19.201 5.89857 18.9344 5.27129C18.6677 4.67251 17.8677 4.10225 16.9344 4.04523C16.1344 3.9882 15.4677 3.76009 15.4677 3.53199C15.4677 3.30389 14.5343 3.04727 13.4677 2.93322C12.2677 2.84768 10.5343 2.41999 9.46768 1.99229C6.40101 0.709211 3.07584 0.452591 0.00100336 0.452591C-0.000787697 2.41273 1.27894e-06 84.3939 0.000796026 88.5568Z",
                    fill: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[stripBgColor]
                })
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__.Z = (StripH1);


/***/ }),

/***/ 5445:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _strip_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3121);
/* harmony import */ var _strip_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strip_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9891);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const StripH2 = (param)=>{
    let { scale, stripBgColor, stripTextColor, title } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: (_strip_module_scss__WEBPACK_IMPORTED_MODULE_2___default().box),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                width: "400",
                height: "151",
                viewBox: "0 0 400 151",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                    scale: scale
                },
                className: (_strip_module_scss__WEBPACK_IMPORTED_MODULE_2___default().box__mainScrap),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M123.942 0.953491C121.015 1.23906 117.659 1.8102 116.446 2.23856C115.303 2.66692 112.948 3.16667 111.305 3.30945C109.663 3.45224 107.807 3.952 107.236 4.45174C105.88 5.59402 97.6694 7.45024 97.1697 6.66492C97.0269 6.37935 95.0279 6.45073 92.7433 6.73631C86.8891 7.52164 62.901 7.80721 58.6175 7.16467C56.6898 6.80771 51.1926 6.59352 46.4806 6.59352C41.7687 6.59352 36.7712 6.30795 35.2719 5.95099C26.4192 3.52362 14.8536 3.16666 10.8555 5.16566C9.21351 5.95099 6.78615 6.73631 5.35829 7.02188C3.2165 7.30745 2.64536 7.80721 2.35978 9.37785C2.14561 10.5915 2.50257 11.948 3.35929 13.1617C4.14461 14.304 4.92993 16.9455 5.14411 19.4443C5.42968 21.943 6.00083 23.8706 6.57197 24.0848C7.14311 24.299 7.50008 26.0838 7.57147 29.2965C7.85704 42.7898 8.14262 46.4308 8.92794 48.0014C9.49908 49.0723 9.71326 50.7858 9.3563 52.8562C9.07072 54.998 9.21351 56.3544 9.78465 57.1398C10.8555 58.3534 10.7842 62.1373 9.71326 63.4223C9.3563 63.9221 9.21351 64.4932 9.42769 64.7074C10.3558 65.6355 8.99933 68.5626 7.14311 69.4907C4.50157 70.99 2.43118 75.6305 3.00232 78.986C3.28789 81.0564 3.14511 82.0559 2.14561 83.1268C1.43168 83.9121 1.28889 84.4833 1.71725 84.4833C3.00232 84.4833 2.71675 89.1238 1.50307 90.1947C0.860532 90.6945 0.646353 91.4084 0.931925 91.694C1.2175 91.9795 1.28889 94.7639 1.00332 97.8338C0.717746 100.904 0.432174 104.83 0.289388 106.615C0.0752094 108.4 0.432174 110.899 1.00332 112.327C1.64585 113.683 2.00282 115.111 1.93143 115.468C1.86003 115.825 2.00282 116.61 2.28839 117.253C3.07371 119.109 3.35929 120.323 3.71625 123.678C3.93043 125.463 4.35879 127.248 4.78715 127.747C5.2869 128.319 5.14411 129.389 4.43018 131.103C3.2165 134.03 3.93043 135.172 6.92894 135.172C7.99983 135.172 8.99933 135.529 9.14212 135.886C9.2849 136.386 11.7837 136.457 16.8526 136.029C24.206 135.458 31.3453 135.886 36.1287 137.243C37.4851 137.6 40.912 138.599 43.6249 139.456C46.4093 140.241 49.9075 141.098 51.4782 141.241C52.9774 141.455 54.905 142.026 55.7617 142.597C58.0463 144.025 60.3309 144.596 66.4707 145.167C78.8217 146.31 86.6035 147.38 89.6734 148.38C91.4582 148.951 95.1707 149.522 97.8836 149.594C102.096 149.665 103.381 149.379 106.094 147.809C107.879 146.809 111.091 145.667 113.233 145.31C119.159 144.239 151 145.167 157.14 146.595C159.139 147.024 165.136 147.38 170.704 147.238C176.202 147.166 189.124 147.166 199.333 147.166C216.681 147.309 218.252 147.38 221.465 148.808C224.606 150.165 226.534 150.379 241.026 150.593C253.235 150.807 258.375 150.593 262.444 149.808C267.156 148.88 275.367 148.523 291.002 148.666C293.572 148.737 298.783 148.094 302.567 147.309C306.351 146.524 311.848 145.881 314.775 145.881C321.486 145.881 331.053 144.096 334.837 142.169C337.693 140.67 338.121 140.67 349.187 141.455C364.251 142.597 374.603 141.455 383.241 137.671C390.809 134.387 393.308 132.388 394.379 128.818C395.592 124.82 395.521 115.539 394.236 111.327C393.379 108.614 393.308 106.615 393.807 102.76C394.379 98.0479 394.236 93.5502 393.379 89.695C393.236 88.8382 392.308 87.339 391.38 86.4823C390.452 85.5542 389.524 84.0549 389.31 83.0554C388.81 80.985 391.023 74.631 394.95 66.8492C397.163 62.5656 397.52 61.2805 397.234 58.4962C396.949 56.4258 397.163 54.7838 397.805 53.9271C398.662 52.642 399.59 38.7918 398.805 38.7918C398.591 38.7918 398.377 38.2206 398.305 37.5067C398.162 36.0788 397.449 32.0808 396.949 29.6535C396.735 28.5112 396.163 28.0828 394.664 28.0828C391.309 28.0828 389.524 27.2975 389.524 25.7982C389.524 25.0843 388.739 23.2995 387.739 21.8716C386.454 19.8726 386.168 18.9445 386.74 17.945C387.097 17.2311 387.81 16.6599 388.31 16.6599C389.881 16.6599 387.168 15.3035 383.099 14.0898C378.172 12.5905 369.534 12.305 369.534 13.6614C369.534 14.2326 369.177 14.3754 368.677 14.0184C367.749 13.4473 358.825 13.0903 339.906 12.8047C329.911 12.6619 323.985 11.8052 320.987 10.2346C320.273 9.87759 318.345 9.44925 316.632 9.23506C314.918 9.09227 311.563 8.23557 309.278 7.45024C306.922 6.59352 304.423 6.09377 303.71 6.37935C302.996 6.59352 302.424 6.45073 302.424 6.09377C302.424 5.16566 297.356 5.16566 296.213 6.02238C295.714 6.52213 295.214 6.45073 294.928 6.02238C294.643 5.52263 293.857 5.66542 292.572 6.52213C289.645 8.44974 276.58 9.52063 272.439 8.23557C270.655 7.66441 268.941 6.95049 268.513 6.66492C268.156 6.37935 265.3 5.95099 262.302 5.66542C259.232 5.37984 255.519 4.73732 254.091 4.23756C252.592 3.73781 250.093 3.45224 248.451 3.66641C246.452 3.8092 245.167 3.59503 244.453 2.80971C243.525 1.95299 242.526 1.88159 238.813 2.38135C236.315 2.73831 227.962 3.23807 220.323 3.45224C212.683 3.73781 204.687 4.02339 202.546 4.16617C200.475 4.30896 197.905 4.09477 196.834 3.8092C193.407 2.66692 187.268 2.30995 166.064 2.02438C147.359 1.8102 140.862 1.52463 131.795 0.667908C130.439 0.525131 126.869 0.667908 123.942 0.953491Z",
                    fill: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[stripBgColor]
                })
            }),
            " ",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                width: "25",
                height: "89",
                viewBox: "0 0 25 89",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: (_strip_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["box__scrap-left"]),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M24.4601 0.805469C17.2601 0.320749 14.1932 0.348468 11.7932 0.804676C8.59325 1.43196 6.05995 3.65597 7.12662 4.96757C7.52662 5.50931 8.05994 7.64779 8.19327 9.67221C8.3266 13.2078 8.45994 13.4359 11.9266 14.5194C15.7933 15.717 16.5933 16.886 14.1933 17.8269C13.3933 18.1406 12.7266 19.3381 12.7266 20.4786C12.7266 22.4175 12.3266 22.6741 8.19327 23.7861C5.65994 24.4704 3.65992 25.2118 3.52658 25.4684C3.52658 25.725 3.12656 26.1812 2.8599 26.4949C1.52656 27.7779 0.993243 30.4296 2.05991 30.7433C4.05991 31.285 4.72658 32.5966 3.52658 33.7371C0.193251 36.9021 -0.873436 40.3521 0.859898 41.9774C2.8599 43.7167 3.5266 44.515 4.45993 46.8816C4.99327 47.9081 5.79327 48.8775 6.19327 49.0201C6.7266 49.1912 7.25992 50.1036 7.52658 51.073C7.79325 52.4987 7.12661 53.2115 4.19327 54.5801C2.3266 55.521 0.993284 56.5475 1.39328 56.8612C1.79328 57.1748 1.65995 57.4884 1.12662 57.5455C-0.206712 57.7165 0.859906 65.0729 2.32657 66.1279C2.99324 66.6126 3.92657 67.7816 4.32657 68.751C4.99324 70.0912 6.05993 70.7184 8.7266 71.3172C11.6599 72.0015 12.0599 72.3437 11.9266 73.9689C11.7933 74.9954 12.3266 76.0219 12.9933 76.25C13.7933 76.5351 13.2599 76.8772 11.1266 77.3905C7.12656 78.3029 3.79327 80.6695 4.45993 81.9526C4.85993 82.4943 5.25992 83.4637 5.52658 84.091C5.79325 84.6898 6.59325 85.2601 7.52658 85.3171C8.32658 85.3741 8.99326 85.6022 8.99326 85.8303C8.99326 86.0584 9.92659 86.315 10.9933 86.4291C12.1933 86.5146 13.9266 86.9423 14.9933 87.37C18.0599 88.6531 21.3851 88.9097 24.4599 88.9097C24.4617 86.9496 24.4609 4.96836 24.4601 0.805469Z",
                    fill: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[stripBgColor]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                style: {
                    color: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[stripTextColor],
                    background: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[stripBgColor]
                },
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                width: "25",
                height: "89",
                viewBox: "0 0 25 89",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: (_strip_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["box__scrap-right"]),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M0.000796026 88.5568C7.2008 89.0416 10.2677 89.0138 12.6677 88.5576C15.8677 87.9303 18.401 85.7063 17.3343 84.3947C16.9343 83.853 16.401 81.7145 16.2677 79.6901C16.1343 76.1545 16.001 75.9264 12.5343 74.8429C8.66766 73.6453 7.86767 72.4763 10.2677 71.5354C11.0677 71.2218 11.7343 70.0242 11.7343 68.8837C11.7343 66.9448 12.1343 66.6882 16.2677 65.5762C18.801 64.8919 20.801 64.1505 20.9344 63.8939C20.9344 63.6373 21.3344 63.1811 21.601 62.8675C22.9344 61.5844 23.4677 58.9327 22.401 58.619C20.401 58.0773 19.7344 56.7657 20.9344 55.6252C24.2677 52.4602 25.3344 49.0102 23.601 47.3849C21.601 45.6456 20.9343 44.8473 20.001 42.4807C19.4677 41.4542 18.6677 40.4848 18.2677 40.3422C17.7343 40.1711 17.201 39.2587 16.9344 38.2893C16.6677 36.8636 17.3343 36.1508 20.2677 34.7822C22.1343 33.8413 23.4677 32.8148 23.0677 32.5012C22.6677 32.1875 22.801 31.8739 23.3343 31.8168C24.6676 31.6458 23.601 24.2894 22.1344 23.2345C21.4677 22.7497 20.5344 21.5807 20.1344 20.6113C19.4677 19.2712 18.401 18.6439 15.7343 18.0451C12.801 17.3608 12.401 17.0186 12.5343 15.3934C12.6677 14.3669 12.1343 13.3405 11.4677 13.1124C10.6677 12.8272 11.201 12.4851 13.3344 11.9718C17.3344 11.0594 20.6677 8.69284 20.001 7.40975C19.601 6.86801 19.201 5.89857 18.9344 5.27129C18.6677 4.67251 17.8677 4.10225 16.9344 4.04523C16.1344 3.9882 15.4677 3.76009 15.4677 3.53199C15.4677 3.30389 14.5343 3.04727 13.4677 2.93322C12.2677 2.84768 10.5343 2.41999 9.46768 1.99229C6.40101 0.709211 3.07584 0.452591 0.00100336 0.452591C-0.000787697 2.41273 1.27894e-06 84.3939 0.000796026 88.5568Z",
                    fill: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[stripBgColor]
                })
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__.Z = (StripH2);


/***/ }),

/***/ 3245:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _strip_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3941);
/* harmony import */ var _strip_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strip_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9891);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const StripH4 = (param)=>{
    let { scale, stripBgColor, stripTextColor, title, marginBottom } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: (_strip_module_scss__WEBPACK_IMPORTED_MODULE_2___default().box),
        style: {
            marginBottom: marginBottom
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                width: "400",
                height: "151",
                viewBox: "0 0 400 151",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                    scale: scale
                },
                className: (_strip_module_scss__WEBPACK_IMPORTED_MODULE_2___default().box__mainScrap),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M123.942 0.953491C121.015 1.23906 117.659 1.8102 116.446 2.23856C115.303 2.66692 112.948 3.16667 111.305 3.30945C109.663 3.45224 107.807 3.952 107.236 4.45174C105.88 5.59402 97.6694 7.45024 97.1697 6.66492C97.0269 6.37935 95.0279 6.45073 92.7433 6.73631C86.8891 7.52164 62.901 7.80721 58.6175 7.16467C56.6898 6.80771 51.1926 6.59352 46.4806 6.59352C41.7687 6.59352 36.7712 6.30795 35.2719 5.95099C26.4192 3.52362 14.8536 3.16666 10.8555 5.16566C9.21351 5.95099 6.78615 6.73631 5.35829 7.02188C3.2165 7.30745 2.64536 7.80721 2.35978 9.37785C2.14561 10.5915 2.50257 11.948 3.35929 13.1617C4.14461 14.304 4.92993 16.9455 5.14411 19.4443C5.42968 21.943 6.00083 23.8706 6.57197 24.0848C7.14311 24.299 7.50008 26.0838 7.57147 29.2965C7.85704 42.7898 8.14262 46.4308 8.92794 48.0014C9.49908 49.0723 9.71326 50.7858 9.3563 52.8562C9.07072 54.998 9.21351 56.3544 9.78465 57.1398C10.8555 58.3534 10.7842 62.1373 9.71326 63.4223C9.3563 63.9221 9.21351 64.4932 9.42769 64.7074C10.3558 65.6355 8.99933 68.5626 7.14311 69.4907C4.50157 70.99 2.43118 75.6305 3.00232 78.986C3.28789 81.0564 3.14511 82.0559 2.14561 83.1268C1.43168 83.9121 1.28889 84.4833 1.71725 84.4833C3.00232 84.4833 2.71675 89.1238 1.50307 90.1947C0.860532 90.6945 0.646353 91.4084 0.931925 91.694C1.2175 91.9795 1.28889 94.7639 1.00332 97.8338C0.717746 100.904 0.432174 104.83 0.289388 106.615C0.0752094 108.4 0.432174 110.899 1.00332 112.327C1.64585 113.683 2.00282 115.111 1.93143 115.468C1.86003 115.825 2.00282 116.61 2.28839 117.253C3.07371 119.109 3.35929 120.323 3.71625 123.678C3.93043 125.463 4.35879 127.248 4.78715 127.747C5.2869 128.319 5.14411 129.389 4.43018 131.103C3.2165 134.03 3.93043 135.172 6.92894 135.172C7.99983 135.172 8.99933 135.529 9.14212 135.886C9.2849 136.386 11.7837 136.457 16.8526 136.029C24.206 135.458 31.3453 135.886 36.1287 137.243C37.4851 137.6 40.912 138.599 43.6249 139.456C46.4093 140.241 49.9075 141.098 51.4782 141.241C52.9774 141.455 54.905 142.026 55.7617 142.597C58.0463 144.025 60.3309 144.596 66.4707 145.167C78.8217 146.31 86.6035 147.38 89.6734 148.38C91.4582 148.951 95.1707 149.522 97.8836 149.594C102.096 149.665 103.381 149.379 106.094 147.809C107.879 146.809 111.091 145.667 113.233 145.31C119.159 144.239 151 145.167 157.14 146.595C159.139 147.024 165.136 147.38 170.704 147.238C176.202 147.166 189.124 147.166 199.333 147.166C216.681 147.309 218.252 147.38 221.465 148.808C224.606 150.165 226.534 150.379 241.026 150.593C253.235 150.807 258.375 150.593 262.444 149.808C267.156 148.88 275.367 148.523 291.002 148.666C293.572 148.737 298.783 148.094 302.567 147.309C306.351 146.524 311.848 145.881 314.775 145.881C321.486 145.881 331.053 144.096 334.837 142.169C337.693 140.67 338.121 140.67 349.187 141.455C364.251 142.597 374.603 141.455 383.241 137.671C390.809 134.387 393.308 132.388 394.379 128.818C395.592 124.82 395.521 115.539 394.236 111.327C393.379 108.614 393.308 106.615 393.807 102.76C394.379 98.0479 394.236 93.5502 393.379 89.695C393.236 88.8382 392.308 87.339 391.38 86.4823C390.452 85.5542 389.524 84.0549 389.31 83.0554C388.81 80.985 391.023 74.631 394.95 66.8492C397.163 62.5656 397.52 61.2805 397.234 58.4962C396.949 56.4258 397.163 54.7838 397.805 53.9271C398.662 52.642 399.59 38.7918 398.805 38.7918C398.591 38.7918 398.377 38.2206 398.305 37.5067C398.162 36.0788 397.449 32.0808 396.949 29.6535C396.735 28.5112 396.163 28.0828 394.664 28.0828C391.309 28.0828 389.524 27.2975 389.524 25.7982C389.524 25.0843 388.739 23.2995 387.739 21.8716C386.454 19.8726 386.168 18.9445 386.74 17.945C387.097 17.2311 387.81 16.6599 388.31 16.6599C389.881 16.6599 387.168 15.3035 383.099 14.0898C378.172 12.5905 369.534 12.305 369.534 13.6614C369.534 14.2326 369.177 14.3754 368.677 14.0184C367.749 13.4473 358.825 13.0903 339.906 12.8047C329.911 12.6619 323.985 11.8052 320.987 10.2346C320.273 9.87759 318.345 9.44925 316.632 9.23506C314.918 9.09227 311.563 8.23557 309.278 7.45024C306.922 6.59352 304.423 6.09377 303.71 6.37935C302.996 6.59352 302.424 6.45073 302.424 6.09377C302.424 5.16566 297.356 5.16566 296.213 6.02238C295.714 6.52213 295.214 6.45073 294.928 6.02238C294.643 5.52263 293.857 5.66542 292.572 6.52213C289.645 8.44974 276.58 9.52063 272.439 8.23557C270.655 7.66441 268.941 6.95049 268.513 6.66492C268.156 6.37935 265.3 5.95099 262.302 5.66542C259.232 5.37984 255.519 4.73732 254.091 4.23756C252.592 3.73781 250.093 3.45224 248.451 3.66641C246.452 3.8092 245.167 3.59503 244.453 2.80971C243.525 1.95299 242.526 1.88159 238.813 2.38135C236.315 2.73831 227.962 3.23807 220.323 3.45224C212.683 3.73781 204.687 4.02339 202.546 4.16617C200.475 4.30896 197.905 4.09477 196.834 3.8092C193.407 2.66692 187.268 2.30995 166.064 2.02438C147.359 1.8102 140.862 1.52463 131.795 0.667908C130.439 0.525131 126.869 0.667908 123.942 0.953491Z",
                    fill: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[stripBgColor]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                width: "25",
                height: "89",
                viewBox: "0 0 25 89",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: (_strip_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["box__scrap-left"]),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M24.4601 0.805469C17.2601 0.320749 14.1932 0.348468 11.7932 0.804676C8.59325 1.43196 6.05995 3.65597 7.12662 4.96757C7.52662 5.50931 8.05994 7.64779 8.19327 9.67221C8.3266 13.2078 8.45994 13.4359 11.9266 14.5194C15.7933 15.717 16.5933 16.886 14.1933 17.8269C13.3933 18.1406 12.7266 19.3381 12.7266 20.4786C12.7266 22.4175 12.3266 22.6741 8.19327 23.7861C5.65994 24.4704 3.65992 25.2118 3.52658 25.4684C3.52658 25.725 3.12656 26.1812 2.8599 26.4949C1.52656 27.7779 0.993243 30.4296 2.05991 30.7433C4.05991 31.285 4.72658 32.5966 3.52658 33.7371C0.193251 36.9021 -0.873436 40.3521 0.859898 41.9774C2.8599 43.7167 3.5266 44.515 4.45993 46.8816C4.99327 47.9081 5.79327 48.8775 6.19327 49.0201C6.7266 49.1912 7.25992 50.1036 7.52658 51.073C7.79325 52.4987 7.12661 53.2115 4.19327 54.5801C2.3266 55.521 0.993284 56.5475 1.39328 56.8612C1.79328 57.1748 1.65995 57.4884 1.12662 57.5455C-0.206712 57.7165 0.859906 65.0729 2.32657 66.1279C2.99324 66.6126 3.92657 67.7816 4.32657 68.751C4.99324 70.0912 6.05993 70.7184 8.7266 71.3172C11.6599 72.0015 12.0599 72.3437 11.9266 73.9689C11.7933 74.9954 12.3266 76.0219 12.9933 76.25C13.7933 76.5351 13.2599 76.8772 11.1266 77.3905C7.12656 78.3029 3.79327 80.6695 4.45993 81.9526C4.85993 82.4943 5.25992 83.4637 5.52658 84.091C5.79325 84.6898 6.59325 85.2601 7.52658 85.3171C8.32658 85.3741 8.99326 85.6022 8.99326 85.8303C8.99326 86.0584 9.92659 86.315 10.9933 86.4291C12.1933 86.5146 13.9266 86.9423 14.9933 87.37C18.0599 88.6531 21.3851 88.9097 24.4599 88.9097C24.4617 86.9496 24.4609 4.96836 24.4601 0.805469Z",
                    fill: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[stripBgColor]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                style: {
                    color: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[stripTextColor],
                    background: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[stripBgColor]
                },
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                width: "25",
                height: "89",
                viewBox: "0 0 25 89",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: (_strip_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["box__scrap-right"]),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M0.000796026 88.5568C7.2008 89.0416 10.2677 89.0138 12.6677 88.5576C15.8677 87.9303 18.401 85.7063 17.3343 84.3947C16.9343 83.853 16.401 81.7145 16.2677 79.6901C16.1343 76.1545 16.001 75.9264 12.5343 74.8429C8.66766 73.6453 7.86767 72.4763 10.2677 71.5354C11.0677 71.2218 11.7343 70.0242 11.7343 68.8837C11.7343 66.9448 12.1343 66.6882 16.2677 65.5762C18.801 64.8919 20.801 64.1505 20.9344 63.8939C20.9344 63.6373 21.3344 63.1811 21.601 62.8675C22.9344 61.5844 23.4677 58.9327 22.401 58.619C20.401 58.0773 19.7344 56.7657 20.9344 55.6252C24.2677 52.4602 25.3344 49.0102 23.601 47.3849C21.601 45.6456 20.9343 44.8473 20.001 42.4807C19.4677 41.4542 18.6677 40.4848 18.2677 40.3422C17.7343 40.1711 17.201 39.2587 16.9344 38.2893C16.6677 36.8636 17.3343 36.1508 20.2677 34.7822C22.1343 33.8413 23.4677 32.8148 23.0677 32.5012C22.6677 32.1875 22.801 31.8739 23.3343 31.8168C24.6676 31.6458 23.601 24.2894 22.1344 23.2345C21.4677 22.7497 20.5344 21.5807 20.1344 20.6113C19.4677 19.2712 18.401 18.6439 15.7343 18.0451C12.801 17.3608 12.401 17.0186 12.5343 15.3934C12.6677 14.3669 12.1343 13.3405 11.4677 13.1124C10.6677 12.8272 11.201 12.4851 13.3344 11.9718C17.3344 11.0594 20.6677 8.69284 20.001 7.40975C19.601 6.86801 19.201 5.89857 18.9344 5.27129C18.6677 4.67251 17.8677 4.10225 16.9344 4.04523C16.1344 3.9882 15.4677 3.76009 15.4677 3.53199C15.4677 3.30389 14.5343 3.04727 13.4677 2.93322C12.2677 2.84768 10.5343 2.41999 9.46768 1.99229C6.40101 0.709211 3.07584 0.452591 0.00100336 0.452591C-0.000787697 2.41273 1.27894e-06 84.3939 0.000796026 88.5568Z",
                    fill: _utils_UI_colors__WEBPACK_IMPORTED_MODULE_3__/* .COLORS */ .D[stripBgColor]
                })
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__.Z = (StripH4);


/***/ }),

/***/ 6648:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport default from dynamic */ _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0___default.a; }
/* harmony export */ });
/* harmony import */ var _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5601);
/* harmony import */ var _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0__);



//# sourceMappingURL=image.js.map

/***/ }),

/***/ 7138:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport default from dynamic */ _client_link__WEBPACK_IMPORTED_MODULE_0___default.a; }
/* harmony export */ });
/* harmony import */ var _client_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(231);
/* harmony import */ var _client_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_link__WEBPACK_IMPORTED_MODULE_0__);



//# sourceMappingURL=link.js.map

/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(8157);
const addLocale = function(path) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if (false) {}
    return path;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 5944:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getDomainLocale", ({
    enumerable: true,
    get: function() {
        return getDomainLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(8157);
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 8173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "Image", ({
    enumerable: true,
    get: function() {
        return Image;
    }
}));
const _interop_require_default = __webpack_require__(9920);
const _interop_require_wildcard = __webpack_require__(1452);
const _jsxruntime = __webpack_require__(7437);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(2265));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__webpack_require__(4887));
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8321));
const _getimgprops = __webpack_require__(497);
const _imageconfig = __webpack_require__(7103);
const _imageconfigcontextsharedruntime = __webpack_require__(3938);
const _warnonce = __webpack_require__(2301);
const _routercontextsharedruntime = __webpack_require__(291);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(1241));
// This is replaced by webpack define plugin
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false};
if (typeof window === "undefined") {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput) {
    const src = img == null ? void 0 : img.src;
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== "empty") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
function getDynamicProps(fetchPriority) {
    if (Boolean(_react.use)) {
        // In React 19.0.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: (0, _react.useCallback)((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
            }
        }, [
            src,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            sizesInput,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== "empty") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload(param) {
    let { isAppRouter, imgAttributes } = param;
    const opts = {
        as: "image",
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.default.preload) {
        // See https://github.com/facebook/react/pull/26940
        _reactdom.default.preload(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_head.default, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "preload",
            // Note how we omit the `href` attribute, as it would only be relevant
            // for browsers that do not support `imagesrcset`, and in those cases
            // it would cause the incorrect image to be preloaded.
            //
            // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
            href: imgAttributes.srcSet ? undefined : imgAttributes.src,
            ...opts
        }, "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
    });
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(ImageElement, {
                ...imgAttributes,
                unoptimized: imgMeta.unoptimized,
                placeholder: imgMeta.placeholder,
                fill: imgMeta.fill,
                onLoadRef: onLoadRef,
                onLoadingCompleteRef: onLoadingCompleteRef,
                setBlurComplete: setBlurComplete,
                setShowAltText: setShowAltText,
                sizesInput: props.sizes,
                ref: forwardedRef
            }),
            imgMeta.priority ? /*#__PURE__*/ (0, _jsxruntime.jsx)(ImagePreload, {
                isAppRouter: isAppRouter,
                imgAttributes: imgAttributes
            }) : null
        ]
    });
});
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(9920);
const _jsxruntime = __webpack_require__(7437);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2265));
const _resolvehref = __webpack_require__(8016);
const _islocalurl = __webpack_require__(8029);
const _formaturl = __webpack_require__(1142);
const _utils = __webpack_require__(3461);
const _addlocale = __webpack_require__(844);
const _routercontextsharedruntime = __webpack_require__(291);
const _approutercontextsharedruntime = __webpack_require__(4467);
const _useintersection = __webpack_require__(3106);
const _getdomainlocale = __webpack_require__(5944);
const _addbasepath = __webpack_require__(4897);
const _routerreducertypes = __webpack_require__(1507);
const prefetched = new Set();
function prefetch(router, href, as, options, appOptions, isAppRouter) {
    if (typeof window === "undefined") {
        return;
    }
    // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    if (!isAppRouter && !(0, _islocalurl.isLocalURL)(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    const doPrefetch = async ()=>{
        if (isAppRouter) {
            // note that `appRouter.prefetch()` is currently sync,
            // so we have to wrap this call in an async function to be able to catch() errors below.
            return router.prefetch(href, appOptions);
        } else {
            return router.prefetch(href, as, options);
        }
    };
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    doPrefetch().catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !isAppRouter && !(0, _islocalurl.isLocalURL)(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        const routerScroll = scroll != null ? scroll : true;
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll: routerScroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                scroll: routerScroll
            });
        }
    };
    if (isAppRouter) {
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
/**
 * A React component that extends the HTML `<a>` element to provide [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation between routes.
 *
 * It is the primary way to navigate between routes in Next.js.
 *
 * Read more: [Next.js docs: `<Link>`](https://nextjs.org/docs/app/api-reference/components/link)
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    let children;
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, locale, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const pagesRouter = _react.default.useContext(_routercontextsharedruntime.RouterContext);
    const appRouter = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const prefetchEnabled = prefetchProp !== false;
    /**
     * The possible states for prefetch are:
     * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
     * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
     * - false: we will not prefetch if in the viewport at all
     */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    if (false) {}
    if (false) {}
    const { href, as } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolvehref.resolveHref)(pagesRouter, asProp) : resolvedAs || resolvedHref
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) {}
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href, as, {
            locale
        }, {
            kind: appPrefetchKind
        }, isAppRouter);
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router,
        isAppRouter,
        appPrefetchKind
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ((!prefetchEnabled || "production" === "development") && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        },
        onTouchStart:  false ? 0 : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
        ...restProps,
        ...childProps,
        children: children
    });
});
const _default = Link;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 9189:
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    },
    requestIdleCallback: function() {
        return requestIdleCallback;
    }
});
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 8016:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "resolveHref", ({
    enumerable: true,
    get: function() {
        return resolveHref;
    }
}));
const _querystring = __webpack_require__(8323);
const _formaturl = __webpack_require__(1142);
const _omit = __webpack_require__(5519);
const _utils = __webpack_require__(3461);
const _normalizetrailingslash = __webpack_require__(8157);
const _islocalurl = __webpack_require__(8029);
const _utils1 = __webpack_require__(9195);
const _interpolateas = __webpack_require__(20);
function resolveHref(router, href, resolveAs) {
    // we use a dummy base url for relative urls
    let base;
    let urlAsString = typeof href === "string" ? href : (0, _formaturl.formatWithValidation)(href);
    // repeated slashes and backslashes in the URL are considered
    // invalid and will never match a Next.js page/file
    const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
    const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
    const urlParts = urlAsStringNoProto.split("?", 1);
    if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + urlAsString + "' passed to next/router in page: '" + router.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
    }
    // Return because it cannot be routed by the Next.js router
    if (!(0, _islocalurl.isLocalURL)(urlAsString)) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
    try {
        base = new URL(urlAsString.startsWith("#") ? router.asPath : router.pathname, "http://n");
    } catch (_) {
        // fallback to / for invalid asPath values e.g. //
        base = new URL("/", "http://n");
    }
    try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);
        let interpolatedAs = "";
        if ((0, _utils1.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
            const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
            const { result, params } = (0, _interpolateas.interpolateAs)(finalUrl.pathname, finalUrl.pathname, query);
            if (result) {
                interpolatedAs = (0, _formaturl.formatWithValidation)({
                    pathname: result,
                    hash: finalUrl.hash,
                    query: (0, _omit.omit)(query, params)
                });
            }
        }
        // if the origin didn't change, it means we received a relative href
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
            resolvedHref,
            interpolatedAs || resolvedHref
        ] : resolvedHref;
    } catch (_) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=resolve-href.js.map


/***/ }),

/***/ 3106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useIntersection", ({
    enumerable: true,
    get: function() {
        return useIntersection;
    }
}));
const _react = __webpack_require__(2265);
const _requestidlecallback = __webpack_require__(9189);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id, observer, elements } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection(param) {
    let { rootRef, rootMargin, disabled } = param;
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react.useState)(false);
    const elementRef = (0, _react.useRef)(null);
    const setElement = (0, _react.useCallback)((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react.useEffect)(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestidlecallback.requestIdleCallback)(()=>setVisible(true));
                return ()=>(0, _requestidlecallback.cancelIdleCallback)(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react.useCallback)(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 2901:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "AmpStateContext", ({
    enumerable: true,
    get: function() {
        return AmpStateContext;
    }
}));
const _interop_require_default = __webpack_require__(9920);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2265));
const AmpStateContext = _react.default.createContext({});
if (false) {} //# sourceMappingURL=amp-context.shared-runtime.js.map


/***/ }),

/***/ 687:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isInAmpMode", ({
    enumerable: true,
    get: function() {
        return isInAmpMode;
    }
}));
function isInAmpMode(param) {
    let { ampFirst = false, hybrid = false, hasQuery = false } = param === void 0 ? {} : param;
    return ampFirst || hybrid && hasQuery;
} //# sourceMappingURL=amp-mode.js.map


/***/ }),

/***/ 1943:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
// regexp is based on https://github.com/sindresorhus/escape-string-regexp

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "escapeStringRegexp", ({
    enumerable: true,
    get: function() {
        return escapeStringRegexp;
    }
}));
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, "\\$&");
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map


/***/ }),

/***/ 497:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getImgProps", ({
    enumerable: true,
    get: function() {
        return getImgProps;
    }
}));
const _warnonce = __webpack_require__(2301);
const _imageblursvg = __webpack_require__(1564);
const _imageconfig = __webpack_require__(7103);
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === "undefined") {
        return x;
    }
    if (typeof x === "number") {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths(param, width, sizes) {
    let { deviceSizes, allSizes } = param;
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs(param) {
    let { config, src, unoptimized, width, quality, sizes, loader } = param;
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>loader({
                config,
                src,
                quality,
                width: w
            }) + " " + (kind === "w" ? w : i + 1) + kind).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps(param, _state) {
    let { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest } = param;
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ("allSizes" in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes
        };
    }
    if (typeof defaultLoader === "undefined") {
        throw new Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error('Image with src "' + src + '" is missing "loader" prop.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData));
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData));
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    if (priority) {
        fetchPriority = "high";
    }
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const backgroundImage = !blurComplete && placeholder !== "empty" ? placeholder === "blur" ? 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || "",
        objectFit: imgStyle.objectFit
    }) + '")' : 'url("' + placeholder + '")' // assume `data:image/`
     : null;
    let placeholderStyle = backgroundImage ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    if (false) {}
    const props = {
        ...rest,
        loading: isLazy ? "lazy" : loading,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding: "async",
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
    };
    const meta = {
        unoptimized,
        priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map


/***/ }),

/***/ 8321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    defaultHead: function() {
        return defaultHead;
    }
});
const _interop_require_default = __webpack_require__(9920);
const _interop_require_wildcard = __webpack_require__(1452);
const _jsxruntime = __webpack_require__(7437);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(2265));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5960));
const _ampcontextsharedruntime = __webpack_require__(2901);
const _headmanagercontextsharedruntime = __webpack_require__(6590);
const _ampmode = __webpack_require__(687);
const _warnonce = __webpack_require__(2301);
function defaultHead(inAmpMode) {
    if (inAmpMode === void 0) inAmpMode = false;
    const head = [
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            charSet: "utf-8"
        })
    ];
    if (!inAmpMode) {
        head.push(/*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }));
    }
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === "string" || typeof child === "number") {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    "name",
    "httpEquiv",
    "charSet",
    "itemProp"
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf("$") + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case "title":
            case "base":
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case "meta":
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === "charSet") {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== "name" || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements, props) {
    const { inAmpMode } = props;
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ( true && !inAmpMode) {
            if (c.type === "link" && c.props["href"] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
            [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/"
            ].some((url)=>c.props["href"].startsWith(url))) {
                const newProps = {
                    ...c.props || {}
                };
                newProps["data-href"] = newProps["href"];
                newProps["href"] = undefined;
                // Add this attribute to make it easy to identify optimized tags
                newProps["data-optimized-fonts"] = true;
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            }
        }
        if (false) {}
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head(param) {
    let { children } = param;
    const ampState = (0, _react.useContext)(_ampcontextsharedruntime.AmpStateContext);
    const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        inAmpMode: (0, _ampmode.isInAmpMode)(ampState),
        children: children
    });
}
const _default = Head;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map


/***/ }),

/***/ 1564:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getImageBlurSvg", ({
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
}));
function getImageBlurSvg(param) {
    let { widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit } = param;
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? "viewBox='0 0 " + svgWidth + " " + svgHeight + "'" : "";
    const preserveAspectRatio = viewBox ? "none" : objectFit === "contain" ? "xMidYMid" : objectFit === "cover" ? "xMidYMid slice" : "none";
    return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + viewBox + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + preserveAspectRatio + "' style='filter: url(%23b);' href='" + blurDataURL + "'/%3E%3C/svg%3E";
} //# sourceMappingURL=image-blur-svg.js.map


/***/ }),

/***/ 3938:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ImageConfigContext", ({
    enumerable: true,
    get: function() {
        return ImageConfigContext;
    }
}));
const _interop_require_default = __webpack_require__(9920);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2265));
const _imageconfig = __webpack_require__(7103);
const ImageConfigContext = _react.default.createContext(_imageconfig.imageConfigDefault);
if (false) {} //# sourceMappingURL=image-config-context.shared-runtime.js.map


/***/ }),

/***/ 7103:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    "default",
    "imgix",
    "cloudinary",
    "akamai",
    "custom"
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: "/_next/image",
    loader: "default",
    loaderFile: "",
    domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: [
        "image/webp"
    ],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
    contentDispositionType: "inline",
    remotePatterns: [],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map


/***/ }),

/***/ 5601:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __webpack_require__(9920);
const _getimgprops = __webpack_require__(497);
const _imagecomponent = __webpack_require__(8173);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(1241));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false}
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 1241:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
function defaultLoader(param) {
    let { config, src, width, quality } = param;
    if (false) {}
    return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + (quality || 75) + ( false ? 0 : "");
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map


/***/ }),

/***/ 291:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "RouterContext", ({
    enumerable: true,
    get: function() {
        return RouterContext;
    }
}));
const _interop_require_default = __webpack_require__(9920);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2265));
const RouterContext = _react.default.createContext(null);
if (false) {} //# sourceMappingURL=router-context.shared-runtime.js.map


/***/ }),

/***/ 1142:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __webpack_require__(1452);
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8323));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || "";
    let pathname = urlObj.pathname || "";
    let hash = urlObj.hash || "";
    let query = urlObj.query || "";
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@" : "";
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(":") ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ":" + urlObj.port;
        }
    }
    if (query && typeof query === "object") {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || "";
    if (protocol && !protocol.endsWith(":")) protocol += ":";
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = "//" + (host || "");
        if (pathname && pathname[0] !== "/") pathname = "/" + pathname;
    } else if (!host) {
        host = "";
    }
    if (hash && hash[0] !== "#") hash = "#" + hash;
    if (search && search[0] !== "?") search = "?" + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace("#", "%23");
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    "auth",
    "hash",
    "host",
    "hostname",
    "href",
    "path",
    "pathname",
    "port",
    "protocol",
    "query",
    "search",
    "slashes"
];
function formatWithValidation(url) {
    if (false) {}
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map


/***/ }),

/***/ 9195:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
    },
    isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
    }
});
const _sortedroutes = __webpack_require__(9089);
const _isdynamic = __webpack_require__(8083); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 20:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "interpolateAs", ({
    enumerable: true,
    get: function() {
        return interpolateAs;
    }
}));
const _routematcher = __webpack_require__(1533);
const _routeregex = __webpack_require__(3169);
function interpolateAs(route, asPathname, query) {
    let interpolatedRoute = "";
    const dynamicRegex = (0, _routeregex.getRouteRegex)(route);
    const dynamicGroups = dynamicRegex.groups;
    const dynamicMatches = (asPathname !== route ? (0, _routematcher.getRouteMatcher)(dynamicRegex)(asPathname) : "") || // Fall back to reading the values from the href
    // TODO: should this take priority; also need to change in the router.
    query;
    interpolatedRoute = route;
    const params = Object.keys(dynamicGroups);
    if (!params.every((param)=>{
        let value = dynamicMatches[param] || "";
        const { repeat, optional } = dynamicGroups[param];
        // support single-level catch-all
        // TODO: more robust handling for user-error (passing `/`)
        let replaced = "[" + (repeat ? "..." : "") + param + "]";
        if (optional) {
            replaced = (!value ? "/" : "") + "[" + replaced + "]";
        }
        if (repeat && !Array.isArray(value)) value = [
            value
        ];
        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(// path delimiter escaped since they are being inserted
        // into the URL and we expect URL encoded segments
        // when parsing dynamic route params
        (segment)=>encodeURIComponent(segment)).join("/") : encodeURIComponent(value)) || "/");
    })) {
        interpolatedRoute = "" // did not satisfy all requirements
        ;
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
    }
    return {
        params,
        result: interpolatedRoute
    };
} //# sourceMappingURL=interpolate-as.js.map


/***/ }),

/***/ 8083:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isDynamicRoute", ({
    enumerable: true,
    get: function() {
        return isDynamicRoute;
    }
}));
const _interceptionroutes = __webpack_require__(2269);
// Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
        route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
    }
    return TEST_ROUTE.test(route);
} //# sourceMappingURL=is-dynamic.js.map


/***/ }),

/***/ 8029:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isLocalURL", ({
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
}));
const _utils = __webpack_require__(3461);
const _hasbasepath = __webpack_require__(9404);
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map


/***/ }),

/***/ 5519:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "omit", ({
    enumerable: true,
    get: function() {
        return omit;
    }
}));
function omit(object, keys) {
    const omitted = {};
    Object.keys(object).forEach((key)=>{
        if (!keys.includes(key)) {
            omitted[key] = object[key];
        }
    });
    return omitted;
} //# sourceMappingURL=omit.js.map


/***/ }),

/***/ 8323:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    searchParams.forEach((value, key)=>{
        if (typeof query[key] === "undefined") {
            query[key] = value;
        } else if (Array.isArray(query[key])) {
            query[key].push(value);
        } else {
            query[key] = [
                query[key],
                value
            ];
        }
    });
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
    } else {
        return "";
    }
}
function urlQueryToSearchParams(urlQuery) {
    const result = new URLSearchParams();
    Object.entries(urlQuery).forEach((param)=>{
        let [key, value] = param;
        if (Array.isArray(value)) {
            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
        } else {
            result.set(key, stringifyUrlQueryParam(value));
        }
    });
    return result;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    searchParamsList.forEach((searchParams)=>{
        Array.from(searchParams.keys()).forEach((key)=>target.delete(key));
        searchParams.forEach((value, key)=>target.append(key, value));
    });
    return target;
} //# sourceMappingURL=querystring.js.map


/***/ }),

/***/ 1533:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getRouteMatcher", ({
    enumerable: true,
    get: function() {
        return getRouteMatcher;
    }
}));
const _utils = __webpack_require__(3461);
function getRouteMatcher(param) {
    let { re, groups } = param;
    return (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) {
            return false;
        }
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch (_) {
                throw new _utils.DecodeError("failed to decode param");
            }
        };
        const params = {};
        Object.keys(groups).forEach((slugName)=>{
            const g = groups[slugName];
            const m = routeMatch[g.pos];
            if (m !== undefined) {
                params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry)=>decode(entry)) : g.repeat ? [
                    decode(m)
                ] : decode(m);
            }
        });
        return params;
    };
} //# sourceMappingURL=route-matcher.js.map


/***/ }),

/***/ 3169:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getNamedMiddlewareRegex: function() {
        return getNamedMiddlewareRegex;
    },
    getNamedRouteRegex: function() {
        return getNamedRouteRegex;
    },
    getRouteRegex: function() {
        return getRouteRegex;
    }
});
const _interceptionroutes = __webpack_require__(2269);
const _escaperegexp = __webpack_require__(1943);
const _removetrailingslash = __webpack_require__(7741);
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
/**
 * Parses a given parameter from a route to a data structure that can be used
 * to generate the parametrized route. Examples:
 *   - `[...slug]` -> `{ key: 'slug', repeat: true, optional: true }`
 *   - `...slug` -> `{ key: 'slug', repeat: true, optional: false }`
 *   - `[foo]` -> `{ key: 'foo', repeat: false, optional: true }`
 *   - `bar` -> `{ key: 'bar', repeat: false, optional: false }`
 */ function parseParameter(param) {
    const optional = param.startsWith("[") && param.endsWith("]");
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith("...");
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
}
function getParametrizedRoute(route) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const groups = {};
    let groupIndex = 1;
    return {
        parameterizedRoute: segments.map((segment)=>{
            const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (markerMatch && paramMatches) {
                const { key, optional, repeat } = parseParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return "/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)";
            } else if (paramMatches) {
                const { key, repeat, optional } = parseParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        groups
    };
}
function getRouteRegex(normalizedRoute) {
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute);
    return {
        re: new RegExp("^" + parameterizedRoute + "(?:/)?$"),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let i = 0;
    return ()=>{
        let routeKey = "";
        let j = ++i;
        while(j > 0){
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
        }
        return routeKey;
    };
}
function getSafeKeyFromSegment(param) {
    let { interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix } = param;
    const { key, optional, repeat } = parseParameter(segment);
    // replace any non-word characters since they can break
    // the named regex
    let cleanedKey = key.replace(/\W/g, "");
    if (keyPrefix) {
        cleanedKey = "" + keyPrefix + cleanedKey;
    }
    let invalidKey = false;
    // check if the key is still invalid and fallback to using a known
    // safe key
    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
    }
    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
    }
    if (invalidKey) {
        cleanedKey = getSafeRouteKey();
    }
    if (keyPrefix) {
        routeKeys[cleanedKey] = "" + keyPrefix + key;
    } else {
        routeKeys[cleanedKey] = key;
    }
    // if the segment has an interception marker, make sure that's part of the regex pattern
    // this is to ensure that the route with the interception marker doesn't incorrectly match
    // the non-intercepted route (ie /app/(.)[username] should not match /app/[username])
    const interceptionPrefix = interceptionMarker ? (0, _escaperegexp.escapeStringRegexp)(interceptionMarker) : "";
    return repeat ? optional ? "(?:/" + interceptionPrefix + "(?<" + cleanedKey + ">.+?))?" : "/" + interceptionPrefix + "(?<" + cleanedKey + ">.+?)" : "/" + interceptionPrefix + "(?<" + cleanedKey + ">[^/]+?)";
}
function getNamedParametrizedRoute(route, prefixRouteKeys) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    return {
        namedParameterizedRoute: segments.map((segment)=>{
            const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (hasInterceptionMarker && paramMatches) {
                const [usedMarker] = segment.split(paramMatches[0]);
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    interceptionMarker: usedMarker,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? NEXT_INTERCEPTION_MARKER_PREFIX : undefined
                });
            } else if (paramMatches) {
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? NEXT_QUERY_PARAM_PREFIX : undefined
                });
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        routeKeys
    };
}
function getNamedRouteRegex(normalizedRoute, prefixRouteKey) {
    const result = getNamedParametrizedRoute(normalizedRoute, prefixRouteKey);
    return {
        ...getRouteRegex(normalizedRoute),
        namedRegex: "^" + result.namedParameterizedRoute + "(?:/)?$",
        routeKeys: result.routeKeys
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute);
    const { catchAll = true } = options;
    if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
            namedRegex: "^/" + catchAllRegex + "$"
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false);
    let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
    return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
    };
} //# sourceMappingURL=route-regex.js.map


/***/ }),

/***/ 9089:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSortedRoutes", ({
    enumerable: true,
    get: function() {
        return getSortedRoutes;
    }
}));
class UrlNode {
    insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
    }
    smoosh() {
        return this._smoosh();
    }
    _smoosh(prefix) {
        if (prefix === void 0) prefix = "/";
        const childrenPaths = [
            ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr)=>[
                ...prev,
                ...curr
            ], []);
        if (this.slugName !== null) {
            routes.push(...this.children.get("[]")._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
            const r = prefix === "/" ? "/" : prefix.slice(0, -1);
            if (this.optionalRestSlugName != null) {
                throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").');
            }
            routes.unshift(r);
        }
        if (this.restSlugName !== null) {
            routes.push(...this.children.get("[...]")._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
            routes.push(...this.children.get("[[...]]")._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
    }
    _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
            this.placeholder = false;
            return;
        }
        if (isCatchAll) {
            throw new Error("Catch-all must be the last part of the URL.");
        }
        // The next segment in the urlPaths list
        let nextSegment = urlPaths[0];
        // Check if the segment matches `[something]`
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
            // Strip `[` and `]`, leaving only `something`
            let segmentName = nextSegment.slice(1, -1);
            let isOptional = false;
            if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
                // Strip optional `[` and `]`, leaving only `something`
                segmentName = segmentName.slice(1, -1);
                isOptional = true;
            }
            if (segmentName.startsWith("...")) {
                // Strip `...`, leaving only `something`
                segmentName = segmentName.substring(3);
                isCatchAll = true;
            }
            if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
                throw new Error("Segment names may not start or end with extra brackets ('" + segmentName + "').");
            }
            if (segmentName.startsWith(".")) {
                throw new Error("Segment names may not start with erroneous periods ('" + segmentName + "').");
            }
            function handleSlug(previousSlug, nextSlug) {
                if (previousSlug !== null) {
                    // If the specific segment already has a slug but the slug is not `something`
                    // This prevents collisions like:
                    // pages/[post]/index.js
                    // pages/[id]/index.js
                    // Because currently multiple dynamic params on the same segment level are not supported
                    if (previousSlug !== nextSlug) {
                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
                        throw new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "').");
                    }
                }
                slugNames.forEach((slug)=>{
                    if (slug === nextSlug) {
                        throw new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path');
                    }
                    if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                        throw new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path');
                    }
                });
                slugNames.push(nextSlug);
            }
            if (isCatchAll) {
                if (isOptional) {
                    if (this.restSlugName != null) {
                        throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).');
                    }
                    handleSlug(this.optionalRestSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.optionalRestSlugName = segmentName;
                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
                    nextSegment = "[[...]]";
                } else {
                    if (this.optionalRestSlugName != null) {
                        throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").');
                    }
                    handleSlug(this.restSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.restSlugName = segmentName;
                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
                    nextSegment = "[...]";
                }
            } else {
                if (isOptional) {
                    throw new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").');
                }
                handleSlug(this.slugName, segmentName);
                // slugName is kept as it can only be one particular slugName
                this.slugName = segmentName;
                // nextSegment is overwritten to [] so that it can later be sorted specifically
                nextSegment = "[]";
            }
        }
        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
        if (!this.children.has(nextSegment)) {
            this.children.set(nextSegment, new UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
    }
    constructor(){
        this.placeholder = true;
        this.children = new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
    }
}
function getSortedRoutes(normalizedPages) {
    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
    // Only 1 dynamic segment per nesting level
    // So in the case that is test/integration/dynamic-routing it'll be this:
    // pages/[post]/comments.js
    // pages/blog/[post]/comment/[id].js
    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
    // So in this case `UrlNode` created here has `this.slugName === 'post'`
    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
    // Instead what has to be passed through is the upwards path's dynamic names
    const root = new UrlNode();
    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
    return root.smoosh();
} //# sourceMappingURL=sorted-routes.js.map


/***/ }),

/***/ 5960:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return SideEffect;
    }
}));
const _react = __webpack_require__(2265);
const isServer = typeof window === "undefined";
const useClientOnlyLayoutEffect = isServer ? ()=>{} : _react.useLayoutEffect;
const useClientOnlyEffect = isServer ? ()=>{} : _react.useEffect;
function SideEffect(props) {
    const { headManager, reduceComponentsToState } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements, props));
        }
    }
    if (isServer) {
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect(()=>{
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        return ()=>{
            var _headManager_mountedInstances;
            headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.delete(props.children);
        };
    });
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect(()=>{
        if (headManager) {
            headManager._pendingUpdate = emitChange;
        }
        return ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
        };
    });
    useClientOnlyEffect(()=>{
        if (headManager && headManager._pendingUpdate) {
            headManager._pendingUpdate();
            headManager._pendingUpdate = null;
        }
        return ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
        };
    });
    return null;
} //# sourceMappingURL=side-effect.js.map


/***/ }),

/***/ 3461:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    "CLS",
    "FCP",
    "FID",
    "INP",
    "LCP",
    "TTFB"
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ":" + port : "");
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split("?");
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? "?" + urlParts.slice(1).join("?") : "");
}
async function loadGetInitialProps(App, ctx) {
    if (false) { var _App_prototype; }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw new Error(message);
    }
    if (false) {}
    return props;
}
const SP = typeof performance !== "undefined";
const ST = SP && [
    "mark",
    "measure",
    "getEntriesByName"
].every((method)=>typeof performance[method] === "function");
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = "ENOENT";
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 9891:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: function() { return /* binding */ COLORS; }
/* harmony export */ });
const COLORS = {
    lightBlue: "#1058e2",
    mediumBlue: "#1048b6",
    darkBlue: "#053490",
    basicOrange: "#ff914c",
    basicBrown: "#764c24",
    basicGreen: "#25924f",
    white: "white",
    winterIce: "rgba(15, 72, 183, 0.27)"
};


/***/ }),

/***/ 9715:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"page_main__ux7yf"};

/***/ }),

/***/ 173:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"groupLvl":"groupLvl_groupLvl__jApve","groupLvl__button":"groupLvl_groupLvl__button__dkwdE","groupLvl__title":"groupLvl_groupLvl__title__oGlCv"};

/***/ }),

/***/ 3046:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"groups":"groups_groups__Q86FW","groups__row-box":"groups_groups__row-box__VNhHn"};

/***/ }),

/***/ 9916:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"lessonType":"lessonType_lessonType__K9wgz","lessonType__opacity":"lessonType_lessonType__opacity__eEd_4","lessonType__content":"lessonType_lessonType__content__Fdzp4"};

/***/ }),

/***/ 9955:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"about":"naukaPlywaniaAbout_about___a5oa","about__text-box":"naukaPlywaniaAbout_about__text-box__U39xM","about__image-box":"naukaPlywaniaAbout_about__image-box__09j5c"};

/***/ }),

/***/ 3926:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"poolInformations":"poolInformations_poolInformations__kzVOO","poolInformations__row-box":"poolInformations_poolInformations__row-box__jYBfc","poolInformations__row-box__list":"poolInformations_poolInformations__row-box__list__cjujv","poolInformations__row-box__list__item":"poolInformations_poolInformations__row-box__list__item__DGEJu","poolInformations__row-box__list__item__svg":"poolInformations_poolInformations__row-box__list__item__svg__W8Guh","poolInformations__row-box__list__item__text":"poolInformations_poolInformations__row-box__list__item__text__679VM","poolInformations__row-box__map":"poolInformations_poolInformations__row-box__map__bINdV"};

/***/ }),

/***/ 167:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"poolNecessaryItems":"poolNecessaryItems_poolNecessaryItems__iZ2Zk","poolNecessaryItems__row-box":"poolNecessaryItems_poolNecessaryItems__row-box__d0lU0","poolNecessaryItems__row-box__item":"poolNecessaryItems_poolNecessaryItems__row-box__item__AIBu3","poolNecessaryItems__row-box__item__svg":"poolNecessaryItems_poolNecessaryItems__row-box__item__svg__V_zwg","poolNecessaryItems__row-box__item__title":"poolNecessaryItems_poolNecessaryItems__row-box__item__title__nhgSs"};

/***/ }),

/***/ 7968:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"poolTutorial":"poolTutorial_poolTutorial__SxSaj","poolTutorial__row-box":"poolTutorial_poolTutorial__row-box__SGjFN","poolTutorial__row-box__circle":"poolTutorial_poolTutorial__row-box__circle__JX2fn","poolTutorial__row-box__arrow":"poolTutorial_poolTutorial__row-box__arrow__Qq9DB"};

/***/ }),

/***/ 1469:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"priceLessons":"priceLessons_priceLessons__SN0Bf","priceLessons__content-box":"priceLessons_priceLessons__content-box__39iNH","priceLessons__content-box__orange":"priceLessons_priceLessons__content-box__orange__eZarK"};

/***/ }),

/***/ 2622:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"priceList":"priceList_priceList__1sFhe"};

/***/ }),

/***/ 1908:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"videosSection_container__UKsJ_","container__image-box":"videosSection_container__image-box__Pe6mJ","container__image-box__sticker-box":"videosSection_container__image-box__sticker-box___ocUL","container__image-box__mobileSticker":"videosSection_container__image-box__mobileSticker__Qb7OL","container__image-box__oneSticker-box":"videosSection_container__image-box__oneSticker-box__OUd8U","container__image-box__opacity-cover":"videosSection_container__image-box__opacity-cover__81NiG"};

/***/ }),

/***/ 4921:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"naukaPlywaniaBasen":"naukaPlywaniaBasen_naukaPlywaniaBasen__iMi3i"};

/***/ }),

/***/ 4043:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"box":"aboutTextPoppins_box__qyYIl","box__title":"aboutTextPoppins_box__title__xYbDX"};

/***/ }),

/***/ 5307:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"text":"backgroundText_text__uAljd"};

/***/ }),

/***/ 3112:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"bubbles":"bubbles_bubbles__esr13","moveTop":"bubbles_moveTop__NMawH"};

/***/ }),

/***/ 1845:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"linkButton":"buttons_linkButton__AcaLA","signInButton":"buttons_signInButton__qHHAZ","navBtn":"buttons_navBtn__fpNSW","xBtn":"buttons_xBtn__Km9HW"};

/***/ }),

/***/ 9121:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"box":"stickerH1_box__TbocO","box__title":"stickerH1_box__title__GYubg","box__title-2":"stickerH1_box__title-2__e_Rez"};

/***/ }),

/***/ 5237:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"box":"stickerH2_box__10AHb","box__title":"stickerH2_box__title___CH9p"};

/***/ }),

/***/ 4896:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"box":"stickerH4_box__BWxdq","box__title":"stickerH4_box__title__DEI57"};

/***/ }),

/***/ 2603:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"box":"strip_box__MCnEK","box__mainScrap":"strip_box__mainScrap__wk_xR","box__scrap-left":"strip_box__scrap-left__er54n","box__scrap-right":"strip_box__scrap-right__PaTW9"};

/***/ }),

/***/ 3121:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"box":"strip_box__97k5A","box__mainScrap":"strip_box__mainScrap__OCcEg","box__scrap-left":"strip_box__scrap-left__OYiZn","box__scrap-right":"strip_box__scrap-right__hMS8q"};

/***/ }),

/***/ 3941:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"box":"strip_box__FL1OE","box__mainScrap":"strip_box__mainScrap__vGdVj","box__scrap-left":"strip_box__scrap-left__bM_WK","box__scrap-right":"strip_box__scrap-right__hnNgP"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [887,681,844,660,744], function() { return __webpack_exec__(3028); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);