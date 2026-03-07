const fs = require('fs');
const Parser = require('rss-parser');
const parser = new Parser();

const instances = [
  'https://nitter.net',
  'https://nitter.snopyta.org',
  'https://nitter.pussthecat.org'
];
const accounts = ['Ajabreaking','alarabiya_brk'];

async function fetchFeed(instance, account) {
  const url = `${instance}/${account}/rss`;
  try {
    const feed = await parser.parseURL(url);
    return (feed.items || []).map(item=>({
      id: item.id || item.link,
      url: item.link,
      title: item.title || '',
      content: item.contentSnippet || item.content || '',
      pubDate: item.pubDate || null
    }));
  } catch(e){
    return null;
  }
}

(async ()=>{
  const results = [];
  for (const acct of accounts) {
    let got = null;
    for (const inst of instances) {
      got = await fetchFeed(inst, acct);
      if (got && got.length) break;
    }
    results.push({account: acct, items: got || []});
  }
  // flatten and dedupe by url
  const flat = [];
  const seen = new Set();
  for (const r of results) {
    for (const it of r.items) {
      if (!seen.has(it.url)) {
        seen.add(it.url);
        flat.push(Object.assign({author: r.account}, it));
      }
    }
  }
  fs.writeFileSync('data/news.json', JSON.stringify(flat.slice(0,100), null, 2));
  console.log('Wrote data/news.json', flat.length);
})();
