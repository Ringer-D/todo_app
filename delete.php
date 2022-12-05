<?php include_once "_partials/header.php" ?>

<div class="page-header text-center mb-12 text-3xl text-white">
    <h1>v3ry DELETE </h1>
</div>

<?php

    $item = $database -> get( 'items', 'text', [
        "id" => $_GET[ 'id' ]
    ]); 

    if( ! $item ) {
        header( "HTTP/1.0 404 Not Found" );
        include_once "404.php";
        die();
    }
?>

<div class="container-main container flex flex-row justify-center items-start">

    <form id="delete-form" action="_inc/delete-item.php" method="post">
        <div>
            <textarea disabled id="text" class="resize-none w-96 mb-1 p-2 border border-white/[.20] rounded bg-inherit text-white" name="message" rows="1"><?php echo $item ?></textarea>
        </div>

        <div class="flex flex-row items-center text-gray-400">
            <input type="hidden" name="id" value="<?php echo $_GET[ 'id' ] ?>">
            <input type="submit" value="delete item" class="btn p-2 mr-2 border border-white/[.20] rounded bg-inherit hover:bg-green-700 text-white hover:cursor-pointer">
            <div class="controls">
                <a href="<?php echo $site_url ?>" class="back-link text-sm hover:text-red-500">back</a>
            </div>
        </div>
    </form>
</div>

<?php include "_partials/footer.php" ?>