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
    document.querySelectorAll('.thumb').forEach((t, i) => t.classList.toggle('active', i === currentImg));
  }

  function changeImg(dir) {
    currentImg = (currentImg + dir + galleryImgs.length) % galleryImgs.length;
    updateGallery();
  }

  renderThumbs();

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