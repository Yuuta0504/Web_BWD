document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.fade-section');

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        },
        {
            threshold: 0.3 // Phần tử chiếm 30% viewport thì bắt đầu hiện
        }
    );

    sections.forEach(section => {
        observer.observe(section);
    });
});