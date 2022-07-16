function getLongURL() {
    var longURL = $("#long-URL").val();
    return longURL;
}

function shortenURL() {
    var longURL = getLongURL();
    fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
            Authorization: "Bearer e9e19e9536d215eb47c7071fa6a1d984c6961aa6",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ long_url: longURL, domain: "bit.ly" })
    })
        .then(function (response) {
            if (response.status != 200 && response.status != 201) {
                alert(`Error. Status code: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            if (data.link == null) {
                return;
            } else {
                printShortURL(data.link);
            }
        });
}

function printShortURL(link) {
    $.ajax({
        type: "POST",
        url: "src/shortened.php",
        data: {
            short_URL: link
        },
        success: function (response) {
            if ($("#short-URL-container").length) {
                $("#short-URL-container").replaceWith(response);
            } else {
                $("#shortener-form").after(response);
            }
            copyToClipboard(link);
            $("#short-URL-container").show(500);
            scrollToBottom();
        }
    });
}

function scrollToBottom() {
    setTimeout(function () {
        $("#short-URL-subcontainer")[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 501);
}

function copyToClipboard(link) {
    if (navigator.clipboard.writeText(link)) {
        $("#short-URL-subcontainer").append(
            '<p id="sucess-message">URL sucessfuly copied to clipboard!</p>'
        );
    }
}