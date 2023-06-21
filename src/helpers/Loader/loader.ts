import './loader.styles.css';

const createLoader = (): HTMLElement => {
  const loaderOverlay = document.createElement('div');
  loaderOverlay.classList.add('loader-overlay');

  const loader = document.createElement('div');
  loader.classList.add('loader');

  const spin = document.createElement('div');
  spin.classList.add('spin');

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');

  const loading = document.createElement('div');
  loading.classList.add('loading');

  const loadingText = document.createElement('p');
  loadingText.textContent = 'Loading';

  const dotsContainer = document.createElement('div');
  dotsContainer.classList.add('dots-container');

  for (let i = 0; i < 3; i++) {
    const dot = document.createElement('span');
    dotsContainer.appendChild(dot);
  }

  loading.appendChild(loadingText);
  loading.appendChild(dotsContainer);
  textContainer.appendChild(loading);
  loader.appendChild(spin);
  loader.appendChild(textContainer);
  loaderOverlay.appendChild(loader);

  return loaderOverlay;
};

export default createLoader;
