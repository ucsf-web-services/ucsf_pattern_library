<?php

/**
 * PHP file using twig to render content
 */

require __DIR__ . '/vendor/autoload.php';
Twig_Autoloader::register();

$loader = new Twig_Loader_Filesystem('twig_templates');
$twig = new Twig_Environment($loader, array(
  'cache' => 'twig_cache',
));

$string = file_get_contents('twig_data/data.json');
$twig_data = json_decode($string, true);

?>
<!DOCTYPE html>
<html>
<head>
  <title>Example Page (PHP)</title>
  <link rel="stylesheet" href="resources/style.css" media="all" />
  <link rel="stylesheet" href="resources/styleguide.css" media="all" />
</head>
<body class="body">
  <div class="header content-container ">
    <?php

    echo $twig->render('header-menu.twig', $twig_data);

    ?>
  </div>
<?php

echo $twig->render('hero-2.twig', $twig_data);

?>
<script src="resources/script.js"></script>
</body>
</html>
