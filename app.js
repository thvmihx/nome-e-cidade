if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function(reg) {
        console.log('Service Worker registered successfully', reg);
    }).catch(function(err) {
        console.warn('Service Worker registration failed', err);
    });
}

// Manipula a transição entre as telas
document.addEventListener('DOMContentLoaded', function() {
    const formScreen = document.getElementById('form-screen');
    const displayScreen = document.getElementById('display-screen');
    const form = document.getElementById('user-form');
    const backBtn = document.getElementById('back-btn');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const city = document.getElementById('city').value;
  
      if (name && city) {
        document.getElementById('display-name').textContent = `Nome: ${name}`;
        document.getElementById('display-city').textContent = `Cidade: ${city}`;
        
        formScreen.classList.add('hidden');
        displayScreen.classList.remove('hidden');
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    });
  
    backBtn.addEventListener('click', function() {
      formScreen.classList.remove('hidden');
      displayScreen.classList.add('hidden');
      form.reset();
    });
  });
  

// No arquivo principal
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.active.postMessage({ type: 'MESSAGE_TYPE', data: 'example' });
    });
  }
  
  // No Service Worker
  self.addEventListener('message', event => {
    if (event.data.type === 'MESSAGE_TYPE') {
      // Processa a mensagem
      console.log(event.data.data);
    }
  });
  
