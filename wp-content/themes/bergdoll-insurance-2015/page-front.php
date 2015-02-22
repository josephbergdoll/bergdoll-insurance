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

$context['nw_link'] = get_field('getquote_link', $post);

$quote_states = get_field('quote_states', $post);

if ($quote_states) {
  $context['states'] = $quote_states;
}

$agencyID = "id=251b136efacf418d00d1424028079863:lv=1424566119478:ss=1424565737243";
// setcookie("WT_FPC", $agencyID, time()+360000);


Timber::render(array('page-front.twig', 'page.twig'), $context);