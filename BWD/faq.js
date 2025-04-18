document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentElement;
  
      // Đóng tất cả các box khác
      document.querySelectorAll('.faq-item').forEach(el => {
        if (el !== parent) el.classList.remove('active');
      });
  
      // Toggle item được click
      parent.classList.toggle('active');
    });
  });
  