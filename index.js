document.querySelectorAll('.image-item img').forEach(img => {
 img.addEventListener('click', function() {
     alert(`You clicked on ${this.alt}`);
 });
});
