document.addEventListener('DOMContentLoaded', () => {
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach(item => {
        const title = item.querySelector('.news-title');
        title.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            newsItems.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});