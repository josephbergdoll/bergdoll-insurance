<?php
/**
 * The template for displaying 404 pages (Not Found)
 *
 * Methods for TimberHelper can be found in the /functions sub-directory
 *
 * @package  WordPress
 * @subpackage  Bergdoll Insurance
 * @since    Bergdoll Insurance 1.0
 */

	$context = Timber::get_context();
	Timber::render('404.twig', $context);