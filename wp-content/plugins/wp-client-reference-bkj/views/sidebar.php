<?php
/**
 * @author Steve Grunwell <stevegrunwell@gmail.com>
 * @package WordPress
 * @subpackage WP Client Reference
 * @version 0.5
 */
?>

<div id="side-info-column" class="inner-sidebar">
  <div id="side-sortables" class="meta-box-sortables">
    <div class="postbox">
      <div class="handlediv" title="Click to toggle"><br /></div>
      <h3 class="hndle"><span>Table of Contents</span></h3>
      <div class="inside">
        <ul class="tableofcontents">
          <li><a href="?page=wpclientref_articles">KB Index</a></li>
		   <li><hr></li>
          <?php echo $this->list_articles(); ?>
        </ul>
      </div>
    </div>
  </div>
</div>

<script>
// indicate which page we are on
	jQuery(function($) {
  $('.tableofcontents a[href="' + location + '"]').addClass('active');
});
</script>
<style>
	.tableofcontents .active {font-weight: bold; text-decoration: none;}
</style>