const statusText = document.getElementById('status-text');
  const activeBtn = document.querySelector('.active-btn');
  const offlineBtn = document.querySelector('.offline-btn');

  activeBtn.addEventListener('click', () => {
    statusText.textContent = 'Available';
    statusText.classList.remove('offline');
    statusText.classList.add('available');
  });

  offlineBtn.addEventListener('click', () => {
    statusText.textContent = 'Offline';
    statusText.classList.remove('available');
    statusText.classList.add('offline');
  });