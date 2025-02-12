alert("Head sõprapäeva ")
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loveForm');
    const confirmationMessage = document.getElementById('confirmation');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        if (name && message) {
            form.style.display = 'none';

            confirmationMessage.style.display = 'block';

            console.log(`Sõnum saadetud: ${name} - ${message}`);

            fetch('/save-message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, message })
            })
                .then(response => response.json())
                .then(data => console.log('Vastus serverist:', data))
                .catch(error => console.error('Viga:', error));
        } else {
            alert('Palun täida kõik väljad!');
        }
    });
});