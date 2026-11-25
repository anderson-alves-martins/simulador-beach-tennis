const canvas=document.querySelector('#court'),ctx=canvas.getContext('2d');
const initial=[{x:210,y:190,n:1,side:'top',color:'#1979c7'},{x:430,y:190,n:2,side:'top',color:'#1979c7'},{x:210,y:670,n:1,side:'bottom',color:'#dc4949'},{x:430,y:670,n:2,side:'bottom',color:'#dc4949'}];
let players=initial.map(p=>({...p})),ball={x:320,y:600},drag=null,active=null,mode='move';const names=['','','',''],strokes=[];const ink=document.querySelector('#ink'),weight=document.querySelector('#weight');document.querySelectorAll('.swatch').forEach(b=>b.addEventListener('click',()=>{ink.value=b.dataset.color;document.querySelectorAll('.swatch').forEach(x=>x.classList.toggle('selected',x===b))}));ink.addEventListener('input',()=>document.querySelectorAll('.swatch').forEach(b=>b.classList.toggle('selected',b.dataset.color===ink.value)));
const sandLayer=document.createElement('canvas');sandLayer.width=640;sandLayer.height=860;const sandCtx=sandLayer.getContext('2d');
const playerAvatar=new Image();playerAvatar.src='assets/player-beach.png';playerAvatar.onload=()=>draw();

const sand=sandCtx.createLinearGradient(0,0,640,860);sand.addColorStop(0,'#dfc08b');sand.addColorStop(.52,'#cfa66e');sand.addColorStop(1,'#e3c48d');sandCtx.fillStyle=sand;sandCtx.fillRect(0,0,640,860);const courtSand=sandCtx.createLinearGradient(70,65,570,795);courtSand.addColorStop(0,'#f3d8a4');courtSand.addColorStop(.5,'#e7c48b');courtSand.addColorStop(1,'#f1d19a');sandCtx.fillStyle=courtSand;sandCtx.fillRect(70,65,500,730);sandCtx.save();sandCtx.globalAlpha=.12;for(let i=0;i<1800;i++){const x=(i*97.37)%640,y=(i*61.71)%860;sandCtx.fillStyle=i%3?'#a98152':'#fff8e5';sandCtx.fillRect(x,y,2+(i%3),1+(i%2))}sandCtx.restore();

function drawNet(){
  const left=48,right=592,top=423,bottom=452;
  ctx.save();
  ctx.fillStyle='rgba(73,53,28,.16)';ctx.fillRect(left,bottom,right-left,8);
  ctx.fillStyle='#f3ead7';ctx.fillRect(left+9,top+3,right-left-18,bottom-top-3);
  ctx.strokeStyle='#33464c';ctx.lineWidth=1.8;
  for(let y=top+7;y<bottom;y+=5){ctx.beginPath();ctx.moveTo(left+10,y);ctx.lineTo(right-10,y);ctx.stroke()}
  for(let x=left+12;x<right-8;x+=9){ctx.beginPath();ctx.moveTo(x,top+4);ctx.lineTo(x, bottom);ctx.stroke()}
  ctx.lineCap='round';ctx.strokeStyle='#2d4249';ctx.lineWidth=9;ctx.beginPath();ctx.moveTo(left,top);ctx.lineTo(right,top);ctx.stroke();
  ctx.strokeStyle='#fff9ea';ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(left+10,top+1);ctx.lineTo(right-10,top+1);ctx.stroke();
  ctx.strokeStyle='#2d4249';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(left+8,bottom);ctx.lineTo(right-8,bottom);ctx.stroke();
  ctx.lineWidth=12;ctx.beginPath();ctx.moveTo(left+4,top+1);ctx.lineTo(left+12,bottom+2);ctx.moveTo(right-4,top+1);ctx.lineTo(right-12,bottom+2);ctx.stroke();
  ctx.restore();
}

function draw(){ctx.drawImage(sandLayer,0,0);
// Contorno e linhas de serviço inspirados na quadra da referência.
ctx.save();ctx.strokeStyle='#fffdf5';ctx.lineCap='square';ctx.shadowColor='rgba(130,91,43,.2)';ctx.shadowBlur=4;ctx.shadowOffsetY=2;
ctx.lineWidth=7;ctx.strokeRect(80,75,480,710);ctx.restore();
drawNet();
ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='bold 19px system-ui';ctx.fillStyle='#23424b';
[...strokes,...(active?[active]:[])].forEach(st=>{const pts=st.points;if(!pts.length)return;ctx.save();ctx.strokeStyle=st.color;ctx.fillStyle=st.color;ctx.lineWidth=st.width||5;ctx.lineCap='round';ctx.lineJoin='round';if(st.type==='dashed')ctx.setLineDash([13,10]);ctx.beginPath();ctx.moveTo(pts[0].x,pts[0].y);if(st.type==='curve'&&pts.length>2){const a=pts[0],c=pts[1],b=pts[2];ctx.quadraticCurveTo(c.x,c.y,b.x,b.y)}else for(const p of pts.slice(1))ctx.lineTo(p.x,p.y);if(pts.length===1)ctx.lineTo(pts[0].x+.1,pts[0].y+.1);ctx.stroke();if(['arrow','curve'].includes(st.type)&&pts.length>1){ctx.setLineDash([]);const b=pts[pts.length-1],a=st.type==='curve'&&pts.length>2?pts[1]:pts[pts.length-2],ang=Math.atan2(b.y-a.y,b.x-a.x),len=19;ctx.beginPath();ctx.moveTo(b.x,b.y);ctx.lineTo(b.x-len*Math.cos(ang-.55),b.y-len*Math.sin(ang-.55));ctx.moveTo(b.x,b.y);ctx.lineTo(b.x-len*Math.cos(ang+.55),b.y-len*Math.sin(ang+.55));ctx.stroke()}ctx.restore()});ctx.beginPath();ctx.arc(ball.x,ball.y,12,0,Math.PI*2);ctx.fillStyle='#e9ed48';ctx.fill();ctx.strokeStyle='#fdfdfd';ctx.lineWidth=2.5;ctx.stroke();ctx.beginPath();ctx.arc(ball.x-3,ball.y,6,-1.3,1.3);ctx.strokeStyle='#fff';ctx.lineWidth=1.6;ctx.stroke();players.forEach((p,i)=>{ctx.save();ctx.translate(p.x,p.y);if(p.side==='bottom')ctx.rotate(Math.PI);if(playerAvatar.complete&&playerAvatar.naturalWidth){ctx.drawImage(playerAvatar,0,141,1159,1142,-44,-43,88,86)}else{ctx.beginPath();ctx.arc(0,0,24,0,Math.PI*2);ctx.fillStyle=p.color;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();ctx.fillStyle='#fff';ctx.font='bold 20px system-ui';ctx.fillText(p.n,0,0)}ctx.restore();ctx.beginPath();ctx.arc(p.x+31,p.y-31,12,0,Math.PI*2);ctx.fillStyle=p.color;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2.5;ctx.stroke();ctx.fillStyle='#fff';ctx.font='bold 13px system-ui';ctx.fillText(p.n,p.x+31,p.y-31);if(names[i]){ctx.font='bold 16px system-ui';ctx.fillStyle='#20333a';ctx.fillText(names[i],p.x,p.y+57)}})}
function point(e){const r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)*640/r.width,y:(e.clientY-r.top)*860/r.height}}
document.querySelectorAll('[data-mode]').forEach(btn=>btn.addEventListener('click',()=>{mode=btn.dataset.mode;document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)))}));
canvas.addEventListener('pointerdown',e=>{const q=point(e);if(mode==='move'){drag=Math.hypot(ball.x-q.x,ball.y-q.y)<22?ball:([...players].reverse().find(p=>Math.hypot(p.x-q.x,p.y-q.y)<47)||null);if(!drag)return}else if(mode==='eraser'){let idx=-1,dist=24;strokes.forEach((st,i)=>{for(const p of st.points){const d=Math.hypot(p.x-q.x,p.y-q.y);if(d<dist){dist=d;idx=i}}});if(idx>=0)strokes.splice(idx,1);draw();return}else active={type:mode,color:ink.value,width:Number(weight.value),points:[q]};canvas.setPointerCapture(e.pointerId);draw()});
canvas.addEventListener('pointermove',e=>{if(!drag&&!active)return;const q=point(e);if(drag){drag.x=Math.max(drag===ball?16:48,Math.min(drag===ball?624:592,q.x));drag.y=drag===ball?Math.max(16,Math.min(844,q.y)):(drag.side==='top'?Math.max(48,Math.min(375,q.y)):Math.max(500,Math.min(817,q.y)))}else if(active){if(['arrow','line','dashed'].includes(active.type))active.points=[active.points[0],q];else if(active.type==='curve'){const a=active.points[0],mid={x:(a.x+q.x)/2,y:(a.y+q.y)/2-65};active.points=[a,mid,q]}else active.points.push(q)}draw()});
function finish(){if(active){strokes.push(active);active=null}drag=null;draw()}
for(const event of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(event,finish);
document.querySelector('#undo').addEventListener('click',()=>{strokes.pop();draw()});
document.querySelector('#clear').addEventListener('click',()=>{strokes.length=0;draw()});
const playerNameLimit=40;
document.querySelectorAll('[data-player]').forEach(input=>{input.maxLength=playerNameLimit;input.addEventListener('input',()=>{const value=input.value.slice(0,playerNameLimit);if(input.value!==value)input.value=value;names[Number(input.dataset.player)]=value.trim();draw()})});
function captureBlob(){return new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('Falha ao capturar a quadra')),'image/png'))}
function downloadBlob(blob){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='quadra-beach-tennis.png';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}
document.querySelector('#save-image').addEventListener('click',async()=>{try{downloadBlob(await captureBlob())}catch(e){alert('Não foi possível salvar a imagem.')}});
document.querySelector('#share-image').addEventListener('click',async()=>{try{const blob=await captureBlob(),file=new File([blob],'quadra-beach-tennis.png',{type:'image/png'});if(navigator.canShare?.({files:[file]})&&navigator.share){try{await navigator.share({files:[file],title:'Jogada de Beach Tennis'})}catch(e){if(e.name!=='AbortError')downloadBlob(blob)}}else{downloadBlob(blob);alert('Seu navegador não permite compartilhar a imagem diretamente. Ela foi salva para você enviar.')}}catch(e){alert('Não foi possível capturar a quadra.')}});
document.querySelector('#reset').addEventListener('click',()=>{players=initial.map(p=>({...p}));draw()});draw();
