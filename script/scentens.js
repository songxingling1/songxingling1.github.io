"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = 'https://tenapi.cn/v2/yiyan';
const scenten = document.querySelector("div#scentens");
const au = document.querySelector("div#author");
function getJSON() {
    return __awaiter(this, void 0, void 0, function* () {
        const respose = yield fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "format=json"
        });
        const Json = respose.json();
        return Json;
    });
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const s = yield getJSON();
            if (scenten != null) {
                scenten.innerHTML = `${s.data.hitokoto}<br>`;
            }
            if (au != null) {
                au.innerHTML = `——${s.data.author}`;
            }
        }
        catch (error) {
            let messege;
            if (error instanceof Error) {
                messege = error.message;
            }
            else {
                messege = String(error);
            }
            console.log(messege);
        }
    });
}
getData();
//# sourceMappingURL=scentens.js.map