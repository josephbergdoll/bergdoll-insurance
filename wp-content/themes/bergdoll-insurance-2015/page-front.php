<?php
/**
 * The Main page of the site
 * Template Name: Home Page
 *
 * @package  WordPress
 * @subpackage  Bergdoll Insurance
 * @since    Bergdoll Insurance 1.0
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;


$quote_states = get_field('quote_states', $post);

if ($quote_states) {
  $context['states'] = $quote_states;
}


Timber::render(array('page-front.twig', 'page.twig'), $context);