<?php include_once "_partials/header.php" ?>

<div class="page-header text-center mb-12 text-3xl text-white">
    <h1>v3ry gOOd EDIT</h1>
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

    <form id="edit-form" action="_inc/edit-item.php" method="post">
        <p>
            <textarea id="text" class="resize-none w-96 mb-1 p-2 border border-white/[.20] rounded bg-inherit text-white" name="message" rows="3"><?php echo $item ?></textarea>
        </p>

        <p>
            <input type="hidden" name="id" value="<?php echo $_GET[ 'id' ] ?>">
            <input type="submit" value="edit item" class="btn p-2 border border-white/[.20] rounded bg-inherit hover:bg-green-700 text-white hover:cursor-pointer">
        </p>
    </form>
</div>

<?php include "_partials/footer.php" ?>