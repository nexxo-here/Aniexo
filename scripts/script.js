// ইন্টারঅ্যাক্টিভিটি যোগ করা
document.querySelectorAll('.genres-list li').forEach(genre => {
  genre.addEventListener('click', () => {
    alert(`Explore ${genre.textContent} anime!`);
  });
});
