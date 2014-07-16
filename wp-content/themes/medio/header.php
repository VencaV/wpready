<!doctype html>
<html lang="cs" dir="ltr" class="no-js">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<title><?php is_front_page() ? bloginfo('description') : wp_title(''); ?> | <?php bloginfo('name'); ?></title>
	<link rel="stylesheet" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>">
	<?php wp_head(); ?>
	<script src="<?php echo get_template_directory_uri(); ?>/js/modules/modernizr.js"></script>
</head>
<body>

	<h2 class="motto"><?php bloginfo( 'description' ); ?></h2>

	<?php
	$defaults = array(
		'theme_location'  => 'main-menu',
		'container'       => false,
		'menu_class'      => false,
		'depth'           => 2,
		'link_after'           => '<span></span>'
	);
	?>
	<?php wp_nav_menu( $defaults ); ?>
