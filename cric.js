    google.load("feeds", "1");
//http://live-feeds.cricbuzz.com/CricbuzzFeed
//http://static.cricinfo.com/rss/livescores.xml
    function initialize() {
      var feed = new google.feeds.Feed("http://live-feeds.cricbuzz.com/CricbuzzFeed");
	  
      feed.setNumEntries(10);
      var count = 1;
      feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed");
          var html = "";
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            html = "<h3>" + count++ + ". <a href='" + entry.link + "'>" + entry.title + "</a></h3>";
            var div = document.createElement("div");
            div.innerHTML = html;
            container.appendChild(div);            
          }
          document.write(html);
        }
      });
    }
    google.setOnLoadCallback(initialize);
	
	