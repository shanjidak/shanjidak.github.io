<script type="text/javascript">
    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'homeshoes',
        clientId: 'YOUR_CLIENT_ID',
        template: '<a href="{{link}}"><img src="{{image}}" /></a>'
    });
    feed.run();
</script>
      