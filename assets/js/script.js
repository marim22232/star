  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    fetch('submit-contact-form.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${name}&email=${email}&message=${message}`
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => alert('Ошибка: ' + error));
});

