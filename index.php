<?php include "_partials/header.php" ?>

<div class="page-header text-center mb-12 text-3xl text-white">
    <h1>v3ry gOOd TODO APP</h1>
</div>

<?php $data = $database -> select( 'items', 'text' ); ?>

<div class="container-main container flex flex-row justify-center items-start">
    <ul class="text-white w-96 mr-10">
        <?php
            foreach( $data as $item ) {
                echo '<li class="p-1 pl-2 mb-1 border border-white/[.20] rounded">' . $item . '</li>';
            }
        ?>
    </ul>

    <form action="_inc/add-new.php" method="post">
        <p>
            <textarea class="resize-none w-96 mb-1 border border-white/[.20] rounded bg-inherit text-white" name="message" id="text" placeholder="Do it !" rows="3"></textarea>
        </p>

        <p>
            <input type="submit" value="add new" class="btn p-2 border border-white/[.20] rounded bg-inherit hover:bg-green-700 text-white hover:cursor-pointer">
        </p>
    </form>
</div>

<?php include "_partials/footer.php" ?>