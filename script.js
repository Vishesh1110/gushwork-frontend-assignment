const galleryImgs = [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80',
    'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=900&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80',
    'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=900&q=80',
  ];

  let currentImg = 0;
  const mainImg = document.getElementById('mainImg');
  const thumbsEl = document.getElementById('thumbs');
  const galleryMain = document.querySelector('.gallery-main');
  const zoomLens = document.getElementById('zoomLens');
  const imageZoomPopup = document.getElementById('imageZoomPopup');

  function renderThumbs() {
    thumbsEl.innerHTML = '';
    galleryImgs.forEach((src, i) => {
      const t = document.createElement('div');
      t.className = 'thumb' + (i === currentImg ? ' active' : '');
      t.innerHTML = `<img src="${src}" alt="thumb ${i+1}">`;
      t.onclick = () => { currentImg = i; updateGallery(); };
      thumbsEl.appendChild(t);
    });
  }

  function updateGallery() {
    mainImg.src = galleryImgs[currentImg];
    updateZoomImage();
    document.querySelectorAll('.thumb').forEach((t, i) => t.classList.toggle('active', i === currentImg));
  }

  function changeImg(dir) {
    currentImg = (currentImg + dir + galleryImgs.length) % galleryImgs.length;
    updateGallery();
  }

  renderThumbs();

  function updateZoomImage() {
    if (!imageZoomPopup || !mainImg) return;
    imageZoomPopup.style.backgroundImage = `url("${mainImg.src}")`;
  }

  function moveZoomPreview(event) {
    if (!galleryMain || !zoomLens || !imageZoomPopup || window.innerWidth <= 1024) return;

    const rect = galleryMain.getBoundingClientRect();
    const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
    const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    zoomLens.style.left = `${x}px`;
    zoomLens.style.top = `${y}px`;
    imageZoomPopup.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
  }

  function showZoomPreview(event) {
    if (!galleryMain || !imageZoomPopup || window.innerWidth <= 1024) return;
    updateZoomImage();
    galleryMain.classList.add('zooming');
    imageZoomPopup.classList.add('show');
    moveZoomPreview(event);
  }

  function hideZoomPreview() {
    if (!galleryMain || !imageZoomPopup) return;
    galleryMain.classList.remove('zooming');
    imageZoomPopup.classList.remove('show');
  }

  if (galleryMain) {
    galleryMain.addEventListener('mouseenter', showZoomPreview);
    galleryMain.addEventListener('mousemove', moveZoomPreview);
    galleryMain.addEventListener('mouseleave', hideZoomPreview);
    window.addEventListener('resize', hideZoomPreview);
  }

  updateZoomImage();

  // Modals
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
  const modals = document.querySelectorAll('.modal');
  let activeModal = null;

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal || !modalBackdrop) return;

    activeModal = modal;
    document.body.classList.add('modal-open');
    modalBackdrop.classList.add('show');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');

    const firstInput = modal.querySelector('input');
    if (firstInput) firstInput.focus();
  }

  function closeModal() {
    if (!activeModal || !modalBackdrop) return;

    activeModal.classList.remove('show');
    activeModal.setAttribute('aria-hidden', 'true');
    modalBackdrop.classList.remove('show');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    activeModal = null;
  }

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => openModal(trigger.dataset.modalTarget));
  });

  modalCloseButtons.forEach(button => {
    button.addEventListener('click', closeModal);
  });

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeModal);
  }

  modals.forEach(modal => {
    modal.addEventListener('click', event => {
      if (event.target === modal) closeModal();
    });

    const form = modal.querySelector('form');
    if (form) {
      form.addEventListener('submit', event => {
        event.preventDefault();
        closeModal();
      });
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal();
  });

  // FAQ
  function toggleFAQ(el) {
    const item = el.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  // Process tabs
  const processTitles = [
    'High-Grade Raw Material Selection',
    'Precision Extrusion Process',
    'Controlled Cooling System',
    'Accurate Sizing & Calibration',
    'Rigorous Quality Control',
    'Clear Pipe Marking',
    'Precision Cutting',
    'Secure Packaging'
  ];
  const processDescs = [
    'Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.',
    'Advanced extruders melt and homogenize HDPE resin at precise temperatures to achieve optimal melt flow and molecular alignment.',
    'Water cooling tanks rapidly cool the extruded pipe to lock in dimensional accuracy and prevent deformation.',
    'Precision sizing dies calibrate the pipe to exact outer diameter and wall thickness specifications.',
    'Online ultrasonic testing and dimensional measurement ensure every pipe meets IS/ISO standards.',
    'Automated inkjet marking systems apply all required specifications, pressure ratings, and certifications.',
    'Flying saws precisely cut pipes to required lengths without deforming the cross-section.',
    'Pipes are carefully bundled, strapped, and packed for safe transport and storage.'
  ];

  function selectTab(el, idx) {
    document.querySelectorAll('.process-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('processTitle').textContent = processTitles[idx];
    document.getElementById('processDesc').textContent = processDescs[idx];
  }
