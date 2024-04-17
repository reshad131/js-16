const showNotificationButton = document.getElementById('showNotification');
const notificationContainer = document.getElementById('notificationContainer');

showNotificationButton.addEventListener('click', () => {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.style.backgroundColor = getRandomColor();
    notification.textContent = `Message ${Math.floor(Math.random() * 10) + 1}`;
    notificationContainer.prepend(notification);
    
    setTimeout(() => {
        notification.classList.add('hidden');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
