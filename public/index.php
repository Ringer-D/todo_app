<?php include "../src/header.php" ?>

<ul class="text-white border border-white/[.20] rounded-sm w-96 mr-10">
    <li class="border-b border-white/[.20] p-1 pl-2">Do it !</li>
    <li class="p-1 pl-2">Do it again !</li>
</ul>

<form action="add-new.php">
    <div>
        <textarea class="resize-none w-96 rounded-sm" name="message" id="text" placeholder="Do it !" cols="3"></textarea>
    </div>
</form>

<?php include "../src/footer.php" ?>