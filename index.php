<?php include "_partials/header.php" ?>

<div class="page-header text-center mb-12 text-3xl text-white">
    <h1>v3ry gOOd TODO APP</h1>
</div>

<?php $data = $database -> select( 'items', [ 'id', 'text' ] ); ?>

<div class="container-main container flex flex-row justify-center items-start">
    <ul class="list-group text-white w-96 mr-10">
        <?php
            foreach( $data as $item ) {
                echo '<li id="item-'. $item[ 'id' ] .'" class="p-1 pl-2 mb-1 flex flex-row justify-between items-center border border-white/[.20] rounded">';
                echo    $item[ 'text' ];
                echo    '<div class="control flex flex-row items-center">';
                echo        '<a href="edit.php?id='. $item[ 'id' ] .'" class="edit-link mr-2 p-1 text-sm text-green-700 hover:font-medium no-underline">edit</a>';
                echo        '<a href="delete.php?id='. $item[ 'id' ] .'" class="delete-link p-1 text-gray-400 hover:text-red-500 relative top-0.5 no-underline"><span class="material-symbols-outlined">delete</span></a>';
                echo    '</div>';
                echo '</li>';
            }
        ?>
    </ul>

    <form id="add-form" action="_inc/add-item.php" method="post">
        <p>
            <textarea id="text" class="resize-none w-96 mb-1 p-2 border border-white/[.20] rounded bg-inherit text-white" name="message" placeholder="Do it !" rows="3"></textarea>
        </p>

        <!-- <p>
            <input type="submit" value="add new" class="btn p-2 border border-white/[.20] rounded bg-inherit hover:bg-green-700 text-white hover:cursor-pointer">
        </p> -->
    </form>
</div>

<?php include "_partials/footer.php" ?>