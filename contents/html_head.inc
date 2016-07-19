<?php
/**
 * Styles and scripts for the module 
 *
 * @package    BardCanvas
 * @subpackage giphy_for_bardcanvas
 * @author     Alejandro Caballero - lava.caballero@gmail.com
 *             
 * @var module $this_module
 */

use hng2_base\module;
?>

<!-- giphy embedder for bardcanvas -->

<script type="text/javascript"
        src="<?= $config->full_root_path ?>/<?= $this_module->name ?>/media/global_functions~v<?=$config->scripts_version?>.js"></script>
