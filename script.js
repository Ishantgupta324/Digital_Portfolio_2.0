/* ====== Edit your content here ====== */
const DATA = {
  roles: ["B.Tech CSE (AI) student","Web developer","Hackathon participant","Future AI Engineer"],
  skills: [
    {title:"Languages", bars:[["Python",75],["C",70],["Java",60]]},
    {title:"Web", chips:["HTML","CSS","JavaScript","Bootstrap"]},
    {title:"Tools", chips:["VS Code","IntelliJ IDEA","GitHub"]},
    {title:"Interests", chips:["AI / ML","Web development","Problem solving","Entrepreneurship"]}
  ],
  projects: [
    {name:"Invyra: AI Investment System", tag:"AI mini project", big:true,
     text:"An AI-based investment system that takes user inputs, analyses them and gives useful outputs. Selected in Ideathon Round 1 at ABESIT.", link:"https://github.com/Ishantgupta324"},
    {name:"SIH Problem Statement 145", tag:"Smart India Hackathon",
     text:"Worked in a team on a Smart India Hackathon problem statement: understanding the problem and building a solution.", link:"https://github.com/Ishantgupta324"},
    {name:"E-Commerce Website", tag:"HTML · CSS · JS",
     text:"A shopping website built with front-end technologies to practise responsive layouts and user-facing features.", link:"https://github.com/Ishantgupta324"},
    {name:"Personal Portfolio", tag:"Web",
     text:"A portfolio site that shows my education, achievements, interests and professional profiles.", link:"https://ishantgupta324.github.io/Professional_Curriculum_Vitae/"}
  ],
  journey: [
    {when:"Present", title:"B.Tech CSE (AI), ABESIT", text:"Year-wise GPA (YGPA): 8.66. Focus on AI, programming and web development."},
    {when:"ABESIT", title:"Web Developer", text:"Built and styled web pages and applied HTML, CSS and JavaScript in project work."},
    {when:"Activities", title:"Hackathons and Pitch to Prosper", text:"Many online and offline hackathons, plus entrepreneurship and idea-pitching activities."},
    {when:"Class XII", title:"Smt. Ganga Devi Inter College", text:"85.2%"},
    {when:"Class X", title:"Pt. Vrishbhanu Gaur Vidya Mandir", text:"88.33%"}
  ],
  certs: [
    {name:"Programming in C · Infosys Springboard", img:"assets/certificates/infosys-c.jpg"},
    {name:"Yuva AI for All · FutureSkills Prime", img:"assets/certificates/yuva-ai.jpg"},
    {name:"Python · Kaggle", img:"assets/certificates/kaggle-python.png"}
  ],
  otherCerts: ["NPTEL Soft Skills (Elite)","Infosys: Python, Email Etiquette, Soft Skills","Pitch to Prosper (ABESIT)","TCS iON: Cyber Security Awareness","NASSCOM AI for All"],
  links: [
    ["GitHub","G","#24292f","https://github.com/Ishantgupta324","Code and projects"],
    ["LinkedIn","in","#0a66c2","https://www.linkedin.com/in/ishantgupta2008","Professional profile"],
    ["LeetCode","LC","#f89f1b","https://leetcode.com/u/Ishant_Gupta_2008/","Problem solving"],
    ["CodeChef","CC","#5b4638","https://www.codechef.com/users/ishantgupta162","Competitive coding"],
    ["Unstop","U","#1c4980","https://unstop.com/u/ishangup51843","Hackathons and contests"],
    ["Internshala","I","#008bdc","https://internshala.com/student/dashboard","Internships"],
    ["Instagram","IG","#d62976","https://instagram.com/ishant_gupta_2008","@ishant_gupta_2008"],
    ["Facebook","f","#1877f2","https://facebook.com/ishant.gupta.568","Say hi"]
  ]
};
const $ = s => document.querySelector(s);
const el = (h) => { const t=document.createElement('template'); t.innerHTML=h.trim(); return t.content.firstChild; };

/* Render sections */
DATA.skills.forEach(s=>{
  const body = s.bars ? s.bars.map(([n,v])=>`<div class="bar"><small><span>${n}</span><span>${v}%</span></small><div><i data-w="${v}"></i></div></div>`).join('')
    : `<ul class="chips">${s.chips.map(c=>`<li>${c}</li>`).join('')}</ul>`;
  $('#skillGrid').append(el(`<div class="skill-box"><h3>${s.title}</h3>${body}</div>`));
});
DATA.projects.forEach(p=>$('#projGrid').append(el(`<article class="proj${p.big?' big':''}"><span class="tag">${p.tag}</span><h3>${p.name}</h3><p>${p.text}</p><a href="${p.link}" target="_blank" rel="noopener">View on GitHub</a></article>`)));
DATA.journey.forEach(j=>$('#timeline').append(el(`<li><small>${j.when}</small><h3>${j.title}</h3><p>${j.text}</p></li>`)));
DATA.certs.forEach(c=>$('#certGrid').append(el(`<button class="cert" data-img="${c.img}"><img src="${c.img}" alt="${c.name}" loading="lazy"><span>${c.name}</span></button>`)));
DATA.otherCerts.forEach(c=>$('#otherCerts').append(el(`<li>${c}</li>`)));
DATA.links.forEach(([n,i,c,u,d])=>$('#linkGrid').append(el(`<a class="link" style="--c:${c}" href="${u}" target="_blank" rel="noopener"><em>${i}</em><span><b>${n}</b><small>${d}</small></span></a>`)));
$('#yr').textContent = new Date().getFullYear();

/* Typing effect */
(function(){let r=0,c=0,del=false;const t=$('#typed');
 (function tick(){const w=DATA.roles[r];t.textContent=w.slice(0,c);
  if(!del&&c===w.length){del=true;return setTimeout(tick,1400)}
  if(del&&c===0){del=false;r=(r+1)%DATA.roles.length}
  c+=del?-1:1;setTimeout(tick,del?40:80)})()})();

/* Theme + menu */
const saved=localStorage.getItem('theme'); if(saved) document.documentElement.dataset.theme=saved;
$('#theme').onclick=()=>{const d=document.documentElement,n=d.dataset.theme==='dark'?'light':'dark';d.dataset.theme=n;localStorage.setItem('theme',n)};
$('#burger').onclick=()=>$('#menu').classList.toggle('open');
$('#menu').onclick=()=>$('#menu').classList.remove('open');

/* Scroll reveal, skill bars, counters */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');
  e.target.querySelectorAll('[data-w]').forEach(b=>b.style.width=b.dataset.w+'%');
  e.target.querySelectorAll('[data-count]').forEach(n=>{const to=+n.dataset.count,d=+(n.dataset.dec||0),s=performance.now();
    (function f(now){const p=Math.min((now-s)/1200,1);n.textContent=(to*p).toFixed(d);if(p<1)requestAnimationFrame(f)})(s)});
  io.unobserve(e.target)}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(s=>io.observe(s));

/* Lightbox */
const lb=$('#lightbox');
document.addEventListener('click',e=>{const c=e.target.closest('.cert');
  if(c){lb.querySelector('img').src=c.dataset.img;lb.hidden=false}
  else if(e.target===lb||e.target.closest('#lightbox button'))lb.hidden=true});
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.hidden=true});

/* Contact form: opens the visitor's email app */
$('#send').onclick=()=>{const n=$('#fName').value.trim(),m=$('#fMail').value.trim(),g=$('#fMsg').value.trim(),note=$('#formNote');
  if(!n||!m||!g){note.textContent='Please fill in your name, email and message.';return}
  location.href=`mailto:ishantgupta2323@gmail.com?subject=${encodeURIComponent('Portfolio message from '+n)}&body=${encodeURIComponent(g+'\n\nReply to: '+m)}`;
  note.textContent='Opening your email app…'};

/* Neural-network background */
(function(){const cv=$('#net'),x=cv.getContext('2d');let W,H,P=[],mouse={x:-999,y:-999};
 const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
 function size(){W=cv.width=innerWidth;H=cv.height=innerHeight;P=Array.from({length:Math.min(90,Math.floor(W*H/16000))},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}))}
 addEventListener('resize',size);addEventListener('pointermove',e=>{mouse.x=e.clientX;mouse.y=e.clientY});size();
 function draw(){x.clearRect(0,0,W,H);const col=getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();x.fillStyle=x.strokeStyle=col;
  P.forEach((p,i)=>{if(!reduce){p.x+=p.vx;p.y+=p.vy}if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
   x.globalAlpha=.8;x.beginPath();x.arc(p.x,p.y,1.8,0,7);x.fill();
   for(let j=i+1;j<P.length;j++){const q=P[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<130){x.globalAlpha=(1-d/130)*.35;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}
   const m=Math.hypot(p.x-mouse.x,p.y-mouse.y);if(m<160){x.globalAlpha=(1-m/160)*.7;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(mouse.x,mouse.y);x.stroke()}});
  if(!reduce)requestAnimationFrame(draw)}
 draw();if(reduce)addEventListener('resize',draw)})();
