
function runDemo(){
  const input = document.getElementById('demoInput').value.trim()||'What are the key trends in our customer churn data?';
  const out = document.getElementById('demoOutput');
  out.innerHTML='<div style="font-family:\'IBM Plex Mono\',monospace;font-size:11px;color:rgba(255,255,255,0.3)">Vectorising query...</div>';
  const steps=[
    {delay:400,html:'<div style="font-family:\'IBM Plex Mono\',monospace;font-size:11px;color:rgba(255,255,255,0.3)">Retrieving top-k chunks from knowledge base...</div>'},
    {delay:900,html:'<div style="margin:8px 0"><span class="chunk">chunk_047</span><span class="chunk">chunk_112</span><span class="chunk">chunk_203</span> <span style="font-size:11px;color:rgba(255,255,255,0.25);font-family:\'IBM Plex Mono\'">similarity: 0.94, 0.91, 0.88</span></div>'},
    {delay:1500,html:'<div style="font-size:13px;color:rgba(255,255,255,0.7);line-height:1.8;margin-top:8px">Based on retrieved data: <strong style="color:#e2e8f0">3 key churn signals</strong> identified — (1) users inactive >14 days show 62% churn rate, (2) plan downgrades precede cancellation by avg 18 days, (3) support tickets correlate with 2.3x higher churn risk.</div>'},
  ];
  steps.forEach(s=>setTimeout(()=>{out.innerHTML+=s.html},s.delay));
}

function joinBeta(){
  const inp=document.getElementById('emailInput');
  const val=inp.value.trim();
  if(!val||!val.includes('@')){inp.style.borderColor='rgba(239,68,68,0.5)';return;}
  inp.style.borderColor='rgba(6,214,160,0.5)';
  inp.value='';
  inp.placeholder='✓ You\'re on the list!';
  setTimeout(()=>{inp.style.borderColor='';inp.placeholder='you@company.com';},3000);
}
