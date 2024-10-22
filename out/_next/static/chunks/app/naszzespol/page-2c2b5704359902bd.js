(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[230],{

/***/ 7589:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9715, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2020));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 330));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2937));


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

/***/ 330:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ InstructorsList_InstructorsList; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./components/NaszZespol/InstructorsList/instructorsList.module.scss
var instructorsList_module = __webpack_require__(5154);
var instructorsList_module_default = /*#__PURE__*/__webpack_require__.n(instructorsList_module);
// EXTERNAL MODULE: ./components/NaszZespol/InstructorsList/InstructorBubble/instructorBubble.module.scss
var instructorBubble_module = __webpack_require__(2576);
var instructorBubble_module_default = /*#__PURE__*/__webpack_require__.n(instructorBubble_module);
// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(6648);
;// CONCATENATED MODULE: ./components/NaszZespol/InstructorsList/InstructorBubble/InstructorBubble.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const InstructorBubble = (param)=>{
    let { instructorName, img1, onClick } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        onClick: ()=>onClick(),
        className: (instructorBubble_module_default()).insctructorBubble,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (instructorBubble_module_default()).insctructorBubble__image,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                    src: "/assets/instructors/".concat(img1),
                    fill: true,
                    alt: "instructor"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: (instructorBubble_module_default()).insctructorBubble__title,
                children: instructorName
            })
        ]
    });
};
/* harmony default export */ var InstructorBubble_InstructorBubble = (InstructorBubble);

;// CONCATENATED MODULE: ./utils/Instruktorzy/InstruktorzyBasen.ts
const INSTRUKTORZY_BASEN = [
    {
        img: "wiktoria-fryczek.png",
        nameAndSurname: "Wiktoria Fryczek",
        about1: "Zaczęła pływać już w wieku 5 lat i od tamtej pory nie przestaje. Długie lata trening\xf3w zaowocowały nie tylko umiejętnościami w wodzie, ale także pasją do tego sportu. Jest studentką drugiego roku prawa, fascynuje ją rola prawa w kształtowaniu społeczeństwa i jego wpływ na nasze życie codzienne.",
        about2: "Zawsze uśmiechnięta, pełna energii i empatii."
    },
    {
        img: "wiktoria-fryczek.png",
        nameAndSurname: "Instruktor 2",
        about1: "Zaczęła pływać już w wieku 5 lat i od tamtej pory nie przestaje. Długie lata trening\xf3w zaowocowały nie tylko umiejętnościami w wodzie, ale także pasją do tego sportu. Jest studentką drugiego roku prawa, fascynuje ją rola prawa w kształtowaniu społeczeństwa i jego wpływ na nasze życie codzienne.",
        about2: "Zawsze uśmiechnięta, pełna energii i empatii."
    },
    {
        img: "wiktoria-fryczek.png",
        nameAndSurname: "Instruktor 3",
        about1: "Zaczęła pływać już w wieku 5 lat i od tamtej pory nie przestaje. Długie lata trening\xf3w zaowocowały nie tylko umiejętnościami w wodzie, ale także pasją do tego sportu. Jest studentką drugiego roku prawa, fascynuje ją rola prawa w kształtowaniu społeczeństwa i jego wpływ na nasze życie codzienne.",
        about2: "Zawsze uśmiechnięta, pełna energii i empatii."
    },
    {
        img: "wiktoria-fryczek.png",
        nameAndSurname: "Instruktor 4",
        about1: "Zaczęła pływać już w wieku 5 lat i od tamtej pory nie przestaje. Długie lata trening\xf3w zaowocowały nie tylko umiejętnościami w wodzie, ale także pasją do tego sportu. Jest studentką drugiego roku prawa, fascynuje ją rola prawa w kształtowaniu społeczeństwa i jego wpływ na nasze życie codzienne.",
        about2: "Zawsze uśmiechnięta, pełna energii i empatii."
    },
    {
        img: "wiktoria-fryczek.png",
        nameAndSurname: "Instruktor 5",
        about1: "Zaczęła pływać już w wieku 5 lat i od tamtej pory nie przestaje. Długie lata trening\xf3w zaowocowały nie tylko umiejętnościami w wodzie, ale także pasją do tego sportu. Jest studentką drugiego roku prawa, fascynuje ją rola prawa w kształtowaniu społeczeństwa i jego wpływ na nasze życie codzienne.",
        about2: "Zawsze uśmiechnięta, pełna energii i empatii."
    },
    {
        img: "wiktoria-fryczek.png",
        nameAndSurname: "Instruktor 6",
        about1: "Zaczęła pływać już w wieku 5 lat i od tamtej pory nie przestaje. Długie lata trening\xf3w zaowocowały nie tylko umiejętnościami w wodzie, ale także pasją do tego sportu. Jest studentką drugiego roku prawa, fascynuje ją rola prawa w kształtowaniu społeczeństwa i jego wpływ na nasze życie codzienne.",
        about2: "Zawsze uśmiechnięta, pełna energii i empatii."
    },
    {
        img: "wiktoria-fryczek.png",
        nameAndSurname: "Instruktor 7",
        about1: "Zaczęła pływać już w wieku 5 lat i od tamtej pory nie przestaje. Długie lata trening\xf3w zaowocowały nie tylko umiejętnościami w wodzie, ale także pasją do tego sportu. Jest studentką drugiego roku prawa, fascynuje ją rola prawa w kształtowaniu społeczeństwa i jego wpływ na nasze życie codzienne.",
        about2: "Zawsze uśmiechnięta, pełna energii i empatii."
    },
    {
        img: "wiktoria-fryczek.png",
        nameAndSurname: "Instruktor 8",
        about1: "Zaczęła pływać już w wieku 5 lat i od tamtej pory nie przestaje. Długie lata trening\xf3w zaowocowały nie tylko umiejętnościami w wodzie, ale także pasją do tego sportu. Jest studentką drugiego roku prawa, fascynuje ją rola prawa w kształtowaniu społeczeństwa i jego wpływ na nasze życie codzienne.",
        about2: "Zawsze uśmiechnięta, pełna energii i empatii."
    },
    {
        img: "wiktoria-fryczek.png",
        nameAndSurname: "Instruktor 9",
        about1: "Zaczęła pływać już w wieku 5 lat i od tamtej pory nie przestaje. Długie lata trening\xf3w zaowocowały nie tylko umiejętnościami w wodzie, ale także pasją do tego sportu. Jest studentką drugiego roku prawa, fascynuje ją rola prawa w kształtowaniu społeczeństwa i jego wpływ na nasze życie codzienne.",
        about2: "Zawsze uśmiechnięta, pełna energii i empatii."
    },
    {
        img: "wiktoria-fryczek.png",
        nameAndSurname: "Instruktor 10",
        about1: "Zaczęła pływać już w wieku 5 lat i od tamtej pory nie przestaje. Długie lata trening\xf3w zaowocowały nie tylko umiejętnościami w wodzie, ale także pasją do tego sportu. Jest studentką drugiego roku prawa, fascynuje ją rola prawa w kształtowaniu społeczeństwa i jego wpływ na nasze życie codzienne.",
        about2: "Zawsze uśmiechnięta, pełna energii i empatii."
    }
];

;// CONCATENATED MODULE: ./components/NaszZespol/InstructorsList/InstructorsList.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const InstructorsList = ()=>{
    const [showPopup, setShowPopup] = (0,react.useState)({
        show: false,
        instructorName: "",
        img: "wiktoria-fryczek.png",
        about1: "",
        about2: ""
    });
    const hidePopupHandler = ()=>{
        setShowPopup({
            show: false,
            instructorName: "",
            img: "wiktoria-fryczek.png",
            about1: "",
            about2: ""
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (instructorsList_module_default()).instructorsList,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                children: "DRUŻYNA BASENOWA"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (instructorsList_module_default())["instructorsList__row-box"],
                children: INSTRUKTORZY_BASEN.map((instructor)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(InstructorBubble_InstructorBubble, {
                        img1: instructor.img,
                        instructorName: instructor.nameAndSurname,
                        onClick: ()=>setShowPopup({
                                show: true,
                                instructorName: instructor.nameAndSurname,
                                img: instructor.img,
                                about1: instructor.about1,
                                about2: instructor.about2
                            })
                    }, instructor.nameAndSurname))
            }),
            showPopup.show && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (instructorsList_module_default()).instructorsList__popup,
                onClick: hidePopupHandler,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "".concat((instructorsList_module_default()).instructorsList__popup__bubble, " ").concat((instructorsList_module_default())["instructorsList__popup__bubble-random-1"])
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "".concat((instructorsList_module_default()).instructorsList__popup__bubble, " ").concat((instructorsList_module_default())["instructorsList__popup__bubble-random-2"])
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (instructorsList_module_default())["instructorsList__popup__column-box"],
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "".concat((instructorsList_module_default()).instructorsList__popup__bubble, " ").concat((instructorsList_module_default())["instructorsList__popup__bubble-about-image"]),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                                    src: "/assets/instructors/".concat(showPopup.img),
                                    fill: true,
                                    alt: showPopup.instructorName
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: (instructorsList_module_default())["instructorsList__popup__column-box__name"],
                                children: showPopup.instructorName
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "".concat((instructorsList_module_default()).instructorsList__popup__bubble, " ").concat((instructorsList_module_default())["instructorsList__popup__bubble-about-1"]),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: showPopup.about1
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "".concat((instructorsList_module_default()).instructorsList__popup__bubble, " ").concat((instructorsList_module_default())["instructorsList__popup__bubble-about-2"]),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: showPopup.about2
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ var InstructorsList_InstructorsList = (InstructorsList);


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

/***/ 1908:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"videosSection_container__UKsJ_","container__image-box":"videosSection_container__image-box__Pe6mJ","container__image-box__sticker-box":"videosSection_container__image-box__sticker-box___ocUL","container__image-box__mobileSticker":"videosSection_container__image-box__mobileSticker__Qb7OL","container__image-box__oneSticker-box":"videosSection_container__image-box__oneSticker-box__OUd8U","container__image-box__opacity-cover":"videosSection_container__image-box__opacity-cover__81NiG"};

/***/ }),

/***/ 2576:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"insctructorBubble":"instructorBubble_insctructorBubble__fc4s0","insctructorBubble__image":"instructorBubble_insctructorBubble__image__rmUEr","insctructorBubble__title":"instructorBubble_insctructorBubble__title__x_ntk"};

/***/ }),

/***/ 5154:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"instructorsList":"instructorsList_instructorsList__GfvZL","instructorsList__row-box":"instructorsList_instructorsList__row-box__r9C34","instructorsList__popup":"instructorsList_instructorsList__popup__SVb5q","instructorsList__popup__column-box":"instructorsList_instructorsList__popup__column-box__BAnoV","instructorsList__popup__column-box__name":"instructorsList_instructorsList__popup__column-box__name__bo_W6","start":"instructorsList_start__4HZkl","instructorsList__popup__bubble":"instructorsList_instructorsList__popup__bubble__gfOML","instructorsList__popup__bubble-about-1":"instructorsList_instructorsList__popup__bubble-about-1__AZy8N","instructorsList__popup__bubble-about-image":"instructorsList_instructorsList__popup__bubble-about-image__0gX9Z","instructorsList__popup__bubble-about-2":"instructorsList_instructorsList__popup__bubble-about-2__UNX8D","instructorsList__popup__bubble-random-1":"instructorsList_instructorsList__popup__bubble-random-1__HmprI","instructorsList__popup__bubble-random-2":"instructorsList_instructorsList__popup__bubble-random-2__H0ljI"};

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

/***/ 2603:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"box":"strip_box__MCnEK","box__mainScrap":"strip_box__mainScrap__wk_xR","box__scrap-left":"strip_box__scrap-left__er54n","box__scrap-right":"strip_box__scrap-right__PaTW9"};

/***/ }),

/***/ 3121:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"box":"strip_box__97k5A","box__mainScrap":"strip_box__mainScrap__OCcEg","box__scrap-left":"strip_box__scrap-left__OYiZn","box__scrap-right":"strip_box__scrap-right__hMS8q"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [887,844,744], function() { return __webpack_exec__(7589); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);