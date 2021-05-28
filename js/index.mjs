// import fetch from 'node-fetch';
// import jsdom from 'jsdom';

import fetch from './node_modules/node-fetch';
import jsdom from './node_modules/jsdom';


const { JSDOM } = jsdom;

(async () => {
    const res = await fetch('https://www.froma.com/saitama/MAl9/?st=20&ms_f=1');
    const html = await res.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const nodes = document.querySelectorAll('#jsi-job-article > div > div.job-article__info-wrap > div.job-article__header > div.job-article__header-ttl-outer > div');
    const tokyoWeathers = Array.from(nodes, td => td.textContent.trim());

    console.log(tokyoWeathers);

    
})();


