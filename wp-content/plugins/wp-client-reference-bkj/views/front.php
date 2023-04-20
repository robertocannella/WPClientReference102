<?php
/**
 * @author Steve Grunwell <stevegrunwell@gmail.com>
 * @package WordPress
 * @subpackage WP Client Reference
 * @version 0.5
 */
?>

<div class="wrap columns-2 wpclientref">
  <h2><?php echo $this->settings['menu_page_title']; ?></h2>
<p>These <a href="edit.php?post_type=client_reference">articles</a> are handy tips on the management of your website.</p>
  <div id="poststuff" class="metabox-holder has-right-sidebar">

<!--    --><?php //include $this->get_template_path('sidebar.php');


    /*
     * In lieu of exposing an api, we can pass the query object into the data attribute of the html element. In the
     * JS, we can pick up the object for sorting/filtering and displaying
     *
     * */
    $query_results_json = json_encode( $this->get_articles() );

    ?>
      <div id="kb-query-results" data-query-results='<?php echo esc_attr( $query_results_json ); ?>'></div>
      <!--      Pass to react here-->

      <div  id="admin-search-app"></div>

      <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

    <?php
      /*
       * We don't need the following. The logic has been moved to front.js
       *

      */
      ?>

<!--    <div id="post-body">-->
<!--      <div id="post-body-content">-->
<!--          <div id="initialQueryResults" data-query-results=""></div>-->
<!---->
<!--          --><?php //foreach( $this->get_articles() as $post ): setup_postdata($post); ?>
<!---->
<!--        <div class="article">-->
<!--          <h3><a href="--><?php //echo $this->article_permalink($post->ID); ?><!--">--><?php //the_title(); ?><!--</a></h3>-->
<!--          --><?php //the_excerpt(); ?>
<!--        </div>-->
<!---->
<!--      --><?php //endforeach; ?>
<!--      </div>-->
<!--    </div>-->

  </div>
</div>