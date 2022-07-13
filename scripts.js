function getLongURL() {
    var longURL = $('#long-URL').val();
    return longURL;
}

function printShortURL(response) {

    const article_header =
        '<header><h2>Shortened URL</h2></header>';

    var shortenedURLContent = `${article_header}<p id="short-URL"><a href="${response}" target="_blank" rel="noreferrer noopener">${response}  ↗️</a></p>`;

    $('#short-URL-subcontainer').html(shortenedURLContent);
}

function shortenURL() {
    var longURL = getLongURL();

    fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer e9e19e9536d215eb47c7071fa6a1d984c6961aa6',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'long_url': longURL, 'domain': 'bit.ly' })
    })
        .then((response) => {
            return response.json();
        }).then((data) => {
            printShortURL(data.link);
            $('html, body').css('height', 'max-content');
            copyToClipboard(data.link);
            $('#short-URL-container').show(500);
            scrollToBottom();
        })
        .catch(error => {
            alert('An error ocurred.');
        });
}

function scrollToBottom() {
    setTimeout(function () {
        $('#short-URL-subcontainer')[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 501);
}

function copyToClipboard(link) {

    if (navigator.clipboard.writeText(link)) {
        $('#short-URL-subcontainer').append('<p id="sucess-message">URL sucessfuly copied to clipboard!</p>');
    }
}