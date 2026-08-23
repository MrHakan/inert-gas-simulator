const http=require('http'),fs=require('fs'),path=require('path');
const root=__dirname;
http.createServer((rq,rs)=>{
  if(rq.method==='POST'&&rq.url.startsWith('/shot')){
    let b='';rq.on('data',c=>b+=c);rq.on('end',()=>{
      const name=(new URL(rq.url,'http://x')).searchParams.get('n')||'shot';
      fs.writeFileSync(path.join(root,'_'+name+'.png'),Buffer.from(b.replace(/^data:image\/png;base64,/,''),'base64'));
      rs.writeHead(200);rs.end('ok');
    });return;
  }
  let p=decodeURIComponent(rq.url.split('?')[0]);
  if(p==='/')p='/IGS-3D-Training-Simulator.html';
  fs.readFile(path.join(root,p),(e,d)=>{
    if(e){rs.writeHead(404);rs.end('404');return;}
    rs.writeHead(200,{'Content-Type':p.endsWith('.html')?'text/html; charset=utf-8':'image/png'});
    rs.end(d);
  });
}).listen(8733,()=>console.log('http://localhost:8733'));
