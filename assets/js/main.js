document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('year').textContent = new Date().getFullYear();
  fetch('projects.json')
    .then(r => { if(!r.ok) throw new Error('projects.json not found'); return r.json() })
    .then(renderProjects)
    .catch(err => {
      const grid = document.getElementById('projects-grid');
      grid.innerHTML = '<p style="color:var(--muted)">Could not load projects. Add `projects.json` next to index.html.</p>';
      console.warn(err);
    })
})

function renderProjects(projects){
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';
  projects.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <h4>${escapeHtml(p.title)}</h4>
      <p>${escapeHtml(p.description)}</p>
      <div class="project-meta">${p.tech ? 'Tech: ' + escapeHtml(p.tech.join(', ')) : ''} ${p.link ? ' • <a href="'+p.link+'" target="_blank" rel="noopener">Live / Repo</a>' : ''}</div>
    `;
    grid.appendChild(card);
  })
}

function escapeHtml(s){
  if(!s) return '';
  return String(s).replace(/[&<>"']/g, c=>({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[c]));
}
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('year').textContent = new Date().getFullYear();
  fetch('projects.json')
    .then(r => { if(!r.ok) throw new Error('projects.json not found'); return r.json() })
    .then(renderProjects)
    .catch(err => {
      const grid = document.getElementById('projects-grid');
      grid.innerHTML = '<p style="color:var(--muted)">Could not load projects. Add `projects.json` next to index.html.</p>';
      console.warn(err);
    })
})

function renderProjects(projects){
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';
  projects.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <h4>${escapeHtml(p.title)}</h4>
      <p>${escapeHtml(p.description)}</p>
      <div class="project-meta">${p.tech ? 'Tech: ' + escapeHtml(p.tech.join(', ')) : ''} ${p.link ? ' • <a href="'+p.link+'" target="_blank" rel="noopener">Live / Repo</a>' : ''}</div>
    `;
    grid.appendChild(card);
  })
}

function escapeHtml(s){
  if(!s) return '';
  return String(s).replace(/[&<>"']/g, c=>({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[c]));
}
