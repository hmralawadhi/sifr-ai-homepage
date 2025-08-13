
// Configure this to point to your live backend endpoint.
// Example: window.SIFRAI_CHAT_ENDPOINT = "https://api.sifr-ai.com/chat";
window.SIFRAI_CHAT_ENDPOINT = window.SIFRAI_CHAT_ENDPOINT || "";

// Simple front-end echo chat until backend is connected.
(function(){
  function createMsgEl(role, content){
    const el = document.createElement('div');
    el.className = 'msg ' + role;
    el.style.margin = '6px 0';
    el.style.padding = '8px 10px';
    el.style.borderRadius = '8px';
    el.style.border = '1px solid var(--border)';
    if(role === 'user'){ el.style.alignSelf = 'flex-end'; }
    el.textContent = content;
    return el;
  }

  function attach(widget){
    const log = widget.querySelector('.chat-log');
    const form = widget.querySelector('form');
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const input = form.message;
      const text = input.value.trim();
      if(!text) return;
      log.appendChild(createMsgEl('user', text));
      input.value='';

      // If endpoint configured, try real call; else echo.
      if(window.SIFRAI_CHAT_ENDPOINT){
        try {
          const res = await fetch(window.SIFRAI_CHAT_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: text })
          });
          const data = await res.json();
          const reply = (data && (data.reply || data.text || JSON.stringify(data))) || 'No response';
          log.appendChild(createMsgEl('assistant', reply));
        } catch (err){
          log.appendChild(createMsgEl('assistant', 'Backend unreachable. Check SIFRAI_CHAT_ENDPOINT.'));
        }
      } else {
        const reply = 'Echo: ' + text + ' (connect backend to enable real-time responses)';
        log.appendChild(createMsgEl('assistant', reply));
      }

      log.scrollTop = log.scrollHeight;
    });
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('#sifr-chat.chat-widget').forEach(attach);
  });
})();
