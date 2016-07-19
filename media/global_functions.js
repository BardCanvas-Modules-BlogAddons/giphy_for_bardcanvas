/**
 * Global functions for the module
 *
 * @package    BardCanvas
 * @subpackage giphy_for_bardcanvas
 * @author     Alejandro Caballero - lava.caballero@gmail.com
 */

// Buttons collection below the post editor
if( typeof $_POST_ADDON_FUNCTIONS == 'undefined' )
    var $_POST_ADDON_FUNCTIONS = {};

// Callback for the button below the editor
$_POST_ADDON_FUNCTIONS['giphy_for_bardcanvas'] = function($trigger, $form)
{
    var $strings = $('#giphy_for_bardcanvas_tinymce_strings');
    var _title    = $strings.find('.title').text();
    
    var editor_id = $form.find('textarea.tinymce').attr('id');
    var editor    = tinymce.get(editor_id);
    
    var url        = $_FULL_ROOT_PATH + '/giphy_for_bardcanvas/giphypress/html/giphy.html?v=' + $_SCRIPTS_VERSION;
    var plugin_url = $_FULL_ROOT_PATH + '/giphy_for_bardcanvas/giphypress';
    
    editor.windowManager.open({
        title:  _title,
        url:    url,
        width:  482,
        height: 605
    }, {
        plugin_url: plugin_url,            // Plugin absolute URL
        api_key:    'G46lZIryTGCUU',       // the API key
        api_host:   'http://api.giphy.com' // the API host
    });
};