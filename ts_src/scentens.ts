const url: string = 'https://tenapi.cn/v2/yiyan';
const scenten: HTMLDivElement | null = document.querySelector("div#scentens");
const au: HTMLDivElement | null = document.querySelector("div#author");
interface data {
    id: string;
    hitokoto: string;
    cat: string;
    catname: string;
    author: string;
    source: string;
    date: string;
}

interface Scentens {
    code: number;
    msg: string;
    data: data;
}

async function getJSON<T>():Promise<T> {
    const respose: Response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        body: "format=json"
    })
    const Json:Promise<T> = respose.json();
    return Json;
}
async function getData():Promise<void> {
    try {
        const s: Scentens = await getJSON<Scentens>();
        if (scenten != null) {
            scenten.innerHTML = `${s.data.hitokoto}<br>`;
        }
        if (au != null) {
            au.innerHTML = `——${s.data.author}`
        }
    } catch (error: Error | unknown) {
        let messege:string;
        if (error instanceof Error) {
            messege = error.message;
        } else {
            messege = String(error);
        }
        console.log(messege);
    }
}
getData();