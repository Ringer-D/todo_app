<?php include "_partials/header.php" ?>

<div class="page-header text-center mb-12 text-3xl text-white">
    <h1>v3ry gOOd LOGIN</h1>
</div>

<div class="container-main container flex flex-row justify-center items-start">
    
    <form id="pass-form" action="_inc/pass-check.php" method="post">
        
        <input type="password" name="password" id="pass">

        <input type="submit" value="login" class="btn p-2 border border-white/[.20] rounded bg-inherit hover:bg-green-700 text-white hover:cursor-pointer">
    </form>
</div>

<?php include "_partials/footer.php" ?>