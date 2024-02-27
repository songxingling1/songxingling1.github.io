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
const pdf_url = 'https://api.github.com/repos/songxingling1/songxingling1.github.io/contents/doc';
const links = document.querySelector('div#links');
function getPDF() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("5");
        const respose = yield fetch(pdf_url);
        console.log("5");
        const Json = respose.json();
        return Json;
    });
}
function writePDF() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const s = yield getPDF();
            s.forEach((val) => {
                let a = document.createElement('a');
                a.href = `../lib/pdfjs/web/viewer.html?file=/${val.path}`;
                a.innerHTML = `${val.name}<br>`;
                links === null || links === void 0 ? void 0 : links.appendChild(a);
            });
        }
        catch (error) {
            let messege;
            if (error instanceof Error) {
                messege = error.message;
            }
            else {
                messege = String(error);
            }
        }
    });
}
writePDF();
//# sourceMappingURL=pdf.js.map