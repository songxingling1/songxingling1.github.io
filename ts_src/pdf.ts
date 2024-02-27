const pdf_url = 'https://api.github.com/repos/songxingling1/songxingling1.github.io/contents/doc';
const links: HTMLDivElement | null = document.querySelector('div#links');
interface link__ {
    self: string;
    git: string;
    html: string;
}
interface file {
    name: string;
    path: string;
    sha: string;
    size: string;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string;
    type: string;
    _links: string;
}
async function getPDF<T>(): Promise<T> {
    console.log("5");
    const respose: Response = await fetch(pdf_url);
    console.log("5");
    const Json:Promise<T> = respose.json();
    return Json;
}
async function writePDF(): Promise<void> {
    links?.appendChild(document.createElement('br'));
    try {
        const s: file[] = await getPDF<file[]>();
        s.forEach((val: file) => {
            let a: HTMLAnchorElement = document.createElement('a');
            a.href = `../lib/pdfjs/web/viewer.html?file=/${val.path}`;
            a.innerHTML = `<button class="pdf">${val.name}</button>`;
            links?.appendChild(a);
            let b: HTMLAnchorElement = document.createElement('a');
            b.href = `${val.download_url}`;
            b.innerHTML = `<button class="download">下载</button>`;
            links?.appendChild(b);
            links?.appendChild(document.createElement('br'));
            links?.appendChild(document.createElement('br'));
        })
    } catch (error: Error | unknown) {
        let messege:string;
        if (error instanceof Error) {
            messege = error.message;
        } else {
            messege = String(error);
        }
    }
}
writePDF();