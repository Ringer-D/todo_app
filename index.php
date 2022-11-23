<?php include "./src/header.php" ?>

<div class="page-header text-center mb-12 text-3xl text-white">
    <h1>v3ry gOOd TODO APP</h1>
</div>

<div class="container-main container flex flex-row justify-center items-start">
    <ul class="text-white border border-white/[.20] rounded-sm w-96 mr-10">
        <li class="border-b border-white/[.20] p-1 pl-2">Do it !</li>
        <li class="border-b border-white/[.20] p-1 pl-2">Do it again !</li>
        <li class="p-1 pl-2">Workout</li>
    </ul>

    <form action="add-new.php">
        <p>
            <textarea class="resize-none w-96 rounded-sm" name="message" id="text" placeholder="Do it !" rows="3"></textarea>
        </p>

        <p>
            <input type="submit" value="add new" class="btn p-2 bg-green-600 text-white hover:bg-green-700 hover:cursor-pointer rounded-sm">
        </p>
    </form>
</div>

<?php include "./src/footer.php" ?>