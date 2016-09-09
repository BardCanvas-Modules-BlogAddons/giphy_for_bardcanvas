
tinymce.PluginManager.add('giphy_for_bardcanvas', function(ed, url)
{
    var $strings = $('#giphy_for_bardcanvas_tinymce_strings');
    var _title    = $strings.find('.title').text();
    
    var page_url   = $_FULL_ROOT_PATH + '/giphy_for_bardcanvas/giphypress/html/giphy.html?v=' + $_SCRIPTS_VERSION;
    var plugin_url = $_FULL_ROOT_PATH + '/giphy_for_bardcanvas/giphypress';
    
    ed.addCommand('giphy_for_bardcanvas', function()
    {
        var width  = $(window).width();
        var height = $(window).height();
        if( width  > 482 ) width  = 482;
        if( height > 605 ) height = 605;
        
        ed.windowManager.open({
            title:  _title,
            url:    page_url,
            width:  width,
            height: height
        }, {
            plugin_url: plugin_url,            // Plugin absolute URL
            api_key:    'G46lZIryTGCUU',       // the API key
            api_host:   'http://api.giphy.com' // the API host
        });
    });
    
    // Register example button
    ed.addButton('giphy_for_bardcanvas', {
        title: _title,
        cmd:   'giphy_for_bardcanvas',
        image: $_FULL_ROOT_PATH + '/giphy_for_bardcanvas/media/icon_64x64.png'
    });
});
