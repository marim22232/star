document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    // Собираем данные из формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Отправляем данные на сервер с использованием Fetch API
    fetch('submit-contact-form.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${name}&email=${email}&message=${message}`
    })
    .then(response => response.text())
    .then(data => alert(data)) // Здесь можно обработать ответ от сервера
    .catch(error => alert('Ошибка: ' + error));
});

