<?php ?>

<!DOCTYPE html>
<html lang="pt-BR" data-theme="light">
<?php include_once("header.php"); ?>
    <main class="container">
        <header class="centralize headings">
            <h1>URL Shortener</h1>
            <p><em>Generate user-friendly links</em></p>
        </header>
        <?php include_once("form.php"); ?>
        <div id="short-URL-container" class="hidden">
            <article id="short-URL-subcontainer" class="centralize"></article>
        </div>
        <?php include_once("faq.php"); ?>
    </main>
<?php include_once("footer.php"); ?>
</body>

</html>