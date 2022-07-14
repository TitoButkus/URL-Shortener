<?php

$shortened_url = $_GET['short_URL'];

?>

<div id="short-URL-container" class="hidden">
    <article id="short-URL-subcontainer" class="centralize">
        <header>
            <h2>Shortened URL</h2>
        </header>
        <p id="short-URL">
            <a href="<?php echo $shortened_url ?>" target="_blank" rel="noreferrer noopener"><?php echo $shortened_url ?> ↗️</a>
        </p>
    </article>
</div>