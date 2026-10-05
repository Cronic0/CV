const revealObserver = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible') }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const output = document.getElementById('terminalOutput');
const input = document.getElementById('terminalInput');
const form = document.getElementById('terminalForm');
const clear = document.getElementById('clearTerminal');
const responses = {
  help: 'Comandos: about · stack · contact · clear',
  about: 'Miguel Espinosa — desarrollador web con foco en entornos digitales, e-commerce, CMS, automatización, IA y ciberseguridad.',
  stack: 'Python · PHP · HTML · CSS · PrestaShop · WordPress · Drupal · Shopify · n8n · Make · Moodle',
  contact: 'webcronic@gmail.com · +34 617 923 865'
};
function runCommand(cmd){
  cmd = cmd.trim().toLowerCase();
  if(!cmd) return;
  const line = document.createElement('p'); line.innerHTML = `<span class="green">miguel@portfolio</span>:~$ ${cmd}`; output.appendChild(line);
  const result = document.createElement('p');
  if(cmd === 'clear'){ output.innerHTML=''; return; }
  result.textContent = responses[cmd] || `Comando no encontrado: ${cmd}. Escribe "help".`;
  output.appendChild(result); output.scrollTop = output.scrollHeight;
}
form.addEventListener('submit', e => { e.preventDefault(); runCommand(input.value); input.value=''; });
clear.addEventListener('click',()=>output.innerHTML='');
document.querySelectorAll('[data-cmd]').forEach(btn=>btn.addEventListener('click',()=>runCommand(btn.dataset.cmd)));
