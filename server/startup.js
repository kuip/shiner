Meteor.startup(function() {
	console.log('No of templates in db: ' + Templates.find().count())
	if(Templates.find().count() < 1300) {
		Templates.remove({})
		Frameworks.remove({})

		Frameworks.insert([
			{
			    "_id" : "hNyLNW3sAFSuwPR8L",
			    "name" : "semantic-ui",
			    "root" : "GnomJs47NRMWixR9D",
			    "css" : [ 
			        "/bower_components/semantic/dist/semantic.min.css"
			    ],
			    "js" : [ 
			        "/bower_components/semantic/dist/semantic.min.js"
			    ]
			},
			{
			    "_id" : "ph2HiSsbi6WMB8Qmx",
			    "name" : "bootstrap",
			    "root" : "55e1e0c3ab7a9f060e7eed08",
			    "css" : [ 
			        "/bower_components/bootstrap/dist/css/bootstrap.min.css"
			    ],
			    "js" : [ 
			        "/bower_components/bootstrap/dist/js/bootstrap.min.js"
			    ]
			},
			{
			    "_id" : "Hc2LRfKrSsqnTyc62",
			    "name" : "ionic",
			    "root" : "55e8944a2acaa78e9239ba70",
			    "css" : [ 
			        "/bower_components/ionic/release/css/ionic.min.css"
			    ],
			    "js" : [ 
			        "/bower_components/ionic/release/js/ionic.min.js"
			    ]
			},
			{
			    "_id" : "BvKAiN3qLCdrLExvm",
			    "name" : "uikit",
			    "root" : "55e97bb4ffb70b649e790bea",
			    "css" : [ 
			        "/bower_components/uikit/uikit.min.css"
			    ],
			    "js" : [ 
			        "/bower_components/uikit/uikit.min.js"
			    ]
			}
		])

		Templates.insert(
			[
{
    "_id" : "2Hz5Zx9ZTzqHEHJTb",
    "parent" : "kCQLiL23Z6t4vLEBw",
    "name" : "Content 2",
    "content" : "<img src=\"{{data.image}}\" class=\"ui circular image\">",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "image",
            "value" : "/images/avatar/nan.jpg"
        }
    ]
}

,
{
    "_id" : "2RbRMqQWwrk48sYTC",
    "parent" : "GnomJs47NRMWixR9D",
    "name" : "Globals",
    "isContainer" : false
}

,
{
    "_id" : "4aNHwbBrmShd54NxT",
    "parent" : "kCQLiL23Z6t4vLEBw",
    "name" : "Header3",
    "content" : "<h3 class=\"ui header\">{{data.text}}</h3>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "text",
            "value" : "Header3"
        }
    ]
}

,
{
    "_id" : "8T3oPMBNh2muNvWZu",
    "parent" : "kCQLiL23Z6t4vLEBw",
    "name" : "sub headers",
    "content" : "<h2 class=\"ui sub header\">{{data.text}}</h2>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "text",
            "value" : "Sub header"
        }
    ]
}

,
{
    "_id" : "BMfC9ghEh7y6bFvvE",
    "parent" : "oDoscxjqgevL5vq6i",
    "name" : "fitted",
    "content" : "<div class=\"ui fitted divider\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "DrthAfDttbYrRNTFq",
    "parent" : "kCQLiL23Z6t4vLEBw",
    "name" : "Header5",
    "content" : "<h5 class=\"ui header\">{{data.text}}</h5>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "text",
            "value" : "Header5"
        }
    ]
}

,
{
    "_id" : "FgfJNnvvMc3jRq38D",
    "parent" : "kCQLiL23Z6t4vLEBw",
    "name" : "Content 1",
    "content" : "<h2 class=\"ui header\">\n  <img class=\"ui {{design.adi}}\" src=\"{{data.image}}\">\n  <div class=\"content\">\n    {{{data.text}}}\n  </div>\n</h2>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "image",
            "value" : "/images/icons/schoool.png"
        }, 
        {
            "name" : "text",
            "value" : "Learn More"
        }
    ],
    "design" : [ 
        {
            "name" : "adi",
            "value" : "imageeg"
        }
    ]
}

,
{
    "_id" : "GnomJs47NRMWixR9D",
    "parent" : "WBkkypKLQ2QdQMGF2",
    "name" : "semantic-ui 2",
    "isContainer" : false
}

,
{
    "_id" : "HFg5kyThZpZeT5oge",
    "parent" : "GnomJs47NRMWixR9D",
    "name" : "Views",
    "isContainer" : false
}

,
{
    "_id" : "KSSLGCN6RZgum8jbn",
    "parent" : "oDoscxjqgevL5vq6i",
    "name" : "Vertical divider",
    "content" : "<div class=\"ui vertical divider\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "N4k4hfvgncM2RvyQq",
    "name" : "root",
    "parent" : "",
    "isContainer" : false
}

,
{
    "_id" : "NTgycDiit2iPx7joJ",
    "parent" : "GnomJs47NRMWixR9D",
    "name" : "Modules",
    "isContainer" : false
}

,
{
    "_id" : "QN9Yp4un74SfQsA6u",
    "parent" : "oDoscxjqgevL5vq6i",
    "name" : "General divider",
    "content" : "<div class=\"ui {{design.type}} divider\"></div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "type",
            "value" : "horizontal",
            "choices" : "|horizontal|vertical"
        }
    ]
}

,
{
    "_id" : "WBkkypKLQ2QdQMGF2",
    "parent" : "N4k4hfvgncM2RvyQq",
    "name" : "html5",
    "isContainer" : false
}

,
{
    "_id" : "X9Lwsmh4AMJpwndZM",
    "parent" : "ucW5A4yhnkBqyG5tj",
    "name" : "Icon",
    "isContainer" : false
}

,
{
    "_id" : "XqKgwxS4q73yaNXT9",
    "parent" : "oDoscxjqgevL5vq6i",
    "name" : "Inverted divider",
    "content" : "<div class=\"ui inverted divider\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "ayzKtgHo9k2bhX3jY",
    "parent" : "oDoscxjqgevL5vq6i",
    "name" : "section",
    "content" : "<div class=\"ui section divider\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "bECpaX4TFWj4oYC2Q",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "Simple Image",
    "content" : "<img class=\"ui {{design.size}} image\" src=\"{{data.image}}\">",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "size",
            "value" : "small",
            "choices" : "|mini|tiny|small|medium|large|big|huge|massive"
        }
    ],
    "data" : [ 
        {
            "name" : "image",
            "value" : "/images/wireframe/image.png"
        }
    ]
}

,
{
    "_id" : "bX6RZpkDpbdqNwAdv",
    "parent" : "pzCd4zKtba4vZMBWa",
    "name" : "Configurable",
    "content" : "<button class=\"ui {{design.color}} {{design.inverted}} {{design.basic}} button\">{{data.text}}</button>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "color",
            "value" : "red",
            "choices" : "|red|orange|yellow|olive|green|teal|blue|violet|purple|pink|brown|grey|black"
        }, 
        {
            "name" : "inverted",
            "value" : "inverted",
            "choices" : "|inverted"
        }, 
        {
            "name" : "basic",
            "value" : "basic",
            "choices" : "|basic"
        }
    ],
    "data" : [ 
        {
            "name" : "text",
            "value" : "Button"
        }
    ]
}

,
{
    "_id" : "bfHSreaAXKLc9ksGr",
    "parent" : "ucW5A4yhnkBqyG5tj",
    "name" : "Container",
    "isContainer" : false
}

,
{
    "_id" : "cW4R8CiHKkbnh4JKT",
    "parent" : "HFg5kyThZpZeT5oge",
    "name" : "Ads",
    "isContainer" : false
}

,
{
    "_id" : "dw5xGYSuBtZ9qSSJ7",
    "parent" : "pzCd4zKtba4vZMBWa",
    "name" : "Size",
    "content" : "<button class=\"{{design.size}} ui button\">{{data.text}}</button>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "size",
            "value" : "medium",
            "choices" : "|mini|tiny|small|medium|large|big|huge|massive"
        }
    ],
    "data" : [ 
        {
            "name" : "text",
            "value" : "Size"
        }
    ]
}

,
{
    "_id" : "e9dNGnYkzSmxMjtpT",
    "parent" : "NTgycDiit2iPx7joJ",
    "name" : "Accordion",
    "isContainer" : false
}

,
{
    "_id" : "f3uTeemCRrPK26pEw",
    "parent" : "oDoscxjqgevL5vq6i",
    "name" : "Simple divider",
    "content" : "<div class=\"ui divider\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "fjNf72itjbpb9Lmjk",
    "parent" : "oDoscxjqgevL5vq6i",
    "name" : "clearing",
    "content" : "<div class=\"ui clearing divider\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "gZeBSQyrYejadhLpp",
    "parent" : "oDoscxjqgevL5vq6i",
    "name" : "hidden",
    "content" : "<div class=\"ui hidden divider\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "hn6xZKjyqykoNxrfE",
    "parent" : "bfHSreaAXKLc9ksGr",
    "name" : "simple",
    "content" : "<div class=\"ui four column doubling grid container\">\n  <div class=\"column\">\n    <p></p>\n    <p></p>\n  </div>\n  <div class=\"column\">\n    <p></p>\n    <p></p>\n  </div>\n  <div class=\"column\">\n    <p></p>\n    <p></p>\n  </div>\n  <div class=\"column\">\n    <p></p>\n    <p></p>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "E8ex3Qad9mj7Cg4Gy",
    "parent" : "X9Lwsmh4AMJpwndZM",
    "name" : "Simple icon",
    "content" : "<i class=\"{{data.icon}} icon\"></i>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "icon",
            "value" : "alarm",
            "choices" : "alarm|alarm slash|alarm outline|alarm slash outline|at|browser|bug|calendar outline|calendar|cloud|code|comment|comments|comment outline|comments outline|copyright|dashboard|dropdown|external square|external|eyedropper|feed|find|heartbeat|history|home|idea|inbox|lab|mail|mail outline|mail square|map|options|paint brush|payment|phone|phone square|privacy|protect|search|setting|settings|shop|sidebar|signal|sitemap|tag|tags|tasks|terminal|text telephone|ticket|trophy|wifi|desktop|disk outline|file archive outline|file audio outline|file code outline|file excel outline|file|file image outline|file outline|file pdf outline|file powerpoint outline|file text|file text outline|file video outline|file word outline|folder|folder open|folder open outline|folder outline|game|keyboard|laptop|level down|level up|mobile|power|plug|tablet|trash|trash outline|adjust|add user|add to cart|archive|ban|bookmark|call|call square|cloud download|cloud upload|compress|configure|download|edit|erase|exchange|external share|expand|filter|flag|flag outline|forward mail|hide|in cart|lock|pin|print|random|recycle|refresh|remove bookmark|remove user|repeat|reply all|reply|retweet|send|send outline|share alternate|share alternate square|share|share square|sign in|sign out|theme|translate|undo|unhide|unlock alternate|unlock|upload|wait|wizard|write|write square|announcement|birthday|help|help circle|info|info circle|warning|warning circle|warning sign|child|doctor|handicap|spy|student|user|users|female|gay|heterosexual|intergender|lesbian|male|man|neuter|non binary transgender|transgender|other gender|other gender horizontal|other gender vertical|woman|grid layout|list layout|block layout|zoom|zoom out|resize vertical|resize horizontal|maximize|crop|anchor|bar|bomb|book|bullseye|calculator|checkered flag|cocktail|diamond|fax|fire extinguisher|fire|gift|leaf|legal|lemon|life ring|lightning|magnet|money|moon|plane|puzzle|rain|road|rocket|shipping|soccer|suitcase|sun|travel|treatment|world|asterisk|certificate|circle|circle notched|circle thin|crosshairs|cube|cubes|ellipsis horizontal|ellipsis vertical|quote left|quote right|spinner|square|square outline|add square|check circle|check circle outline|check square|checkmark box|checkmark|minus circle|minus|minus square|minus square outline|move|plus|plus square outline|radio|remove circle|remove circle outline|remove|selected radio|toggle off|toggle on|area chart|bar chart|camera retro|newspaper|film|line chart|photo|pie chart|sound|angle double down|angle double left|angle double right|angle double up|angle down|angle left|angle right|angle up|arrow circle down|arrow circle left|arrow circle outline down|arrow circle outline left|arrow circle outline right|arrow circle outline up|arrow circle right|arrow circle up|arrow down|arrow left|arrow right|arrow up|caret down|caret left|caret right|caret up|chevron circle down|chevron circle left|chevron circle right|chevron circle up|chevron down|chevron left|chevron right|chevron up|long arrow down|long arrow left|long arrow right|long arrow up|pointing down|pointing left|pointing right|pointing up|toggle down|toggle left|toggle right|toggle up|barcode|css3|database|fork|html5|openid|qrcode|rss|rss square|server|empty heart|empty star|frown|heart|meh|smile|star half empty|star half|star|thumbs down|thumbs outline down|thumbs outline up|thumbs up|backward|eject|fast backward|fast forward|forward|music|mute|pause|play|record|step backward|step forward|stop|unmute|video play|video play outline|volume down|volume off|volume up|building|building outline|car|coffee|emergency|first aid|food|h|hospital|location arrow|marker|military|paw|space shuttle|spoon|taxi|tree|university|columns|sort alphabet ascending|sort alphabet descending|sort ascending|sort content ascending|sort content descending|sort descending|sort|sort numeric ascending|sort numeric descending|table|align center|align justify|align left|align right|attach|bold|copy|cut|font|header|indent|italic|linkify|list|ordered list|outdent|paragraph|paste|save|strikethrough|subscript|superscript|text height|text width|underline|unlink|unordered list|dollar|euro|lira|pound|ruble|rupee|won|shekel|yen|american express|discover|google wallet|mastercard|paypal card|paypal|stripe|visa|adn|android|angellist|apple|behance|behance square|bitbucket|bitbucket square|bitcoin|buysellads|codepen|connectdevelop|dashcube|delicious|deviantart|digg|dribbble|dropbox|drupal|empire|facebook|facebook square|flickr|forumbee|foursquare|git|git square|github alternate|github|github square|gittip|google|google plus|google plus square|hacker news|instagram|ioxhost|joomla|jsfiddle|lastfm|lastfm square|leanpub|linkedin|linkedin square|linux|maxcdn|meanpath|medium|pagelines|pied piper alternate|pied piper|pinterest|pinterest square|qq|rebel|reddit|reddit square|renren|sellsy|shirtsinbulk|simplybuilt|skyatlas|skype|slack|slideshare|soundcloud|spotify|stack exchange|stack overflow|steam|steam square|stumbleupon circle|stumbleupon|tencent weibo|trello|tumblr|tumblr square|twitch|twitter|twitter square|viacoin|vimeo|vine|vk|wechat|weibo|whatsapp|windows|wordpress|xing|xing square|yahoo|yelp|youtube|youtube play|youtube square"
        }
    ]
}

,
{
    "_id" : "KFkfmRFS5xAaks2qP",
    "parent" : "kCQLiL23Z6t4vLEBw",
    "name" : "Icon centered header",
    "content" : "<h2 class=\"ui {{design.align}} aligned icon header\">\n  <i class=\"circular {{design.icon}} icon\"></i>\n {{data.text}}\n</h2>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "icon",
            "value" : "users",
            "choices" : "alarm|alarm slash|alarm outline|alarm slash outline|at|browser|bug|calendar outline|calendar|cloud|code|comment|comments|comment outline|comments outline|copyright|dashboard|dropdown|external square|external|eyedropper|feed|find|heartbeat|history|home|idea|inbox|lab|mail|mail outline|mail square|map|options|paint brush|payment|phone|phone square|privacy|protect|search|setting|settings|shop|sidebar|signal|sitemap|tag|tags|tasks|terminal|text telephone|ticket|trophy|wifi|desktop|disk outline|file archive outline|file audio outline|file code outline|file excel outline|file|file image outline|file outline|file pdf outline|file powerpoint outline|file text|file text outline|file video outline|file word outline|folder|folder open|folder open outline|folder outline|game|keyboard|laptop|level down|level up|mobile|power|plug|tablet|trash|trash outline|adjust|add user|add to cart|archive|ban|bookmark|call|call square|cloud download|cloud upload|compress|configure|download|edit|erase|exchange|external share|expand|filter|flag|flag outline|forward mail|hide|in cart|lock|pin|print|random|recycle|refresh|remove bookmark|remove user|repeat|reply all|reply|retweet|send|send outline|share alternate|share alternate square|share|share square|sign in|sign out|theme|translate|undo|unhide|unlock alternate|unlock|upload|wait|wizard|write|write square|announcement|birthday|help|help circle|info|info circle|warning|warning circle|warning sign|child|doctor|handicap|spy|student|user|users|female|gay|heterosexual|intergender|lesbian|male|man|neuter|non binary transgender|transgender|other gender|other gender horizontal|other gender vertical|woman|grid layout|list layout|block layout|zoom|zoom out|resize vertical|resize horizontal|maximize|crop|anchor|bar|bomb|book|bullseye|calculator|checkered flag|cocktail|diamond|fax|fire extinguisher|fire|gift|leaf|legal|lemon|life ring|lightning|magnet|money|moon|plane|puzzle|rain|road|rocket|shipping|soccer|suitcase|sun|travel|treatment|world|asterisk|certificate|circle|circle notched|circle thin|crosshairs|cube|cubes|ellipsis horizontal|ellipsis vertical|quote left|quote right|spinner|square|square outline|add square|check circle|check circle outline|check square|checkmark box|checkmark|minus circle|minus|minus square|minus square outline|move|plus|plus square outline|radio|remove circle|remove circle outline|remove|selected radio|toggle off|toggle on|area chart|bar chart|camera retro|newspaper|film|line chart|photo|pie chart|sound|angle double down|angle double left|angle double right|angle double up|angle down|angle left|angle right|angle up|arrow circle down|arrow circle left|arrow circle outline down|arrow circle outline left|arrow circle outline right|arrow circle outline up|arrow circle right|arrow circle up|arrow down|arrow left|arrow right|arrow up|caret down|caret left|caret right|caret up|chevron circle down|chevron circle left|chevron circle right|chevron circle up|chevron down|chevron left|chevron right|chevron up|long arrow down|long arrow left|long arrow right|long arrow up|pointing down|pointing left|pointing right|pointing up|toggle down|toggle left|toggle right|toggle up|barcode|css3|database|fork|html5|openid|qrcode|rss|rss square|server|empty heart|empty star|frown|heart|meh|smile|star half empty|star half|star|thumbs down|thumbs outline down|thumbs outline up|thumbs up|backward|eject|fast backward|fast forward|forward|music|mute|pause|play|record|step backward|step forward|stop|unmute|video play|video play outline|volume down|volume off|volume up|building|building outline|car|coffee|emergency|first aid|food|h|hospital|location arrow|marker|military|paw|space shuttle|spoon|taxi|tree|university|columns|sort alphabet ascending|sort alphabet descending|sort ascending|sort content ascending|sort content descending|sort descending|sort|sort numeric ascending|sort numeric descending|table|align center|align justify|align left|align right|attach|bold|copy|cut|font|header|indent|italic|linkify|list|ordered list|outdent|paragraph|paste|save|strikethrough|subscript|superscript|text height|text width|underline|unlink|unordered list|dollar|euro|lira|pound|ruble|rupee|won|shekel|yen|american express|discover|google wallet|mastercard|paypal card|paypal|stripe|visa|adn|android|angellist|apple|behance|behance square|bitbucket|bitbucket square|bitcoin|buysellads|codepen|connectdevelop|dashcube|delicious|deviantart|digg|dribbble|dropbox|drupal|empire|facebook|facebook square|flickr|forumbee|foursquare|git|git square|github alternate|github|github square|gittip|google|google plus|google plus square|hacker news|instagram|ioxhost|joomla|jsfiddle|lastfm|lastfm square|leanpub|linkedin|linkedin square|linux|maxcdn|meanpath|medium|pagelines|pied piper alternate|pied piper|pinterest|pinterest square|qq|rebel|reddit|reddit square|renren|sellsy|shirtsinbulk|simplybuilt|skyatlas|skype|slack|slideshare|soundcloud|spotify|stack exchange|stack overflow|steam|steam square|stumbleupon circle|stumbleupon|tencent weibo|trello|tumblr|tumblr square|twitch|twitter|twitter square|viacoin|vimeo|vine|vk|wechat|weibo|whatsapp|windows|wordpress|xing|xing square|yahoo|yelp|youtube|youtube play|youtube square"
        }, 
        {
            "name" : "align",
            "value" : "center",
            "choices" : "center|right|left|justify"
        }
    ],
    "data" : [ 
        {
            "name" : "text",
            "value" : "Friends"
        }
    ]
}

,
{
    "_id" : "iCD8kCB7k7oYtXA8W",
    "parent" : "ivrYvXcEFhZxr937G",
    "name" : "Breadcrumb",
    "isContainer" : false
}

,
{
    "_id" : "ivrYvXcEFhZxr937G",
    "parent" : "GnomJs47NRMWixR9D",
    "name" : "Collections",
    "isContainer" : false
}

,
{
    "_id" : "kCQLiL23Z6t4vLEBw",
    "parent" : "ucW5A4yhnkBqyG5tj",
    "name" : "Header",
    "isContainer" : false
}

,
{
    "_id" : "kszkTBr7Fbi3yZEGz",
    "parent" : "kCQLiL23Z6t4vLEBw",
    "name" : "Icon header",
    "content" : "<h2 class=\"ui icon header\">\n  <i class=\"{{design.icon}} icon\"></i>\n  <div class=\"content\">\n   {{data.text1}}\n    <div class=\"sub header\">{{data.text2}}</div>\n  </div>\n</h2>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "icon",
            "value" : "settings",
            "choices" : "alarm|alarm slash|alarm outline|alarm slash outline|at|browser|bug|calendar outline|calendar|cloud|code|comment|comments|comment outline|comments outline|copyright|dashboard|dropdown|external square|external|eyedropper|feed|find|heartbeat|history|home|idea|inbox|lab|mail|mail outline|mail square|map|options|paint brush|payment|phone|phone square|privacy|protect|search|setting|settings|shop|sidebar|signal|sitemap|tag|tags|tasks|terminal|text telephone|ticket|trophy|wifi|desktop|disk outline|file archive outline|file audio outline|file code outline|file excel outline|file|file image outline|file outline|file pdf outline|file powerpoint outline|file text|file text outline|file video outline|file word outline|folder|folder open|folder open outline|folder outline|game|keyboard|laptop|level down|level up|mobile|power|plug|tablet|trash|trash outline|adjust|add user|add to cart|archive|ban|bookmark|call|call square|cloud download|cloud upload|compress|configure|download|edit|erase|exchange|external share|expand|filter|flag|flag outline|forward mail|hide|in cart|lock|pin|print|random|recycle|refresh|remove bookmark|remove user|repeat|reply all|reply|retweet|send|send outline|share alternate|share alternate square|share|share square|sign in|sign out|theme|translate|undo|unhide|unlock alternate|unlock|upload|wait|wizard|write|write square|announcement|birthday|help|help circle|info|info circle|warning|warning circle|warning sign|child|doctor|handicap|spy|student|user|users|female|gay|heterosexual|intergender|lesbian|male|man|neuter|non binary transgender|transgender|other gender|other gender horizontal|other gender vertical|woman|grid layout|list layout|block layout|zoom|zoom out|resize vertical|resize horizontal|maximize|crop|anchor|bar|bomb|book|bullseye|calculator|checkered flag|cocktail|diamond|fax|fire extinguisher|fire|gift|leaf|legal|lemon|life ring|lightning|magnet|money|moon|plane|puzzle|rain|road|rocket|shipping|soccer|suitcase|sun|travel|treatment|world|asterisk|certificate|circle|circle notched|circle thin|crosshairs|cube|cubes|ellipsis horizontal|ellipsis vertical|quote left|quote right|spinner|square|square outline|add square|check circle|check circle outline|check square|checkmark box|checkmark|minus circle|minus|minus square|minus square outline|move|plus|plus square outline|radio|remove circle|remove circle outline|remove|selected radio|toggle off|toggle on|area chart|bar chart|camera retro|newspaper|film|line chart|photo|pie chart|sound|angle double down|angle double left|angle double right|angle double up|angle down|angle left|angle right|angle up|arrow circle down|arrow circle left|arrow circle outline down|arrow circle outline left|arrow circle outline right|arrow circle outline up|arrow circle right|arrow circle up|arrow down|arrow left|arrow right|arrow up|caret down|caret left|caret right|caret up|chevron circle down|chevron circle left|chevron circle right|chevron circle up|chevron down|chevron left|chevron right|chevron up|long arrow down|long arrow left|long arrow right|long arrow up|pointing down|pointing left|pointing right|pointing up|toggle down|toggle left|toggle right|toggle up|barcode|css3|database|fork|html5|openid|qrcode|rss|rss square|server|empty heart|empty star|frown|heart|meh|smile|star half empty|star half|star|thumbs down|thumbs outline down|thumbs outline up|thumbs up|backward|eject|fast backward|fast forward|forward|music|mute|pause|play|record|step backward|step forward|stop|unmute|video play|video play outline|volume down|volume off|volume up|building|building outline|car|coffee|emergency|first aid|food|h|hospital|location arrow|marker|military|paw|space shuttle|spoon|taxi|tree|university|columns|sort alphabet ascending|sort alphabet descending|sort ascending|sort content ascending|sort content descending|sort descending|sort|sort numeric ascending|sort numeric descending|table|align center|align justify|align left|align right|attach|bold|copy|cut|font|header|indent|italic|linkify|list|ordered list|outdent|paragraph|paste|save|strikethrough|subscript|superscript|text height|text width|underline|unlink|unordered list|dollar|euro|lira|pound|ruble|rupee|won|shekel|yen|american express|discover|google wallet|mastercard|paypal card|paypal|stripe|visa|adn|android|angellist|apple|behance|behance square|bitbucket|bitbucket square|bitcoin|buysellads|codepen|connectdevelop|dashcube|delicious|deviantart|digg|dribbble|dropbox|drupal|empire|facebook|facebook square|flickr|forumbee|foursquare|git|git square|github alternate|github|github square|gittip|google|google plus|google plus square|hacker news|instagram|ioxhost|joomla|jsfiddle|lastfm|lastfm square|leanpub|linkedin|linkedin square|linux|maxcdn|meanpath|medium|pagelines|pied piper alternate|pied piper|pinterest|pinterest square|qq|rebel|reddit|reddit square|renren|sellsy|shirtsinbulk|simplybuilt|skyatlas|skype|slack|slideshare|soundcloud|spotify|stack exchange|stack overflow|steam|steam square|stumbleupon circle|stumbleupon|tencent weibo|trello|tumblr|tumblr square|twitch|twitter|twitter square|viacoin|vimeo|vine|vk|wechat|weibo|whatsapp|windows|wordpress|xing|xing square|yahoo|yelp|youtube|youtube play|youtube square"
        }
    ],
    "data" : [ 
        {
            "name" : "text1",
            "value" : "Account settings"
        }, 
        {
            "name" : "text2",
            "value" : "Manage account prefs"
        }
    ]
}

,
{
    "_id" : "mGvYk5zwydk2p7EDX",
    "parent" : "kCQLiL23Z6t4vLEBw",
    "name" : "sub header 2",
    "content" : "<div class=\"ui sub header\">{{data.text}}</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "text",
            "value" : "sub header 2"
        }
    ]
}

,
{
    "_id" : "mfoD4keDSR7KSwKW3",
    "parent" : "ucW5A4yhnkBqyG5tj",
    "name" : "Image",
    "isContainer" : false
}

,
{
    "_id" : "oDoscxjqgevL5vq6i",
    "parent" : "ucW5A4yhnkBqyG5tj",
    "name" : "Divider",
    "isContainer" : false
}

,
{
    "_id" : "oJ5sqTQGGMLwdoHy6",
    "parent" : "kCQLiL23Z6t4vLEBw",
    "name" : "Simple header 1",
    "content" : "<h1 class=\"ui header\">{{data.text}}</h1>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "text",
            "value" : "Header1"
        }
    ]
}

,
{
    "_id" : "oWi65QM6KcxxAuHnR",
    "parent" : "ucW5A4yhnkBqyG5tj",
    "name" : "Flag",
    "isContainer" : false
}

,
{
    "_id" : "owBcdwmArhRZPMwrx",
    "parent" : "oWi65QM6KcxxAuHnR",
    "name" : "Simple",
    "content" : "<i class=\"{{design.country}} flag\"></i>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "country",
            "value" : "fr",
            "choices" : "ad|ae|af|ag|ai|al|am|an|ao|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw"
        }
    ]
}

,
{
    "_id" : "ptTR8MSgsGWpBMpL6",
    "parent" : "pzCd4zKtba4vZMBWa",
    "name" : "Circular",
    "content" : "<button class=\"circular ui icon button\">\n  <i class=\"icon {{design.icon}}\"></i>\n</button>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "icon",
            "value" : "settings",
            "choices" : "alarm|alarm slash|alarm outline|alarm slash outline|at|browser|bug|calendar outline|calendar|cloud|code|comment|comments|comment outline|comments outline|copyright|dashboard|dropdown|external square|external|eyedropper|feed|find|heartbeat|history|home|idea|inbox|lab|mail|mail outline|mail square|map|options|paint brush|payment|phone|phone square|privacy|protect|search|setting|settings|shop|sidebar|signal|sitemap|tag|tags|tasks|terminal|text telephone|ticket|trophy|wifi|desktop|disk outline|file archive outline|file audio outline|file code outline|file excel outline|file|file image outline|file outline|file pdf outline|file powerpoint outline|file text|file text outline|file video outline|file word outline|folder|folder open|folder open outline|folder outline|game|keyboard|laptop|level down|level up|mobile|power|plug|tablet|trash|trash outline|adjust|add user|add to cart|archive|ban|bookmark|call|call square|cloud download|cloud upload|compress|configure|download|edit|erase|exchange|external share|expand|filter|flag|flag outline|forward mail|hide|in cart|lock|pin|print|random|recycle|refresh|remove bookmark|remove user|repeat|reply all|reply|retweet|send|send outline|share alternate|share alternate square|share|share square|sign in|sign out|theme|translate|undo|unhide|unlock alternate|unlock|upload|wait|wizard|write|write square|announcement|birthday|help|help circle|info|info circle|warning|warning circle|warning sign|child|doctor|handicap|spy|student|user|users|female|gay|heterosexual|intergender|lesbian|male|man|neuter|non binary transgender|transgender|other gender|other gender horizontal|other gender vertical|woman|grid layout|list layout|block layout|zoom|zoom out|resize vertical|resize horizontal|maximize|crop|anchor|bar|bomb|book|bullseye|calculator|checkered flag|cocktail|diamond|fax|fire extinguisher|fire|gift|leaf|legal|lemon|life ring|lightning|magnet|money|moon|plane|puzzle|rain|road|rocket|shipping|soccer|suitcase|sun|travel|treatment|world|asterisk|certificate|circle|circle notched|circle thin|crosshairs|cube|cubes|ellipsis horizontal|ellipsis vertical|quote left|quote right|spinner|square|square outline|add square|check circle|check circle outline|check square|checkmark box|checkmark|minus circle|minus|minus square|minus square outline|move|plus|plus square outline|radio|remove circle|remove circle outline|remove|selected radio|toggle off|toggle on|area chart|bar chart|camera retro|newspaper|film|line chart|photo|pie chart|sound|angle double down|angle double left|angle double right|angle double up|angle down|angle left|angle right|angle up|arrow circle down|arrow circle left|arrow circle outline down|arrow circle outline left|arrow circle outline right|arrow circle outline up|arrow circle right|arrow circle up|arrow down|arrow left|arrow right|arrow up|caret down|caret left|caret right|caret up|chevron circle down|chevron circle left|chevron circle right|chevron circle up|chevron down|chevron left|chevron right|chevron up|long arrow down|long arrow left|long arrow right|long arrow up|pointing down|pointing left|pointing right|pointing up|toggle down|toggle left|toggle right|toggle up|barcode|css3|database|fork|html5|openid|qrcode|rss|rss square|server|empty heart|empty star|frown|heart|meh|smile|star half empty|star half|star|thumbs down|thumbs outline down|thumbs outline up|thumbs up|backward|eject|fast backward|fast forward|forward|music|mute|pause|play|record|step backward|step forward|stop|unmute|video play|video play outline|volume down|volume off|volume up|building|building outline|car|coffee|emergency|first aid|food|h|hospital|location arrow|marker|military|paw|space shuttle|spoon|taxi|tree|university|columns|sort alphabet ascending|sort alphabet descending|sort ascending|sort content ascending|sort content descending|sort descending|sort|sort numeric ascending|sort numeric descending|table|align center|align justify|align left|align right|attach|bold|copy|cut|font|header|indent|italic|linkify|list|ordered list|outdent|paragraph|paste|save|strikethrough|subscript|superscript|text height|text width|underline|unlink|unordered list|dollar|euro|lira|pound|ruble|rupee|won|shekel|yen|american express|discover|google wallet|mastercard|paypal card|paypal|stripe|visa|adn|android|angellist|apple|behance|behance square|bitbucket|bitbucket square|bitcoin|buysellads|codepen|connectdevelop|dashcube|delicious|deviantart|digg|dribbble|dropbox|drupal|empire|facebook|facebook square|flickr|forumbee|foursquare|git|git square|github alternate|github|github square|gittip|google|google plus|google plus square|hacker news|instagram|ioxhost|joomla|jsfiddle|lastfm|lastfm square|leanpub|linkedin|linkedin square|linux|maxcdn|meanpath|medium|pagelines|pied piper alternate|pied piper|pinterest|pinterest square|qq|rebel|reddit|reddit square|renren|sellsy|shirtsinbulk|simplybuilt|skyatlas|skype|slack|slideshare|soundcloud|spotify|stack exchange|stack overflow|steam|steam square|stumbleupon circle|stumbleupon|tencent weibo|trello|tumblr|tumblr square|twitch|twitter|twitter square|viacoin|vimeo|vine|vk|wechat|weibo|whatsapp|windows|wordpress|xing|xing square|yahoo|yelp|youtube|youtube play|youtube square"
        }
    ]
}

,
{
    "_id" : "pwyz8mMZjZagTHkfz",
    "parent" : "kCQLiL23Z6t4vLEBw",
    "name" : "Header4",
    "content" : "<h4 class=\"ui header\">{{data.text}}</h4>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "text",
            "value" : "Header4"
        }
    ]
}

,
{
    "_id" : "pzCd4zKtba4vZMBWa",
    "parent" : "ucW5A4yhnkBqyG5tj",
    "name" : "Button",
    "isContainer" : false
}

,
{
    "_id" : "sQTtoop8Bi3ipMAHL",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "image div",
    "content" : "<div class=\"ui {{design.size}} image\">\n  <img src=\"{{data.image}}\">\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "size",
            "value" : "small",
            "choices" : "|mini|tiny|small|medium|large|big|huge|massive"
        }
    ],
    "data" : [ 
        {
            "name" : "image",
            "value" : "/images/wireframe/image.png"
        }
    ]
}

,
{
    "_id" : "seGBoAPDDqDLySofj",
    "parent" : "kCQLiL23Z6t4vLEBw",
    "name" : "Header 2",
    "content" : "<h2 class=\"ui header\">{{data.text}}</h2>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "text",
            "value" : "Header2"
        }
    ]
}

,
{
    "_id" : "tBisA5L4foASpJh8h",
    "parent" : "oDoscxjqgevL5vq6i",
    "name" : "Horizontal divider",
    "content" : "<div class=\"ui horizontal divider\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "ucW5A4yhnkBqyG5tj",
    "parent" : "GnomJs47NRMWixR9D",
    "name" : "Elements",
    "isContainer" : false
}

,
{
    "_id" : "zcAfhtGLHi3Wh9shQ",
    "parent" : "kCQLiL23Z6t4vLEBw",
    "name" : "Header6",
    "content" : "<h6 class=\"ui header\">{{data.text}}</h6>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "text",
            "value" : "Header6"
        }
    ]
}

,
{
    "_id" : "zdZbDCxSoPnt47Wmb",
    "parent" : "kCQLiL23Z6t4vLEBw",
    "name" : "Sized header",
    "content" : "<div class=\"ui {{design.size}} header\">{{data.text}}</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "size",
            "value" : "huge",
            "choices" : "|huge|large|medium|small|tiny"
        }
    ],
    "data" : [ 
        {
            "name" : "text",
            "value" : "Sized Header"
        }
    ]
}

,
{
    "_id" : "RA5g3mqyAhyYC6ZSM",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "Image svg",
    "content" : "<div class=\"ui small image\">\n  <svg width=\"150\" height=\"150\">\n    <image xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"{{data.image}}\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"></image>\n  </svg>\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "image",
            "value" : "/images/wireframe/image.png"
        }
    ]
}

,
{
    "_id" : "DuTnrQKJz7twbgCZS",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "Image Hidden",
    "content" : "<img class=\"hidden ui image\" src=\"{{data.image}}\">",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "image",
            "value" : "/images/wireframe/image.png"
        }
    ]
}

,
{
    "_id" : "QrhsGLJLKM3N6uPRZ",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "Image fluid",
    "content" : "<img class=\"ui fluid image\" src=\"{{data.image}}\">",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "image",
            "value" : "/images/wireframe/image.png"
        }
    ]
}

,
{
    "_id" : "BroQfsDN2Gw95G8oh",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "Image vertically aligned",
    "content" : "<img class=\"ui {{designed.align}} aligned {{design.size}} image\" src=\"{{data.image}}\">\n<span>{{data.text}}</span>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "align",
            "value" : "top|middle|bottom"
        }, 
        {
            "name" : "size",
            "value" : "medium",
            "choices" : "|mini|tiny|small|medium|large|big|huge|massive"
        }
    ],
    "data" : [ 
        {
            "name" : "text",
            "value" : "Text paragraph"
        }, 
        {
            "name" : "image",
            "value" : "/images/wireframe/square-image.png"
        }
    ]
}

,
{
    "_id" : "2vwbScZqEuNo348Bt",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "Image centered",
    "content" : "<div class=\"ui segment\"><img class=\"ui centered medium image\" src=\"/images/wireframe/image.png\"><p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p><p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p><img class=\"ui small centered image\" src=\"/images/wireframe/text-image.png\"><p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p></div>",
    "isContainer" : false
}

,
{
    "_id" : "od6W52FuefPt5SsMD",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "Image spaced",
    "content" : "<div class=\"ui segment\">\n  <p>Te eum doming eirmod, nominati pertinacia <img class=\"ui mini spaced image\" src=\"/images/wireframe/image.png\"> argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "M6434YQ3cLprY5mbg",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "Image class",
    "content" : "<p><img class=\"ui mini right spaced image\" src=\"/images/wireframe/image.png\">Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>\n<p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.<img class=\"ui mini left spaced image\" src=\"/images/wireframe/image.png\"></p>",
    "isContainer" : false
}

,
{
    "_id" : "XtXvnfSftrMHaemjX",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "Image floated",
    "content" : "<div class=\"ui segment\"><img class=\"ui small left floated image\" src=\"/images/wireframe/text-image.png\"><p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p><img class=\"ui small right floated image\" src=\"/images/wireframe/text-image.png\"><p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p><p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p></div>",
    "isContainer" : false
}

,
{
    "_id" : "YHXRLWrPTu7ATYxtr",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "Image size",
    "content" : "<img class=\"ui {{design.size}} image\" src=\"{{data.image}}\">",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "size",
            "value" : "medium",
            "choices" : "|mini|tiny|small|medium|large|big|huge|massive"
        }
    ],
    "data" : [ 
        {
            "name" : "image",
            "value" : "/images/wireframe/image.png"
        }
    ]
}

,
{
    "_id" : "GTeyPvDMkyKbRFK6G",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "Group size",
    "content" : "<div class=\"ui tiny images\">\n  <img class=\"ui image\" src=\"/images/wireframe/image.png\">\n  <img class=\"ui image\" src=\"/images/wireframe/image.png\">\n  <img class=\"ui image\" src=\"/images/wireframe/image.png\">\n  <img class=\"ui image\" src=\"/images/wireframe/image.png\">\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ypwvgskevJEnGyvqj",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "Group size 1",
    "content" : "<div class=\"ui small images\">\n  <img src=\"/images/wireframe/image.png\">\n  <img src=\"/images/wireframe/image.png\">\n  <img src=\"/images/wireframe/image.png\">\n  <img src=\"/images/wireframe/image.png\">\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "PpKsof4bEB88ZnnAf",
    "parent" : "ucW5A4yhnkBqyG5tj",
    "name" : "Input",
    "isContainer" : false
}

,
{
    "_id" : "wReh7oYCgSxkq5hPQ",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "States focus",
    "content" : "<div class=\"ui input focus\">\n  <input type=\"text\" placeholder=\"Search...\">\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "CnPd8iYjWpPb6KGpn",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Loading",
    "content" : "<div class=\"ui left icon input loading\">\n  <input type=\"text\" placeholder=\"Search...\">\n  <i class=\"search icon\"></i>\n</div>\n<div class=\"ui divider\"></div>\n<div class=\"ui icon input loading\">\n  <input type=\"text\" placeholder=\"Search...\">\n  <i class=\"search icon\"></i>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "rGX4zZEP63LisuCMd",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Error",
    "content" : "<div class=\"ui input error\">\n  <input type=\"text\" placeholder=\"Search...\">\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "7RzDBTNDmaNTaGAQz",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Variations icon",
    "content" : "<div class=\"ui icon input\">\n  <input type=\"text\" placeholder=\"Search...\">\n  <i class=\"search icon\"></i>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "B6QEJYHs3XWWjfykX",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Input search",
    "content" : "<div class=\"ui left icon input\">\n  <input type=\"text\" placeholder=\"Search users...\">\n  <i class=\"users icon\"></i>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "XNQCqsezCtEJu2Xsp",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Input search 1",
    "content" : "<div class=\"ui icon input\">\n  <input type=\"text\" placeholder=\"Search...\">\n  <i class=\"circular search link icon\"></i>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "pvEeXPv3H2SrpPpcR",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Input search 2",
    "content" : "<div class=\"ui icon input\">\n  <input type=\"text\" placeholder=\"Search...\">\n  <i class=\"inverted circular search link icon\"></i>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "QEcYPAwuxLtRrPTQ6",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Input labeled",
    "content" : "<div class=\"ui labeled input\">\n  <div class=\"ui label\">\n    http://\n  </div>\n  <input type=\"text\" placeholder=\"mysite.com\">\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ndexZ5xrBuZTd4JFX",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Input right labeled",
    "content" : "<div class=\"ui right labeled input\">\n  <input type=\"text\" placeholder=\"Find domain\">\n  <div class=\"ui dropdown label\">\n    <div class=\"text\">.com</div>\n    <i class=\"dropdown icon\"></i>\n    <div class=\"menu\">\n      <div class=\"item\">.com</div>\n      <div class=\"item\">.net</div>\n      <div class=\"item\">.org</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "BBcQ7JejTmmmTRxSW",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Enter tags",
    "content" : "<div class=\"ui right labeled left icon input\">\n  <i class=\"tags icon\"></i>\n  <input type=\"text\" placeholder=\"Enter tags\">\n  <a class=\"ui tag label\">\n    Add Tag\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "uFDcwZ7oxk7jGk2iT",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Search",
    "content" : "<div class=\"ui left corner labeled input\">\n  <input type=\"text\" placeholder=\"Search...\">\n  <div class=\"ui left corner label\">\n    <i class=\"asterisk icon\"></i>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "R2xQ4aDfKh9yZR4XK",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Asterisk",
    "content" : "<div class=\"ui left corner labeled input\">\n  <input type=\"text\" placeholder=\"Search...\">\n  <div class=\"ui left corner label\">\n    <i class=\"asterisk icon\"></i>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "dBJTQjetPLYe8ePij",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Placeholder",
    "content" : "<div class=\"ui corner labeled input\">\n  <input type=\"text\" placeholder=\"Search...\">\n  <div class=\"ui corner label\">\n    <i class=\"asterisk icon\"></i>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ybDejRirDY4wfgaHM",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Action",
    "content" : "<div class=\"ui action input\">\n  <input type=\"text\" placeholder=\"Search...\">\n  <button class=\"ui button\">Search</button>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "h4AHoZag9xzFtd7Sz",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Checkout",
    "content" : "<div class=\"ui left action input\">\n  <button class=\"ui teal labeled icon button\">\n    <i class=\"cart icon\"></i>\n    Checkout\n  </button>\n  <input type=\"text\" value=\"$52.03\">\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "jME64WWyvXzXxk2cj",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "This page",
    "content" : "<div class=\"ui right action left icon input\">\n  <i class=\"search icon\"></i>\n  <input type=\"text\" placeholder=\"Search\">\n  <div class=\"ui dropdown button\">\n    <div class=\"text\">This Page</div>\n    <i class=\"dropdown icon\"></i>\n    <div class=\"menu\">\n      <div class=\"item\">This Organization</div>\n      <div class=\"item\">Entire Site</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ocwxeuCeaSkids2oo",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "All search",
    "content" : "<div class=\"ui action input\">\n  <input type=\"text\" placeholder=\"Search...\">\n  <select class=\"ui compact selection dropdown\">\n    <option value=\"all\">All</option>\n    <option value=\"articles\">Articles</option>\n    <option value=\"products\">Products</option>\n  </select>\n  <div type=\"submit\" class=\"ui button\">Search</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Z5ABnwcpKp8eqP9K6",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Copy",
    "content" : "<div class=\"ui action input\">\n  <input type=\"text\" value=\"http://ww.short.url/c0opq\">\n  <button class=\"ui teal right labeled icon button\">\n    <i class=\"copy icon\"></i>\n    Copy\n  </button>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "u773a9JhKko6LC32e",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Action",
    "content" : "<div class=\"ui action input\">\n  <input type=\"text\" placeholder=\"Search...\">\n  <button class=\"ui icon button\">\n    <i class=\"search icon\"></i>\n  </button>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "SccjfqJZCmKzb4BXq",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Transparent",
    "content" : "<div class=\"ui transparent input\">\n  <input type=\"text\" placeholder=\"Search...\">\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "xjTmMGtwxNJq8MBSf",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Transparent icon",
    "content" : "<div class=\"ui transparent icon input\">\n  <input type=\"text\" placeholder=\"Search...\">\n  <i class=\"search icon\"></i>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Z2EsTZND9BEFagA5x",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Transparent left",
    "content" : "<div class=\"ui transparent left icon input\">\n  <input type=\"text\" placeholder=\"Search...\">\n  <i class=\"search icon\"></i>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "yw69o7Stw5bnJMT2h",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Inverted",
    "content" : "<div class=\"ui inverted segment\">\n  <div class=\"ui inverted input\">\n    <input type=\"text\" placeholder=\"Search...\">\n  </div>\n  <div class=\"ui inverted divider\"></div>\n  <div class=\"ui inverted left icon input\">\n    <input type=\"text\" placeholder=\"Search...\">\n    <i class=\"search icon\"></i>\n  </div>\n  <div class=\"ui inverted divider\"></div>\n  <div class=\"ui inverted transparent icon input\">\n    <input type=\"text\" placeholder=\"Search...\">\n    <i class=\"search icon\"></i>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "cLTF7WjGQusRvaGjK",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Fluid",
    "content" : "<div class=\"ui fluid icon input\">\n  <input type=\"text\" placeholder=\"Search a very wide input...\">\n  <i class=\"search icon\"></i>\n</div>\n<div class=\"ui fluid action input\">\n  <input type=\"text\" placeholder=\"Search...\">\n  <div class=\"ui button\">Search</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "7ifNXTyXZtrjBPBFs",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Size",
    "content" : "<div class=\"ui mini icon input\">\n  <input type=\"text\" placeholder=\"Search mini...\">\n  <i class=\"search icon\"></i>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "drSuAQWRWM2vStE8C",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Small",
    "content" : "<div class=\"ui small icon input\">\n  <input type=\"text\" placeholder=\"Search small...\">\n  <i class=\"search icon\"></i>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "2asHHLGEQei7ZnKNM",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Large",
    "content" : "<div class=\"ui large icon input\">\n  <input type=\"text\" placeholder=\"Search large...\">\n  <i class=\"search icon\"></i>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "rs5kjpsmzyjmmrSsx",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Big",
    "content" : "<div class=\"ui big icon input\">\n  <input type=\"text\" placeholder=\"Search big...\">\n  <i class=\"search icon\"></i>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "rkZ6Hk5icuzDGeTjh",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Huge",
    "content" : "<div class=\"ui huge icon input\">\n  <input type=\"text\" placeholder=\"Search huge...\">\n  <i class=\"search icon\"></i>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "7ALMzQi9GnjhpFTY6",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Massive",
    "content" : "<div class=\"ui massive icon input\">\n  <input type=\"text\" placeholder=\"Search massive...\">\n  <i class=\"search icon\"></i>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "eAvaA2dRMbEjK2qgz",
    "parent" : "ucW5A4yhnkBqyG5tj",
    "name" : "Label",
    "isContainer" : false
}

,
{
    "_id" : "MMukuyZB44XSsXe6u",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Types",
    "content" : "<div class=\"ui label\">\n  <i class=\"mail icon\"></i> 23\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "kBTdqZTSFc9qLCYMP",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Image",
    "content" : "<a class=\"ui image label\">\n  <img src=\"/images/avatar/small/joe.jpg\">\n  Joe\n</a>\n<a class=\"ui image label\">\n  <img src=\"/images/avatar/small/elliot.jpg\">\n  Elliot\n</a>\n<a class=\"ui image label\">\n  <img src=\"/images/avatar/small/stevie.jpg\">\n  Stevie\n</a>",
    "isContainer" : false
}

,
{
    "_id" : "vTDCtMEgKM8hNxSzL",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Veronika",
    "content" : "<a class=\"ui blue image label\">\n  <img src=\"/images/avatar/small/veronika.jpg\">\n  Veronika\n  <div class=\"detail\">Friend</div>\n</a>\n<a class=\"ui teal image label\">\n  <img src=\"/images/avatar/small/jenny.jpg\">\n  Veronika\n  <div class=\"detail\">Student</div>\n</a>\n<a class=\"ui yellow image label\">\n  <img src=\"/images/avatar/small/christian.jpg\">\n  Helen\n  <div class=\"detail\">Co-worker</div>\n</a>",
    "isContainer" : false
}

,
{
    "_id" : "a9tqjZ4mTTELawJF6",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Adrienne",
    "content" : "<div class=\"ui image label\">\n  <img src=\"/images/avatar/small/ade.jpg\">\n  Adrienne\n  <i class=\"delete icon\"></i>\n</div>\n<div class=\"ui image label\">\n  <img src=\"/images/avatar/small/zoe.jpg\">\n  Zoe\n  <i class=\"delete icon\"></i>\n</div>\n<div class=\"ui image label\">\n  <img src=\"/images/avatar/small/nan.jpg\">\n  Nan\n  <i class=\"delete icon\"></i>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "52LKvA2e2f5BSF76M",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Pointing",
    "content" : "<form class=\"ui fluid form\">\n  <div class=\"field\">\n    <input type=\"text\" placeholder=\"{{data.input}}\">\n    <div class=\"ui pointing {{design.towards}} label\">\n      {{data.message}}\n    </div>\n  </div>\n</form>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "towards",
            "value" : "  ",
            "choices" : " |below|left|right"
        }
    ],
    "data" : [ 
        {
            "name" : "message",
            "value" : "Please enter a value"
        }, 
        {
            "name" : "input",
            "value" : "First name"
        }
    ]
}

,
{
    "_id" : "KoNk7WRvEDZ4mMFqE",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Corner",
    "content" : "<div class=\"ui two column grid\">\n  <div class=\"column\">\n    <div class=\"ui fluid image\">\n      <a class=\"ui red left corner label\">\n        <i class=\"heart icon\"></i>\n      </a>\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n  </div>\n  <div class=\"column\">\n    <div class=\"ui fluid image\">\n      <a class=\"ui black right corner label\">\n        <i class=\"save icon\"></i>\n      </a>\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "hMWpifWcRxA7tuGK5",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Tag",
    "content" : "<a class=\"ui tag label\">New</a>\n<a class=\"ui red tag label\">Upcoming</a>\n<a class=\"ui teal tag label\">Featured</a>",
    "isContainer" : false
}

,
{
    "_id" : "SiMmdRTLK7PFpHhLC",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Ribbon",
    "content" : "<div class=\"ui two column grid\">\n  <div class=\"column\">\n    <div class=\"ui raised segment\">\n      <a class=\"ui red ribbon label\">Overview</a>\n      <span>Account Details</span>\n      <p></p>\n      <a class=\"ui blue ribbon label\">Community</a> User Reviews\n      <p></p>\n    </div>\n  </div>\n  <div class=\"column\">\n    <div class=\"ui segment\">\n      <a class=\"ui orange right ribbon label\">Specs</a>\n      <p></p>\n      <a class=\"ui teal right ribbon label\">Reviews</a>\n      <p></p>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "C684X4yPwN54rmf8d",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Column",
    "content" : "<div class=\"ui two column grid\">\n  <div class=\"column\">\n    <div class=\"ui fluid image\">\n      <div class=\"ui black ribbon label\">\n        <i class=\"hotel icon\"></i> Hotel\n      </div>\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n  </div>\n  <div class=\"column\">\n    <div class=\"ui fluid image\">\n      <div class=\"ui blue ribbon label\">\n        <i class=\"spoon icon\"></i> Food\n      </div>\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "5iecK6832haw4sJRT",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Attached",
    "content" : "<div class=\"ui {{design.position}} attached label\">{{data.text}}</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "position",
            "value" : "top",
            "choices" : " |top|bottom|top left|top right|bottom left|bottom right"
        }
    ],
    "data" : [ 
        {
            "name" : "text",
            "value" : "Attached Label"
        }
    ]
}

,
{
    "_id" : "Y2FFqfe5vB8tzww47",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Horizontal",
    "content" : "<div class=\"ui divided selection list\">\n  <a class=\"item\">\n    <div class=\"ui red horizontal label\">Fruit</div>\n    Kumquats\n  </a>\n  <a class=\"item\">\n    <div class=\"ui purple horizontal label\">Candy</div>\n    Ice Cream\n  </a>\n  <a class=\"item\">\n    <div class=\"ui red horizontal label\">Fruit</div>\n    Orange\n  </a>\n  <a class=\"item\">\n    <div class=\"ui horizontal label\">Dog</div>\n    Poodle\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "5nTW6BRJJn85urZDj",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Floating",
    "content" : "<div class=\"ui compact menu\">\n  <a class=\"item\">\n    <i class=\"icon mail\"></i> Messages\n    <div class=\"floating ui red label\">22</div>\n  </a>\n  <a class=\"item\">\n    <i class=\"icon users\"></i> Friends\n    <div class=\"floating ui teal label\">22</div>\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "D74yDPCd7GpErYQx6",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Content detail",
    "content" : "<div class=\"ui label\">\n  Dogs\n  <div class=\"detail\">214</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "BgfDAG4G8zfwFQSq7",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Icon",
    "content" : "<a class=\"ui label\">\n  <i class=\"mail icon\"></i>\n  Mail\n</a>\n<a class=\"ui label\">\n  Tag\n  <i class=\"delete icon\"></i>\n</a>",
    "isContainer" : false
}

,
{
    "_id" : "kcMhcQSL2vAgeLYX3",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Image",
    "content" : "<a class=\"ui label\">\n  <img class=\"ui right spaced avatar image\" src=\"/images/avatar/small/elliot.jpg\">\n  Elliot\n</a>\n<a class=\"ui label\">\n  <img src=\"/images/avatar/small/stevie.jpg\">\n  Stevie\n</a>",
    "isContainer" : false
}

,
{
    "_id" : "NCGRRhFRi7fZuBi2R",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Mail",
    "content" : "<div class=\"ui label\">\n  <i class=\"mail icon\"></i>\n  23\n  <a class=\"detail\">View Mail</a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "wfHCZfybRofDdMtiD",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Variations circular",
    "content" : "<a class=\"ui red circular label\">2</a>\n<a class=\"ui orange circular label\">2</a>\n<a class=\"ui yellow circular label\">2</a>\n<a class=\"ui olive circular label\">2</a>\n<a class=\"ui green circular label\">2</a>\n<a class=\"ui teal circular label\">2</a>\n<a class=\"ui blue circular label\">2</a>\n<a class=\"ui violet circular label\">2</a>\n<a class=\"ui purple circular label\">2</a>\n<a class=\"ui pink circular label\">2</a>\n<a class=\"ui brown circular label\">2</a>\n<a class=\"ui grey circular label\">2</a>\n<a class=\"ui black circular label\">2</a>",
    "isContainer" : false
}

,
{
    "_id" : "LDv4WY7WWE7zgPzWz",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Circular",
    "content" : "<a class=\"ui {{design.color}} empty circular label\"></a>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "color",
            "value" : "red",
            "choices" : "|red|orange|yellow|olive|green|teal|blue|violet|purple|pink|brown|grey|black"
        }
    ]
}

,
{
    "_id" : "ruXWqbZEkjWQao965",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Colored",
    "content" : "<a class=\"ui red label\">Red</a>\n<a class=\"ui orange label\">Orange</a>\n<a class=\"ui yellow label\">Yellow</a>\n<a class=\"ui olive label\">Olive</a>\n<a class=\"ui green label\">Green</a>\n<a class=\"ui teal label\">Teal</a>\n<a class=\"ui blue label\">Blue</a>\n<a class=\"ui violet label\">Violet</a>\n<a class=\"ui purple label\">Purple</a>\n<a class=\"ui pink label\">Pink</a>\n<a class=\"ui brown label\">Brown</a>\n<a class=\"ui grey label\">Grey</a>\n<a class=\"ui black label\">Black</a>",
    "isContainer" : false
}

,
{
    "_id" : "g2BwGDLrHWPjzuWNH",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Size",
    "content" : "<div class=\"ui mini label\">\n  Mini\n</div>\n<div class=\"ui tiny label\">\n  Tiny\n</div>\n<div class=\"ui small label\">\n  Small\n</div>\n<div class=\"ui label\">\n  Medium\n</div>\n<div class=\"ui large label\">\n  Large\n</div>\n<div class=\"ui big label\">\n  Big\n</div>\n<div class=\"ui huge label\">\n  Huge\n</div>\n<div class=\"ui massive label\">\n  Massive\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "2xRHZ9izFdHc77b2Q",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Colored group",
    "content" : "<div class=\"ui blue labels\">\n  <a class=\"ui label\">\n    Fun <i class=\"icon close\"></i>\n  </a>\n  <a class=\"ui label\">\n    Happy\n    <div class=\"detail\">22</div>\n  </a>\n  <a class=\"ui label\">\n    Smart\n  </a>\n  <a class=\"ui label\">\n    Insane\n  </a>\n  <a class=\"ui label\">\n    Exciting\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Km5AoLwhqt9gwhagu",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Tag group",
    "content" : "<div class=\"ui tag labels\">\n  <a class=\"ui label\">\n    $10.00\n  </a>\n  <a class=\"ui label\">\n    $19.99\n  </a>\n  <a class=\"ui label\">\n    $24.99\n  </a>\n  <a class=\"ui label\">\n    $30.99\n  </a>\n  <a class=\"ui label\">\n    $10.25\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "gsPMB62oZr3FhgcL5",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Circular group",
    "content" : "<div class=\"ui circular labels\">\n  <a class=\"ui label\">\n    11\n  </a>\n  <a class=\"ui label\">\n    22\n  </a>\n  <a class=\"ui label\">\n    33\n  </a>\n  <a class=\"ui label\">\n    44\n  </a>\n  <a class=\"ui label\">\n    141\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "QAyzrZgJGKwJM7utS",
    "parent" : "ucW5A4yhnkBqyG5tj",
    "name" : "Loader",
    "isContainer" : false
}

,
{
    "_id" : "tYztfnFgc5W7EBFhL",
    "parent" : "ucW5A4yhnkBqyG5tj",
    "name" : "Rail",
    "isContainer" : false
}

,
{
    "_id" : "bK63TFAabjKzbuych",
    "parent" : "ucW5A4yhnkBqyG5tj",
    "name" : "Reveal",
    "isContainer" : false
}

,
{
    "_id" : "xrbP659zGvop7Y5BZ",
    "parent" : "ucW5A4yhnkBqyG5tj",
    "name" : "List",
    "isContainer" : false
}

,
{
    "_id" : "ExRWX7hkKBDrruh4r",
    "parent" : "ucW5A4yhnkBqyG5tj",
    "name" : "Segment",
    "isContainer" : false
}

,
{
    "_id" : "j5kZYbKSYytitMSip",
    "parent" : "ucW5A4yhnkBqyG5tj",
    "name" : "Step",
    "isContainer" : false
}

,
{
    "_id" : "6zpycnT6Fc3LncHG8",
    "parent" : "ivrYvXcEFhZxr937G",
    "name" : "Form",
    "isContainer" : false
}

,
{
    "_id" : "D4mgRKWu9QnzRhXAz",
    "parent" : "ivrYvXcEFhZxr937G",
    "name" : "Grid",
    "isContainer" : false
}

,
{
    "_id" : "kphRvFK3CHLGek6hY",
    "parent" : "ivrYvXcEFhZxr937G",
    "name" : "Menu",
    "isContainer" : false
}

,
{
    "_id" : "5zD74DASmZSnyzwrZ",
    "parent" : "ivrYvXcEFhZxr937G",
    "name" : "Message",
    "isContainer" : false
}

,
{
    "_id" : "9TaNX2GnmohNiFbvi",
    "parent" : "ivrYvXcEFhZxr937G",
    "name" : "Table",
    "isContainer" : false
}

,
{
    "_id" : "qHQWL6hQ2sBvScABk",
    "parent" : "HFg5kyThZpZeT5oge",
    "name" : "Card",
    "isContainer" : false
}

,
{
    "_id" : "AKZSJuFtdErjNh7mx",
    "parent" : "HFg5kyThZpZeT5oge",
    "name" : "Comment",
    "isContainer" : false
}

,
{
    "_id" : "SLN56bhvAf6RZvCXg",
    "parent" : "HFg5kyThZpZeT5oge",
    "name" : "Feed",
    "isContainer" : false
}

,
{
    "_id" : "p6aJ7ZmN7AExPzWkZ",
    "parent" : "HFg5kyThZpZeT5oge",
    "name" : "Item",
    "isContainer" : false
}

,
{
    "_id" : "RxaiFDXhi792R6yid",
    "parent" : "HFg5kyThZpZeT5oge",
    "name" : "Statistic",
    "isContainer" : false
}

,
{
    "_id" : "b8zdx4ECQn42f7mcm",
    "parent" : "QAyzrZgJGKwJM7utS",
    "name" : "Types",
    "content" : "<div class=\"ui segment\">\n  <p></p>\n  <div class=\"ui active dimmer\">\n    <div class=\"ui loader\"></div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "BudvKHbo4skDWN8Ss",
    "parent" : "QAyzrZgJGKwJM7utS",
    "name" : "Text loader",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui active dimmer\">\n    <div class=\"ui text loader\">Loading</div>\n  </div>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "3kR8oARG2GjcWcCNo",
    "parent" : "QAyzrZgJGKwJM7utS",
    "name" : "Text loader active",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui active inverted dimmer\">\n    <div class=\"ui text loader\">Loading</div>\n  </div>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "58pH7zf5DZakfbKqQ",
    "parent" : "QAyzrZgJGKwJM7utS",
    "name" : "Indeterminate",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui active dimmer\">\n    <div class=\"ui indeterminate text loader\">Preparing Files</div>\n  </div>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "sanHYhu8hhF3JQ6eS",
    "parent" : "QAyzrZgJGKwJM7utS",
    "name" : "Active",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui active loader\"></div>\n  <p></p>\n </div>",
    "isContainer" : false
}

,
{
    "_id" : "XjrRyZYNfZtzRzY2g",
    "parent" : "QAyzrZgJGKwJM7utS",
    "name" : "Disabled",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui disabled loader\"></div>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "9Cefh2zTxjG2i2o8o",
    "parent" : "QAyzrZgJGKwJM7utS",
    "name" : "Inline",
    "content" : "<div class=\"ui active small inline loader\"></div>\n<div class=\"ui active inline loader\"></div>\n<div class=\"ui active large inline loader\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "eacHg4tkgZftzDuvh",
    "parent" : "QAyzrZgJGKwJM7utS",
    "name" : "Inline",
    "content" : "<div class=\"ui active centered small inline loader\"></div>\n<div class=\"ui active centered inline loader\"></div>\n<div class=\"ui active centered large inline loader\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "zqkT335t3A4DY3Dug",
    "parent" : "QAyzrZgJGKwJM7utS",
    "name" : "Size",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui active dimmer\">\n    <div class=\"ui mini text loader\">Loading</div>\n  </div>\n  <p></p>\n</div>\n<div class=\"ui segment\">\n  <div class=\"ui active dimmer\">\n    <div class=\"ui small text loader\">Loading</div>\n  </div>\n  <p></p>\n</div>\n<div class=\"ui segment\">\n  <div class=\"ui active dimmer\">\n    <div class=\"ui medium text loader\">Loading</div>\n  </div>\n  <p></p>\n    <p></p>\n</div>\n<div class=\"ui segment\">\n  <div class=\"ui active dimmer\">\n    <div class=\"ui large text loader\">Loading</div>\n  </div>\n  <p></p>\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "oTiiH5v96q3T2LAPK",
    "parent" : "QAyzrZgJGKwJM7utS",
    "name" : "Inverted",
    "content" : "<div class=\"ui inverted segment\">\n  <div class=\"ui active inverted loader\"></div>\n  <br>\n  <br>\n  <br>\n  <br>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "PZQzA2XfooBT2b4u7",
    "parent" : "QAyzrZgJGKwJM7utS",
    "name" : "Inverted dimmer",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui active inverted dimmer\">\n    <div class=\"ui mini text loader\">Loading</div>\n  </div>\n  <p></p>\n</div>\n<div class=\"ui segment\">\n  <div class=\"ui active inverted dimmer\">\n    <div class=\"ui small text loader\">Loading</div>\n  </div>\n  <p></p>\n</div>\n<div class=\"ui segment\">\n  <div class=\"ui active inverted dimmer\">\n    <div class=\"ui medium text loader\">Loading</div>\n  </div>\n  <p></p>\n  <p></p>\n</div>\n<div class=\"ui segment\">\n  <div class=\"ui active inverted dimmer\">\n    <div class=\"ui large text loader\">Loading</div>\n  </div>\n  <p></p>\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ohMF6W2dA9tfuMqeh",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Types",
    "content" : "<div class=\"ui list\">\n  <div class=\"item\">Apples</div>\n  <div class=\"item\">Pears</div>\n  <div class=\"item\">Oranges</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "7HijERP6iSxfY7NDS",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Semantic",
    "content" : "<div class=\"ui list\">\n  <div class=\"item\">\n    <i class=\"users icon\"></i>\n    <div class=\"content\">\n      Semantic UI\n    </div>\n  </div>\n  <div class=\"item\">\n    <i class=\"marker icon\"></i>\n    <div class=\"content\">\n      New York, NY\n    </div>\n  </div>\n  <div class=\"item\">\n    <i class=\"mail icon\"></i>\n    <div class=\"content\">\n      <a href=\"mailto:jack@semantic-ui.com\">jack@semantic-ui.com</a>\n    </div>\n  </div>\n  <div class=\"item\">\n    <i class=\"linkify icon\"></i>\n    <div class=\"content\">\n      <a href=\"http://www.semantic-ui.com\">semantic-ui.com</a>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "EgwbTni74PvskSmCd",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Semantic org",
    "content" : "<div class=\"ui relaxed divided list\">\n  <div class=\"item\">\n    <i class=\"large github middle aligned icon\"></i>\n    <div class=\"content\">\n      <a class=\"header\">Semantic-Org/Semantic-UI</a>\n      <div class=\"description\">Updated 10 mins ago</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <i class=\"large github middle aligned icon\"></i>\n    <div class=\"content\">\n      <a class=\"header\">Semantic-Org/Semantic-UI-Docs</a>\n      <div class=\"description\">Updated 22 mins ago</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <i class=\"large github middle aligned icon\"></i>\n    <div class=\"content\">\n      <a class=\"header\">Semantic-Org/Semantic-UI-Meteor</a>\n      <div class=\"description\">Updated 34 mins ago</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "D5YkZqLkhWrzN5K8x",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Src",
    "content" : "<div class=\"ui list\">\n  <div class=\"item\">\n    <i class=\"folder icon\"></i>\n    <div class=\"content\">\n      <div class=\"header\">src</div>\n      <div class=\"description\">Source files for project</div>\n      <div class=\"list\">\n        <div class=\"item\">\n          <i class=\"folder icon\"></i>\n          <div class=\"content\">\n            <div class=\"header\">site</div>\n            <div class=\"description\">Your site's theme</div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <i class=\"folder icon\"></i>\n          <div class=\"content\">\n            <div class=\"header\">themes</div>\n            <div class=\"description\">Packaged theme files</div>\n            <div class=\"list\">\n              <div class=\"item\">\n                <i class=\"folder icon\"></i>\n                <div class=\"content\">\n                  <div class=\"header\">default</div>\n                  <div class=\"description\">Default packaged theme</div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <i class=\"folder icon\"></i>\n                <div class=\"content\">\n                  <div class=\"header\">my_theme</div>\n                  <div class=\"description\">Packaged themes are also available in this folder</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <i class=\"file icon\"></i>\n          <div class=\"content\">\n            <div class=\"header\">theme.config</div>\n            <div class=\"description\">Config file for setting packaged themes</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <i class=\"folder icon\"></i>\n    <div class=\"content\">\n      <div class=\"header\">dist</div>\n      <div class=\"description\">Compiled css and js files</div>\n      <div class=\"list\">\n        <div class=\"item\">\n          <i class=\"folder icon\"></i>\n          <div class=\"content\">\n            <div class=\"header\">components</div>\n            <div class=\"description\">Individual component css and js</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <i class=\"file icon\"></i>\n    <div class=\"content\">\n      <div class=\"header\">semantic.json</div>\n      <div class=\"description\">Contains build settings for gulp</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "KiaK2T8omehfnvTtL",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Bulleted",
    "content" : "<div class=\"ui bulleted list\">\n  <div class=\"item\">Gaining Access</div>\n  <div class=\"item\">Inviting Friends</div>\n  <div class=\"item\">\n    <div>Benefits</div>\n    <div class=\"list\">\n      <div class=\"item\">Use Anywhere</div>\n      <div class=\"item\">Rebates</div>\n      <div class=\"item\">Discounts</div>\n    </div>\n  </div>\n  <div class=\"item\">Warranty</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "EfH9iTk24Rmg7rJjL",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Warranty",
    "content" : "<ul class=\"ui list\">\n  <li>Gaining Access</li>\n  <li>Inviting Friends</li>\n  <li>Benefits\n    <ul>\n      <li>Use Anywhere</li>\n      <li>Rebates</li>\n      <li>Discounts</li>\n    </ul>\n  </li>\n  <li>Warranty</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "rCYYK5LwE4FEXKvkw",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "About us",
    "content" : "<div class=\"ui horizontal bulleted list\">\n  <a class=\"item\">\n    About Us\n  </a>\n  <a class=\"item\">\n    Sitemap\n  </a>\n  <a class=\"item\">\n    Contact\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Y56kaJyy45dtfGpyb",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Admin",
    "content" : "<ol class=\"ui list\">\n  <li>Signing Up</li>\n  <li>User Benefits</li>\n  <li>User Types\n    <ol>\n      <li>Admin</li>\n      <li>Power User</li>\n      <li>Regular User</li>\n    </ol>\n  </li>\n  <li>Deleting Your Account</li>\n</ol>",
    "isContainer" : false
}

,
{
    "_id" : "cPPvn3Zhu64QobXij",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Link",
    "content" : "<div class=\"ui link list\">\n  <div class=\"active item\">Home</div>\n  <a class=\"item\">About</a>\n  <a class=\"item\">Jobs</a>\n  <a class=\"item\">Team</a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "3FdL4MzR9LgoNRpvN",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Content",
    "content" : "<div class=\"ui list\">\n  <div class=\"item\">\n    1\n  </div>\n  <div class=\"item\">\n    2\n  </div>\n  <div class=\"item\">\n    3\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "hnAssKoTvJYwFaTWt",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Icon",
    "content" : "<div class=\"ui list\">\n  <a class=\"item\">\n    <i class=\"help icon\"></i>\n    <div class=\"content\">\n      <div class=\"header\">Floated Icon</div>\n      <div class=\"description\">This text will always have a left margin to make sure it sits alongside your icon</div>\n    </div>\n  </a>\n  <a class=\"item\">\n    <i class=\"right triangle icon\"></i>\n    <div class=\"content\">\n      <div class=\"header\">Icon Alignment</div>\n      <div class=\"description\">Floated icons are by default top aligned. To have an icon top aligned try this example.</div>\n    </div>\n  </a>\n  <div class=\"item\">\n    <i class=\"help icon\"></i>\n    Inline Text\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "f8DdZobiXgoXAiZhu",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Image",
    "content" : "<div class=\"ui list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar2/small/rachel.png\">\n    <div class=\"content\">\n      <a class=\"header\">Rachel</a>\n      <div class=\"description\">Last seen watching <a><b>Arrested Development</b></a> just now.</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar2/small/lindsay.png\">\n    <div class=\"content\">\n      <a class=\"header\">Lindsay</a>\n      <div class=\"description\">Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar2/small/matthew.png\">\n    <div class=\"content\">\n      <a class=\"header\">Matthew</a>\n      <div class=\"description\">Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/jenny.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Jenny Hess</a>\n      <div class=\"description\">Last seen watching <a><b>Twin Peaks</b></a> 3 days ago.</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/veronika.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Veronika Ossi</a>\n      <div class=\"description\">Has not watched anything recently</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "2vdor46D7CbErnNM8",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Faq",
    "content" : "<div class=\"ui list\">\n  <a class=\"item\">What is a FAQ?</a>\n  <a class=\"item\">Who is our user?</a>\n  <a class=\"item\">Where is our office located?</a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "n8kjy78T6r8n9JdL4",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Learn",
    "content" : "<div class=\"ui list\">\n  <div class=\"item\">\n    <a class=\"header\">Header</a>\n    <div class=\"description\">\n      Click a link in our <a>description</a>.\n    </div>\n  </div>\n  <div class=\"item\">\n    <a class=\"header\">Learn More</a>\n    <div class=\"description\">\n      Learn more about this site on <a>our FAQ page</a>.\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "hLq2vC2Ld7QiDhi6D",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Header",
    "content" : "<div class=\"ui list\">\n  <div class=\"item\">\n    <div class=\"header\">New York City</div>\n    A lovely city\n  </div>\n  <div class=\"item\">\n    <div class=\"header\">Chicago</div>\n    Also quite a lovely city\n  </div>\n  <div class=\"item\">\n    <div class=\"header\">Los Angeles</div>\n    Sometimes can be a lovely city\n  </div>\n  <div class=\"item\">\n    <div class=\"header\">San Francisco</div>\n    What a lovely city\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "nTxMNbRMGarvA5PxQ",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Description",
    "content" : "<div class=\"ui list\">\n  <div class=\"item\">\n    <i class=\"map marker icon\"></i>\n    <div class=\"content\">\n      <a class=\"header\">Krowlewskie Jadlo</a>\n      <div class=\"description\">An excellent polish restaurant, quick delivery and hearty, filling meals.</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <i class=\"map marker icon\"></i>\n    <div class=\"content\">\n      <a class=\"header\">Xian Famous Foods</a>\n      <div class=\"description\">A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <i class=\"map marker icon\"></i>\n    <div class=\"content\">\n      <a class=\"header\">Sapporo Haru</a>\n      <div class=\"description\">Greenpoint's best choice for quick and delicious sushi.</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <i class=\"map marker icon\"></i>\n    <div class=\"content\">\n      <a class=\"header\">Enid's</a>\n      <div class=\"description\">At night a bar, during the day a delicious brunch spot.</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "YcEZFKt2eNdkHrzpw",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Variation horizontal",
    "content" : "<div class=\"ui horizontal list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/tom.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Tom</div>\n      Top Contributor\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/christian.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Christian Rocha</div>\n      Admin\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/matt.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Matt</div>\n      Top Rated User\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "6jGpRWJzi49PPp5AA",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Steve",
    "content" : "<div class=\"ui ordered horizontal list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/tom.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Steve Jobes</div>\n      50 Points\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/stevie.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Stevie Feliciano</div>\n      44 Points\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/jenny.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Jenny Hess</div>\n      11 Points\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "STZbXgFQTf2Sue8hr",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Contact",
    "content" : "<div class=\"ui horizontal bulleted link list\">\n  <a class=\"item\">\n    Terms and Conditions\n  </a>\n  <a class=\"item\">\n    Privacy Policy\n  </a>\n  <a class=\"item\">\n    Contact Us\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "awE9RtaChyKiKiRPq",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Inverted",
    "content" : "<div class=\"ui inverted segment\">\n  <div class=\"ui inverted relaxed divided list\">\n    <div class=\"item\">\n      <div class=\"content\">\n        <div class=\"header\">Snickerdoodle</div>\n        An excellent companion\n      </div>\n    </div>\n    <div class=\"item\">\n      <div class=\"content\">\n        <div class=\"header\">Poodle</div>\n        A poodle, its pretty basic\n      </div>\n    </div>\n    <div class=\"item\">\n      <div class=\"content\">\n        <div class=\"header\">Paulo</div>\n        He's also a dog\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "PddEk4fBNrNPYDDwS",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Selection",
    "content" : "<div class=\"ui middle aligned selection list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/helen.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Helen</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/christian.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Christian</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/daniel.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Daniel</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "JefmTLzGtA5qi8jTB",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Animated",
    "content" : "<div class=\"ui middle aligned animated list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/helen.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Helen</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/christian.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Christian</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/daniel.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Daniel</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "hrKzgXx4CdBKCJ78N",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Relaxed",
    "content" : "<div class=\"ui relaxed list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/daniel.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Daniel Louise</a>\n      <div class=\"description\">Last seen watching <a><b>Arrested Development</b></a> just now.</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/stevie.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Stevie Feliciano</a>\n      <div class=\"description\">Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/elliot.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Elliot Fu</a>\n      <div class=\"description\">Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "KhorNmXCHPBsqL6JH",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Daniel",
    "content" : "<div class=\"ui relaxed horizontal list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/daniel.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Daniel Louise</a>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/stevie.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Stevie Feliciano</a>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/elliot.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Elliot Fu</a>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "tKTPnwiqxRE4zuAqA",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Relaxed",
    "content" : "<div class=\"ui very relaxed list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/daniel.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Daniel Louise</a>\n      <div class=\"description\">Last seen watching <a><b>Arrested Development</b></a> just now.</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/stevie.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Stevie Feliciano</a>\n      <div class=\"description\">Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/elliot.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Elliot Fu</a>\n      <div class=\"description\">Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "zTij2eB4qNR2KPAJr",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Stevie",
    "content" : "<div class=\"ui very relaxed horizontal list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/daniel.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Daniel Louise</a>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/stevie.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Stevie Feliciano</a>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/elliot.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Elliot Fu</a>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "oHExLQCFGCEdP5dgR",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Divided",
    "content" : "<div class=\"ui middle aligned divided list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/daniel.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Daniel Louise</a>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/stevie.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Stevie Feliciano</a>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/elliot.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Elliot Fu</a>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "EBWWMRgCvqq5u7rDx",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Celled",
    "content" : "<div class=\"ui celled list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/helen.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Snickerdoodle</div>\n      An excellent companion\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/daniel.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Poodle</div>\n      A poodle, its pretty basic\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/daniel.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Paulo</div>\n      He's also a dog\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "edkTDFL4N8nW8FhNb",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Horses",
    "content" : "<div class=\"ui celled ordered list\">\n  <div class=\"item\">Cats</div>\n  <div class=\"item\">Horses</div>\n  <div class=\"item\">Dogs\n    <div class=\"list\">\n      <div class=\"item\">Labradoodles</div>\n      <div class=\"item\">Shiba Inu</div>\n      <div class=\"item\">Mastiff</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "9FvFat9HzAMzXB58o",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "About",
    "content" : "<div class=\"ui celled horizontal list\">\n  <div class=\"item\">About Us</div>\n  <div class=\"item\">Contact</div>\n  <div class=\"item\">Support</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "gasPq6RrQxsS6RwBy",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Size",
    "content" : "<div class=\"ui mini horizontal divided list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/helen.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Helen</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/christian.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Christian</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/daniel.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Daniel</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "wbHDuYdTD3iab8JYQ",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Item",
    "content" : "<div class=\"ui tiny horizontal list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/helen.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Helen</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/christian.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Christian</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/daniel.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Daniel</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "iNfQSgbg9dFZocK7W",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Helen",
    "content" : "<div class=\"ui small horizontal list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/helen.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Helen</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/christian.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Christian</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/daniel.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Daniel</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "9oE8bt75udFJTpHQm",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Christian",
    "content" : "<div class=\"ui large horizontal divided list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/helen.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Helen</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/christian.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Christian</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/daniel.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Daniel</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Q2g8SkkKZPFMwWpSM",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Class",
    "content" : "<div class=\"ui big horizontal divided list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/helen.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Helen</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/christian.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Christian</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/daniel.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Daniel</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "skSnGo4FBzBKdq49F",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Mireille",
    "content" : "<div class=\"ui huge horizontal divided list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/helen.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Helen</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/christian.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Christian</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/daniel.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Daniel</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "QLd6iSjsZ5wQSkcPg",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Src",
    "content" : "<div class=\"ui massive horizontal divided list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/helen.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Helen</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/christian.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Christian</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/daniel.jpg\">\n    <div class=\"content\">\n      <div class=\"header\">Daniel</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "nAuPGqKvJjBXhwPCC",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Vertically aligned",
    "content" : "<div class=\"ui horizontal list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/wireframe/square-image.png\">\n    <div class=\"top aligned content\">\n      Top Aligned\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/wireframe/square-image.png\">\n    <div class=\"middle aligned content\">\n      Middle\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/wireframe/square-image.png\">\n    <div class=\"bottom aligned content\">\n      Bottom\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "srgkCkQSaqHnqyJmo",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Floated",
    "content" : "<div class=\"ui middle aligned divided list\">\n  <div class=\"item\">\n    <div class=\"right floated content\">\n      <div class=\"ui button\">Add</div>\n    </div>\n    <img class=\"ui avatar image\" src=\"/images/avatar2/small/lena.png\">\n    <div class=\"content\">\n      Lena\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"right floated content\">\n      <div class=\"ui button\">Add</div>\n    </div>\n    <img class=\"ui avatar image\" src=\"/images/avatar2/small/lindsay.png\">\n    <div class=\"content\">\n      Lindsay\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"right floated content\">\n      <div class=\"ui button\">Add</div>\n    </div>\n    <img class=\"ui avatar image\" src=\"/images/avatar2/small/mark.png\">\n    <div class=\"content\">\n      Mark\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"right floated content\">\n      <div class=\"ui button\">Add</div>\n    </div>\n    <img class=\"ui avatar image\" src=\"/images/avatar2/small/molly.png\">\n    <div class=\"content\">\n      Molly\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "BCTDpwhZpCQtA7pSa",
    "parent" : "tYztfnFgc5W7EBFhL",
    "name" : "Types",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui left rail\">\n    <div class=\"ui segment\">\n      Left Rail Content\n    </div>\n  </div>\n  <div class=\"ui right rail\">\n    <div class=\"ui segment\">\n      Right Rail Content\n    </div>\n  </div>\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "LawnQEKfYjA4zPgZk",
    "parent" : "tYztfnFgc5W7EBFhL",
    "name" : "Internal",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui left internal rail\">\n    <div class=\"ui segment\">\n      Left Rail Content\n    </div>\n  </div>\n  <div class=\"ui right internal rail\">\n    <div class=\"ui segment\">\n      Right Rail Content\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "djcsif3u7dkPDfDBN",
    "parent" : "tYztfnFgc5W7EBFhL",
    "name" : "Dividing",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui left dividing rail\">\n    <div class=\"ui segment\">\n      Left Rail Content\n    </div>\n  </div>\n  <div class=\"ui right dividing rail\">\n    <div class=\"ui segment\">\n      Right Rail Content\n    </div>\n  </div>\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "8RNthcXe558oJm2JY",
    "parent" : "tYztfnFgc5W7EBFhL",
    "name" : "Variations",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui left attached rail\">\n    <div class=\"ui segment\">\n      Left Rail Content\n    </div>\n  </div>\n  <div class=\"ui right attached rail\">\n    <div class=\"ui segment\">\n      Right Rail Content\n    </div>\n  </div>\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "iJ9C6jCk9sTupZJkW",
    "parent" : "tYztfnFgc5W7EBFhL",
    "name" : "Rail Content",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui left internal attached rail\">\n    <div class=\"ui segment\">\n      Left Rail Content\n    </div>\n  </div>\n  <div class=\"ui right internal attached rail\">\n    <div class=\"ui segment\">\n      Right Rail Content\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "6WhF433bThPNJu6WQ",
    "parent" : "tYztfnFgc5W7EBFhL",
    "name" : "Close",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui left close rail\">\n    <div class=\"ui segment\">\n      Left Rail Content\n    </div>\n  </div>\n  <div class=\"ui right close rail\">\n    <div class=\"ui segment\">\n      Right Rail Content\n    </div>\n  </div>\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "RsLNHrNqjE2gofeYX",
    "parent" : "tYztfnFgc5W7EBFhL",
    "name" : "Close rail",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui left very close rail\">\n    <div class=\"ui segment\">\n      Left Rail Content\n    </div>\n  </div>\n  <div class=\"ui right very close rail\">\n    <div class=\"ui segment\">\n      Right Rail Content\n    </div>\n  </div>\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Y9AjruKatpkzRQteu",
    "parent" : "bK63TFAabjKzbuych",
    "name" : "Fade",
    "content" : "<div class=\"ui fade reveal\">\n  <div class=\"visible content\">\n    <img src=\"/images/wireframe/square-image.png\" class=\"ui small image\">\n  </div>\n  <div class=\"hidden content\">\n    <img src=\"/images/avatar/large/ade.jpg\" class=\"ui small image\">\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ZbXXbNuXkm5QPPdyS",
    "parent" : "bK63TFAabjKzbuych",
    "name" : "Small",
    "content" : "<div class=\"ui small fade reveal image\">\n  <img class=\"visible content\" src=\"/images/wireframe/square-image.png\">\n  <img class=\"hidden content\" src=\"/images/avatar/large/ade.jpg\">\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "A4Hod3y4pgCksh5Ts",
    "parent" : "NTgycDiit2iPx7joJ",
    "name" : "Checkbox",
    "isContainer" : false
}

,
{
    "_id" : "rAL6YdEeuMCLiiibG",
    "parent" : "NTgycDiit2iPx7joJ",
    "name" : "Dimmer",
    "isContainer" : false
}

,
{
    "_id" : "cXTZenhXopNHywTMD",
    "parent" : "nfvJRyLFaSsL5uhvf",
    "name" : "States",
    "content" : "<div class=\"ui visible sidebar\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "wsrEpApwiQxwsFo8Q",
    "parent" : "nfvJRyLFaSsL5uhvf",
    "name" : "Pusher",
    "content" : "<div class=\"dimmed pusher\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "vMqPwwqk8eWERoi8E",
    "parent" : "aJyyzQxaCmtdN9uvX",
    "name" : "Youtube Vimeo",
    "content" : "<div class=\"ui embed\" data-source=\"{{data.source}}\" data-id=\"{{data.id}}\" data-placeholder=\"{{data.image}}\">\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "id",
            "value" : "pfdu_gTry8E"
        }, 
        {
            "name" : "image",
            "value" : "/images/wireframe/image-16by9.png"
        }, 
        {
            "name" : "source",
            "value" : "youtube",
            "choices" : "youtube|vimeo"
        }
    ]
}

,
{
    "_id" : "e4yEKMHbxkuRfAByP",
    "parent" : "vAtoYucfRK2Yoi7AL",
    "name" : "RL 1",
    "isContainer" : false
}

,
{
    "_id" : "YyJRgN2hBBZkvoamD",
    "parent" : "vAtoYucfRK2Yoi7AL",
    "name" : "Image Select",
    "isContainer" : false
}

,
{
    "_id" : "LczBZySbug8q6vhLA",
    "parent" : "pzCd4zKtba4vZMBWa",
    "name" : "Loading",
    "content" : "<button class=\"ui {{design.weight}} {{design.activation}} loading button\">{{data.text}}</button>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "weight",
            "value" : "primary ",
            "choices" : " |primary|secondary|basic"
        }, 
        {
            "name" : "activation",
            "value" : " ",
            "choices" : " |active|disabled"
        }
    ],
    "data" : [ 
        {
            "name" : "text",
            "value" : "Loading"
        }
    ]
}

,
{
    "_id" : "4nN9A2jTMqv6CKNZ2",
    "parent" : "vAtoYucfRK2Yoi7AL",
    "name" : "RL 2",
    "isContainer" : false
}

,
{
    "_id" : "5469cdBtap7qZFukB",
    "parent" : "vAtoYucfRK2Yoi7AL",
    "name" : "Chat",
    "isContainer" : false
}

,
{
    "_id" : "uLCA9AAk5GXhwhbXr",
    "parent" : "bK63TFAabjKzbuych",
    "name" : "Move up",
    "content" : "<div class=\"ui move up reveal\">\n  <div class=\"visible content\">\n    <img src=\"/images/wireframe/square-image.png\" class=\"ui small image\">\n  </div>\n  <div class=\"hidden content\">\n    <img src=\"/images/avatar/large/justen.jpg\" class=\"ui small image\">\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "KPb3MqP6p5rqNPBHT",
    "parent" : "bK63TFAabjKzbuych",
    "name" : "Move down",
    "content" : "<div class=\"ui move down reveal\">\n  <div class=\"visible content\">\n    <img src=\"/images/wireframe/square-image.png\" class=\"ui small image\">\n  </div>\n  <div class=\"hidden content\">\n    <img src=\"/images/avatar/large/nan.jpg\" class=\"ui small image\">\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "XFpBrqSRGsT55HrM2",
    "parent" : "bK63TFAabjKzbuych",
    "name" : "Rotate",
    "content" : "<div class=\"ui small circular rotate reveal image\">\n  <img src=\"/images/wireframe/square-image.png\" class=\"visible content\">\n  <img src=\"/images/avatar/large/stevie.jpg\" class=\"hidden content\">\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "tmPfeocnTXivZ8LH6",
    "parent" : "bK63TFAabjKzbuych",
    "name" : "Visible content",
    "content" : "<div class=\"ui small fade reveal image\">\n  <img class=\"visible content\" src=\"/images/avatar/large/ade.jpg\">\n  <img class=\"hidden content\" src=\"/images/wireframe/square-image.png\">\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "nEJWgKai2snXaYmPm",
    "parent" : "bK63TFAabjKzbuych",
    "name" : "Hidden",
    "content" : "<div class=\"ui small fade reveal image\">\n  <img class=\"visible content\" src=\"/images/wireframe/square-image.png\">\n  <img class=\"hidden content\" src=\"/images/avatar/large/ade.jpg\">\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "acR3ED9Z6ZYo9dxAh",
    "parent" : "bK63TFAabjKzbuych",
    "name" : "Active states",
    "content" : "<div class=\"ui active move left reveal\">\n  <div class=\"visible content\">\n    <img src=\"/images/wireframe/square-image.png\" class=\"ui small image\">\n  </div>\n  <div class=\"hidden content\">\n    <img src=\"/images/avatar/large/nan.jpg\" class=\"ui small image\">\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "vcBs3M9wgFKZWPCW9",
    "parent" : "bK63TFAabjKzbuych",
    "name" : "Instant",
    "content" : "<div class=\"ui instant move reveal\">\n  <img class=\"visible content\" src=\"/images/wireframe/square-image.png\">\n  <img class=\"hidden content\" src=\"/images/avatar/large/chris.jpg\">\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "gA6duRvePHKMnBWpK",
    "parent" : "bK63TFAabjKzbuych",
    "name" : "Disabled",
    "content" : "<div class=\"ui disabled move reveal\">\n  <img class=\"visible content\" src=\"/images/wireframe/square-image.png\">\n  <img class=\"hidden content\" src=\"/images/avatar/large/chris.jpg\">\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "8MDtXdAbzyK8RG8t8",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Types",
    "content" : "<div class=\"ui segment\">\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "JuJop98JpRpzwvxAp",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Raised",
    "content" : "<div class=\"ui raised segment\">\n  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "FgpjvKiywcWYoznXM",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Stacked",
    "content" : "<div class=\"ui stacked segment\">\n  <p>{{data.text}}</p>\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "text",
            "value" : "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
        }
    ]
}

,
{
    "_id" : "8HhendAorRxg4TYJJ",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Tall",
    "content" : "<div class=\"ui tall stacked segment\">\n  <p>{{data.text}}</p>\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "text",
            "value" : "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
        }
    ]
}

,
{
    "_id" : "jynLbBy9Gcd3riZxo",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Piled",
    "content" : "<div class=\"ui piled segment\">\n  <h4 class=\"ui header\">{{data.title}}</h4>\n  {{data.text}}\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "title",
            "value" : "A Title"
        }, 
        {
            "name" : "text",
            "value" : "<p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p> "
        }
    ]
}

,
{
    "_id" : "JqMExtCdCv2veFZAT",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Vertical segment",
    "content" : "<div class=\"ui vertical segment\">\n  <p></p>\n</div>\n<div class=\"ui vertical segment\">\n  <p></p>\n</div>\n<div class=\"ui vertical segment\">\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "vsWBXQuM4KPhfNqf5",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Segments",
    "content" : "<div class=\"ui segments\">\n  <div class=\"ui segment\">\n    <p>Top</p>\n  </div>\n  <div class=\"ui segment\">\n    <p>Middle</p>\n  </div>\n  <div class=\"ui segment\">\n    <p>Middle</p>\n  </div>\n  <div class=\"ui segment\">\n    <p>Middle</p>\n  </div>\n  <div class=\"ui segment\">\n    <p>Bottom</p>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "TZTtLh3kX2EuZQJCv",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Segment",
    "content" : "<div class=\"ui segments\">\n  <div class=\"ui segment\">\n    <p>Top</p>\n  </div>\n  <div class=\"ui red segment\">\n    <p>Middle</p>\n  </div>\n  <div class=\"ui blue segment\">\n    <p>Middle</p>\n  </div>\n  <div class=\"ui green segment\">\n    <p>Middle</p>\n  </div>\n  <div class=\"ui yellow segment\">\n    <p>Bottom</p>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "3gccTFz52DwGYwKbo",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Top",
    "content" : "<div class=\"ui segments\">\n  <div class=\"ui segment\">\n    <p>Top</p>\n  </div>\n  <div class=\"ui secondary segment\">\n    <p>Secondary Content</p>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "495NFvdKMzWHAp8HY",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Nested segments",
    "content" : "<div class=\"ui segments\">\n  <div class=\"ui segment\">\n    <p>Top</p>\n  </div>\n  <div class=\"ui segments\">\n    <div class=\"ui segment\">\n      <p>Nested Top</p>\n    </div>\n    <div class=\"ui segment\">\n      <p>Nested Middle</p>\n    </div>\n    <div class=\"ui segment\">\n      <p>Nested Bottom</p>\n    </div>\n  </div>\n  <div class=\"ui segment\">\n    <p>Middle</p>\n  </div>\n  <div class=\"ui horizontal segments\">\n    <div class=\"ui segment\">\n      <p>Top</p>\n    </div>\n    <div class=\"ui segment\">\n      <p>Middle</p>\n    </div>\n    <div class=\"ui segment\">\n      <p>Bottom</p>\n    </div>\n  </div>\n  <div class=\"ui segment\">\n    <p>Bottom</p>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "WZQgYRDDokvzrwFrD",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Horizontal segments",
    "content" : "<div class=\"ui horizontal segments\">\n  <div class=\"ui segment\">\n    <p></p>\n  </div>\n  <div class=\"ui segment\">\n    <p></p>\n  </div>\n  <div class=\"ui segment\">\n    <p></p>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "5Pfc4JbHwk8zLYo7D",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Raised segments",
    "content" : "<div class=\"ui raised segments\">\n  <div class=\"ui segment\">\n    <p>Top</p>\n  </div>\n  <div class=\"ui segment\">\n    <p>Middle</p>\n  </div>\n  <div class=\"ui segment\">\n    <p>Bottom</p>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "QJw4xRfSTWA4KB89C",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Stacked segments",
    "content" : "<div class=\"ui stacked segments\">\n  <div class=\"ui segment\">\n    <p>Top</p>\n  </div>\n  <div class=\"ui segment\">\n    <p>Middle</p>\n  </div>\n  <div class=\"ui segment\">\n    <p>Bottom</p>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "tNp4EHpS96GCeq3CM",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Piled segments",
    "content" : "<div class=\"ui piled segments\">\n  <div class=\"ui segment\">\n    <p>Top</p>\n  </div>\n  <div class=\"ui segment\">\n    <p>Middle</p>\n  </div>\n  <div class=\"ui segment\">\n    <p>Bottom</p>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "XdcKZ336yZSu25sE6",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Disabled",
    "content" : "<div class=\"ui disabled segment\">\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "FGAyQSss2ZhQypYZa",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Loading",
    "content" : "<div class=\"ui loading segment\">\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "j3rKn6kL3QkAAX64A",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Inverted",
    "content" : "<div class=\"ui inverted segment\">\n  <p>I'm here to tell you something, and you will probably read me first.</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Rp9aQzBxLeYRSCH33",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Attached",
    "content" : "<div class=\"ui top attached segment\">\n  <p>This segment is on top</p>\n</div>\n<div class=\"ui attached segment\">\n  <p>This segment is attached on both sides</p>\n</div>\n<div class=\"ui bottom attached segment\">\n  <p>This segment is on bottom</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "WtRBD8nckYHxnoJJt",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Warning",
    "content" : "<h5 class=\"ui top attached header\">\n  Dogs\n</h5>\n<div class=\"ui attached segment\">\n  <p>Dogs are one type of animal</p>\n</div>\n<h5 class=\"ui attached header\">\n  Cats\n</h5>\n<div class=\"ui attached segment\">\n  <p>Cats are thought of as being related to dogs, but only humans think this.</p>\n</div>\n<h5 class=\"ui attached header\">\n  Lions\n</h5>\n<div class=\"ui attached segment\">\n  <p>Humans don't think of lions as being like cats, but they are.</p>\n</div>\n<div class=\"ui bottom attached warning message\">\n  <i class=\"warning icon\"></i>\n  You've reached the end of this content segment!\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "2CrPXTa5jFP99xQhE",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Padded",
    "content" : "<div class=\"ui padded segment\">\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "vB4Tgzd2baPnrXE2b",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Padded 2",
    "content" : "<div class=\"ui very padded segment\">\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "XYuhpCiXbpjBDrkfy",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Compact",
    "content" : "<div class=\"ui compact segment\">\n  <p>Pellentesque habitant morbi</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "QvjsAnhkQeDJAjZd8",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Habitant",
    "content" : "<div class=\"ui compact segments\">\n  <div class=\"ui segment\">\n    <p>Pellentesque habitant morbi</p>\n  </div>\n  <div class=\"ui segment\">\n    <p>Pellentesque habitant morbi</p>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "oBZQQRf2cpWAguX2h",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Colored",
    "content" : "<div class=\"ui red segment\">Red</div>\n<div class=\"ui orange segment\">Orange</div>\n<div class=\"ui yellow segment\">Yellow</div>\n<div class=\"ui olive segment\">Olive</div>\n<div class=\"ui green segment\">Green</div>\n<div class=\"ui teal segment\">Teal</div>\n<div class=\"ui blue segment\">Blue</div>\n<div class=\"ui violet segment\">Violet</div>\n<div class=\"ui purple segment\">Purple</div>\n<div class=\"ui pink segment\">Pink</div>\n<div class=\"ui brown segment\">Brown</div>\n<div class=\"ui grey segment\">Grey</div>\n<div class=\"ui black segment\">Black</div>",
    "isContainer" : false
}

,
{
    "_id" : "k4qqhpmgscwaXL2qv",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Inverted",
    "content" : "<div class=\"ui {{design.color}} {{design.inverted}} segment\">{{data.text}}</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "color",
            "value" : "grey",
            "choices" : "red|orange|yellow|olive|green|teal|blue|violet|purple|pink|brown|grey|black"
        }, 
        {
            "name" : "inverted",
            "value" : "inverted",
            "choices" : "|inverted"
        }
    ],
    "data" : [ 
        {
            "name" : "text",
            "value" : "Colored Inverted"
        }
    ]
}

,
{
    "_id" : "gpKF6vXA2jibdio4T",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Emphasis",
    "content" : "<div class=\"ui segment\">\n  <p>I'm here to tell you something, and you will probably read me first.</p>\n</div>\n<div class=\"ui secondary segment\">\n  <p>I am pretty noticeable but you might check out other content before you look at me.</p>\n</div>\n<div class=\"ui tertiary segment\">\n  <p>If you notice me you must be looking very hard.</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "QKKaxKC7bQpWwAt2T",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Inverted segments",
    "content" : "<div class=\"ui inverted segment\">\n  <p>I'm here to tell you something, and you will probably read me first.</p>\n</div>\n<div class=\"ui secondary inverted segment\">\n  <p>I am pretty noticeable but you might check out other content before you look at me.</p>\n</div>\n<div class=\"ui tertiary inverted segment\">\n  <p>If you notice me you must be looking very hard.</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "62hb7m2T3E48RLmgF",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Inverted red",
    "content" : "<div class=\"ui inverted red segment\">\n  <p>I'm here to tell you something, and you will probably read me first.</p>\n</div>\n<div class=\"ui secondary inverted red segment\">\n  <p>I am pretty noticeable but you might check out other content before you look at me.</p>\n</div>\n<div class=\"ui tertiary inverted red segment\">\n  <p>If you notice me you must be looking very hard.</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "4ZNPCtdRCZCPKXhix",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Circular",
    "content" : "<div class=\"ui circular segment\">\n  <h2 class=\"ui header\">\n    Buy Now\n    <div class=\"sub header\">$10.99</div>\n  </h2>\n</div>\n<div class=\"ui inverted circular segment\">\n  <h2 class=\"ui inverted header\">\n    Buy Now\n    <div class=\"sub header\">$10.99</div>\n  </h2>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "9Yy5zFw63ReexoqnY",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Clearing",
    "content" : "<div class=\"ui clearing segment\">\n  <div class=\"ui right floated button\">Floated</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "X33qarKkkTuTfsWn9",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Floated",
    "content" : "<div class=\"ui right floated segment\">\n  <p>This segment will appear to the right\n</p></div>\n<div class=\"ui left floated segment\">\n  This segment will appear to the left\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "2LsyakL4JY4j4HxoR",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Text alignment",
    "content" : "<div class=\"ui right aligned segment\">\n  Right\n</div>\n<div class=\"ui left aligned segment\">\n  Left\n</div>\n<div class=\"ui center aligned segment\">\n  Center\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "FSAs9RP9QtbgFAzyB",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Basic",
    "content" : "<div class=\"ui basic segment\">\n  <p>{{data.text}}</p>\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "text",
            "value" : "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
        }
    ]
}

,
{
    "_id" : "3WJGcWQNHYuHdc6tk",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Types",
    "content" : "<div class=\"ui steps\">\n  <div class=\"step\">\n    Shipping\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "YoBDLofW3vBLF5tYx",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Ordered",
    "content" : "<div class=\"ui ordered steps\">\n  <div class=\"completed step\">\n    <div class=\"content\">\n      <div class=\"title\">Shipping</div>\n      <div class=\"description\">Choose your shipping options</div>\n    </div>\n  </div>\n  <div class=\"completed step\">\n    <div class=\"content\">\n      <div class=\"title\">Billing</div>\n      <div class=\"description\">Enter billing information</div>\n    </div>\n  </div>\n  <div class=\"active step\">\n    <div class=\"content\">\n      <div class=\"title\">Confirm Order</div>\n      <div class=\"description\">Verify order details</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "GRfbrn4zDfr643nib",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Vertical",
    "content" : "<div class=\"ui vertical steps\">\n  <div class=\"completed step\">\n    <i class=\"truck icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Shipping</div>\n      <div class=\"description\">Choose your shipping options</div>\n    </div>\n  </div>\n  <div class=\"completed step\">\n    <i class=\"credit card icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Billing</div>\n      <div class=\"description\">Enter billing information</div>\n    </div>\n  </div>\n  <div class=\"active step\">\n    <i class=\"info icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Confirm Order</div>\n      <div class=\"description\">Verify order details</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "btk9fRXSqfbhCy9dN",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Content",
    "content" : "<div class=\"ui steps\">\n  <div class=\"step\">\n    <div class=\"title\">Shipping</div>\n    <div class=\"description\">Choose your shipping options</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "cHPffFnqXtvFwPGyB",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Icon",
    "content" : "<div class=\"ui steps\">\n  <div class=\"step\">\n    <i class=\"truck icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Shipping</div>\n      <div class=\"description\">Choose your shipping options</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "RiEDkTcoChCNqgCLn",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Link",
    "content" : "<div class=\"ui steps\">\n  <a class=\"active step\">\n    <i class=\"truck icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Shipping</div>\n      <div class=\"description\">Choose your shipping options</div>\n    </div>\n  </a>\n  <a class=\"step\">\n    <div class=\"content\">\n      <div class=\"title\">Billing</div>\n      <div class=\"description\">Enter billing information</div>\n    </div>\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ZoaEqXsyPdPpPxyzy",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Active",
    "content" : "<div class=\"ui steps\">\n  <div class=\"active step\">\n    <i class=\"payment icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Billing</div>\n      <div class=\"description\">Enter billing information</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "uqunvAwFBvQf7AL4d",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Completed",
    "content" : "<div class=\"ui steps\">\n  <div class=\" step\">\n    <i class=\"payment icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Billing</div>\n      <div class=\"description\">Enter billing information</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "8jPvXarL2arsNKZBB",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Title",
    "content" : "<div class=\"ui ordered steps\">\n  <div class=\"completed step\">\n    <div class=\"content\">\n      <div class=\"title\">Billing</div>\n      <div class=\"description\">Enter billing information</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "jfh2YbzRroBDXduhx",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Disabled",
    "content" : "<div class=\"ui steps\">\n  <div class=\"disabled step\">\n    Billing\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "oKa6R9kGethXKHWRT",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Stackable",
    "content" : "<div class=\"ui tablet stackable steps\">\n  <div class=\"step\">\n    <i class=\"plane icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Shipping</div>\n      <div class=\"description\">Choose your shipping options</div>\n    </div>\n  </div>\n  <div class=\"active step\">\n    <i class=\"dollar icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Billing</div>\n      <div class=\"description\">Enter billing information</div>\n    </div>\n  </div>\n  <div class=\"disabled step\">\n    <i class=\"info circle icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Confirm Order</div>\n      <div class=\"description\">Verify order details</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "bahC3HRhE384veEsM",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Fluid",
    "content" : "<div class=\"ui two column grid\">\n  <div class=\"column\">\n    <div class=\"ui fluid vertical steps\">\n      <div class=\"completed step\">\n        <i class=\"truck icon\"></i>\n        <div class=\"content\">\n          <div class=\"title\">Shipping</div>\n          <div class=\"description\">Choose your shipping options</div>\n        </div>\n      </div>\n      <div class=\"active step\">\n        <i class=\"dollar icon\"></i>\n        <div class=\"content\">\n          <div class=\"title\">Billing</div>\n          <div class=\"description\">Enter billing information</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"column\">\n    <p>The steps take up the entire column width</p>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "8iPquuqDdPDMPxPWD",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Attached",
    "content" : "<div class=\"ui three top attached steps\">\n  <div class=\"step\">\n    <i class=\"truck icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Shipping</div>\n      <div class=\"description\">Choose your shipping options</div>\n    </div>\n  </div>\n  <div class=\"active step\">\n    <i class=\"payment icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Billing</div>\n      <div class=\"description\">Enter billing information</div>\n    </div>\n  </div>\n  <div class=\"disabled step\">\n    <i class=\"info icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Confirm Order</div>\n      <div class=\"description\">Verify order details</div>\n    </div>\n  </div>\n</div>\n<div class=\"ui attached segment\">\n  <p></p>\n</div>\n<div class=\"ui three bottom attached steps\">\n  <div class=\"step\">\n    <i class=\"truck icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Shipping</div>\n      <div class=\"description\">Choose your shipping options</div>\n    </div>\n  </div>\n  <div class=\"active step\">\n    <i class=\"payment icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Billing</div>\n      <div class=\"description\">Enter billing information</div>\n    </div>\n  </div>\n  <div class=\"disabled step\">\n    <i class=\"info icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Confirm Order</div>\n      <div class=\"description\">Verify order details</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "zMjQggqnc8kZgv53i",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Evenly Divided",
    "content" : "<div class=\"ui three steps\">\n  <div class=\"step\">\n    <i class=\"truck icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Shipping</div>\n    </div>\n  </div>\n  <div class=\"active step\">\n    <i class=\"payment icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Billing</div>\n    </div>\n  </div>\n  <div class=\"disabled step\">\n    <i class=\"info icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Confirm Order</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ZEFDjY3X27J3ZPEtY",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Payment",
    "content" : "<div class=\"ui two steps\">\n  <div class=\"active step\">\n    <i class=\"payment icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Billing</div>\n    </div>\n  </div>\n  <div class=\"disabled step\">\n    <i class=\"info icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Confirm Order</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "iNJbNKNNbhSEPPtWz",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Size",
    "content" : "<div class=\"ui small steps\">\n  <div class=\"step\">\n    <i class=\"truck icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Shipping</div>\n      <div class=\"description\">Choose your shipping options</div>\n    </div>\n  </div>\n  <div class=\"active step\">\n    <i class=\"payment icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Billing</div>\n      <div class=\"description\">Enter billing information</div>\n    </div>\n  </div>\n  <div class=\"disabled step\">\n    <i class=\"info icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Confirm Order</div>\n      <div class=\"description\">Verify order details</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "hG7NAsMeZhA4ZtsCe",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Name",
    "content" : "<div class=\"ui large steps\">\n  <div class=\"step\">\n    <i class=\"truck icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Shipping</div>\n    </div>\n  </div>\n  <div class=\"active step\">\n    <i class=\"payment icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">Billing</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "G2RwajPmeBKZJMN7H",
    "parent" : "iCD8kCB7k7oYtXA8W",
    "name" : "Types",
    "content" : "<div class=\"ui breadcrumb\">\n  <a class=\"section\">Home</a>\n  <div class=\"divider\"> / </div>\n  <a class=\"section\">Store</a>\n  <div class=\"divider\"> / </div>\n  <div class=\"active section\">T-Shirt</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "rbLT8pARggcisSg5Q",
    "parent" : "iCD8kCB7k7oYtXA8W",
    "name" : "T shirt",
    "content" : "<div class=\"ui breadcrumb\">\n  <a class=\"section\">Home</a>\n  <i class=\"right angle icon divider\"></i>\n  <a class=\"section\">Store</a>\n  <i class=\"right angle icon divider\"></i>\n  <div class=\"active section\">T-Shirt</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "YnDnNWkycZTAShcbS",
    "parent" : "iCD8kCB7k7oYtXA8W",
    "name" : "Content",
    "content" : "<div class=\"ui breadcrumb\">\n  <a class=\"section\">Home</a>\n  <span class=\"divider\">/</span>\n  <a class=\"section\">Registration</a>\n  <span class=\"divider\">/</span>\n  <div class=\"active section\">Personal Information</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "gSgKbA2zxeL9BHMyo",
    "parent" : "iCD8kCB7k7oYtXA8W",
    "name" : "Home",
    "content" : "<div class=\"ui breadcrumb\">\n  <a class=\"section\">Home</a>\n  <i class=\"right chevron icon divider\"></i>\n  <a class=\"section\">Registration</a>\n  <i class=\"right arrow icon divider\"></i>\n  <div class=\"active section\">Personal Information</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "vgpAuixkwe4KgZ42m",
    "parent" : "iCD8kCB7k7oYtXA8W",
    "name" : "Section",
    "content" : "<div class=\"ui breadcrumb\">\n  <div class=\"section\">Home</div>\n  <div class=\"divider\"> / </div>\n  <div class=\"active section\">Search</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "44fERTcqGr4niiste",
    "parent" : "iCD8kCB7k7oYtXA8W",
    "name" : "Link",
    "content" : "<div class=\"ui breadcrumb\">\n  <a class=\"section\">Home</a>\n  <div class=\"divider\"> / </div>\n  <div class=\"active section\">Search for: <a href=\"#\">paper towels</a></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "YZ6eXA8hAwrLc7KL4",
    "parent" : "iCD8kCB7k7oYtXA8W",
    "name" : "Active",
    "content" : "<div class=\"ui breadcrumb\">\n  <a class=\"section\">Products</a>\n  <div class=\"divider\"> / </div>\n  <div class=\"active section\">Paper Towels</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "dXP34457eCDYPMsq7",
    "parent" : "iCD8kCB7k7oYtXA8W",
    "name" : "Variations size",
    "content" : "<div class=\"ui small breadcrumb\">\n  <a class=\"section\">Home</a>\n  <i class=\"right chevron icon divider\"></i>\n  <a class=\"section\">Registration</a>\n  <i class=\"right chevron icon divider\"></i>\n  <div class=\"active section\">Personal Information</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "umNxc9zsQkCbPahXz",
    "parent" : "iCD8kCB7k7oYtXA8W",
    "name" : "Registration",
    "content" : "<div class=\"ui large breadcrumb\">\n  <a class=\"section\">Home</a>\n  <i class=\"right chevron icon divider\"></i>\n  <a class=\"section\">Registration</a>\n  <i class=\"right chevron icon divider\"></i>\n  <div class=\"active section\">Personal Information</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "u9Ycyd9Znm3HAuggJ",
    "parent" : "iCD8kCB7k7oYtXA8W",
    "name" : "Information",
    "content" : "<div class=\"ui huge breadcrumb\">\n  <a class=\"section\">Home</a>\n  <i class=\"right chevron icon divider\"></i>\n  <a class=\"section\">Registration</a>\n  <i class=\"right chevron icon divider\"></i>\n  <div class=\"active section\">Personal Information</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "2NNpoLEN2TCAyuWeE",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Form types",
    "content" : "<form class=\"ui form\">\n  <div class=\"field\">\n    <label>First Name</label>\n    <input type=\"text\" name=\"first-name\" placeholder=\"First Name\">\n  </div>\n  <div class=\"field\">\n    <label>Last Name</label>\n    <input type=\"text\" name=\"last-name\" placeholder=\"Last Name\">\n  </div>\n  <div class=\"field\">\n    <div class=\"ui checkbox\">\n      <input type=\"checkbox\" tabindex=\"0\" class=\"hidden\">\n      <label>I agree to the Terms and Conditions</label>\n    </div>\n  </div>\n  <button class=\"ui button\" type=\"submit\">Submit</button>\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "wvsFAstqGhe9KXSjp",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Field content",
    "content" : "<div class=\"ui form\">\n  <div class=\"field\">\n    <label>User Input</label>\n    <input type=\"text\">\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "PLPgFQJ5nBYXyvdTG",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Fields",
    "content" : "<div class=\"ui form\">\n  <div class=\"fields\">\n    <div class=\"field\">\n      <label>First name</label>\n      <input type=\"text\" placeholder=\"First Name\">\n    </div>\n    <div class=\"field\">\n      <label>Middle name</label>\n      <input type=\"text\" placeholder=\"Middle Name\">\n    </div>\n    <div class=\"field\">\n      <label>Last name</label>\n      <input type=\"text\" placeholder=\"Last Name\">\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "3f3PsdGsKocrQvDFJ",
    "parent" : "NTgycDiit2iPx7joJ",
    "name" : "Dropdown",
    "isContainer" : false
}

,
{
    "_id" : "rqhoRsCNXtJwGkLkr",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Name",
    "content" : "<div class=\"ui form\">\n  <div class=\"three fields\">\n    <div class=\"field\">\n      <label>First name</label>\n      <input type=\"text\" placeholder=\"First Name\">\n    </div>\n    <div class=\"field\">\n      <label>Middle name</label>\n      <input type=\"text\" placeholder=\"Middle Name\">\n    </div>\n    <div class=\"field\">\n      <label>Last name</label>\n      <input type=\"text\" placeholder=\"Last Name\">\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "aJyyzQxaCmtdN9uvX",
    "parent" : "NTgycDiit2iPx7joJ",
    "name" : "Embed",
    "isContainer" : false
}

,
{
    "_id" : "NYH8BDhF7sWRZxoes",
    "parent" : "NTgycDiit2iPx7joJ",
    "name" : "Modal",
    "isContainer" : false
}

,
{
    "_id" : "r5G9HMYWcLkbuHk5J",
    "parent" : "NTgycDiit2iPx7joJ",
    "name" : "Nag",
    "isContainer" : false
}

,
{
    "_id" : "6xFAMsnQwzXfwiw6v",
    "parent" : "NTgycDiit2iPx7joJ",
    "name" : "Popup",
    "isContainer" : false
}

,
{
    "_id" : "QwXSwyBKCjm484Bu4",
    "parent" : "NTgycDiit2iPx7joJ",
    "name" : "Progress",
    "isContainer" : false
}

,
{
    "_id" : "oGRqvtYgutNgCGaWs",
    "parent" : "NTgycDiit2iPx7joJ",
    "name" : "Rating",
    "isContainer" : false
}

,
{
    "_id" : "YabxrGXPEfQnmYneM",
    "parent" : "NTgycDiit2iPx7joJ",
    "name" : "Search",
    "isContainer" : false
}

,
{
    "_id" : "nfRghQLQW89rFcp8R",
    "parent" : "NTgycDiit2iPx7joJ",
    "name" : "Shape",
    "isContainer" : false
}

,
{
    "_id" : "nfvJRyLFaSsL5uhvf",
    "parent" : "NTgycDiit2iPx7joJ",
    "name" : "Sidebar",
    "isContainer" : false
}

,
{
    "_id" : "3iuNLCDYG8CzEbfb8",
    "parent" : "NTgycDiit2iPx7joJ",
    "name" : "Sticky",
    "isContainer" : false
}

,
{
    "_id" : "7CuoEL5bh9KC4zGaN",
    "parent" : "NTgycDiit2iPx7joJ",
    "name" : "Tab",
    "isContainer" : false
}

,
{
    "_id" : "XsgdiwWX499DpPRfW",
    "parent" : "NTgycDiit2iPx7joJ",
    "name" : "Transition",
    "isContainer" : false
}

,
{
    "_id" : "TSqHdwYeoFP9SrrPs",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Field Error",
    "content" : "<div class=\"ui form\">\n  <div class=\"two fields\">\n    <div class=\"field error\">\n      <label>First Name</label>\n      <input placeholder=\"First Name\" type=\"text\">\n    </div>\n    <div class=\"field\">\n      <label>Last Name</label>\n      <input placeholder=\"Last Name\" type=\"text\">\n    </div>\n  </div>\n  <div class=\"field error\">\n    <label>Gender</label>\n    <div class=\"ui selection dropdown\">\n      <div class=\"default text\">Select</div>\n      <i class=\"dropdown icon\"></i>\n      <input type=\"hidden\" name=\"gender\">\n      <div class=\"menu\">\n        <div class=\"item\" data-value=\"male\">Male</div>\n        <div class=\"item\" data-value=\"female\">Female</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"inline field error\">\n    <div class=\"ui checkbox\">\n      <input type=\"checkbox\" tabindex=\"0\" class=\"hidden\">\n      <label>I agree to the Terms and Conditions</label>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "CbymmAqq4TYCMYNiD",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Gender",
    "content" : "<div class=\"ui form\">\n  <div class=\"two fields\">\n    <div class=\"field error\">\n      <label>First Name</label>\n      <input placeholder=\"First Name\" type=\"text\">\n    </div>\n    <div class=\"field\">\n      <label>Last Name</label>\n      <input placeholder=\"Last Name\" type=\"text\">\n    </div>\n  </div>\n  <div class=\"field error\">\n    <label>Gender</label>\n    <div class=\"ui selection dropdown\">\n      <div class=\"default text\">Select</div>\n      <i class=\"dropdown icon\"></i>\n      <input type=\"hidden\" name=\"gender\">\n      <div class=\"menu\">\n        <div class=\"item\" data-value=\"male\">Male</div>\n        <div class=\"item\" data-value=\"female\">Female</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"inline field error\">\n    <div class=\"ui checkbox\">\n      <input type=\"checkbox\" tabindex=\"0\" class=\"hidden\">\n      <label>I agree to the Terms and Conditions</label>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "YEy295yQAumm3p2LW",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Disabled Field",
    "content" : "<div class=\"ui form\">\n  <div class=\"two fields\">\n    <div class=\"disabled field\">\n      <label>First Name</label>\n      <input placeholder=\"Read Only\" disabled=\"\" type=\"text\">\n    </div>\n    <div class=\"disabled field\">\n      <label>Last Name</label>\n      <input placeholder=\"Disabled\" disabled=\"\" type=\"text\">\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "bxp6WDffSTGjv86kQ",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Read-Only Field",
    "content" : "<div class=\"ui form\">\n  <div class=\"two fields\">\n    <div class=\"field\">\n      <label>First Name</label>\n      <input placeholder=\"Read Only\" readonly=\"\" type=\"text\">\n    </div>\n    <div class=\"field\">\n      <label>Last Name</label>\n      <input placeholder=\"Read Only\" readonly=\"\" type=\"text\">\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "RCFZfHASq2YJJo8GH",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Form Variations",
    "content" : "<div class=\"ui fluid form\">\n  <div class=\"two fields\">\n    <div class=\"field\">\n      <label>First Name</label>\n      <input placeholder=\"First Name\" type=\"text\">\n    </div>\n    <div class=\"field\">\n      <label>Last Name</label>\n      <input placeholder=\"Last Name\" type=\"text\">\n    </div>\n  </div>\n  <div class=\"ui submit button\">Submit</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "mRKZQdZt8iijRttwP",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Size",
    "content" : "<div class=\"ui small form\">\n  <div class=\"two fields\">\n    <div class=\"field\">\n      <label>First Name</label>\n      <input placeholder=\"First Name\" type=\"text\">\n    </div>\n    <div class=\"field\">\n      <label>Last Name</label>\n      <input placeholder=\"Last Name\" type=\"text\">\n    </div>\n  </div>\n  <div class=\"ui submit button\">Submit</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "CztvPC6NE87hp94jn",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Submit",
    "content" : "<div class=\"ui large form\">\n  <div class=\"two fields\">\n    <div class=\"field\">\n      <label>First Name</label>\n      <input placeholder=\"First Name\" type=\"text\">\n    </div>\n    <div class=\"field\">\n      <label>Last Name</label>\n      <input placeholder=\"Last Name\" type=\"text\">\n    </div>\n  </div>\n  <div class=\"ui submit button\">Submit</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "FYrpeAv2tS9BxJSAH",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Inverted",
    "content" : "<div class=\"ui inverted segment\">\n  <div class=\"ui inverted form\">\n    <div class=\"two fields\">\n      <div class=\"field\">\n        <label>First Name</label>\n        <input placeholder=\"First Name\" type=\"text\">\n      </div>\n      <div class=\"field\">\n        <label>Last Name</label>\n        <input placeholder=\"Last Name\" type=\"text\">\n      </div>\n    </div>\n    <div class=\"inline field\">\n      <div class=\"ui checkbox\">\n        <input type=\"checkbox\" tabindex=\"0\" class=\"hidden\">\n        <label>I agree to the terms and conditions</label>\n      </div>\n    </div>\n    <div class=\"ui submit button\">Submit</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "zkfBm8bHYSK4oncQt",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Field Variations",
    "content" : "<div class=\"ui form\">\n  <div class=\"inline field\">\n    <label>Last name</label>\n    <input type=\"text\" placeholder=\"Full Name\">\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "9FGecmAsgbfas5Xeg",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Width",
    "content" : "<div class=\"ui form\">\n  <div class=\"fields\">\n    <div class=\"six wide field\">\n      <label>First name</label>\n      <input type=\"text\" placeholder=\"First Name\">\n    </div>\n    <div class=\"four wide field\">\n      <label>Middle</label>\n      <input type=\"text\" placeholder=\"Middle Name\">\n    </div>\n    <div class=\"six wide field\">\n      <label>Last name</label>\n      <input type=\"text\" placeholder=\"Last Name\">\n    </div>\n  </div>\n  <div class=\"fields\">\n    <div class=\"two wide field\">\n      <input type=\"text\" placeholder=\"2 Wide\">\n    </div>\n    <div class=\"twelve wide field\">\n      <input type=\"text\" placeholder=\"12 Wide\">\n    </div>\n    <div class=\"two wide field\">\n      <input type=\"text\" placeholder=\"2 Wide\">\n    </div>\n  </div>\n  <div class=\"fields\">\n    <div class=\"eight wide field\">\n      <input type=\"text\" placeholder=\"8 Wide\">\n    </div>\n    <div class=\"six wide field\">\n      <input type=\"text\" placeholder=\"6 Wide\">\n    </div>\n    <div class=\"two wide field\">\n      <input type=\"text\" placeholder=\"2 Wide\">\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "xRcbuuGRCm6k93p7W",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Required",
    "content" : "<div class=\"ui form\">\n    <div class=\"required field\">\n      <label>Last name</label>\n      <input type=\"text\" placeholder=\"Full Name\">\n    </div>\n    <div class=\"required inline field\">\n      <div class=\"ui checkbox\">\n        <input type=\"checkbox\" tabindex=\"0\" class=\"hidden\">\n        <label>I agree to the terms and conditions</label>\n      </div>\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "tCzdX8Bcs7fqgeYG3",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Group Variations",
    "content" : "<div class=\"ui form\">\n  <div class=\"three fields\">\n    <div class=\"field\">\n      <label>First name</label>\n      <input type=\"text\" placeholder=\"First Name\">\n    </div>\n    <div class=\"field\">\n      <label>Middle name</label>\n      <input type=\"text\" placeholder=\"Middle Name\">\n    </div>\n    <div class=\"field\">\n      <label>Last name</label>\n      <input type=\"text\" placeholder=\"Last Name\">\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "MxSda7sqBi5FxN4Cd",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Grouped Fields",
    "content" : "<div class=\"ui form\">\n  <div class=\"grouped fields\">\n    <div class=\"field\">\n      <div class=\"ui radio checkbox\">\n        <input type=\"radio\" name=\"fruit\" tabindex=\"0\" class=\"hidden\">\n        <label>Apples</label>\n      </div>\n    </div>\n    <div class=\"field\">\n      <div class=\"ui radio checkbox\">\n        <input type=\"radio\" name=\"fruit\" tabindex=\"0\" class=\"hidden\">\n        <label>Oranges</label>\n      </div>\n    </div>\n    <div class=\"field\">\n      <div class=\"ui radio checkbox\">\n        <input type=\"radio\" name=\"fruit\" tabindex=\"0\" class=\"hidden\">\n        <label>Pears</label>\n      </div>\n    </div>\n    <div class=\"field\">\n      <div class=\"ui radio checkbox\">\n        <input type=\"radio\" name=\"fruit\" tabindex=\"0\" class=\"hidden\">\n        <label>Grapefruit</label>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "oEz3ygHztKa5E2m2o",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Inline",
    "content" : "<div class=\"ui form\">\n  <div class=\"inline fields\">\n    <div class=\"field\">\n      <label>Phone Number</label>\n      <input type=\"text\" placeholder=\"(xxx)\">\n    </div>\n    <div class=\"field\">\n      <input type=\"text\" placeholder=\"xxx\">\n    </div>\n    <div class=\"field\">\n      <input type=\"text\" placeholder=\"xxxx\">\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "TLYBGzP6yiy595ZqJ",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Favorite",
    "content" : "<div class=\"ui form\">\n  <div class=\"inline fields\">\n    <label>What's your favorite fruit?</label>\n    <div class=\"field\">\n      <div class=\"ui radio checkbox\">\n        <input type=\"radio\" name=\"fruit\" tabindex=\"0\" class=\"hidden\">\n        <label>Apples</label>\n      </div>\n    </div>\n    <div class=\"field\">\n      <div class=\"ui radio checkbox\">\n        <input type=\"radio\" name=\"fruit\" tabindex=\"0\" class=\"hidden\">\n        <label>Oranges</label>\n      </div>\n    </div>\n    <div class=\"field\">\n      <div class=\"ui radio checkbox\">\n        <input type=\"radio\" name=\"fruit\" tabindex=\"0\" class=\"hidden\">\n        <label>Pears</label>\n      </div>\n    </div>\n    <div class=\"field\">\n      <div class=\"ui radio checkbox\">\n        <input type=\"radio\" name=\"fruit\" tabindex=\"0\" class=\"hidden\">\n        <label>Grapefruit</label>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "9mE7vhS9s8aJFyCd8",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Introduction",
    "content" : "<div class=\"ui grid\">\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Kzh6XNrceCWeEhLwh",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Columns",
    "content" : "<div class=\"ui grid\">\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"two wide column\"></div>\n  <div class=\"eight wide column\"></div>\n  <div class=\"six wide column\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Z5ra2Q68u8muDJMww",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Rows",
    "content" : "<div class=\"ui four column grid\">\n  <div class=\"row\">\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n  </div>\n  <div class=\"column\"></div>\n  <div class=\"column\"></div>\n  <div class=\"column\"></div>\n  <div class=\"column\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "MeY7nXQ4dKrJYLeZc",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Gutters",
    "content" : "<div class=\"ui grid\">\n  <div class=\"three column row\">\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n  </div>\n  <div class=\"eight column row\">\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n  </div>\n</div>\n<div class=\"ui relaxed grid\">\n  <div class=\"three column row\">\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n  </div>\n  <div class=\"eight column row\">\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "H2kiZ8RanFMsipmqR",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Negative Margins",
    "content" : "<div class=\"ui top attached button\">Button before grid</div>\n<div class=\"ui grid\">\n  <div class=\"sixteen wide column\"></div>\n  <div class=\"ten wide column\"></div>\n  <div class=\"six wide column\"></div>\n</div>\n<div class=\"ui grid\">\n  <div class=\"sixteen wide column\"></div>\n</div>\n<div class=\"ui bottom attached button\">Button after grid</div>",
    "isContainer" : false
}

,
{
    "_id" : "EGsfE9WxBKg6D8Qqy",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Columns",
    "content" : "<div class=\"ui grid\">\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "pRFSJ42ticsuiGiDM",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Column Content",
    "content" : "<div class=\"ui three column grid\">\n  <div class=\"column\">\n    <div class=\"ui segment\">\n      <img>\n    </div>\n  </div>\n  <div class=\"column\">\n    <div class=\"ui segment\">\n      <img>\n    </div>\n  </div>\n  <div class=\"column\">\n    <div class=\"ui segment\">\n      <img>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "CDbPsPdEw59WcLjWu",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Column Widths",
    "content" : "<div class=\"ui grid\">\n  <div class=\"eight wide column\"></div>\n  <div class=\"eight wide column\"></div>\n  <div class=\"ten wide column\"></div>\n  <div class=\"six wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"twelve wide column\"></div>\n  <div class=\"two wide column\"></div>\n  <div class=\"fourteen wide column\"></div>\n  <div class=\"sixteen wide column\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "bxEgmS2dJFwgxQjeu",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Rows",
    "content" : "<div class=\"ui four column grid\">\n  <div class=\"two column row\">\n    <div class=\"column\"></div>\n  </div>\n  <div class=\"column\"></div>\n  <div class=\"column\"></div>\n  <div class=\"column\"></div>\n  <div class=\"column\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "PKNjLWLmkaMj9xjxY",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Clearing Content",
    "content" : "<div class=\"ui grid\">\n  <div class=\"four column row\">\n    <div class=\"left floated column\"></div>\n    <div class=\"right floated column\"></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"three wide column\"></div>\n    <div class=\"eight wide column\"></div>\n    <div class=\"five wide column\"></div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "aszLj9rcJp38TNPW5",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Special Grids",
    "content" : "<div class=\"ui internally celled grid\">\n  <div class=\"row\">\n    <div class=\"three wide column\">\n      <img>\n    </div>\n    <div class=\"ten wide column\">\n      <p></p>\n    </div>\n    <div class=\"three wide column\">\n      <img>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"three wide column\">\n      <img>\n    </div>\n    <div class=\"ten wide column\">\n      <p></p>\n    </div>\n    <div class=\"three wide column\">\n      <img>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ECx32cvehXZRkGA54",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Varying Grids",
    "content" : "<div class=\"ui two column grid\">\n  <div class=\"column\">\n    <div class=\"ui three column grid\">\n      <div class=\"column\"></div>\n      <div class=\"column\"></div>\n      <div class=\"column\"></div>\n    </div>\n  </div>\n  <div class=\"column\"></div>\n  <div class=\"column\"></div>\n  <div class=\"column\">\n    <div class=\"ui grid\">\n      <div class=\"ten wide column\"></div>\n      <div class=\"six wide column\"></div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ejAD8y4MMrKWhvWT2",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Colored",
    "content" : "<div class=\"ui equal width center aligned padded grid\">\n  <div class=\"row\">\n    <div class=\"olive column\">\n      Olive\n    </div>\n    <div class=\"black column\">\n      Black\n    </div>\n  </div>\n  <div class=\"row\" style=\"background-color: #869D05;color: #FFFFFF;\">\n    <div class=\"column\">Custom Row</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"black column\">\n      Black\n    </div>\n    <div class=\"olive column\">\n      Olive\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "izq8NhxnNxCeK6oHQ",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Automatic Column Count",
    "content" : "<div class=\"ui equal width grid\">\n  <div class=\"column\"></div>\n  <div class=\"column\"></div>\n  <div class=\"column\"></div>\n  <div class=\"equal width row\">\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "MLKR3N7tWYDmRcznT",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Centering Content",
    "content" : "<div class=\"ui two column centered grid\">\n  <div class=\"column\"></div>\n  <div class=\"four column centered row\">\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "FPEiYG996cBWTbeiA",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Significant Word Order",
    "content" : "<div class=\"ui right aligned grid\">\n  <div class=\"left floated right aligned six wide column\">\n    <div class=\"ui segment\">\n      Left floated right aligned column\n    </div>\n  </div>\n  <div class=\"right floated left aligned six wide column\">\n    <div class=\"ui segment\">\n      Right floated left aligned column\n    </div>\n  </div>\n  <div class=\"center aligned two column row\">\n    <div class=\"column\">\n      <div class=\"ui segment\">\n      Center aligned row\n      </div>\n    </div>\n    <div class=\"column\">\n      <div class=\"ui segment\">\n      Center aligned row\n      </div>\n    </div>\n  </div>\n  <div class=\"sixteen wide column\">\n    <div class=\"ui segment\">\n      Right Aligned Grid\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "reuR7kBxHYGQKq4gA",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Responsive Grids",
    "content" : "<div class=\"ui grid container\">\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n  <div class=\"four wide column\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "y5HQjeuqFZ9hTj9eq",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Stackable",
    "content" : "<div class=\"ui stackable four column grid\">\n  <div class=\"column\"></div>\n  <div class=\"column\"></div>\n  <div class=\"column\"></div>\n  <div class=\"column\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "mG92CAkK5LX4C7WRW",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Doubling",
    "content" : "<div class=\"ui grid\">\n  <div class=\"doubling eight column row\">\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n  </div>\n  <div class=\"doubling six column row\">\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n  </div>\n  <div class=\"doubling four column row\">\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n    <div class=\"column\"></div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "La8eGotWMcowi9am4",
    "parent" : "D4mgRKWu9QnzRhXAz",
    "name" : "Manual Tweaks",
    "content" : "<div class=\"ui centered grid\">\n  <div class=\"computer only row\">\n    <div class=\"column\"></div>\n  </div>\n  <div class=\"six wide tablet eight wide computer column\"></div>\n  <div class=\"six wide tablet eight wide computer column\"></div>\n  <div class=\"six wide tablet eight wide computer column\"></div>\n  <div class=\"six wide tablet eight wide computer column\"></div>\n  <div class=\"six wide tablet eight wide computer column\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "5jYoxaPqxf3eZCJRZ",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Types",
    "content" : "<div class=\"ui three item menu\">\n  <a class=\"active item\">Editorials</a>\n  <a class=\"item\">Reviews</a>\n  <a class=\"item\">Upcoming Events</a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "yb6CJdBu5TJ8hHRBM",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Browse",
    "content" : "<div class=\"ui text menu\">\n  <div class=\"item\">\n    <img src=\"/images/new-school.jpg\">\n  </div>\n  <a class=\"browse item\">\n    Browse Courses\n    <i class=\"dropdown icon\"></i>\n  </a>\n  <div class=\"ui right dropdown item\">\n    More\n    <i class=\"dropdown icon\"></i>\n    <div class=\"menu\">\n      <div class=\"item\">Applications</div>\n      <div class=\"item\">International Students</div>\n      <div class=\"item\">Scholarships</div>\n    </div>\n  </div>\n</div>\n<div class=\"ui flowing basic admission popup\">\n  <div class=\"ui three column relaxed divided grid\">\n    <div class=\"column\">\n      <h4 class=\"ui header\">Business</h4>\n      <div class=\"ui link list\">\n        <a class=\"item\">Design &amp; Urban Ecologies</a>\n        <a class=\"item\">Fashion Design</a>\n        <a class=\"item\">Fine Art</a>\n        <a class=\"item\">Strategic Design</a>\n      </div>\n    </div>\n    <div class=\"column\">\n      <h4 class=\"ui header\">Liberal Arts</h4>\n      <div class=\"ui link list\">\n        <a class=\"item\">Anthropology</a>\n        <a class=\"item\">Economics</a>\n        <a class=\"item\">Media Studies</a>\n        <a class=\"item\">Philosophy</a>\n      </div>\n    </div>\n    <div class=\"column\">\n      <h4 class=\"ui header\">Social Sciences</h4>\n      <div class=\"ui link list\">\n        <a class=\"item\">Food Studies</a>\n        <a class=\"item\">Journalism</a>\n        <a class=\"item\">Non Profit Management</a>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "9y54LpCedDxSdXC2M",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Secondary Menu",
    "content" : "<div class=\"ui secondary  menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n  <div class=\"right menu\">\n    <div class=\"item\">\n      <div class=\"ui icon input\">\n        <input type=\"text\" placeholder=\"Search...\">\n        <i class=\"search link icon\"></i>\n      </div>\n    </div>\n    <a class=\"ui item\">\n      Logout\n    </a>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "9XndZ4ndTfK9zdzJB",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Pointing",
    "content" : "<div class=\"ui pointing menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n  <div class=\"right menu\">\n    <div class=\"item\">\n      <div class=\"ui transparent icon input\">\n        <input type=\"text\" placeholder=\"Search...\">\n        <i class=\"search link icon\"></i>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"ui segment\">\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "XZvoE4zJSAbHQkAkK",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Logout",
    "content" : "<div class=\"ui secondary pointing menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n  <div class=\"right menu\">\n    <a class=\"ui item\">\n      Logout\n    </a>\n  </div>\n</div>\n<div class=\"ui segment\">\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "SNkZq5NQPobnsRv2u",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Tabular",
    "content" : "<div class=\"ui tabular menu\">\n  <a class=\"active item\">\n    Bio\n  </a>\n  <a class=\"item\">\n    Photos\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "EMETgq2i3scqB5yFF",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Example",
    "content" : "<div class=\"ui top attached tabular menu\">\n  <div class=\"item\">\n    <img src=\"/images/logo.png\">\n  </div>\n  <a class=\"active item\">\n    Bio\n  </a>\n  <a class=\"item\">\n    Photos\n  </a>\n  <div class=\"right menu\">\n    <div class=\"item\">\n      <div class=\"ui transparent icon input\">\n        <input type=\"text\" placeholder=\"Search users...\">\n        <i class=\"search link icon\"></i>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"ui bottom attached segment\">\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "TB2RKdWkvHYx42THG",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Bio",
    "content" : "<div class=\"ui grid\">\n  <div class=\"four wide column\">\n    <div class=\"ui vertical fluid tabular menu\">\n      <a class=\"active item\">\n        Bio\n      </a>\n      <a class=\"item\">\n        Pics\n      </a>\n      <a class=\"item\">\n        Companies\n      </a>\n      <a class=\"item\">\n        Links\n      </a>\n    </div>\n  </div>\n  <div class=\"twelve wide stretched column\">\n    <div class=\"ui segment\">\n      This is an stretched grid column. This segment will always match the tab height\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "w9ghDBK6dSWyjpxwq",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Text",
    "content" : "<div class=\"ui text menu\">\n  <div class=\"header item\">Sort By</div>\n  <a class=\"active item\">\n    Closest\n  </a>\n  <a class=\"item\">\n    Most Comments\n  </a>\n  <a class=\"item\">\n    Most Popular\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "BBwx36N6HBRJNJrRr",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Vertical Menu",
    "content" : "<div class=\"ui vertical menu\">\n  <a class=\"active teal item\">\n    Inbox\n    <div class=\"ui teal pointing left label\">1</div>\n  </a>\n  <a class=\"item\">\n    Spam\n    <div class=\"ui label\">51</div>\n  </a>\n  <a class=\"item\">\n    Updates\n    <div class=\"ui label\">1</div>\n  </a>\n  <div class=\"item\">\n    <div class=\"ui transparent icon input\">\n      <input type=\"text\" placeholder=\"Search mail...\">\n      <i class=\"search icon\"></i>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "6RMmmG38zAYqEJX9R",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Account",
    "content" : "<div class=\"ui secondary vertical menu\">\n  <a class=\"active item\">\n    Account\n  </a>\n  <a class=\"item\">\n    Settings\n  </a>\n  <div class=\"ui dropdown item\">\n    <i class=\"dropdown icon\"></i>\n    Display Options\n    <div class=\"menu\">\n      <div class=\"header\">Text Size</div>\n      <a class=\"item\">Small</a>\n      <a class=\"item\">Medium</a>\n      <a class=\"item\">Large</a>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "fesPKgtXe8GLwKrNq",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Sort by",
    "content" : "<div class=\"ui vertical text menu\">\n  <div class=\"header item\">Sort By</div>\n  <a class=\"active item\">\n    Closest\n  </a>\n  <a class=\"item\">\n    Most Comments\n  </a>\n  <a class=\"item\">\n    Most Popular\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "LFWkk7AbqxZc8jcb2",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Home",
    "content" : "<div class=\"ui vertical pointing menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "AqM4aAQpHzgSbSNSt",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Friends",
    "content" : "<div class=\"ui secondary vertical pointing menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "R6rXBy3HsyuNuf7Rx",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Pagination",
    "content" : "<div class=\"ui pagination menu\">\n  <a class=\"active item\">\n    1\n  </a>\n  <div class=\"disabled item\">\n    ...\n  </div>\n  <a class=\"item\">\n    10\n  </a>\n  <a class=\"item\">\n    11\n  </a>\n  <a class=\"item\">\n    12\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "9D83ghcyckJ8DRRa5",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Content Header",
    "content" : "<div class=\"ui menu\">\n  <div class=\"header item\">\n    Our Company\n  </div>\n  <a class=\"item\">\n    About Us\n  </a>\n  <a class=\"item\">\n    Jobs\n  </a>\n  <a class=\"item\">\n    Locations\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "jkZnsuF7PNoSyA4A9",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Solutions",
    "content" : "<div class=\"ui vertical menu\">\n  <div class=\"item\">\n    <div class=\"header\">Products</div>\n    <div class=\"menu\">\n      <a class=\"item\">Enterprise</a>\n      <a class=\"item\">Consumer</a>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"header\">CMS Solutions</div>\n    <div class=\"menu\">\n      <a class=\"item\">Rails</a>\n      <a class=\"item\">Python</a>\n      <a class=\"item\">PHP</a>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"header\">Hosting</div>\n    <div class=\"menu\">\n      <a class=\"item\">Shared</a>\n      <a class=\"item\">Dedicated</a>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"header\">Support</div>\n    <div class=\"menu\">\n      <a class=\"item\">E-mail Support</a>\n      <a class=\"item\">FAQs</a>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "wqzjjzitvSKwMvMBp",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Text",
    "content" : "<div class=\"ui vertical menu\">\n  <a class=\"item\">\n    <h4 class=\"ui header\">Promotions</h4>\n    <p>Check out our new promotions</p>\n  </a>\n  <a class=\"item\">\n    <h4 class=\"ui header\">Coupons</h4>\n    <p>Check out our collection of coupons</p>\n  </a>\n  <a class=\"item\">\n    <h4 class=\"ui header\">Rebates</h4>\n    <p>Visit our rebate forum for information on claiming rebates</p>\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ayL46jQMEYzeCKmPc",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Input",
    "content" : "<div class=\"ui menu\">\n  <div class=\"item\">\n    <div class=\"ui icon input\">\n      <input type=\"text\" placeholder=\"Search...\">\n      <i class=\"search icon\"></i>\n    </div>\n  </div>\n  <div class=\"right item\">\n    <div class=\"ui action input\">\n      <input type=\"text\" placeholder=\"Navigate to...\">\n      <div class=\"ui button\">Go</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "v3NJvanoobqdpi8hb",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Button",
    "content" : "<div class=\"ui menu\">\n  <div class=\"item\">\n    <div class=\"ui primary button\">Sign up</div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui button\">Log-in</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "PhibkQhu2RtcQLjiN",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Link Item",
    "content" : "<div class=\"ui vertical menu\">\n  <a href=\"http://www.google.com\" class=\"item\">\n    Visit Google\n  </a>\n  <div class=\"link item\">\n    Javascript Link\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Na7Pbqz5CHjjZnfQ9",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Dropdown Item",
    "content" : "<div class=\"ui vertical menu\">\n  <div class=\"ui dropdown item\">\n    Categories\n    <i class=\"dropdown icon\"></i>\n    <div class=\"menu\">\n      <a class=\"item\">Electronics</a>\n      <a class=\"item\">Automotive</a>\n      <a class=\"item\">Home</a>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "i7EJa4s2FRaf7YxAk",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Popup Menu",
    "content" : "<div class=\"ui menu\">\n  <a class=\"browse item\">\n    Browse\n    <i class=\"dropdown icon\"></i>\n  </a>\n</div>\n<div class=\"ui fluid popup\">\n  <div class=\"ui four column relaxed equal height divided grid\">\n    <div class=\"column\">\n      <h4 class=\"ui header\">Fabrics</h4>\n      <div class=\"ui link list\">\n        <a class=\"item\">Cashmere</a>\n        <a class=\"item\">Linen</a>\n        <a class=\"item\">Cotton</a>\n        <a class=\"item\">Viscose</a>\n      </div>\n    </div>\n    <div class=\"column\">\n      <h4 class=\"ui header\">Size</h4>\n      <div class=\"ui link list\">\n        <a class=\"item\">Small</a>\n        <a class=\"item\">Medium</a>\n        <a class=\"item\">Large</a>\n        <a class=\"item\">Plus Sizes</a>\n      </div>\n    </div>\n    <div class=\"column\">\n      <h4 class=\"ui header\">Colored</h4>\n      <div class=\"ui link list\">\n        <a class=\"item\">Neutrals</a>\n        <a class=\"item\">Brights</a>\n        <a class=\"item\">Pastels</a>\n      </div>\n    </div>\n    <div class=\"column\">\n      <h4 class=\"ui header\">Types</h4>\n      <div class=\"ui link list\">\n        <a class=\"item\">Knitwear</a>\n        <a class=\"item\">Outerwear</a>\n        <a class=\"item\">Pants</a>\n        <a class=\"item\">Shoes</a>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "sc8DzGtGCqMfNjWs6",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Search",
    "content" : "<div class=\"ui menu\">\n  <div class=\"ui category search item\">\n    <div class=\"ui transparent icon input\">\n      <input class=\"prompt\" type=\"text\" placeholder=\"Search animals...\">\n      <i class=\"search link icon\"></i>\n    </div>\n    <div class=\"results\"></div>\n  </div>\n</div>\n<div class=\"ui segment\">\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "L5kFcr6RfxM5MKRAu",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Menu 1",
    "content" : "<div class=\"ui menu\">\n  <a class=\"item\">Browse</a>\n  <a class=\"item\">Submit</a>\n  <div class=\"right menu\">\n    <a class=\"item\">Sign Up</a>\n    <a class=\"item\">Help</a>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "GSAFPKSegzXJZKr6p",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Sub Menu",
    "content" : "<div class=\"ui vertical menu\">\n  <div class=\"item\">\n    <div class=\"ui input\"><input type=\"text\" placeholder=\"Search...\"></div>\n  </div>\n  <div class=\"item\">\n    Home\n    <div class=\"menu\">\n      <a class=\"active item\">Search</a>\n      <a class=\"item\">Add</a>\n      <a class=\"item\">Remove</a>\n    </div>\n  </div>\n  <a class=\"item\">\n    <i class=\"grid layout icon\"></i> Browse\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <div class=\"ui dropdown item\">\n    More\n    <i class=\"dropdown icon\"></i>\n    <div class=\"menu\">\n      <a class=\"item\"><i class=\"edit icon\"></i> Edit Profile</a>\n      <a class=\"item\"><i class=\"globe icon\"></i> Choose Language</a>\n      <a class=\"item\"><i class=\"settings icon\"></i> Account Settings</a>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "YXJkkxZ8souaw3XKN",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "States",
    "content" : "<div class=\"ui compact menu\">\n  <div class=\"hover item\">\n    Link\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "WkXbzpjufMRgidx4t",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Down",
    "content" : "<div class=\"ui compact menu\">\n  <div class=\"down item\">\n    Link\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "MCuo6Hy7bteuaxvq6",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Active",
    "content" : "<div class=\"ui compact menu\">\n  <div class=\"active item\">\n    Link\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "yvJNS7ovr5nkKrbmD",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Variations",
    "content" : "<div class=\"ui top fixed menu\">\n  <div class=\"item\">\n    <img src=\"/images/logo.png\">\n  </div>\n  <a class=\"item\">Features</a>\n  <a class=\"item\">Testimonials</a>\n  <a class=\"item\">Sign-in</a>\n</div>\n<div class=\"ui bottom fixed menu\">\n  <div class=\"item\">\n    <img src=\"/images/logo.png\">\n  </div>\n  <a class=\"item\">Features</a>\n  <a class=\"item\">Testimonials</a>\n  <a class=\"item\">Sign-in</a>\n</div>\n<p></p>\n<p></p>",
    "isContainer" : false
}

,
{
    "_id" : "JnX7huznooWXmivmS",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "S features",
    "content" : "<div class=\"ui left fixed vertical menu\">\n  <div class=\"item\">\n    <img class=\"ui mini image\" src=\"/images/logo.png\">\n  </div>\n  <a class=\"item\">Features</a>\n  <a class=\"item\">Testimonials</a>\n  <a class=\"item\">Sign-in</a>\n</div>\n<div class=\"ui right fixed vertical menu\">\n  <div class=\"item\">\n    <img class=\"ui mini image\" src=\"/images/logo.png\">\n  </div>\n  <a class=\"item\">Features</a>\n  <a class=\"item\">Testimonials</a>\n  <a class=\"item\">Sign-in</a>\n</div>\n<p></p>\n<p></p>",
    "isContainer" : false
}

,
{
    "_id" : "yqxWiqf8JMxTcvJck",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Stackable",
    "content" : "<div class=\"ui stackable menu\">\n  <div class=\"item\">\n    <img src=\"/images/logo.png\">\n  </div>\n  <a class=\"item\">Features</a>\n  <a class=\"item\">Testimonials</a>\n  <a class=\"item\">Sign-in</a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "DQY7SioHvT78J72y2",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Inverted",
    "content" : "<div class=\"ui inverted menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "G9hiw38qKPtiyeQpo",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Lore",
    "content" : "<div class=\"ui inverted vertical menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "WkAPtjDw87tqZGc5W",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Inverted",
    "content" : "<div class=\"ui inverted vertical pointing menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "GJWNqQ4KLQ7AewGhn",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Inverted segment",
    "content" : "<div class=\"ui inverted segment\">\n  <div class=\"ui inverted secondary menu\">\n    <a class=\"active item\">\n      Home\n    </a>\n    <a class=\"item\">\n      Messages\n    </a>\n    <a class=\"item\">\n      Friends\n    </a>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "SMfY7gvHCS48P3jby",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Pointing menu",
    "content" : "<div class=\"ui inverted segment\">\n  <div class=\"ui inverted secondary pointing menu\">\n    <a class=\"active item\">\n      Home\n    </a>\n    <a class=\"item\">\n      Messages\n    </a>\n    <a class=\"item\">\n      Friends\n    </a>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "jyJ85xY5QWXDvPhN7",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Colored",
    "content" : "<div class=\"ui menu\">\n  <a class=\"ui active red item\">Red</a>\n  <a class=\"ui orange item\">Orange</a>\n  <a class=\"ui yellow item\">Yellow</a>\n  <a class=\"ui olive item\">Olive</a>\n  <a class=\"ui green item\">Green</a>\n  <a class=\"ui teal item\">Teal</a>\n</div>\n<div class=\"ui menu\">\n  <a class=\"ui blue item\">Blue</a>\n  <a class=\"ui violet item\">Violet</a>\n  <a class=\"ui purple item\">Purple</a>\n  <a class=\"ui pink item\">Pink</a>\n  <a class=\"ui brown item\">Brown</a>\n  <a class=\"ui grey item\">Grey</a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "GWsM5Dx3zGDpKJ2Xm",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Home menu",
    "content" : "<div class=\"ui red three item menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui orange three item menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui yellow three item menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui olive three item menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui green three item menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui teal three item menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui blue three item menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui violet three item menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui purple three item menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui pink three item menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui brown three item menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui grey three item menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "tis9ZuGWcCdQt98Ys",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Olives",
    "content" : "<div class=\"ui red three item inverted menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui orange three item inverted menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui yellow three item inverted menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui olive three item inverted menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui green three item inverted menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui teal three item inverted menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui blue three item inverted menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui violet three item inverted menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui purple three item inverted menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui pink three item inverted menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui brown three item inverted menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>\n<div class=\"ui grey three item inverted menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <a class=\"item\">\n    Friends\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "AYPYqCs9Yf23cdKRN",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Icons",
    "content" : "<div class=\"ui icon menu\">\n  <a class=\"item\">\n    <i class=\"gamepad icon\"></i>\n  </a>\n  <a class=\"item\">\n    <i class=\"video camera icon\"></i>\n  </a>\n  <a class=\"item\">\n    <i class=\"video play icon\"></i>\n  </a>\n</div>\n<div class=\"ui vertical icon menu\">\n  <a class=\"item\">\n    <i class=\"gamepad icon\"></i>\n  </a>\n  <a class=\"item\">\n    <i class=\"video camera icon\"></i>\n  </a>\n  <a class=\"item\">\n    <i class=\"video play icon\"></i>\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "8DF2jCNXokJeSmY95",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Labeled Icon",
    "content" : "<div class=\"ui labeled icon menu\">\n  <a class=\"item\">\n    <i class=\"gamepad icon\"></i>\n    Games\n  </a>\n  <a class=\"item\">\n    <i class=\"video camera icon\"></i>\n    Channels\n  </a>\n  <a class=\"item\">\n    <i class=\"video play icon\"></i>\n    Videos\n  </a>\n</div>\n<div class=\"ui vertical labeled icon menu\">\n  <a class=\"item\">\n    <i class=\"gamepad icon\"></i>\n    Games\n  </a>\n  <a class=\"item\">\n    <i class=\"video camera icon\"></i>\n    Channels\n  </a>\n  <a class=\"item\">\n    <i class=\"video play icon\"></i>\n    Videos\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "6c8r7t78M7Mqi3icg",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Fluid",
    "content" : "<div class=\"ui fluid vertical menu\">\n  <a class=\"item\">Run</a>\n  <a class=\"item\">Walk</a>\n  <a class=\"item\">Bike</a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "XjjJmz6pfYJuC9iYs",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Compact",
    "content" : "<div class=\"ui compact menu\">\n  <a class=\"item\">\n    <i class=\"gamepad icon\"></i>\n    Games\n  </a>\n  <a class=\"item\">\n    <i class=\"video camera icon\"></i>\n    Channels\n  </a>\n  <a class=\"item\">\n    <i class=\"video play icon\"></i>\n    Videos\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "CFnMoREHzDpAaRAYi",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Play",
    "content" : "<div class=\"ui compact vertical labeled icon menu\">\n  <a class=\"item\">\n    <i class=\"gamepad icon\"></i>\n    Games\n  </a>\n  <a class=\"item\">\n    <i class=\"video camera icon\"></i>\n    Channels\n  </a>\n  <a class=\"item\">\n    <i class=\"video play icon\"></i>\n    Videos\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "TCm6bc9dyeyBYy6Fq",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Evenly Divided",
    "content" : "<div class=\"ui fluid three item menu\">\n  <a class=\"item\">Buy</a>\n  <a class=\"item\">Sell</a>\n  <a class=\"item\">Rent</a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "LmzmG74fNcDKJzHwM",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Choice",
    "content" : "<div class=\"ui pointing vertical menu\">\n  <a class=\"item\">\n    Site Title\n  </a>\n  <div class=\"item\">\n    <b>Grouped Section</b>\n    <div class=\"menu\">\n      <a class=\"item\">Subsection 1</a>\n      <a class=\"active item\">Subsection 1</a>\n      <a class=\"item\">Subsection 1</a>\n    </div>\n  </div>\n  <div class=\"ui dropdown item\">\n    Dropdown <i class=\"dropdown icon\"></i>\n    <div class=\"menu\">\n      <div class=\"item\">Choice 1</div>\n      <div class=\"item\">Choice 2</div>\n      <div class=\"item\">Choice 3</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "CTGrvouAot7pL8CjB",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Attached",
    "content" : "<div class=\"ui top attached tabular menu\">\n  <a class=\"active item\">\n    Tab 1\n  </a>\n  <a class=\"item\">\n    Tab 2\n  </a>\n</div>\n<div class=\"ui bottom attached segment\">\n  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "cQEiGKqQwNRkjggj8",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Attached menu",
    "content" : "<div class=\"ui top attached menu\">\n  <a class=\"active item\">\n    Section 1\n  </a>\n  <a class=\"item\">\n    Section 2\n  </a>\n</div>\n<div class=\"ui attached segment\">\n  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n</div>\n<div class=\"ui bottom attached menu\">\n  <a class=\"active item\">\n    Section 1\n  </a>\n  <a class=\"item\">\n    Section 2\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "uq6umLLmPJbxgF7jE",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Horizontal Sizes",
    "content" : "<div class=\"ui large menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <div class=\"right menu\">\n    <div class=\"ui dropdown item\">\n      Language <i class=\"dropdown icon\"></i>\n      <div class=\"menu\">\n        <a class=\"item\">English</a>\n        <a class=\"item\">Russian</a>\n        <a class=\"item\">Spanish</a>\n      </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"ui primary button\">Sign Up</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "YLB9e3zs733woRQyA",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Small menu",
    "content" : "<div class=\"ui small menu\">\n  <a class=\"active item\">\n    Home\n  </a>\n  <a class=\"item\">\n    Messages\n  </a>\n  <div class=\"right menu\">\n    <div class=\"ui dropdown item\">\n      Language <i class=\"dropdown icon\"></i>\n      <div class=\"menu\">\n        <a class=\"item\">English</a>\n        <a class=\"item\">Russian</a>\n        <a class=\"item\">Spanish</a>\n      </div>\n    </div>\n    <div class=\"item\">\n        <div class=\"ui primary button\">Sign Up</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "HDAAfj5J5rjzpTX7n",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Greece",
    "content" : "<div class=\"ui large vertical menu\">\n  <a class=\"active item\">\n    <div class=\"ui teal label\">1</div>\n    Inbox\n  </a>\n  <a class=\"item\">\n    <div class=\"ui label\">51</div>\n    Spam\n  </a>\n  <a class=\"item\">\n    <div class=\"ui label\">1</div>\n    Updates\n  </a>\n  <div class=\"item\">\n    <div class=\"ui icon input\">\n      <input type=\"text\" placeholder=\"Search mail...\">\n      <i class=\"search icon\"></i>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "pdh6zxDjWc8KmZLc5",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Italian",
    "content" : "<div class=\"ui small vertical menu\">\n  <a class=\"active item\">\n    <div class=\"ui small teal label\">1</div>\n    Inbox\n  </a>\n  <a class=\"item\">\n    <div class=\"ui small label\">51</div>\n    Spam\n  </a>\n  <a class=\"item\">\n    <div class=\"ui small label\">1</div>\n    Updates\n  </a>\n  <div class=\"item\">\n    <div class=\"ui icon input\">\n      <input type=\"text\" placeholder=\"Search mail...\">\n      <i class=\"search icon\"></i>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "9ukwykyijiRZYsEjf",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Items",
    "content" : "<div class=\"ui menu\">\n  <div class=\"fitted item\">\n    No padding whatsoever\n  </div>\n  <div class=\"horizontally fitted item\">\n    No horizontal padding\n  </div>\n  <div class=\"vertically fitted item\">\n    No vertical padding\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "KWQ2t6jJX9KAheb4Y",
    "parent" : "kphRvFK3CHLGek6hY",
    "name" : "Borderless",
    "content" : "<div class=\"ui borderless menu\">\n  <a class=\"item\">1</a>\n  <a class=\"item\">2</a>\n  <a class=\"item\">3</a>\n  <a class=\"item\">4</a>\n  <a class=\"item\">5</a>\n  <a class=\"item\">6</a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "WjTuCbNbNyD5SuBzj",
    "parent" : "5zD74DASmZSnyzwrZ",
    "name" : "Types",
    "content" : "<div class=\"ui message\">\n  <div class=\"header\">\n    Changes in Service\n  </div>\n  <p>We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "2owiovvv7sgzmKLFD",
    "parent" : "5zD74DASmZSnyzwrZ",
    "name" : "List Message",
    "content" : "<div class=\"ui message\">\n  <div class=\"header\">\n    New Site Features\n  </div>\n  <ul class=\"list\">\n    <li>You can now have cover images on blog pages</li>\n    <li>Drafts will now auto-save while writing</li>\n  </ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "CbyjcCco8Jf8npnvA",
    "parent" : "5zD74DASmZSnyzwrZ",
    "name" : "Icon Message",
    "content" : "<div class=\"ui icon message\">\n  <i class=\"inbox icon\"></i>\n  <div class=\"content\">\n    <div class=\"header\">\n      Have you heard about our mailing list?\n    </div>\n    <p>Get the best news in your e-mail every day.</p>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "PW4oCScyei9t43Fvf",
    "parent" : "5zD74DASmZSnyzwrZ",
    "name" : "Second",
    "content" : "<div class=\"ui icon message\">\n  <i class=\"notched circle loading icon\"></i>\n  <div class=\"content\">\n    <div class=\"header\">\n      Just one second\n    </div>\n    <p>We're fetching that content for you.</p>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "aEbbHLudbrQgMrb2H",
    "parent" : "5zD74DASmZSnyzwrZ",
    "name" : "Dismissable Block",
    "content" : "<div class=\"ui message\">\n  <i class=\"close icon\"></i>\n  <div class=\"header\">\n    Welcome back!\n  </div>\n  <p>This is a special notification which you can dismiss if you're bored with it.</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "BDC96hwFGADerFieX",
    "parent" : "5zD74DASmZSnyzwrZ",
    "name" : "States",
    "content" : "<div class=\"ui hidden message\">\n  <p>You can't see me</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "dN48f5WynhDKbuw5J",
    "parent" : "5zD74DASmZSnyzwrZ",
    "name" : "Visible",
    "content" : "<div class=\"ui visible message\">\n  <p>You can always see me</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "sLoErt6JJAmMTXCH6",
    "parent" : "5zD74DASmZSnyzwrZ",
    "name" : "Variations",
    "content" : "<div class=\"ui floating message\">\n  <p>Way to go!</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "A9Y87viXRMtGycSjJ",
    "parent" : "5zD74DASmZSnyzwrZ",
    "name" : "Compact",
    "content" : "<div class=\"ui compact message\">\n  <p>Get all the best inventions in your e-mail every day. Sign up now!</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "GTRJXLe74NS5pBwEa",
    "parent" : "5zD74DASmZSnyzwrZ",
    "name" : "Attached",
    "content" : "<div class=\"ui attached message\">\n  <div class=\"header\">\n    Welcome to our site!\n  </div>\n  <p>Fill out the form below to sign-up for a new account</p>\n</div>\n<form class=\"ui form attached fluid segment\">\n  <div class=\"two fields\">\n    <div class=\"field\">\n      <label>First Name</label>\n      <input placeholder=\"First Name\" type=\"text\">\n    </div>\n    <div class=\"field\">\n      <label>Last Name</label>\n      <input placeholder=\"Last Name\" type=\"text\">\n    </div>\n  </div>\n  <div class=\"field\">\n    <label>Username</label>\n    <input placeholder=\"Username\" type=\"text\">\n  </div>\n  <div class=\"field\">\n    <label>Password</label>\n    <input type=\"password\">\n  </div>\n  <div class=\"inline field\">\n    <div class=\"ui checkbox\">\n      <input type=\"checkbox\" id=\"terms\">\n      <label for=\"terms\">I agree to the terms and conditions</label>\n    </div>\n  </div>\n  <div class=\"ui blue submit button\">Submit</div>\n</form>\n<div class=\"ui bottom attached warning message\">\n  <i class=\"icon help\"></i>\n  Already signed up? <a href=\"#\">Login here</a> instead.\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "oY7BxM9Jnr7vCJa5h",
    "parent" : "5zD74DASmZSnyzwrZ",
    "name" : "Warning",
    "content" : "<div class=\"ui warning message\">\n  <i class=\"close icon\"></i>\n  <div class=\"header\">\n    You must register before you can do that!\n  </div>\n  Visit our registration page, then try again\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "JyrrcwYa5AGZScCGe",
    "parent" : "5zD74DASmZSnyzwrZ",
    "name" : "Info",
    "content" : "<div class=\"ui info message\">\n  <i class=\"close icon\"></i>\n  <div class=\"header\">\n    Was this what you wanted?\n  </div>\n  <ul class=\"list\">\n    <li>It's good to see you again.</li>\n    <li>Did you know it's been a while?</li>\n  </ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "3wmjPWmN2gYZ4P8i2",
    "parent" : "5zD74DASmZSnyzwrZ",
    "name" : "Positive / Success",
    "content" : "<div class=\"ui positive message\">\n  <i class=\"close icon\"></i>\n  <div class=\"header\">\n    You are eligible for a reward\n  </div>\n  <p>Go to your <b>special offers</b> page to see now.</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "b6XkvtEk3SkdxLHpq",
    "parent" : "5zD74DASmZSnyzwrZ",
    "name" : "Registration",
    "content" : "<div class=\"ui success message\">\n  <i class=\"close icon\"></i>\n  <div class=\"header\">\n    Your user registration was successful.\n  </div>\n  <p>You may now log-in with the username you have chosen</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "sdZT4i6o6i4iwbQAo",
    "parent" : "5zD74DASmZSnyzwrZ",
    "name" : "Negative / Error",
    "content" : "<div class=\"ui negative message\">\n  <i class=\"close icon\"></i>\n  <div class=\"header\">\n    We're sorry we can't apply that discount\n  </div>\n  <p>That offer has expired\n</p></div>",
    "isContainer" : false
}

,
{
    "_id" : "fw2YvoYswefXf72kG",
    "parent" : "5zD74DASmZSnyzwrZ",
    "name" : "Submission",
    "content" : "<div class=\"ui error message\">\n  <i class=\"close icon\"></i>\n  <div class=\"header\">\n    There was some errors with your submission\n  </div>\n  <ul class=\"list\">\n    <li>You must include both a upper and lower case letters in your password.</li>\n    <li>You need to select your home country.</li>\n  </ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "EkkjLh7KHi5FzxZHm",
    "parent" : "5zD74DASmZSnyzwrZ",
    "name" : "Colored",
    "content" : "<div class=\"ui {{design.color}} message\">{{data.text}}</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "color",
            "value" : "red",
            "choices" : "red|orange|yellow|olive|green|teal|blue|violet|purple|pink|brown|grey|black"
        }
    ],
    "data" : [ 
        {
            "name" : "text",
            "value" : "Colored"
        }
    ]
}

,
{
    "_id" : "xYbPMqMAzLTyHEvB9",
    "parent" : "5zD74DASmZSnyzwrZ",
    "name" : "Size",
    "content" : "<div class=\"ui {{design.size}} message\">\n {{data.text}}\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "size",
            "value" : "large",
            "choices" : "small|large|huge|massive"
        }
    ],
    "data" : [ 
        {
            "name" : "text",
            "value" : "This is a sized message."
        }
    ]
}

,
{
    "_id" : "LcEGa34DvxBti7otM",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Table class",
    "content" : "<table class=\"ui celled padded table\">\n  <thead>\n    <tr><th class=\"single line\">Evidence Rating</th>\n    <th>Effect</th>\n    <th>Efficacy</th>\n    <th>Consensus</th>\n    <th>Comments</th>\n  </tr></thead>\n  <tbody>\n    <tr>\n      <td>\n        <h2 class=\"ui center aligned header\">A</h2>\n      </td>\n      <td class=\"single line\">\n        Power Output\n      </td>\n      <td>\n        <div class=\"ui star rating\" data-rating=\"3\" data-max-rating=\"3\"></div>\n      </td>\n      <td class=\"right aligned\">\n        80% <br>\n        <a href=\"#\">18 studies</a>\n      </td>\n      <td>Creatine supplementation is the reference compound for increasing muscular creatine levels; there is variability in this increase, however, with some nonresponders.</td>\n    </tr>\n    <tr>\n      <td>\n        <h2 class=\"ui center aligned header\">A</h2>\n      </td>\n      <td class=\"single line\">\n        Weight\n      </td>\n      <td>\n        <div class=\"ui star rating\" data-rating=\"3\" data-max-rating=\"3\"></div>\n      </td>\n      <td class=\"right aligned\">\n        100% <br>\n        <a href=\"#\">65 studies</a>\n      </td>\n      <td>Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "3aB7qywq7ZmjEPncL",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Guess",
    "content" : "<table class=\"ui very basic collapsing celled table\">\n  <thead>\n    <tr><th>Employee</th>\n    <th>Correct Guesses</th>\n  </tr></thead>\n  <tbody>\n    <tr>\n      <td>\n        <h4 class=\"ui image header\">\n          <img src=\"/images/avatar2/small/lena.png\" class=\"ui mini rounded image\">\n          <div class=\"content\">\n            Lena\n            <div class=\"sub header\">Human Resources\n          </div>\n        </div>\n      </h4></td>\n      <td>\n        22\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h4 class=\"ui image header\">\n          <img src=\"/images/avatar2/small/matthew.png\" class=\"ui mini rounded image\">\n          <div class=\"content\">\n            Matthew\n            <div class=\"sub header\">Fabric Design\n          </div>\n        </div>\n      </h4></td>\n      <td>\n        15\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h4 class=\"ui image header\">\n          <img src=\"/images/avatar2/small/lindsay.png\" class=\"ui mini rounded image\">\n          <div class=\"content\">\n            Lindsay\n            <div class=\"sub header\">Entertainment\n          </div>\n        </div>\n      </h4></td>\n      <td>\n        12\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h4 class=\"ui image header\">\n          <img src=\"/images/avatar2/small/mark.png\" class=\"ui mini rounded image\">\n          <div class=\"content\">\n            Mark\n            <div class=\"sub header\">Executive\n          </div>\n        </div>\n      </h4></td>\n      <td>\n        11\n      </td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "dy9KztRWf2ASXJ267",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Life",
    "content" : "<table class=\"ui celled striped table\">\n  <thead>\n    <tr><th colspan=\"3\">\n      Git Repository\n    </th>\n  </tr></thead><tbody>\n    <tr>\n      <td class=\"collapsing\">\n        <i class=\"folder icon\"></i> node_modules\n      </td>\n      <td>Initial commit</td>\n      <td class=\"right aligned collapsing\">10 hours ago</td>\n    </tr>\n    <tr>\n      <td>\n        <i class=\"folder icon\"></i> test\n      </td>\n      <td>Initial commit</td>\n      <td class=\"right aligned\">10 hours ago</td>\n    </tr>\n    <tr>\n      <td>\n        <i class=\"folder icon\"></i> build\n      </td>\n      <td>Initial commit</td>\n      <td class=\"right aligned\">10 hours ago</td>\n    </tr>\n    <tr>\n      <td>\n        <i class=\"file outline icon\"></i> package.json\n      </td>\n      <td>Initial commit</td>\n      <td class=\"right aligned\">10 hours ago</td>\n    </tr>\n    <tr>\n      <td>\n        <i class=\"file outline icon\"></i> Gruntfile.js\n      </td>\n      <td>Initial commit</td>\n      <td class=\"right aligned\">10 hours ago</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "ed2maWpZSA4pGKQKz",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Approve",
    "content" : "<table class=\"ui compact celled definition table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th>Name</th>\n      <th>Registration Date</th>\n      <th>E-mail address</th>\n      <th>Premium Plan</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td class=\"collapsing\">\n        <div class=\"ui fitted slider checkbox\">\n          <input type=\"checkbox\"> <label></label>\n        </div>\n      </td>\n      <td>John Lilki</td>\n      <td>September 14, 2013</td>\n      <td>jhlilk22@yahoo.com</td>\n      <td>No</td>\n    </tr>\n    <tr>\n      <td class=\"collapsing\">\n        <div class=\"ui fitted slider checkbox\">\n          <input type=\"checkbox\"> <label></label>\n        </div>\n      </td>\n      <td>Jamie Harington</td>\n      <td>January 11, 2014</td>\n      <td>jamieharingonton@yahoo.com</td>\n      <td>Yes</td>\n    </tr>\n    <tr>\n      <td class=\"collapsing\">\n        <div class=\"ui fitted slider checkbox\">\n          <input type=\"checkbox\"> <label></label>\n        </div>\n      </td>\n      <td>Jill Lewis</td>\n      <td>May 11, 2014</td>\n      <td>jilsewris22@yahoo.com</td>\n      <td>Yes</td>\n    </tr>\n  </tbody>\n  <tfoot class=\"full-width\">\n    <tr>\n      <th></th>\n      <th colspan=\"4\">\n        <div class=\"ui right floated small primary labeled icon button\">\n          <i class=\"user icon\"></i> Add User\n        </div>\n        <div class=\"ui small button\">\n          Approve\n        </div>\n        <div class=\"ui small  disabled button\">\n          Approve All\n        </div>\n      </th>\n    </tr>\n  </tfoot>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "YaWFoXwooMNsruszC",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Structured",
    "content" : "<table class=\"ui celled structured table\">\n  <thead>\n    <tr>\n      <th rowspan=\"2\">Name</th>\n      <th rowspan=\"2\">Type</th>\n      <th rowspan=\"2\">Files</th>\n      <th colspan=\"3\">Languages</th>\n    </tr>\n    <tr>\n      <th>Ruby</th>\n      <th>JavaScript</th>\n      <th>Python</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Alpha Team</td>\n      <td>Project 1</td>\n      <td class=\"right aligned\">2</td>\n      <td class=\"center aligned\">\n        <i class=\"large green checkmark icon\"></i>\n      </td>\n      <td></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td rowspan=\"3\">Beta Team</td>\n      <td>Project 1</td>\n      <td class=\"right aligned\">52</td>\n      <td class=\"center aligned\">\n        <i class=\"large green checkmark icon\"></i>\n      </td>\n      <td></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>Project 2</td>\n      <td class=\"right aligned\">12</td>\n      <td></td>\n      <td class=\"center aligned\">\n        <i class=\"large green checkmark icon\"></i>\n      </td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>Project 3</td>\n      <td class=\"right aligned\">21</td>\n      <td class=\"center aligned\">\n        <i class=\"large green checkmark icon\"></i>\n      </td>\n      <td></td>\n      <td></td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "kb4CJ4XAQMnm9StiH",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "States",
    "content" : "<table class=\"ui celled table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>No Name Specified</td>\n      <td>Unknown</td>\n      <td class=\"negative\">None</td>\n    </tr>\n    <tr class=\"positive\">\n      <td>Jimmy</td>\n      <td><i class=\"icon checkmark\"></i> Approved</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Unknown</td>\n      <td class=\"positive\"><i class=\"icon close\"></i> Requires call</td>\n    </tr>\n    <tr class=\"negative\">\n      <td>Jill</td>\n      <td>Unknown</td>\n      <td>None</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "unm3Z3zfGcsdYMpw3",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Cells",
    "content" : "<table class=\"ui celled table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>No Name Specified</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n    <tr class=\"error\">\n      <td>Jimmy</td>\n      <td>Cannot pull data</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td class=\"error\"><i class=\"attention icon\"></i> Classified</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "6FdvLatEEigRrjkAk",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Warning",
    "content" : "<table class=\"ui celled table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>No Name Specified</td>\n      <td>Unknown</td>\n      <td>None</td>\n    </tr>\n    <tr class=\"warning\">\n      <td>Jimmy</td>\n      <td><i class=\"attention icon\"></i> Requires Action</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Unknown</td>\n      <td class=\"warning\"><i class=\"attention icon\"></i> Hostile</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Unknown</td>\n      <td>None</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "JKDDXd97zXgE7FzW9",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Active",
    "content" : "<table class=\"ui celled table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr class=\"active\">\n      <td>John</td>\n      <td>Selected</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td class=\"active\">Jill</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "kWod6twRAL3gzdD6J",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Disabled",
    "content" : "<table class=\"ui celled table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class=\"disabled\">\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td>John</td>\n      <td>Selected</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td class=\"disabled\">Jill</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "KSd5bJE9BzYXyZine",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Variations",
    "content" : "<table class=\"ui unstackable table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th class=\"right aligned\">Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td class=\"right aligned\">None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td class=\"right aligned\">Requires call</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Denied</td>\n      <td class=\"right aligned\">None</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui tablet stackable table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th class=\"right aligned\">Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td class=\"right aligned\">None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td class=\"right aligned\">Requires call</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Denied</td>\n      <td class=\"right aligned\">None</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "63bvCqKChFEh9uZvX",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Selectable",
    "content" : "<table class=\"ui selectable celled table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>No Action</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Denied</td>\n      <td>None</td>\n    </tr>\n    <tr class=\"warning\">\n      <td>John</td>\n      <td>No Action</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td class=\"positive\">Approved</td>\n      <td class=\"warning\">Requires call</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td class=\"negative\">Denied</td>\n      <td>None</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "r69spp9WgH29tLfMp",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Example",
    "content" : "<table class=\"ui selectable celled table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>No Action</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Denied</td>\n      <td>None</td>\n    </tr>\n    <tr class=\"warning\">\n      <td>John</td>\n      <td>No Action</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td class=\"positive\">Approved</td>\n      <td class=\"warning\">Requires call</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td class=\"negative\">Denied</td>\n      <td>None</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "CHzuydbeodqzBbmov",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Vertical Alignment",
    "content" : "<table class=\"ui striped table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class=\"top aligned\">\n      <td>John</td>\n      <td>Approved</td>\n      <td class=\"top aligned\">\n        Notes<br>\n        1<br>\n        2<br>\n      </td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td class=\"bottom aligned\">Approved</td>\n      <td>\n        Notes<br>\n        1<br>\n        2<br>\n      </td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "CDAzNLoW3FZAzJnAK",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Text Alignment",
    "content" : "<table class=\"ui striped table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th class=\"right aligned\">Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class=\"center aligned\">\n      <td>John</td>\n      <td>Approved</td>\n      <td class=\"right aligned\">None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td class=\"right aligned\">Requires call</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Denied</td>\n      <td class=\"right aligned\">None</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "bEKQaAMqLefvmuQCZ",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Striped",
    "content" : "<table class=\"ui striped table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Date Joined</th>\n      <th>E-mail</th>\n      <th>Called</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John Lilki</td>\n      <td>September 14, 2013</td>\n      <td>jhlilk22@yahoo.com</td>\n      <td>No</td>\n    </tr>\n    <tr>\n      <td>Jamie Harington</td>\n      <td>January 11, 2014</td>\n      <td>jamieharingonton@yahoo.com</td>\n      <td>Yes</td>\n    </tr>\n    <tr>\n      <td>Jill Lewis</td>\n      <td>May 11, 2014</td>\n      <td>jilsewris22@yahoo.com</td>\n      <td>Yes</td>\n    </tr>\n    <tr>\n      <td>John Lilki</td>\n      <td>September 14, 2013</td>\n      <td>jhlilk22@yahoo.com</td>\n      <td>No</td>\n    </tr>\n    <tr>\n      <td>John Lilki</td>\n      <td>September 14, 2013</td>\n      <td>jhlilk22@yahoo.com</td>\n      <td>No</td>\n    </tr>\n    <tr>\n      <td>Jamie Harington</td>\n      <td>January 11, 2014</td>\n      <td>jamieharingonton@yahoo.com</td>\n      <td>Yes</td>\n    </tr>\n    <tr>\n      <td>Jill Lewis</td>\n      <td>May 11, 2014</td>\n      <td>jilsewris22@yahoo.com</td>\n      <td>Yes</td>\n    </tr>\n    <tr>\n      <td>John Lilki</td>\n      <td>September 14, 2013</td>\n      <td>jhlilk22@yahoo.com</td>\n      <td>No</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "QhEMPcXsnon5sK98Y",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Celled",
    "content" : "<table class=\"ui celled table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Denied</td>\n      <td>None</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr><th>3 People</th>\n    <th>2 Approved</th>\n    <th></th>\n  </tr></tfoot>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "QivtoJaeAbhdXbxBG",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Basic",
    "content" : "<table class=\"ui basic table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Denied</td>\n      <td>None</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "a28E6tcXe4ucYwZk9",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "City",
    "content" : "<table class=\"ui very basic table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Denied</td>\n      <td>None</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "iSLsKpd89FhLWRWWD",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Collapsing Cell",
    "content" : "<table class=\"ui table\">\n  <tbody>\n    <tr>\n      <td class=\"collapsing\">\n        <i class=\"folder icon\"></i> node_modules\n      </td>\n      <td>Initial commit</td>\n      <td>10 hours ago</td>\n    </tr>\n    <tr>\n      <td>\n        <i class=\"folder icon\"></i> test\n      </td>\n      <td>Initial commit</td>\n      <td>10 hours ago</td>\n    </tr>\n    <tr>\n      <td>\n        <i class=\"folder icon\"></i> build\n      </td>\n      <td>Initial commit</td>\n      <td>10 hours ago</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "wtAssg6CtDGrsWJKi",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Even Width",
    "content" : "<table class=\"ui five column table\">\n  <thead>\n    <tr><th>Name</th>\n    <th>Status</th>\n    <th>Age</th>\n    <th>Gender</th>\n    <th>Notes</th>\n  </tr></thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td>22</td>\n      <td>Male</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>32</td>\n      <td>Male</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Denied</td>\n      <td>22</td>\n      <td>Female</td>\n      <td>None</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr><th>3 People</th>\n    <th>2 Approved</th>\n    <th></th>\n    <th></th>\n    <th></th>\n  </tr></tfoot>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "ipqfofbWRNNkrFdir",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Column Width",
    "content" : "<table class=\"ui table\">\n  <thead>\n    <tr><th class=\"ten wide\">Name</th>\n    <th class=\"six wide\">Status</th>\n  </tr></thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Denied</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr><th>3 People</th>\n    <th>2 Approved</th>\n  </tr></tfoot>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "PKRriXNnw355zoHGa",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Single Line",
    "content" : "<table class=\"ui single line table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Registration Date</th>\n      <th>E-mail address</th>\n      <th>Premium Plan</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John Lilki</td>\n      <td>September 14, 2013</td>\n      <td>jhlilk22@yahoo.com</td>\n      <td>No</td>\n    </tr>\n    <tr>\n      <td>Jamie Harington</td>\n      <td>January 11, 2014</td>\n      <td>jamieharingonton@yahoo.com</td>\n      <td>Yes</td>\n    </tr>\n    <tr>\n      <td>Jill Lewis</td>\n      <td>May 11, 2014</td>\n      <td>jilsewris22@yahoo.com</td>\n      <td>Yes</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "W6yjQkdmPbZ5RZrNL",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Collapsing",
    "content" : "<table class=\"ui collapsing table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Denied</td>\n      <td>None</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr><th>3 People</th>\n    <th>2 Approved</th>\n    <th></th>\n  </tr></tfoot>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "q8qqxnqEQ9N5QezMp",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Colored",
    "content" : "<table class=\"ui red table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui orange table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui yellow table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n  </table>\n<table class=\"ui olive table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui green table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui teal table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui blue table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui violet table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui purple table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui pink table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui grey table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui black table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "ajpXPCKaqFW7Kyrba",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Inverted",
    "content" : "<table class=\"ui inverted table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Denied</td>\n      <td>None</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr><th>3 People</th>\n    <th>2 Approved</th>\n    <th></th>\n  </tr></tfoot>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "tP5cgnjD6LcRC3hKD",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Tbody",
    "content" : "<table class=\"ui inverted red table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui inverted orange table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui inverted yellow table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui inverted olive table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui inverted green table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui inverted teal table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui inverted blue table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui inverted violet table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui inverted purple table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui inverted pink table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui inverted brown table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>\n<table class=\"ui inverted grey table\">\n  <thead>\n    <tr><th>Food</th>\n    <th>Calories</th>\n    <th>Protein</th>\n  </tr></thead><tbody>\n    <tr>\n      <td>Apples</td>\n      <td>200</td>\n      <td>0g</td>\n    </tr>\n    <tr>\n      <td>Orange</td>\n      <td>310</td>\n      <td>0g</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "FgG9ccWDqJw65gBEP",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Sortable",
    "content" : "<div class=\"ui warning message\">Adding a classname of <code>ascending</code> or <code>descending</code> to the <code>th</code> will show the user the direction of sort. This example uses a modified version of the kylefox's <a href=\"https://github.com/kylefox/jquery-tablesort\">tablesort plugin</a> to provide the proper class names.\n</div>\n<table class=\"ui sortable celled table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>No Action</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td class=\"positive\">Approved</td>\n      <td class=\"warning\">Requires call</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td class=\"negative\">Denied</td>\n      <td>None</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr><th>3 People</th>\n    <th>2 Approved</th>\n    <th></th>\n  </tr></tfoot>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "yHtQERYP3q8DQu4uu",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Full-Width Header / Footer",
    "content" : "<table class=\"ui compact celled definition table\">\n  <thead class=\"full-width\">\n    <tr>\n      <th></th>\n      <th>Name</th>\n      <th>Registration Date</th>\n      <th>E-mail address</th>\n      <th>Premium Plan</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td class=\"collapsing\">\n        <div class=\"ui fitted slider checkbox\">\n          <input type=\"checkbox\"> <label></label>\n        </div>\n      </td>\n      <td>John Lilki</td>\n      <td>September 14, 2013</td>\n      <td>jhlilk22@yahoo.com</td>\n      <td>No</td>\n    </tr>\n    <tr>\n      <td class=\"collapsing\">\n        <div class=\"ui fitted slider checkbox\">\n          <input type=\"checkbox\"> <label></label>\n        </div>\n      </td>\n      <td>Jamie Harington</td>\n      <td>January 11, 2014</td>\n      <td>jamieharingonton@yahoo.com</td>\n      <td>Yes</td>\n    </tr>\n    <tr>\n      <td class=\"collapsing\">\n        <div class=\"ui fitted slider checkbox\">\n          <input type=\"checkbox\"> <label></label>\n        </div>\n      </td>\n      <td>Jill Lewis</td>\n      <td>May 11, 2014</td>\n      <td>jilsewris22@yahoo.com</td>\n      <td>Yes</td>\n    </tr>\n  </tbody>\n  <tfoot class=\"full-width\">\n    <tr>\n      <th></th>\n      <th colspan=\"4\">\n        <div class=\"ui right floated small primary labeled icon button\">\n          <i class=\"user icon\"></i> Add User\n        </div>\n        <div class=\"ui small  button\">\n          Approve\n        </div>\n        <div class=\"ui small  disabled button\">\n          Approve All\n        </div>\n      </th>\n    </tr>\n  </tfoot>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "BvhC8Buoud6WNco2H",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Padded",
    "content" : "<table class=\"ui padded table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td>He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Jamie was not interested in purchasing our product.</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "S2W8vumqKDrrPMKfZ",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Enjoy",
    "content" : "<table class=\"ui very padded table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td>He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Jamie was not interested in purchasing our product.</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "8y4YjjHe8tiwR2FYx",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Compact",
    "content" : "<table class=\"ui compact table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "KGx2cqd8dAqx6JRce",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Approved",
    "content" : "<table class=\"ui very compact table\">\n  <thead>\n    <tr><th>Name</th>\n    <th>Status</th>\n    <th>Another Status</th>\n    <th>Notes</th>\n  </tr></thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n  </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "Pe37SP6Gg3XH5Cdyy",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Size",
    "content" : "<table class=\"ui small table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Denied</td>\n      <td>None</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr><th>3 People</th>\n    <th>2 Approved</th>\n    <th></th>\n  </tr></tfoot>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "jQh6t8WEcmjiNbfFk",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Notes",
    "content" : "<table class=\"ui large table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Status</th>\n      <th>Notes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>Approved</td>\n      <td>None</td>\n    </tr>\n    <tr>\n      <td>Jamie</td>\n      <td>Approved</td>\n      <td>Requires call</td>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Denied</td>\n      <td>None</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr><th>3 People</th>\n    <th>2 Approved</th>\n    <th></th>\n  </tr></tfoot>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "R3wGntb3ZQ77KvG4W",
    "parent" : "cW4R8CiHKkbnh4JKT",
    "name" : "Types",
    "content" : "<div class=\"ui medium rectangle ad\">\n  <!-- Ad Code Goes Here\n  <ins class=\"adsbygoogle\"\n       style=\"display:inline-block;width:300px;height:250px\"\n       data-ad-client=\"ca-pub-XXXXXXXXXXXXXXXX\"\n       data-ad-slot=\"XXXXXXXXXX\"></ins>\n  <script>\n  (adsbygoogle = window.adsbygoogle || []).push({});\n  </script>\n  !-->\n</div>\n<div class=\"ui leaderboard ad\">\n<!-- Leaderboard\n<ins class=\"adsbygoogle\"\n     style=\"display:inline-block;width:728px;height:90px\"\n     data-ad-client=\"ca-pub-XXXXXXXXXXXXXXXX\"\n     data-ad-slot=\"XXXXXXXXXXXXXXXX\"></ins>\n<script>\n(adsbygoogle = window.adsbygoogle || []).push({});\n</script>\n!-->\n</div>\n<div class=\"ui banner ad\">\n<!-- Banner\n<ins class=\"adsbygoogle\"\n     style=\"display:inline-block;width:468px;height:60px\"\n     data-ad-client=\"ca-pub-XXXXXXXXXXXXXXXX\"\n     data-ad-slot=\"XXXXXXXXXXXXXXXX\"></ins>\n<script>\n(adsbygoogle = window.adsbygoogle || []).push({});\n</script>\n!-->\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "BP36eSoANjWN49u5j",
    "parent" : "cW4R8CiHKkbnh4JKT",
    "name" : "Common Units",
    "content" : "<div class=\"ui medium rectangle test ad\" data-text=\"Medium Rectangle\"></div>\n<div class=\"ui banner test ad\" data-text=\"Banner\"></div>\n<div class=\"ui leaderboard test ad\" data-text=\"Leaderboard\"></div>\n<div class=\"ui large rectangle test ad\" data-text=\"Large Rectangle\"></div>\n<div class=\"ui half page test ad\" data-text=\"Half Page\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "tL57oXgcjMBRGXoH9",
    "parent" : "cW4R8CiHKkbnh4JKT",
    "name" : "Mobile",
    "content" : "<div class=\"ui mobile leaderboard test ad\" data-text=\"Mobile Leaderboard\"></div>\n<div class=\"ui mobile banner test ad\" data-text=\"Mobile Banner\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "bt624kJehoPwFymwy",
    "parent" : "cW4R8CiHKkbnh4JKT",
    "name" : "Rectangle",
    "content" : "<div class=\"ui vertical rectangle test ad\" data-text=\"Vertical Rectangle\"></div>\n<div class=\"ui small rectangle test ad\" data-text=\"Small Rectangle\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "s8zgtLFbq7sy4CjhL",
    "parent" : "cW4R8CiHKkbnh4JKT",
    "name" : "Button",
    "content" : "<div class=\"ui button test ad\" data-text=\"Button\"></div>\n<div class=\"ui square button test ad\" data-text=\"Square Button\"></div>\n<div class=\"ui small button test ad\" data-text=\"Small Button\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "MyPwQEeHbaB4xpzrX",
    "parent" : "cW4R8CiHKkbnh4JKT",
    "name" : "Skyscraper",
    "content" : "<div class=\"ui skyscraper test ad\" data-text=\"Skyscraper\"></div>\n<div class=\"ui wide skyscraper test ad\" data-text=\"Wide Skyscraper\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "JP5CxvdCxNSoug7qh",
    "parent" : "cW4R8CiHKkbnh4JKT",
    "name" : "Banner",
    "content" : "<div class=\"ui banner test ad\" data-text=\"Banner\"></div>\n<div class=\"ui vertical banner test ad\" data-text=\"Vertical Banner\"></div>\n<div class=\"ui top banner test ad\" data-text=\"Top Banner\"></div>\n<div class=\"ui half banner test ad\" data-text=\"Half Banner\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "TrSuWTZPE7ZA6r8da",
    "parent" : "cW4R8CiHKkbnh4JKT",
    "name" : "Leaderboards",
    "content" : "<div class=\"ui leaderboard test ad\" data-text=\"Leaderboard\"></div>\n<div class=\"ui large leaderboard test ad\" data-text=\"Large Leaderboard\"></div>\n<div class=\"ui billboard test ad\" data-text=\"Billboard\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "8aqJgPjzmgG2qDfX6",
    "parent" : "cW4R8CiHKkbnh4JKT",
    "name" : "Panorama",
    "content" : "<div class=\"ui panorama test ad\" data-text=\"Panorama\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "xKkSNaBRE4WQnusGn",
    "parent" : "cW4R8CiHKkbnh4JKT",
    "name" : "Netboard",
    "content" : "<div class=\"ui netboard test ad\" data-text=\"Netboard\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "hSwPJeJB2wot7fGzn",
    "parent" : "cW4R8CiHKkbnh4JKT",
    "name" : "Variations",
    "content" : "<div class=\"ui centered banner test ad\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "i8d2SvStDmjDgQccq",
    "parent" : "cW4R8CiHKkbnh4JKT",
    "name" : "Test",
    "content" : "<div class=\"ui medium rectangle test ad\" data-text=\"Ad Unit 1\"></div>\n<div class=\"ui medium rectangle test ad\" data-text=\"Ad Unit 2\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "wnupz8LshXzisEtdB",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Types",
    "content" : "<div class=\"ui card\">\n  <div class=\"image\">\n    <img src=\"/images/avatar2/large/kristy.png\">\n  </div>\n  <div class=\"content\">\n    <a class=\"header\">Kristy</a>\n    <div class=\"meta\">\n      <span class=\"date\">Joined in 2013</span>\n    </div>\n    <div class=\"description\">\n      Kristy is an art director living in New York.\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <a>\n      <i class=\"user icon\"></i>\n      22 Friends\n    </a>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "vQjNWsWDNShtihBMK",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Elliot",
    "content" : "<div class=\"ui card\">\n  <div class=\"content\">\n    <div class=\"right floated meta\">14h</div>\n    <img class=\"ui avatar image\" src=\"/images/avatar/large/elliot.jpg\"> Elliot\n  </div>\n  <div class=\"image\">\n    <img>\n  </div>\n  <div class=\"content\">\n    <span class=\"right floated\">\n      <i class=\"heart outline like icon\"></i>\n      17 likes\n    </span>\n    <i class=\"comment icon\"></i>\n    3 comments\n  </div>\n  <div class=\"extra content\">\n    <div class=\"ui large transparent left icon input\">\n      <i class=\"heart outline icon\"></i>\n      <input type=\"text\" placeholder=\"Add Comment...\">\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "f6Bja7gz2d6EWeEys",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Cards",
    "content" : "<div class=\"ui cards\">\n  <div class=\"card\">\n    <div class=\"content\">\n      <img class=\"right floated mini ui image\" src=\"/images/avatar/large/elliot.jpg\">\n      <div class=\"header\">\n        Elliot Fu\n      </div>\n      <div class=\"meta\">\n        Friends of Veronika\n      </div>\n      <div class=\"description\">\n        Elliot requested permission to view your contact details\n      </div>\n    </div>\n    <div class=\"extra content\">\n      <div class=\"ui two buttons\">\n        <div class=\"ui basic green button\">Approve</div>\n        <div class=\"ui basic red button\">Decline</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"content\">\n      <img class=\"right floated mini ui image\" src=\"/images/avatar/large/jenny.jpg\">\n      <div class=\"header\">\n        Jenny Hess\n      </div>\n      <div class=\"meta\">\n        New Member\n      </div>\n      <div class=\"description\">\n        Jenny wants to add you to the group <b>best friends</b>\n      </div>\n    </div>\n    <div class=\"extra content\">\n      <div class=\"ui two buttons\">\n        <div class=\"ui basic green button\">Approve</div>\n        <div class=\"ui basic red button\">Decline</div>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "AZ6xwAqe4EceQjkbm",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Names",
    "content" : "<div class=\"ui link cards\">\n  <div class=\"card\">\n    <div class=\"image\">\n      <img src=\"/images/avatar2/large/matthew.png\">\n    </div>\n    <div class=\"content\">\n      <div class=\"header\">Matt Giampietro</div>\n      <div class=\"meta\">\n        <a>Friends</a>\n      </div>\n      <div class=\"description\">\n        Matthew is an interior designer living in New York.\n      </div>\n    </div>\n    <div class=\"extra content\">\n      <span class=\"right floated\">\n        Joined in 2013\n      </span>\n      <span>\n        <i class=\"user icon\"></i>\n        75 Friends\n      </span>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"image\">\n      <img src=\"/images/avatar2/large/molly.png\">\n    </div>\n    <div class=\"content\">\n      <div class=\"header\">Molly</div>\n      <div class=\"meta\">\n        <span class=\"date\">Coworker</span>\n      </div>\n      <div class=\"description\">\n        Molly is a personal assistant living in Paris.\n      </div>\n    </div>\n    <div class=\"extra content\">\n      <span class=\"right floated\">\n        Joined in 2011\n      </span>\n      <span>\n        <i class=\"user icon\"></i>\n        35 Friends\n      </span>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"image\">\n      <img src=\"/images/avatar2/large/elyse.png\">\n    </div>\n    <div class=\"content\">\n      <div class=\"header\">Elyse</div>\n      <div class=\"meta\">\n        <a>Coworker</a>\n      </div>\n      <div class=\"description\">\n        Elyse is a copywriter working in New York.\n      </div>\n    </div>\n    <div class=\"extra content\">\n      <span class=\"right floated\">\n        Joined in 2014\n      </span>\n      <span>\n        <i class=\"user icon\"></i>\n        151 Friends\n      </span>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "DT6YAtFaBCuC2DNQm",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Content",
    "content" : "<div class=\"ui card\">\n  <div class=\"content\">\n    <div class=\"header\">Project Timeline</div>\n  </div>\n  <div class=\"content\">\n    <h4 class=\"ui sub header\">Activity</h4>\n    <div class=\"ui small feed\">\n      <div class=\"event\">\n        <div class=\"content\">\n          <div class=\"summary\">\n             <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project\n          </div>\n        </div>\n      </div>\n      <div class=\"event\">\n        <div class=\"content\">\n          <div class=\"summary\">\n             <a>Stevie Feliciano</a> was added as an <a>Administrator</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"event\">\n        <div class=\"content\">\n          <div class=\"summary\">\n             <a>Helen Troy</a> added two pictures\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <button class=\"ui button\">Join Project</button>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "fcnRJGs8NSbxt7hcd",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Image",
    "content" : "<div class=\"ui card\">\n  <div class=\"ui slide masked reveal image\">\n    <img src=\"/images/avatar/large/jenny.jpg\" class=\"visible content\">\n    <img src=\"/images/avatar/large/elliot.jpg\" class=\"hidden content\">\n  </div>\n  <div class=\"content\">\n    <a class=\"header\">Team Fu &amp; Hess</a>\n    <div class=\"meta\">\n      <span class=\"date\">Create in Sep 2014</span>\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <a>\n      <i class=\"users icon\"></i>\n      2 Members\n    </a>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "5B9Yztba7EJ9Bt4z8",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Class",
    "content" : "<div class=\"ui special cards\">\n  <div class=\"card\">\n    <div class=\"blurring dimmable image\">\n      <div class=\"ui dimmer\">\n        <div class=\"content\">\n          <div class=\"center\">\n            <div class=\"ui inverted button\">Add Friend</div>\n          </div>\n        </div>\n      </div>\n      <img src=\"/images/avatar/large/elliot.jpg\">\n    </div>\n    <div class=\"content\">\n      <a class=\"header\">Team Fu</a>\n      <div class=\"meta\">\n        <span class=\"date\">Create in Sep 2014</span>\n      </div>\n    </div>\n    <div class=\"extra content\">\n      <a>\n        <i class=\"users icon\"></i>\n        2 Members\n      </a>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"blurring dimmable image\">\n      <div class=\"ui inverted dimmer\">\n        <div class=\"content\">\n          <div class=\"center\">\n            <div class=\"ui primary button\">Add Friend</div>\n          </div>\n        </div>\n      </div>\n      <img src=\"/images/avatar/large/jenny.jpg\">\n    </div>\n    <div class=\"content\">\n      <a class=\"header\">Team Hess</a>\n      <div class=\"meta\">\n        <span class=\"date\">Create in Aug 2014</span>\n      </div>\n    </div>\n    <div class=\"extra content\">\n      <a>\n        <i class=\"users icon\"></i>\n        2 Members\n      </a>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ie4vmJRCQZZ4XhXr3",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Header",
    "content" : "<div class=\"ui cards\">\n  <div class=\"card\">\n    <div class=\"content\">\n      <div class=\"header\">Elliot Fu</div>\n      <div class=\"meta\">Friend</div>\n      <div class=\"description\">\n        Elliot Fu is a film-maker from New York.\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"content\">\n      <div class=\"header\">Veronika Ossi</div>\n      <div class=\"meta\">Friend</div>\n      <div class=\"description\">\n        Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"content\">\n      <div class=\"header\">Jenny Hess</div>\n      <div class=\"meta\">Friend</div>\n      <div class=\"description\">\n        Jenny is a student studying Media Management at the New School\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "AzbqEyk4tgdRSrFXu",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Metadata",
    "content" : "<div class=\"ui card\">\n  <div class=\"content\">\n    <div class=\"header\">Cute Dog</div>\n    <div class=\"meta\">\n      <span>2 days ago</span>\n      <a>Animals</a>\n    </div>\n    <p></p>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "JcGhp8zM2Garh8tJm",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Link",
    "content" : "<div class=\"ui card\">\n  <a class=\"image\" href=\"#\">\n    <img src=\"/images/avatar/large/steve.jpg\">\n  </a>\n  <div class=\"content\">\n    <a class=\"header\" href=\"#\">Steve Jobes</a>\n    <div class=\"meta\">\n      <a>Last Seen 2 days ago</a>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "CuLbco82nBRXhWjKG",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Buttons",
    "content" : "<div class=\"ui cards\">\n  <div class=\"card\">\n    <div class=\"content\">\n      <div class=\"header\">Elliot Fu</div>\n      <div class=\"description\">\n        Elliot Fu is a film-maker from New York.\n      </div>\n    </div>\n    <div class=\"ui bottom attached button\">\n      <i class=\"add icon\"></i>\n      Add Friend\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"content\">\n      <div class=\"header\">Veronika Ossi</div>\n      <div class=\"description\">\n        Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.\n      </div>\n    </div>\n    <div class=\"ui bottom attached button\">\n      <i class=\"add icon\"></i>\n      Add Friend\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"content\">\n      <div class=\"header\">Jenny Hess</div>\n      <div class=\"description\">\n        Jenny is a student studying Media Management at the New School\n      </div>\n    </div>\n    <div class=\"ui bottom attached button\">\n      <i class=\"add icon\"></i>\n      Add Friend\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "3CdMkGhHFnFhguBfZ",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Approval",
    "content" : "<div class=\"ui card\">\n  <div class=\"content\">\n    <i class=\"right floated like icon\"></i>\n    <i class=\"right floated star icon\"></i>\n    <div class=\"header\">Cute Dog</div>\n    <div class=\"description\">\n      <p></p>\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <span class=\"left floated like\">\n      <i class=\"like icon\"></i>\n      Like\n    </span>\n    <span class=\"right floated star\">\n      <i class=\"star icon\"></i>\n      Favorite\n    </span>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "5zxM59nqHgAmMkZXp",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Description",
    "content" : "<div class=\"ui card\">\n  <div class=\"content\">\n    <div class=\"header\">Cute Dog</div>\n    <div class=\"meta\">2 days ago</div>\n    <div class=\"description\">\n      <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>\n      <p>Many people also have their own barometers for what makes a cute dog.</p>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Kanq8igTAkB5XZe8A",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Extra Content",
    "content" : "<div class=\"ui card\">\n  <div class=\"content\">\n    <div class=\"header\">Cute Dog</div>\n    <div class=\"meta\">2 days ago</div>\n    <div class=\"description\">\n      <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>\n      <p>Many people also have their own barometers for what makes a cute dog.</p>\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <i class=\"check icon\"></i>\n    121 Votes\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "tcyunZNX5ELQinHAF",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Variations",
    "content" : "<div class=\"ui three column grid\">\n  <div class=\"column\">\n    <div class=\"ui fluid card\">\n      <div class=\"image\">\n        <img src=\"/images/avatar/large/daniel.jpg\">\n      </div>\n      <div class=\"content\">\n        <a class=\"header\">Daniel Louise</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"column\">\n    <div class=\"ui fluid card\">\n      <div class=\"image\">\n        <img src=\"/images/avatar/large/helen.jpg\">\n      </div>\n      <div class=\"content\">\n        <a class=\"header\">Helen Troy</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"column\">\n    <div class=\"ui fluid card\">\n      <div class=\"image\">\n        <img src=\"/images/avatar/large/elliot.jpg\">\n      </div>\n      <div class=\"content\">\n        <a class=\"header\">Elliot Fu</a>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Q8Gfy3T9TebMcGNNH",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Centered Card",
    "content" : "<div class=\"ui centered card\">\n  <div class=\"image\">\n    <img src=\"/images/avatar2/large/elyse.png\">\n  </div>\n  <div class=\"content\">\n    <a class=\"header\">Elyse</a>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "g5ThmQYCThviMrRaL",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Link Card",
    "content" : "<a class=\"ui card\" href=\"http://www.dog.com\">\n  <div class=\"content\">\n    <div class=\"header\">Cute Dog</div>\n    <div class=\"meta\">\n      <span class=\"category\">Animals</span>\n    </div>\n    <div class=\"description\">\n      <p></p>\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <div class=\"right floated author\">\n      <img class=\"ui avatar image\" src=\"/images/avatar/small/matt.jpg\"> Matt\n    </div>\n  </div>\n</a>",
    "isContainer" : false
}

,
{
    "_id" : "GTY6eodFhqMBbwSaL",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Meta",
    "content" : "<div class=\"ui link card\">\n  <div class=\"content\">\n    <div class=\"header\">Cute Dog</div>\n    <div class=\"meta\">\n      <span class=\"category\">Animals</span>\n    </div>\n    <div class=\"description\">\n      <p></p>\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <div class=\"right floated author\">\n      <img class=\"ui avatar image\" src=\"/images/avatar/small/matt.jpg\"> Matt\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "6X7txXEmSip7ZC5oY",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Floated Content",
    "content" : "<div class=\"ui card\">\n  <div class=\"content\">\n    <div class=\"header\">Cute Dog</div>\n    <div class=\"meta\">\n      <span class=\"right floated time\">2 days ago</span>\n      <span class=\"category\">Animals</span>\n    </div>\n    <div class=\"description\">\n      <p></p>\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <div class=\"right floated author\">\n      <img class=\"ui avatar image\" src=\"/images/avatar/small/matt.jpg\"> Matt\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "pneLwDJFqdPGYHnXB",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Text Alignment",
    "content" : "<div class=\"ui card\">\n  <div class=\"content\">\n    <div class=\"header\">Cute Dog</div>\n    <div class=\"meta\">\n      <span class=\"right floated time\">2 days ago</span>\n      <span class=\"category\">Animals</span>\n    </div>\n    <div class=\"description\">\n      <p></p>\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <div class=\"right floated author\">\n      <img class=\"ui avatar image\" src=\"/images/avatar/small/matt.jpg\"> Matt\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "SRQapTD3Hu2zJaCoL",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Colored",
    "content" : "<div class=\"ui four cards\">\n  <a class=\"red card\">\n    <div class=\"image\">\n      <img>\n    </div>\n  </a>\n  <a class=\"orange card\">\n    <div class=\"image\">\n      <img>\n    </div>\n  </a>\n  <a class=\"yellow card\">\n    <div class=\"image\">\n      <img>\n    </div>\n  </a>\n  <a class=\"olive card\">\n    <div class=\"image\">\n      <img>\n    </div>\n  </a>\n  <a class=\"green card\">\n    <div class=\"image\">\n      <img>\n    </div>\n  </a>\n  <a class=\"teal card\">\n    <div class=\"image\">\n      <img>\n    </div>\n  </a>\n  <a class=\"blue card\">\n    <div class=\"image\">\n      <img>\n    </div>\n  </a>\n  <a class=\"violet card\">\n    <div class=\"image\">\n      <img>\n    </div>\n  </a>\n  <a class=\"purple card\">\n    <div class=\"image\">\n      <img>\n    </div>\n  </a>\n  <a class=\"pink card\">\n    <div class=\"image\">\n      <img>\n    </div>\n  </a>\n  <a class=\"brown card\">\n    <div class=\"image\">\n      <img>\n    </div>\n  </a>\n  <a class=\"grey card\">\n    <div class=\"image\">\n      <img>\n    </div>\n  </a>\n  <a class=\"black card\">\n    <div class=\"image\">\n      <img>\n    </div>\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "PeoYApnCKktacEqfy",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Column Count",
    "content" : "<div class=\"ui {{data.colCount}} {{design.doubling}} cards\">\n{{#each data.items}}\n  <div class=\"ui card\" href=\"http://localhost:3000/video/{{this.[2]}}\">\n    <div class=\"image\">\n      <img src=\"{{this.[0]}}\">\n    </div>\n    <div class=\"extra\">\n\n      <div class=\"ui tiny statistic\">\n  <div class=\"value\">\n    {{this.[1]}}\n  </div>\n  <div class=\"label\">\n    Views\n  </div>\n</div>\n\n<div class=\"right floated author\">\n      <img class=\"ui avatar image\" src=\"/images/avatar/tom.jpg\"> Matt\n    </div>\n\n    </div>\n  </div>\n {{/each}}\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "colCount",
            "value" : "six",
            "choices" : "one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve"
        }, 
        {
            "name" : "items",
            "value" : "/images/wireframe/image.png:3:id3|/images/wireframe/image.png:5:iegs|/images/wireframe/image.png:3:reerwy|/images/wireframe/image.png:2|/images/wireframe/image.png:3|/images/wireframe/image.png:2"
        }
    ],
    "design" : [ 
        {
            "name" : "doubling",
            "value" : "doubling",
            "choices" : "|doubling"
        }
    ]
}

,
{
    "_id" : "YRdGjzSb2WXY7FtMu",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Doubling",
    "content" : "<div class=\"ui six doubling cards\">\n  <div class=\"card\">\n    <div class=\"image\">\n      <img src=\"/images/avatar/large/elliot.jpg\">\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"image\">\n      <img src=\"/images/avatar/large/helen.jpg\">\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"image\">\n      <img src=\"/images/avatar/large/jenny.jpg\">\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"image\">\n      <img src=\"/images/avatar/large/veronika.jpg\">\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"image\">\n      <img src=\"/images/avatar/large/stevie.jpg\">\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"image\">\n      <img src=\"/images/avatar/large/steve.jpg\">\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "2ZgHWQCf2H9onZGRH",
    "parent" : "qHQWL6hQ2sBvScABk",
    "name" : "Types",
    "content" : "<div class=\"ui comments\">\n  <h3 class=\"ui dividing header\">Comments</h3>\n  <div class=\"comment\">\n    <a class=\"avatar\">\n      <img src=\"/images/avatar/small/matt.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"author\">Matt</a>\n      <div class=\"metadata\">\n        <span class=\"date\">Today at 5:42PM</span>\n      </div>\n      <div class=\"text\">\n        How artistic!\n      </div>\n      <div class=\"actions\">\n        <a class=\"reply\">Reply</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"comment\">\n    <a class=\"avatar\">\n      <img src=\"/images/avatar/small/elliot.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"author\">Elliot Fu</a>\n      <div class=\"metadata\">\n        <span class=\"date\">Yesterday at 12:30AM</span>\n      </div>\n      <div class=\"text\">\n        <p>This has been very useful for my research. Thanks as well!</p>\n      </div>\n      <div class=\"actions\">\n        <a class=\"reply\">Reply</a>\n      </div>\n    </div>\n    <div class=\"comments\">\n      <div class=\"comment\">\n        <a class=\"avatar\">\n          <img src=\"/images/avatar/small/jenny.jpg\">\n        </a>\n        <div class=\"content\">\n          <a class=\"author\">Jenny Hess</a>\n          <div class=\"metadata\">\n            <span class=\"date\">Just now</span>\n          </div>\n          <div class=\"text\">\n            Elliot you are always so right :)\n          </div>\n          <div class=\"actions\">\n            <a class=\"reply\">Reply</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"comment\">\n    <a class=\"avatar\">\n      <img src=\"/images/avatar/small/joe.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"author\">Joe Henderson</a>\n      <div class=\"metadata\">\n        <span class=\"date\">5 days ago</span>\n      </div>\n      <div class=\"text\">\n        Dude, this is awesome. Thanks so much\n      </div>\n      <div class=\"actions\">\n        <a class=\"reply\">Reply</a>\n      </div>\n    </div>\n  </div>\n  <form class=\"ui reply form\">\n    <div class=\"field\">\n      <textarea></textarea>\n    </div>\n    <div class=\"ui blue labeled submit icon button\">\n      <i class=\"icon edit\"></i> Add Reply\n    </div>\n  </form>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "vAikHWN7h5QEfWHP8",
    "parent" : "AKZSJuFtdErjNh7mx",
    "name" : "Types",
    "content" : "<div class=\"ui comments\">\n  <h3 class=\"ui dividing header\">Comments</h3>\n  <div class=\"comment\">\n    <a class=\"avatar\">\n      <img src=\"/images/avatar/small/matt.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"author\">Matt</a>\n      <div class=\"metadata\">\n        <span class=\"date\">Today at 5:42PM</span>\n      </div>\n      <div class=\"text\">\n        How artistic!\n      </div>\n      <div class=\"actions\">\n        <a class=\"reply\">Reply</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"comment\">\n    <a class=\"avatar\">\n      <img src=\"/images/avatar/small/elliot.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"author\">Elliot Fu</a>\n      <div class=\"metadata\">\n        <span class=\"date\">Yesterday at 12:30AM</span>\n      </div>\n      <div class=\"text\">\n        <p>This has been very useful for my research. Thanks as well!</p>\n      </div>\n      <div class=\"actions\">\n        <a class=\"reply\">Reply</a>\n      </div>\n    </div>\n    <div class=\"comments\">\n      <div class=\"comment\">\n        <a class=\"avatar\">\n          <img src=\"/images/avatar/small/jenny.jpg\">\n        </a>\n        <div class=\"content\">\n          <a class=\"author\">Jenny Hess</a>\n          <div class=\"metadata\">\n            <span class=\"date\">Just now</span>\n          </div>\n          <div class=\"text\">\n            Elliot you are always so right :)\n          </div>\n          <div class=\"actions\">\n            <a class=\"reply\">Reply</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"comment\">\n    <a class=\"avatar\">\n      <img src=\"/images/avatar/small/joe.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"author\">Joe Henderson</a>\n      <div class=\"metadata\">\n        <span class=\"date\">5 days ago</span>\n      </div>\n      <div class=\"text\">\n        Dude, this is awesome. Thanks so much\n      </div>\n      <div class=\"actions\">\n        <a class=\"reply\">Reply</a>\n      </div>\n    </div>\n  </div>\n  <form class=\"ui reply form\">\n    <div class=\"field\">\n      <textarea></textarea>\n    </div>\n    <div class=\"ui blue labeled submit icon button\">\n      <i class=\"icon edit\"></i> Add Reply\n    </div>\n  </form>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "fNsHcE2aALYgBLC5s",
    "parent" : "AKZSJuFtdErjNh7mx",
    "name" : "Content",
    "content" : "<div class=\"ui comments\">\n  <div class=\"comment\">\n    <a class=\"avatar\">\n      <img src=\"/images/avatar/small/elliot.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"author\">Elliot Fu</a>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "LTg3jeXt2HB6r3qpC",
    "parent" : "AKZSJuFtdErjNh7mx",
    "name" : "Metadata",
    "content" : "<div class=\"ui comments\">\n  <div class=\"comment\">\n    <a class=\"avatar\">\n      <img src=\"/images/avatar/small/stevie.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"author\">Stevie Feliciano</a>\n      <div class=\"metadata\">\n        <div class=\"date\">2 days ago</div>\n        <div class=\"rating\">\n          <i class=\"star icon\"></i>\n          5 Faves\n        </div>\n      </div>\n      <div class=\"text\">\n        Hey guys, I hope this example comment is helping you read this documentation.\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "AyXfbqczJidtwJRCN",
    "parent" : "AKZSJuFtdErjNh7mx",
    "name" : "Actions",
    "content" : "<div class=\"ui comments\">\n  <div class=\"comment\">\n    <a class=\"avatar\">\n      <img src=\"/images/avatar/small/joe.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"author\">Tom Lukic</a>\n      <div class=\"text\">\n        This will be great for business reports. I will definitely download this.\n      </div>\n      <div class=\"actions\">\n        <a class=\"reply\">Reply</a>\n        <a class=\"save\">Save</a>\n        <a class=\"hide\">Hide</a>\n        <a>\n          <i class=\"expand icon\"></i>\n          Full-screen\n        </a>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "HSmeRzikb9kCfEFnH",
    "parent" : "AKZSJuFtdErjNh7mx",
    "name" : "Reply Form",
    "content" : "<div class=\"ui comments\">\n  <div class=\"comment\">\n    <a class=\"avatar\">\n      <img src=\"/images/avatar/small/steve.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"author\">Steve Jobes</a>\n      <div class=\"metadata\">\n        <div class=\"date\">2 days ago</div>\n      </div>\n      <div class=\"text\">\n        Revolutionary!\n      </div>\n      <div class=\"actions\">\n        <a class=\"reply active\">Reply</a>\n      </div>\n      <form class=\"ui reply form\">\n        <div class=\"field\">\n          <textarea></textarea>\n        </div>\n        <div class=\"ui primary submit labeled icon button\">\n          <i class=\"icon edit\"></i> Add Reply\n        </div>\n      </form>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "C2sNCNydRDzFrrei4",
    "parent" : "AKZSJuFtdErjNh7mx",
    "name" : "Form",
    "content" : "<div class=\"ui comments\">\n  <div class=\"comment\">\n    <a class=\"avatar\">\n      <img src=\"/images/avatar/small/joe.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"author\">Joe Henderson</a>\n      <div class=\"metadata\">\n        <div class=\"date\">1 day ago</div>\n      </div>\n      <div class=\"text\">\n        <p>The hours, minutes and seconds stand as visible reminders that your effort put them all there. </p>\n        <p>Preserve until your next run, when the watch lets you see how Impermanent your efforts are.</p>\n      </div>\n      <div class=\"actions\">\n        <a class=\"reply\">Reply</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"comment\">\n    <a class=\"avatar\">\n      <img src=\"/images/avatar/small/christian.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"author\">Christian Rocha</a>\n      <div class=\"metadata\">\n        <div class=\"date\">2 days ago</div>\n      </div>\n      <div class=\"text\">\n        I re-tweeted this.\n      </div>\n      <div class=\"actions\">\n        <a class=\"reply\">Reply</a>\n      </div>\n    </div>\n  </div>\n  <form class=\"ui reply form\">\n    <div class=\"field\">\n      <textarea></textarea>\n    </div>\n    <div class=\"ui primary submit labeled icon button\">\n      <i class=\"icon edit\"></i> Add Comment\n    </div>\n  </form>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "uyDxbuYtbNiwWkd4H",
    "parent" : "AKZSJuFtdErjNh7mx",
    "name" : "States",
    "content" : "<div>\n      <div class=\"actions\">\n        <a class=\"reply\">Reply</a>\n      </div>\n    </div>\n    <div class=\"collapsed comments\">\n      <div class=\"comment\">\n        <a class=\"avatar\">\n          <img  class=\"\" src=\"/images/avatar/tom.jpg\">\n        </a>\n        <div class=\"content\">\n          <a class=\"author\">Elliot Fu</a>\n          <div class=\"metadata\">\n            <span class=\"date\">1 day ago</span>\n          </div>\n          <div class=\"text\">\n            No, it wont\n          </div>\n          <div class=\"actions\">\n            <a class=\"reply\">Reply</a>\n          </div>\n        </div>\n        <div class=\"comments\">\n          <div class=\"comment\">\n            <a class=\"avatar\">\n              <img class=\"\" src=\"/images/avatar/nan.jpg\">\n            </a>\n            <div class=\"content\">\n              <a class=\"author\">Jenny Hess</a>\n              <div class=\"metadata\">\n                <span class=\"date\">20 minutes ago</span>\n              </div>\n              <div class=\"text\">\n                Maybe it would.\n              </div>\n              <div class=\"actions\">\n                <a class=\"reply\">Reply</a>\n              </div> </div> </div> </div> </div> </div>",
    "isContainer" : false
}

,
{
    "_id" : "o4nJS2eTWqeTgbx9F",
    "parent" : "AKZSJuFtdErjNh7mx",
    "name" : "Variations",
    "content" : "<div class=\"ui threaded comments\">\n  <h3 class=\"ui dividing header\">Comments</h3>\n  <div class=\"comment\">\n    <a class=\"avatar\">\n      <img src=\"/images/avatar/small/matt.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"author\">Matt</a>\n      <div class=\"metadata\">\n        <span class=\"date\">Today at 5:42PM</span>\n      </div>\n      <div class=\"text\">\n        How artistic!\n      </div>\n      <div class=\"actions\">\n        <a class=\"reply\">Reply</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"comment\">\n    <a class=\"avatar\">\n      <img src=\"/images/avatar/small/elliot.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"author\">Elliot Fu</a>\n      <div class=\"metadata\">\n        <span class=\"date\">Yesterday at 12:30AM</span>\n      </div>\n      <div class=\"text\">\n        <p>This has been very useful for my research. Thanks as well!</p>\n      </div>\n      <div class=\"actions\">\n        <a class=\"reply\">Reply</a>\n      </div>\n    </div>\n    <div class=\"comments\">\n      <div class=\"comment\">\n        <a class=\"avatar\">\n          <img src=\"/images/avatar/small/jenny.jpg\">\n        </a>\n        <div class=\"content\">\n          <a class=\"author\">Jenny Hess</a>\n          <div class=\"metadata\">\n            <span class=\"date\">Just now</span>\n          </div>\n          <div class=\"text\">\n            Elliot you are always so right :)\n          </div>\n          <div class=\"actions\">\n            <a class=\"reply\">Reply</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"comment\">\n    <a class=\"avatar\">\n      <img src=\"/images/avatar/small/joe.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"author\">Joe Henderson</a>\n      <div class=\"metadata\">\n        <span class=\"date\">5 days ago</span>\n      </div>\n      <div class=\"text\">\n        Dude, this is awesome. Thanks so much\n      </div>\n      <div class=\"actions\">\n        <a class=\"reply\">Reply</a>\n      </div>\n    </div>\n  </div>\n  <form class=\"ui reply form\">\n    <div class=\"field\">\n      <textarea></textarea>\n    </div>\n    <div class=\"ui blue labeled submit icon button\">\n      <i class=\"icon edit\"></i> Add Reply\n    </div>\n  </form>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "KMmknbEBz2dMYGmfR",
    "parent" : "AKZSJuFtdErjNh7mx",
    "name" : "Minimal",
    "content" : "<div class=\"ui minimal comments\">\n  <h3 class=\"ui dividing header\">Comments</h3>\n  <div class=\"comment\">\n    <a class=\"avatar\">\n      <img src=\"/images/avatar/small/matt.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"author\">Matt</a>\n      <div class=\"metadata\">\n        <span class=\"date\">Today at 5:42PM</span>\n      </div>\n      <div class=\"text\">\n        How artistic!\n      </div>\n      <div class=\"actions\">\n        <a class=\"reply\">Reply</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"comment\">\n    <a class=\"avatar\">\n      <img src=\"/images/avatar/small/elliot.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"author\">Elliot Fu</a>\n      <div class=\"metadata\">\n        <span class=\"date\">Yesterday at 12:30AM</span>\n      </div>\n      <div class=\"text\">\n        <p>This has been very useful for my research. Thanks as well!</p>\n      </div>\n      <div class=\"actions\">\n        <a class=\"reply\">Reply</a>\n      </div>\n    </div>\n    <div class=\"comments\">\n      <div class=\"comment\">\n        <a class=\"avatar\">\n          <img src=\"/images/avatar/small/jenny.jpg\">\n        </a>\n        <div class=\"content\">\n          <a class=\"author\">Jenny Hess</a>\n          <div class=\"metadata\">\n            <span class=\"date\">Just now</span>\n          </div>\n          <div class=\"text\">\n            Elliot you are always so right :)\n          </div>\n          <div class=\"actions\">\n            <a class=\"reply\">Reply</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"comment\">\n    <a class=\"avatar\">\n      <img src=\"/images/avatar/small/joe.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"author\">Joe Henderson</a>\n      <div class=\"metadata\">\n        <span class=\"date\">5 days ago</span>\n      </div>\n      <div class=\"text\">\n        Dude, this is awesome. Thanks so much\n      </div>\n      <div class=\"actions\">\n        <a class=\"reply\">Reply</a>\n      </div>\n    </div>\n  </div>\n  <form class=\"ui reply form\">\n    <div class=\"field\">\n      <textarea></textarea>\n    </div>\n    <div class=\"ui blue labeled submit icon button\">\n      <i class=\"icon edit\"></i> Add Reply\n    </div>\n  </form>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Lqe75gNPGt3GZEJ7z",
    "parent" : "SLN56bhvAf6RZvCXg",
    "name" : "Types",
    "content" : "<div class=\"ui feed\">\n  <div class=\"event\">\n    <div class=\"label\">\n      <img src=\"/images/avatar/small/elliot.jpg\">\n    </div>\n    <div class=\"content\">\n      <div class=\"summary\">\n        <a class=\"user\">\n          Elliot Fu\n        </a> added you as a friend\n        <div class=\"date\">\n          1 Hour Ago\n        </div>\n      </div>\n      <div class=\"meta\">\n        <a class=\"like\">\n          <i class=\"like icon\"></i> 4 Likes\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"event\">\n    <div class=\"label\">\n      <img src=\"/images/avatar/small/helen.jpg\">\n    </div>\n    <div class=\"content\">\n      <div class=\"summary\">\n        <a>Helen Troy</a> added <a>2 new illustrations</a>\n        <div class=\"date\">\n          4 days ago\n        </div>\n      </div>\n      <div class=\"extra images\">\n        <a><img src=\"/images/wireframe/image.png\"></a>\n        <a><img src=\"/images/wireframe/image.png\"></a>\n      </div>\n      <div class=\"meta\">\n        <a class=\"like\">\n          <i class=\"like icon\"></i> 1 Like\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"event\">\n    <div class=\"label\">\n      <img src=\"/images/avatar/small/jenny.jpg\">\n    </div>\n    <div class=\"content\">\n      <div class=\"summary\">\n        <a class=\"user\">\n          Jenny Hess\n        </a> added you as a friend\n        <div class=\"date\">\n          2 Days Ago\n        </div>\n      </div>\n      <div class=\"meta\">\n        <a class=\"like\">\n          <i class=\"like icon\"></i> 8 Likes\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"event\">\n    <div class=\"label\">\n      <img src=\"/images/avatar/small/joe.jpg\">\n    </div>\n    <div class=\"content\">\n      <div class=\"summary\">\n        <a>Joe Henderson</a> posted on his page\n        <div class=\"date\">\n          3 days ago\n        </div>\n      </div>\n      <div class=\"extra text\">\n        Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.\n      </div>\n      <div class=\"meta\">\n        <a class=\"like\">\n          <i class=\"like icon\"></i> 5 Likes\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"event\">\n    <div class=\"label\">\n      <img src=\"/images/avatar/small/justen.jpg\">\n    </div>\n    <div class=\"content\">\n      <div class=\"summary\">\n        <a>Justen Kitsune</a> added <a>2 new photos</a> of you\n        <div class=\"date\">\n          4 days ago\n        </div>\n      </div>\n      <div class=\"extra images\">\n        <a><img src=\"/images/wireframe/image.png\"></a>\n        <a><img src=\"/images/wireframe/image.png\"></a>\n      </div>\n      <div class=\"meta\">\n        <a class=\"like\">\n          <i class=\"like icon\"></i> 41 Likes\n        </a>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "YzGgTQNXgasxhY4T7",
    "parent" : "SLN56bhvAf6RZvCXg",
    "name" : "Content",
    "content" : "<div class=\"ui feed\">\n  <div class=\"event\">\n    <div class=\"label\">\n      <img src=\"/images/avatar/small/elliot.jpg\">\n    </div>\n    <div class=\"content\">\n      You added Elliot Fu to the group <a>Coworkers</a>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "YbPCYoypYJkqq9GSZ",
    "parent" : "SLN56bhvAf6RZvCXg",
    "name" : "Pencil",
    "content" : "<div class=\"ui feed\">\n  <div class=\"event\">\n    <div class=\"label\">\n      <i class=\"pencil icon\"></i>\n    </div>\n    <div class=\"content\">\n      <div class=\"summary\">\n        You posted on your friend <a>Stevie Feliciano's</a> wall.\n        <div class=\"date\">Today</div>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "bhzBxRe8YPAD5ezCq",
    "parent" : "SLN56bhvAf6RZvCXg",
    "name" : "Date",
    "content" : "<div class=\"ui feed\">\n  <div class=\"event\">\n    <div class=\"label\">\n      <img src=\"/images/avatar/small/jenny.jpg\">\n    </div>\n    <div class=\"content\">\n      <div class=\"date\">\n        3 days ago\n      </div>\n      <div class=\"summary\">\n         You added <a>Jenny Hess</a> to your <a>coworker</a> group.\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "4H2piDK4tKmQCisQp",
    "parent" : "SLN56bhvAf6RZvCXg",
    "name" : "Add",
    "content" : "<div class=\"ui feed\">\n  <div class=\"event\">\n    <div class=\"label\">\n      <img src=\"/images/avatar/small/jenny.jpg\">\n    </div>\n    <div class=\"content\">\n      <div class=\"summary\">\n        You added <a>Jenny Hess</a> to your <a>coworker</a> group.\n        <div class=\"date\">\n          3 days ago\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "MAXpkPCEdp9QRrQY8",
    "parent" : "SLN56bhvAf6RZvCXg",
    "name" : "Additional information",
    "content" : "<div class=\"ui feed\">\n  <div class=\"event\">\n    <div class=\"label\">\n      <img src=\"/images/avatar/small/helen.jpg\">\n    </div>\n    <div class=\"content\">\n      <div class=\"date\">\n        3 days ago\n      </div>\n      <div class=\"summary\">\n         <a>Helen Troy</a> added 2 photos\n      </div>\n      <div class=\"extra images\">\n        <a><img src=\"/images/wireframe/image.png\"></a>\n        <a><img src=\"/images/wireframe/image.png\"></a>\n      </div>\n    </div>\n  </div>\n  <div class=\"event\">\n    <div class=\"label\">\n      <img src=\"/images/avatar/small/laura.jpg\">\n    </div>\n    <div class=\"content\">\n      <div class=\"date\">\n        3 days ago\n      </div>\n      <div class=\"summary\">\n         <a>Laura Faucet</a> created a post\n      </div>\n      <div class=\"extra text\">\n        Have you seen what's going on in Israel? Can you believe it.\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "QroKMub4rpMgEpWKK",
    "parent" : "SLN56bhvAf6RZvCXg",
    "name" : "Variations",
    "content" : "<div class=\"ui small feed\">\n  <h4 class=\"ui header\">Followers Activity</h4>\n  <div class=\"event\">\n    <div class=\"content\">\n      <div class=\"summary\">\n         <a>Elliot Fu</a> added <a>Jenny Hess</a> as a friend\n      </div>\n    </div>\n  </div>\n  <div class=\"event\">\n    <div class=\"content\">\n      <div class=\"summary\">\n         <a>Stevie Feliciano</a> added <a>Elliot Fu</a> as a friend\n      </div>\n    </div>\n  </div>\n  <div class=\"event\">\n    <div class=\"content\">\n      <div class=\"summary\">\n         <a>Helen Troy</a> added <a>Christian Rocha</a> as a friend\n      </div>\n    </div>\n  </div>\n  <div class=\"event\">\n    <div class=\"content\">\n      <div class=\"summary\">\n         <a>Christian Rocha</a> signed up for the  site.\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "r9cM8rKdhW3DbvvtX",
    "parent" : "SLN56bhvAf6RZvCXg",
    "name" : "Seawater",
    "content" : "<div class=\"ui large feed\">\n  <div class=\"event\">\n    <div class=\"label\">\n      <img src=\"/images/avatar/small/elliot.jpg\">\n    </div>\n    <div class=\"content\">\n      <div class=\"summary\">\n        <a class=\"user\">\n          Elliot Fu\n        </a> added you as a friend\n        <div class=\"date\">\n          1 Hour Ago\n        </div>\n      </div>\n      <div class=\"meta\">\n        <a class=\"like\">\n          <i class=\"like icon\"></i> 4 Likes\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"event\">\n    <div class=\"label\">\n      <i class=\"pencil icon\"></i>\n    </div>\n    <div class=\"content\">\n      <div class=\"summary\">\n        You submitted a new post to the page\n        <div class=\"date\">\n          3 days ago\n        </div>\n      </div>\n      <div class=\"extra text\">\n        I'm having a BBQ this weekend. Come by around 4pm if you can.\n      </div>\n      <div class=\"meta\">\n        <a class=\"like\">\n          <i class=\"like icon\"></i> 11 Likes\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"event\">\n    <div class=\"label\">\n      <img src=\"/images/avatar/small/helen.jpg\">\n    </div>\n    <div class=\"content\">\n      <div class=\"date\">\n        4 days ago\n      </div>\n      <div class=\"summary\">\n        <a>Helen Troy</a> added <a>2 new illustrations</a>\n      </div>\n      <div class=\"extra images\">\n        <a><img src=\"/images/wireframe/image.png\"></a>\n        <a><img src=\"/images/wireframe/image.png\"></a>\n      </div>\n      <div class=\"meta\">\n        <a class=\"like\">\n          <i class=\"like icon\"></i> 1 Like\n        </a>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "DSiocXphbCTF65XDf",
    "parent" : "p6aJ7ZmN7AExPzWkZ",
    "name" : "Types",
    "content" : "<div class=\"ui items\">\n  <div class=\"item\">\n    <div class=\"image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"content\">\n      <a class=\"header\">Header</a>\n      <div class=\"meta\">\n        <span>Description</span>\n      </div>\n      <div class=\"description\">\n        <p></p>\n      </div>\n      <div class=\"extra\">\n        Additional Details\n      </div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"content\">\n      <a class=\"header\">Header</a>\n      <div class=\"meta\">\n        <span>Description</span>\n      </div>\n      <div class=\"description\">\n        <p></p>\n      </div>\n      <div class=\"extra\">\n        Additional Details\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "YaK7eiYoXsjkHbqaC",
    "parent" : "p6aJ7ZmN7AExPzWkZ",
    "name" : "Content",
    "content" : "<div class=\"ui divided items\">\n  <div class=\"item\">\n    <div class=\"image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "6t5S9yDkYwzmNLbEw",
    "parent" : "p6aJ7ZmN7AExPzWkZ",
    "name" : "Content",
    "content" : "<div class=\"ui divided items\">\n  <div class=\"item\">\n    <div class=\"ui tiny image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      Content A\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui tiny image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      Content B\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui tiny image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      Content C\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "eY2Edohihm4WHfmma",
    "parent" : "p6aJ7ZmN7AExPzWkZ",
    "name" : "Header",
    "content" : "<div class=\"ui items\">\n  <div class=\"item\">\n    <div class=\"ui tiny image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      <a class=\"header\">12 Years a Slave</a>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui tiny image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      <a class=\"header\">My Neighbor Totoro</a>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui tiny image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      <a class=\"header\">Watchmen</a>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Y85BgyLRjDzJuGnWn",
    "parent" : "p6aJ7ZmN7AExPzWkZ",
    "name" : "Metadata",
    "content" : "<div class=\"ui items\">\n  <div class=\"item\">\n    <div class=\"ui small image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"content\">\n      <div class=\"header\">Arrowhead Valley Camp</div>\n      <div class=\"meta\">\n        <span class=\"price\">$1200</span>\n        <span class=\"stay\">1 Month</span>\n      </div>\n      <div class=\"description\">\n        <p></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui small image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"content\">\n      <div class=\"header\">Buck's Homebrew Stayaway</div>\n      <div class=\"meta\">\n        <span class=\"price\">$1000</span>\n        <span class=\"stay\">2 Weeks</span>\n      </div>\n      <div class=\"description\">\n        <p></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui small image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"content\">\n      <div class=\"header\">Astrology Camp</div>\n      <div class=\"meta\">\n        <span class=\"price\">$1600</span>\n        <span class=\"stay\">6 Weeks</span>\n      </div>\n      <div class=\"description\">\n        <p></p>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "uzktXCvQdXQAc5Bja",
    "parent" : "p6aJ7ZmN7AExPzWkZ",
    "name" : "Link",
    "content" : "<div class=\"ui yellow message\">\n  <i class=\"star icon\"></i>\n  {{data.text1}}\n</div>\n<div class=\"ui items\">\n  <div class=\"item\">\n    <a class=\"ui tiny image\">\n      <img src=\"/images/avatar/nan.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"header\">{{data.text2}}</a>\n      <div class=\"description\">\n        <p>{{data.text3}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <a class=\"ui tiny image\">\n      <img src=\"/images/avatar/large/veronika.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"header\">Veronika Ossi</a>\n      <div class=\"description\">\n        <p>Veronika Ossi is a set designer living in New York who <a>enjoys</a> kittens, music, and partying.</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <a class=\"ui tiny image\">\n      <img src=\"/images/avatar/large/jenny.jpg\">\n    </a>\n    <div class=\"content\">\n      <a class=\"header\">Jenny Hess</a>\n      <div class=\"description\">\n        <p>Jenny is a student studying Media Management at <a>the New School</a>.</p>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "text1",
            "value" : "To make the entire content of a item link, check out the link variation below"
        }, 
        {
            "name" : "text2",
            "value" : "Stevie Feliciano"
        }, 
        {
            "name" : "text3",
            "value" : "Stevie Feliciano",
            "choices" : "Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing."
        }
    ]
}

,
{
    "_id" : "AXr4be6wuJjLZwAJo",
    "parent" : "p6aJ7ZmN7AExPzWkZ",
    "name" : "Description",
    "content" : "<div class=\"ui items\">\n  <div class=\"item\">\n    <a class=\"ui small image\">\n      <img>\n    </a>\n    <div class=\"content\">\n      <a class=\"header\">Cute Dog</a>\n      <div class=\"description\">\n        <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>\n        <p>Many people also have their own barometers for what makes a cute dog.</p>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ENgMunYxFZKtExCd4",
    "parent" : "p6aJ7ZmN7AExPzWkZ",
    "name" : "Extra Content",
    "content" : "<div class=\"ui items\">\n  <div class=\"item\">\n    <div class=\"content\">\n      <a class=\"header\">Cute Dog</a>\n      <div class=\"description\">\n        <p></p>\n        <p></p>\n      </div>\n      <div class=\"extra\">\n        <i class=\"green check icon\"></i>\n        121 Votes\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ktuZCmHZPrDyEz4ZG",
    "parent" : "p6aJ7ZmN7AExPzWkZ",
    "name" : "Rating",
    "content" : "<div class=\"ui items\">\n  <div class=\"item\">\n    <a class=\"ui tiny image\">\n      <img src=\"/images/avatar/large/jenny.jpg\">\n    </a>\n    <div class=\"middle aligned content\">\n      <div class=\"header\">\n        <i class=\"like icon\"></i>\n        Veronika Ossi\n      </div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <a class=\"ui tiny image\">\n      <img src=\"/images/avatar/large/justen.jpg\">\n    </a>\n    <div class=\"middle aligned content\">\n      <div class=\"header\">\n        <i class=\"favorite icon\"></i>\n        Justen Kitsune\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "DsX3d4WSCxaft7F2y",
    "parent" : "p6aJ7ZmN7AExPzWkZ",
    "name" : "Divided",
    "content" : "<div class=\"ui divided items\">\n  <div class=\"item\">\n    <div class=\"image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"content\">\n      <a class=\"header\">12 Years a Slave</a>\n      <div class=\"meta\">\n        <span class=\"cinema\">Union Square 14</span>\n      </div>\n      <div class=\"description\">\n        <p></p>\n      </div>\n      <div class=\"extra\">\n        <div class=\"ui label\">IMAX</div>\n        <div class=\"ui label\"><i class=\"globe icon\"></i> Additional Languages</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"content\">\n      <a class=\"header\">My Neighbor Totoro</a>\n      <div class=\"meta\">\n        <span class=\"cinema\">IFC Cinema</span>\n      </div>\n      <div class=\"description\">\n        <p></p>\n      </div>\n      <div class=\"extra\">\n        <div class=\"ui right floated primary button\">\n          Buy tickets\n          <i class=\"right chevron icon\"></i>\n        </div>\n        <div class=\"ui label\">Limited</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"content\">\n      <a class=\"header\">Watchmen</a>\n      <div class=\"meta\">\n        <span class=\"cinema\">IFC</span>\n      </div>\n      <div class=\"description\">\n        <p></p>\n      </div>\n      <div class=\"extra\">\n        <div class=\"ui right floated primary button\">\n          Buy tickets\n          <i class=\"right chevron icon\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "5bXkY6JcJCSJhyPNR",
    "parent" : "p6aJ7ZmN7AExPzWkZ",
    "name" : "Relaxed",
    "content" : "<div class=\"ui relaxed items\">\n  <div class=\"item\">\n    <div class=\"ui tiny image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      <a class=\"header\">12 Years a Slave</a>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui tiny image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      <a class=\"header\">My Neighbor Totoro</a>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui tiny image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      <a class=\"header\">Watchmen</a>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "8Gp2Nb9577GeKdMkv",
    "parent" : "p6aJ7ZmN7AExPzWkZ",
    "name" : "Tiny",
    "content" : "<div class=\"ui very relaxed items\">\n  <div class=\"item\">\n    <div class=\"ui tiny image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      <a class=\"header\">12 Years a Slave</a>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui tiny image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      <a class=\"header\">My Neighbor Totoro</a>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui tiny image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      <a class=\"header\">Watchmen</a>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "QEza58LhBWk8qj7u6",
    "parent" : "p6aJ7ZmN7AExPzWkZ",
    "name" : "Link Item",
    "content" : "<div class=\"ui link items\">\n  <div class=\"item\">\n    <div class=\"ui tiny image\">\n      <img src=\"/images/avatar/large/stevie.jpg\">\n    </div>\n    <div class=\"content\">\n      <div class=\"header\">Stevie Feliciano</div>\n      <div class=\"description\">\n        <p></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui tiny image\">\n      <img src=\"/images/avatar/large/veronika.jpg\">\n    </div>\n    <div class=\"content\">\n      <div class=\"header\">Veronika Ossi</div>\n      <div class=\"description\">\n        <p></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui tiny image\">\n      <img src=\"/images/avatar/large/jenny.jpg\">\n    </div>\n    <div class=\"content\">\n      <div class=\"header\">Jenny Hess</div>\n      <div class=\"description\">\n        <p></p>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "7QqrnWz4R3WjCXsaK",
    "parent" : "p6aJ7ZmN7AExPzWkZ",
    "name" : "Vertical Alignment",
    "content" : "<div class=\"ui items\">\n  <div class=\"item\">\n    <div class=\"ui small image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"content\">\n      <div class=\"header\">\n        Top Aligned\n      </div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui small image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      <div class=\"header\">\n        Middle Aligned\n      </div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui small image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"bottom aligned content\">\n      <div class=\"header\">\n        Bottom Aligned\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "SWvN9NinhB7qrDsf2",
    "parent" : "p6aJ7ZmN7AExPzWkZ",
    "name" : "Floated Content",
    "content" : "<div class=\"ui items\">\n  <div class=\"item\">\n    <div class=\"ui small image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      <div class=\"header\">\n        Content A\n      </div>\n      <div class=\"description\">\n        <p></p>\n      </div>\n      <div class=\"extra\">\n        <div class=\"ui right floated button\">\n          Action\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui small image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      <div class=\"header\">\n        Content B\n      </div>\n      <div class=\"description\">\n        <p></p>\n      </div>\n      <div class=\"extra\">\n        <div class=\"ui right floated button\">\n          Action\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui small image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      <div class=\"header\">\n        Content C\n      </div>\n      <div class=\"description\">\n        <p></p>\n      </div>\n      <div class=\"extra\">\n        <div class=\"ui right floated button\">\n          Action\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "m8oFW9s8nDk3HtXXo",
    "parent" : "RxaiFDXhi792R6yid",
    "name" : "Types",
    "content" : "<div class=\"ui statistic\">\n  <div class=\"value\">\n    5,550\n  </div>\n  <div class=\"label\">\n    Downloads\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "yXpvoj6FAoHpdrZcp",
    "parent" : "RxaiFDXhi792R6yid",
    "name" : "Views",
    "content" : "<div class=\"ui statistic\">\n  <div class=\"label\">\n    Views\n  </div>\n  <div class=\"value\">\n    40,509\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "re3y5BopwPbNugn8X",
    "parent" : "RxaiFDXhi792R6yid",
    "name" : "Statistic Group",
    "content" : "<div class=\"ui statistics\">\n  <div class=\"statistic\">\n    <div class=\"value\">\n      22\n    </div>\n    <div class=\"label\">\n      Faves\n    </div>\n  </div>\n  <div class=\"statistic\">\n    <div class=\"value\">\n      31,200\n    </div>\n    <div class=\"label\">\n      Views\n    </div>\n  </div>\n  <div class=\"statistic\">\n    <div class=\"value\">\n      22\n    </div>\n    <div class=\"label\">\n      Members\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "E5WLNt6JNqfrbNdTB",
    "parent" : "RxaiFDXhi792R6yid",
    "name" : "Value",
    "content" : "<div class=\"ui statistics\">\n  <div class=\"statistic\">\n    <div class=\"value\">\n      22\n    </div>\n    <div class=\"label\">\n      Saves\n    </div>\n  </div>\n  <div class=\"statistic\">\n    <div class=\"text value\">\n      Three<br>\n      Thousand\n    </div>\n    <div class=\"label\">\n      Signups\n    </div>\n  </div>\n  <div class=\"statistic\">\n    <div class=\"value\">\n      <i class=\"plane icon\"></i> 5\n    </div>\n    <div class=\"label\">\n      Flights\n    </div>\n  </div>\n  <div class=\"statistic\">\n    <div class=\"value\">\n      <img src=\"/images/avatar/small/joe.jpg\" class=\"ui circular inline image\">\n      42\n    </div>\n    <div class=\"label\">\n      Team Members\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "FwKEZyYR4CvWGsKrv",
    "parent" : "RxaiFDXhi792R6yid",
    "name" : "Label",
    "content" : "<div class=\"ui statistic\">\n  <div class=\"value\">\n    2,204\n  </div>\n  <div class=\"label\">\n    Views\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "mB5DuY2fSXXPsmBmc",
    "parent" : "RxaiFDXhi792R6yid",
    "name" : "Variations",
    "content" : "<div class=\"ui horizontal statistic\">\n  <div class=\"value\">\n    2,204\n  </div>\n  <div class=\"label\">\n    Views\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "9yY7P34exDww47Akt",
    "parent" : "RxaiFDXhi792R6yid",
    "name" : "Sea",
    "content" : "<div class=\"ui horizontal statistics\">\n  <div class=\"statistic\">\n    <div class=\"value\">\n      2,204\n    </div>\n    <div class=\"label\">\n      Views\n    </div>\n  </div>\n  <div class=\"statistic\">\n    <div class=\"value\">\n      3,322\n    </div>\n    <div class=\"label\">\n      Downloads\n    </div>\n  </div>\n  <div class=\"statistic\">\n    <div class=\"value\">\n      22\n    </div>\n    <div class=\"label\">\n      Tasks\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "mKfky625Cpy9ErWXa",
    "parent" : "RxaiFDXhi792R6yid",
    "name" : "Colored",
    "content" : "<div class=\"ui statistics\">\n  <div class=\"red statistic\">\n    <div class=\"value\">\n      27\n    </div>\n    <div class=\"label\">\n      Red\n    </div>\n  </div>\n  <div class=\"orange statistic\">\n    <div class=\"value\">\n      8\n    </div>\n    <div class=\"label\">\n      Orange\n    </div>\n  </div>\n  <div class=\"yellow statistic\">\n    <div class=\"value\">\n      28\n    </div>\n    <div class=\"label\">\n      Yellow\n    </div>\n  </div>\n  <div class=\"olive statistic\">\n    <div class=\"value\">\n      7\n    </div>\n    <div class=\"label\">\n      Olive\n    </div>\n  </div>\n  <div class=\"green statistic\">\n    <div class=\"value\">\n      14\n    </div>\n    <div class=\"label\">\n      Green\n    </div>\n  </div>\n  <div class=\"teal statistic\">\n    <div class=\"value\">\n      82\n    </div>\n    <div class=\"label\">\n      Teal\n    </div>\n  </div>\n  <div class=\"blue statistic\">\n    <div class=\"value\">\n      1\n    </div>\n    <div class=\"label\">\n      Blue\n    </div>\n  </div>\n  <div class=\"violet statistic\">\n    <div class=\"value\">\n      22\n    </div>\n    <div class=\"label\">\n      Violet\n    </div>\n  </div>\n  <div class=\"purple statistic\">\n    <div class=\"value\">\n      23\n    </div>\n    <div class=\"label\">\n      Purple\n    </div>\n  </div>\n  <div class=\"pink statistic\">\n    <div class=\"value\">\n      15\n    </div>\n    <div class=\"label\">\n      Pink\n    </div>\n  </div>\n  <div class=\"brown statistic\">\n    <div class=\"value\">\n      36\n    </div>\n    <div class=\"label\">\n      Brown\n    </div>\n  </div>\n  <div class=\"grey statistic\">\n    <div class=\"value\">\n      49\n    </div>\n    <div class=\"label\">\n      Grey\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "AXdwYxwxraP5z9Fnd",
    "parent" : "RxaiFDXhi792R6yid",
    "name" : "Inverted",
    "content" : "<div class=\"ui inverted segment\">\n  <div class=\"ui inverted statistic\">\n    <div class=\"value\">\n      54\n    </div>\n    <div class=\"label\">\n      Inverted\n    </div>\n  </div>\n  <div class=\"ui red inverted statistic\">\n    <div class=\"value\">\n      27\n    </div>\n    <div class=\"label\">\n      Red\n    </div>\n  </div>\n  <div class=\"ui orange inverted statistic\">\n    <div class=\"value\">\n      8\n    </div>\n    <div class=\"label\">\n      Orange\n    </div>\n  </div>\n  <div class=\"ui yellow inverted statistic\">\n    <div class=\"value\">\n      28\n    </div>\n    <div class=\"label\">\n      Yellow\n    </div>\n  </div>\n  <div class=\"ui olive inverted statistic\">\n    <div class=\"value\">\n      7\n    </div>\n    <div class=\"label\">\n      Olive\n    </div>\n  </div>\n    <div class=\"ui green inverted statistic\">\n    <div class=\"value\">\n      14\n    </div>\n    <div class=\"label\">\n      Green\n    </div>\n  </div>\n  <div class=\"ui teal inverted statistic\">\n    <div class=\"value\">\n      82\n    </div>\n    <div class=\"label\">\n      Teal\n    </div>\n  </div>\n  <div class=\"ui blue inverted statistic\">\n    <div class=\"value\">\n      1\n    </div>\n    <div class=\"label\">\n      Blue\n    </div>\n  </div>\n  <div class=\"ui violet inverted statistic\">\n    <div class=\"value\">\n      22\n    </div>\n    <div class=\"label\">\n      Violet\n    </div>\n  </div>\n  <div class=\"ui purple inverted statistic\">\n    <div class=\"value\">\n      23\n    </div>\n    <div class=\"label\">\n      Purple\n    </div>\n  </div>\n  <div class=\"ui pink inverted statistic\">\n    <div class=\"value\">\n      15\n    </div>\n    <div class=\"label\">\n      Pink\n    </div>\n  </div>\n  <div class=\"ui brown inverted statistic\">\n    <div class=\"value\">\n      36\n    </div>\n    <div class=\"label\">\n      Brown\n    </div>\n  </div>\n  <div class=\"ui grey inverted statistic\">\n    <div class=\"value\">\n      49\n    </div>\n    <div class=\"label\">\n      Grey\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "iptyZYk7SmHgEDkPm",
    "parent" : "RxaiFDXhi792R6yid",
    "name" : "Evenly Divided",
    "content" : "<div class=\"ui four statistics\">\n  <div class=\"statistic\">\n    <div class=\"value\">\n      22\n    </div>\n    <div class=\"label\">\n      Saves\n    </div>\n  </div>\n  <div class=\"statistic\">\n    <div class=\"text value\">\n      Three<br>\n      Thousand\n    </div>\n    <div class=\"label\">\n      Signups\n    </div>\n  </div>\n  <div class=\"statistic\">\n    <div class=\"value\">\n      <i class=\"plane icon\"></i> 5\n    </div>\n    <div class=\"label\">\n      Flights\n    </div>\n  </div>\n  <div class=\"statistic\">\n    <div class=\"value\">\n      <img src=\"/images/avatar/small/joe.jpg\" class=\"ui circular inline image\">\n      42\n    </div>\n    <div class=\"label\">\n      Team Members\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "2u5sDi5XjDmct55Xw",
    "parent" : "RxaiFDXhi792R6yid",
    "name" : "Floated",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui right floated statistic\">\n    <div class=\"value\">\n      2,204\n    </div>\n    <div class=\"label\">\n      Views\n    </div>\n  </div>\n  <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>\n   <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>\n   <div class=\"ui left floated statistic\">\n    <div class=\"value\">\n      2,204\n    </div>\n    <div class=\"label\">\n      Views\n    </div>\n  </div>\n  <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>\n   <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>\n </div>",
    "isContainer" : false
}

,
{
    "_id" : "5picnEk56wFWouu6E",
    "parent" : "RxaiFDXhi792R6yid",
    "name" : "Size",
    "content" : "<div class=\"ui {{design.size}} statistic\">\n  <div class=\"value\">\n    {{data.value}}\n  </div>\n  <div class=\"label\">\n    {{data.label}}\n  </div>\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "size",
            "value" : "medium",
            "choices" : "|mini|tiny|small|medium|large|big|huge|massive"
        }
    ],
    "data" : [ 
        {
            "name" : "value",
            "value" : "3,454"
        }, 
        {
            "name" : "label",
            "value" : "Views"
        }
    ]
}

,
{
    "_id" : "izt73WGufHubQQNxQ",
    "parent" : "RxaiFDXhi792R6yid",
    "name" : "LIne",
    "content" : "<div class=\"ui small horizontal statistic\">\n  <div class=\"value\">\n    2,204\n  </div>\n  <div class=\"label\">\n    Views\n  </div>\n</div>\n<div class=\"ui horizontal statistic\">\n  <div class=\"value\">\n    2,204\n  </div>\n  <div class=\"label\">\n    Views\n  </div>\n</div>\n<div class=\"ui large horizontal statistic\">\n  <div class=\"value\">\n    2,204\n  </div>\n  <div class=\"label\">\n    Views\n  </div>\n</div>\n<div class=\"ui huge horizontal statistic\">\n  <div class=\"value\">\n    2,204\n  </div>\n  <div class=\"label\">\n    Views\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "X4HN9C7Q9mraNFJn5",
    "parent" : "e9dNGnYkzSmxMjtpT",
    "name" : "Types",
    "content" : "<div class=\"ui accordion\">\n{{#each data.content}}\n  <div class=\"title\">\n    <i class=\"dropdown icon\"></i>\n{{this.[0]}}\n  </div>\n  <div class=\"content\">{{{this.[1]}}}</div>\n{{/each}}\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "content",
            "value" : "What is a dog?:<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>|What kinds of dogs are there?:<p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>|How do you acquire a dog?:<p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p><p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>"
        }
    ]
}

,
{
    "_id" : "7B5ouQoBj5rhPPpTG",
    "parent" : "e9dNGnYkzSmxMjtpT",
    "name" : "Customized",
    "content" : "<div class=\"ui {{design.styled}} {{design.inverted}} {{design.fluid}} accordion\">\n{{#each data.content}}\n  <div class=\"title\">\n    <i class=\"dropdown icon\"></i>\n{{this.[0]}}\n  </div>\n  <div class=\"content\">{{{this.[1]}}}</div>\n{{/each}}\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "styled",
            "value" : "styled",
            "choices" : "|styled"
        }, 
        {
            "name" : "fluid",
            "value" : "fluid",
            "choices" : "|fluid"
        }, 
        {
            "name" : "inverted",
            "value" : "inverted",
            "choices" : "|inverted"
        }
    ],
    "data" : [ 
        {
            "name" : "content",
            "value" : "What is a dog?:<p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>|What kinds of dogs are there?:<p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>|How do you acquire a dog?:<p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p><p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>"
        }
    ]
}

,
{
    "_id" : "oXdmf3x2ho2R5y6TC",
    "parent" : "e9dNGnYkzSmxMjtpT",
    "name" : "Fluid",
    "content" : "<div class=\"ui styled fluid accordion\">\n  <div class=\"active title\">\n    <i class=\"dropdown icon\"></i>\n    What is a dog?\n  </div>\n  <div class=\"active content\">\n    <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n  </div>\n  <div class=\"title\">\n    <i class=\"dropdown icon\"></i>\n    What kinds of dogs are there?\n  </div>\n  <div class=\"content\">\n    <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>\n  </div>\n  <div class=\"title\">\n    <i class=\"dropdown icon\"></i>\n    How do you acquire a dog?\n  </div>\n  <div class=\"content\">\n    <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>\n    <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "doLxMTCWHduWGw5kr",
    "parent" : "e9dNGnYkzSmxMjtpT",
    "name" : "Inverted",
    "content" : "<div class=\"ui inverted segment\">\n  <div class=\"ui inverted accordion\">\n    <div class=\"active title\">\n      <i class=\"dropdown icon\"></i>\n      What is a dog?\n    </div>\n    <div class=\"active content\">\n      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n    </div>\n    <div class=\"title\">\n      <i class=\"dropdown icon\"></i>\n      What kinds of dogs are there?\n    </div>\n    <div class=\"content\">\n      <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>\n    </div>\n    <div class=\"title\">\n      <i class=\"dropdown icon\"></i>\n      How do you acquire a dog?\n    </div>\n    <div class=\"content\">\n      <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>\n      <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "hoYgfJPDbv4NxhSqq",
    "parent" : "A4Hod3y4pgCksh5Ts",
    "name" : "Types",
    "content" : "<div class=\"ui checkbox\">\n  <input type=\"checkbox\" name=\"example\">\n  <label>Make my profile visible</label>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "MS2kocpoBQHa5HCzR",
    "parent" : "A4Hod3y4pgCksh5Ts",
    "name" : "Radio",
    "content" : "<div class=\"ui radio checkbox\">\n  <input type=\"radio\" name=\"radio\" checked=\"checked\">\n  <label>Radio choice</label>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "hSzHSjcpPEe2Gq924",
    "parent" : "rAL6YdEeuMCLiiibG",
    "name" : "Types",
    "content" : "<div class=\"ui segment\">\n  <!-- Dimmer Generated Automatically No Need to Include !-->\n  <h3 class=\"ui header\">\n    Overlayable Section\n  </h3>\n  <div class=\"ui small images\">\n    <img>\n    <img>\n    <img>\n  </div>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "G5ZMCu23qpxBBuJh6",
    "parent" : "rAL6YdEeuMCLiiibG",
    "name" : "Content Dimmer",
    "content" : "<div class=\"ui segment\">\n  <h3 class=\"ui header\">\n    Overlayable Section\n  </h3>\n  <div class=\"ui small images\">\n    <img>\n    <img>\n    <img>\n  </div>\n  <p></p>\n  <div class=\"ui dimmer\">\n    <div class=\"content\">\n      <div class=\"center\">\n        <h2 class=\"ui inverted icon header\">\n          <i class=\"heart icon\"></i>\n          Dimmed Message!\n        </h2>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "oKxukaXnh9Pkos2v7",
    "parent" : "rAL6YdEeuMCLiiibG",
    "name" : "Page Dimmer",
    "content" : "<div class=\"ui page dimmer\">\n  <div class=\"content\">\n    <div class=\"center\">Hello</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "fW9kPtzkJ3hqhMmXK",
    "parent" : "rAL6YdEeuMCLiiibG",
    "name" : "States",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui active dimmer\"></div>\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Da4DcffFks5Sn6rLt",
    "parent" : "rAL6YdEeuMCLiiibG",
    "name" : "Disabled",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui disabled dimmer\"></div>\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "NPHn6inJCcee63fKh",
    "parent" : "rAL6YdEeuMCLiiibG",
    "name" : "Dimmable",
    "content" : "<div class=\"ui blurring segment\">\n  <div class=\"ui dimmer\"></div>\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ajYCiKkdJHGzvhnLr",
    "parent" : "rAL6YdEeuMCLiiibG",
    "name" : "Blurring",
    "content" : "<div class=\"ui blurring segment\">\n  <div class=\"ui inverted dimmer\"></div>\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "kdJa3vxiPAn3Ddj5b",
    "parent" : "rAL6YdEeuMCLiiibG",
    "name" : "Simple Dimmer",
    "content" : "<div class=\"ui dimmable dimmed segment\">\n  <div class=\"ui simple dimmer\"></div>\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "7iDEQucY4mLvKvh2o",
    "parent" : "rAL6YdEeuMCLiiibG",
    "name" : "Inverted Dimmer",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui inverted dimmer\"></div>\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ZRZvJJ6bSycStwXkR",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Types",
    "content" : "<div class=\"ui dropdown\">\n  <div class=\"text\">File</div>\n  <i class=\"dropdown icon\"></i>\n  <div class=\"menu\">\n    <div class=\"item\">New</div>\n    <div class=\"item\">\n      <span class=\"description\">ctrl + o</span>\n      Open...\n    </div>\n    <div class=\"item\">\n      <span class=\"description\">ctrl + s</span>\n      Save as...\n    </div>\n    <div class=\"item\">\n      <span class=\"description\">ctrl + r</span>\n      Rename\n    </div>\n    <div class=\"item\">Make a copy</div>\n    <div class=\"item\">\n      <i class=\"folder icon\"></i>\n      Move to folder\n    </div>\n    <div class=\"item\">\n      <i class=\"trash icon\"></i>\n      Move to trash\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"item\">Download As...</div>\n    <div class=\"item\">\n      <i class=\"dropdown icon\"></i>\n      Publish To Web\n      <div class=\"menu\">\n        <div class=\"item\">Google Docs</div>\n        <div class=\"item\">Google Drive</div>\n        <div class=\"item\">Dropbox</div>\n        <div class=\"item\">Adobe Creative Cloud</div>\n        <div class=\"item\">Private FTP</div>\n        <div class=\"item\">Another Service...</div>\n      </div>\n    </div>\n    <div class=\"item\">E-mail Collaborators</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "QrMucu63YNMwovNz6",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Selection",
    "content" : "<div class=\"ui selection dropdown\">\n  <input type=\"hidden\" name=\"gender\">\n  <i class=\"dropdown icon\"></i>\n  <div class=\"default text\">Gender</div>\n  <div class=\"menu\">\n    <div class=\"item\" data-value=\"1\">Male</div>\n    <div class=\"item\" data-value=\"0\">Female</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "XytNdowDZ4ZzZX3Z9",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Forest",
    "content" : "<select class=\"ui dropdown\">\n  <option value=\"\">Gender</option>\n  <option value=\"1\">Male</option>\n  <option value=\"0\">Female</option>\n</select>",
    "isContainer" : false
}

,
{
    "_id" : "CuqLW388EK2QHMhxD",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Green forest",
    "content" : "<div class=\"ui fluid selection dropdown\">\n  <input type=\"hidden\" name=\"user\">\n  <i class=\"dropdown icon\"></i>\n  <div class=\"default text\">Select Friend</div>\n  <div class=\"menu\">\n    <div class=\"item\" data-value=\"jenny\">\n      <img class=\"ui mini avatar image\" src=\"/images/avatar/small/jenny.jpg\">\n      Jenny Hess\n    </div>\n    <div class=\"item\" data-value=\"elliot\">\n      <img class=\"ui mini avatar image\" src=\"/images/avatar/small/elliot.jpg\">\n      Elliot Fu\n    </div>\n    <div class=\"item\" data-value=\"stevie\">\n      <img class=\"ui mini avatar image\" src=\"/images/avatar/small/stevie.jpg\">\n      Stevie Feliciano\n    </div>\n    <div class=\"item\" data-value=\"christian\">\n      <img class=\"ui mini avatar image\" src=\"/images/avatar/small/christian.jpg\">\n      Christian\n    </div>\n    <div class=\"item\" data-value=\"matt\">\n      <img class=\"ui mini avatar image\" src=\"/images/avatar/small/matt.jpg\">\n      Matt\n    </div>\n    <div class=\"item\" data-value=\"justen\">\n      <img class=\"ui mini avatar image\" src=\"/images/avatar/small/justen.jpg\">\n      Justen Kitsune\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "isT3FYYRMvqC83TJm",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Selection",
    "content" : "<select class=\"ui search dropdown\">\n  <option value=\"\">State</option>\n {{#each data.state}}\n  <option value=\"{{this.[0]}}\">{{this.[1]}}</option>\n{{/each}}\n</select>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "state",
            "value" : "AL:Alabama|AK:Alaska|AZ:Arizona|AR:Arkansas|CA:California|CO:Colorado|CT:Connecticut|DE:Delaware|DC:District Of Columbia|FL:Florida|GA:Georgia|HI:Hawaii|ID:Idaho|IL:Illinois|IN:Indiana|IA:Iowa|KS:Kansas|KY:Kentucky|LA:Louisiana|ME:Maine|MD:Maryland|MA:Massachusetts|MI:Michigan|MN:Minnesota|MS:Mississippi|MO:Missouri|MT:Montana|NE:Nebraska|NV:Nevada|NH:New Hampshire|NJ:New Jersey|NM:New Mexico|NY:New York|NC:North Carolina|ND:North Dakota|OH:Ohio|OK:Oklahoma|OR:Oregon|PA:Pennsylvania|RI:Rhode Island|SC:South Carolina|SD:South Dakota|TN:Tennessee|TX:Texas|UT:Utah|VT:Vermont|VA:Virginia|WA:Washington|WV:West Virginia|WI:Wisconsin|WY:Wyoming"
        }
    ]
}

,
{
    "_id" : "Ws8rKkMPkcDxELmd7",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Multiple Selection",
    "content" : "<select name=\"skills\" multiple=\"\" class=\"ui fluid dropdown\">\n  <option value=\"\">Skills</option>\n<option value=\"angular\">Angular</option>\n<option value=\"css\">CSS</option>\n<option value=\"design\">Graphic Design</option>\n<option value=\"ember\">Ember</option>\n<option value=\"html\">HTML</option>\n<option value=\"ia\">Information Architecture</option>\n<option value=\"javascript\">Javascript</option>\n<option value=\"mech\">Mechanical Engineering</option>\n<option value=\"meteor\">Meteor</option>\n<option value=\"node\">NodeJS</option>\n<option value=\"plumbing\">Plumbing</option>\n<option value=\"python\">Python</option>\n<option value=\"rails\">Rails</option>\n<option value=\"react\">React</option>\n<option value=\"repair\">Kitchen Repair</option>\n<option value=\"ruby\">Ruby</option>\n<option value=\"ui\">UI Design</option>\n<option value=\"ux\">User Experience</option>\n</select>",
    "isContainer" : false
}

,
{
    "_id" : "e2ESYE3bNvsSF2Fsv",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Multiple Search Selection",
    "content" : "<select class=\"ui fluid search dropdown\" multiple=\"\">\n  <option value=\"\">State</option>\n{{#each data.state}}\n  <option value=\"{{this.[0]}}\">{{this.[1]}}</option>\n{{/each}}\n</select>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "state",
            "value" : "AL:Alabama|AK:Alaska|AZ:Arizona|AR:Arkansas|CA:California|CO:Colorado|CT:Connecticut|DE:Delaware|DC:District Of Columbia|FL:Florida|GA:Georgia|HI:Hawaii|ID:Idaho|IL:Illinois|IN:Indiana|IA:Iowa|KS:Kansas|KY:Kentucky|LA:Louisiana|ME:Maine|MD:Maryland|MA:Massachusetts|MI:Michigan|MN:Minnesota|MS:Mississippi|MO:Missouri|MT:Montana|NE:Nebraska|NV:Nevada|NH:New Hampshire|NJ:New Jersey|NM:New Mexico|NY:New York|NC:North Carolina|ND:North Dakota|OH:Ohio|OK:Oklahoma|OR:Oregon|PA:Pennsylvania|RI:Rhode Island|SC:South Carolina|SD:South Dakota|TN:Tennessee|TX:Texas|UT:Utah|VT:Vermont|VA:Virginia|WA:Washington|WV:West Virginia|WI:Wisconsin|WY:Wyoming"
        }
    ]
}

,
{
    "_id" : "a4PySRL26NTgLxpt2",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Search Dropdown",
    "content" : "<div class=\"ui floating dropdown labeled search icon button\">\n  <i class=\"world icon\"></i>\n  <span class=\"text\">Select Language</span>\n  <div class=\"menu\">\n    <div class=\"item\">Arabic</div>\n    <div class=\"item\">Chinese</div>\n    <div class=\"item\">Danish</div>\n    <div class=\"item\">Dutch</div>\n    <div class=\"item\">English</div>\n    <div class=\"item\">French</div>\n    <div class=\"item\">German</div>\n    <div class=\"item\">Greek</div>\n    <div class=\"item\">Hungarian</div>\n    <div class=\"item\">Italian</div>\n    <div class=\"item\">Japanese</div>\n    <div class=\"item\">Korean</div>\n    <div class=\"item\">Lithuanian</div>\n    <div class=\"item\">Persian</div>\n    <div class=\"item\">Polish</div>\n    <div class=\"item\">Portuguese</div>\n    <div class=\"item\">Russian</div>\n    <div class=\"item\">Spanish</div>\n    <div class=\"item\">Swedish</div>\n    <div class=\"item\">Turkish</div>\n    <div class=\"item\">Vietnamese</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "S7oBaQk9Y2wgybfTZ",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Search In-Menu",
    "content" : "<div class=\"ui floating dropdown labeled icon button\">\n  <i class=\"filter icon\"></i>\n  <span class=\"text\">Filter Posts</span>\n  <div class=\"menu\">\n    <div class=\"ui icon search input\">\n      <i class=\"search icon\"></i>\n      <input type=\"text\" placeholder=\"Search tags...\">\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"header\">\n      <i class=\"tags icon\"></i>\n      Tag Label\n    </div>\n    <div class=\"scrolling menu\">\n      <div class=\"item\">\n        <div class=\"ui red empty circular label\"></div>\n        Important\n      </div>\n      <div class=\"item\">\n        <div class=\"ui blue empty circular label\"></div>\n        Announcement\n      </div>\n      <div class=\"item\">\n        <div class=\"ui black empty circular label\"></div>\n        Cannot Fix\n      </div>\n      <div class=\"item\">\n        <div class=\"ui purple empty circular label\"></div>\n        News\n      </div>\n      <div class=\"item\">\n        <div class=\"ui orange empty circular label\"></div>\n        Enhancement\n      </div>\n      <div class=\"item\">\n        <div class=\"ui empty circular label\"></div>\n        Change Declined\n      </div>\n      <div class=\"item\">\n        <div class=\"ui yellow empty circular label\"></div>\n        Off Topic\n      </div>\n      <div class=\"item\">\n        <div class=\"ui pink empty circular label\"></div>\n        Interesting\n      </div>\n      <div class=\"item\">\n        <div class=\"ui green empty circular label\"></div>\n        Discussion\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "h25jkhABwdvvCj8FP",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Filter",
    "content" : "<div class=\"ui multiple dropdown\">\n  <input type=\"hidden\" name=\"filters\">\n  <i class=\"filter icon\"></i>\n  <span class=\"text\">Filter Posts</span>\n  <div class=\"menu\">\n    <div class=\"ui icon search input\">\n      <i class=\"search icon\"></i>\n      <input type=\"text\" placeholder=\"Search tags...\">\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"header\">\n      <i class=\"tags icon\"></i>\n      Tag Label\n    </div>\n    <div class=\"scrolling menu\">\n      <div class=\"item\" data-value=\"important\">\n        <div class=\"ui red empty circular label\"></div>\n        Important\n      </div>\n      <div class=\"item\" data-value=\"announcement\">\n        <div class=\"ui blue empty circular label\"></div>\n        Announcement\n      </div>\n      <div class=\"item\" data-value=\"cannotfix\">\n        <div class=\"ui black empty circular label\"></div>\n        Cannot Fix\n      </div>\n      <div class=\"item\" data-value=\"news\">\n        <div class=\"ui purple empty circular label\"></div>\n        News\n      </div>\n      <div class=\"item\" data-value=\"enhancement\">\n        <div class=\"ui orange empty circular label\"></div>\n        Enhancement\n      </div>\n      <div class=\"item\" data-value=\"off-topic\">\n        <div class=\"ui yellow empty circular label\"></div>\n        Off Topic\n      </div>\n      <div class=\"item\" data-value=\"interesting\">\n        <div class=\"ui pink empty circular label\"></div>\n        Interesting\n      </div>\n      <div class=\"item\" data-value=\"discussion\">\n        <div class=\"ui green empty circular label\"></div>\n        Discussion\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "yBKCzoHK8Zueo4uct",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Inline",
    "content" : "<h4 class=\"ui header\">Inline</h4>\n<p>A dropdown can be formatted to appear inline in other content</p>\n<span>\n  Show me posts by\n  <div class=\"ui inline dropdown\">\n    <div class=\"text\">\n      <img class=\"ui avatar image\" src=\"/images/avatar/small/jenny.jpg\">\n      Jenny Hess\n    </div>\n    <i class=\"dropdown icon\"></i>\n    <div class=\"menu\">\n      <div class=\"item\">\n        <img class=\"ui avatar image\" src=\"/images/avatar/small/jenny.jpg\">\n        Jenny Hess\n      </div>\n      <div class=\"item\">\n        <img class=\"ui avatar image\" src=\"/images/avatar/small/elliot.jpg\">\n        Elliot Fu\n      </div>\n      <div class=\"item\">\n        <img class=\"ui avatar image\" src=\"/images/avatar/small/stevie.jpg\">\n        Stevie Feliciano\n      </div>\n      <div class=\"item\">\n        <img class=\"ui avatar image\" src=\"/images/avatar/small/christian.jpg\">\n        Christian\n      </div>\n      <div class=\"item\">\n        <img class=\"ui avatar image\" src=\"/images/avatar/small/matt.jpg\">\n        Matt\n      </div>\n      <div class=\"item\">\n        <img class=\"ui avatar image\" src=\"/images/avatar/small/justen.jpg\">\n        Justen Kitsune\n      </div>\n    </div>\n  </div>\n</span>",
    "isContainer" : false
}

,
{
    "_id" : "f23rC9dPwjs9QHEus",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Trending",
    "content" : "<h4 class=\"ui header\">\n  <i class=\"trophy icon\"></i>\n  <div class=\"content\">\n    Trending repos\n    <div class=\"ui inline dropdown\">\n      <div class=\"text\">today</div>\n      <i class=\"dropdown icon\"></i>\n      <div class=\"menu\">\n        <div class=\"header\">Adjust time span</div>\n        <div class=\"active item\" data-text=\"today\">Today</div>\n        <div class=\"item\" data-text=\"this week\">This Week</div>\n        <div class=\"item\" data-text=\"this month\">This Month</div>\n      </div>\n    </div>\n  </div>\n</h4>",
    "isContainer" : false
}

,
{
    "_id" : "LkAR6GK5ZmT2MFR9t",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Pointing",
    "content" : "<div class=\"ui menu\">\n  <a class=\"item\">\n    Home\n  </a>\n  <div class=\"ui pointing dropdown link item\">\n    <span class=\"text\">Shopping</span>\n    <i class=\"dropdown icon\"></i>\n    <div class=\"menu\">\n      <div class=\"header\">Categories</div>\n      <div class=\"item\">\n        <i class=\"dropdown icon\"></i>\n        <span class=\"text\">Clothing</span>\n        <div class=\"menu\">\n          <div class=\"header\">Mens</div>\n          <div class=\"item\">Shirts</div>\n          <div class=\"item\">Pants</div>\n          <div class=\"item\">Jeans</div>\n          <div class=\"item\">Shoes</div>\n          <div class=\"divider\"></div>\n          <div class=\"header\">Womens</div>\n          <div class=\"item\">Dresses</div>\n          <div class=\"item\">Shoes</div>\n          <div class=\"item\">Bags</div>\n        </div>\n      </div>\n      <div class=\"item\">Home Goods</div>\n      <div class=\"item\">Bedroom</div>\n      <div class=\"divider\"></div>\n      <div class=\"header\">Order</div>\n      <div class=\"item\">Status</div>\n      <div class=\"item\">Cancellations</div>\n    </div>\n  </div>\n  <a class=\"item\">\n    Forums\n  </a>\n  <a class=\"item\">\n    Contact Us\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Y2XXTWygXNtS5CbKg",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Green",
    "content" : "<div class=\"ui vertical menu\">\n  <a class=\"item\">\n    Home\n  </a>\n  <div class=\"ui left pointing dropdown link item\">\n    <i class=\"dropdown icon\"></i>\n    Messages\n    <div class=\"menu\">\n      <div class=\"item\">Inbox</div>\n      <div class=\"item\">Starred</div>\n      <div class=\"item\">Sent Mail</div>\n      <div class=\"item\">Drafts (143)</div>\n      <div class=\"divider\"></div>\n      <div class=\"item\">Spam (1009)</div>\n      <div class=\"item\">Trash</div>\n    </div>\n  </div>\n  <a class=\"item\">\n    Browse\n  </a>\n  <a class=\"item\">\n    Help\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Z2fS2WH44eabsygAr",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "White",
    "content" : "<div class=\"ui icon top left pointing dropdown button\">\n  <i class=\"wrench icon\"></i>\n  <div class=\"menu\">\n    <div class=\"header\">Display Density</div>\n    <div class=\"item\">Comfortable</div>\n    <div class=\"item\">Cozy</div>\n    <div class=\"item\">Compact</div>\n    <div class=\"ui divider\"></div>\n    <div class=\"item\">Settings</div>\n    <div class=\"item\">\n      <i class=\"dropdown icon\"></i>\n      <span class=\"text\">Upload Settings</span>\n      <div class=\"menu\">\n        <div class=\"item\">\n          <i class=\"check icon\"></i>\n          Convert Uploaded Files to PDF\n        </div>\n        <div class=\"item\">\n          <i class=\"check icon\"></i>\n          Digitize Text from Uploaded Files\n        </div>\n      </div>\n    </div>\n    <div class=\"item\">Manage Apps</div>\n    <div class=\"item\">Keyboard Shortcuts</div>\n    <div class=\"item\">Help</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "7DXikg4qQrNHu7RWt",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "River",
    "content" : "<div class=\"ui icon bottom left pointing dropdown button\">\n  <i class=\"wrench icon\"></i>\n  <div class=\"menu\">\n    <div class=\"item\">\n      <i class=\"dropdown icon\"></i>\n      <span class=\"text\">New</span>\n      <div class=\"menu\">\n        <div class=\"item\">Document</div>\n        <div class=\"item\">Image</div>\n      </div>\n    </div>\n    <div class=\"item\">Save As...</div>\n    <div class=\"item\">Edit</div>\n  </div>\n</div>\n<div class=\"ui icon bottom right pointing dropdown button\">\n  <i class=\"wrench icon\"></i>\n  <div class=\"menu\">\n    <div class=\"item\">\n      <i class=\"dropdown icon\"></i>\n      <span class=\"text\">New</span>\n      <div class=\"menu\">\n        <div class=\"item\">Document</div>\n        <div class=\"item\">Image</div>\n      </div>\n    </div>\n    <div class=\"item\">Save As...</div>\n    <div class=\"item\">Edit</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "pCyxBsktKsM5tgwYs",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Earth",
    "content" : "<div class=\"ui labeled icon top right pointing dropdown button\">\n  <i class=\"filter icon\"></i>\n  <span class=\"text\">Filter Posts</span>\n  <div class=\"menu\">\n    <div class=\"ui search icon input\">\n      <i class=\"search icon\"></i>\n      <input type=\"text\" name=\"search\" placeholder=\"Search issues...\">\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"header\">\n      <i class=\"tags icon\"></i>\n      Filter by tag\n    </div>\n    <div class=\"item\">\n      <div class=\"ui red empty circular label\"></div>\n      Important\n    </div>\n    <div class=\"item\">\n      <div class=\"ui blue empty circular label\"></div>\n      Announcement\n    </div>\n    <div class=\"item\">\n      <div class=\"ui black empty circular label\"></div>\n      Discussion\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"header\">\n      <i class=\"calendar icon\"></i>\n      Filter by date\n    </div>\n    <div class=\"item\">\n      <i class=\"olive circle icon\"></i>\n      This Week\n    </div>\n    <div class=\"item\">\n      <i class=\"violet circle icon\"></i>\n      This Month\n    </div>\n    <div class=\"item\">\n      <i class=\"orange circle icon\"></i>\n      This Year\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Rr2J2erKx4jYbMhR8",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Iron",
    "content" : "<div class=\"ui right pointing dropdown icon button\">\n  <i class=\"settings icon\"></i>\n  <div class=\"menu\">\n    <div class=\"ui left search icon input\">\n      <i class=\"search icon\"></i>\n      <input type=\"text\" name=\"search\" placeholder=\"Search issues...\">\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"header\">\n      <i class=\"tags icon\"></i>\n      Filter by tag\n    </div>\n    <div class=\"item\">\n      <div class=\"ui red empty circular label\"></div>\n      Important\n    </div>\n    <div class=\"item\">\n      <div class=\"ui blue empty circular label\"></div>\n      Announcement\n    </div>\n    <div class=\"item\">\n      <div class=\"ui black empty circular label\"></div>\n      Discussion\n    </div>\n  </div>\n</div>\n<div class=\"ui left pointing dropdown icon button\">\n  <i class=\"settings icon\"></i>\n  <div class=\"menu\">\n    <div class=\"ui left search icon input\">\n      <i class=\"search icon\"></i>\n      <input type=\"text\" name=\"search\" placeholder=\"Search issues...\">\n    </div>\n    <div class=\"header\">\n      <i class=\"tags icon\"></i>\n      Tag Label\n    </div>\n    <div class=\"item\">\n      <div class=\"ui red empty circular label\"></div>\n      Important\n    </div>\n    <div class=\"item\">\n      <div class=\"ui blue empty circular label\"></div>\n      Announcement\n    </div>\n    <div class=\"item\">\n      <div class=\"ui black empty circular label\"></div>\n      Discussion\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ReoZDdBmk425oYopv",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Floating",
    "content" : "<div class=\"ui teal buttons\">\n  <div class=\"ui button\">Save</div>\n  <div class=\"ui floating dropdown icon button\">\n    <i class=\"dropdown icon\"></i>\n    <div class=\"menu\">\n      <div class=\"item\"><i class=\"edit icon\"></i> Edit Post</div>\n      <div class=\"item\"><i class=\"delete icon\"></i> Remove Post</div>\n      <div class=\"item\"><i class=\"hide icon\"></i> Hide Post</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "BxY2QJARpcWSpAzGY",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Simple",
    "content" : "<div class=\"ui compact menu\">\n  <div class=\"ui simple dropdown item\">\n    Dropdown\n    <i class=\"dropdown icon\"></i>\n    <div class=\"menu\">\n      <div class=\"item\">Choice 1</div>\n      <div class=\"item\">Choice 2</div>\n      <div class=\"item\">Choice 3</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "C8Qurxiy8zpjJfitt",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Header",
    "content" : "<div class=\"ui floating labeled icon dropdown button\">\n  <i class=\"filter icon\"></i>\n  <span class=\"text\">Filter</span>\n  <div class=\"menu\">\n    <div class=\"header\">\n      <i class=\"tags icon\"></i>\n      Filter by tag\n    </div>\n    <div class=\"item\">\n      Important\n    </div>\n    <div class=\"item\">\n      Announcement\n    </div>\n    <div class=\"item\">\n      Discussion\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "uztAHCTtZ4EmdXSjt",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Divider",
    "content" : "<div class=\"ui floating labeled icon dropdown button\">\n  <i class=\"filter icon\"></i>\n  <span class=\"text\">Filter</span>\n  <div class=\"menu\">\n    <div class=\"header\">\n      <i class=\"tags icon\"></i>\n      Filter by tag\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"item\">\n      Important\n    </div>\n    <div class=\"item\">\n      Announcement\n    </div>\n    <div class=\"item\">\n      Discussion\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "rf5CKvA9jFPp7exE5",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Icon",
    "content" : "<div class=\"ui floating labeled icon dropdown button\">\n  <i class=\"filter icon\"></i>\n  <span class=\"text\">Filter</span>\n  <div class=\"menu\">\n    <div class=\"header\">\n      <i class=\"tags icon\"></i>\n      Filter by tag\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"item\">\n      <i class=\"attention icon\"></i>\n      Important\n    </div>\n    <div class=\"item\">\n      <i class=\"comment icon\"></i>\n      Announcement\n    </div>\n    <div class=\"item\">\n      <i class=\"conversation icon\"></i>\n      Discussion\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "3xBEmfhsg8NJhcazA",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Description",
    "content" : "<div class=\"ui floating labeled icon dropdown button\">\n  <i class=\"filter icon\"></i>\n  <span class=\"text\">Filter Tags</span>\n  <div class=\"menu\">\n    <div class=\"header\">\n      Filter by tag\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"item\">\n      <span class=\"description\">2 new</span>\n      <span class=\"text\">Important</span>\n    </div>\n    <div class=\"item\">\n      <span class=\"description\">10 new</span>\n      <span class=\"text\">Hopper</span>\n    </div>\n    <div class=\"item\">\n      <span class=\"description\">5 new</span>\n      <span class=\"text\">Discussion</span>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "DF5uKk9pWd5mRNopd",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Label",
    "content" : "<div class=\"ui floating labeled icon dropdown button\">\n  <i class=\"filter icon\"></i>\n  <span class=\"text\">Filter</span>\n  <div class=\"menu\">\n    <div class=\"header\">\n      Search Issues\n    </div>\n    <div class=\"ui left icon input\">\n      <i class=\"search icon\"></i>\n      <input type=\"text\" name=\"search\" placeholder=\"Search...\">\n    </div>\n    <div class=\"header\">\n      <i class=\"tags icon\"></i>\n      Filter by tag\n    </div>\n    <div class=\"item\">\n      <div class=\"ui red empty circular label\"></div>\n      Important\n    </div>\n    <div class=\"item\">\n      <div class=\"ui blue empty circular label\"></div>\n      Announcement\n    </div>\n    <div class=\"item\">\n      <div class=\"ui black empty circular label\"></div>\n      Discussion\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "eSyPtgqCoDkYpgXAT",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Message",
    "content" : "<div class=\"ui floating labeled icon dropdown button\">\n  <i class=\"filter icon\"></i>\n  <span class=\"text\">Login</span>\n  <div class=\"menu\">\n    <div class=\"ui error message\">\n      <div class=\"header\">Error</div>\n      <p>You must log-in to see all categories</p>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "SJaTEocSNmWds5mhH",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Floated Content",
    "content" : "<div class=\"ui fluid selection dropdown\">\n  <i class=\"dropdown icon\"></i>\n  <span class=\"default text\">Select Type</span>\n  <div class=\"menu\">\n    <div class=\"item\">\n      <i class=\"attention right floated icon\"></i>\n      Important\n    </div>\n    <div class=\"item\">\n      <i class=\"comment right floated icon\"></i>\n      Announcement\n    </div>\n    <div class=\"item\">\n      <i class=\"conversation right floated icon\"></i>\n      Discussion\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "k9kca6aohZmZqTsyq",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Input",
    "content" : "<div class=\"ui floating labeled icon dropdown button\">\n  <i class=\"filter icon\"></i>\n  <span class=\"text\">Filter</span>\n  <div class=\"menu\">\n    <div class=\"header\">\n      Search Issues\n    </div>\n    <div class=\"ui left icon input\">\n      <i class=\"search icon\"></i>\n      <input type=\"text\" name=\"search\" placeholder=\"Search...\">\n    </div>\n    <div class=\"header\">\n      <i class=\"tags icon\"></i>\n      Filter by tag\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"item\">\n      <div class=\"ui red empty circular label\"></div>\n      Important\n    </div>\n    <div class=\"item\">\n      <div class=\"ui blue empty circular label\"></div>\n      Announcement\n    </div>\n    <div class=\"item\">\n      <div class=\"ui black empty circular label\"></div>\n      Discussion\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "foXJbcGQ8uzbyDmp9",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Image",
    "content" : "<div class=\"ui floating labeled icon dropdown button\">\n  <i class=\"add user icon\"></i>\n  <span class=\"text\">Add User</span>\n  <div class=\"menu\">\n    <div class=\"header\">\n      People You Might Know\n    </div>\n    <div class=\"item\">\n      <img class=\"ui avatar image\" src=\"/images/avatar/small/jenny.jpg\">\n      Jenny Hess\n    </div>\n    <div class=\"item\">\n      <img class=\"ui avatar image\" src=\"/images/avatar/small/elliot.jpg\">\n      Elliot Fu\n    </div>\n    <div class=\"item\">\n      <img class=\"ui avatar image\" src=\"/images/avatar/small/stevie.jpg\">\n      Stevie Feliciano\n    </div>\n    <div class=\"header\">\n      Your Friends' Friends\n    </div>\n    <div class=\"item\">\n      <img class=\"ui avatar image\" src=\"/images/avatar/small/christian.jpg\">\n      Christian\n    </div>\n    <div class=\"item\">\n      <img class=\"ui avatar image\" src=\"/images/avatar/small/matt.jpg\">\n      Matt\n    </div>\n    <div class=\"item\">\n      <img class=\"ui avatar image\" src=\"/images/avatar/small/justen.jpg\">\n      Justen Kitsune\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "4fP6BwZvMgSLMLuja",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Loading",
    "content" : "<div class=\"ui loading dropdown\">\n  Dropdown <i class=\"dropdown icon\"></i>\n  <div class=\"menu\">\n    <div class=\"item\">Choice 1</div>\n    <div class=\"item\">Choice 2</div>\n    <div class=\"item\">Choice 3</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "AknyFiCaRZxwDQDNr",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Flower",
    "content" : "<div class=\"ui loading fluid multiple search selection dropdown\">\n  <input type=\"hidden\" name=\"country\" value=\"kp\">\n  <i class=\"dropdown icon\"></i>\n  <input class=\"search\">\n  <div class=\"default text\">Search...</div>\n  <div class=\"menu\">\n    <div class=\"item\">Choice 1</div>\n    <div class=\"item\">Choice 2</div>\n    <div class=\"item\">Choice 3</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "rTJWGhnhjFhTPCDRz",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Cloud",
    "content" : "<div class=\"ui loading selection dropdown\">\n  Dropdown <i class=\"dropdown icon\"></i>\n  <div class=\"menu\">\n    <div class=\"item\">Choice 1</div>\n    <div class=\"item\">Choice 2</div>\n    <div class=\"item\">Choice 3</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "c64QtgBF4P8AXiMGS",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Error",
    "content" : "<div class=\"ui floating dropdown error\">\n  Dropdown <i class=\"dropdown icon\"></i>\n  <div class=\"menu\">\n    <div class=\"item\">Choice 1</div>\n    <div class=\"item\">Choice 2</div>\n    <div class=\"item\">Choice 3</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "S3cc3iFpAjpMH7NWd",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Green grass",
    "content" : "<div class=\"ui selection dropdown error\">\n  Dropdown <i class=\"dropdown icon\"></i>\n  <div class=\"menu\">\n    <div class=\"item\">Choice 1</div>\n    <div class=\"item\">Choice 2</div>\n    <div class=\"item\">Choice 3</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "tQsjrjR86kZtwfdKj",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Active",
    "content" : "<div class=\"ui simple active dropdown\">\n  Dropdown <i class=\"dropdown icon\"></i>\n  <div class=\"menu\">\n    <div class=\"item\">Choice 1</div>\n    <div class=\"item\">Choice 2</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "fWbiatC4dMJCy5RfC",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Disabled",
    "content" : "<div class=\"ui disabled dropdown\">\n  Dropdown <i class=\"dropdown icon\"></i>\n  <div class=\"menu\">\n    <div class=\"item\">Choice 1</div>\n    <div class=\"item\">Choice 2</div>\n    <div class=\"item\">Choice 3</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "xSbJwNHMBW68LAPHN",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Stars",
    "content" : "<div class=\"ui dropdown\">\n  Disabled Item <i class=\"dropdown icon\"></i>\n  <div class=\"menu\">\n    <div class=\"item\">Choice 1</div>\n    <div class=\"disabled item\">Disabled</div>\n    <div class=\"item\">Choice 3</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "8SxGBRx8wFKCKGuq6",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Scrolling",
    "content" : "<div class=\"ui scrolling dropdown\">\n  <input type=\"hidden\" name=\"gender\">\n  <div class=\"default text\">Select choice</div>\n  <i class=\"dropdown icon\"></i>\n  <div class=\"menu\">\n    <div class=\"item\">Choice 1</div>\n    <div class=\"item\">Choice 2</div>\n    <div class=\"item\">Choice 3</div>\n    <div class=\"item\">Choice 4</div>\n    <div class=\"item\">Choice 5</div>\n    <div class=\"item\">Choice 6</div>\n    <div class=\"item\">Choice 7</div>\n    <div class=\"item\">Choice 8</div>\n    <div class=\"item\">Choice 9</div>\n    <div class=\"item\">Choice 10</div>\n    <div class=\"item\">Choice 11</div>\n    <div class=\"item\">Choice 12</div>\n    <div class=\"item\">Choice 13</div>\n    <div class=\"item\">Choice 14</div>\n    <div class=\"item\">Choice 15</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "nbJ6hLPTDZ4DYX2jL",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Ocean",
    "content" : "<div class=\"ui dropdown\">\n  <i class=\"filter icon\"></i>\n  <span class=\"text\">Filter Posts</span>\n  <div class=\"menu\">\n    <div class=\"ui icon search input\">\n      <i class=\"search icon\"></i>\n      <input type=\"text\" placeholder=\"Search tags...\">\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"header\">\n      <i class=\"tags icon\"></i>\n      Tag Label\n    </div>\n    <div class=\"scrolling menu\">\n      <div class=\"item\">\n        <div class=\"ui red empty circular label\"></div>\n        Important\n      </div>\n      <div class=\"item\">\n        <div class=\"ui blue empty circular label\"></div>\n        Announcement\n      </div>\n      <div class=\"item\">\n        <div class=\"ui black empty circular label\"></div>\n        Cannot Fix\n      </div>\n      <div class=\"item\">\n        <div class=\"ui purple empty circular label\"></div>\n        News\n      </div>\n      <div class=\"item\">\n        <div class=\"ui orange empty circular label\"></div>\n        Enhancement\n      </div>\n      <div class=\"item\">\n        <div class=\"ui empty circular label\"></div>\n        Change Declined\n      </div>\n      <div class=\"item\">\n        <div class=\"ui yellow empty circular label\"></div>\n        Off Topic\n      </div>\n      <div class=\"item\">\n        <div class=\"ui pink empty circular label\"></div>\n        Interesting\n      </div>\n      <div class=\"item\">\n        <div class=\"ui green empty circular label\"></div>\n        Discussion\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "54YgpLdDW3rwm5fo2",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Compact",
    "content" : "<div class=\"ui compact selection dropdown\">\n  <i class=\"dropdown icon\"></i>\n  <div class=\"text\">Compact</div>\n  <div class=\"menu\">\n    <div class=\"item\">A</div>\n    <div class=\"item\">B</div>\n    <div class=\"item\">C</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "nSLoLFRiKXkfMft9S",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Fluid",
    "content" : "<div class=\"ui vertical menu\">\n  <a class=\"item\">Link 1</a>\n  <a class=\"item\">Link 2</a>\n  <div class=\"header item\">All Sections</div>\n  <div class=\"ui item\">\n    <div class=\"ui fluid selection dropdown\">\n      <div class=\"text\">More</div>\n      <i class=\"dropdown icon\"></i>\n      <div class=\"menu\">\n        <div class=\"item\">Choice 1</div>\n        <div class=\"item\">Choice 2</div>\n        <div class=\"item\">Choice 3</div>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "EFk444MjPj6XSEnNw",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Menu Direction",
    "content" : "<div class=\"ui floating labeled icon dropdown button\">\n  <i class=\"dropdown icon\"></i>\n  <span class=\"text\">Menu</span>\n  <div class=\"menu\">\n    <div class=\"item\">\n      <i class=\"left dropdown icon\"></i>\n      <span class=\"text\">Left</span>\n      <div class=\"left menu\">\n        <div class=\"item\">1</div>\n        <div class=\"item\">2</div>\n        <div class=\"item\">3</div>\n      </div>\n    </div>\n    <div class=\"item\">\n      <i class=\"dropdown icon\"></i>\n      <span class=\"text\">Right</span>\n      <div class=\"right menu\">\n        <div class=\"item\">1</div>\n        <div class=\"item\">2</div>\n        <div class=\"item\">3</div>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "T68kmcfmawWFvgXxL",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Soul",
    "content" : "<div class=\"ui floating labeled icon dropdown button\">\n  <i class=\"dropdown icon\"></i>\n  <span class=\"text\">Menu</span>\n  <div class=\"left menu\">\n    <div class=\"item\">\n      <i class=\"dropdown icon\"></i>\n      <span class=\"text\">Left</span>\n      <div class=\"menu\">\n        <div class=\"item\">\n          <i class=\"dropdown icon\"></i>\n          <span class=\"text\">Still Left</span>\n          <div class=\"menu\">\n            <div class=\"item\">1</div>\n            <div class=\"item\">2</div>\n            <div class=\"item\">3</div>\n          </div>\n        </div>\n        <div class=\"item\">2</div>\n        <div class=\"item\">3</div>\n      </div>\n    </div>\n    <div class=\"item\">\n      <i class=\"dropdown icon\"></i>\n      <span class=\"text\">Left 2</span>\n      <div class=\"menu\">\n        <div class=\"item\">1</div>\n        <div class=\"item\">2</div>\n        <div class=\"item\">3</div>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "yvC5cFea5EkQEcKRT",
    "parent" : "NYH8BDhF7sWRZxoes",
    "name" : "Types",
    "content" : "<div class=\"ui modal\">\n  <i class=\"close icon\"></i>\n  <div class=\"header\">\n    Profile Picture\n  </div>\n  <div class=\"image content\">\n    <div class=\"ui medium image\">\n      <img src=\"/images/avatar/large/chris.jpg\">\n    </div>\n    <div class=\"description\">\n      <div class=\"ui header\">We've auto-chosen a profile image for you.</div>\n      <p>We've grabbed the following image from the <a href=\"https://www.gravatar.com\" target=\"_blank\">gravatar</a> image associated with your registered e-mail address.</p>\n      <p>Is it okay to use this photo?</p>\n    </div>\n  </div>\n  <div class=\"actions\">\n    <div class=\"ui black deny button\">\n      Nope\n    </div>\n    <div class=\"ui positive right labeled icon button\">\n      Yep, that's me\n      <i class=\"checkmark icon\"></i>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "QzA46uM66nwLvvKdg",
    "parent" : "NYH8BDhF7sWRZxoes",
    "name" : "Header",
    "content" : "<div class=\"ui modal\">\n  <div class=\"header\">Header</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "mWMdmzGHRzpN5oXnz",
    "parent" : "NYH8BDhF7sWRZxoes",
    "name" : "Content",
    "content" : "<div class=\"ui modal\">\n  <div class=\"header\">Header</div>\n  <div class=\"content\">\n    <p></p>\n    <p></p>\n    <p></p>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ns8frEkkA62DpZBRA",
    "parent" : "NYH8BDhF7sWRZxoes",
    "name" : "Image Content",
    "content" : "<div class=\"ui modal\">\n  <div class=\"header\">Header</div>\n  <div class=\"image content\">\n      <img class=\"image\">\n      <div class=\"description\">\n      <p></p>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "wsKKBzgiSLwyTH9mR",
    "parent" : "NYH8BDhF7sWRZxoes",
    "name" : "Actions",
    "content" : "<div class=\"ui modal\">\n  <div class=\"header\">Header</div>\n  <div class=\"content\">\n    <p></p>\n  </div>\n  <div class=\"actions\">\n    <div class=\"ui approve button\">Approve</div>\n    <div class=\"ui button\">Neutral</div>\n    <div class=\"ui cancel button\">Cancel</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "H4qCoHGKHyxA4WSED",
    "parent" : "NYH8BDhF7sWRZxoes",
    "name" : "Active",
    "content" : "<div class=\"ui active modal\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "xLjenzmyFZC4niFHx",
    "parent" : "6xFAMsnQwzXfwiw6v",
    "name" : "Content",
    "content" : "<div class=\"ui icon button\" data-content=\"Add users to your feed\">\n  <i class=\"add icon\"></i>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "tKJn8dPf9xT9Fu3mB",
    "parent" : "6xFAMsnQwzXfwiw6v",
    "name" : "Title",
    "content" : "<img src=\"/images/avatar/small/elliot.jpg\" data-title=\"Elliot Fu\" data-content=\"Elliot has been a member since July 2012\" class=\"ui avatar image\">\n<img src=\"/images/avatar/small/stevie.jpg\" data-title=\"Stevie Feliciano\" data-content=\"Stevie has been a member since August 2013\" class=\"ui avatar image\">\n<img src=\"/images/avatar/small/matt.jpg\" data-title=\"Matt\" data-content=\"Matt has been a member since July 2014\" class=\"ui avatar image\">",
    "isContainer" : false
}

,
{
    "_id" : "oa3QASaZgP8kmn7va",
    "parent" : "6xFAMsnQwzXfwiw6v",
    "name" : "HTML",
    "content" : "<div class=\"ui card\" data-html=\"<div class='header'>User Rating</div><div class='content'><div class='ui star rating'><i class='active icon'></i><i class='active icon'></i><i class='active icon'></i><i class='icon'></i><i class='icon'></i></div></div>\">\n  <div class=\"image\">\n    <img src=\"/images/movies/totoro-horizontal.jpg\">\n  </div>\n  <div class=\"content\">\n    <div class=\"header\">My Neighbor Totoro</div>\n    <div class=\"description\">\n      Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits.\n    </div>\n  </div>\n  <div class=\"ui two bottom attached buttons\">\n    <div class=\"ui button\">\n      <i class=\"add icon\"></i>\n      Queue\n    </div>\n    <div class=\"ui primary button\">\n      <i class=\"play icon\"></i>\n      Watch\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "BKy75BMN6cBqiauWL",
    "parent" : "6xFAMsnQwzXfwiw6v",
    "name" : "Pre-Existing",
    "content" : "<div class=\"ui card\">\n  <div class=\"image\">\n    <img src=\"/images/movies/watchmen-horizontal.jpg\">\n  </div>\n  <div class=\"content\">\n    <div class=\"header\">Watchmen</div>\n    <div class=\"description\">\n      In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a government crackdown, but after one of the masked veterans is brutally murdered an investigation into the killer is initiated.\n    </div>\n  </div>\n  <div class=\"ui two bottom attached buttons\">\n    <div class=\"ui button\">\n      <i class=\"add icon\"></i>\n      Queue\n    </div>\n    <div class=\"ui primary button\">\n      <i class=\"play icon\"></i>\n      Watch\n    </div>\n  </div>\n</div>\n<div class=\"ui popup\">\n  <div class=\"header\">User Rating</div>\n  <div class=\"ui star rating\" data-rating=\"3\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "4c7jhbSnMByx3tmMf",
    "parent" : "6xFAMsnQwzXfwiw6v",
    "name" : "Basic",
    "content" : "<div class=\"ui icon button\" data-content=\"The default theme's basic popup removes the pointing arrow.\" data-variation=\"basic\">\n  <i class=\"add icon\"></i>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Bdiocsx6joQDoKQ5o",
    "parent" : "6xFAMsnQwzXfwiw6v",
    "name" : "Width",
    "content" : "<i class=\"circular heart icon link\" data-content=\"Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide.\" data-variation=\"wide\"></i>\n<i class=\"circular heart icon link\" data-content=\"Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide.\" data-variation=\"very wide\"></i>",
    "isContainer" : false
}

,
{
    "_id" : "9td4YnpfCvrTfEujN",
    "parent" : "6xFAMsnQwzXfwiw6v",
    "name" : "Fluid",
    "content" : "<div class=\"ui button\">Show fluid popup</div>\n<div class=\"ui fluid popup\">\n  <div class=\"ui four column divided center aligned grid\">\n    <div class=\"column\">1</div>\n    <div class=\"column\">2</div>\n    <div class=\"column\">3</div>\n    <div class=\"column\">4</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "qPA7krpKus4T3MAXP",
    "parent" : "6xFAMsnQwzXfwiw6v",
    "name" : "Size",
    "content" : "<i class=\"circular heart icon link\" data-content=\"Hello. This is a mini popup\" data-variation=\"mini\"></i>\n<i class=\"circular heart icon link\" data-content=\"Hello. This is a tiny popup\" data-variation=\"tiny\"></i>\n<i class=\"circular heart icon link\" data-content=\"Hello. This is a small popup\" data-variation=\"small\"></i>\n<i class=\"circular heart icon link\" data-content=\"Hello. This is a large popup\" data-variation=\"large\"></i>\n<i class=\"circular heart icon link\" data-content=\"Hello. This is a huge popup\" data-variation=\"huge\"></i>",
    "isContainer" : false
}

,
{
    "_id" : "NWW2QgvADJKC3ggGb",
    "parent" : "6xFAMsnQwzXfwiw6v",
    "name" : "Flowing",
    "content" : "<div class=\"ui button\">Show flowing popup</div>\n<div class=\"ui flowing popup top left transition hidden\">\n  <div class=\"ui three column divided center aligned grid\">\n    <div class=\"column\">\n      <h4 class=\"ui header\">Basic Plan</h4>\n      <p><b>2</b> projects, $10 a month</p>\n      <div class=\"ui button\">Choose</div>\n    </div>\n    <div class=\"column\">\n      <h4 class=\"ui header\">Business Plan</h4>\n      <p><b>5</b> projects, $20 a month</p>\n      <div class=\"ui button\">Choose</div>\n    </div>\n    <div class=\"column\">\n      <h4 class=\"ui header\">Premium Plan</h4>\n      <p><b>8</b> projects, $25 a month</p>\n      <div class=\"ui button\">Choose</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "J8vghpEXizEthuvMM",
    "parent" : "6xFAMsnQwzXfwiw6v",
    "name" : "Inverted",
    "content" : "<i class=\"circular heart icon link\" data-content=\"Hello. This is an inverted popup\" data-variation=\"inverted\"></i>",
    "isContainer" : false
}

,
{
    "_id" : "PcrjdoY73bGomKA9s",
    "parent" : "QwXSwyBKCjm484Bu4",
    "name" : "Types",
    "content" : "<div class=\"ui progress\" data-percent=\"13\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 13%;\">\n    <div class=\"progress\">13%</div>\n  </div>\n  <div class=\"label\">Uploading Files</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Hfta92FsEdAuKYvJr",
    "parent" : "QwXSwyBKCjm484Bu4",
    "name" : "Indicating",
    "content" : "<div class=\"ui indicating progress active\" data-percent=\"50\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 50%;\"></div>\n  <div class=\"label\">50% Funded</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "3FT47D3qoC9X35bx6",
    "parent" : "QwXSwyBKCjm484Bu4",
    "name" : "Bar",
    "content" : "<div class=\"ui progress\" data-percent=\"59\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 59%;\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "pYek4Bs485gvMo5s8",
    "parent" : "QwXSwyBKCjm484Bu4",
    "name" : "Progress",
    "content" : "<div class=\"ui progress\" data-percent=\"53\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 53%;\">\n    <div class=\"progress\">53%</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "C2xkM98zzmG98zAux",
    "parent" : "QwXSwyBKCjm484Bu4",
    "name" : "Label",
    "content" : "<div class=\"ui progress\" data-percent=\"48\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 48%;\">\n    <div class=\"progress\">48%</div>\n  </div>\n  <div class=\"label\">Uploading Files</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "oYSrH6TcBThgG3E4S",
    "parent" : "QwXSwyBKCjm484Bu4",
    "name" : "Active",
    "content" : "<div class=\"ui active progress\" data-percent=\"7\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 7%;\">\n    <div class=\"progress\">7%</div>\n  </div>\n  <div class=\"label\">Uploading Files</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "u5KnTkDjpZTavGhQW",
    "parent" : "QwXSwyBKCjm484Bu4",
    "name" : "Success",
    "content" : "<div class=\"ui progress success\" data-percent=\"100\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 100%;\">\n    <div class=\"progress\">100%</div>\n  </div>\n  <div class=\"label\">Everything worked, your file is all ready.</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ygGnQamHJBubXvfP4",
    "parent" : "QwXSwyBKCjm484Bu4",
    "name" : "Warning",
    "content" : "<div class=\"ui progress warning\" data-percent=\"100\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 100%;\">\n    <div class=\"progress\">100%</div>\n  </div>\n  <div class=\"label\">Your file didn't meet the minimum resolution requirements.</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "R5Qs6dfo6mfMuLoi7",
    "parent" : "QwXSwyBKCjm484Bu4",
    "name" : "Error",
    "content" : "<div class=\"ui progress error\" data-percent=\"100\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 100%;\">\n    <div class=\"progress\">100%</div>\n  </div>\n  <div class=\"label\">There was an error.</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "xvaD8NpMJKnWepmXT",
    "parent" : "QwXSwyBKCjm484Bu4",
    "name" : "Disabled",
    "content" : "<div class=\"ui disabled progress\" data-percent=\"10\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 10%;\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ph5NEDrWEhYS5ygbR",
    "parent" : "QwXSwyBKCjm484Bu4",
    "name" : "Inverted",
    "content" : "<div class=\"ui inverted segment\">\n  <div class=\"ui inverted progress\" data-percent=\"17\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 17%;\">\n      <div class=\"progress\">17%</div>\n    </div>\n    <div class=\"label\">Uploading Files</div>\n  </div>\n  <div class=\"ui inverted progress success\" data-percent=\"100\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 100%;\">\n      <div class=\"progress\">100%</div>\n    </div>\n    <div class=\"label\">Success</div>\n  </div>\n  <div class=\"ui inverted progress warning\" data-percent=\"100\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 100%;\">\n      <div class=\"progress\">100%</div>\n    </div>\n    <div class=\"label\">Warning</div>\n  </div>\n  <div class=\"ui inverted progress error\" data-percent=\"100\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 100%;\">\n      <div class=\"progress\">100%</div>\n    </div>\n    <div class=\"label\">Error</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "msjGnHb9KvCaNuwnR",
    "parent" : "QwXSwyBKCjm484Bu4",
    "name" : "Attached",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui top attached progress\" data-percent=\"22\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 22%;\"></div>\n  </div>\n  <p>La la la la</p>\n  <div class=\"ui bottom attached progress\" data-percent=\"61\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 61%;\"></div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "JB7Qw9jeGPXmsSHC3",
    "parent" : "QwXSwyBKCjm484Bu4",
    "name" : "Project",
    "content" : "<div class=\"ui card\">\n  <div class=\"image\">\n    <img src=\"/images/wireframe/image.png\">\n  </div>\n  <div class=\"content\">\n    <a class=\"header\">Project</a>\n    <div class=\"meta\">\n      <span class=\"date\">Started in 2014</span>\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <a>\n      <i class=\"user icon\"></i>\n      22 Friends\n    </a>\n  </div>\n  <div class=\"ui bottom attached progress\" data-percent=\"40\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 40%;\"></div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "s8NGqLhz9vd5DFA6q",
    "parent" : "QwXSwyBKCjm484Bu4",
    "name" : "Size",
    "content" : "<div class=\"ui tiny progress\" data-percent=\"39\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 39%;\"></div>\n  <div class=\"label\">Tiny</div>\n</div>\n<div class=\"ui small progress\" data-percent=\"24\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 24%;\"></div>\n  <div class=\"label\">Small</div>\n</div>\n<div class=\"ui progress\" data-percent=\"53\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 53%;\"></div>\n  <div class=\"label\">Standard</div>\n</div>\n<div class=\"ui large progress\" data-percent=\"53\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 53%;\"></div>\n  <div class=\"label\">Large</div>\n</div>\n<div class=\"ui big progress\" data-percent=\"14\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 14%;\"></div>\n  <div class=\"label\">Big</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "9ACqvTtonFzz5kPXw",
    "parent" : "QwXSwyBKCjm484Bu4",
    "name" : "Color",
    "content" : "<div class=\"ui red progress\" data-percent=\"42\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 42%;\"></div>\n</div>\n<div class=\"ui orange progress\" data-percent=\"34\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 34%;\"></div>\n</div>\n<div class=\"ui yellow progress\" data-percent=\"55\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 55%;\"></div>\n</div>\n<div class=\"ui olive progress\" data-percent=\"9\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 9%;\"></div>\n</div>\n<div class=\"ui green progress\" data-percent=\"48\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 48%;\"></div>\n</div>\n<div class=\"ui teal progress\" data-percent=\"11\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 11%;\"></div>\n</div>\n<div class=\"ui blue progress\" data-percent=\"23\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 23%;\"></div>\n</div>\n<div class=\"ui violet progress\" data-percent=\"43\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 43%;\"></div>\n</div>\n<div class=\"ui purple progress\" data-percent=\"64\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 64%;\"></div>\n</div>\n<div class=\"ui pink progress\" data-percent=\"56\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 56%;\"></div>\n</div>\n<div class=\"ui brown progress\" data-percent=\"48\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 48%;\"></div>\n</div>\n<div class=\"ui grey progress\" data-percent=\"54\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 54%;\"></div>\n</div>\n<div class=\"ui black progress\" data-percent=\"15\">\n  <div class=\"bar\" style=\"transition-duration: 300ms; width: 15%;\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "WqQ9TyBqkefJQdAJH",
    "parent" : "QwXSwyBKCjm484Bu4",
    "name" : "Inverted Color",
    "content" : "<div class=\"ui inverted segment\">\n  <div class=\"ui red inverted progress\" data-percent=\"37\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 37%;\">\n      <div class=\"progress\">37%</div>\n    </div>\n  </div>\n  <div class=\"ui orange inverted progress\" data-percent=\"38\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 38%;\">\n      <div class=\"progress\">38%</div>\n    </div>\n  </div>\n  <div class=\"ui yellow inverted progress\" data-percent=\"42\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 42%;\">\n      <div class=\"progress\">42%</div>\n    </div>\n  </div>\n  <div class=\"ui olive inverted progress\" data-percent=\"27\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 27%;\">\n      <div class=\"progress\">27%</div>\n    </div>\n  </div>\n  <div class=\"ui green inverted progress\" data-percent=\"22\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 22%;\">\n      <div class=\"progress\">22%</div>\n    </div>\n  </div>\n  <div class=\"ui teal inverted progress\" data-percent=\"32\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 32%;\">\n      <div class=\"progress\">32%</div>\n    </div>\n  </div>\n  <div class=\"ui blue inverted progress\" data-percent=\"24\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 24%;\">\n      <div class=\"progress\">24%</div>\n    </div>\n  </div>\n  <div class=\"ui violet inverted progress\" data-percent=\"46\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 46%;\">\n      <div class=\"progress\">46%</div>\n    </div>\n  </div>\n  <div class=\"ui purple inverted progress\" data-percent=\"33\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 33%;\">\n      <div class=\"progress\">33%</div>\n    </div>\n  </div>\n  <div class=\"ui pink inverted progress\" data-percent=\"21\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 21%;\">\n      <div class=\"progress\">21%</div>\n    </div>\n  </div>\n  <div class=\"ui brown inverted progress\" data-percent=\"39\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 39%;\">\n      <div class=\"progress\">39%</div>\n    </div>\n  </div>\n  <div class=\"ui grey inverted progress\" data-percent=\"55\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 55%;\">\n      <div class=\"progress\">55%</div>\n    </div>\n  </div>\n  <div class=\"ui black inverted progress\" data-percent=\"48\">\n    <div class=\"bar\" style=\"transition-duration: 300ms; width: 48%;\">\n      <div class=\"progress\">48%</div>\n    </div>\n  </div>\n  <div class=\"ignored\">\n    <div class=\"ui icon buttons\">\n      <div class=\"decrement ui basic inverted red button\"><i class=\"minus icon\"></i></div>\n      <div class=\"increment ui basic inverted green button\"><i class=\"plus icon\"></i></div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Xbr27Zxo8W2TkZWJN",
    "parent" : "oGRqvtYgutNgCGaWs",
    "name" : "Types",
    "content" : "<div class=\"ui rating\" data-max-rating=\"1\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "XMuNhHnrJKLwKMQPz",
    "parent" : "oGRqvtYgutNgCGaWs",
    "name" : "Star",
    "content" : "<div class=\"ui star rating\" data-rating=\"3\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "xuHNP5CSkuwL2ZayC",
    "parent" : "oGRqvtYgutNgCGaWs",
    "name" : "Heart",
    "content" : "<div class=\"ui heart rating\" data-rating=\"1\" data-max-rating=\"3\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "wvWrBSSkcoQJSCWdY",
    "parent" : "oGRqvtYgutNgCGaWs",
    "name" : "Variations",
    "content" : "<div class=\"ui mini star rating\"></div>\n<div class=\"ui tiny star rating\"></div>\n<div class=\"ui small star rating\"></div>\n<div class=\"ui star rating\"></div>\n<div class=\"ui large star rating\"></div>\n<div class=\"ui huge star rating\"></div>\n<div class=\"ui massive star rating\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "mHwpmNLj2X8FRxHZL",
    "parent" : "YabxrGXPEfQnmYneM",
    "name" : "Types",
    "content" : "<div class=\"ui search\">\n  <input class=\"prompt\" type=\"text\" placeholder=\"Common passwords...\">\n  <div class=\"results\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "3yZf8DYgW47bqHKpQ",
    "parent" : "YabxrGXPEfQnmYneM",
    "name" : "Sky",
    "content" : "<div class=\"ui search\">\n  <div class=\"ui icon input\">\n    <input class=\"prompt\" type=\"text\" placeholder=\"Common passwords...\">\n    <i class=\"search icon\"></i>\n  </div>\n  <div class=\"results\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "8RGqE8RKZ87CfvCsR",
    "parent" : "YabxrGXPEfQnmYneM",
    "name" : "Category",
    "content" : "<div class=\"ui category search\">\n  <div class=\"ui icon input\">\n    <input class=\"prompt\" type=\"text\" placeholder=\"Search animals...\">\n    <i class=\"search icon\"></i>\n  </div>\n  <div class=\"results\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "DbMT9A8qddFwLzPdh",
    "parent" : "YabxrGXPEfQnmYneM",
    "name" : "Local Search",
    "content" : "<div class=\"ui search\">\n  <div class=\"ui icon input\">\n    <input class=\"prompt\" type=\"text\" placeholder=\"Search countries...\">\n    <i class=\"search icon\"></i>\n  </div>\n  <div class=\"results\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "xurpcS6Lgeryb3XhS",
    "parent" : "YabxrGXPEfQnmYneM",
    "name" : "Loading",
    "content" : "<div class=\"ui loading search\">\n  <div class=\"ui icon input\">\n    <input class=\"prompt\" type=\"text\" placeholder=\"Search...\">\n    <i class=\"search icon\"></i>\n  </div>\n  <div class=\"results\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "oEiTHKCXcK9jhkzmC",
    "parent" : "YabxrGXPEfQnmYneM",
    "name" : "Fluid",
    "content" : "<div class=\"ui fluid category search\">\n  <div class=\"ui icon input\">\n    <input class=\"prompt\" type=\"text\" placeholder=\"Search animals...\">\n    <i class=\"search icon\"></i>\n  </div>\n  <div class=\"results\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "CerWKXvKwoGruy2Yj",
    "parent" : "YabxrGXPEfQnmYneM",
    "name" : "Aligned",
    "content" : "<div class=\"ui right aligned category search\">\n  <div class=\"ui icon input\">\n    <input class=\"prompt\" type=\"text\" placeholder=\"Search animals...\">\n    <i class=\"search icon\"></i>\n  </div>\n  <div class=\"results\"></div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "kYBkty6pXnejzTqdj",
    "parent" : "nfRghQLQW89rFcp8R",
    "name" : "Types",
    "content" : "<div class=\"ui people shape\">\n  <div class=\"sides\">\n    <div class=\"active side\">\n      <div class=\"ui card\">\n        <div class=\"image\">\n          <img src=\"/images/avatar/large/steve.jpg\">\n        </div>\n        <div class=\"content\">\n          <div class=\"header\">Steve Jobes</div>\n          <div class=\"meta\">\n            <a>Acquaintances</a>\n          </div>\n          <div class=\"description\">\n            Steve Jobes is a fictional character designed to resemble someone familiar to readers.\n          </div>\n        </div>\n        <div class=\"extra content\">\n          <span class=\"right floated\">\n            Joined in 2014\n          </span>\n          <span>\n            <i class=\"user icon\"></i>\n            151 Friends\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"side\">\n      <div class=\"ui card\">\n        <div class=\"image\">\n          <img src=\"/images/avatar/large/stevie.jpg\">\n        </div>\n        <div class=\"content\">\n          <a class=\"header\">Stevie Feliciano</a>\n          <div class=\"meta\">\n            <span class=\"date\">Joined in 2014</span>\n          </div>\n          <div class=\"description\">\n            Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.\n          </div>\n        </div>\n        <div class=\"extra content\">\n          <a>\n            <i class=\"user icon\"></i>\n            22 Friends\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "kR3ifqvuzZaWAxyAy",
    "parent" : "nfRghQLQW89rFcp8R",
    "name" : "Cube",
    "content" : "<div class=\"ui cube shape\">\n  <div class=\"sides\">\n    <div class=\"active side\">\n      <div class=\"content\">\n        <div class=\"center\">\n          1\n        </div>\n      </div>\n    </div>\n    <div class=\"side\">\n      <div class=\"content\">\n        <div class=\"center\">\n          2\n        </div>\n      </div>\n    </div>\n    <div class=\"side\">\n      <div class=\"content\">\n        <div class=\"center\">\n          3\n        </div>\n      </div>\n    </div>\n    <div class=\"side\">\n      <div class=\"content\">\n        <div class=\"center\">\n          4\n        </div>\n      </div>\n    </div>\n    <div class=\"side\">\n      <div class=\"content\">\n        <div class=\"center\">\n          5\n        </div>\n      </div>\n    </div>\n    <div class=\"side\">\n      <div class=\"content\">\n        <div class=\"center\">\n          6\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "y4vRf428vdHca9Nne",
    "parent" : "nfRghQLQW89rFcp8R",
    "name" : "Text",
    "content" : "<div class=\"ui text shape\">\n  <div class=\"sides\">\n    <div class=\"active ui header side\">Did you know? This side starts visible.</div>\n    <div class=\"ui header side\">Help, its another side!</div>\n    <div class=\"ui header side\">This is the last side</div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Bd9NRmhLhMA64ZshL",
    "parent" : "nfvJRyLFaSsL5uhvf",
    "name" : "Types",
    "content" : "<body>\n  <div class=\"ui sidebar inverted vertical menu\">\n    <a class=\"item\">\n      1\n    </a>\n    <a class=\"item\">\n      2\n    </a>\n    <a class=\"item\">\n      3\n    </a>\n  </div>\n  <div class=\"pusher\">\n    <!-- Site content !-->\n  </div>\n</body>",
    "isContainer" : false
}

,
{
    "_id" : "87E3REz9A7zSRKGKD",
    "parent" : "nfvJRyLFaSsL5uhvf",
    "name" : "Spirit",
    "content" : "<div class=\"ui left demo vertical inverted sidebar labeled icon menu\">\n  <a class=\"item\">\n    <i class=\"home icon\"></i>\n    Home\n  </a>\n  <a class=\"item\">\n    <i class=\"block layout icon\"></i>\n    Topics\n  </a>\n  <a class=\"item\">\n    <i class=\"smile icon\"></i>\n    Friends\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "s56FZfK3eXhxPCbZK",
    "parent" : "nfvJRyLFaSsL5uhvf",
    "name" : "Visible",
    "content" : "<div class=\"ui visible sidebar\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "w7TxsD3yXaGRCozxL",
    "parent" : "nfvJRyLFaSsL5uhvf",
    "name" : "Dimmed",
    "content" : "<div class=\"dimmed pusher\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "zR5Z8yzReuxA8Tvud",
    "parent" : "nfvJRyLFaSsL5uhvf",
    "name" : "Direction",
    "content" : "<div class=\"ui top sidebar\"></div>\n<div class=\"ui right sidebar\"></div>\n<div class=\"ui bottom sidebar\"></div>\n<div class=\"ui left sidebar\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "8QEoWLGghc4pPkkzL",
    "parent" : "nfvJRyLFaSsL5uhvf",
    "name" : "Width",
    "content" : "<div class=\"ui thin sidebar\"></div>\n<div class=\"ui very thin sidebar\"></div>\n<div class=\"ui sidebar\"></div>\n<div class=\"ui wide sidebar\"></div>\n<div class=\"ui very wide sidebar\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "ZyC5zArFQ7W7styxs",
    "parent" : "3iuNLCDYG8CzEbfb8",
    "name" : "Sticking to Adjacent Context",
    "content" : "<div class=\"ui segment\" id=\"example1\">\n  <div class=\"left ui rail\">\n    <p></p>\n    <p></p>\n    <p></p>\n    <div class=\"ui sticky\" style=\"width: 272px; height: 262px;\">\n      <h3 class=\"ui header\">Stuck Content</h3>\n      <img>\n    </div>\n  </div>\n  <div class=\"right ui rail\">\n    <div class=\"ui sticky\" style=\"width: 272px; height: 263px;\">\n      <h3 class=\"ui header\">Stuck Content</h3>\n      <img>\n    </div>\n  </div>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Jn7qK52QKpNnr9pk9",
    "parent" : "3iuNLCDYG8CzEbfb8",
    "name" : "Pushing",
    "content" : "<div class=\"ui segment\" id=\"example2\">\n  <div class=\"left ui rail\">\n    <div class=\"ui sticky\" style=\"width: 272px; height: 263px;\">\n      <h3 class=\"ui header\">Stuck Content</h3>\n      <img>\n    </div>\n  </div>\n  <div class=\"right ui rail\">\n    <p></p>\n    <p></p>\n    <p></p>\n    <div class=\"ui sticky\" style=\"width: 272px; height: 262px;\">\n      <h3 class=\"ui header\">Stuck Content</h3>\n      <img>\n    </div>\n  </div>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "xRaq5kZzh5LRh8PmR",
    "parent" : "3iuNLCDYG8CzEbfb8",
    "name" : "Oversized Content",
    "content" : "<div class=\"ui segment\" id=\"example3\">\n  <div class=\"left ui rail\">\n    <div class=\"ui sticky\" style=\"width: 272px; height: 1250px;\">\n      <h3 class=\"ui header\">Long Stuck Content</h3>\n      <div class=\"ui divided items\">\n        <div class=\"item\">\n          <div class=\"ui tiny image\">\n            <img src=\"/images/wireframe/image.png\">\n          </div>\n          <div class=\"middle aligned content\">\n            <a class=\"header\">Followup Article</a>\n            <div class=\"meta\">\n              <span class=\"author\">By <a>Author</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <div class=\"ui tiny image\">\n            <img src=\"/images/wireframe/image.png\">\n          </div>\n          <div class=\"middle aligned content\">\n            <a class=\"header\">Followup Article</a>\n            <div class=\"meta\">\n              <span class=\"author\">By <a>Author</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <div class=\"ui tiny image\">\n            <img src=\"/images/wireframe/image.png\">\n          </div>\n          <div class=\"middle aligned content\">\n            <a class=\"header\">Followup Article</a>\n            <div class=\"meta\">\n              <span class=\"author\">By <a>Author</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <div class=\"ui tiny image\">\n            <img src=\"/images/wireframe/image.png\">\n          </div>\n          <div class=\"middle aligned content\">\n            <a class=\"header\">Followup Article</a>\n            <div class=\"meta\">\n              <span class=\"author\">By <a>Author</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <div class=\"ui tiny image\">\n            <img src=\"/images/wireframe/image.png\">\n          </div>\n          <div class=\"middle aligned content\">\n            <a class=\"header\">Followup Article</a>\n            <div class=\"meta\">\n              <span class=\"author\">By <a>Author</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <div class=\"ui tiny image\">\n            <img src=\"/images/wireframe/image.png\">\n          </div>\n          <div class=\"middle aligned content\">\n            <a class=\"header\">Followup Article</a>\n            <div class=\"meta\">\n              <span class=\"author\">By <a>Author</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <div class=\"ui tiny image\">\n            <img src=\"/images/wireframe/image.png\">\n          </div>\n          <div class=\"middle aligned content\">\n            <a class=\"header\">Followup Article</a>\n            <div class=\"meta\">\n              <span class=\"author\">By <a>Author</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <div class=\"ui tiny image\">\n            <img src=\"/images/wireframe/image.png\">\n          </div>\n          <div class=\"middle aligned content\">\n            <a class=\"header\">Followup Article</a>\n            <div class=\"meta\">\n              <span class=\"author\">By <a>Author</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <div class=\"ui tiny image\">\n            <img src=\"/images/wireframe/image.png\">\n          </div>\n          <div class=\"middle aligned content\">\n            <a class=\"header\">Followup Article</a>\n            <div class=\"meta\">\n              <span class=\"author\">By <a>Author</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <div class=\"ui tiny image\">\n            <img src=\"/images/wireframe/image.png\">\n          </div>\n          <div class=\"middle aligned content\">\n            <a class=\"header\">Followup Article</a>\n            <div class=\"meta\">\n              <span class=\"author\">By <a>Author</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <div class=\"ui tiny image\">\n            <img src=\"/images/wireframe/image.png\">\n          </div>\n          <div class=\"middle aligned content\">\n            <a class=\"header\">Followup Article</a>\n            <div class=\"meta\">\n              <span class=\"author\">By <a>Author</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <div class=\"ui tiny image\">\n            <img src=\"/images/wireframe/image.png\">\n          </div>\n          <div class=\"middle aligned content\">\n            <a class=\"header\">Followup Article</a>\n            <div class=\"meta\">\n              <span class=\"author\">By <a>Author</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <div class=\"ui tiny image\">\n            <img src=\"/images/wireframe/image.png\">\n          </div>\n          <div class=\"middle aligned content\">\n            <a class=\"header\">Followup Article</a>\n            <div class=\"meta\">\n              <span class=\"author\">By <a>Author</a></span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"right ui rail\">\n    <div class=\"ui sticky\" style=\"width: 272px; height: 263px;\">\n      <h3 class=\"ui header\">Short Stuck Content</h3>\n      <img>\n    </div>\n  </div>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "G78xBxd5Q5dHHrt6R",
    "parent" : "3iuNLCDYG8CzEbfb8",
    "name" : "Sticking to Own Context",
    "content" : "<div class=\"ui segment\">\n  <div class=\"ui sticky\" style=\"width: 670px; height: 43px;\">\n    <div class=\"ui fluid three item tabular menu\">\n      <a class=\"active item\">Tab 1</a>\n      <a class=\"item\">Tab 2</a>\n      <a class=\"item\">Tab 3</a>\n    </div>\n  </div>\n  <div class=\"ui active tab\">\n    <p></p>\n    <p></p>\n    <p></p>\n    <p></p>\n    <p></p>\n    <p></p>\n    <p></p>\n    <p></p>\n    <p></p>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "WMvWqJsuorrfKv29w",
    "parent" : "7CuoEL5bh9KC4zGaN",
    "name" : "A basic tab",
    "content" : "<div class=\"ui top attached tabular menu\">\n  <div class=\"item\">Tab</div>\n</div>\n<div class=\"ui bottom attached tab segment\">\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ShdXGMSpxJNp3Beoh",
    "parent" : "7CuoEL5bh9KC4zGaN",
    "name" : "Active",
    "content" : "<div class=\"ui top attached tabular menu\">\n  <div class=\"active item\">Tab</div>\n</div>\n<div class=\"ui bottom attached active tab segment\">\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "9fygnfkbScDPHGrSw",
    "parent" : "7CuoEL5bh9KC4zGaN",
    "name" : "Loading",
    "content" : "<div class=\"ui top attached tabular menu\">\n  <div class=\"active item\">Tab</div>\n</div>\n<div class=\"ui bottom attached loading tab segment\">\n  <p></p>\n  <p></p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "fk76Lwqx4HoMQLLjP",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "Image Link",
    "content" : "<a href=\"{{data.url}}\" class=\"ui medium image\">\n  <img src=\"{{data.image}}\">\n</a>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "url",
            "value" : "http://google.com"
        }, 
        {
            "name" : "image",
            "value" : "/images/wireframe/image-text.png"
        }
    ]
}

,
{
    "_id" : "xRME9QykJ7PCHK2Mu",
    "parent" : "oDoscxjqgevL5vq6i",
    "name" : "With legend",
    "content" : "<h4 class=\"ui horizontal divider header\">\n  <i class=\"{{data.icon}} icon\"></i>\n{{data.text}}\n</h4>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "icon",
            "value" : "bar chart",
            "choices" : "alarm|alarm slash|alarm outline|alarm slash outline|at|browser|bug|calendar outline|calendar|cloud|code|comment|comments|comment outline|comments outline|copyright|dashboard|dropdown|external square|external|eyedropper|feed|find|heartbeat|history|home|idea|inbox|lab|mail|mail outline|mail square|map|options|paint brush|payment|phone|phone square|privacy|protect|search|setting|settings|shop|sidebar|signal|sitemap|tag|tags|tasks|terminal|text telephone|ticket|trophy|wifi|desktop|disk outline|file archive outline|file audio outline|file code outline|file excel outline|file|file image outline|file outline|file pdf outline|file powerpoint outline|file text|file text outline|file video outline|file word outline|folder|folder open|folder open outline|folder outline|game|keyboard|laptop|level down|level up|mobile|power|plug|tablet|trash|trash outline|adjust|add user|add to cart|archive|ban|bookmark|call|call square|cloud download|cloud upload|compress|configure|download|edit|erase|exchange|external share|expand|filter|flag|flag outline|forward mail|hide|in cart|lock|pin|print|random|recycle|refresh|remove bookmark|remove user|repeat|reply all|reply|retweet|send|send outline|share alternate|share alternate square|share|share square|sign in|sign out|theme|translate|undo|unhide|unlock alternate|unlock|upload|wait|wizard|write|write square|announcement|birthday|help|help circle|info|info circle|warning|warning circle|warning sign|child|doctor|handicap|spy|student|user|users|female|gay|heterosexual|intergender|lesbian|male|man|neuter|non binary transgender|transgender|other gender|other gender horizontal|other gender vertical|woman|grid layout|list layout|block layout|zoom|zoom out|resize vertical|resize horizontal|maximize|crop|anchor|bar|bomb|book|bullseye|calculator|checkered flag|cocktail|diamond|fax|fire extinguisher|fire|gift|leaf|legal|lemon|life ring|lightning|magnet|money|moon|plane|puzzle|rain|road|rocket|shipping|soccer|suitcase|sun|travel|treatment|world|asterisk|certificate|circle|circle notched|circle thin|crosshairs|cube|cubes|ellipsis horizontal|ellipsis vertical|quote left|quote right|spinner|square|square outline|add square|check circle|check circle outline|check square|checkmark box|checkmark|minus circle|minus|minus square|minus square outline|move|plus|plus square outline|radio|remove circle|remove circle outline|remove|selected radio|toggle off|toggle on|area chart|bar chart|camera retro|newspaper|film|line chart|photo|pie chart|sound|angle double down|angle double left|angle double right|angle double up|angle down|angle left|angle right|angle up|arrow circle down|arrow circle left|arrow circle outline down|arrow circle outline left|arrow circle outline right|arrow circle outline up|arrow circle right|arrow circle up|arrow down|arrow left|arrow right|arrow up|caret down|caret left|caret right|caret up|chevron circle down|chevron circle left|chevron circle right|chevron circle up|chevron down|chevron left|chevron right|chevron up|long arrow down|long arrow left|long arrow right|long arrow up|pointing down|pointing left|pointing right|pointing up|toggle down|toggle left|toggle right|toggle up|barcode|css3|database|fork|html5|openid|qrcode|rss|rss square|server|empty heart|empty star|frown|heart|meh|smile|star half empty|star half|star|thumbs down|thumbs outline down|thumbs outline up|thumbs up|backward|eject|fast backward|fast forward|forward|music|mute|pause|play|record|step backward|step forward|stop|unmute|video play|video play outline|volume down|volume off|volume up|building|building outline|car|coffee|emergency|first aid|food|h|hospital|location arrow|marker|military|paw|space shuttle|spoon|taxi|tree|university|columns|sort alphabet ascending|sort alphabet descending|sort ascending|sort content ascending|sort content descending|sort descending|sort|sort numeric ascending|sort numeric descending|table|align center|align justify|align left|align right|attach|bold|copy|cut|font|header|indent|italic|linkify|list|ordered list|outdent|paragraph|paste|save|strikethrough|subscript|superscript|text height|text width|underline|unlink|unordered list|dollar|euro|lira|pound|ruble|rupee|won|shekel|yen|american express|discover|google wallet|mastercard|paypal card|paypal|stripe|visa|adn|android|angellist|apple|behance|behance square|bitbucket|bitbucket square|bitcoin|buysellads|codepen|connectdevelop|dashcube|delicious|deviantart|digg|dribbble|dropbox|drupal|empire|facebook|facebook square|flickr|forumbee|foursquare|git|git square|github alternate|github|github square|gittip|google|google plus|google plus square|hacker news|instagram|ioxhost|joomla|jsfiddle|lastfm|lastfm square|leanpub|linkedin|linkedin square|linux|maxcdn|meanpath|medium|pagelines|pied piper alternate|pied piper|pinterest|pinterest square|qq|rebel|reddit|reddit square|renren|sellsy|shirtsinbulk|simplybuilt|skyatlas|skype|slack|slideshare|soundcloud|spotify|stack exchange|stack overflow|steam|steam square|stumbleupon circle|stumbleupon|tencent weibo|trello|tumblr|tumblr square|twitch|twitter|twitter square|viacoin|vimeo|vine|vk|wechat|weibo|whatsapp|windows|wordpress|xing|xing square|yahoo|yelp|youtube|youtube play|youtube square"
        }, 
        {
            "name" : "text",
            "value" : "Specifications"
        }
    ]
}

,
{
    "_id" : "WoohGxYBob3KNGN8h",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "Image rounded",
    "content" : "<img class=\"ui medium rounded image\" src=\"{{data_image}}\">",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "image",
            "value" : "/images/wireframe/square-image.png"
        }
    ]
}

,
{
    "_id" : "QxhzWvRt9NgAFDDEP",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "Image disabled",
    "content" : "<img class=\"disabled medium ui image\" src=\"{{data.image}}\">",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "image",
            "value" : "/images/wireframe/image.png"
        }
    ]
}

,
{
    "_id" : "NfHdRcMMy8LQQcPAG",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "Image avatar",
    "content" : "<img class=\"ui avatar image\" src=\"{{data.image}}\">\n<span>{{data.text}}</span>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "image",
            "value" : "/images/wireframe/square-image.png"
        }, 
        {
            "name" : "text",
            "value" : "Username"
        }
    ]
}

,
{
    "_id" : "fSJNNZbDkcrEtGnp8",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Shipping information",
    "content" : "<form class=\"ui form\">\n  <h4 class=\"ui dividing header\">Shipping Information</h4>\n  <div class=\"field\">\n    <label>Name</label>\n    <div class=\"two fields\">\n      <div class=\"field\">\n        <input type=\"text\" name=\"shipping[first-name]\" placeholder=\"First Name\">\n      </div>\n      <div class=\"field\">\n        <input type=\"text\" name=\"shipping[last-name]\" placeholder=\"Last Name\">\n      </div>\n    </div>\n  </div>\n  <div class=\"field\">\n    <label>Billing Address</label>\n    <div class=\"fields\">\n      <div class=\"twelve wide field\">\n        <input type=\"text\" name=\"shipping[address]\" placeholder=\"Street Address\">\n      </div>\n      <div class=\"four wide field\">\n        <input type=\"text\" name=\"shipping[address-2]\" placeholder=\"Apt #\">\n      </div>\n    </div>\n  </div>\n  <div class=\"two fields\">\n    <div class=\"field\">\n      <label>State</label>\n      <select class=\"ui fluid dropdown\">\n        <option value=\"\">State</option>\n{{#each data.state}}\n    <option value=\"{{this.[0]}}\">{{this.[1]}}</option>\n    {{/each}}\n      </select>\n    </div>\n    <div class=\"field\">\n      <label>Country</label>\n      <div class=\"ui fluid search selection dropdown\">\n        <input type=\"hidden\" name=\"country\">\n        <i class=\"dropdown icon\"></i>\n        <div class=\"default text\">Select Country</div>\n        <div class=\"menu\">\n{{#each data.country}}\n    <div class=\"item\" data-value=\"{{this.[0]}}\"><i class=\"{{this.[0]}} flag\"></i>{{this.[1]}}</div>\n{{/each}}\n  </div>\n      </div>\n    </div>\n  </div>\n  <h4 class=\"ui dividing header\">Billing Information</h4>\n  <div class=\"field\">\n    <label>Card Type</label>\n    <div class=\"ui selection dropdown\">\n      <input type=\"hidden\" name=\"card[type]\">\n      <div class=\"default text\">Type</div>\n      <i class=\"dropdown icon\"></i>\n      <div class=\"menu\">\n        <div class=\"item\" data-value=\"visa\">\n          <i class=\"visa icon\"></i>\n          Visa\n        </div>\n        <div class=\"item\" data-value=\"amex\">\n          <i class=\"amex icon\"></i>\n          American Express\n        </div>\n        <div class=\"item\" data-value=\"discover\">\n          <i class=\"discover icon\"></i>\n          Discover\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"fields\">\n    <div class=\"seven wide field\">\n      <label>Card Number</label>\n      <input type=\"text\" name=\"card[number]\" maxlength=\"16\" placeholder=\"Card #\">\n    </div>\n    <div class=\"three wide field\">\n      <label>CVC</label>\n      <input type=\"text\" name=\"card[cvc]\" maxlength=\"3\" placeholder=\"CVC\">\n    </div>\n    <div class=\"six wide field\">\n      <label>Expiration</label>\n      <div class=\"two fields\">\n        <div class=\"field\">\n          <select class=\"ui fluid search dropdown\" name=\"card[expire-month]\">\n            <option value=\"\">Month</option>\n            <option value=\"1\">January</option>\n            <option value=\"2\">February</option>\n            <option value=\"3\">March</option>\n            <option value=\"4\">April</option>\n            <option value=\"5\">May</option>\n            <option value=\"6\">June</option>\n            <option value=\"7\">July</option>\n            <option value=\"8\">August</option>\n            <option value=\"9\">September</option>\n            <option value=\"10\">October</option>\n            <option value=\"11\">November</option>\n            <option value=\"12\">December</option>\n          </select>\n        </div>\n        <div class=\"field\">\n          <input type=\"text\" name=\"card[expire-year]\" maxlength=\"4\" placeholder=\"Year\">\n        </div>\n      </div>\n    </div>\n  </div>\n   <h4 class=\"ui dividing header\">Receipt</h4>\n   <div class=\"field\">\n    <label>Send Receipt To:</label>\n    <div class=\"ui fluid multiple search selection dropdown\">\n      <input type=\"hidden\" name=\"receipt\">\n      <i class=\"dropdown icon\"></i>\n      <div class=\"default text\">Saved Contacts</div>\n      <div class=\"menu\">\n        <div class=\"item\" data-value=\"jenny\" data-text=\"Jenny\">\n          <img class=\"ui mini avatar image\" src=\"/images/avatar/small/jenny.jpg\">\n          Jenny Hess\n        </div>\n        <div class=\"item\" data-value=\"elliot\" data-text=\"Elliot\">\n          <img class=\"ui mini avatar image\" src=\"/images/avatar/small/elliot.jpg\">\n          Elliot Fu\n        </div>\n        <div class=\"item\" data-value=\"stevie\" data-text=\"Stevie\">\n          <img class=\"ui mini avatar image\" src=\"/images/avatar/small/stevie.jpg\">\n          Stevie Feliciano\n        </div>\n        <div class=\"item\" data-value=\"christian\" data-text=\"Christian\">\n          <img class=\"ui mini avatar image\" src=\"/images/avatar/small/christian.jpg\">\n          Christian\n        </div>\n        <div class=\"item\" data-value=\"matt\" data-text=\"Matt\">\n          <img class=\"ui mini avatar image\" src=\"/images/avatar/small/matt.jpg\">\n          Matt\n        </div>\n        <div class=\"item\" data-value=\"justen\" data-text=\"Justen\">\n          <img class=\"ui mini avatar image\" src=\"/images/avatar/small/justen.jpg\">\n          Justen Kitsune\n        </div>\n      </div>\n    </div>\n  </div>\n   <div class=\"ui segment\">\n    <div class=\"field\">\n      <div class=\"ui toggle checkbox\">\n        <input type=\"checkbox\" name=\"gift\" tabindex=\"0\" class=\"hidden\">\n        <label>Do not include a receipt in the package</label>\n      </div>\n    </div>\n  </div>\n  <div class=\"ui button\" tabindex=\"0\">Submit Order</div>\n</form>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "state",
            "value" : "AL:Alabama|AK:Alaska|AZ:Arizona|AR:Arkansas|CA:California|CO:Colorado|CT:Connecticut|DE:Delaware|DC:District Of Columbia|FL:Florida|GA:Georgia|HI:Hawaii|ID:Idaho|IL:Illinois|IN:Indiana|IA:Iowa|KS:Kansas|KY:Kentucky|LA:Louisiana|ME:Maine|MD:Maryland|MA:Massachusetts|MI:Michigan|MN:Minnesota|MS:Mississippi|MO:Missouri|MT:Montana|NE:Nebraska|NV:Nevada|NH:New Hampshire|NJ:New Jersey|NM:New Mexico|NY:New York|NC:North Carolina|ND:North Dakota|OH:Ohio|OK:Oklahoma|OR:Oregon|PA:Pennsylvania|RI:Rhode Island|SC:South Carolina|SD:South Dakota|TN:Tennessee|TX:Texas|UT:Utah|VT:Vermont|VA:Virginia|WA:Washington|WV:West Virginia|WI:Wisconsin|WY:Wyoming"
        }, 
        {
            "name" : "country",
            "value" : "af:Afghanistan|ax:Aland Islands|al:Albania|dz:Algeria|as:American Samoa|ad:Andorra|ao:Angola|ai:Anguilla|ag:Antigua|ar:Argentina|am:Armenia|aw:Aruba|au:Australia|at:Austria|az:Azerbaijan|bs:Bahamas|bh:Bahrain|bd:Bangladesh|bb:Barbados|by:Belarus|be:Belgium|bz:Belize|bj:Benin|bm:Bermuda|bt:Bhutan|bo:Bolivia|ba:Bosnia|bw:Botswana|bv:Bouvet Island|br:Brazil|vg:British Virgin Islands|bn:Brunei|bg:Bulgaria|bf:Burkina Faso|ar:Burma|bi:Burundi|tc:Caicos Islands|kh:Cambodia|cm:Cameroon|ca:Canada|cv:Cape Verde|ky:Cayman Islands|cf:Central African Republic|td:Chad|cl:Chile|cn:China|cx:Christmas Island|cc:Cocos Islands|co:Colombia|km:Comoros|cg:Congo Brazzaville|cd:Congo|ck:Cook Islands|cr:Costa Rica|ci:Cote Divoire|hr:Croatia|cu:Cuba|cy:Cyprus|cz:Czech Republic|dk:Denmark|dj:Djibouti|dm:Dominica|do:Dominican Republic|ec:Ecuador|eg:Egypt|sv:El Salvador|gb:England|gq:Equatorial Guinea|er:Eritrea|ee:Estonia|et:Ethiopia|eu:European Union|fk:Falkland Islands|fo:Faroe Islands|fj:Fiji|fi:Finland|fr:France|gf:French Guiana|pf:French Polynesia|tf:French Territories|ga:Gabon|gm:Gambia|ge:Georgia|de:Germany|gh:Ghana|gi:Gibraltar|gr:Greece|gl:Greenland|gd:Grenada|gp:Guadeloupe|gu:Guam|gt:Guatemala|gw:Guinea-Bissau|gn:Guinea|gy:Guyana|ht:Haiti|hm:Heard Island|hn:Honduras|hk:Hong Kong|hu:Hungary|is:Iceland|in:India|io:Indian Ocean Territory|id:Indonesia|ir:Iran|iq:Iraq|ie:Ireland|il:Israel|it:Italy|jm:Jamaica|jp:Japan|jo:Jordan|kz:Kazakhstan|ke:Kenya|ki:Kiribati|kw:Kuwait|kg:Kyrgyzstan|la:Laos|lv:Latvia|lb:Lebanon|ls:Lesotho|lr:Liberia|ly:Libya|li:Liechtenstein|lt:Lithuania|lu:Luxembourg|mo:Macau|mk:Macedonia|mg:Madagascar|mw:Malawi|my:Malaysia|mv:Maldives|ml:Mali|mt:Malta|mh:Marshall Islands|mq:Martinique|mr:Mauritania|mu:Mauritius|yt:Mayotte|mx:Mexico|fm:Micronesia|md:Moldova|mc:Monaco|mn:Mongolia|me:Montenegro|ms:Montserrat|ma:Morocco|mz:Mozambique|na:Namibia|nr:Nauru|np:Nepal|an:Netherlands Antilles|nl:Netherlands|nc:New Caledonia|pg:New Guinea|nz:New Zealand|ni:Nicaragua|ne:Niger|ng:Nigeria|nu:Niue|nf:Norfolk Island|kp:North Korea|mp:Northern Mariana Islands|no:Norway|om:Oman|pk:Pakistan|pw:Palau|ps:Palestine|pa:Panama|py:Paraguay|pe:Peru|ph:Philippines|pn:Pitcairn Islands|pl:Poland|pt:Portugal|pr:Puerto Rico|qa:Qatar|re:Reunion|ro:Romania|ru:Russia|rw:Rwanda|sh:Saint Helena|kn:Saint Kitts and Nevis|lc:Saint Lucia|pm:Saint Pierre|vc:Saint Vincent|ws:Samoa|sm:San Marino|gs:Sandwich Islands|st:Sao Tome|sa:Saudi Arabia|sn:Senegal|cs:Serbia|rs:Serbia|sc:Seychelles|sl:Sierra Leone|sg:Singapore|sk:Slovakia|si:Slovenia|sb:Solomon Islands|so:Somalia|za:South Africa|kr:South Korea|es:Spain|lk:Sri Lanka|sd:Sudan|sr:Suriname|sj:Svalbard|sz:Swaziland|se:Sweden|ch:Switzerland|sy:Syria|tw:Taiwan|tj:Tajikistan|tz:Tanzania|th:Thailand|tl:Timorleste|tg:Togo|tk:Tokelau|to:Tonga|tt:Trinidad|tn:Tunisia|tr:Turkey|tm:Turkmenistan|tv:Tuvalu|ug:Uganda|ua:Ukraine|ae:United Arab Emirates|us:United States|uy:Uruguay|um:Us Minor Islands|vi:Us Virgin Islands|uz:Uzbekistan|vu:Vanuatu|va:Vatican City|ve:Venezuela|vn:Vietnam|wf:Wallis and Futuna|eh:Western Sahara|ye:Yemen|zm:Zambia|zw:Zimbabwe"
        }
    ]
}

,
{
    "_id" : "BfwKPNvBx9MykQMwT",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Country",
    "content" : "<div class=\"ui form\">\n  <div class=\"field\">\n    <label>Country</label>\n    <select class=\"ui search dropdown\">\n      <option value=\"\">Select Country</option>\n{{#each data.country}}\n      <option value=\"{{this.[0]}}\">{{this.[1]}}</option>\n{{/each}}\n    </select>\n  </div>\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "country",
            "value" : "af:Afghanistan|ax:Aland Islands|al:Albania|dz:Algeria|as:American Samoa|ad:Andorra|ao:Angola|ai:Anguilla|ag:Antigua|ar:Argentina|am:Armenia|aw:Aruba|au:Australia|at:Austria|az:Azerbaijan|bs:Bahamas|bh:Bahrain|bd:Bangladesh|bb:Barbados|by:Belarus|be:Belgium|bz:Belize|bj:Benin|bm:Bermuda|bt:Bhutan|bo:Bolivia|ba:Bosnia|bw:Botswana|bv:Bouvet Island|br:Brazil|vg:British Virgin Islands|bn:Brunei|bg:Bulgaria|bf:Burkina Faso|ar:Burma|bi:Burundi|tc:Caicos Islands|kh:Cambodia|cm:Cameroon|ca:Canada|cv:Cape Verde|ky:Cayman Islands|cf:Central African Republic|td:Chad|cl:Chile|cn:China|cx:Christmas Island|cc:Cocos Islands|co:Colombia|km:Comoros|cg:Congo Brazzaville|cd:Congo|ck:Cook Islands|cr:Costa Rica|ci:Cote Divoire|hr:Croatia|cu:Cuba|cy:Cyprus|cz:Czech Republic|dk:Denmark|dj:Djibouti|dm:Dominica|do:Dominican Republic|ec:Ecuador|eg:Egypt|sv:El Salvador|gb:England|gq:Equatorial Guinea|er:Eritrea|ee:Estonia|et:Ethiopia|eu:European Union|fk:Falkland Islands|fo:Faroe Islands|fj:Fiji|fi:Finland|fr:France|gf:French Guiana|pf:French Polynesia|tf:French Territories|ga:Gabon|gm:Gambia|ge:Georgia|de:Germany|gh:Ghana|gi:Gibraltar|gr:Greece|gl:Greenland|gd:Grenada|gp:Guadeloupe|gu:Guam|gt:Guatemala|gw:Guinea-Bissau|gn:Guinea|gy:Guyana|ht:Haiti|hm:Heard Island|hn:Honduras|hk:Hong Kong|hu:Hungary|is:Iceland|in:India|io:Indian Ocean Territory|id:Indonesia|ir:Iran|iq:Iraq|ie:Ireland|il:Israel|it:Italy|jm:Jamaica|jp:Japan|jo:Jordan|kz:Kazakhstan|ke:Kenya|ki:Kiribati|kw:Kuwait|kg:Kyrgyzstan|la:Laos|lv:Latvia|lb:Lebanon|ls:Lesotho|lr:Liberia|ly:Libya|li:Liechtenstein|lt:Lithuania|lu:Luxembourg|mo:Macau|mk:Macedonia|mg:Madagascar|mw:Malawi|my:Malaysia|mv:Maldives|ml:Mali|mt:Malta|mh:Marshall Islands|mq:Martinique|mr:Mauritania|mu:Mauritius|yt:Mayotte|mx:Mexico|fm:Micronesia|md:Moldova|mc:Monaco|mn:Mongolia|me:Montenegro|ms:Montserrat|ma:Morocco|mz:Mozambique|na:Namibia|nr:Nauru|np:Nepal|an:Netherlands Antilles|nl:Netherlands|nc:New Caledonia|pg:New Guinea|nz:New Zealand|ni:Nicaragua|ne:Niger|ng:Nigeria|nu:Niue|nf:Norfolk Island|kp:North Korea|mp:Northern Mariana Islands|no:Norway|om:Oman|pk:Pakistan|pw:Palau|ps:Palestine|pa:Panama|py:Paraguay|pe:Peru|ph:Philippines|pn:Pitcairn Islands|pl:Poland|pt:Portugal|pr:Puerto Rico|qa:Qatar|re:Reunion|ro:Romania|ru:Russia|rw:Rwanda|sh:Saint Helena|kn:Saint Kitts and Nevis|lc:Saint Lucia|pm:Saint Pierre|vc:Saint Vincent|ws:Samoa|sm:San Marino|gs:Sandwich Islands|st:Sao Tome|sa:Saudi Arabia|sn:Senegal|cs:Serbia|rs:Serbia|sc:Seychelles|sl:Sierra Leone|sg:Singapore|sk:Slovakia|si:Slovenia|sb:Solomon Islands|so:Somalia|za:South Africa|kr:South Korea|es:Spain|lk:Sri Lanka|sd:Sudan|sr:Suriname|sj:Svalbard|sz:Swaziland|se:Sweden|ch:Switzerland|sy:Syria|tw:Taiwan|tj:Tajikistan|tz:Tanzania|th:Thailand|tl:Timorleste|tg:Togo|tk:Tokelau|to:Tonga|tt:Trinidad|tn:Tunisia|tr:Turkey|tm:Turkmenistan|tv:Tuvalu|ug:Uganda|ua:Ukraine|ae:United Arab Emirates|us:United States|uy:Uruguay|um:Us Minor Islands|vi:Us Virgin Islands|uz:Uzbekistan|vu:Vanuatu|va:Vatican City|ve:Venezuela|vn:Vietnam|wf:Wallis and Futuna|eh:Western Sahara|ye:Yemen|zm:Zambia|zw:Zimbabwe"
        }
    ]
}

,
{
    "_id" : "MwSxXqqztSptgdbWC",
    "parent" : "6zpycnT6Fc3LncHG8",
    "name" : "Multiple select",
    "content" : "<div class=\"ui form\">\n  <div class=\"field\">\n    <label>Country</label>\n    <select multiple=\"\" class=\"ui dropdown\">\n      <option value=\"\">Select Country</option>\n{{#each data.country}}\n      <option value=\"{{this.[0]}}\">{{this.[1]}}</option>\n{{/each}}\n    </select>\n  </div>\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "country",
            "value" : "af:Afghanistan|ax:Aland Islands|al:Albania|dz:Algeria|as:American Samoa|ad:Andorra|ao:Angola|ai:Anguilla|ag:Antigua|ar:Argentina|am:Armenia|aw:Aruba|au:Australia|at:Austria|az:Azerbaijan|bs:Bahamas|bh:Bahrain|bd:Bangladesh|bb:Barbados|by:Belarus|be:Belgium|bz:Belize|bj:Benin|bm:Bermuda|bt:Bhutan|bo:Bolivia|ba:Bosnia|bw:Botswana|bv:Bouvet Island|br:Brazil|vg:British Virgin Islands|bn:Brunei|bg:Bulgaria|bf:Burkina Faso|ar:Burma|bi:Burundi|tc:Caicos Islands|kh:Cambodia|cm:Cameroon|ca:Canada|cv:Cape Verde|ky:Cayman Islands|cf:Central African Republic|td:Chad|cl:Chile|cn:China|cx:Christmas Island|cc:Cocos Islands|co:Colombia|km:Comoros|cg:Congo Brazzaville|cd:Congo|ck:Cook Islands|cr:Costa Rica|ci:Cote Divoire|hr:Croatia|cu:Cuba|cy:Cyprus|cz:Czech Republic|dk:Denmark|dj:Djibouti|dm:Dominica|do:Dominican Republic|ec:Ecuador|eg:Egypt|sv:El Salvador|gb:England|gq:Equatorial Guinea|er:Eritrea|ee:Estonia|et:Ethiopia|eu:European Union|fk:Falkland Islands|fo:Faroe Islands|fj:Fiji|fi:Finland|fr:France|gf:French Guiana|pf:French Polynesia|tf:French Territories|ga:Gabon|gm:Gambia|ge:Georgia|de:Germany|gh:Ghana|gi:Gibraltar|gr:Greece|gl:Greenland|gd:Grenada|gp:Guadeloupe|gu:Guam|gt:Guatemala|gw:Guinea-Bissau|gn:Guinea|gy:Guyana|ht:Haiti|hm:Heard Island|hn:Honduras|hk:Hong Kong|hu:Hungary|is:Iceland|in:India|io:Indian Ocean Territory|id:Indonesia|ir:Iran|iq:Iraq|ie:Ireland|il:Israel|it:Italy|jm:Jamaica|jp:Japan|jo:Jordan|kz:Kazakhstan|ke:Kenya|ki:Kiribati|kw:Kuwait|kg:Kyrgyzstan|la:Laos|lv:Latvia|lb:Lebanon|ls:Lesotho|lr:Liberia|ly:Libya|li:Liechtenstein|lt:Lithuania|lu:Luxembourg|mo:Macau|mk:Macedonia|mg:Madagascar|mw:Malawi|my:Malaysia|mv:Maldives|ml:Mali|mt:Malta|mh:Marshall Islands|mq:Martinique|mr:Mauritania|mu:Mauritius|yt:Mayotte|mx:Mexico|fm:Micronesia|md:Moldova|mc:Monaco|mn:Mongolia|me:Montenegro|ms:Montserrat|ma:Morocco|mz:Mozambique|na:Namibia|nr:Nauru|np:Nepal|an:Netherlands Antilles|nl:Netherlands|nc:New Caledonia|pg:New Guinea|nz:New Zealand|ni:Nicaragua|ne:Niger|ng:Nigeria|nu:Niue|nf:Norfolk Island|kp:North Korea|mp:Northern Mariana Islands|no:Norway|om:Oman|pk:Pakistan|pw:Palau|ps:Palestine|pa:Panama|py:Paraguay|pe:Peru|ph:Philippines|pn:Pitcairn Islands|pl:Poland|pt:Portugal|pr:Puerto Rico|qa:Qatar|re:Reunion|ro:Romania|ru:Russia|rw:Rwanda|sh:Saint Helena|kn:Saint Kitts and Nevis|lc:Saint Lucia|pm:Saint Pierre|vc:Saint Vincent|ws:Samoa|sm:San Marino|gs:Sandwich Islands|st:Sao Tome|sa:Saudi Arabia|sn:Senegal|cs:Serbia|rs:Serbia|sc:Seychelles|sl:Sierra Leone|sg:Singapore|sk:Slovakia|si:Slovenia|sb:Solomon Islands|so:Somalia|za:South Africa|kr:South Korea|es:Spain|lk:Sri Lanka|sd:Sudan|sr:Suriname|sj:Svalbard|sz:Swaziland|se:Sweden|ch:Switzerland|sy:Syria|tw:Taiwan|tj:Tajikistan|tz:Tanzania|th:Thailand|tl:Timorleste|tg:Togo|tk:Tokelau|to:Tonga|tt:Trinidad|tn:Tunisia|tr:Turkey|tm:Turkmenistan|tv:Tuvalu|ug:Uganda|ua:Ukraine|ae:United Arab Emirates|us:United States|uy:Uruguay|um:Us Minor Islands|vi:Us Virgin Islands|uz:Uzbekistan|vu:Vanuatu|va:Vatican City|ve:Venezuela|vn:Vietnam|wf:Wallis and Futuna|eh:Western Sahara|ye:Yemen|zm:Zambia|zw:Zimbabwe"
        }
    ]
}

,
{
    "_id" : "RwqBxLRYsKwt7FaEX",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Search Selection",
    "content" : "<div class=\"ui fluid search selection dropdown\">\n  <input type=\"hidden\" name=\"country\">\n  <i class=\"dropdown icon\"></i>\n  <div class=\"default text\">Select Country</div>\n  <div class=\"menu\">\n{{#each data.country}}\n  <div class=\"item\" data-value=\"{{this.[0]}}\"><i class=\"{{this.[0]}} flag\"></i>{{this.[1]}}</div>\n{{/each}}\n</div>\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "country",
            "value" : "af:Afghanistan|ax:Aland Islands|al:Albania|dz:Algeria|as:American Samoa|ad:Andorra|ao:Angola|ai:Anguilla|ag:Antigua|ar:Argentina|am:Armenia|aw:Aruba|au:Australia|at:Austria|az:Azerbaijan|bs:Bahamas|bh:Bahrain|bd:Bangladesh|bb:Barbados|by:Belarus|be:Belgium|bz:Belize|bj:Benin|bm:Bermuda|bt:Bhutan|bo:Bolivia|ba:Bosnia|bw:Botswana|bv:Bouvet Island|br:Brazil|vg:British Virgin Islands|bn:Brunei|bg:Bulgaria|bf:Burkina Faso|ar:Burma|bi:Burundi|tc:Caicos Islands|kh:Cambodia|cm:Cameroon|ca:Canada|cv:Cape Verde|ky:Cayman Islands|cf:Central African Republic|td:Chad|cl:Chile|cn:China|cx:Christmas Island|cc:Cocos Islands|co:Colombia|km:Comoros|cg:Congo Brazzaville|cd:Congo|ck:Cook Islands|cr:Costa Rica|ci:Cote Divoire|hr:Croatia|cu:Cuba|cy:Cyprus|cz:Czech Republic|dk:Denmark|dj:Djibouti|dm:Dominica|do:Dominican Republic|ec:Ecuador|eg:Egypt|sv:El Salvador|gb:England|gq:Equatorial Guinea|er:Eritrea|ee:Estonia|et:Ethiopia|eu:European Union|fk:Falkland Islands|fo:Faroe Islands|fj:Fiji|fi:Finland|fr:France|gf:French Guiana|pf:French Polynesia|tf:French Territories|ga:Gabon|gm:Gambia|ge:Georgia|de:Germany|gh:Ghana|gi:Gibraltar|gr:Greece|gl:Greenland|gd:Grenada|gp:Guadeloupe|gu:Guam|gt:Guatemala|gw:Guinea-Bissau|gn:Guinea|gy:Guyana|ht:Haiti|hm:Heard Island|hn:Honduras|hk:Hong Kong|hu:Hungary|is:Iceland|in:India|io:Indian Ocean Territory|id:Indonesia|ir:Iran|iq:Iraq|ie:Ireland|il:Israel|it:Italy|jm:Jamaica|jp:Japan|jo:Jordan|kz:Kazakhstan|ke:Kenya|ki:Kiribati|kw:Kuwait|kg:Kyrgyzstan|la:Laos|lv:Latvia|lb:Lebanon|ls:Lesotho|lr:Liberia|ly:Libya|li:Liechtenstein|lt:Lithuania|lu:Luxembourg|mo:Macau|mk:Macedonia|mg:Madagascar|mw:Malawi|my:Malaysia|mv:Maldives|ml:Mali|mt:Malta|mh:Marshall Islands|mq:Martinique|mr:Mauritania|mu:Mauritius|yt:Mayotte|mx:Mexico|fm:Micronesia|md:Moldova|mc:Monaco|mn:Mongolia|me:Montenegro|ms:Montserrat|ma:Morocco|mz:Mozambique|na:Namibia|nr:Nauru|np:Nepal|an:Netherlands Antilles|nl:Netherlands|nc:New Caledonia|pg:New Guinea|nz:New Zealand|ni:Nicaragua|ne:Niger|ng:Nigeria|nu:Niue|nf:Norfolk Island|kp:North Korea|mp:Northern Mariana Islands|no:Norway|om:Oman|pk:Pakistan|pw:Palau|ps:Palestine|pa:Panama|py:Paraguay|pe:Peru|ph:Philippines|pn:Pitcairn Islands|pl:Poland|pt:Portugal|pr:Puerto Rico|qa:Qatar|re:Reunion|ro:Romania|ru:Russia|rw:Rwanda|sh:Saint Helena|kn:Saint Kitts and Nevis|lc:Saint Lucia|pm:Saint Pierre|vc:Saint Vincent|ws:Samoa|sm:San Marino|gs:Sandwich Islands|st:Sao Tome|sa:Saudi Arabia|sn:Senegal|cs:Serbia|rs:Serbia|sc:Seychelles|sl:Sierra Leone|sg:Singapore|sk:Slovakia|si:Slovenia|sb:Solomon Islands|so:Somalia|za:South Africa|kr:South Korea|es:Spain|lk:Sri Lanka|sd:Sudan|sr:Suriname|sj:Svalbard|sz:Swaziland|se:Sweden|ch:Switzerland|sy:Syria|tw:Taiwan|tj:Tajikistan|tz:Tanzania|th:Thailand|tl:Timorleste|tg:Togo|tk:Tokelau|to:Tonga|tt:Trinidad|tn:Tunisia|tr:Turkey|tm:Turkmenistan|tv:Tuvalu|ug:Uganda|ua:Ukraine|ae:United Arab Emirates|us:United States|uy:Uruguay|um:Us Minor Islands|vi:Us Virgin Islands|uz:Uzbekistan|vu:Vanuatu|va:Vatican City|ve:Venezuela|vn:Vietnam|wf:Wallis and Futuna|eh:Western Sahara|ye:Yemen|zm:Zambia|zw:Zimbabwe"
        }
    ]
}

,
{
    "_id" : "C2mn4vicer2c3f4KR",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "Image bordered",
    "content" : "<img class=\"ui medium bordered image\" src=\"{{data.image}}\">",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "image",
            "value" : "/images/wireframe/white-image.png"
        }
    ]
}

,
{
    "_id" : "v4RPkLbuceawczky2",
    "parent" : "mfoD4keDSR7KSwKW3",
    "name" : "Image circular",
    "content" : "<img class=\"ui medium circular image\" src=\"{{data.image}}\">",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "image",
            "value" : "/images/wireframe/square-image.png"
        }
    ]
}

,
{
    "_id" : "S9JdwZFJLZDCibAPc",
    "parent" : "PpKsof4bEB88ZnnAf",
    "name" : "Input types",
    "content" : "<div class=\"ui input\">\n  <input type=\"text\" placeholder=\"{{data.placeholder}}\">\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "placeholder",
            "value" : "Search..."
        }
    ]
}

,
{
    "_id" : "JQJcPqCq9Ai9BFkgs",
    "parent" : "ExRWX7hkKBDrruh4r",
    "name" : "Pades",
    "content" : "<div class=\"ui {{design.pad}} segment\">\n  <p>{{data.text}}</p>\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "text",
            "value" : "Some paragraph."
        }
    ],
    "design" : [ 
        {
            "name" : "pad",
            "value" : "padded",
            "choices" : "padded|very padded|compact"
        }
    ]
}

,
{
    "_id" : "TGFtqBk53TiaCiv3v",
    "parent" : "xrbP659zGvop7Y5BZ",
    "name" : "Ordered",
    "content" : "<div class=\"ui {{design.ordering}} list\">\n  {{{data.list}}}\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "ordering",
            "value" : "ordered",
            "choices" : "ordered|unordered"
        }
    ],
    "data" : [ 
        {
            "name" : "list",
            "value" : "<a class=\"item\">Getting Started</a>   <a class=\"item\">Introduction</a>   <div class=\"item\">     <a>Languages</a>     <div class=\"list\">       <a class=\"item\">HTML</a>       <a class=\"item\">Javascript</a>       <a class=\"item\">CSS</a>     </div>   </div>   <a class=\"item\">Review</a>"
        }
    ]
}

,
{
    "_id" : "vAtoYucfRK2Yoi7AL",
    "parent" : "GnomJs47NRMWixR9D",
    "name" : "Library",
    "isContainer" : false
}

,
{
    "_id" : "uDtXwboYQFg6ugYA7",
    "parent" : "vAtoYucfRK2Yoi7AL",
    "name" : "Login",
    "isContainer" : false
}

,
{
    "_id" : "GZ3uLauW2EHrF6iDF",
    "parent" : "pzCd4zKtba4vZMBWa",
    "name" : "Social",
    "content" : "<button class=\"ui {{data.network.[0]}} button\">\n  <i class=\"{{data.network.[0]}} icon\"></i>\n  {{data.network.[1]}}\n</button>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "network",
            "value" : "facebook:Facebook",
            "choices" : "facebook:Facebook|twitter:Twitter|google plus:Google Plus|vk:VK|linkedin:LinkedIn|instagram:Instagram|youtube:Youtube"
        }
    ]
}

,
{
    "_id" : "SYntxyJQbpc2rcHb8",
    "parent" : "bK63TFAabjKzbuych",
    "name" : "Move reveal custom",
    "content" : "<div class=\"ui {{design.direction}} reveal\">\n  <div class=\"visible content\">\n    <img src=\"{{data.image1}}\" class=\"ui {{design.size}} image\">\n  </div>\n  <div class=\"hidden content\">\n    <img src=\"{{data.image2}}\" class=\"ui {{design.size}} image\">\n  </div>\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "direction",
            "value" : "move left",
            "choices" : "move right|move left|move up|move down|rotate"
        }, 
        {
            "name" : "size",
            "value" : "small",
            "choices" : "|mini|tiny|small|medium|large|big|huge|massive"
        }
    ],
    "data" : [ 
        {
            "name" : "image1",
            "value" : "/images/wireframe/square-image.png"
        }, 
        {
            "name" : "image2",
            "value" : "/images/avatar/nan.jpg"
        }
    ]
}

,
{
    "_id" : "BoCraFqCeYf26GvcL",
    "parent" : "pzCd4zKtba4vZMBWa",
    "name" : "circular branded",
    "content" : "<button class=\"ui circular {{design.brand}} icon button\">\n  <i class=\"{{design.brand}} icon\"></i>\n</button>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "brand",
            "value" : "facebook",
            "choices" : "facebook|twitter|google plus|vk|linkedin|instagram|youtube"
        }
    ]
}

,
{
    "_id" : "Gc8raes7XjGm8CvrM",
    "parent" : "pzCd4zKtba4vZMBWa",
    "name" : "group",
    "content" : "<div class=\"ui icon buttons {{design.vertical}}\">\n{{#each data.buttons}}\n  <button class=\"ui button\">\n    <i class=\"{{this.[0]}} icon\"></i>\n  </button>\n{{/each}}\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "vertical",
            "value" : " ",
            "choices" : " |vertical"
        }
    ],
    "data" : [ 
        {
            "name" : "buttons",
            "value" : "left chevron:|play:|pause:|shuffle:|right chevron:"
        }
    ]
}

,
{
    "_id" : "oLSs9tXuCgoHZ7esY",
    "parent" : "3f3PsdGsKocrQvDFJ",
    "name" : "Multiple search selection",
    "content" : "<div class=\"ui fluid multiple search selection dropdown\">\n  <input type=\"hidden\" name=\"country\">\n  <i class=\"dropdown icon\"></i>\n  <div class=\"default text\">Select Country</div>\n  <div class=\"menu\">\n{{#each data.country}}\n  <div class=\"item\" data-value=\"{{this.[0]}}\"><i class=\"{{this.[0]}} flag\"></i>{{this.[1]}}</div>\n{{/each}}\n</div>\n </div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "country",
            "value" : "af:Afghanistan|ax:Aland Islands|al:Albania|dz:Algeria|as:American Samoa|ad:Andorra|ao:Angola|ai:Anguilla|ag:Antigua|ar:Argentina|am:Armenia|aw:Aruba|au:Australia|at:Austria|az:Azerbaijan|bs:Bahamas|bh:Bahrain|bd:Bangladesh|bb:Barbados|by:Belarus|be:Belgium|bz:Belize|bj:Benin|bm:Bermuda|bt:Bhutan|bo:Bolivia|ba:Bosnia|bw:Botswana|bv:Bouvet Island|br:Brazil|vg:British Virgin Islands|bn:Brunei|bg:Bulgaria|bf:Burkina Faso|ar:Burma|bi:Burundi|tc:Caicos Islands|kh:Cambodia|cm:Cameroon|ca:Canada|cv:Cape Verde|ky:Cayman Islands|cf:Central African Republic|td:Chad|cl:Chile|cn:China|cx:Christmas Island|cc:Cocos Islands|co:Colombia|km:Comoros|cg:Congo Brazzaville|cd:Congo|ck:Cook Islands|cr:Costa Rica|ci:Cote Divoire|hr:Croatia|cu:Cuba|cy:Cyprus|cz:Czech Republic|dk:Denmark|dj:Djibouti|dm:Dominica|do:Dominican Republic|ec:Ecuador|eg:Egypt|sv:El Salvador|gb:England|gq:Equatorial Guinea|er:Eritrea|ee:Estonia|et:Ethiopia|eu:European Union|fk:Falkland Islands|fo:Faroe Islands|fj:Fiji|fi:Finland|fr:France|gf:French Guiana|pf:French Polynesia|tf:French Territories|ga:Gabon|gm:Gambia|ge:Georgia|de:Germany|gh:Ghana|gi:Gibraltar|gr:Greece|gl:Greenland|gd:Grenada|gp:Guadeloupe|gu:Guam|gt:Guatemala|gw:Guinea-Bissau|gn:Guinea|gy:Guyana|ht:Haiti|hm:Heard Island|hn:Honduras|hk:Hong Kong|hu:Hungary|is:Iceland|in:India|io:Indian Ocean Territory|id:Indonesia|ir:Iran|iq:Iraq|ie:Ireland|il:Israel|it:Italy|jm:Jamaica|jp:Japan|jo:Jordan|kz:Kazakhstan|ke:Kenya|ki:Kiribati|kw:Kuwait|kg:Kyrgyzstan|la:Laos|lv:Latvia|lb:Lebanon|ls:Lesotho|lr:Liberia|ly:Libya|li:Liechtenstein|lt:Lithuania|lu:Luxembourg|mo:Macau|mk:Macedonia|mg:Madagascar|mw:Malawi|my:Malaysia|mv:Maldives|ml:Mali|mt:Malta|mh:Marshall Islands|mq:Martinique|mr:Mauritania|mu:Mauritius|yt:Mayotte|mx:Mexico|fm:Micronesia|md:Moldova|mc:Monaco|mn:Mongolia|me:Montenegro|ms:Montserrat|ma:Morocco|mz:Mozambique|na:Namibia|nr:Nauru|np:Nepal|an:Netherlands Antilles|nl:Netherlands|nc:New Caledonia|pg:New Guinea|nz:New Zealand|ni:Nicaragua|ne:Niger|ng:Nigeria|nu:Niue|nf:Norfolk Island|kp:North Korea|mp:Northern Mariana Islands|no:Norway|om:Oman|pk:Pakistan|pw:Palau|ps:Palestine|pa:Panama|py:Paraguay|pe:Peru|ph:Philippines|pn:Pitcairn Islands|pl:Poland|pt:Portugal|pr:Puerto Rico|qa:Qatar|re:Reunion|ro:Romania|ru:Russia|rw:Rwanda|sh:Saint Helena|kn:Saint Kitts and Nevis|lc:Saint Lucia|pm:Saint Pierre|vc:Saint Vincent|ws:Samoa|sm:San Marino|gs:Sandwich Islands|st:Sao Tome|sa:Saudi Arabia|sn:Senegal|cs:Serbia|rs:Serbia|sc:Seychelles|sl:Sierra Leone|sg:Singapore|sk:Slovakia|si:Slovenia|sb:Solomon Islands|so:Somalia|za:South Africa|kr:South Korea|es:Spain|lk:Sri Lanka|sd:Sudan|sr:Suriname|sj:Svalbard|sz:Swaziland|se:Sweden|ch:Switzerland|sy:Syria|tw:Taiwan|tj:Tajikistan|tz:Tanzania|th:Thailand|tl:Timorleste|tg:Togo|tk:Tokelau|to:Tonga|tt:Trinidad|tn:Tunisia|tr:Turkey|tm:Turkmenistan|tv:Tuvalu|ug:Uganda|ua:Ukraine|ae:United Arab Emirates|us:United States|uy:Uruguay|um:Us Minor Islands|vi:Us Virgin Islands|uz:Uzbekistan|vu:Vanuatu|va:Vatican City|ve:Venezuela|vn:Vietnam|wf:Wallis and Futuna|eh:Western Sahara|ye:Yemen|zm:Zambia|zw:Zimbabwe"
        }
    ]
}

,
{
    "_id" : "WSNYHYHk28wdXw3n6",
    "parent" : "nfvJRyLFaSsL5uhvf",
    "name" : "Demo",
    "content" : "<body>\n  <div class=\"ui sidebar inverted vertical menu\">\n    <a class=\"item\">\n      1\n    </a>\n    <a class=\"item\">\n      2\n    </a>\n    <a class=\"item\">\n      3\n    </a>\n  </div>\n  <div class=\"pusher\">\n    <!-- Site content !-->\n  </div>\n</body>",
    "isContainer" : false
}

,
{
    "_id" : "bpibRC6jYoXXsgDTi",
    "parent" : "nfvJRyLFaSsL5uhvf",
    "name" : "Insert",
    "content" : "<div class=\"ui left demo vertical inverted sidebar labeled icon menu\">\n  <a class=\"item\">\n    <i class=\"home icon\"></i>\n    Home\n  </a>\n  <a class=\"item\">\n    <i class=\"block layout icon\"></i>\n    Topics\n  </a>\n  <a class=\"item\">\n    <i class=\"smile icon\"></i>\n    Friends\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "4L9LeRXe8WjfqLx5X",
    "parent" : "nfvJRyLFaSsL5uhvf",
    "name" : "Directions",
    "content" : "<div class=\"ui top sidebar\"></div>\n<div class=\"ui right sidebar\"></div>\n<div class=\"ui bottom sidebar\"></div>\n<div class=\"ui left sidebar\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "EPpLX5y5wiCL8wtnx",
    "parent" : "nfvJRyLFaSsL5uhvf",
    "name" : "Width",
    "content" : "<div class=\"ui thin sidebar\"></div>\n<div class=\"ui very thin sidebar\"></div>\n<div class=\"ui sidebar\"></div>\n<div class=\"ui wide sidebar\"></div>\n<div class=\"ui very wide sidebar\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "pEBHvN3HyA2hTDkZ3",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Shipping",
    "content" : "<div class=\"ui steps\">\n  <div class=\"link step\">\n    <i class=\"{{design.icon}} icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">{{data.title1}}</div>\n      <div class=\"description\">{{data.text1}}</div>\n    </div>\n  </div>\n  <div class=\"link step\">\n    <div class=\"content\">\n      <div class=\"title\">{{data.title2}}</div>\n      <div class=\"description\">{{data.text2}}</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "icon",
            "value" : "truck",
            "choices" : "alarm|alarm slash|alarm outline|alarm slash outline|at|browser|bug|calendar outline|calendar|cloud|code|comment|comments|comment outline|comments outline|copyright|dashboard|dropdown|external square|external|eyedropper|feed|find|heartbeat|history|home|idea|inbox|lab|mail|mail outline|mail square|map|options|paint brush|payment|phone|phone square|privacy|protect|search|setting|settings|shop|sidebar|signal|sitemap|tag|tags|tasks|terminal|text telephone|ticket|trophy|wifi|desktop|disk outline|file archive outline|file audio outline|file code outline|file excel outline|file|file image outline|file outline|file pdf outline|file powerpoint outline|file text|file text outline|file video outline|file word outline|folder|folder open|folder open outline|folder outline|game|keyboard|laptop|level down|level up|mobile|power|plug|tablet|trash|trash outline|adjust|add user|add to cart|archive|ban|bookmark|call|call square|cloud download|cloud upload|compress|configure|download|edit|erase|exchange|external share|expand|filter|flag|flag outline|forward mail|hide|in cart|lock|pin|print|random|recycle|refresh|remove bookmark|remove user|repeat|reply all|reply|retweet|send|send outline|share alternate|share alternate square|share|share square|sign in|sign out|theme|translate|undo|unhide|unlock alternate|unlock|upload|wait|wizard|write|write square|announcement|birthday|help|help circle|info|info circle|warning|warning circle|warning sign|child|doctor|handicap|spy|student|user|users|female|gay|heterosexual|intergender|lesbian|male|man|neuter|non binary transgender|transgender|other gender|other gender horizontal|other gender vertical|woman|grid layout|list layout|block layout|zoom|zoom out|resize vertical|resize horizontal|maximize|crop|anchor|bar|bomb|book|bullseye|calculator|checkered flag|cocktail|diamond|fax|fire extinguisher|fire|gift|leaf|legal|lemon|life ring|lightning|magnet|money|moon|plane|puzzle|rain|road|rocket|shipping|soccer|suitcase|sun|travel|treatment|world|asterisk|certificate|circle|circle notched|circle thin|crosshairs|cube|cubes|ellipsis horizontal|ellipsis vertical|quote left|quote right|spinner|square|square outline|add square|check circle|check circle outline|check square|checkmark box|checkmark|minus circle|minus|minus square|minus square outline|move|plus|plus square outline|radio|remove circle|remove circle outline|remove|selected radio|toggle off|toggle on|area chart|bar chart|camera retro|newspaper|film|line chart|photo|pie chart|sound|angle double down|angle double left|angle double right|angle double up|angle down|angle left|angle right|angle up|arrow circle down|arrow circle left|arrow circle outline down|arrow circle outline left|arrow circle outline right|arrow circle outline up|arrow circle right|arrow circle up|arrow down|arrow left|arrow right|arrow up|caret down|caret left|caret right|caret up|chevron circle down|chevron circle left|chevron circle right|chevron circle up|chevron down|chevron left|chevron right|chevron up|long arrow down|long arrow left|long arrow right|long arrow up|pointing down|pointing left|pointing right|pointing up|toggle down|toggle left|toggle right|toggle up|barcode|css3|database|fork|html5|openid|qrcode|rss|rss square|server|empty heart|empty star|frown|heart|meh|smile|star half empty|star half|star|thumbs down|thumbs outline down|thumbs outline up|thumbs up|backward|eject|fast backward|fast forward|forward|music|mute|pause|play|record|step backward|step forward|stop|unmute|video play|video play outline|volume down|volume off|volume up|building|building outline|car|coffee|emergency|first aid|food|h|hospital|location arrow|marker|military|paw|space shuttle|spoon|taxi|tree|university|columns|sort alphabet ascending|sort alphabet descending|sort ascending|sort content ascending|sort content descending|sort descending|sort|sort numeric ascending|sort numeric descending|table|align center|align justify|align left|align right|attach|bold|copy|cut|font|header|indent|italic|linkify|list|ordered list|outdent|paragraph|paste|save|strikethrough|subscript|superscript|text height|text width|underline|unlink|unordered list|dollar|euro|lira|pound|ruble|rupee|won|shekel|yen|american express|discover|google wallet|mastercard|paypal card|paypal|stripe|visa|adn|android|angellist|apple|behance|behance square|bitbucket|bitbucket square|bitcoin|buysellads|codepen|connectdevelop|dashcube|delicious|deviantart|digg|dribbble|dropbox|drupal|empire|facebook|facebook square|flickr|forumbee|foursquare|git|git square|github alternate|github|github square|gittip|google|google plus|google plus square|hacker news|instagram|ioxhost|joomla|jsfiddle|lastfm|lastfm square|leanpub|linkedin|linkedin square|linux|maxcdn|meanpath|medium|pagelines|pied piper alternate|pied piper|pinterest|pinterest square|qq|rebel|reddit|reddit square|renren|sellsy|shirtsinbulk|simplybuilt|skyatlas|skype|slack|slideshare|soundcloud|spotify|stack exchange|stack overflow|steam|steam square|stumbleupon circle|stumbleupon|tencent weibo|trello|tumblr|tumblr square|twitch|twitter|twitter square|viacoin|vimeo|vine|vk|wechat|weibo|whatsapp|windows|wordpress|xing|xing square|yahoo|yelp|youtube|youtube play|youtube square"
        }
    ],
    "data" : [ 
        {
            "name" : "title1",
            "value" : "Shipping"
        }, 
        {
            "name" : "text2",
            "value" : "Choose your shipping options"
        }, 
        {
            "name" : "title2",
            "value" : "Billing"
        }, 
        {
            "name" : "text2",
            "value" : "Enter billing information"
        }
    ]
}

,
{
    "_id" : "Ndy5jD24reKcGn8or",
    "parent" : "j5kZYbKSYytitMSip",
    "name" : "Steps",
    "content" : "<div class=\"ui steps\">\n  <div class=\"step\">\n    <i class=\"{{design.icon1}} icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">{{data.title1}}</div>\n      <div class=\"description\">{{data.text1}}</div>\n    </div>\n  </div>\n  <div class=\"active step\">\n    <i class=\"{{design.icon2}} icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">{{data.title2}}</div>\n      <div class=\"description\">{{data.text2}}</div>\n    </div>\n  </div>\n  <div class=\"disabled step\">\n    <i class=\"{{design.icon3}} icon\"></i>\n    <div class=\"content\">\n      <div class=\"title\">{{data.title3}}</div>\n <div class=\"description\">{{data.text3}}</div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "icon1",
            "value" : "truck",
            "choices" : "alarm|alarm slash|alarm outline|alarm slash outline|at|browser|bug|calendar outline|calendar|cloud|code|comment|comments|comment outline|comments outline|copyright|dashboard|dropdown|external square|external|eyedropper|feed|find|heartbeat|history|home|idea|inbox|lab|mail|mail outline|mail square|map|options|paint brush|payment|phone|phone square|privacy|protect|search|setting|settings|shop|sidebar|signal|sitemap|tag|tags|tasks|terminal|text telephone|ticket|trophy|wifi|desktop|disk outline|file archive outline|file audio outline|file code outline|file excel outline|file|file image outline|file outline|file pdf outline|file powerpoint outline|file text|file text outline|file video outline|file word outline|folder|folder open|folder open outline|folder outline|game|keyboard|laptop|level down|level up|mobile|power|plug|tablet|trash|trash outline|adjust|add user|add to cart|archive|ban|bookmark|call|call square|cloud download|cloud upload|compress|configure|download|edit|erase|exchange|external share|expand|filter|flag|flag outline|forward mail|hide|in cart|lock|pin|print|random|recycle|refresh|remove bookmark|remove user|repeat|reply all|reply|retweet|send|send outline|share alternate|share alternate square|share|share square|sign in|sign out|theme|translate|undo|unhide|unlock alternate|unlock|upload|wait|wizard|write|write square|announcement|birthday|help|help circle|info|info circle|warning|warning circle|warning sign|child|doctor|handicap|spy|student|user|users|female|gay|heterosexual|intergender|lesbian|male|man|neuter|non binary transgender|transgender|other gender|other gender horizontal|other gender vertical|woman|grid layout|list layout|block layout|zoom|zoom out|resize vertical|resize horizontal|maximize|crop|anchor|bar|bomb|book|bullseye|calculator|checkered flag|cocktail|diamond|fax|fire extinguisher|fire|gift|leaf|legal|lemon|life ring|lightning|magnet|money|moon|plane|puzzle|rain|road|rocket|shipping|soccer|suitcase|sun|travel|treatment|world|asterisk|certificate|circle|circle notched|circle thin|crosshairs|cube|cubes|ellipsis horizontal|ellipsis vertical|quote left|quote right|spinner|square|square outline|add square|check circle|check circle outline|check square|checkmark box|checkmark|minus circle|minus|minus square|minus square outline|move|plus|plus square outline|radio|remove circle|remove circle outline|remove|selected radio|toggle off|toggle on|area chart|bar chart|camera retro|newspaper|film|line chart|photo|pie chart|sound|angle double down|angle double left|angle double right|angle double up|angle down|angle left|angle right|angle up|arrow circle down|arrow circle left|arrow circle outline down|arrow circle outline left|arrow circle outline right|arrow circle outline up|arrow circle right|arrow circle up|arrow down|arrow left|arrow right|arrow up|caret down|caret left|caret right|caret up|chevron circle down|chevron circle left|chevron circle right|chevron circle up|chevron down|chevron left|chevron right|chevron up|long arrow down|long arrow left|long arrow right|long arrow up|pointing down|pointing left|pointing right|pointing up|toggle down|toggle left|toggle right|toggle up|barcode|css3|database|fork|html5|openid|qrcode|rss|rss square|server|empty heart|empty star|frown|heart|meh|smile|star half empty|star half|star|thumbs down|thumbs outline down|thumbs outline up|thumbs up|backward|eject|fast backward|fast forward|forward|music|mute|pause|play|record|step backward|step forward|stop|unmute|video play|video play outline|volume down|volume off|volume up|building|building outline|car|coffee|emergency|first aid|food|h|hospital|location arrow|marker|military|paw|space shuttle|spoon|taxi|tree|university|columns|sort alphabet ascending|sort alphabet descending|sort ascending|sort content ascending|sort content descending|sort descending|sort|sort numeric ascending|sort numeric descending|table|align center|align justify|align left|align right|attach|bold|copy|cut|font|header|indent|italic|linkify|list|ordered list|outdent|paragraph|paste|save|strikethrough|subscript|superscript|text height|text width|underline|unlink|unordered list|dollar|euro|lira|pound|ruble|rupee|won|shekel|yen|american express|discover|google wallet|mastercard|paypal card|paypal|stripe|visa|adn|android|angellist|apple|behance|behance square|bitbucket|bitbucket square|bitcoin|buysellads|codepen|connectdevelop|dashcube|delicious|deviantart|digg|dribbble|dropbox|drupal|empire|facebook|facebook square|flickr|forumbee|foursquare|git|git square|github alternate|github|github square|gittip|google|google plus|google plus square|hacker news|instagram|ioxhost|joomla|jsfiddle|lastfm|lastfm square|leanpub|linkedin|linkedin square|linux|maxcdn|meanpath|medium|pagelines|pied piper alternate|pied piper|pinterest|pinterest square|qq|rebel|reddit|reddit square|renren|sellsy|shirtsinbulk|simplybuilt|skyatlas|skype|slack|slideshare|soundcloud|spotify|stack exchange|stack overflow|steam|steam square|stumbleupon circle|stumbleupon|tencent weibo|trello|tumblr|tumblr square|twitch|twitter|twitter square|viacoin|vimeo|vine|vk|wechat|weibo|whatsapp|windows|wordpress|xing|xing square|yahoo|yelp|youtube|youtube play|youtube square"
        }, 
        {
            "name" : "icon2",
            "value" : "payment",
            "choices" : "alarm|alarm slash|alarm outline|alarm slash outline|at|browser|bug|calendar outline|calendar|cloud|code|comment|comments|comment outline|comments outline|copyright|dashboard|dropdown|external square|external|eyedropper|feed|find|heartbeat|history|home|idea|inbox|lab|mail|mail outline|mail square|map|options|paint brush|payment|phone|phone square|privacy|protect|search|setting|settings|shop|sidebar|signal|sitemap|tag|tags|tasks|terminal|text telephone|ticket|trophy|wifi|desktop|disk outline|file archive outline|file audio outline|file code outline|file excel outline|file|file image outline|file outline|file pdf outline|file powerpoint outline|file text|file text outline|file video outline|file word outline|folder|folder open|folder open outline|folder outline|game|keyboard|laptop|level down|level up|mobile|power|plug|tablet|trash|trash outline|adjust|add user|add to cart|archive|ban|bookmark|call|call square|cloud download|cloud upload|compress|configure|download|edit|erase|exchange|external share|expand|filter|flag|flag outline|forward mail|hide|in cart|lock|pin|print|random|recycle|refresh|remove bookmark|remove user|repeat|reply all|reply|retweet|send|send outline|share alternate|share alternate square|share|share square|sign in|sign out|theme|translate|undo|unhide|unlock alternate|unlock|upload|wait|wizard|write|write square|announcement|birthday|help|help circle|info|info circle|warning|warning circle|warning sign|child|doctor|handicap|spy|student|user|users|female|gay|heterosexual|intergender|lesbian|male|man|neuter|non binary transgender|transgender|other gender|other gender horizontal|other gender vertical|woman|grid layout|list layout|block layout|zoom|zoom out|resize vertical|resize horizontal|maximize|crop|anchor|bar|bomb|book|bullseye|calculator|checkered flag|cocktail|diamond|fax|fire extinguisher|fire|gift|leaf|legal|lemon|life ring|lightning|magnet|money|moon|plane|puzzle|rain|road|rocket|shipping|soccer|suitcase|sun|travel|treatment|world|asterisk|certificate|circle|circle notched|circle thin|crosshairs|cube|cubes|ellipsis horizontal|ellipsis vertical|quote left|quote right|spinner|square|square outline|add square|check circle|check circle outline|check square|checkmark box|checkmark|minus circle|minus|minus square|minus square outline|move|plus|plus square outline|radio|remove circle|remove circle outline|remove|selected radio|toggle off|toggle on|area chart|bar chart|camera retro|newspaper|film|line chart|photo|pie chart|sound|angle double down|angle double left|angle double right|angle double up|angle down|angle left|angle right|angle up|arrow circle down|arrow circle left|arrow circle outline down|arrow circle outline left|arrow circle outline right|arrow circle outline up|arrow circle right|arrow circle up|arrow down|arrow left|arrow right|arrow up|caret down|caret left|caret right|caret up|chevron circle down|chevron circle left|chevron circle right|chevron circle up|chevron down|chevron left|chevron right|chevron up|long arrow down|long arrow left|long arrow right|long arrow up|pointing down|pointing left|pointing right|pointing up|toggle down|toggle left|toggle right|toggle up|barcode|css3|database|fork|html5|openid|qrcode|rss|rss square|server|empty heart|empty star|frown|heart|meh|smile|star half empty|star half|star|thumbs down|thumbs outline down|thumbs outline up|thumbs up|backward|eject|fast backward|fast forward|forward|music|mute|pause|play|record|step backward|step forward|stop|unmute|video play|video play outline|volume down|volume off|volume up|building|building outline|car|coffee|emergency|first aid|food|h|hospital|location arrow|marker|military|paw|space shuttle|spoon|taxi|tree|university|columns|sort alphabet ascending|sort alphabet descending|sort ascending|sort content ascending|sort content descending|sort descending|sort|sort numeric ascending|sort numeric descending|table|align center|align justify|align left|align right|attach|bold|copy|cut|font|header|indent|italic|linkify|list|ordered list|outdent|paragraph|paste|save|strikethrough|subscript|superscript|text height|text width|underline|unlink|unordered list|dollar|euro|lira|pound|ruble|rupee|won|shekel|yen|american express|discover|google wallet|mastercard|paypal card|paypal|stripe|visa|adn|android|angellist|apple|behance|behance square|bitbucket|bitbucket square|bitcoin|buysellads|codepen|connectdevelop|dashcube|delicious|deviantart|digg|dribbble|dropbox|drupal|empire|facebook|facebook square|flickr|forumbee|foursquare|git|git square|github alternate|github|github square|gittip|google|google plus|google plus square|hacker news|instagram|ioxhost|joomla|jsfiddle|lastfm|lastfm square|leanpub|linkedin|linkedin square|linux|maxcdn|meanpath|medium|pagelines|pied piper alternate|pied piper|pinterest|pinterest square|qq|rebel|reddit|reddit square|renren|sellsy|shirtsinbulk|simplybuilt|skyatlas|skype|slack|slideshare|soundcloud|spotify|stack exchange|stack overflow|steam|steam square|stumbleupon circle|stumbleupon|tencent weibo|trello|tumblr|tumblr square|twitch|twitter|twitter square|viacoin|vimeo|vine|vk|wechat|weibo|whatsapp|windows|wordpress|xing|xing square|yahoo|yelp|youtube|youtube play|youtube square"
        }, 
        {
            "name" : "icon3",
            "value" : "info",
            "choices" : "alarm|alarm slash|alarm outline|alarm slash outline|at|browser|bug|calendar outline|calendar|cloud|code|comment|comments|comment outline|comments outline|copyright|dashboard|dropdown|external square|external|eyedropper|feed|find|heartbeat|history|home|idea|inbox|lab|mail|mail outline|mail square|map|options|paint brush|payment|phone|phone square|privacy|protect|search|setting|settings|shop|sidebar|signal|sitemap|tag|tags|tasks|terminal|text telephone|ticket|trophy|wifi|desktop|disk outline|file archive outline|file audio outline|file code outline|file excel outline|file|file image outline|file outline|file pdf outline|file powerpoint outline|file text|file text outline|file video outline|file word outline|folder|folder open|folder open outline|folder outline|game|keyboard|laptop|level down|level up|mobile|power|plug|tablet|trash|trash outline|adjust|add user|add to cart|archive|ban|bookmark|call|call square|cloud download|cloud upload|compress|configure|download|edit|erase|exchange|external share|expand|filter|flag|flag outline|forward mail|hide|in cart|lock|pin|print|random|recycle|refresh|remove bookmark|remove user|repeat|reply all|reply|retweet|send|send outline|share alternate|share alternate square|share|share square|sign in|sign out|theme|translate|undo|unhide|unlock alternate|unlock|upload|wait|wizard|write|write square|announcement|birthday|help|help circle|info|info circle|warning|warning circle|warning sign|child|doctor|handicap|spy|student|user|users|female|gay|heterosexual|intergender|lesbian|male|man|neuter|non binary transgender|transgender|other gender|other gender horizontal|other gender vertical|woman|grid layout|list layout|block layout|zoom|zoom out|resize vertical|resize horizontal|maximize|crop|anchor|bar|bomb|book|bullseye|calculator|checkered flag|cocktail|diamond|fax|fire extinguisher|fire|gift|leaf|legal|lemon|life ring|lightning|magnet|money|moon|plane|puzzle|rain|road|rocket|shipping|soccer|suitcase|sun|travel|treatment|world|asterisk|certificate|circle|circle notched|circle thin|crosshairs|cube|cubes|ellipsis horizontal|ellipsis vertical|quote left|quote right|spinner|square|square outline|add square|check circle|check circle outline|check square|checkmark box|checkmark|minus circle|minus|minus square|minus square outline|move|plus|plus square outline|radio|remove circle|remove circle outline|remove|selected radio|toggle off|toggle on|area chart|bar chart|camera retro|newspaper|film|line chart|photo|pie chart|sound|angle double down|angle double left|angle double right|angle double up|angle down|angle left|angle right|angle up|arrow circle down|arrow circle left|arrow circle outline down|arrow circle outline left|arrow circle outline right|arrow circle outline up|arrow circle right|arrow circle up|arrow down|arrow left|arrow right|arrow up|caret down|caret left|caret right|caret up|chevron circle down|chevron circle left|chevron circle right|chevron circle up|chevron down|chevron left|chevron right|chevron up|long arrow down|long arrow left|long arrow right|long arrow up|pointing down|pointing left|pointing right|pointing up|toggle down|toggle left|toggle right|toggle up|barcode|css3|database|fork|html5|openid|qrcode|rss|rss square|server|empty heart|empty star|frown|heart|meh|smile|star half empty|star half|star|thumbs down|thumbs outline down|thumbs outline up|thumbs up|backward|eject|fast backward|fast forward|forward|music|mute|pause|play|record|step backward|step forward|stop|unmute|video play|video play outline|volume down|volume off|volume up|building|building outline|car|coffee|emergency|first aid|food|h|hospital|location arrow|marker|military|paw|space shuttle|spoon|taxi|tree|university|columns|sort alphabet ascending|sort alphabet descending|sort ascending|sort content ascending|sort content descending|sort descending|sort|sort numeric ascending|sort numeric descending|table|align center|align justify|align left|align right|attach|bold|copy|cut|font|header|indent|italic|linkify|list|ordered list|outdent|paragraph|paste|save|strikethrough|subscript|superscript|text height|text width|underline|unlink|unordered list|dollar|euro|lira|pound|ruble|rupee|won|shekel|yen|american express|discover|google wallet|mastercard|paypal card|paypal|stripe|visa|adn|android|angellist|apple|behance|behance square|bitbucket|bitbucket square|bitcoin|buysellads|codepen|connectdevelop|dashcube|delicious|deviantart|digg|dribbble|dropbox|drupal|empire|facebook|facebook square|flickr|forumbee|foursquare|git|git square|github alternate|github|github square|gittip|google|google plus|google plus square|hacker news|instagram|ioxhost|joomla|jsfiddle|lastfm|lastfm square|leanpub|linkedin|linkedin square|linux|maxcdn|meanpath|medium|pagelines|pied piper alternate|pied piper|pinterest|pinterest square|qq|rebel|reddit|reddit square|renren|sellsy|shirtsinbulk|simplybuilt|skyatlas|skype|slack|slideshare|soundcloud|spotify|stack exchange|stack overflow|steam|steam square|stumbleupon circle|stumbleupon|tencent weibo|trello|tumblr|tumblr square|twitch|twitter|twitter square|viacoin|vimeo|vine|vk|wechat|weibo|whatsapp|windows|wordpress|xing|xing square|yahoo|yelp|youtube|youtube play|youtube square"
        }
    ],
    "data" : [ 
        {
            "name" : "title1",
            "value" : "Shipping"
        }, 
        {
            "name" : "title2",
            "value" : "Billing"
        }, 
        {
            "name" : "title3",
            "value" : "Confirm"
        }, 
        {
            "name" : "text1",
            "value" : "Choose your shipping options"
        }, 
        {
            "name" : "text2",
            "value" : "Enter billing information"
        }, 
        {
            "name" : "text3",
            "value" : "Confirm order information"
        }
    ]
}

,
{
    "_id" : "J4kLtf933bByvHRKo",
    "parent" : "bK63TFAabjKzbuych",
    "name" : "Move",
    "content" : "<div class=\"ui move reveal\">\n  <div class=\"visible content\">\n    <img src=\"{{data.image1}}\" class=\"ui {{design.size}} image\">\n  </div>\n  <div class=\"hidden content\">\n    <img src=\"{{data.image2}}\" class=\"ui {{design.size}} image\">\n  </div>\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "size",
            "value" : "medium",
            "choices" : "|mini|tiny|small|medium|large|big|huge|massive"
        }
    ],
    "data" : [ 
        {
            "name" : "image1",
            "value" : "/images/wireframe/square-image.png"
        }, 
        {
            "name" : "image2",
            "value" : "/images/wireframe/square-image.png"
        }
    ]
}

,
{
    "_id" : "fLAQ9A2TLRKi6qtvT",
    "parent" : "NYH8BDhF7sWRZxoes",
    "name" : "Basic",
    "content" : "<div class=\"ui basic modal\">\n  <i class=\"close icon\"></i>\n  <div class=\"header\">\n   {{data.title}}\n  </div>\n  <div class=\"image content\">\n    <div class=\"image\">\n      <i class=\"{{data.icon}} icon\"></i>\n    </div>\n    <div class=\"description\">\n      <p>{{data.text}}</p>\n    </div>\n  </div>\n  <div class=\"actions\">\n    <div class=\"two fluid ui inverted buttons\">\n      <div class=\"ui red basic inverted button\">\n        <i class=\"remove icon\"></i>\n        No\n      </div>\n      <div class=\"ui green basic inverted button\">\n        <i class=\"checkmark icon\"></i>\n        Yes\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "title",
            "value" : "Some Title"
        }, 
        {
            "name" : "icon",
            "value" : "archive",
            "choices" : "alarm|alarm slash|alarm outline|alarm slash outline|at|browser|bug|calendar outline|calendar|cloud|code|comment|comments|comment outline|comments outline|copyright|dashboard|dropdown|external square|external|eyedropper|feed|find|heartbeat|history|home|idea|inbox|lab|mail|mail outline|mail square|map|options|paint brush|payment|phone|phone square|privacy|protect|search|setting|settings|shop|sidebar|signal|sitemap|tag|tags|tasks|terminal|text telephone|ticket|trophy|wifi|desktop|disk outline|file archive outline|file audio outline|file code outline|file excel outline|file|file image outline|file outline|file pdf outline|file powerpoint outline|file text|file text outline|file video outline|file word outline|folder|folder open|folder open outline|folder outline|game|keyboard|laptop|level down|level up|mobile|power|plug|tablet|trash|trash outline|adjust|add user|add to cart|archive|ban|bookmark|call|call square|cloud download|cloud upload|compress|configure|download|edit|erase|exchange|external share|expand|filter|flag|flag outline|forward mail|hide|in cart|lock|pin|print|random|recycle|refresh|remove bookmark|remove user|repeat|reply all|reply|retweet|send|send outline|share alternate|share alternate square|share|share square|sign in|sign out|theme|translate|undo|unhide|unlock alternate|unlock|upload|wait|wizard|write|write square|announcement|birthday|help|help circle|info|info circle|warning|warning circle|warning sign|child|doctor|handicap|spy|student|user|users|female|gay|heterosexual|intergender|lesbian|male|man|neuter|non binary transgender|transgender|other gender|other gender horizontal|other gender vertical|woman|grid layout|list layout|block layout|zoom|zoom out|resize vertical|resize horizontal|maximize|crop|anchor|bar|bomb|book|bullseye|calculator|checkered flag|cocktail|diamond|fax|fire extinguisher|fire|gift|leaf|legal|lemon|life ring|lightning|magnet|money|moon|plane|puzzle|rain|road|rocket|shipping|soccer|suitcase|sun|travel|treatment|world|asterisk|certificate|circle|circle notched|circle thin|crosshairs|cube|cubes|ellipsis horizontal|ellipsis vertical|quote left|quote right|spinner|square|square outline|add square|check circle|check circle outline|check square|checkmark box|checkmark|minus circle|minus|minus square|minus square outline|move|plus|plus square outline|radio|remove circle|remove circle outline|remove|selected radio|toggle off|toggle on|area chart|bar chart|camera retro|newspaper|film|line chart|photo|pie chart|sound|angle double down|angle double left|angle double right|angle double up|angle down|angle left|angle right|angle up|arrow circle down|arrow circle left|arrow circle outline down|arrow circle outline left|arrow circle outline right|arrow circle outline up|arrow circle right|arrow circle up|arrow down|arrow left|arrow right|arrow up|caret down|caret left|caret right|caret up|chevron circle down|chevron circle left|chevron circle right|chevron circle up|chevron down|chevron left|chevron right|chevron up|long arrow down|long arrow left|long arrow right|long arrow up|pointing down|pointing left|pointing right|pointing up|toggle down|toggle left|toggle right|toggle up|barcode|css3|database|fork|html5|openid|qrcode|rss|rss square|server|empty heart|empty star|frown|heart|meh|smile|star half empty|star half|star|thumbs down|thumbs outline down|thumbs outline up|thumbs up|backward|eject|fast backward|fast forward|forward|music|mute|pause|play|record|step backward|step forward|stop|unmute|video play|video play outline|volume down|volume off|volume up|building|building outline|car|coffee|emergency|first aid|food|h|hospital|location arrow|marker|military|paw|space shuttle|spoon|taxi|tree|university|columns|sort alphabet ascending|sort alphabet descending|sort ascending|sort content ascending|sort content descending|sort descending|sort|sort numeric ascending|sort numeric descending|table|align center|align justify|align left|align right|attach|bold|copy|cut|font|header|indent|italic|linkify|list|ordered list|outdent|paragraph|paste|save|strikethrough|subscript|superscript|text height|text width|underline|unlink|unordered list|dollar|euro|lira|pound|ruble|rupee|won|shekel|yen|american express|discover|google wallet|mastercard|paypal card|paypal|stripe|visa|adn|android|angellist|apple|behance|behance square|bitbucket|bitbucket square|bitcoin|buysellads|codepen|connectdevelop|dashcube|delicious|deviantart|digg|dribbble|dropbox|drupal|empire|facebook|facebook square|flickr|forumbee|foursquare|git|git square|github alternate|github|github square|gittip|google|google plus|google plus square|hacker news|instagram|ioxhost|joomla|jsfiddle|lastfm|lastfm square|leanpub|linkedin|linkedin square|linux|maxcdn|meanpath|medium|pagelines|pied piper alternate|pied piper|pinterest|pinterest square|qq|rebel|reddit|reddit square|renren|sellsy|shirtsinbulk|simplybuilt|skyatlas|skype|slack|slideshare|soundcloud|spotify|stack exchange|stack overflow|steam|steam square|stumbleupon circle|stumbleupon|tencent weibo|trello|tumblr|tumblr square|twitch|twitter|twitter square|viacoin|vimeo|vine|vk|wechat|weibo|whatsapp|windows|wordpress|xing|xing square|yahoo|yelp|youtube|youtube play|youtube square"
        }, 
        {
            "name" : "text",
            "value" : "Your inbox is getting full, would you like us to enable automatic archiving of old messages?"
        }
    ]
}

,
{
    "_id" : "RDRhrixgrwShsMtiq",
    "parent" : "uDtXwboYQFg6ugYA7",
    "name" : "Type 1",
    "content" : "<div class=\"ui two column middle aligned very relaxed stackable grid\">\n  <div class=\"column\">\n    <div class=\"ui form\">\n      <div class=\"field\">\n        <label>Username</label>\n        <div class=\"ui left icon input\">\n          <input type=\"text\" placeholder=\"Username\">\n          <i class=\"user icon\"></i>\n        </div>\n      </div>\n      <div class=\"field\">\n        <label>Password</label>\n        <div class=\"ui left icon input\">\n          <input type=\"password\">\n          <i class=\"lock icon\"></i>\n        </div>\n      </div>\n      <div class=\"ui blue submit button\">Login</div>\n    </div>\n  </div>\n  <div class=\"ui vertical divider\">\n    Or\n  </div>\n  <div class=\"center aligned column\">\n    <div class=\"ui big green labeled icon button\">\n      <i class=\"signup icon\"></i>\n      Sign Up\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "q3GxRLXvdtN9T9ihn",
    "parent" : "uDtXwboYQFg6ugYA7",
    "name" : "RL Login",
    "content" : "<div class=\"ui two column middle aligned very relaxed stackable grid\">\n  <div class=\"column\">\n    <div class=\"ui form\">\n      <div class=\"field\">\n        <label>Username</label>\n        <div class=\"ui left icon input\">\n          <input type=\"text\" placeholder=\"Username\">\n          <i class=\"user icon\"></i>\n        </div>\n      </div>\n      <div class=\"field\">\n        <label>Password</label>\n        <div class=\"ui left icon input\">\n          <input type=\"password\">\n          <i class=\"lock icon\"></i>\n        </div>\n      </div>\n      <div class=\"ui blue submit button\">Login</div>\n   \n\n <div class=\"ui horizontal divider\">\n    Or\n  </div>\n\n<div>\n<button class=\"ui facebook button\">\n  <i class=\"facebook icon\"></i>\n  Facebook\n</button>\n<button class=\"ui google plus button\">\n  <i class=\"google plus icon\"></i>\n  Google Plus\n</button>\n<button class=\"ui youtube button\">\n  <i class=\"youtube icon\"></i>\n  YouTube\n</button>\n\n</div>\n</div>\n </div>\n \n  <div class=\"ui vertical divider\">\n    Or\n  </div>\n  <div class=\"column\">\n\n<div class=\"ui form\">\n      <div class=\"field\">\n        <label>Username</label>\n        <div class=\"ui left icon input\">\n          <input type=\"text\" placeholder=\"Username\">\n          <i class=\"user icon\"></i>\n        </div>\n      </div>\n      <div class=\"field\">\n        <label>Password</label>\n        <div class=\"ui left icon input\">\n          <input type=\"password\">\n          <i class=\"lock icon\"></i>\n        </div>\n      </div>\n\n<div class=\"field\">\n        <label>Password check</label>\n        <div class=\"ui left icon input\">\n          <input type=\"password\">\n          <i class=\"lock icon\"></i>\n        </div>\n      </div>\n\n<div class=\"field\">\n        <label>Phone Number</label>\n        <div class=\"ui left icon input\">\n          <input type=\"text\" placeholder=\"+40755512345\">\n          <i class=\"phone square icon\"></i>\n        </div>\n      </div>\n</div>\n<br>\n\n    <div class=\"ui big green labeled icon button\">\n      <i class=\"signup icon\"></i>\n      Sign Up\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "yFynL2mPCdqYgTrZ6",
    "parent" : "9TaNX2GnmohNiFbvi",
    "name" : "Types",
    "content" : "<table class=\"ui celled table\">\n  <thead>\n    <tr>\n{{#each data.headers}}\n    <th>{{this}}</th>\n    {{/each}}\n  </tr></thead>\n  <tbody>\n{{#each data.table}}\n    <tr>\n      {{#each this}}\n      <td>{{this}}</td>\n      {{/each}}\n    </tr>\n{{/each}}\n  </tbody>\n  <tfoot>\n    <tr><th colspan=\"3\">\n      <div class=\"ui right floated pagination menu\">\n        <a class=\"icon item\">\n          <i class=\"left chevron icon\"></i>\n        </a>\n        <a class=\"item\">1</a>\n        <a class=\"item\">2</a>\n        <a class=\"item\">3</a>\n        <a class=\"item\">4</a>\n        <a class=\"icon item\">\n          <i class=\"right chevron icon\"></i>\n        </a>\n      </div>\n    </th>\n  </tr></tfoot>\n</table>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "table",
            "value" : "cell 1: cell middle:next1|cell 1: cell middle:next2|cell 1: cell middle33:next3|cell 1: cell middle:next4|cell 1: cell middle:next5"
        }, 
        {
            "name" : "headers",
            "value" : "Header 1|Header 2| Header 3"
        }
    ]
}

,
{
    "_id" : "uMFqfGgrwPXu4cs8j",
    "parent" : "bK63TFAabjKzbuych",
    "name" : "Circular",
    "content" : "<div class=\"ui {{design.size}} {{design.transition}} {{design.circular}} reveal image\">\n  <img src=\"{{data.image1}}\" class=\"visible content\">\n  <img src=\"{{data.image2}}\" class=\"hidden content\">\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "size",
            "value" : "small",
            "choices" : "|mini|tiny|small|medium|large|big|huge|massive"
        }, 
        {
            "name" : "transition",
            "value" : "rotate left",
            "choices" : "rotate|rotate left|rotate right|move right|move left|move up|move down"
        }, 
        {
            "name" : "circular",
            "value" : "circular",
            "choices" : "|circular"
        }
    ],
    "data" : [ 
        {
            "name" : "image1",
            "value" : "/images/wireframe/square-image.png"
        }, 
        {
            "name" : "image2",
            "value" : "/images/avatar/nan.jpg"
        }
    ]
}

,
{
    "_id" : "zrjKL27T5pER4rWxx",
    "parent" : "vAtoYucfRK2Yoi7AL",
    "name" : "RL Component",
    "content" : "<div class=\"ui fluid search selection dropdown\">\n  <input type=\"hidden\" name=\"filter\">\n  <i class=\"dropdown icon\"></i>\n  <div class=\"default text\">{{data.text}}</div>\n  <div class=\"menu\">\n{{#each data.choices}}\n  <div class=\"item\" data-value=\"{{this.[0]}}\"><i class=\"{{this.[0]}} icon\"></i>{{this.[1]}}</div>\n{{/each}}\n</div>\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "choices",
            "value" : "spy:Some Character|doctor:Some other Character|github alternative:Monkey"
        }, 
        {
            "name" : "text",
            "value" : "Filter by..."
        }
    ]
}

,
{
    "_id" : "NX363agMaQrn7qEhe",
    "parent" : "e4yEKMHbxkuRfAByP",
    "name" : "Filter",
    "content" : "<div class=\"ui fluid search multiple selection dropdown\">\n  <input type=\"hidden\" name=\"filter\">\n  <i class=\"dropdown icon\"></i>\n  <div class=\"default text\"> {{data.text}}</div>\n  <div class=\"menu\">\n{{#each data.choices}}\n  <div class=\"item\" data-value=\"{{this.[0]}}\"><i class=\"{{this.[0]}} icon\"></i>{{this.[1]}}</div>\n{{/each}}\n</div>\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "choices",
            "value" : "spy:Some Character|doctor:Some other Character|github alternative:Monkey|shop:Owned by me"
        }, 
        {
            "name" : "text",
            "value" : "Filter by ..."
        }
    ]
}

,
{
    "_id" : "bS8XsNhkYyZjGwanF",
    "parent" : "e4yEKMHbxkuRfAByP",
    "name" : "vid containers",
    "content" : "<div class=\"ui {{data.colCount}} {{design.doubling}} cards\">\n{{#each data.items}}\n  <div class=\"ui card\" href=\"http://localhost:3000/video/{{this.[2]}}\">\n    <div class=\"image\">\n      <img src=\"{{this.[0]}}\">\n    </div>\n    <div class=\"extra\">\n\n      <div class=\"ui tiny statistic\">\n  <div class=\"value\">\n    {{this.[1]}}\n  </div>\n  <div class=\"label\">\n    Views\n  </div>\n</div>\n\n<div class=\"right floated author\">\n      <img class=\"ui avatar image\" src=\"/images/avatar/tom.jpg\"> Matt\n    </div>\n\n    </div>\n  </div>\n {{/each}}\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "doubling",
            "value" : "doubling",
            "choices" : "|doubling"
        }
    ],
    "data" : [ 
        {
            "name" : "items",
            "value" : "/images/wireframe/image-16by9.png:3:id3|/images/wireframe/image-16by9.png:5:iegs|/images/wireframe/image-16by9.png:3:reerwy|/images/wireframe/image-16by9.png:2|/images/wireframe/image-16by9.png:3|/images/wireframe/image-16by9.png:2"
        }, 
        {
            "name" : "colCount",
            "value" : "six",
            "choices" : "one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve"
        }
    ]
}

,
{
    "_id" : "6nnN2rxDJTwa5qiTo",
    "parent" : "e4yEKMHbxkuRfAByP",
    "name" : "vids embed",
    "content" : "<div class=\"ui {{data.colCount}} {{design.doubling}} cards\">\n{{#each data.items}}\n  <div class=\"ui card\" href=\"http://localhost:3000/video/{{this.[3]}}\">\n   \n <div class=\"ui embed\" data-source=\"youtube\" data-id=\"{{this.[0]}}\" data-placeholder=\"{{data.placeholder}}\">\n\n</div>\n\n\n    <div class=\"extra\">\n\n      <div class=\"ui tiny statistic\">\n  <div class=\"value\">\n    {{this.[1]}}\n  </div>\n  <div class=\"label icon\">\n    <i class=\"eye icon\"></i>\n  </div>\n</div>\n\n <div class=\"ui tiny statistic\">\n  <div class=\"value\">\n    {{this.[2]}}\n  </div>\n  <div class=\"label icon\">\n   <i class=\"heart icon\"></i>\n  </div>\n</div>\n\n\n\n\n<div class=\"right floated author\">\n      <img class=\"ui avatar image\" src=\"/images/avatar/tom.jpg\"> Matt\n\n<div class=\"ui circular button icon floated center\">\n        <i class=\"doctor icon\"></i> \n      </div>\n\n    </div>\n\n    </div>\n  </div>\n {{/each}}\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "placeholder",
            "value" : "/images/wireframe/image_16by9.png"
        }, 
        {
            "name" : "items",
            "value" : "pfdu_gTry8E:3:1:id3|pfdu_gTry8E:5:2:iegs|pfdu_gTry8E:3:2:reerwy|pfdu_gTry8E:2:1|pfdu_gTry8E:3:0|pfdu_gTry8E:2:1"
        }, 
        {
            "name" : "colCount",
            "value" : "four",
            "choices" : "one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve"
        }
    ],
    "design" : [ 
        {
            "name" : "doubling",
            "value" : "doubling",
            "choices" : "|doubling"
        }
    ]
}

,
{
    "_id" : "MnAbNXKanHexyNWcx",
    "parent" : "YyJRgN2hBBZkvoamD",
    "name" : "RL friends",
    "content" : "<div class=\"ui {{design.colCount}} doubling cards\">\n{{#each data.images}}\n  <div class=\"card\">\n\n<div class=\"blurring dimmable image\">\n      <div class=\"ui dimmer\">\n        <div class=\"content\">\n          <div class=\"center\">\n            <div class=\"ui link\"><i class=\"chat icon\"></i></div>\n<br><br>\n<div class=\"ui link\"><i class=\"remove user icon\"></i></div>\n          </div>\n        </div>\n      </div>\n      <img src=\"{{this.[0]}}\">\n    </div>\n\n\n\n\n    <div class=\"content\">\n      <a class=\"header\">{{this.[1]}}</a>\n      \n    </div>\n    <div class=\"extra content\">\n      <a>\n        <i class=\"users circular icon\"></i>\n        {{this.[3]}}\n      </a>\n    </div>\n  </div>\n{{/each}}\n\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "images",
            "value" : "/images/avatar/tom.jpg:Varoufakiss:Joined in Sep 2015:2 Friends|/images/avatar/nan.jpg:Merkel:Joined in Sep 2015:12 Friends|/images/avatar/tom.jpg:Hobama:Joined in Sep 2015:22 Friends|/images/avatar/tom.jpg:Varoufakiss:Joined in Sep 2015:2 Friends|/images/avatar/nan.jpg:Merkel:Joined in Sep 2015:12 Friends|/images/avatar/tom.jpg:Hobama:Joined in Sep 2015:22 Friends|/images/avatar/tom.jpg:Varoufakiss:Joined in Sep 2015:2 Friends|/images/avatar/nan.jpg:Merkel:Joined in Sep 2015:12 Friends|/images/avatar/tom.jpg:Hobama:Joined in Sep 2015:22 Friends"
        }
    ],
    "design" : [ 
        {
            "name" : "text1",
            "value" : "Remove"
        }, 
        {
            "name" : "colCount",
            "value" : "four",
            "choices" : "two|three|four|five|six|seven|eight|nine|ten"
        }
    ]
}

,
{
    "_id" : "X3WtYP8PuoH8T9SbJ",
    "parent" : "e4yEKMHbxkuRfAByP",
    "name" : "Reveal",
    "content" : "<div class=\"ui {{design.size}} {{design.transition}} image reveal\">\n  <div class=\"visible content\">\n    <img src=\"{{data.image1}}\" class=\"ui {{design.size}} image\">\n  </div>\n  <div class=\"hidden content\">\n    {{{data.message}}}\n  </div>\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "size",
            "value" : "medium",
            "choices" : "|mini|tiny|small|medium|large|big|huge|massive"
        }, 
        {
            "name" : "transition",
            "value" : "rotate right",
            "choices" : "rotate|rotate left|rotate right|move right|move left|move up|move down"
        }
    ],
    "data" : [ 
        {
            "name" : "image1",
            "value" : "/images/wireframe/square-image.png"
        }, 
        {
            "name" : "message",
            "value" : "<a class=\"ui red tag massive label\">$10.99</a>"
        }
    ]
}

,
{
    "_id" : "SnELAgoZCwtjoZ4ph",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Group size",
    "content" : "<div class=\"ui {{design.size}} {{design.color}} {{design.tag}} {{design.circular}} labels\">\n{{#each data.labels}}\n  <div class=\"ui label\" id=\"{{this.[1]}}\">\n    {{this.[0]}}\n  </div>\n {{/each}}\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "size",
            "value" : "huge",
            "choices" : "|mini|tiny|small|medium|large|big|huge|massive"
        }, 
        {
            "name" : "color",
            "value" : " ",
            "choices" : " |red|orange|yellow|olive|green|teal|blue|violet|purple|pink|brown|grey|black"
        }, 
        {
            "name" : "circular",
            "value" : " ",
            "choices" : " |circular"
        }, 
        {
            "name" : "tag",
            "value" : "tag",
            "choices" : " |tag"
        }
    ],
    "data" : [ 
        {
            "name" : "labels",
            "value" : "Label 1:id1|Label 2:id1|Label 3:id3|Label 4:id4"
        }
    ]
}

,
{
    "_id" : "PF7sDnDRmuevoQdKM",
    "parent" : "eAvaA2dRMbEjK2qgz",
    "name" : "Link",
    "content" : "<a class=\"ui label\">\n  <i class=\"{{data.icon}} icon\"></i> {{data.count}}\n</a>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "count",
            "value" : "23"
        }, 
        {
            "name" : "icon",
            "value" : "mail",
            "choices" : "alarm|alarm slash|alarm outline|alarm slash outline|at|browser|bug|calendar outline|calendar|cloud|code|comment|comments|comment outline|comments outline|copyright|dashboard|dropdown|external square|external|eyedropper|feed|find|heartbeat|history|home|idea|inbox|lab|mail|mail outline|mail square|map|options|paint brush|payment|phone|phone square|privacy|protect|search|setting|settings|shop|sidebar|signal|sitemap|tag|tags|tasks|terminal|text telephone|ticket|trophy|wifi|desktop|disk outline|file archive outline|file audio outline|file code outline|file excel outline|file|file image outline|file outline|file pdf outline|file powerpoint outline|file text|file text outline|file video outline|file word outline|folder|folder open|folder open outline|folder outline|game|keyboard|laptop|level down|level up|mobile|power|plug|tablet|trash|trash outline|adjust|add user|add to cart|archive|ban|bookmark|call|call square|cloud download|cloud upload|compress|configure|download|edit|erase|exchange|external share|expand|filter|flag|flag outline|forward mail|hide|in cart|lock|pin|print|random|recycle|refresh|remove bookmark|remove user|repeat|reply all|reply|retweet|send|send outline|share alternate|share alternate square|share|share square|sign in|sign out|theme|translate|undo|unhide|unlock alternate|unlock|upload|wait|wizard|write|write square|announcement|birthday|help|help circle|info|info circle|warning|warning circle|warning sign|child|doctor|handicap|spy|student|user|users|female|gay|heterosexual|intergender|lesbian|male|man|neuter|non binary transgender|transgender|other gender|other gender horizontal|other gender vertical|woman|grid layout|list layout|block layout|zoom|zoom out|resize vertical|resize horizontal|maximize|crop|anchor|bar|bomb|book|bullseye|calculator|checkered flag|cocktail|diamond|fax|fire extinguisher|fire|gift|leaf|legal|lemon|life ring|lightning|magnet|money|moon|plane|puzzle|rain|road|rocket|shipping|soccer|suitcase|sun|travel|treatment|world|asterisk|certificate|circle|circle notched|circle thin|crosshairs|cube|cubes|ellipsis horizontal|ellipsis vertical|quote left|quote right|spinner|square|square outline|add square|check circle|check circle outline|check square|checkmark box|checkmark|minus circle|minus|minus square|minus square outline|move|plus|plus square outline|radio|remove circle|remove circle outline|remove|selected radio|toggle off|toggle on|area chart|bar chart|camera retro|newspaper|film|line chart|photo|pie chart|sound|angle double down|angle double left|angle double right|angle double up|angle down|angle left|angle right|angle up|arrow circle down|arrow circle left|arrow circle outline down|arrow circle outline left|arrow circle outline right|arrow circle outline up|arrow circle right|arrow circle up|arrow down|arrow left|arrow right|arrow up|caret down|caret left|caret right|caret up|chevron circle down|chevron circle left|chevron circle right|chevron circle up|chevron down|chevron left|chevron right|chevron up|long arrow down|long arrow left|long arrow right|long arrow up|pointing down|pointing left|pointing right|pointing up|toggle down|toggle left|toggle right|toggle up|barcode|css3|database|fork|html5|openid|qrcode|rss|rss square|server|empty heart|empty star|frown|heart|meh|smile|star half empty|star half|star|thumbs down|thumbs outline down|thumbs outline up|thumbs up|backward|eject|fast backward|fast forward|forward|music|mute|pause|play|record|step backward|step forward|stop|unmute|video play|video play outline|volume down|volume off|volume up|building|building outline|car|coffee|emergency|first aid|food|h|hospital|location arrow|marker|military|paw|space shuttle|spoon|taxi|tree|university|columns|sort alphabet ascending|sort alphabet descending|sort ascending|sort content ascending|sort content descending|sort descending|sort|sort numeric ascending|sort numeric descending|table|align center|align justify|align left|align right|attach|bold|copy|cut|font|header|indent|italic|linkify|list|ordered list|outdent|paragraph|paste|save|strikethrough|subscript|superscript|text height|text width|underline|unlink|unordered list|dollar|euro|lira|pound|ruble|rupee|won|shekel|yen|american express|discover|google wallet|mastercard|paypal card|paypal|stripe|visa|adn|android|angellist|apple|behance|behance square|bitbucket|bitbucket square|bitcoin|buysellads|codepen|connectdevelop|dashcube|delicious|deviantart|digg|dribbble|dropbox|drupal|empire|facebook|facebook square|flickr|forumbee|foursquare|git|git square|github alternate|github|github square|gittip|google|google plus|google plus square|hacker news|instagram|ioxhost|joomla|jsfiddle|lastfm|lastfm square|leanpub|linkedin|linkedin square|linux|maxcdn|meanpath|medium|pagelines|pied piper alternate|pied piper|pinterest|pinterest square|qq|rebel|reddit|reddit square|renren|sellsy|shirtsinbulk|simplybuilt|skyatlas|skype|slack|slideshare|soundcloud|spotify|stack exchange|stack overflow|steam|steam square|stumbleupon circle|stumbleupon|tencent weibo|trello|tumblr|tumblr square|twitch|twitter|twitter square|viacoin|vimeo|vine|vk|wechat|weibo|whatsapp|windows|wordpress|xing|xing square|yahoo|yelp|youtube|youtube play|youtube square"
        }
    ]
}

,
{
    "_id" : "8ysLk8fvgny6xHjmf",
    "parent" : "pzCd4zKtba4vZMBWa",
    "name" : "or",
    "content" : "<div class=\"ui {{design.size}} buttons\">\n<div class=\"or\"></div>\n{{#each data.buttons }}\n  <button class=\"ui button\">{{this.[0]}}</button>\n  <div class=\"or\"></div>\n {{/each}}\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "size",
            "value" : "medium",
            "choices" : " |mini|tiny|small|medium|large|big|huge|massive"
        }
    ],
    "data" : [ 
        {
            "name" : "buttons",
            "value" : "one: |two: |three: "
        }
    ]
}

,
{
    "_id" : "NqCr24bRk6SLj3Dip",
    "parent" : "e4yEKMHbxkuRfAByP",
    "name" : "messages menu",
    "content" : "<div class=\"ui compact menu\">\n  <a class=\"item\">\n    <i class=\"icon chat\"></i> Chat Messages\n    <div class=\"floating ui red label\">22</div>\n  </a>\n  <a class=\"item\">\n    <i class=\"icon users\"></i> Friend Requests\n    <div class=\"floating ui teal label\">2</div>\n  </a>\n<a class=\"item\">\n    <i class=\"icon video\"></i> Videos by Friends\n    <div class=\"floating ui teal label\">3</div>\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "8Chddt4AFTRqdMAZj",
    "parent" : "4nN9A2jTMqv6CKNZ2",
    "name" : "menu labels",
    "content" : "<div class=\"ui {{design.size}}  {{design.vertical}} menu\">\n\n{{#each data.items}}\n  <a class=\"item\">\n    <i class=\"icon chat\"></i> {{this.[0]}}\n    <div class=\"floating ui teal label\">{{this.[1]}}</div>\n  </a>\n{{/each}}\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "vertical",
            "value" : "vertical",
            "choices" : " |vertical"
        }, 
        {
            "name" : "size",
            "value" : "large",
            "choices" : " |compact||mini|tiny|small|medium|large|big|huge|massive"
        }
    ],
    "data" : [ 
        {
            "name" : "items",
            "value" : "username1, username2, etc.:5|username1, username2, etc.:5|username1, username2, etc.:2|username1, username2:3|username1, username2, etc.:5"
        }
    ]
}

,
{
    "_id" : "8g4adnFyduwxCrMHK",
    "parent" : "5469cdBtap7qZFukB",
    "name" : "add friend",
    "content" : "<div class=\"ui fluid multiple search selection dropdown\">  <input type=\"hidden\" name=\"friends\">  <i class=\"dropdown icon\"></i>  <div class=\"default text\">+</div>  <div class=\"menu\">{{#each data.items}}  <div class=\"item\" data-value=\"{{this.[1]}}\"><img class=\"ui avatar image\" src=\"{{this.[0]}}\">{{this.[1]}}</div>{{/each}}</div> </div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "items",
            "value" : "/images/avatar/tom.jpg:Tom Some|/images/avatar/nan.jpg:Noretta"
        }
    ]
}

,
{
    "_id" : "FZbC8duubJGiBq5Qe",
    "parent" : "5469cdBtap7qZFukB",
    "name" : "message",
    "content" : "{{#if data.own}}\n<div class=\"ui segment fluid right aligned\"><img class=\"ui avatar image right floated top\" src=\"{{data.avatar}}\"> <span>{{data.message}}</span></div>\n{{else}}\n<div class=\"ui segment fluid left aligned\"><img class=\"ui avatar image left floated top\" src=\"{{data.avatar}}\"><span>{{data.message}}</span></div>\n{{/if}}",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "message",
            "value" : "One message without meaning, but long. One message without meaning, but long. One message without meaning, but long. One message without meaning, but long. One message without meaning, but long. One message without meaning, but long. One message without meaning, but long. "
        }, 
        {
            "name" : "avatar",
            "value" : "/images/avatar/tom.jpg"
        }, 
        {
            "name" : "own",
            "value" : "0"
        }
    ]
}

,
{
    "_id" : "2kydYqKF7NERuypFu",
    "parent" : "5469cdBtap7qZFukB",
    "name" : "message 2",
    "content" : "<div class=\"ui segment fluid left aligned\"><img class=\"ui avatar image left floated top\" src=\"{{data.avatar}}\"><span>{{data.message}}</span></div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "avatar",
            "value" : "/images/avatar/nan.jpg"
        }, 
        {
            "name" : "message",
            "value" : "Some other message. Some other message. Some other message. Some other message. Some other message. Some other message. Some other message. Some other message. Some other message. Some other message. Some other message. Some other message. "
        }
    ]
}

,
{
    "_id" : "vRux3XmGCbYjTHdWf",
    "parent" : "5469cdBtap7qZFukB",
    "name" : "send",
    "content" : "<div class=\"ui fluid\" style=\"position:absolute;bottom:0px;left: 0;right: 0;\"><div class=\"ui icon input\" style=\"width:100%\">  <input type=\"text\" placeholder=\"...\">  <i class=\"inverted circular chat link icon\"></i></div></div>",
    "isContainer" : false
}

,
{
    "_id" : "pEKc9LsYsvsRgjJfw",
    "parent" : "4nN9A2jTMqv6CKNZ2",
    "name" : "Login2",
    "content" : "<div class=\"ui form\">\n      <div class=\"field\">\n        <label></label>\n        <div class=\"ui left icon input\">\n          <input type=\"text\" placeholder=\"...\">\n          <i class=\"user icon\"></i>\n        </div>\n      </div>\n      <div class=\"field\">\n        <label></label>\n        <div class=\"ui left icon input\">\n          <input type=\"password\">\n          <i class=\"lock icon\"></i>\n        </div>\n      </div>\n</div>\n      <div class=\"ui blue submit button circular  icon\"><i class=\"{{data.icon}} icon\"></i></div>\n   \n\n\n<div class=\"ui link circular button\">{{data.recover}}</div>\n\n\n \n  <div class=\"ui horizontal divider\">\n    {{data.or}}\n  </div>\n  \n<button class=\"ui facebook circular button\">\n  <i class=\"facebook icon\"></i>\n  Facebook\n</button>\n<button class=\"ui google plus circular button\">\n  <i class=\"google plus icon\"></i>\n  Google Plus\n</button>\n<button class=\"ui youtube circular button\">\n  <i class=\"youtube icon\"></i>\n  YouTube\n</button>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "or",
            "value" : "Or"
        }, 
        {
            "name" : "recover",
            "value" : "Recover Password"
        }, 
        {
            "name" : "icon",
            "value" : "sign in",
            "choices" : "alarm|alarm slash|alarm outline|alarm slash outline|at|browser|bug|calendar outline|calendar|cloud|code|comment|comments|comment outline|comments outline|copyright|dashboard|dropdown|external square|external|eyedropper|feed|find|heartbeat|history|home|idea|inbox|lab|mail|mail outline|mail square|map|options|paint brush|payment|phone|phone square|privacy|protect|search|setting|settings|shop|sidebar|signal|sitemap|tag|tags|tasks|terminal|text telephone|ticket|trophy|wifi|desktop|disk outline|file archive outline|file audio outline|file code outline|file excel outline|file|file image outline|file outline|file pdf outline|file powerpoint outline|file text|file text outline|file video outline|file word outline|folder|folder open|folder open outline|folder outline|game|keyboard|laptop|level down|level up|mobile|power|plug|tablet|trash|trash outline|adjust|add user|add to cart|archive|ban|bookmark|call|call square|cloud download|cloud upload|compress|configure|download|edit|erase|exchange|external share|expand|filter|flag|flag outline|forward mail|hide|in cart|lock|pin|print|random|recycle|refresh|remove bookmark|remove user|repeat|reply all|reply|retweet|send|send outline|share alternate|share alternate square|share|share square|sign in|sign out|theme|translate|undo|unhide|unlock alternate|unlock|upload|wait|wizard|write|write square|announcement|birthday|help|help circle|info|info circle|warning|warning circle|warning sign|child|doctor|handicap|spy|student|user|users|female|gay|heterosexual|intergender|lesbian|male|man|neuter|non binary transgender|transgender|other gender|other gender horizontal|other gender vertical|woman|grid layout|list layout|block layout|zoom|zoom out|resize vertical|resize horizontal|maximize|crop|anchor|bar|bomb|book|bullseye|calculator|checkered flag|cocktail|diamond|fax|fire extinguisher|fire|gift|leaf|legal|lemon|life ring|lightning|magnet|money|moon|plane|puzzle|rain|road|rocket|shipping|soccer|suitcase|sun|travel|treatment|world|asterisk|certificate|circle|circle notched|circle thin|crosshairs|cube|cubes|ellipsis horizontal|ellipsis vertical|quote left|quote right|spinner|square|square outline|add square|check circle|check circle outline|check square|checkmark box|checkmark|minus circle|minus|minus square|minus square outline|move|plus|plus square outline|radio|remove circle|remove circle outline|remove|selected radio|toggle off|toggle on|area chart|bar chart|camera retro|newspaper|film|line chart|photo|pie chart|sound|angle double down|angle double left|angle double right|angle double up|angle down|angle left|angle right|angle up|arrow circle down|arrow circle left|arrow circle outline down|arrow circle outline left|arrow circle outline right|arrow circle outline up|arrow circle right|arrow circle up|arrow down|arrow left|arrow right|arrow up|caret down|caret left|caret right|caret up|chevron circle down|chevron circle left|chevron circle right|chevron circle up|chevron down|chevron left|chevron right|chevron up|long arrow down|long arrow left|long arrow right|long arrow up|pointing down|pointing left|pointing right|pointing up|toggle down|toggle left|toggle right|toggle up|barcode|css3|database|fork|html5|openid|qrcode|rss|rss square|server|empty heart|empty star|frown|heart|meh|smile|star half empty|star half|star|thumbs down|thumbs outline down|thumbs outline up|thumbs up|backward|eject|fast backward|fast forward|forward|music|mute|pause|play|record|step backward|step forward|stop|unmute|video play|video play outline|volume down|volume off|volume up|building|building outline|car|coffee|emergency|first aid|food|h|hospital|location arrow|marker|military|paw|space shuttle|spoon|taxi|tree|university|columns|sort alphabet ascending|sort alphabet descending|sort ascending|sort content ascending|sort content descending|sort descending|sort|sort numeric ascending|sort numeric descending|table|align center|align justify|align left|align right|attach|bold|copy|cut|font|header|indent|italic|linkify|list|ordered list|outdent|paragraph|paste|save|strikethrough|subscript|superscript|text height|text width|underline|unlink|unordered list|dollar|euro|lira|pound|ruble|rupee|won|shekel|yen|american express|discover|google wallet|mastercard|paypal card|paypal|stripe|visa|adn|android|angellist|apple|behance|behance square|bitbucket|bitbucket square|bitcoin|buysellads|codepen|connectdevelop|dashcube|delicious|deviantart|digg|dribbble|dropbox|drupal|empire|facebook|facebook square|flickr|forumbee|foursquare|git|git square|github alternate|github|github square|gittip|google|google plus|google plus square|hacker news|instagram|ioxhost|joomla|jsfiddle|lastfm|lastfm square|leanpub|linkedin|linkedin square|linux|maxcdn|meanpath|medium|pagelines|pied piper alternate|pied piper|pinterest|pinterest square|qq|rebel|reddit|reddit square|renren|sellsy|shirtsinbulk|simplybuilt|skyatlas|skype|slack|slideshare|soundcloud|spotify|stack exchange|stack overflow|steam|steam square|stumbleupon circle|stumbleupon|tencent weibo|trello|tumblr|tumblr square|twitch|twitter|twitter square|viacoin|vimeo|vine|vk|wechat|weibo|whatsapp|windows|wordpress|xing|xing square|yahoo|yelp|youtube|youtube play|youtube square"
        }
    ]
}

,
{
    "_id" : "NsdYqQGBejSMjNtJS",
    "parent" : "5469cdBtap7qZFukB",
    "name" : "add friend search",
    "content" : "<div class=\"ui fluid category search\">\n  <div class=\"ui icon input\">\n    <input class=\"prompt\" type=\"text\" placeholder=\"{{data.placeholder}}\">\n    <i class=\"search icon\"></i>\n  </div>\n  <div class=\"results\"></div>\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "placeholder",
            "value" : "Search friends..."
        }
    ]
}

,
{
    "_id" : "6b7zMfw7HnY5i5DzE",
    "parent" : "YyJRgN2hBBZkvoamD",
    "name" : "Reveal asset",
    "content" : "<div class=\"ui {{design.colCount}} doubling cards\">\n{{#each data.items}}\n  <div class=\"card\">\n\n<div class=\"blurring dimmable image\">\n      <div class=\"ui dimmer\">\n        <div class=\"content\">\n          <div class=\"center\">\n            <div class=\"ui link\"><i class=\"shop icon huge\"></i></div>\n\n          </div>\n        </div>\n      </div>\n      <img src=\"{{this.[0]}}\">\n    </div>\n\n\n\n\n    <div class=\"content\">\n<a class=\"header\">{{this.[1]}}</a>\n       </div>\n      \n    \n    <div class=\"extra content align right\">\n    <a class=\"ui red tag massive label\">{{this.[2]}}</a>   \n  </div>\n</div>\n{{/each}}\n\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "size",
            "value" : "medium",
            "choices" : "|mini|tiny|small|medium|large|big|huge|massive"
        }, 
        {
            "name" : "transition",
            "value" : "rotate right",
            "choices" : "rotate|rotate left|rotate right|move right|move left|move up|move down"
        }, 
        {
            "name" : "doubling",
            "value" : "doubling",
            "choices" : " |doubling"
        }
    ],
    "data" : [ 
        {
            "name" : "items",
            "value" : "/images/wireframe/square-image.png:some:$11.99|/images/wireframe/square-image.png:thing:$10.99|/images/wireframe/square-image.png:else:$12.99|/images/wireframe/square-image.png:some:$11.99"
        }, 
        {
            "name" : "colCount",
            "value" : "four",
            "choices" : "two|three|four|five|six|seven|eight|nine|ten"
        }
    ]
}

,
{
    "_id" : "49zWrprhMxaTYRybL",
    "parent" : "uDtXwboYQFg6ugYA7",
    "name" : "avatar dimmer",
    "content" : "<div class=\"ui circular small image\">\n  <div class=\"ui dimmer\">\n    <div class=\"content\">\n      <div class=\"center\">\n       <div class=\"ui link\"><i class=\"icon photo huge\"></i></div>\n      </div>\n    </div>\n  </div>\n  <img src=\"{{data.image}}\">\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "image",
            "value" : "/images/avatar/tom.jpg"
        }
    ]
}

,
{
    "_id" : "vgBgLZrSCLtqrjhHD",
    "parent" : "e4yEKMHbxkuRfAByP",
    "name" : "header centered",
    "content" : "<h2 class=\"ui {{design.align}} icon header\">\n<img class=\"ui image circular small\" src=\"{{data.image}}\">\n  {{data.text}}\n</h2>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "align",
            "value" : "center aligned",
            "choices" : " |center aligned|left aligned|right aligned"
        }
    ],
    "data" : [ 
        {
            "name" : "image",
            "value" : "/images/avatar/tom.jpg"
        }, 
        {
            "name" : "text",
            "value" : "Chris"
        }
    ]
}

,
{
    "_id" : "YuHTCR7XheLaXnn99",
    "parent" : "pzCd4zKtba4vZMBWa",
    "name" : "iconed group",
    "content" : "<div class=\"ui sticky fixed bottom\" style=\"right:0px;left:0px;text-align:center;\">\n<div class=\"ui buttons {{design.size}}\">\n{{# each data.items}}\n  <button class=\"ui icon button {{design.labeled}}\">\n    <i class=\"{{this.[0]}} icon\"></i>\n    {{this.[1]}}\n  </button>\n{{/each}}\n \n</div>\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "size",
            "value" : "massive",
            "choices" : " |mini|tiny|small|medium|large|big|huge|massive"
        }, 
        {
            "name" : "labeled",
            "value" : "labeled",
            "choices" : " |labeled"
        }
    ],
    "data" : [ 
        {
            "name" : "items",
            "value" : "cube:3|users:23|youtube:12|chat:3"
        }
    ]
}

,
{
    "_id" : "7woL7RgeDb9KYLvmo",
    "parent" : "5469cdBtap7qZFukB",
    "name" : "cards",
    "content" : "<div class=\"ui {{design.noCols}} doubling  cards\">\n{{#each data.items}}\n\n  <div class=\"card\">\n    <div class=\"ui blurring segment dimmable\">\n      <div class=\"ui dimmer\">\n        <div class=\"content\">\n          <div class=\"center\">\n            <div class=\"ui link\"><i class=\"chat huge link icon startchat\"></i></div>\n          </div>\n        </div>\n      </div>\n      {{this.[5]}}\n    </div>\n\n    <div class=\"content\">\n      <a class=\"header\">{{this.[0]}} </a>\n      <div class=\"meta\">\n\n\n        <div class=\"item\">{{this.[1]}}</div>\n      </div>\n      \n    </div>\n    <div class=\"extra content\">\n      <a>\n        <i class=\"users icon\"></i>\n       {{this.[2]}}\n      </a>\n      <a>\n        <i class=\"calendar icon\"></i>\n        {{this.[3]}}\n      </a>\n    </div>\n</div>\n\n{{/each}}\n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "items",
            "value" : "Khron:Loredana:2:31 Aug:chatID:snipet of text. snipet of text. snipet of text. snipet of text. snipet of text.|Loredana:Khron:2:31 Aug:chatID:snipet of text2. snipet of text2. snipet of text2. snipet of text2. |Loredana:Khron:2:31 Aug:chatID:snipet of text3. snipet of text3. snipet of text3. snipet of text3. "
        }
    ],
    "design" : [ 
        {
            "name" : "noCol",
            "value" : "ten",
            "choices" : " |two|three|four|five|six|seven|eight|nine|ten"
        }
    ]
}
,
{
    "_id" : "55e97bb4ffb70b649e790bea",
    "parent" : "WBkkypKLQ2QdQMGF2",
    "name" : "uikit",
    "isContainer" : false
}

,
{
    "_id" : "2NJwCY5NTLCWnmKT8",
    "parent" : "GB4KvrnwWhELHhXfc",
    "name" : "Groups",
    "content" : "<div data-uk-scrollspy=\"{cls:'uk-animation-fade', target:'.my-class', delay:300}\">\n\n    <!-- This item has no delay -->\n    <div class=\"my-class\">element</div>\n\n    <!-- This item has a delay of 300ms -->\n    <div class=\"my-class\">element 1</div>\n\n    <!-- This item has a delay of 600ms -->\n    <div class=\"my-class\">element 2</div>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "8S4p5tmeGr4zby8ck",
    "parent" : "GB4KvrnwWhELHhXfc",
    "name" : "Nav",
    "content" : "<ul class=\"uk-nav uk-nav-side\" data-uk-scrollspy-nav=\"{closest:'li', smoothscroll:true}\">\n    <li><a href=\"#my-id\">component</a></li>\n    <li><a href=\"#my-id2\">component 1</a></li>\n</ul>\n\n<div id=\"my-id\">component 2</div>\n<div id=\"my-id2\">component 3</div>",
    "isContainer" : false
}

,
{
    "_id" : "7rftLoQmYabG5CibT",
    "parent" : "r3f7CvLEoe8etQfZz",
    "name" : "Offset",
    "content" : "<a href=\"#my-id\" data-uk-smooth-scroll=\"{offset: 90}\">element</a>\n\n<a href=\"#my-id\" data-uk-smooth-scroll=\"{offset: -90}\">element 1</a>",
    "isContainer" : false
}

,
{
    "_id" : "iZLpHZLoG8TwMAwxA",
    "parent" : "SbQhKe83B3apnY5A5",
    "name" : "Sorting",
    "content" : "<ul id=\"my-id\" class=\"uk-subnav\">\n    <li data-uk-sort=\"my-category\"><a href=\"\"></a></li>\n    <li data-uk-sort=\"my-category:desc\"><a href=\"\"></a></li>\n</ul>\n\n<div data-uk-grid=\"{controls: '#my-id'}\">\n    <div data-my-category=\"a\">item</div>\n    <div data-my-category=\"b\">item 1</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "fzdGAuED2Z36j4ANm",
    "parent" : "56aDfdrHpBWiNatzS",
    "name" : "Usage",
    "content" : "<ul class=\"uk-dotnav\">\n    <li class=\"uk-active\"><a href=\"\">component</a></li>\n    <li><a href=\"\">component 1</a></li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "ujzzotkabAbvqWRvA",
    "parent" : "56aDfdrHpBWiNatzS",
    "name" : "And images",
    "content" : "<ul class=\"uk-dotnav uk-dotnav-contrast uk-flex-center\">\n    <li class=\"uk-active\"><a href=\"\">component</a></li>\n    <li><a href=\"\">component 1</a></li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "526vcJpvEvT3WzBam",
    "parent" : "56aDfdrHpBWiNatzS",
    "name" : "Vertical",
    "content" : "<ul class=\"uk-dotnav uk-flex-column\">\n    <li class=\"uk-active\"><a href=\"\">component</a></li>\n    <li><a href=\"\">component 1</a></li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "7vZWR8MBCftLgixgn",
    "parent" : "mxafXiT4T5Rj8pHJq",
    "name" : "Slidenav",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Slidenav",
            "value" : "div class=\"uk-slidenav-position\""
        }
    ]
}

,
{
    "_id" : "7qzgYq9BaaZv2RXug",
    "parent" : "7vZWR8MBCftLgixgn",
    "name" : "Usage",
    "content" : "<a href=\"\" class=\"uk-slidenav uk-slidenav-previous\"></a>\n<a href=\"\" class=\"uk-slidenav uk-slidenav-next\"></a>",
    "isContainer" : false
}

,
{
    "_id" : "icKz3pJJ5JpkTtdE2",
    "parent" : "7vZWR8MBCftLgixgn",
    "name" : "Position",
    "content" : "<div class=\"uk-slidenav-position\">\n    <img src=\"\" alt=\"\">\n    <a href=\"\" class=\"uk-slidenav uk-slidenav-previous\"></a>\n    <a href=\"\" class=\"uk-slidenav uk-slidenav-next\"></a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "aNTsxZ6QBDF475NPq",
    "parent" : "7vZWR8MBCftLgixgn",
    "name" : "And images",
    "content" : "<a href=\"\" class=\"uk-slidenav uk-slidenav-contrast uk-slidenav-previous\"></a>\n<a href=\"\" class=\"uk-slidenav uk-slidenav-contrast uk-slidenav-next\"></a>",
    "isContainer" : false
}

,
{
    "_id" : "G6eeXnCGLe6RYP4fc",
    "parent" : "mxafXiT4T5Rj8pHJq",
    "name" : "Dynamic pagination",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Dynamic pagination",
            "value" : "ul class=\"uk-pagination\" data-uk-pagination=\"{items:100, itemsOnPage:10}\"></ul"
        }
    ]
}

,
{
    "_id" : "vimQGurWTcSHZXgiR",
    "parent" : "G6eeXnCGLe6RYP4fc",
    "name" : "Usage",
    "content" : "<ul class=\"uk-pagination\" data-uk-pagination=\"{items:100, itemsOnPage:10}\"></ul>",
    "isContainer" : false
}

,
{
    "_id" : "yaPXXzTR3wr8oAyyL",
    "parent" : "tGXnqkDWxqCehnn6o",
    "name" : "Common",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Common",
            "value" : "form class=\"uk-form\""
        }
    ]
}

,
{
    "_id" : "kAEcYdZq4KRECQwzp",
    "parent" : "yaPXXzTR3wr8oAyyL",
    "name" : "Form advanced",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Form advanced",
            "value" : "form class=\"uk-form\""
        }
    ]
}

,
{
    "_id" : "kGrNy4yCTytLhnf7d",
    "parent" : "kAEcYdZq4KRECQwzp",
    "name" : "Usage",
    "content" : "<form class=\"uk-form\">\n    <input type=\"radio\">\n    <input type=\"checkbox\">\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "ausFGRPatcwF4GuEz",
    "parent" : "yaPXXzTR3wr8oAyyL",
    "name" : "Form file",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Form file",
            "value" : "div class=\"uk-form-file\""
        }
    ]
}

,
{
    "_id" : "9t2CcRqBMmXBBJdpm",
    "parent" : "bLNL2YR9d7tCNCZJw",
    "name" : "Icon",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Icon",
            "value" : "i class=\"uk-icon-cog\"></i"
        }
    ]
}

,
{
    "_id" : "kPRFvaGLYus67LDrz",
    "parent" : "9t2CcRqBMmXBBJdpm",
    "name" : "Hover",
    "content" : "<a href=\"\" class=\"uk-icon-hover uk-icon-github\"></a>",
    "isContainer" : false
}

,
{
    "_id" : "cERPCZQbdCpQtuqJo",
    "parent" : "9t2CcRqBMmXBBJdpm",
    "name" : "Button",
    "content" : "<a href=\"\" class=\"uk-icon-button uk-icon-github\"></a>",
    "isContainer" : false
}

,
{
    "_id" : "BYxevLv26cz7EdzdF",
    "parent" : "9t2CcRqBMmXBBJdpm",
    "name" : "Justify",
    "content" : "<a href=\"\" class=\"uk-icon-justify uk-icon-github\"></a>",
    "isContainer" : false
}

,
{
    "_id" : "ZZawAZzXZr9byCBtv",
    "parent" : "bLNL2YR9d7tCNCZJw",
    "name" : "Close",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Close",
            "value" : "a href=\"\" class=\"uk-close\"></a"
        }
    ]
}

,
{
    "_id" : "EZuCeiTKC2E566dj3",
    "parent" : "ZZawAZzXZr9byCBtv",
    "name" : "Usage",
    "content" : "<a href=\"\" class=\"uk-close\"></a>",
    "isContainer" : false
}

,
{
    "_id" : "dqQuRP6i6XAQTCtKN",
    "parent" : "ZZawAZzXZr9byCBtv",
    "name" : "Style modifier",
    "content" : "<a href=\"\" class=\"uk-close uk-close-alt\"></a>",
    "isContainer" : false
}

,
{
    "_id" : "K89vhbYv6gtmsgD4k",
    "parent" : "bLNL2YR9d7tCNCZJw",
    "name" : "Badge",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Badge",
            "value" : "div class=\"uk-badge\">element</div"
        }
    ]
}

,
{
    "_id" : "njWqotRZQwv8nPfd4",
    "parent" : "K89vhbYv6gtmsgD4k",
    "name" : "Usage",
    "content" : "<div class=\"uk-badge\">element</div>",
    "isContainer" : false
}

,
{
    "_id" : "cSGSoGNkFEfqMEo6B",
    "parent" : "K89vhbYv6gtmsgD4k",
    "name" : "Notification",
    "content" : "<div class=\"uk-badge uk-badge-notification\">modify</div>",
    "isContainer" : false
}

,
{
    "_id" : "kxfzcXqBvkWbMHXMq",
    "parent" : "bLNL2YR9d7tCNCZJw",
    "name" : "Alert",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Alert",
            "value" : "div class=\"uk-alert\" data-uk-alert"
        }
    ]
}

,
{
    "_id" : "vaYAbmR3nJYxTyeCE",
    "parent" : "kxfzcXqBvkWbMHXMq",
    "name" : "Usage",
    "content" : "<div class=\"uk-alert\">element</div>",
    "isContainer" : false
}

,
{
    "_id" : "usp4WKnoyCBdDPzww",
    "parent" : "kxfzcXqBvkWbMHXMq",
    "name" : "Close buttons",
    "content" : "<div class=\"uk-alert\" data-uk-alert>\n    <a href=\"\" class=\"uk-alert-close uk-close\"></a>\n    <p>element</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "R4nQ2JruQxRxSJcyW",
    "parent" : "kxfzcXqBvkWbMHXMq",
    "name" : "Size modifier",
    "content" : "<div class=\"uk-alert uk-alert-large\">modify</div>",
    "isContainer" : false
}

,
{
    "_id" : "QWvHAk6sNy8kkXg3X",
    "parent" : "bLNL2YR9d7tCNCZJw",
    "name" : "Thumbnail",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Thumbnail",
            "value" : "img class=\"uk-thumbnail\" src=\"\" alt=\"\""
        }
    ]
}

,
{
    "_id" : "cCv45RpvF3xWRe89J",
    "parent" : "QWvHAk6sNy8kkXg3X",
    "name" : "Markup",
    "content" : "<div class=\"uk-thumbnail uk-thumbnail-expand\">modify</div>",
    "isContainer" : false
}

,
{
    "_id" : "64oxq6zEWnHHRLma4",
    "parent" : "bLNL2YR9d7tCNCZJw",
    "name" : "Overlay",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Overlay",
            "value" : "figure class=\"uk-overlay\""
        }
    ]
}

,
{
    "_id" : "8bjJCbTWAfrfivztb",
    "parent" : "64oxq6zEWnHHRLma4",
    "name" : "Anchor",
    "content" : "<figure class=\"uk-overlay\">\n    <img src=\"\" width=\"\" height=\"\" alt=\"\">\n    <div class=\"uk-overlay-panel\">element</div>\n    <a class=\"uk-position-cover\" href=\"\"></a>\n</figure>",
    "isContainer" : false
}

,
{
    "_id" : "yQeKqqd5LSxFfRY39",
    "parent" : "bLNL2YR9d7tCNCZJw",
    "name" : "Animation",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Animation",
            "value" : "div class=\"uk-animation-fade\">element</div"
        }
    ]
}

,
{
    "_id" : "FbZSi5qffPE77Watb",
    "parent" : "yQeKqqd5LSxFfRY39",
    "name" : "Usage",
    "content" : "<div class=\"uk-animation-fade\">element</div>",
    "isContainer" : false
}

,
{
    "_id" : "KgGG8zYgWXrPYyZLZ",
    "parent" : "yQeKqqd5LSxFfRY39",
    "name" : "Reverse modifier",
    "content" : "<div class=\"uk-animation-fade uk-animation-reverse\">modify</div>",
    "isContainer" : false
}

,
{
    "_id" : "QEvARgJD3EHbbzciG",
    "parent" : "yQeKqqd5LSxFfRY39",
    "name" : "Duration modifier",
    "content" : "<div class=\"uk-animation-slide-right uk-animation-15\">modify</div>",
    "isContainer" : false
}

,
{
    "_id" : "vgkPss6nt7E7JFwTC",
    "parent" : "yQeKqqd5LSxFfRY39",
    "name" : "Hover",
    "content" : "<div class=\"uk-animation-hover uk-animation-fade\">element</div>\n\n<div class=\"uk-animation-hover\">\n    <div class=\"uk-animation-slide-right\">element 1</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "tjJkcQ6yriod3ZRq2",
    "parent" : "bLNL2YR9d7tCNCZJw",
    "name" : "Contrast",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Contrast",
            "value" : "div class=\"uk-contrast\">component</div"
        }
    ]
}

,
{
    "_id" : "L29qQTDKcrNYS3XZN",
    "parent" : "tjJkcQ6yriod3ZRq2",
    "name" : "Usage",
    "content" : "<div class=\"uk-contrast\">component</div>",
    "isContainer" : false
}

,
{
    "_id" : "3SLgsocxYmopNgWb5",
    "parent" : "55e97bb4ffb70b649e790bea",
    "name" : "Javascript",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Javascript",
            "value" : "div data-uk-dropdown"
        }
    ]
}

,
{
    "_id" : "SyiaFzG2iKrqdkBrA",
    "parent" : "3SLgsocxYmopNgWb5",
    "name" : "Dropdown",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Dropdown",
            "value" : "div data-uk-dropdown"
        }
    ]
}

,
{
    "_id" : "rBxqHkN86EwD5MfLF",
    "parent" : "SyiaFzG2iKrqdkBrA",
    "name" : "Delayed",
    "content" : "<div class=\"uk-dropdown\" data-uk-dropdown=\"{delay: 1000}\">\n    item\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Lzx8q9gKFzBhrtWEg",
    "parent" : "SyiaFzG2iKrqdkBrA",
    "name" : "With navs",
    "content" : "<div class=\"uk-dropdown\">\n    <ul class=\"uk-nav uk-nav-dropdown\">component</ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "xPhmXunxFBzEz4wLk",
    "parent" : "SyiaFzG2iKrqdkBrA",
    "name" : "Alignment modifiers",
    "content" : "<div class=\"uk-dropdown uk-dropdown-flip\">\n    modify\n</div>\n\n<div class=\"uk-dropdown uk-dropdown-up\">\n    modify 1\n</div>\n\n<div class=\"uk-dropdown uk-dropdown-center\">\n    modify 2\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "mCT7HDKDn37PHuqW9",
    "parent" : "SyiaFzG2iKrqdkBrA",
    "name" : "Automatic flip",
    "content" : "<div id=\"my-id\">\n    <div class=\"uk-button-dropdown\" data-uk-dropdown=\"{boundary:'#my-id'}\">item</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "2fhcWvi2GD4vXCeQG",
    "parent" : "SyiaFzG2iKrqdkBrA",
    "name" : "Grid",
    "content" : "<div class=\"uk-dropdown uk-dropdown-width-2\">\n\n    <div class=\"uk-grid uk-dropdown-grid\">\n        <div class=\"uk-width-1-2\">\n            <ul class=\"uk-nav uk-nav-dropdown uk-panel\">component</ul>\n            <div class=\"uk-panel\">component 1</div>\n        </div>\n\n        <div class=\"uk-width-1-2\">\n            <div class=\"uk-panel\">component 2</div>\n        </div>\n    </div>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "g2f8XmEHf4n2jXHb9",
    "parent" : "SyiaFzG2iKrqdkBrA",
    "name" : "Small modifier",
    "content" : "<div class=\"uk-dropdown uk-dropdown-small\">modify</div>",
    "isContainer" : false
}

,
{
    "_id" : "p7GTZxB6DxhM3GnfQ",
    "parent" : "SyiaFzG2iKrqdkBrA",
    "name" : "Scrollable modifier",
    "content" : "<div class=\"uk-dropdown uk-dropdown-scrollable\">modify</div>",
    "isContainer" : false
}

,
{
    "_id" : "YuHTkLNmy7LtwCc5R",
    "parent" : "3SLgsocxYmopNgWb5",
    "name" : "Modal",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Modal",
            "value" : "div id=\"my-id\" class=\"uk-modal\""
        }
    ]
}

,
{
    "_id" : "RGTrC5a4TLSCr5Wrc",
    "parent" : "YuHTkLNmy7LtwCc5R",
    "name" : "Header and footer",
    "content" : "<div class=\"uk-modal\">\n    <div class=\"uk-modal-dialog\">\n        <div class=\"uk-modal-header\">element</div>\n        element 1\n        <div class=\"uk-modal-footer\">element 2</div>\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "SY3WgE829F3HqkXN8",
    "parent" : "YuHTkLNmy7LtwCc5R",
    "name" : "Caption",
    "content" : "<div class=\"uk-modal\">\n    <div class=\"uk-modal-dialog\">\n        <div class=\"uk-modal-caption\">element</div>\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "HDDgXx5vZ8tW2ECFL",
    "parent" : "YuHTkLNmy7LtwCc5R",
    "name" : "Lightbox modifier",
    "content" : "<!-- This is the anchor toggling the modal -->\n<a href=\"#my-id\" data-uk-modal>modify</a>\n\n<!-- This is the modal -->\n<div id=\"my-id\" class=\"uk-modal\">\n    <div class=\"uk-modal-dialog uk-modal-dialog-lightbox\">\n        <a href=\"\" class=\"uk-modal-close uk-close uk-close-alt\"></a>\n        <img src=\"\" alt=\"\">\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "PaSHb3xi5xxZMMchS",
    "parent" : "YuHTkLNmy7LtwCc5R",
    "name" : "Spinner",
    "content" : "<div class=\"uk-modal\">\n    <div class=\"uk-modal-dialog\">\n        <div class=\"uk-modal-spinner\">element</div>\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Mr66tGopFHfq7ANgR",
    "parent" : "YuHTkLNmy7LtwCc5R",
    "name" : "Center modal",
    "content" : "<a href=\"#my-id\" data-uk-modal=\"{center:true}\"></a>",
    "isContainer" : false
}

,
{
    "_id" : "NtjDy4oPj7ZZ22KNg",
    "parent" : "YuHTkLNmy7LtwCc5R",
    "name" : "Large dialog modifier",
    "content" : "<div class=\"uk-modal-dialog uk-modal-dialog-large\">modify</div>",
    "isContainer" : false
}

,
{
    "_id" : "FP3EjkA2egcr9iu2B",
    "parent" : "YuHTkLNmy7LtwCc5R",
    "name" : "Overflow container",
    "content" : "<div class=\"uk-modal-dialog\">\n    <p>element</p>\n    <div class=\"uk-overflow-container\">element 1</div>\n    <p>element 2</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "NumThFRugf3JuJhgf",
    "parent" : "3SLgsocxYmopNgWb5",
    "name" : "Off-canvas",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Off-canvas",
            "value" : "div id=\"my-id\" class=\"uk-offcanvas\""
        }
    ]
}

,
{
    "_id" : "aMoSkiXRjuNtLH9Wj",
    "parent" : "NumThFRugf3JuJhgf",
    "name" : "Usage",
    "content" : "<!-- This is an anchor toggling the off-canvas sidebar -->\n<a href=\"#my-id\" data-uk-offcanvas>element</a>\n\n<!-- This is a button toggling the off-canvas sidebar -->\n<button class=\"uk-button\" data-uk-offcanvas=\"{target:'#my-id'}\">element 1</button>\n\n<!-- This is the off-canvas sidebar -->\n<div id=\"my-id\" class=\"uk-offcanvas\">\n    <div class=\"uk-offcanvas-bar\">element 2</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Q72q2rxd53RBqCABA",
    "parent" : "NumThFRugf3JuJhgf",
    "name" : "Flip modifier",
    "content" : "<div id=\"my-id\" class=\"uk-offcanvas\">\n    <div class=\"uk-offcanvas-bar uk-offcanvas-bar-flip\">modify</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "sawuyQubGjtcsRzBx",
    "parent" : "NumThFRugf3JuJhgf",
    "name" : "Navs",
    "content" : "<!-- This is the button toggling the off-canvas sidebar -->\n<button class=\"uk-button\" data-uk-offcanvas=\"{target:'#my-id'}\">element</button>\n\n<!-- This is the off-canvas sidebar -->\n<div id=\"my-id\" class=\"uk-offcanvas\">\n    <div class=\"uk-offcanvas-bar\">\n        <ul class=\"uk-nav uk-nav-offcanvas\" data-uk-nav>element 1</ul>\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "mqT7DNgMNgLGJrZg4",
    "parent" : "NumThFRugf3JuJhgf",
    "name" : "Panels",
    "content" : "<!-- This is the button toggling the off-canvas sidebar -->\n<button class=\"uk-button\" data-uk-offcanvas=\"{target:'#my-id'}\">item</button>\n\n<!-- This is the off-canvas sidebar -->\n<div id=\"my-id\" class=\"uk-offcanvas\">\n    <div class=\"uk-offcanvas-bar\">\n        <div class=\"uk-panel\">item 1</div>\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "sHw8GsmomdSaodTrn",
    "parent" : "3SLgsocxYmopNgWb5",
    "name" : "Switcher",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Switcher",
            "value" : "ul id=\"my-id\" class=\"uk-switcher\""
        }
    ]
}

,
{
    "_id" : "yRihWdDA3p7Cz9zD2",
    "parent" : "sHw8GsmomdSaodTrn",
    "name" : "Usage",
    "content" : "<!-- This is the container of the toggling elements -->\n<ul data-uk-switcher=\"{connect:'#my-id'}\">\n    <li><a href=\"\">component</a></li>\n</ul>\n\n<!-- This is the container of the content items -->\n<ul id=\"my-id\" class=\"uk-switcher\">\n    <li>component 1</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "tnnb3Lx2RLdpiuGPk",
    "parent" : "sHw8GsmomdSaodTrn",
    "name" : "Connect multiple items",
    "content" : "<!-- This is the nav containing the toggling elements -->\n<ul data-uk-switcher=\"{connect:'#my-id-one, #my-id-two'}\">\n    <li><a href=\"\">item</a></li>\n</ul>\n\n<!-- These are the containers of the content items -->\n<ul id=\"my-id-one\" class=\"uk-switcher\">\n    <li>item 1</li>\n</ul>\n\n<ul id=\"my-id-two\" class=\"uk-switcher\">\n    <li>item 2</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "Xp4MCqjzL7L9Tm4je",
    "parent" : "sHw8GsmomdSaodTrn",
    "name" : "Animations",
    "content" : "<!-- This is the container of the toggling elements -->\n<ul data-uk-switcher=\"{connect:'#my-id', animation: 'fade'}\">\n    <li><a href=\"\">item</a></li>\n</ul>\n\n<!-- This is the container of the content items -->\n<ul id=\"my-id\" class=\"uk-switcher\">\n    <li>item 1</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "EoeLEoMLMxrkTJagf",
    "parent" : "sHw8GsmomdSaodTrn",
    "name" : "Custom animations",
    "content" : "<!-- This is the container of the toggling elements -->\n<ul data-uk-switcher=\"{connect:'#my-id', animation: 'uk-animation-fade, uk-animation-slide-left'}\">\n    <li><a href=\"\">component</a></li>\n</ul>\n\n<!-- This is the container of the content items -->\n<ul id=\"my-id\" class=\"uk-switcher\">\n    <li>component 1</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "4S7NwsEo9ArvXY7NY",
    "parent" : "sHw8GsmomdSaodTrn",
    "name" : "With subnav",
    "content" : "<!-- This is the subnav containing the toggling elements -->\n<ul class=\"uk-subnav uk-subnav-pill\" data-uk-switcher=\"{connect:'#my-id'}\">\n    <li><a href=\"\">component</a></li>\n</ul>\n\n<!-- This is the container of the content items -->\n<ul id=\"my-id\" class=\"uk-switcher\">\n    <li>component 1</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "opAwnWt3W6SDyLfad",
    "parent" : "sHw8GsmomdSaodTrn",
    "name" : "With tabs",
    "content" : "<!-- This is the tabbed navigation containing the toggling elements -->\n<ul class=\"uk-tab\" data-uk-tab=\"{connect:'#my-id'}\">\n    <li><a href=\"\">component</a></li>\n</ul>\n\n<!-- This is the container of the content items -->\n<ul id=\"my-id\" class=\"uk-switcher uk-margin\">\n    <li>component 1</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "tzWdKA3rHfErAifmf",
    "parent" : "sHw8GsmomdSaodTrn",
    "name" : "Vertical tab",
    "content" : "<!-- This is the left vertical tabbed navigation -->\n<div class=\"uk-grid\">\n    <div class=\"uk-width-medium-1-2\">\n        <!-- This is the vertical tabbed navigation containing the toggling elements -->\n        <ul class=\"uk-tab uk-tab-left\" data-uk-tab=\"{connect:'#my-id'}\">component</ul>\n    </div>\n    <div class=\"uk-width-medium-1-2\">\n        <!-- This is the container of the content items -->\n        <ul id=\"my-id\" class=\"uk-switcher\">component 1</ul>\n    </div>\n</div>\n\n<!-- This is the right vertical tabbed navigation -->\n<div class=\"uk-grid\">\n    <div class=\"uk-width-medium-1-2 uk-push-1-2\">\n        <!-- This is the vertical tabbed navigation containing the toggling elements -->\n        <ul class=\"uk-tab uk-tab-right\" data-uk-tab=\"{connect:'#my-id'}\">compnent 2</ul>\n    </div>\n    <div class=\"uk-width-medium-1-2 uk-pull-1-2\">\n        <!-- This is the container of the content items -->\n        <ul id=\"my-id\" class=\"uk-switcher\">component 3</ul>\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Xg5a7rAJnHtZ2wB23",
    "parent" : "3SLgsocxYmopNgWb5",
    "name" : "Toggle",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Toggle",
            "value" : "div id=\"my-id\">element</div"
        }
    ]
}

,
{
    "_id" : "LpQ92Suk4pQkoZvvm",
    "parent" : "Xg5a7rAJnHtZ2wB23",
    "name" : "Usage",
    "content" : "<button class=\"uk-button\" data-uk-toggle=\"{target:'#my-id'}\">element</button>\n\n<div id=\"my-id\">element 1</div>",
    "isContainer" : false
}

,
{
    "_id" : "iDwnppfvD9trX47Af",
    "parent" : "Xg5a7rAJnHtZ2wB23",
    "name" : "Multiple items",
    "content" : "<button class=\"uk-button\" data-uk-toggle=\"{target:'.my-class'}\">item</button>\n\n<div class=\"my-class\">item 1</div>\n<div class=\"my-class uk-hidden\">item 2</div>",
    "isContainer" : false
}

,
{
    "_id" : "nb8LvTPwmG7aPe9sv",
    "parent" : "Xg5a7rAJnHtZ2wB23",
    "name" : "Custom class",
    "content" : "<button class=\"uk-button\" data-uk-toggle=\"{target:'#my-id', cls:'uk-panel-box-primary'}\">item</button>\n\n<div id=\"my-id\" class=\"uk-panel uk-panel-box\">item 1</div>",
    "isContainer" : false
}

,
{
    "_id" : "zZMf99wFL7pqnnXCQ",
    "parent" : "Xg5a7rAJnHtZ2wB23",
    "name" : "Animations",
    "content" : "<button class=\"uk-button\" data-uk-toggle=\"{target:'#my-id', animation:'uk-animation-slide-left, uk-animation-slide-bottom'}\">component</button>\n\n<div id=\"my-id\">component 1</div>",
    "isContainer" : false
}

,
{
    "_id" : "GB4KvrnwWhELHhXfc",
    "parent" : "3SLgsocxYmopNgWb5",
    "name" : "Scrollspy",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Scrollspy",
            "value" : "div data-uk-scrollspy=\"{cls:'uk-animation-fade'}\">component</div"
        }
    ]
}

,
{
    "_id" : "h5J8bA5HgyWpANgCK",
    "parent" : "GB4KvrnwWhELHhXfc",
    "name" : "Usage",
    "content" : "<div data-uk-scrollspy=\"{cls:'uk-animation-fade'}\">component</div>\n\n<div data-uk-scrollspy=\"{cls:'uk-animation-fade', repeat: true}\">component 1</div>\n\n<div data-uk-scrollspy=\"{cls:'uk-animation-fade', delay:900}\">component 2</div>",
    "isContainer" : false
}

,
{
    "_id" : "r3f7CvLEoe8etQfZz",
    "parent" : "3SLgsocxYmopNgWb5",
    "name" : "Smooth scroll",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Smooth scroll",
            "value" : "a href=\"#my-id\" class=\"uk-button\" data-uk-smooth-scroll>element</a"
        }
    ]
}

,
{
    "_id" : "yCvsPGbDmuxAgm3Zu",
    "parent" : "r3f7CvLEoe8etQfZz",
    "name" : "Usage",
    "content" : "<a href=\"#my-id\" class=\"uk-button\" data-uk-smooth-scroll>element</a>",
    "isContainer" : false
}

,
{
    "_id" : "xdhQt5a4HY6ACT4xA",
    "parent" : "SbQhKe83B3apnY5A5",
    "name" : "Gutter",
    "content" : "<div data-uk-grid=\"{gutter: 20}\">item</div>",
    "isContainer" : false
}

,
{
    "_id" : "mxafXiT4T5Rj8pHJq",
    "parent" : "tGXnqkDWxqCehnn6o",
    "name" : "Navigations",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Navigations",
            "value" : "ul class=\"uk-dotnav\""
        }
    ]
}

,
{
    "_id" : "56aDfdrHpBWiNatzS",
    "parent" : "mxafXiT4T5Rj8pHJq",
    "name" : "Dotnav",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Dotnav",
            "value" : "ul class=\"uk-dotnav\""
        }
    ]
}

,
{
    "_id" : "TJkv73uGEeszDRDPs",
    "parent" : "ausFGRPatcwF4GuEz",
    "name" : "Usage",
    "content" : "<div class=\"uk-form-file\">\n    <button class=\"uk-button\">element</button>\n    <input type=\"file\">\n</div>\n\n<div class=\"uk-form-file\">Text<input type=\"file\"></div>",
    "isContainer" : false
}

,
{
    "_id" : "etQ5YQLA2NBhNo7kT",
    "parent" : "yaPXXzTR3wr8oAyyL",
    "name" : "Form password",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Form password",
            "value" : "form class=\"uk-form\""
        }
    ]
}

,
{
    "_id" : "wjMYLJRdrQkxLqMYW",
    "parent" : "etQ5YQLA2NBhNo7kT",
    "name" : "Usage",
    "content" : "<form class=\"uk-form\">\n    <div class=\"uk-form-password\">\n        <input type=\"password\">\n        <a href=\"\" class=\"uk-form-password-toggle\" data-uk-form-password>element</a>\n    </div>\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "XvheuEuJLbfJaTjJd",
    "parent" : "yaPXXzTR3wr8oAyyL",
    "name" : "Form select",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Form select",
            "value" : "div class=\"uk-form-select\" data-uk-form-select"
        }
    ]
}

,
{
    "_id" : "xwicnSQut2RYwPtXz",
    "parent" : "XvheuEuJLbfJaTjJd",
    "name" : "Usage",
    "content" : "<div class=\"uk-form-select\" data-uk-form-select>\n    <span></span>\n    <select>\n        <option value=\"\">element</option>\n        <option value=\"\">element 1</option>\n    </select>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "SgCtAsFsv49bcr7Qp",
    "parent" : "XvheuEuJLbfJaTjJd",
    "name" : "As a button",
    "content" : "<div class=\"uk-button uk-form-select\" data-uk-form-select>element</div>",
    "isContainer" : false
}

,
{
    "_id" : "CfT9RKPkf2A8WmAxH",
    "parent" : "XvheuEuJLbfJaTjJd",
    "name" : "As an anchor",
    "content" : "<div class=\"uk-form-select\" data-uk-form-select=\"{target:'a'}\">\n    <a></a>\n    <select>element</select>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Y8vBB58waM8uD7wJJ",
    "parent" : "yaPXXzTR3wr8oAyyL",
    "name" : "Placeholder",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Placeholder",
            "value" : "div class=\"uk-placeholder\">component</div"
        }
    ]
}

,
{
    "_id" : "NQ4d7Cd5559An59RS",
    "parent" : "Y8vBB58waM8uD7wJJ",
    "name" : "Usage",
    "content" : "<div class=\"uk-placeholder\">element</div>",
    "isContainer" : false
}

,
{
    "_id" : "DTTCmghp5smBTZ4Jb",
    "parent" : "yaPXXzTR3wr8oAyyL",
    "name" : "Progress",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Progress",
            "value" : "div class=\"uk-progress\""
        }
    ]
}

,
{
    "_id" : "Dw3novoQtRErj4jYf",
    "parent" : "DTTCmghp5smBTZ4Jb",
    "name" : "Usage",
    "content" : "<div class=\"uk-progress\">\n    <div class=\"uk-progress-bar\" style=\"width: 40%;\">40%</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "LcXYFngFjkmcTFtET",
    "parent" : "DTTCmghp5smBTZ4Jb",
    "name" : "Size modifiers",
    "content" : "<div class=\"uk-progress uk-progress-mini\">modify</div>\n<div class=\"uk-progress uk-progress-small\">modify 1</div>",
    "isContainer" : false
}

,
{
    "_id" : "kzihhZirNknFWWhdT",
    "parent" : "DTTCmghp5smBTZ4Jb",
    "name" : "Color modifiers",
    "content" : "<div class=\"uk-progress uk-progress-success\">modify</div>\n<div class=\"uk-progress uk-progress-warning\">modify 1</div>\n<div class=\"uk-progress uk-progress-danger\">modify 2</div>",
    "isContainer" : false
}

,
{
    "_id" : "2LAnzcDj8vQsssL4K",
    "parent" : "DTTCmghp5smBTZ4Jb",
    "name" : "Striped",
    "content" : "<div class=\"uk-progress uk-progress-striped\">item</div>",
    "isContainer" : false
}

,
{
    "_id" : "pxBcdXWFaW9v9mocK",
    "parent" : "DTTCmghp5smBTZ4Jb",
    "name" : "Striped 2",
    "content" : "<div class=\"uk-progress uk-progress-striped uk-active\">item</div>",
    "isContainer" : false
}

,
{
    "_id" : "Goh5BekkqTeKDSCJM",
    "parent" : "DTTCmghp5smBTZ4Jb",
    "name" : "Combinable",
    "content" : "<div class=\"uk-progress uk-progress-small uk-progress-danger uk-progress-striped uk-active\">modify</div>",
    "isContainer" : false
}

,
{
    "_id" : "N64CnXm56ZKe5D7NY",
    "parent" : "tGXnqkDWxqCehnn6o",
    "name" : "Javascript",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Javascript",
            "value" : "a href=\"my-image.jpg\" data-uk-lightbox title=\"\">component</a"
        }
    ]
}

,
{
    "_id" : "dPcSFjuxAkGgbCEfE",
    "parent" : "N64CnXm56ZKe5D7NY",
    "name" : "Lightbox",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Lightbox",
            "value" : "a href=\"my-image.jpg\" data-uk-lightbox title=\"\">component</a"
        }
    ]
}

,
{
    "_id" : "prGsQRzZZBr9wmc7s",
    "parent" : "dPcSFjuxAkGgbCEfE",
    "name" : "Usage",
    "content" : "<a href=\"my-image.jpg\" data-uk-lightbox title=\"\">component</a>",
    "isContainer" : false
}

,
{
    "_id" : "6fJqx3NYi3TnLdJgF",
    "parent" : "dPcSFjuxAkGgbCEfE",
    "name" : "Groups",
    "content" : "<a href=\"\" data-uk-lightbox=\"{group:'my-group'}\">component</a>",
    "isContainer" : false
}

,
{
    "_id" : "aP82cpSgumSKPHQe5",
    "parent" : "N64CnXm56ZKe5D7NY",
    "name" : "Autocomplete",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Autocomplete",
            "value" : "input type=\"text\""
        }
    ]
}

,
{
    "_id" : "xeArGJibYmYRCJsg3",
    "parent" : "aP82cpSgumSKPHQe5",
    "name" : "Usage",
    "content" : "<div class=\"uk-autocomplete uk-form\" data-uk-autocomplete=\"{source:'my-autocomplete.json'}\">\n    <input type=\"text\">\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "zZ8XhAh7pNZoEnvAj",
    "parent" : "aP82cpSgumSKPHQe5",
    "name" : "Custom templates",
    "content" : "<div class=\"uk-autocomplete uk-form\" data-uk-autocomplete=\"{source:'my-autocomplete.json'}\">\n    <input type=\"text\">\n    \n        <ul class=\"uk-nav uk-nav-autocomplete uk-autocomplete-results\">\n            {{#each data.items}}\n            <li data-value=\"{{ this.[0] }}\">\n                <a>\n                    {{ this.[0]}}\n                    <div>{{{ this.[1] }}}</div>\n                </a>\n            </li>\n            {{/each}}\n        </ul>\n    \n</div>",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "items",
            "value" : "hi:hi|there:there"
        }
    ]
}

,
{
    "_id" : "M3Y3phzjdapTHgRYD",
    "parent" : "N64CnXm56ZKe5D7NY",
    "name" : "Datepicker",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Datepicker",
            "value" : "form class=\"uk-form\""
        }
    ]
}

,
{
    "_id" : "9EkYTq4TRcdoC53gz",
    "parent" : "M3Y3phzjdapTHgRYD",
    "name" : "Usage",
    "content" : "<form class=\"uk-form\">\n    <input type=\"\" data-uk-datepicker=\"{format:'DD.MM.YYYY'}\">\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "dqjGhd2jPwT7tc4bM",
    "parent" : "55e97bb4ffb70b649e790bea",
    "name" : "Layout",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Layout",
            "value" : "div class=\"uk-grid\""
        }
    ]
}

,
{
    "_id" : "AdigDQjeroRjLgAgL",
    "parent" : "dqjGhd2jPwT7tc4bM",
    "name" : "Grid",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Grid",
            "value" : "div class=\"uk-grid\""
        }
    ]
}

,
{
    "_id" : "BSa3WzSdfezuFpw9j",
    "parent" : "AdigDQjeroRjLgAgL",
    "name" : "Usage",
    "content" : "<div class=\"uk-grid\">\n    <div class=\"uk-width-1-2\">element</div>\n    <div class=\"uk-width-1-2\">element 1</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "L9YyGSWBNnXjyKPFy",
    "parent" : "AdigDQjeroRjLgAgL",
    "name" : "Nested",
    "content" : "<div class=\"uk-grid\">\n    <div class=\"uk-width-1-2\">item</div>\n    <div class=\"uk-width-1-2\">\n        <div class=\"uk-grid\">\n            <div class=\"uk-width-1-2\">item 1</div>\n            <div class=\"uk-width-1-2\">item 2</div>\n        </div>\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "PLH3gAShwE5WdzRPp",
    "parent" : "AdigDQjeroRjLgAgL",
    "name" : "Divider",
    "content" : "<div class=\"uk-grid uk-grid-divider\">element</div>\n<hr class=\"uk-grid-divider\">\n<div class=\"uk-grid uk-grid-divider\">element 1</div>",
    "isContainer" : false
}

,
{
    "_id" : "b6t2Hz4tyGjdqskae",
    "parent" : "AdigDQjeroRjLgAgL",
    "name" : "Source ordering",
    "content" : "<div class=\"uk-grid\">\n    <div class=\"uk-width-medium-1-2 uk-push-1-2\">item</div>\n    <div class=\"uk-width-medium-1-2 uk-pull-1-2\">item 1</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "78CGQF3gy8j7dg7Px",
    "parent" : "AdigDQjeroRjLgAgL",
    "name" : "Match column heights",
    "content" : "<div class=\"uk-grid\" data-uk-grid-match>element</div>",
    "isContainer" : false
}

,
{
    "_id" : "gc7P3fWgJTaY5SYXk",
    "parent" : "AdigDQjeroRjLgAgL",
    "name" : "Match height of panels",
    "content" : "<div class=\"uk-grid uk-grid-match\" data-uk-grid-match=\"{target:'.uk-panel'}\">\n    <div class=\"uk-width-medium-1-3\">\n        <div class=\"uk-panel\">item</div>\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "MXEuSqZwMQLRSzvni",
    "parent" : "AdigDQjeroRjLgAgL",
    "name" : "Wrap multiple rows",
    "content" : "<ul class=\"uk-grid\" data-uk-grid-margin>\n\n    <!-- These elements have a width in percent -->\n    <li class=\"uk-width-medium-1-5\">element</li>\n    <li class=\"uk-width-medium-3-10\">element 1</li>\n\n    <!-- These elements have a width in pixel -->\n    <li class=\"uk-width\" style=\"width: 100px;\">element 2</li>\n    <li class=\"uk-width\" style=\"width: 150px;\">element 3</li>\n\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "Kxyv2ohm6qCuPNm8o",
    "parent" : "AdigDQjeroRjLgAgL",
    "name" : "Even grid columns",
    "content" : "<ul class=\"uk-grid uk-grid-width-1-5\">\n    <li>element</li>\n    <li>element 1</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "fo66FdXodJBiJyALN",
    "parent" : "AdigDQjeroRjLgAgL",
    "name" : "Responsive width",
    "content" : "<ul class=\"uk-grid uk-grid-width-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-5\">\n    <li>item</li>\n    <li>item 1</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "cyf4pm3LjRefKTBoW",
    "parent" : "dqjGhd2jPwT7tc4bM",
    "name" : "Panel",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Panel",
            "value" : "div class=\"uk-panel\""
        }
    ]
}

,
{
    "_id" : "wGEExHdGxL43K2JJr",
    "parent" : "cyf4pm3LjRefKTBoW",
    "name" : "Usage",
    "content" : "<div class=\"uk-panel\">\n    <div class=\"uk-panel-badge uk-badge\">element</div>\n    <h3 class=\"uk-panel-title\">element 1</h3>\n    element 2\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "hmMtGqaze5sxdatwP",
    "parent" : "cyf4pm3LjRefKTBoW",
    "name" : "In a grid",
    "content" : "<div class=\"uk-grid\">\n    <div class=\"uk-width-medium-1-2\">\n        <div class=\"uk-panel\">component</div>\n    </div>\n    <div class=\"uk-width-medium-1-2\">\n        <div class=\"uk-panel\">component 1</div>\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "jmeqaM9cPMHSgyZnL",
    "parent" : "cyf4pm3LjRefKTBoW",
    "name" : "Modifiers",
    "content" : "<div class=\"uk-panel uk-panel-box\">modifier</div>",
    "isContainer" : false
}

,
{
    "_id" : "LvkQJSshBdyymr8f6",
    "parent" : "cyf4pm3LjRefKTBoW",
    "name" : "Box primary",
    "content" : "<div class=\"uk-panel uk-panel-box uk-panel-box-primary\">modify</div>",
    "isContainer" : false
}

,
{
    "_id" : "k2t5o6eYM9FcHRisd",
    "parent" : "cyf4pm3LjRefKTBoW",
    "name" : "Box secondary",
    "content" : "<div class=\"uk-panel uk-panel-box uk-panel-box-secondary\">modify</div>",
    "isContainer" : false
}

,
{
    "_id" : "RX243WYNrCPgeryzn",
    "parent" : "cyf4pm3LjRefKTBoW",
    "name" : "Hover",
    "content" : "<a class=\"uk-panel uk-panel-hover\" href=\"\">item</a>",
    "isContainer" : false
}

,
{
    "_id" : "Rf6W9b6q8Hc3r3r3a",
    "parent" : "cyf4pm3LjRefKTBoW",
    "name" : "Header",
    "content" : "<div class=\"uk-panel uk-panel-header\">item</div>",
    "isContainer" : false
}

,
{
    "_id" : "LouXH9iRWSgRnDecT",
    "parent" : "cyf4pm3LjRefKTBoW",
    "name" : "Space",
    "content" : "<div class=\"uk-panel uk-panel-space\">item</div>",
    "isContainer" : false
}

,
{
    "_id" : "qHJLkYjJYvYrs4Kox",
    "parent" : "cyf4pm3LjRefKTBoW",
    "name" : "Divider",
    "content" : "<div class=\"uk-grid\">\n    <div class=\"uk-width-medium-1-2\">\n        <div class=\"uk-panel uk-panel-divider\">component</div>\n        <div class=\"uk-panel uk-panel-divider\">component 1</div>\n        <div class=\"uk-panel uk-panel-divider\">component 2</div>\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ssjJ9FQFwS6YC98mA",
    "parent" : "cyf4pm3LjRefKTBoW",
    "name" : "Box with teaser",
    "content" : "<div class=\"uk-panel uk-panel-box\">\n    <div class=\"uk-panel-teaser\">\n        <img src=\"\" alt=\"\">\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "E4jgk6hFYn2JzNvDD",
    "parent" : "cyf4pm3LjRefKTBoW",
    "name" : "With icons",
    "content" : "<div class=\"uk-panel\">\n    <h3 class=\"uk-panel-title\"><i class=\"uk-icon-*\"></i>component</h3>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "kTxsPuXuLgLHBJsBh",
    "parent" : "dqjGhd2jPwT7tc4bM",
    "name" : "Block",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Block",
            "value" : "div class=\"uk-block\">component</div"
        }
    ]
}

,
{
    "_id" : "vb8tbjsds7YrkH9tX",
    "parent" : "kTxsPuXuLgLHBJsBh",
    "name" : "Usage",
    "content" : "<div class=\"uk-block\">component</div>",
    "isContainer" : false
}

,
{
    "_id" : "6p2x6NWLJAsxiqhHr",
    "parent" : "kTxsPuXuLgLHBJsBh",
    "name" : "Modifiers",
    "content" : "<div class=\"uk-block uk-block-primary\">modify</div>",
    "isContainer" : false
}

,
{
    "_id" : "KXk89AYhG4yr2oDde",
    "parent" : "kTxsPuXuLgLHBJsBh",
    "name" : "Padding",
    "content" : "<div class=\"uk-block uk-block-large\">component</div>",
    "isContainer" : false
}

,
{
    "_id" : "TfMzA389qxTTtPjd9",
    "parent" : "dqjGhd2jPwT7tc4bM",
    "name" : "Article",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Article",
            "value" : "article class=\"uk-article\""
        }
    ]
}

,
{
    "_id" : "97tEc4PPNcd5yr7Cd",
    "parent" : "TfMzA389qxTTtPjd9",
    "name" : "Title",
    "content" : "<article class=\"uk-article\">\n    <h1 class=\"uk-article-title\">component</h1>\n    <p class=\"uk-article-meta\">component 1</p>\n    <p class=\"uk-article-lead\">component 2</p>\n    component 4\n    <hr class=\"uk-article-divider\">\n    component 5\n</article>",
    "isContainer" : false
}

,
{
    "_id" : "9Za57w5ATe4GiLbxk",
    "parent" : "dqjGhd2jPwT7tc4bM",
    "name" : "Comment",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Comment",
            "value" : "article class=\"uk-comment\""
        }
    ]
}

,
{
    "_id" : "49ifuhXkHYj6pKGMi",
    "parent" : "9Za57w5ATe4GiLbxk",
    "name" : "Usage",
    "content" : "<article class=\"uk-comment\">\n    <header class=\"uk-comment-header\">\n        <img class=\"uk-comment-avatar\" src=\"\" alt=\"\">\n        <h4 class=\"uk-comment-title\">component</h4>\n        <div class=\"uk-comment-meta\">component 1</div>\n    </header>\n    <div class=\"uk-comment-body\">component 2</div>\n</article>",
    "isContainer" : false
}

,
{
    "_id" : "FyuMEXPrRfYivHy96",
    "parent" : "9Za57w5ATe4GiLbxk",
    "name" : "Lists",
    "content" : "<ul class=\"uk-comment-list\">\n    <li>\n        <article class=\"uk-comment\">element</article>\n        <ul>\n            <li><article class=\"uk-comment\">.element 1</article></li>\n        </ul>\n    </li>\n    <li><article class=\"uk-comment\">element 2</article></li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "SsEbJbjQKGzvF5Af4",
    "parent" : "9Za57w5ATe4GiLbxk",
    "name" : "Modifier",
    "content" : "<article class=\"uk-comment uk-comment-primary\">modify</article>",
    "isContainer" : false
}

,
{
    "_id" : "YZZCWuAKGDAxEh8nz",
    "parent" : "9Za57w5ATe4GiLbxk",
    "name" : "Subnav",
    "content" : "<ul class=\"uk-comment-meta uk-subnav uk-subnav-line\">\n    <li>element</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "cHjXAAW2qEjv8P9JT",
    "parent" : "dqjGhd2jPwT7tc4bM",
    "name" : "Utility",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Utility",
            "value" : "div class=\"uk-clearfix\""
        }
    ]
}

,
{
    "_id" : "h4CMdbATQ4kQj4rWC",
    "parent" : "cHjXAAW2qEjv8P9JT",
    "name" : "Container",
    "content" : "<div class=\"uk-width-medium-1-2 uk-container-center\">element</div>",
    "isContainer" : false
}

,
{
    "_id" : "GDhHg2AouA4Dg926G",
    "parent" : "cHjXAAW2qEjv8P9JT",
    "name" : "Clearing and floating",
    "content" : "<div class=\"uk-clearfix\">\n    <div class=\"uk-float-right\">item</div>\n    <div class=\"uk-float-left\">item 1</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "nT5HgT4Z9QYnPubmJ",
    "parent" : "cHjXAAW2qEjv8P9JT",
    "name" : "Clearing and floating",
    "content" : "<div class=\"uk-clearfix\">\n    <div class=\"uk-float-right\">element</div>\n    <div class=\"uk-float-left\">element 1</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "zvxehkLFiPkEZr39E",
    "parent" : "cHjXAAW2qEjv8P9JT",
    "name" : "Alignment",
    "content" : "<p class=\"uk-clearfix\">\n    <img class=\"uk-align-medium-right\" src=\"\" alt=\"\">\n    element\n</p>",
    "isContainer" : false
}

,
{
    "_id" : "E5LgyzgsumhQGbnEF",
    "parent" : "cHjXAAW2qEjv8P9JT",
    "name" : "Vertical alignment 1",
    "content" : "<div class=\"uk-vertical-align\">\n    <div class=\"uk-vertical-align-middle\">\n    item\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "JeZKkFHGY8m4HBPKE",
    "parent" : "cHjXAAW2qEjv8P9JT",
    "name" : "Vertical alignment 2",
    "content" : "<div class=\"uk-vertical-align\">\n    <div class=\"uk-vertical-align-bottom\">\n    item\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "mkszAX9CtGcsJtGQ5",
    "parent" : "cHjXAAW2qEjv8P9JT",
    "name" : "Center the entire page",
    "content" : "<html class=\"uk-height-1-1\">\n    component\n    <body class=\"uk-height-1-1\">\n        <div class=\"uk-vertical-align\">\n            <div class=\"uk-vertical-align-middle\">component 1</div>\n        </div>\n    </body>\n</html>",
    "isContainer" : false
}

,
{
    "_id" : "jjGxn34hXoxGLZHKt",
    "parent" : "cHjXAAW2qEjv8P9JT",
    "name" : "Responsive objects",
    "content" : "<video controls class=\"uk-responsive-width\"></video>\n\n<img class=\"uk-responsive-height\" src=\"\" alt=\"\">",
    "isContainer" : false
}

,
{
    "_id" : "BtyoS8rXSJ9obfHk9",
    "parent" : "cHjXAAW2qEjv8P9JT",
    "name" : "Auto margin",
    "content" : "<p data-uk-margin>\n    <button class=\"uk-button\">element</button>\n    <button class=\"uk-button\">element 1</button>\n</p>",
    "isContainer" : false
}

,
{
    "_id" : "X3R4bTZCsyTkZ9PyN",
    "parent" : "cHjXAAW2qEjv8P9JT",
    "name" : "Border radius",
    "content" : "<img class=\"uk-border-rounded\" src=\"\" alt=\"\">\n<img class=\"uk-border-circle\" src=\"\" alt=\"\">",
    "isContainer" : false
}

,
{
    "_id" : "uqTStEe6svAYvfxjx",
    "parent" : "cHjXAAW2qEjv8P9JT",
    "name" : "Heading large",
    "content" : "<h1 class=\"uk-heading-large\">item</h1>",
    "isContainer" : false
}

,
{
    "_id" : "uwES6Jk7od8vic2tn",
    "parent" : "cHjXAAW2qEjv8P9JT",
    "name" : "Link muted",
    "content" : "<a class=\"uk-link-muted\">element</a>\n\n<h1 class=\"uk-link-muted\"><a>element 1</a></h1>\n\n<ul class=\"uk-link-muted\">\n    <li><a>element 2</a></li>\n    <li><a>element 3</a></li>\n    <li><a>element 4</a></li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "2hSBEsMaL8E7NBvu3",
    "parent" : "cHjXAAW2qEjv8P9JT",
    "name" : "Scrollable preformatted text",
    "content" : "<!-- This is sample code to demonstrate preformatted text with a scrollbar. -->\n\n<div class=\"uk-grid\">\n    <div class=\"uk-width-medium-1-2\">\n        <div class=\"uk-panel uk-panel-box uk-text-left\">item</div>\n    </div>\n    <div class=\"uk-width-medium-1-2\">\n        <div class=\"uk-panel uk-panel-box uk-text-right\">item 1</div>\n    </div>\n</div>\n<div class=\"uk-grid\">\n    <div class=\"uk-width-medium-1-2\">\n        <div class=\"uk-panel uk-panel-box uk-text-center\">item 2</div>\n    </div>\n    <div class=\"uk-width-medium-1-2\">\n        <div class=\"uk-panel uk-panel-box uk-text-justify\">item 3</div>\n    </div>\n</div>\n\n<div class=\"uk-grid\">\n    <div class=\"uk-width-medium-1-2\">\n        <div class=\"uk-panel uk-panel-box uk-text-break\">item 4</div>\n    </div>\n    <div class=\"uk-width-medium-1-2\">\n        <div class=\"uk-panel uk-panel-box\"><p class=\"uk-margin-remove uk-text-truncate\">item 5</p></div>\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "f49rCtsoPRXmne9fp",
    "parent" : "cHjXAAW2qEjv8P9JT",
    "name" : "Scrollable box",
    "content" : "<div class=\"uk-scrollable-box\">\n    <ul class=\"uk-list\">\n        <li><label><input type=\"checkbox\">item</label></li>\n        <li><label><input type=\"checkbox\">item 1</label></li>\n    </ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "bAw4kLMPdFdvNM5M2",
    "parent" : "cHjXAAW2qEjv8P9JT",
    "name" : "Overflow container",
    "content" : "<div class=\"uk-overflow-container\">element</div>",
    "isContainer" : false
}

,
{
    "_id" : "vWcaS7dN3568tSXQf",
    "parent" : "cHjXAAW2qEjv8P9JT",
    "name" : "Visibility",
    "content" : "<div class=\"uk-visible-hover\">\n    <div class=\"uk-hidden\">element</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "qJZftghkvDLD8YnFi",
    "parent" : "dqjGhd2jPwT7tc4bM",
    "name" : "Flex",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Flex",
            "value" : "div class=\"uk-flex\""
        }
    ]
}

,
{
    "_id" : "byEgds6JCDbCiqZAM",
    "parent" : "qJZftghkvDLD8YnFi",
    "name" : "Usage",
    "content" : "<div class=\"uk-flex\">\n    <div>element</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "c9HsEBhd4wTXsNc4C",
    "parent" : "qJZftghkvDLD8YnFi",
    "name" : "Alignment",
    "content" : "<div class=\"uk-flex uk-flex-middle uk-flex-space-between\">element</div>",
    "isContainer" : false
}

,
{
    "_id" : "Yq53dhu9C3Jm83dmj",
    "parent" : "qJZftghkvDLD8YnFi",
    "name" : "Direction",
    "content" : "<div class=\"uk-flex uk-flex-column uk-flex-column-reverse\">element</div>",
    "isContainer" : false
}

,
{
    "_id" : "noAEXqjpPa5vE8S4c",
    "parent" : "qJZftghkvDLD8YnFi",
    "name" : "Wrap",
    "content" : "<div class=\"uk-flex uk-flex-wrap uk-flex-wrap-reverse uk-flex-wrap-space-around\">element</div>",
    "isContainer" : false
}

,
{
    "_id" : "eLPa6c7dpgq2seR7u",
    "parent" : "qJZftghkvDLD8YnFi",
    "name" : "Item order",
    "content" : "<div class=\"uk-flex\">\n   <div class=\"uk-flex-order-first\">item</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "b5nQ7RoxKQriLYmd2",
    "parent" : "dqjGhd2jPwT7tc4bM",
    "name" : "Cover",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Cover",
            "value" : "div class=\"uk-cover\""
        }
    ]
}

,
{
    "_id" : "MLEoCtKL6pSqLhi7R",
    "parent" : "b5nQ7RoxKQriLYmd2",
    "name" : "Usage",
    "content" : "<div class=\"uk-cover-background\">item</div>",
    "isContainer" : false
}

,
{
    "_id" : "tPHB8zzGPjxrL7Nom",
    "parent" : "b5nQ7RoxKQriLYmd2",
    "name" : "Video",
    "content" : "<div class=\"uk-cover\">\n    <video class=\"uk-cover-object\" width=\"\" height=\"\">\n        <source src=\"\" type=\"\">\n    </video>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "B9dmG4HLotMBe6vzp",
    "parent" : "b5nQ7RoxKQriLYmd2",
    "name" : "Iframe",
    "content" : "<div class=\"uk-cover\">\n    <iframe data-uk-cover src=\"\" width=\"\" height=\"\" frameborder=\"0\" allowfullscreen></iframe>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "pq88Jmfs4ca7ydHkm",
    "parent" : "b5nQ7RoxKQriLYmd2",
    "name" : "Responsive",
    "content" : "<div class=\"uk-cover-background\">\n    <img class=\"uk-invisible\" src=\"\" width=\"\" height=\"\" alt=\"\">\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "LqBCNitsq89TMGN3i",
    "parent" : "b5nQ7RoxKQriLYmd2",
    "name" : "Video 1",
    "content" : "<div class=\"uk-cover uk-position-relative\">\n    <img class=\"uk-invisible\" src=\"\" width=\"\" height=\"\" alt=\"\">\n    <video class=\"uk-cover-object uk-position-absolute\" width=\"\" height=\"\">\n        <source src=\"\" type=\"\">\n    </video>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "FeW2MkDg7eWd4BkEK",
    "parent" : "b5nQ7RoxKQriLYmd2",
    "name" : "Position",
    "content" : "<div class=\"uk-cover-background uk-position-relative\">\n    <img class=\"uk-invisible\" src=\"\" width=\"\" height=\"\" alt=\"\">\n    <div class=\"uk-position-cover uk-flex uk-flex-center uk-flex-middle\">item</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "yMFo37jtFsTuvFivY",
    "parent" : "55e97bb4ffb70b649e790bea",
    "name" : "Navigations",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Navigations",
            "value" : "ul class=\"uk-nav\""
        }
    ]
}

,
{
    "_id" : "4fkYbbcjnwMmqj5Mk",
    "parent" : "yMFo37jtFsTuvFivY",
    "name" : "Nav",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Nav",
            "value" : "ul class=\"uk-nav\""
        }
    ]
}

,
{
    "_id" : "Mmz7gA8YZotk5NxhM",
    "parent" : "4fkYbbcjnwMmqj5Mk",
    "name" : "Usage",
    "content" : "<ul class=\"uk-nav\">\n    <li><a href=\"#\">component</a></li>\n    <li class=\"uk-active\"><a href=\"#\">component 1</a></li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "45HDPcon6vXT6hRvr",
    "parent" : "4fkYbbcjnwMmqj5Mk",
    "name" : "Nested navs",
    "content" : "<ul class=\"uk-nav uk-nav-parent-icon\">\n    <li class=\"uk-parent\"><a href=\"#\">item</a>\n        <ul class=\"uk-nav-sub\">\n            <li><a href=\"#\">item 1</a>\n                <ul>item 2</ul>\n            </li>\n        </ul>\n    </li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "7NAt9cRjNAsREeoJY",
    "parent" : "4fkYbbcjnwMmqj5Mk",
    "name" : "Acordion 1",
    "content" : "<ul class=\"uk-nav uk-nav-parent-icon\" data-uk-nav>\n    <li class=\"uk-parent\">\n        <a href=\"#\">item</a>\n        <ul class=\"uk-nav-sub\">\n            <li><a href=\"#\">item 1</a></li>\n            <li><a href=\"#\">item 2</a></li>\n        </ul>\n    </li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "3aDn4CNMWQsSRX5RY",
    "parent" : "4fkYbbcjnwMmqj5Mk",
    "name" : "Acordion 2",
    "content" : "<ul class=\"uk-nav uk-nav-parent-icon\" data-uk-nav=\"{multiple:true}\">\n    <li class=\"uk-parent\">\n        <a href=\"#\">item</a>\n        <ul class=\"uk-nav-sub\">\n            <li><a href=\"#\">item 1</a></li>\n            <li><a href=\"#\">item 2</a></li>\n        </ul>\n    </li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "nfsoLrWdjMYo6pNAH",
    "parent" : "4fkYbbcjnwMmqj5Mk",
    "name" : "Header and divider",
    "content" : "<li class=\"uk-nav-header\">element</li>\n<li class=\"uk-nav-divider\"></li>",
    "isContainer" : false
}

,
{
    "_id" : "526EzPiu6oLYwEWSf",
    "parent" : "4fkYbbcjnwMmqj5Mk",
    "name" : "Style modifiers",
    "content" : "<div class=\"uk-panel uk-panel-box\">\n    <h3 class=\"uk-panel-title\">modifiy</h3>\n    <ul class=\"uk-nav uk-nav-side\">modify 1</ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "wmDJpfZySmqLoG4Qd",
    "parent" : "4fkYbbcjnwMmqj5Mk",
    "name" : "Dropdown",
    "content" : "<div class=\"uk-dropdown\">\n    <ul class=\"uk-nav uk-nav-dropdown\">item</ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ARHtmLAvebDPrjQKA",
    "parent" : "4fkYbbcjnwMmqj5Mk",
    "name" : "Navbar",
    "content" : "<div class=\"uk-dropdown uk-dropdown-navbar\">\n    <ul class=\"uk-nav uk-nav-navbar\">item</ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "eM3pMwRwbkFP74qC3",
    "parent" : "4fkYbbcjnwMmqj5Mk",
    "name" : "Nav off-canvas",
    "content" : "<div class=\"uk-offcanvas-bar\">\n    <ul class=\"uk-nav uk-nav-offcanvas\">item</ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "oG4ztCP4Kgs3JKSRp",
    "parent" : "yMFo37jtFsTuvFivY",
    "name" : "Navbar",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Navbar",
            "value" : "nav class=\"uk-navbar\""
        }
    ]
}

,
{
    "_id" : "ZGEZrX5biiYFRWh9B",
    "parent" : "oG4ztCP4Kgs3JKSRp",
    "name" : "Usage",
    "content" : "<nav class=\"uk-navbar\">\n    <ul class=\"uk-navbar-nav\">\n        <li class=\"uk-active\"><a href=\"\">component</a></li>\n        <li><a href=\"\">component 1</a></li>\n        <li class=\"uk-parent\"><a href=\"\">component 2</a></li>\n    </ul>\n</nav>",
    "isContainer" : false
}

,
{
    "_id" : "AsxWrorEmzFZ88Eg9",
    "parent" : "oG4ztCP4Kgs3JKSRp",
    "name" : "Flip",
    "content" : "<nav class=\"uk-navbar\">\n    <div class=\"uk-navbar-flip\">\n        <ul class=\"uk-navbar-nav\">\n            <li><a href=\"\">element</a></li>\n        </ul>\n    </div>\n</nav>",
    "isContainer" : false
}

,
{
    "_id" : "5Yhx8mGqAvmRDeWEr",
    "parent" : "oG4ztCP4Kgs3JKSRp",
    "name" : "Subtitle",
    "content" : "<nav class=\"uk-navbar\">\n    <ul class=\"uk-navbar-nav\">\n        <li><a href=\"\" class=\"uk-navbar-nav-subtitle\">\n            element\n            <div>element 1</div>\n        </a></li>\n    </ul>\n</nav>",
    "isContainer" : false
}

,
{
    "_id" : "2XNbJng5YPcHyv3Jm",
    "parent" : "oG4ztCP4Kgs3JKSRp",
    "name" : "Content",
    "content" : "<nav class=\"uk-navbar\">\n    <a href=\"\" class=\"uk-navbar-brand\">item</a>\n    <ul class=\"uk-navbar-nav\">item 1</ul>\n    <div class=\"uk-navbar-content\">item 2</div>\n    <div class=\"uk-navbar-content uk-navbar-center\">item 3</div>\n    <a href=\"\" class=\"uk-navbar-toggle\"></a>\n</nav>",
    "isContainer" : false
}

,
{
    "_id" : "kZGcBaeMZ6wdYatpC",
    "parent" : "oG4ztCP4Kgs3JKSRp",
    "name" : "Responsive visibility",
    "content" : "<nav class=\"uk-navbar\">\n    <ul class=\"uk-navbar-nav uk-hidden-small\">item</ul>\n    <a href=\"#my-id\" class=\"uk-navbar-toggle uk-visible-small\" data-uk-offcanvas></a>\n</nav>\n\n<div id=\"my-id\" class=\"uk-offcanvas\">\n    item 1\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "zpDXSqdo58YQvZMq7",
    "parent" : "oG4ztCP4Kgs3JKSRp",
    "name" : "Modifiers",
    "content" : "<nav class=\"uk-navbar uk-navbar-attached\">modify</nav>",
    "isContainer" : false
}

,
{
    "_id" : "ijopTEWxAgQdcryKj",
    "parent" : "yMFo37jtFsTuvFivY",
    "name" : "Subnav",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Subnav",
            "value" : "ul class=\"uk-subnav\""
        }
    ]
}

,
{
    "_id" : "D4u4nHCyBXJZcGjEu",
    "parent" : "ijopTEWxAgQdcryKj",
    "name" : "Usage",
    "content" : "<ul class=\"uk-subnav\">\n    <li class=\"uk-active\"><a href=\"\">component</a></li>\n    <li><a href=\"\">component 1</a></li>\n    <li class=\"uk-disabled\"><a href=\"\">component 2</a></li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "TygBXHCGZsf8zgKt5",
    "parent" : "ijopTEWxAgQdcryKj",
    "name" : "Modifiers",
    "content" : "<ul class=\"uk-subnav uk-subnav-line\">\n    <li>modify</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "SGYJKDzBnRXrFe7Sj",
    "parent" : "ijopTEWxAgQdcryKj",
    "name" : "Pill",
    "content" : "<ul class=\"uk-subnav uk-subnav-pill\">\n    <li class=\"uk-active\">item</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "G4eFMn2GGd6535hPf",
    "parent" : "ijopTEWxAgQdcryKj",
    "name" : "With dropdowns",
    "content" : "<ul class=\"uk-subnav\">\n    <li><a href=\"\">component</a></li>\n\n    <!-- This is the container enabling the JavaScript -->\n    <li data-uk-dropdown=\"{mode:'click'}\">\n\n        <!-- This is the nav item toggling the dropdown -->\n        <a href=\"\">component 1</a>\n\n        <!-- This is the dropdown -->\n        <div class=\"uk-dropdown uk-dropdown-small\">\n            <ul class=\"uk-nav uk-nav-dropdown\">\n                <li><a href=\"\">component 2</a></li>\n            </ul>\n        </div>\n    </li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "dJtAaXCqmMztD7awM",
    "parent" : "yMFo37jtFsTuvFivY",
    "name" : "Breadcrumb",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Breadcrumb",
            "value" : "ul class=\"uk-breadcrumb\""
        }
    ]
}

,
{
    "_id" : "AqB3oXXH2T2nE3YJM",
    "parent" : "dJtAaXCqmMztD7awM",
    "name" : "Usage",
    "content" : "<ul class=\"uk-breadcrumb\">\n    <li><a href=\"\">element</a></li>\n    <li><a href=\"\">element 1</a></li>\n    <li><span>element 2</span></li>\n    <li class=\"uk-active\"><span>element 3</span></li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "dzvgHhiQZTcJ84AAK",
    "parent" : "yMFo37jtFsTuvFivY",
    "name" : "Pagination",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Pagination",
            "value" : "ul class=\"uk-pagination\""
        }
    ]
}

,
{
    "_id" : "cWY4xHnkv56PycGF3",
    "parent" : "dzvgHhiQZTcJ84AAK",
    "name" : "Usage",
    "content" : "<ul class=\"uk-pagination\">\n    <li><a href=\"\">element</a></li>\n    <li class=\"uk-active\"><span>element 1</span></li>\n    <li class=\"uk-disabled\"><span>element 2</span></li>\n    <li><span>element 3</span></li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "gkan7Dru6rJvRdjdA",
    "parent" : "dzvgHhiQZTcJ84AAK",
    "name" : "Alignment modifiers 1",
    "content" : "<ul class=\"uk-pagination uk-pagination-left\">\n    <li>modify</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "ovZNxYt7hkZPsTd5Q",
    "parent" : "dzvgHhiQZTcJ84AAK",
    "name" : "Alignment modifiers 2",
    "content" : "<ul class=\"uk-pagination uk-pagination-right\">\n    <li>modify</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "gsAtmQNTA44QGFMu9",
    "parent" : "dzvgHhiQZTcJ84AAK",
    "name" : "Previous and next",
    "content" : "<li class=\"uk-pagination-previous\"><a href=\"\">element</a></li>\n<li class=\"uk-pagination-next\"><a href=\"\">element 1</a></li>",
    "isContainer" : false
}

,
{
    "_id" : "TqNEFJEv7D56vTcZX",
    "parent" : "dzvgHhiQZTcJ84AAK",
    "name" : "With icons",
    "content" : "<li><a href=\"\"><i class=\"uk-icon-angle-double-left\"></i></a></li>\n<li><a href=\"\"><i class=\"uk-icon-angle-double-right\"></i></a></li>",
    "isContainer" : false
}

,
{
    "_id" : "RuiJtJLhq42s82Bp2",
    "parent" : "yMFo37jtFsTuvFivY",
    "name" : "Tab",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Tab",
            "value" : "ul class=\"uk-tab\" data-uk-tab"
        }
    ]
}

,
{
    "_id" : "fEP5qTRQB3D9fTbzy",
    "parent" : "RuiJtJLhq42s82Bp2",
    "name" : "Usage",
    "content" : "<ul class=\"uk-tab\" data-uk-tab>\n    <li class=\"uk-active\"><a href=\"\">component</a></li>\n    <li><a href=\"\">component 1</a></li>\n    <li><a href=\"\">component 2</a></li>\n    <li class=\"uk-disabled\"><a href=\"\">component 3</a></li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "hLY7jFvxwtRCSAYv3",
    "parent" : "RuiJtJLhq42s82Bp2",
    "name" : "Horizontal modifiers",
    "content" : "<ul class=\"uk-tab uk-tab-flip\" data-uk-tab>modify</ul>\n<ul class=\"uk-tab uk-tab-bottom\" data-uk-tab>modify 1</ul>",
    "isContainer" : false
}

,
{
    "_id" : "FhW7K4J8ur3SPQF9L",
    "parent" : "RuiJtJLhq42s82Bp2",
    "name" : "Justify tabs",
    "content" : "<ul class=\"uk-tab uk-tab-grid uk-tab-bottom\" data-uk-tab>\n    <li class=\"uk-width-1-3\"><a href=\"\">element</a></li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "TPWFPMatB96Tz4nju",
    "parent" : "RuiJtJLhq42s82Bp2",
    "name" : "Center tabs",
    "content" : "<div class=\"uk-tab-center\">\n    <ul class=\"uk-tab\" data-uk-tab>element</ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "8xAgjn2G9WuR92PRe",
    "parent" : "RuiJtJLhq42s82Bp2",
    "name" : "Vertical modifiers 1",
    "content" : "<ul class=\"uk-tab uk-tab-left uk-width-medium-1-2\">\n    <li>modify</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "S7FH4hpsvMSjHZMLQ",
    "parent" : "RuiJtJLhq42s82Bp2",
    "name" : "Vertical modifiers 2",
    "content" : "<ul class=\"uk-tab uk-tab-right uk-width-medium-1-2\">\n    <li>modify</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "inHDRH6GheatMhidK",
    "parent" : "RuiJtJLhq42s82Bp2",
    "name" : "Tabs with dropdowns",
    "content" : "<ul class=\"uk-tab\">\n    <li><a href=\"\">item</a></li>\n\n    <!-- This is the container enabling the JavaScript -->\n    <li data-uk-dropdown=\"{mode:'click'}\">\n\n        <!-- This is the menu item toggling the dropdown -->\n        <a href=\"\">item 1</a>\n\n        <!-- This is the dropdown -->\n        <div class=\"uk-dropdown uk-dropdown-small\">\n            <ul class=\"uk-nav uk-nav-dropdown\">\n                <li><a href=\"\">item 2</a></li>\n            </ul>\n        </div>\n    </li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "3WSciwYTTJNhbCzBu",
    "parent" : "yMFo37jtFsTuvFivY",
    "name" : "Thumbnav",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Thumbnav",
            "value" : "ul class=\"uk-thumbnav\""
        }
    ]
}

,
{
    "_id" : "9cxkqB2mTtFLWFusB",
    "parent" : "3WSciwYTTJNhbCzBu",
    "name" : "Usage",
    "content" : "<ul class=\"uk-thumbnav\">\n    <li class=\"uk-active\"><a href=\"\"><img src=\"\" alt=\"\"></a></li>\n    <li><a href=\"\"><img src=\"\" alt=\"\"></a></li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "KcqDN8uQbJFWd5vfP",
    "parent" : "3WSciwYTTJNhbCzBu",
    "name" : "Thumbnav and grid",
    "content" : "<ul class=\"uk-thumbnav uk-grid-width-1-5\">\n    <li>component</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "R8GQQ6W4JYXih24Gd",
    "parent" : "55e97bb4ffb70b649e790bea",
    "name" : "Elements",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Elements",
            "value" : "ul class=\"uk-list\""
        }
    ]
}

,
{
    "_id" : "TwBRKRRfmEoaCLDCd",
    "parent" : "R8GQQ6W4JYXih24Gd",
    "name" : "List",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "List",
            "value" : "ul class=\"uk-list\""
        }
    ]
}

,
{
    "_id" : "ii6z28du7oTeSTs7s",
    "parent" : "TwBRKRRfmEoaCLDCd",
    "name" : "Usage",
    "content" : "<ul class=\"uk-list\">\n    <li>item</li>\n    <li>item 1</li>\n    <li>item 2</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "HEEsLdZmzqawr6Lwn",
    "parent" : "TwBRKRRfmEoaCLDCd",
    "name" : "Modifiers",
    "content" : "<ul class=\"uk-list uk-list-line\">modify</ul>",
    "isContainer" : false
}

,
{
    "_id" : "zQkBmLWdtBoNXLj8v",
    "parent" : "TwBRKRRfmEoaCLDCd",
    "name" : "Striped",
    "content" : "<ul class=\"uk-list uk-list-striped\">item</ul>",
    "isContainer" : false
}

,
{
    "_id" : "Wp3r7CNsbxDnPu3g3",
    "parent" : "TwBRKRRfmEoaCLDCd",
    "name" : "Space",
    "content" : "<ul class=\"uk-list uk-list-space\">item</ul>",
    "isContainer" : false
}

,
{
    "_id" : "toWXZ9nQFXQheWqG8",
    "parent" : "R8GQQ6W4JYXih24Gd",
    "name" : "Description list",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Description list",
            "value" : "dl class=\"uk-description-list-horizontal\""
        }
    ]
}

,
{
    "_id" : "e7dT5n8TdjTzajra9",
    "parent" : "toWXZ9nQFXQheWqG8",
    "name" : "Usage",
    "content" : "<dl class=\"uk-description-list-horizontal\">\n    <dt>element</dt>\n    <dd>element 1</dd>\n</dl>",
    "isContainer" : false
}

,
{
    "_id" : "NKwu7miThPEX3GQSm",
    "parent" : "toWXZ9nQFXQheWqG8",
    "name" : "Line",
    "content" : "<dl class=\"uk-description-list-line\">item</dl>",
    "isContainer" : false
}

,
{
    "_id" : "z2zjwgKWht8aRxNaw",
    "parent" : "R8GQQ6W4JYXih24Gd",
    "name" : "Table",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Table",
            "value" : "table class=\"uk-table\""
        }
    ]
}

,
{
    "_id" : "WRXgaZaQ3jdPvQw8z",
    "parent" : "z2zjwgKWht8aRxNaw",
    "name" : "Usage",
    "content" : "<table class=\"uk-table\">\n    <caption>element</caption>\n    <thead>\n        <tr>\n            <th>element 1</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <td>element 2</td>\n        </tr>\n    </tfoot>\n    <tbody>\n        <tr>\n            <td>element 3</td>\n        </tr>\n    </tbody>\n</table>",
    "isContainer" : false
}

,
{
    "_id" : "bpxav4JjM3nT9Hd3D",
    "parent" : "z2zjwgKWht8aRxNaw",
    "name" : "Columns",
    "content" : "<td class=\"uk-width-1-10 uk-text-right\">component</td>\n<td class=\"uk-width-9-10 uk-text-bold\">component 1</td>",
    "isContainer" : false
}

,
{
    "_id" : "B32nQcq9WFCm5tiJy",
    "parent" : "z2zjwgKWht8aRxNaw",
    "name" : "Modifiers",
    "content" : "<table class=\"uk-table uk-table-hover\">modify</table>",
    "isContainer" : false
}

,
{
    "_id" : "8XgPg48G3SWkvbLjC",
    "parent" : "z2zjwgKWht8aRxNaw",
    "name" : "Striped",
    "content" : "<table class=\"uk-table uk-table-striped\">modify</table>",
    "isContainer" : false
}

,
{
    "_id" : "n5etgyob94DLW36QF",
    "parent" : "z2zjwgKWht8aRxNaw",
    "name" : "Condensed",
    "content" : "<table class=\"uk-table uk-table-condensed\">modify</table>",
    "isContainer" : false
}

,
{
    "_id" : "xgF7x6YhZNLzmdXgo",
    "parent" : "z2zjwgKWht8aRxNaw",
    "name" : "Combined",
    "content" : "<table class=\"uk-table uk-table-hover uk-table-striped uk-table-condensed\">modify</table>",
    "isContainer" : false
}

,
{
    "_id" : "8bmLPRSEkAGaSttu2",
    "parent" : "z2zjwgKWht8aRxNaw",
    "name" : "Responsive Table",
    "content" : "<div class=\"uk-overflow-container\">\n    <table>element</table>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "kNH3i9xLvKcFZQ98w",
    "parent" : "R8GQQ6W4JYXih24Gd",
    "name" : "Form",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Form",
            "value" : "form class=\"uk-form\""
        }
    ]
}

,
{
    "_id" : "8Di78FsBJWDnXQaQZ",
    "parent" : "kNH3i9xLvKcFZQ98w",
    "name" : "Usage",
    "content" : "<form class=\"uk-form\">\n\n    <fieldset data-uk-margin>\n        <legend>component</legend>\n        <input type=\"text\" placeholder=\"\">\n        <input type=\"password\" placeholder=\"\">\n        <select>\n            <option>component 1</option>\n            <option>component 2</option>\n        </select>\n        <button class=\"uk-button\">component 3</button>\n        <label><input type=\"checkbox\"> component 4</label>\n    </fieldset>\n\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "xXDytkXbGHnyMjPtX",
    "parent" : "kNH3i9xLvKcFZQ98w",
    "name" : "Rows",
    "content" : "<form class=\"uk-form\">\n    <fieldset>\n        <legend>element</legend>\n        <div class=\"uk-form-row\">element 1</div>\n        <div class=\"uk-form-row\">element 2</div>\n    </fieldset>\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "bFfi2GfJNqfTr4iuE",
    "parent" : "kNH3i9xLvKcFZQ98w",
    "name" : "Control states",
    "content" : "<input type=\"text\" placeholder=\"\" disabled>",
    "isContainer" : false
}

,
{
    "_id" : "JCPLXp5ZrCsScDHwA",
    "parent" : "kNH3i9xLvKcFZQ98w",
    "name" : "Validation states",
    "content" : "<input type=\"text\" placeholder=\"\" class=\"uk-form-danger\">\n<input type=\"text\" placeholder=\"\" class=\"uk-form-success\">",
    "isContainer" : false
}

,
{
    "_id" : "vwuRNRihuKb8WKNde",
    "parent" : "kNH3i9xLvKcFZQ98w",
    "name" : "Size modifiers",
    "content" : "<input type=\"text\" placeholder=\"\" class=\"uk-form-large\">\n<input type=\"text\" placeholder=\"\" class=\"uk-form-small\">",
    "isContainer" : false
}

,
{
    "_id" : "gSDfidGQj3ciRHxAf",
    "parent" : "kNH3i9xLvKcFZQ98w",
    "name" : "Width modifiers",
    "content" : "<input type=\"text\" placeholder=\"\" class=\"uk-form-width-large\">\n<input type=\"text\" placeholder=\"\" class=\"uk-form-width-medium\">\n<input type=\"text\" placeholder=\"\" class=\"uk-form-width-small\">\n<input type=\"text\" placeholder=\"\" class=\"uk-form-width-mini\">",
    "isContainer" : false
}

,
{
    "_id" : "jPxjwNdL7jZEmF2xB",
    "parent" : "kNH3i9xLvKcFZQ98w",
    "name" : "Markup",
    "content" : "<input type=\"text\" placeholder=\"\" class=\"uk-width-1-1\">",
    "isContainer" : false
}

,
{
    "_id" : "fPixv7A5YvpMqZwMa",
    "parent" : "kNH3i9xLvKcFZQ98w",
    "name" : "Blank",
    "content" : "<input type=\"text\" placeholder=\"\" class=\"uk-form-blank\">",
    "isContainer" : false
}

,
{
    "_id" : "6Zdo4c82KSH5kzbur",
    "parent" : "kNH3i9xLvKcFZQ98w",
    "name" : "Help text",
    "content" : "<div class=\"uk-form-row\">\n    <input type=\"text\" placeholder=\"\"> <span class=\"uk-form-help-inline\">item</span>\n</div>\n\n<div class=\"uk-form-row\">\n    <textarea cols=\"\" rows=\"\" placeholder=\"\">item 1</textarea>\n    <p class=\"uk-form-help-block\">item 2</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "hW9HSRYy244xyAh3x",
    "parent" : "kNH3i9xLvKcFZQ98w",
    "name" : "Layout modifiers",
    "content" : "<form class=\"uk-form uk-form-stacked\">\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\" for=\"\">element</label>\n        <div class=\"uk-form-controls\">element 1</div>\n    </div>\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "5RKiXRR9azGtp9Hog",
    "parent" : "kNH3i9xLvKcFZQ98w",
    "name" : "Text in form controls",
    "content" : "<div class=\"uk-form-controls uk-form-controls-text\">item</div>",
    "isContainer" : false
}

,
{
    "_id" : "2gxBJ4embos786bfE",
    "parent" : "kNH3i9xLvKcFZQ98w",
    "name" : "Vertical spacing",
    "content" : "<div class=\"uk-form-controls uk-form-controls-text\">\n    <p class=\"uk-form-controls-condensed\">item</p>\n    <p class=\"uk-form-controls-condensed\">item 1</p>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "sKjqiR4MKwfxBodY9",
    "parent" : "kNH3i9xLvKcFZQ98w",
    "name" : "And grid",
    "content" : "<form class=\"uk-form\">\n\n    <div class=\"uk-grid\">\n        <div class=\"uk-width-1-2\"><input type=\"text\" placeholder=\"\" class=\"uk-width-1-1\"></div>\n        <div class=\"uk-width-1-4\"><input type=\"text\" placeholder=\"\" class=\"uk-width-1-1\"></div>\n        <div class=\"uk-width-1-4\"><input type=\"text\" placeholder=\"\" class=\"uk-width-1-1\"></div>\n    </div>\n\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "z4oinLcd7JjkKjk2M",
    "parent" : "kNH3i9xLvKcFZQ98w",
    "name" : "And icons",
    "content" : "<div class=\"uk-form-icon\">\n    <i class=\"uk-icon-calendar\"></i>\n    <input type=\"text\">\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "bLNL2YR9d7tCNCZJw",
    "parent" : "55e97bb4ffb70b649e790bea",
    "name" : "Common",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Common",
            "value" : "div class=\"uk-button-group\""
        }
    ]
}

,
{
    "_id" : "BeMPnQQ8MJkHmiiid",
    "parent" : "bLNL2YR9d7tCNCZJw",
    "name" : "Button",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Button",
            "value" : "div class=\"uk-button-group\""
        }
    ]
}

,
{
    "_id" : "eLSXcp46APRGufMqF",
    "parent" : "BeMPnQQ8MJkHmiiid",
    "name" : "Usage",
    "content" : "<a class=\"uk-button\" href=\"\">component</a>\n<button class=\"uk-button\" type=\"button\">component 1</button>\n<button class=\"uk-button\" type=\"button\" disabled>component 2</button>",
    "isContainer" : false
}

,
{
    "_id" : "MvjfnW7KaHmq7ArTz",
    "parent" : "BeMPnQQ8MJkHmiiid",
    "name" : "Full width",
    "content" : "<button class=\"uk-button uk-width-1-1 uk-margin-small-bottom\">component</button>\n<button class=\"uk-button uk-width-1-1\">component 1</button>",
    "isContainer" : false
}

,
{
    "_id" : "cXrknLg2DX9B9mRy2",
    "parent" : "BeMPnQQ8MJkHmiiid",
    "name" : "Group",
    "content" : "<div class=\"uk-button-group\">\n    <a class=\"uk-button\" href=\"\">element</a>\n    <button class=\"uk-button\">element 1</button>\n    <button class=\"uk-button\">element 2</button>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "xDW7wMXqipNFCuXt6",
    "parent" : "BeMPnQQ8MJkHmiiid",
    "name" : "Javascript",
    "content" : "<button class=\"uk-button uk-button-primary\" type=\"button\" data-uk-button>Button</button>",
    "isContainer" : false
}

,
{
    "_id" : "5rKNjwD9KwT9qvGXy",
    "parent" : "BeMPnQQ8MJkHmiiid",
    "name" : "Checkbox",
    "content" : "<div data-uk-button-checkbox>\n    <button class=\"uk-button\">item</button>\n    <button class=\"uk-button\">item 1</button>\n    <button class=\"uk-button\">item 2</button>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "uWdGvM7BK6f93udtQ",
    "parent" : "BeMPnQQ8MJkHmiiid",
    "name" : "Radio",
    "content" : "<div data-uk-button-radio>\n    <button class=\"uk-button\">item</button>\n    <button class=\"uk-button\">item 1</button>\n    <button class=\"uk-button\">item 2</button>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "HDLfCHbeqidxLHMYD",
    "parent" : "BeMPnQQ8MJkHmiiid",
    "name" : "Dropdowns",
    "content" : "<!-- This is the container enabling the JavaScript -->\n<div class=\"uk-button-dropdown\" data-uk-dropdown>\n\n    <!-- This is the button toggling the dropdown -->\n    <button class=\"uk-button\">component</button>\n\n    <!-- This is the dropdown -->\n    <div class=\"uk-dropdown uk-dropdown-small\">\n        <ul class=\"uk-nav uk-nav-dropdown\">\n            <li><a href=\"\">component 1</a></li>\n            <li><a href=\"\">component 2</a></li>\n        </ul>\n    </div>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "8KPZ38XGMkiNAdNWe",
    "parent" : "BeMPnQQ8MJkHmiiid",
    "name" : "Group with dropdowns",
    "content" : "<div class=\"uk-button-group\">\n\n    <!-- This is a button -->\n    <button class=\"uk-button\">element</button>\n\n    <!-- This is the container enabling the JavaScript -->\n    <div data-uk-dropdown=\"{mode:'click'}\">\n\n        <!-- This is the button toggling the dropdown -->\n        <a href=\"\" class=\"uk-button\">element 1</a>\n\n        <!-- This is the dropdown -->\n        <div class=\"uk-dropdown uk-dropdown-small\">\n            <ul class=\"uk-nav uk-nav-dropdown\">\n                <li><a href=\"\">element 2</a></li>\n                <li><a href=\"\">element 3</a></li>\n            </ul>\n        </div>\n\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "WcorZnBHpYEzcZHEm",
    "parent" : "9t2CcRqBMmXBBJdpm",
    "name" : "Usage",
    "content" : "<!-- This is an icon -->\n<i class=\"uk-icon-cog\"></i>\n\n<!-- This is an icon in a link -->\n<a href=\"\"><i class=\"uk-icon-cog\"></i> component</a>",
    "isContainer" : false
}

,
{
    "_id" : "kPu6AiooA3DQJQ5N2",
    "parent" : "K89vhbYv6gtmsgD4k",
    "name" : "Color modifier",
    "content" : "<div class=\"uk-badge uk-badge-success\">item</div>\n<div class=\"uk-badge uk-badge-warning\">item 1</div>\n<div class=\"uk-badge uk-badge-danger\">item 2</div>",
    "isContainer" : false
}

,
{
    "_id" : "5YNNBATxyphyMWFmR",
    "parent" : "kxfzcXqBvkWbMHXMq",
    "name" : "Color modifiers",
    "content" : "<div class=\"uk-alert uk-alert-success\"> item </div>\n<div class=\"uk-alert uk-alert-warning\">item 1</div>\n<div class=\"uk-alert uk-alert-danger\">item 2</div>",
    "isContainer" : false
}

,
{
    "_id" : "oKrC5NCfSC6AX8ghg",
    "parent" : "QWvHAk6sNy8kkXg3X",
    "name" : "Usage",
    "content" : "<!-- This is an image as a thumbnail -->\n<img class=\"uk-thumbnail\" src=\"\" alt=\"\">\n\n<!-- This is an anchor as a thumbnail -->\n<a class=\"uk-thumbnail\" href=\"\"><img src=\"\" alt=\"\"></a>\n\n<!-- This is a figure as a thumbnail -->\n<figure class=\"uk-thumbnail\"><img src=\"\" alt=\"\"></figure>",
    "isContainer" : false
}

,
{
    "_id" : "EbW4kigwKtb3s6Epz",
    "parent" : "QWvHAk6sNy8kkXg3X",
    "name" : "Caption",
    "content" : "<!-- This is a div as a thumbnail with a caption -->\n<div class=\"uk-thumbnail\">\n    <img src=\"\" alt=\"\">\n    <div class=\"uk-thumbnail-caption\">element</div>\n</div>\n\n<!-- This is an anchor as a thumbnail with a caption -->\n<a class=\"uk-thumbnail\" href=\"\">\n    <img src=\"\" alt=\"\">\n    <div class=\"uk-thumbnail-caption\">element 1</div>\n</a>\n\n<!-- This is a figure as a thumbnail with a caption -->\n<figure class=\"uk-thumbnail\">\n    <img src=\"\" alt=\"\">\n    <figcaption class=\"uk-thumbnail-caption\">element 2</figcaption>\n</figure>",
    "isContainer" : false
}

,
{
    "_id" : "HbdKyGGajHDc2T5ve",
    "parent" : "QWvHAk6sNy8kkXg3X",
    "name" : "Size modifiers",
    "content" : "<div class=\"uk-thumbnail uk-thumbnail-large\">modify</div>\n<div class=\"uk-thumbnail uk-thumbnail-medium\">modify 1</div>\n<div class=\"uk-thumbnail uk-thumbnail-small\">modify 2</div>\n<div class=\"uk-thumbnail uk-thumbnail-mini\">modify 3</div>",
    "isContainer" : false
}

,
{
    "_id" : "6jh7LgaDzABjPridN",
    "parent" : "QWvHAk6sNy8kkXg3X",
    "name" : "Grid",
    "content" : "<div class=\"uk-grid\">\n    <div class=\"uk-width-medium-1-2\"><img class=\"uk-thumbnail\" src=\"\" alt=\"\"></div>\n    <div class=\"uk-width-medium-1-2\">\n        <div class=\"uk-grid\">\n            <div class=\"uk-width-medium-1-2\"><img class=\"uk-thumbnail\" src=\"\" alt=\"\"></div>\n            <div class=\"uk-width-medium-1-2\"><img class=\"uk-thumbnail\" src=\"\" alt=\"\"></div>\n        </div>\n   </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "N6FirueQNjfR6QmzK",
    "parent" : "64oxq6zEWnHHRLma4",
    "name" : "Usage",
    "content" : "<figure class=\"uk-overlay\">\n    <img src=\"\" width=\"\" height=\"\" alt=\"\">\n    <figcaption class=\"uk-overlay-panel\">element</figcaption>\n</figure>",
    "isContainer" : false
}

,
{
    "_id" : "JFLGMhsdDg6tiuDSu",
    "parent" : "64oxq6zEWnHHRLma4",
    "name" : "Toggle overlay on hover",
    "content" : "<figure class=\"uk-overlay uk-overlay-hover\">\n    <img src=\"\" width=\"\" height=\"\" alt=\"\">\n    <figcaption class=\"uk-overlay-panel\">item</figcaption>\n</figure>",
    "isContainer" : false
}

,
{
    "_id" : "e7LsssCNY3XXNDC4u",
    "parent" : "64oxq6zEWnHHRLma4",
    "name" : "Background",
    "content" : "<figure class=\"uk-overlay\">\n    <img src=\"\" width=\"\" height=\"\" alt=\"\">\n    <figcaption class=\"uk-overlay-panel uk-overlay-background\">item</figcaption>\n</figure>",
    "isContainer" : false
}

,
{
    "_id" : "8FDHQJ7d9B5yTJWzJ",
    "parent" : "64oxq6zEWnHHRLma4",
    "name" : "Position",
    "content" : "<figure class=\"uk-overlay\">\n    <img src=\"\" width=\"\" height=\"\" alt=\"\">\n    <figcaption class=\"uk-overlay-panel uk-overlay-top\">item</figcaption>\n</figure>",
    "isContainer" : false
}

,
{
    "_id" : "m48K7amfCJvqLrPdo",
    "parent" : "64oxq6zEWnHHRLma4",
    "name" : "Icon",
    "content" : "<figure class=\"uk-overlay\">\n    <img src=\"\" width=\"\" height=\"\" alt=\"\">\n    <div class=\"uk-overlay-panel uk-overlay-icon\"></div>\n</figure>",
    "isContainer" : false
}

,
{
    "_id" : "PydN47ZdqXKzfBKzb",
    "parent" : "64oxq6zEWnHHRLma4",
    "name" : "Image",
    "content" : "<figure class=\"uk-overlay\">\n    <img src=\"\" width=\"\" height=\"\" alt=\"\">\n    <img class=\"uk-overlay-panel uk-overlay-image\" src=\"\" width=\"\" height=\"\" alt=\"\">\n</figure>",
    "isContainer" : false
}

,
{
    "_id" : "j8Pygp2WzH2gJF78w",
    "parent" : "64oxq6zEWnHHRLma4",
    "name" : "Transition",
    "content" : "<!-- This example is sliding in the overlay panel from the top -->\n<figure class=\"uk-overlay uk-overlay-hover\">\n    <img src=\"\" width=\"\" height=\"\" alt=\"\">\n    <figcaption class=\"uk-overlay-panel uk-overlay-slide-top\">element</figcaption>\n</figure>\n\n<!-- This example is scaling up the image while the overlay panel always remains visible -->\n<figure class=\"uk-overlay uk-overlay-hover\">\n    <img class=\"uk-overlay-scale\" src=\"\" width=\"\" height=\"\" alt=\"\">\n    <figcaption class=\"uk-overlay-panel uk-ignore\">element 1</figcaption>\n</figure>\n\n<!-- This example is spinning the image and sliding in the overlay panel from the bottom -->\n<figure class=\"uk-overlay uk-overlay-hover\">\n    <img class=\"uk-overlay-spin\" src=\"\" width=\"\" height=\"\" alt=\"\">\n    <figcaption class=\"uk-overlay-panel uk-overlay-slide-top\">element2</figcaption>\n</figure>",
    "isContainer" : false
}

,
{
    "_id" : "HwjwScrkyFa6JNeiq",
    "parent" : "64oxq6zEWnHHRLma4",
    "name" : "And flex",
    "content" : "<!-- In this example the overlay panel is centered vertically and horizontally -->\n<figure class=\"uk-overlay\">\n    <img src=\"\" width=\"\" height=\"\" alt=\"\">\n    <figcaption class=\"uk-overlay-panel uk-flex uk-flex-center uk-flex-middle uk-text-center\">\n        <div>component</div>\n    </figcaption>\n</figure>\n\n<!-- In this example the overlay panel is aligned to the bottom -->\n<figure class=\"uk-overlay\">\n    <img src=\"\" width=\"\" height=\"\" alt=\"\">\n    <figcaption class=\"uk-overlay-panel uk-flex uk-flex-bottom\">\n        <div>component 1</div>\n    </figcaption>\n</figure>",
    "isContainer" : false
}

,
{
    "_id" : "5SD9mHLLuMDYWdfQC",
    "parent" : "SyiaFzG2iKrqdkBrA",
    "name" : "Usage",
    "content" : "<!-- This is the container enabling the JavaScript -->\n<div data-uk-dropdown>\n\n    <!-- This is the element toggling the dropdown -->\n    <div>component</div>\n\n    <!-- This is the dropdown -->\n    <div class=\"uk-dropdown\">component 1</div>\n\n</div>\n\n<!-- This is the container enabling the JavaScript in click mode -->\n<div data-uk-dropdown=\"{mode:'click'}\">\n\n    <!-- This is the element toggling the dropdown -->\n    <div>component 2</div>\n\n    <!-- This is the dropdown -->\n    <div class=\"uk-dropdown\">component 3</div>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "MKA7QJsSBAPgnu25W",
    "parent" : "SyiaFzG2iKrqdkBrA",
    "name" : "Justify",
    "content" : "<!-- This is the parent element to which the dropdown is being justified -->\n<div id=\"my-id\">\n\n    <!-- This is the container enabling the JavaScript -->\n    <div class=\"uk-button-dropdown\" data-uk-dropdown=\"{justify:'#my-id'}\">\n\n        <!-- This is the element toggling the dropdown -->\n        <button class=\"uk-button\">element</button>\n\n        <!-- This is the dropdown -->\n        <div class=\"uk-dropdown\">element</div>\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "dYar2vnqKLKau2tos",
    "parent" : "SyiaFzG2iKrqdkBrA",
    "name" : "Navbar modifier",
    "content" : "<nav class=\"uk-navbar\">\n    <ul class=\"uk-navbar-nav\">\n\n        <!-- This is the container enabling the JavaScript -->\n        <li class=\"uk-parent\" data-uk-dropdown>\n\n            <!-- This is the menu item toggling the dropdown -->\n            <a href=\"\">modify</a>\n\n            <!-- This is the dropdown -->\n            <div class=\"uk-dropdown uk-dropdown-navbar\">\n                <ul class=\"uk-nav uk-nav-navbar\">\n                    <li><a href=\"\">modify 1</a></li>\n                </ul>\n            </div>\n\n        </li>\n    </ul>\n</nav>",
    "isContainer" : false
}

,
{
    "_id" : "NtiLKFpq5yYorWmHe",
    "parent" : "SyiaFzG2iKrqdkBrA",
    "name" : "In buttons",
    "content" : "<!-- This is the container enabling the JavaScript -->\n<div class=\"uk-button-dropdown\" data-uk-dropdown>\n\n    <!-- This is the button toggling the dropdown -->\n    <button class=\"uk-button\">element</button>\n\n    <!-- This is the dropdown -->\n    <div class=\"uk-dropdown uk-dropdown-small\">\n        <ul class=\"uk-nav uk-nav-dropdown\">\n            <li><a href=\"\">element 1</a></li>\n            <li><a href=\"\">element 2</a></li>\n        </ul>\n    </div>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "gBk9CkC54AL4F2658",
    "parent" : "SyiaFzG2iKrqdkBrA",
    "name" : "In button groups",
    "content" : "<div class=\"uk-button-group\">\n\n    <!-- This is a button -->\n    <button class=\"uk-button\">component</button>\n\n    <!-- This is the container enabling the JavaScript -->\n    <div data-uk-dropdown=\"{mode:'click'}\">\n\n        <!-- This is the button toggling the dropdown -->\n        <a href=\"\" class=\"uk-button\">component 1</a>\n\n        <!-- This is the dropdown -->\n        <div class=\"uk-dropdown uk-dropdown-small\">\n            <ul class=\"uk-nav uk-nav-dropdown\">\n                <li><a href=\"\">component 2</a></li>\n                <li><a href=\"\">component 3</a></li>\n            </ul>\n        </div>\n\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ZwwsEP5pxwytK3HLC",
    "parent" : "SyiaFzG2iKrqdkBrA",
    "name" : "In subnavs",
    "content" : "<ul class=\"uk-subnav uk-subnav-pill\">\n    <li><a href=\"\">component</a></li>\n\n    <!-- This is the container enabling the JavaScript -->\n    <li data-uk-dropdown=\"{mode:'click'}\">\n\n        <!-- This is the nav item toggling the dropdown -->\n        <a href=\"\">component 1</a>\n\n        <!-- This is the dropdown -->\n        <div class=\"uk-dropdown uk-dropdown-small\">\n            <ul class=\"uk-nav uk-nav-dropdown\">\n                <li><a href=\"\">component 2</a></li>\n            </ul>\n        </div>\n\n    </li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "pD46xFuphotxqNHZB",
    "parent" : "SyiaFzG2iKrqdkBrA",
    "name" : "In tabs",
    "content" : "<ul class=\"uk-tab\" data-uk-tab>\n    <li><a href=\"\">component</a></li>\n\n    <!-- This is the container enabling the JavaScript -->\n    <li data-uk-dropdown=\"{mode:'click'}\">\n\n        <!-- This is the menu item toggling the dropdown -->\n        <a href=\"\">component 1</a>\n\n        <!-- This is the dropdown -->\n        <div class=\"uk-dropdown uk-dropdown-small\">\n            <ul class=\"uk-nav uk-nav-dropdown\">\n                <li><a href=\"\">component 2</a></li>\n            </ul>\n        </div>\n    </li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "knzR3JeDzencCoyB8",
    "parent" : "YuHTkLNmy7LtwCc5R",
    "name" : "Usage",
    "content" : "<!-- This is an anchor toggling the modal -->\n<a href=\"#my-id\" data-uk-modal>element</a>\n\n<!-- This is a button toggling the modal -->\n<button class=\"uk-button\" data-uk-modal=\"{target:'#my-id'}\">element 1</button>\n\n<!-- This is the modal -->\n<div id=\"my-id\" class=\"uk-modal\">\n    <div class=\"uk-modal-dialog\">\n        <a class=\"uk-modal-close uk-close\"></a>\n        element 2\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "pTXrv6suptMhWkyrP",
    "parent" : "sHw8GsmomdSaodTrn",
    "name" : "Items from within contents",
    "content" : "<!-- This is the nav containing the toggling elements -->\n<ul data-uk-switcher=\"{connect:'#my-id'}\">\n    <li><a href=\"\">item</a></li>\n</ul>\n\n<!-- This is the container of the content items -->\n<ul id=\"my-id\" class=\"uk-switcher\">\n    <li> item 1 <a href=\"\" data-uk-switcher-item=\"0\">item 2</a></li>\n    <li> item 3<a href=\"\" data-uk-switcher-item=\"1\">item 4</a></li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "urqBzBn4vknLFstQH",
    "parent" : "sHw8GsmomdSaodTrn",
    "name" : "With buttons",
    "content" : "<!-- This is the container of the toggling buttons -->\n<div data-uk-switcher=\"{connect:'#my-id'}\">\n    <button class=\"uk-button\" type=\"button\">component</button>\n</div>\n\n<!-- This is the container of the content items -->\n<ul id=\"my-id\" class=\"uk-switcher uk-margin\">component 1</ul>\n\n<!-- This is the button group containing the toggling buttons -->\n<div class=\"uk-button-group\" data-uk-switcher=\"{connect:'#my-id'}\">\n    <button class=\"uk-button\" type=\"button\">component 2</button>\n</div>\n\n<!-- This is the container of the content items -->\n<ul id=\"my-id\" class=\"uk-switcher uk-margin\">component 3</ul>",
    "isContainer" : false
}

,
{
    "_id" : "JxPqhAt777drq9EmQ",
    "parent" : "sHw8GsmomdSaodTrn",
    "name" : "With navs",
    "content" : "<div class=\"uk-grid\">\n    <div class=\"uk-width-medium-1-4\">\n\n        <!-- This is the nav containing the toggling elements -->\n        <ul class=\"uk-nav uk-nav-side\" data-uk-switcher=\"{connect:'#my-id'}\">\n            <li><a href=\"\">element</a></li>\n        </ul>\n    </div>\n    <div class=\"uk-width-medium-3-4\">\n\n        <!-- This is the container of the content items -->\n        <ul id=\"my-id\" class=\"uk-switcher\">\n            <li>element 1</li>\n        </ul>\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "tGXnqkDWxqCehnn6o",
    "parent" : "55e97bb4ffb70b649e790bea",
    "name" : "Components",
    "isContainer" : false
}

,
{
    "_id" : "9EN9g7X8pAhQwsdRC",
    "parent" : "tGXnqkDWxqCehnn6o",
    "name" : "Layout",
    "isContainer" : false
}

,
{
    "_id" : "SbQhKe83B3apnY5A5",
    "parent" : "9EN9g7X8pAhQwsdRC",
    "name" : "Dynamic Grid",
    "isContainer" : false
}

,
{
    "_id" : "25BmXbpWd34pGZhKf",
    "parent" : "SbQhKe83B3apnY5A5",
    "name" : "Usage",
    "content" : "<!-- This is a grid using uk-width-* on each item -->\n<div data-uk-grid>\n    <div class=\"uk-width-small-1-2 uk-width-medium-1-4\">component</div>\n    <div class=\"uk-width-small-1-2 uk-width-medium-1-4\">component 1</div>\n</div>\n\n<!-- This is a grid using uk-grid-width-* on the grid itself -->\n<div class=\"uk-grid-width-small-1-2 uk-grid-width-medium-1-4\" data-uk-grid>\n    <div>component 2</div>\n    <div>component 3</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "dZEoCcL6nzjswwLxy",
    "parent" : "SbQhKe83B3apnY5A5",
    "name" : "Filtering",
    "content" : "<!-- Filter Controls -->\n<ul id=\"my-id\" class=\"uk-subnav\">\n    <li data-uk-filter=\"\"><a href=\"\"></a></li>\n    <li data-uk-filter=\"filter-a\"><a href=\"\"></a></li>\n    <li data-uk-filter=\"filter-b\"><a href=\"\"></a></li>\n</ul>\n\n<!-- Dynamic Grid -->\n<div data-uk-grid=\"{controls: '#my-id'}\">\n    <div data-uk-filter=\"filter-a\">item</div>\n    <div data-uk-filter=\"filter-b\">item 1</div>\n    <div data-uk-filter=\"filter-a,filter-b\">item 2</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "w5H2fLgbrCYeuJtYF",
    "parent" : "SbQhKe83B3apnY5A5",
    "name" : "Multiple categories",
    "content" : "<ul id=\"my-id\" class=\"uk-subnav\">\n    <li data-uk-sort=\"my-category\"><a href=\"\"></a></li>\n    <li data-uk-sort=\"my-category:desc\"><a href=\"\"></a></li>\n    <li data-uk-sort=\"my-category2\"><a href=\"\"></a></li>\n    <li data-uk-sort=\"my-category2:desc\"><a href=\"\"></a></li>\n</ul>\n\n<div data-uk-grid=\"{controls: '#my-id'}\">\n    <div data-my-category=\"a\" data-my-category2=\"8\">item</div>\n    <div data-my-category=\"b\" data-my-category2=\"7\">item 1</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "3oEFfSr8GANLpAaKT",
    "parent" : "N64CnXm56ZKe5D7NY",
    "name" : "HTML editor",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "HTML editor",
            "value" : "link rel=\"stylesheet\" href=\"uikit.min.css\" /"
        }
    ]
}

,
{
    "_id" : "Rrq4ttgWKiLgJyNXx",
    "parent" : "3oEFfSr8GANLpAaKT",
    "name" : "Usage",
    "content" : "<head>\n        <title></title>\n        <link rel=\"stylesheet\" href=\"uikit.min.css\" />\n        <script src=\"jquery.js\"></script>\n        <script src=\"uikit.min.js\"></script>\n\n        <!-- Codemirror and marked dependencies -->\n        <link rel=\"stylesheet\" href=\"codemirror/lib/codemirror.css\">\n        <script src=\"codemirror/lib/codemirror.js\"></script>\n        <script src=\"codemirror/mode/markdown/markdown.js\"></script>\n        <script src=\"codemirror/addon/mode/overlay.js\"></script>\n        <script src=\"codemirror/mode/xml/xml.js\"></script>\n        <script src=\"codemirror/mode/gfm/gfm.js\"></script>\n        <script src=\"marked.js\"></script>\n\n        <!-- HTML editor CSS and JavaScript -->\n        <link rel=\"stylesheet\" href=\"htmleditor.css\">\n        <script src=\"htmleditor.js\"></script>\n    </head>",
    "isContainer" : false
}

,
{
    "_id" : "HrRwHLd3GETpv3vPZ",
    "parent" : "3oEFfSr8GANLpAaKT",
    "name" : "Markup",
    "content" : "<textarea data-uk-htmleditor>element</textarea>",
    "isContainer" : false
}

,
{
    "_id" : "idqbNfmF85XWx35FD",
    "parent" : "3oEFfSr8GANLpAaKT",
    "name" : "Markdown",
    "content" : "<textarea data-uk-htmleditor=\"{markdown:true}\">element</textarea>",
    "isContainer" : false
}

,
{
    "_id" : "yaLkuQRGjEyFBptJ7",
    "parent" : "3oEFfSr8GANLpAaKT",
    "name" : "Tab mode",
    "content" : "<textarea data-uk-htmleditor=\"{mode:'tab'}\">element</textarea>",
    "isContainer" : false
}

,
{
    "_id" : "7JjqMYBsKXWJxBGjv",
    "parent" : "N64CnXm56ZKe5D7NY",
    "name" : "Slider",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Slider",
            "value" : "div data-uk-slider"
        }
    ]
}

,
{
    "_id" : "pPQFaRctsf7Y2DJKy",
    "parent" : "7JjqMYBsKXWJxBGjv",
    "name" : "Usage",
    "content" : "<div data-uk-slider>\n\n    <div class=\"uk-slider-container\">\n        <ul class=\"uk-slider uk-grid-width-medium-1-4\">\n            <li>element</li>\n            element 1\n        </ul>\n    </div>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "SRTGdXB8PZ2RikC9f",
    "parent" : "7JjqMYBsKXWJxBGjv",
    "name" : "Navigation",
    "content" : "<div class=\"uk-slidenav-position\" data-uk-slider>\n\n    <div class=\"uk-slider-container\">\n        <ul class=\"uk-slider uk-grid-width-medium-1-4\">\n            <li>element</li>\n            element 1\n        </ul>\n    </div>\n\n    <a href=\"\" class=\"uk-slidenav uk-slidenav-contrast uk-slidenav-previous\" data-uk-slider-item=\"previous\"></a>\n    <a href=\"\" class=\"uk-slidenav uk-slidenav-contrast uk-slidenav-next\" data-uk-slider-item=\"next\"></a>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "SbmJHBGkEAhxadpso",
    "parent" : "7JjqMYBsKXWJxBGjv",
    "name" : "Center mode",
    "content" : "<div data-uk-slider=\"{center:true}\">\n\n    <div class=\"uk-slider-container\">\n        <ul class=\"uk-slider uk-grid-width-medium-1-4\">\n            <li>element</li>\n            element 1\n        </ul>\n    </div>\n\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "bbbgSEjehHNbngi2e",
    "parent" : "7JjqMYBsKXWJxBGjv",
    "name" : "Disable infinite scrolling",
    "content" : "<div data-uk-slider=\"{infinite: false}\">\n\n    <div class=\"uk-slider-container\">\n        <ul class=\"uk-slider uk-grid-width-medium-1-4\">\n            <li>item</li>\n            item 1\n        </ul>\n    </div>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "P7TGCGDefCF3mjnoY",
    "parent" : "7JjqMYBsKXWJxBGjv",
    "name" : "Item width",
    "content" : "<div data-uk-slider>\n\n    <div class=\"uk-slider-container\">\n        <ul class=\"uk-slider\">\n            <li class=\"uk-width-1-3\">item</li>\n            <li class=\"uk-width-1-5\">item 1</li>\n            <li class=\"uk-width-2-5\">item 2</li>\n            item 3\n        </ul>\n    </div>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "5mefmdR9jFMKGuPin",
    "parent" : "7JjqMYBsKXWJxBGjv",
    "name" : "Responsive behaviour",
    "content" : "<div data-uk-slider>\n\n    <div class=\"uk-slider-container\">\n        <ul class=\"uk-slider uk-grid-width-medium-1-3 uk-grid-width-large-1-4\">\n            <li>item</li>\n            item 1\n        </ul>\n    </div>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "nm7jiYWNdcCqduYbg",
    "parent" : "7JjqMYBsKXWJxBGjv",
    "name" : "Fullscreen mode",
    "content" : "<div data-uk-slider>\n\n    <div class=\"uk-slider-container\">\n        <ul class=\"uk-slider uk-slider-fullscreen\">\n            <li>item</li>\n            item 1\n        </ul>\n    </div>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "pWnTAPRqQf3dnM2Ja",
    "parent" : "N64CnXm56ZKe5D7NY",
    "name" : "Slideset",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Slideset",
            "value" : "div data-uk-slideset=\"{default: 4}\""
        }
    ]
}

,
{
    "_id" : "Fogp9TxzDsyTJ8vWR",
    "parent" : "pWnTAPRqQf3dnM2Ja",
    "name" : "Usage",
    "content" : "<div data-uk-slideset=\"{default: 4}\">\n    <ul class=\"uk-grid uk-slideset\">\n        <li><img src=\"\" alt=\"\"></li>\n        <li><img src=\"\" alt=\"\"></li>\n        item\n    </ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "rKPSAXX79J4wZ9gz8",
    "parent" : "pWnTAPRqQf3dnM2Ja",
    "name" : "Navigations 1",
    "content" : "<div data-uk-slideset=\"{default: 4}\">\n    <ul class=\"uk-grid uk-slideset\">\n        <li>item</li>\n        <li>item 1</li>\n    </ul>\n    <ul class=\"uk-slideset-nav\">item 2</ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "imJSj4HQD6pAZkv7J",
    "parent" : "pWnTAPRqQf3dnM2Ja",
    "name" : "Navigations 2",
    "content" : "<div data-uk-slideset=\"{default: 4}\">\n    <ul class=\"uk-grid uk-slideset\">\n        <li>item</li>\n        <li>item 1</li>\n    </ul>\n    <a href=\"\" data-uk-slideset-item=\"previous\"></a>\n    <a href=\"\" data-uk-slideset-item=\"next\"></a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "aezDMCsgDJeGPbRbP",
    "parent" : "pWnTAPRqQf3dnM2Ja",
    "name" : "Slidenav dotnav",
    "content" : "<div data-uk-slideset=\"{default: 4}\">\n    <div class=\"uk-slidenav-position\">\n        <ul class=\"uk-grid uk-slideset\">\n            <li>component</li>\n            <li>component 1</li>\n        </ul>\n        <a href=\"\" class=\"uk-slidenav uk-slidenav-previous\" data-uk-slideset-item=\"previous\"></a>\n        <a href=\"\" class=\"uk-slidenav uk-slidenav-next\" data-uk-slideset-item=\"next\"></a>\n    </div>\n    <ul class=\"uk-slideset-nav uk-dotnav uk-flex-center\">component 2</ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "xzPZFtAfoWajT76o8",
    "parent" : "pWnTAPRqQf3dnM2Ja",
    "name" : "Responsive items",
    "content" : "<div data-uk-slideset=\"{small: 2, medium: 4, large: 6}\">item</div>",
    "isContainer" : false
}

,
{
    "_id" : "WEi6FHhb4iXsdtvvg",
    "parent" : "pWnTAPRqQf3dnM2Ja",
    "name" : "Animations",
    "content" : "<div data-uk-slideset=\"{animation: 'scale', duration: 200}\">item</div>",
    "isContainer" : false
}

,
{
    "_id" : "XDv7ZSJb66WFpd4NF",
    "parent" : "pWnTAPRqQf3dnM2Ja",
    "name" : "Filter",
    "content" : "<!-- The controls are included in the Slideset -->\n<div data-uk-slideset=\"\">\n    <ul>\n        <li data-uk-filter=\"\"><a></a></li>\n        <li data-uk-filter=\"filter-a\"><a></a></li>\n        <li data-uk-filter=\"filter-b\"><a></a></li>\n    </ul>\n\n    <ul class=\"uk-grid uk-slideset\">\n        <li data-uk-filter=\"filter-a\"><img src=\"\"></li>\n        <li data-uk-filter=\"filter-b\"><img src=\"\"></li>\n    </ul>\n</div>\n\n<!-- The controls are outside the Slideset -->\n<ul id=\"my-id\">\n    <li data-uk-filter=\"\"><a></a></li>\n    <li data-uk-filter=\"filter-a\"><a></a></li>\n    <li data-uk-filter=\"filter-b\"><a></a></li>\n</ul>\n\n<div data-uk-slideset=\"{controls: '#my-id'}\">\n    <ul class=\"uk-slideset\">\n        <li data-uk-filter=\"filter-a\"><img src=\"\"></li>\n        <li data-uk-filter=\"filter-b\"><img src=\"\"></li>\n    </ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "BMSj77ofXoBbSMo7z",
    "parent" : "N64CnXm56ZKe5D7NY",
    "name" : "Slideshow",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Slideshow",
            "value" : "ul class=\"uk-slideshow\" data-uk-slideshow=\"{autoplay:true}\""
        }
    ]
}

,
{
    "_id" : "muYMJHHPb8QPsqiKu",
    "parent" : "BMSj77ofXoBbSMo7z",
    "name" : "Usage",
    "content" : "<ul class=\"uk-slideshow\" data-uk-slideshow=\"{autoplay:true}\">\n    <li><img src=\"\" width=\"\" height=\"\" alt=\"\"></li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "cwFMpjqLeYeMe5Qzq",
    "parent" : "BMSj77ofXoBbSMo7z",
    "name" : "Navigations 1",
    "content" : "<div data-uk-slideshow>\n    <ul class=\"uk-slideshow\">\n        <li></li>\n        <li></li>\n    </ul>\n    <ul>\n        <li data-uk-slideshow-item=\"0\"><a href=\"\">element</a></li>\n        <li data-uk-slideshow-item=\"1\"><a href=\"\">element 1</a></li>\n    </ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "HZgq5At3spQ7rM2bu",
    "parent" : "BMSj77ofXoBbSMo7z",
    "name" : "Navigations 2",
    "content" : "<div data-uk-slideshow>\n    <ul class=\"uk-slideshow\">\n        <li></li>\n        <li></li>\n    </ul>\n    <a href=\"\" data-uk-slideshow-item=\"previous\"></a>\n    <a href=\"\" data-uk-slideshow-item=\"next\"></a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "YLwd8tPtRzez74yAc",
    "parent" : "BMSj77ofXoBbSMo7z",
    "name" : "Slidenav and dotnav",
    "content" : "<div class=\"uk-slidenav-position\" data-uk-slideshow>\n    <ul class=\"uk-slideshow\">\n        <li></li>\n        <li></li>\n    </ul>\n    <a href=\"\" class=\"uk-slidenav uk-slidenav-contrast uk-slidenav-previous\" data-uk-slideshow-item=\"previous\"></a>\n    <a href=\"\" class=\"uk-slidenav uk-slidenav-contrast uk-slidenav-next\" data-uk-slideshow-item=\"next\"></a>\n    <ul class=\"uk-dotnav uk-dotnav-contrast uk-position-bottom uk-flex-center\">\n        <li data-uk-slideshow-item=\"0\"><a href=\"\"></a></li>\n        <li data-uk-slideshow-item=\"1\"><a href=\"\"></a></li>\n    </ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "MSBJiyRPDYx3MFh56",
    "parent" : "BMSj77ofXoBbSMo7z",
    "name" : "Transitions",
    "content" : "<ul class=\"uk-slideshow\" data-uk-slideshow=\"{animation: 'random-fx'}\">component</ul>",
    "isContainer" : false
}

,
{
    "_id" : "pSJoY6jvobPw9LdKN",
    "parent" : "BMSj77ofXoBbSMo7z",
    "name" : "Effect 1",
    "content" : "<ul class=\"uk-slideshow\" data-uk-slideshow=\"{kenburns:true}\">item</ul>",
    "isContainer" : false
}

,
{
    "_id" : "kDCMgAeunMme9N645",
    "parent" : "BMSj77ofXoBbSMo7z",
    "name" : "Effect 2",
    "content" : "<ul class=\"uk-slideshow\" data-uk-slideshow=\"{kenburns:'30s'}\">item</ul>",
    "isContainer" : false
}

,
{
    "_id" : "TquaHYZRDyZ5R6Cx4",
    "parent" : "BMSj77ofXoBbSMo7z",
    "name" : "Fullscreen slideshow",
    "content" : "<ul class=\"uk-slideshow uk-slideshow-fullscreen\" data-uk-slideshow>item</ul>",
    "isContainer" : false
}

,
{
    "_id" : "wkBrL6CtcseMABNw6",
    "parent" : "BMSj77ofXoBbSMo7z",
    "name" : "Overlay",
    "content" : "<ul class=\"uk-slideshow uk-overlay-active\" data-uk-slideshow>\n    <li>\n        <img src=\"\" width=\"\" height=\"\" alt=\"\">\n        <div class=\"uk-overlay-panel uk-overlay-background uk-overlay-fade\">element</div>\n    </li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "33f53r2sbS59Kjf8c",
    "parent" : "BMSj77ofXoBbSMo7z",
    "name" : "Video",
    "content" : "<!-- This is a slideshow with a video element -->\n<ul class=\"uk-slideshow\">\n    <li>\n        <video width=\"\" height=\"\" autoplay loop muted controls>\n            <source src=\"\" type=\"\">\n        </video>\n    </li>\n</ul>\n\n<!-- This is a slideshow with an Iframe -->\n<ul class=\"uk-slideshow\">\n    <li>\n        <iframe src=\"\" width=\"\" height=\"\" frameborder=\"0\" allowfullscreen></iframe>\n    </li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "GNSd6r5XwgXbk6hr2",
    "parent" : "N64CnXm56ZKe5D7NY",
    "name" : "Parallax",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Parallax",
            "value" : "div data-uk-parallax=\"{bg: -200}\""
        }
    ]
}

,
{
    "_id" : "mY898BqLhJHryK6g3",
    "parent" : "GNSd6r5XwgXbk6hr2",
    "name" : "Usage",
    "content" : "<div data-uk-parallax=\"{bg: '-200'}\">element</div>",
    "isContainer" : false
}

,
{
    "_id" : "p67q3hGCu7c6maL6N",
    "parent" : "GNSd6r5XwgXbk6hr2",
    "name" : "Options",
    "content" : "<div data-uk-parallax=\"{y: '-200', opacity: '0'}\">element</div>",
    "isContainer" : false
}

,
{
    "_id" : "oqJYfjyDWLAFxGJ2n",
    "parent" : "GNSd6r5XwgXbk6hr2",
    "name" : "Start and stop values",
    "content" : "<div data-uk-parallax=\"{x: '-100,100', 'background-color': '#EBF7FD,#FFF1F0'}\">value</div>",
    "isContainer" : false
}

,
{
    "_id" : "gpe5gjjfae3YTvjTy",
    "parent" : "GNSd6r5XwgXbk6hr2",
    "name" : "Nested animation",
    "content" : "<div data-uk-parallax=\"{bg: -200}\">\n    <div data-uk-parallax=\"{opacity: '0,1', scale: '0,1'}\">element</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "eWD7yaME43q9YhPqD",
    "parent" : "GNSd6r5XwgXbk6hr2",
    "name" : "Target option",
    "content" : "<div id=\"target-id\">element</div>\n<div data-uk-parallax=\"{target: '#target-id'}\">element 1</div>",
    "isContainer" : false
}

,
{
    "_id" : "z5gZQoLKx7PkNjwWZ",
    "parent" : "GNSd6r5XwgXbk6hr2",
    "name" : "Velocity",
    "content" : "<div data-uk-parallax=\"{velocity: '0.5'}\">\n    item\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "rsHWaEfFyFxx245Yy",
    "parent" : "GNSd6r5XwgXbk6hr2",
    "name" : "Viewport",
    "content" : "<div data-uk-parallax=\"{viewport: '0.5'}\">element</div>",
    "isContainer" : false
}

,
{
    "_id" : "Wf89aNvppX72tGFyN",
    "parent" : "N64CnXm56ZKe5D7NY",
    "name" : "Accordion",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Accordion",
            "value" : "div class=\"uk-accordion\" data-uk-accordion"
        }
    ]
}

,
{
    "_id" : "m6BLAGwT6pwz9kyA7",
    "parent" : "Wf89aNvppX72tGFyN",
    "name" : "Usage",
    "content" : "<div class=\"uk-accordion\" data-uk-accordion>\n\n    <h3 class=\"uk-accordion-title\">element</h3>\n    <div class=\"uk-accordion-content\">element 1</div>\n\n    <h3 class=\"uk-accordion-title\">element 2</h3>\n    <div class=\"uk-accordion-content\">element 3</div>\n\n    <h3 class=\"uk-accordion-title\">element 4</h3>\n    <div class=\"uk-accordion-content\">element 5</div>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Dvnm4Zdhifpz7PFRm",
    "parent" : "N64CnXm56ZKe5D7NY",
    "name" : "Search",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Search",
            "value" : "form class=\"uk-search\" data-uk-search"
        }
    ]
}

,
{
    "_id" : "sD22xvxtCRhnjYDk5",
    "parent" : "Dvnm4Zdhifpz7PFRm",
    "name" : "Usage",
    "content" : "<form class=\"uk-search\" data-uk-search>\n    <input class=\"uk-search-field\" type=\"search\" placeholder=\"\">\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "tvJdwnDg9KKxzDHoK",
    "parent" : "Dvnm4Zdhifpz7PFRm",
    "name" : "JSON Search Result",
    "content" : "<form class=\"uk-search\" data-uk-search=\"{source:'my-results.json'}\">\n\n    <input class=\"uk-search-field\" type=\"search\" placeholder=\"\">\n\n    <!-- This is the dropdown, which is injected through JavaScript -->\n    <div class=\"uk-dropdown uk-dropdown-search\">\n        <ul class=\"uk-nav uk-nav-search\">component</ul>\n    </div>\n\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "vTkdrkcrb4rJWFk47",
    "parent" : "Dvnm4Zdhifpz7PFRm",
    "name" : "In navbars",
    "content" : "<nav class=\"uk-navbar\">\n    <div class=\"uk-navbar-flip\">\n        <div class=\"uk-navbar-content\">\n            <form class=\"uk-search\" data-uk-search=\"{source:'my-results.json'}\">\n            component\n            </form>\n        </div>\n    </div>\n</nav>",
    "isContainer" : false
}

,
{
    "_id" : "zM5ZqrffNhsABWtTb",
    "parent" : "Dvnm4Zdhifpz7PFRm",
    "name" : "In off-canvas",
    "content" : "<!-- This is the button toggling the off-canvas sidebar -->\n<button class=\"uk-button\" data-uk-offcanvas=\"{target:'#my-id'}\">component</button>\n\n<!-- This is the off-canvas sidebar -->\n<div id=\"my-id\" class=\"uk-offcanvas\">\n    <div class=\"uk-offcanvas-bar\">\n        <form class=\"uk-search\">\n        component 1\n        </form>\n    </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "8gDefBBCyHg5Ttxr3",
    "parent" : "N64CnXm56ZKe5D7NY",
    "name" : "Nestable",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Nestable",
            "value" : "ul class=\"uk-nestable\" data-uk-nestable"
        }
    ]
}

,
{
    "_id" : "iHdNQbF3bkCQbSALD",
    "parent" : "8gDefBBCyHg5Ttxr3",
    "name" : "Usage",
    "content" : "<ul class=\"uk-nestable\" data-uk-nestable>\n    <li class=\"uk-nestable-item\">\n        <div class=\"uk-nestable-panel\">item</div>\n    </li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "aRpiKTmCsDcPirq3v",
    "parent" : "8gDefBBCyHg5Ttxr3",
    "name" : "Handle",
    "content" : "<ul class=\"uk-nestable\" data-uk-nestable=\"{handleClass:'uk-nestable-handle'}\">\n    <li class=\"uk-nestable-item\">\n        <div class=\"uk-nestable-panel\">\n            <div class=\"uk-nestable-handle\"></div>\n            element\n        </div>\n    </li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "zFBuLhsTabMsmLdSN",
    "parent" : "8gDefBBCyHg5Ttxr3",
    "name" : "Toggle",
    "content" : "<ul class=\"uk-nestable data-uk-nestable\">\n    <li class=\"uk-nestable-item\">\n        <div class=\"uk-nestable-panel\">\n            <div class=\"uk-nestable-toggle\" data-nestable-action=\"toggle\"></div>\n            element\n        </div>\n    </li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "GrKd2tSJ4HtYgDiFr",
    "parent" : "8gDefBBCyHg5Ttxr3",
    "name" : "Muliple lists",
    "content" : "<ul class=\"uk-nestable\" data-uk-nestable=\"{group:'my-group'}\">element</ul>\n<ul class=\"uk-nestable\" data-uk-nestable=\"{group:'my-group'}\">element 1</ul>",
    "isContainer" : false
}

,
{
    "_id" : "fyJnLcbQW3sPXQ2sS",
    "parent" : "8gDefBBCyHg5Ttxr3",
    "name" : "Disable nesting",
    "content" : "<ul class=\"uk-nestable\" data-uk-nestable=\"{maxDepth:1}\">item</ul>",
    "isContainer" : false
}

,
{
    "_id" : "Lptn4892PkEtoKnwZ",
    "parent" : "N64CnXm56ZKe5D7NY",
    "name" : "Sortable",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Sortable",
            "value" : "ul class=\"uk-sortable\" data-uk-sortable"
        }
    ]
}

,
{
    "_id" : "KNTiNozGYkrtSpiLc",
    "parent" : "Lptn4892PkEtoKnwZ",
    "name" : "Usage",
    "content" : "<ul class=\"uk-sortable\" data-uk-sortable>\n    <li>element</li>\n    <li>element 1</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "gmpmL3zRjSYcrhBsE",
    "parent" : "Lptn4892PkEtoKnwZ",
    "name" : "Any element",
    "content" : "<div class=\"uk-sortable\" data-uk-sortable>\n    <div>element</div>\n    <div>element 1</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "FGZNosedQnT5JfHjc",
    "parent" : "Lptn4892PkEtoKnwZ",
    "name" : "Handle",
    "content" : "<ul class=\"uk-sortable\" data-uk-sortable=\"{handleClass:'uk-sortable-handle'}\">\n    <li><div class=\"uk-sortable-handle\"></div>element</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "mZWqxgGNRfMevjuDn",
    "parent" : "Lptn4892PkEtoKnwZ",
    "name" : "Multiple lists",
    "content" : "<ul class=\"uk-sortable\" data-uk-sortable=\"{group:'my-group'}\">item</ul>\n<ul class=\"uk-sortable\" data-uk-sortable=\"{group:'my-group'}\">item 1</ul>",
    "isContainer" : false
}

,
{
    "_id" : "dCWEDo2JjzNB9ogD3",
    "parent" : "N64CnXm56ZKe5D7NY",
    "name" : "Sticky",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Sticky",
            "value" : "div data-uk-sticky>element</div"
        }
    ]
}

,
{
    "_id" : "b4E6gkPoQXdHFzvHP",
    "parent" : "dCWEDo2JjzNB9ogD3",
    "name" : "Usage",
    "content" : "<div data-uk-sticky>element</div>",
    "isContainer" : false
}

,
{
    "_id" : "J64pMjfpayv9LHuk8",
    "parent" : "dCWEDo2JjzNB9ogD3",
    "name" : "Define an offset",
    "content" : "<div data-uk-sticky=\"{top:100}\">element</div>",
    "isContainer" : false
}

,
{
    "_id" : "rJewFSizqW5zcHPwt",
    "parent" : "dCWEDo2JjzNB9ogD3",
    "name" : "Add a delay",
    "content" : "<div data-uk-sticky=\"{top:-200, animation: 'uk-animation-slide-top'}\">element</div>",
    "isContainer" : false
}

,
{
    "_id" : "5xrAmDhrHGk5MvbhE",
    "parent" : "dCWEDo2JjzNB9ogD3",
    "name" : "Responsive behavior",
    "content" : "<!-- This is basically a shortcode to define a min-width -->\n<div data-uk-sticky=\"{media: 640}\">item</div>\n\n<!-- This is a media string using the min-width and orientation properties -->\n<div data-uk-sticky=\"{media: '(min-width: 640px) and (orientation: landscape)'}\">item 1</div>",
    "isContainer" : false
}

,
{
    "_id" : "d4mBavfXoJnftHxCZ",
    "parent" : "dCWEDo2JjzNB9ogD3",
    "name" : "Boundary",
    "content" : "<!-- Bind sticky to its parent element -->\n<div data-uk-sticky=\"{boundary: true}\">element</div>\n\n<!-- Bind sticky to any element -->\n<div data-uk-sticky=\"{boundary: '#my-id'}\">element 1</div>",
    "isContainer" : false
}

,
{
    "_id" : "bHeNhfdnbBJ437Few",
    "parent" : "N64CnXm56ZKe5D7NY",
    "name" : "Timepicker",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Timepicker",
            "value" : "form class=\"uk-form\""
        }
    ]
}

,
{
    "_id" : "xiMWk635y7RTsd52G",
    "parent" : "bHeNhfdnbBJ437Few",
    "name" : "Usage",
    "content" : "<form class=\"uk-form\">\n    <input type=\"text\" data-uk-timepicker>\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "RjQSnXCQexEbaH4FM",
    "parent" : "bHeNhfdnbBJ437Few",
    "name" : "Meridian time",
    "content" : "<form class=\"uk-form\">\n    <input type=\"text\" data-uk-timepicker=\"{format:'12h'}\">\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "uetGPGP6GQ3dMz8qf",
    "parent" : "N64CnXm56ZKe5D7NY",
    "name" : "Tooltip",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Tooltip",
            "value" : "button class=\"uk-button\" data-uk-tooltip title=\"\">component</button"
        }
    ]
}

,
{
    "_id" : "KvYkyBvewPnJsQK5D",
    "parent" : "uetGPGP6GQ3dMz8qf",
    "name" : "Usage",
    "content" : "<button class=\"uk-button\" data-uk-tooltip title=\"\">element</button>\n<span data-uk-tooltip title=\"\">element 1</span>",
    "isContainer" : false
}

,
{
    "_id" : "jTh9FssWi8pkssPjj",
    "parent" : "uetGPGP6GQ3dMz8qf",
    "name" : "Alignment",
    "content" : "<button class=\"uk-button\" data-uk-tooltip=\"{pos:'bottom-left'}\" title=\"\">item</button>",
    "isContainer" : false
}

,
{
    "_id" : "GzZ68SYoF9Q9SMi8W",
    "parent" : "N64CnXm56ZKe5D7NY",
    "name" : "Upload",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Upload",
            "value" : "div id=\"upload-drop\" class=\"uk-placeholder\""
        }
    ]
}

,
{
    "_id" : "8cScb8iBhCvAwibTK",
    "parent" : "GzZ68SYoF9Q9SMi8W",
    "name" : "Usage",
    "content" : "<div id=\"upload-drop\" class=\"uk-placeholder\">\n    Info text... <a class=\"uk-form-file\">Select a file<input id=\"upload-select\" type=\"file\"></a>.\n</div>\n\n<div id=\"progressbar\" class=\"uk-progress uk-hidden\">\n    <div class=\"uk-progress-bar\" style=\"width: 0%;\">component</div>\n</div>",
    "isContainer" : false
}
,
{
    "_id" : "55e8944a2acaa78e9239ba70",
    "parent" : "WBkkypKLQ2QdQMGF2",
    "name" : "ionic",
    "isContainer" : false
}

,
{
    "_id" : "zRuxmaZv9x3K28Dyw",
    "parent" : "55e8944a2acaa78e9239ba70",
    "name" : "CSS",
    "isContainer" : false
}

,
{
    "_id" : "sa3Z4YmkJ3uSGMM3m",
    "parent" : "55e8944a2acaa78e9239ba70",
    "name" : "Platfom Customization",
    "isContainer" : false
}

,
{
    "_id" : "4QzFfuNyLC9GoZFNm",
    "parent" : "55e8944a2acaa78e9239ba70",
    "name" : "Javascript",
    "isContainer" : false
}

,
{
    "_id" : "7bnYWxFvN6eAjHmyC",
    "parent" : "zRuxmaZv9x3K28Dyw",
    "name" : "Header",
    "isContainer" : false
}

,
{
    "_id" : "C3rQiJCrSuC2akk5M",
    "parent" : "7bnYWxFvN6eAjHmyC",
    "name" : "bar-header",
    "content" : "<div class=\"bar bar-header bar-light\">\n  <h1 class=\"title\">bar-light</h1>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ptSeP2Ex7EAvQw8ii",
    "parent" : "7bnYWxFvN6eAjHmyC",
    "name" : "bar-stable",
    "content" : "<div class=\"bar bar-header bar-stable\">\n  <h1 class=\"title\">bar-stable</h1>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "MiGLfAKyrd9oMXQaQ",
    "parent" : "7bnYWxFvN6eAjHmyC",
    "name" : "bar-positive",
    "content" : "<div class=\"bar bar-header bar-positive\">\n  <h1 class=\"title\">bar-positive</h1>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "GZDD358Es3fKpDJBt",
    "parent" : "7bnYWxFvN6eAjHmyC",
    "name" : "bar-calm",
    "content" : "<div class=\"bar bar-header bar-calm\">\n  <h1 class=\"title\">bar-calm</h1>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "cDZgoc5FyaA8ZQnWM",
    "parent" : "7bnYWxFvN6eAjHmyC",
    "name" : "bar-balanced",
    "content" : "<div class=\"bar bar-header bar-balanced\">\n  <h1 class=\"title\">bar-balanced</h1>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "adKf5RNj5jDteXTDt",
    "parent" : "7bnYWxFvN6eAjHmyC",
    "name" : "bar-balanced",
    "content" : "<div class=\"bar bar-header bar-balanced\">\n  <h1 class=\"title\">bar-balanced</h1>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Aos3J4gECiPPuoKru",
    "parent" : "7bnYWxFvN6eAjHmyC",
    "name" : "bar-energized",
    "content" : "<div class=\"bar bar-header bar-energized\">\n  <h1 class=\"title\">bar-energized</h1>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "JQjzpGCqHz7KhRANY",
    "parent" : "7bnYWxFvN6eAjHmyC",
    "name" : "bar-assertive",
    "content" : "<div class=\"bar bar-header bar-assertive\">\n  <h1 class=\"title\">bar-assertive</h1>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "roonweF3juck6Aycn",
    "parent" : "7bnYWxFvN6eAjHmyC",
    "name" : "bar-royal",
    "content" : "<div class=\"bar bar-header bar-royal\">\n  <h1 class=\"title\">bar-royal</h1>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "tAAKjGZjZwxFSB5KT",
    "parent" : "7bnYWxFvN6eAjHmyC",
    "name" : "bar-royal",
    "content" : "<div class=\"bar bar-header bar-royal\">\n  <h1 class=\"title\">bar-royal</h1>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "rtrcyX3PS7Bj3u66i",
    "parent" : "7bnYWxFvN6eAjHmyC",
    "name" : "bar-dark",
    "content" : "<div class=\"bar bar-header bar-dark\">\n  <h1 class=\"title\">bar-dark</h1>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "p6pFcxx6J6pRX9gmu",
    "parent" : "7bnYWxFvN6eAjHmyC",
    "name" : "Sub header",
    "content" : "<div class=\"bar bar-header\">\n  <h1 class=\"title\">Header</h1>\n</div>\n<div class=\"bar bar-subheader\">\n  <h2 class=\"title\">Sub Header</h2>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "nhDK9kXzK6jeqRrxx",
    "parent" : "zRuxmaZv9x3K28Dyw",
    "name" : "Content",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Content",
            "value" : "div class=\"bar bar-footer bar-balanced\""
        }
    ]
}

,
{
    "_id" : "MXis9jCWGHwdFzA7i",
    "parent" : "zRuxmaZv9x3K28Dyw",
    "name" : "Footer",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Footer",
            "value" : "div class=\"bar bar-footer bar-balanced\""
        }
    ]
}

,
{
    "_id" : "SB92Woe9XA4ucZBcp",
    "parent" : "MXis9jCWGHwdFzA7i",
    "name" : "bar-footer",
    "content" : "<div class=\"bar bar-footer bar-balanced\">\n  <div class=\"title\">Footer</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "GbxynfFmkD7vHvjJR",
    "parent" : "MXis9jCWGHwdFzA7i",
    "name" : "button",
    "content" : "<div class=\"bar bar-footer\">\n  <button class=\"button button-clear\">Left</button>\n  <div class=\"title\">Title</div>\n  <button class=\"button button-clear\">Right</button>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "RbQswz4sGTGDPbSza",
    "parent" : "MXis9jCWGHwdFzA7i",
    "name" : "button-clear",
    "content" : "<div class=\"bar bar-footer\">\n  <button class=\"button button-clear pull-right\">Right</button>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "aFDaNr8KpKRTMqedD",
    "parent" : "zRuxmaZv9x3K28Dyw",
    "name" : "Buttons",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Buttons",
            "value" : "button class=\"button\""
        }
    ]
}

,
{
    "_id" : "SCTb3vLhhEHvyKTM9",
    "parent" : "aFDaNr8KpKRTMqedD",
    "name" : "class",
    "content" : "<button class=\"button\">\n  Default\n</button>\n\n<button class=\"button button-light\">\n  button-light\n</button>\n\n<button class=\"button button-stable\">\n  button-stable\n</button>\n\n<button class=\"button button-positive\">\n  button-positive\n</button>\n\n<button class=\"button button-calm\">\n  button-calm\n</button>\n\n<button class=\"button button-balanced\">\n  button-balanced\n</button>\n\n<button class=\"button button-energized\">\n  button-energized\n</button>\n\n<button class=\"button button-assertive\">\n  button-assertive\n</button>\n\n<button class=\"button button-royal\">\n  button-royal\n</button>\n\n<button class=\"button button-dark\">\n  button-dark\n</button>",
    "isContainer" : false
}

,
{
    "_id" : "e9pZ3xmtzoWoK8SHm",
    "parent" : "aFDaNr8KpKRTMqedD",
    "name" : "Block",
    "content" : "<button class=\"button button-block button-positive\">\n  Block Button\n</button>",
    "isContainer" : false
}

,
{
    "_id" : "syr4juQdffRFtfSuS",
    "parent" : "aFDaNr8KpKRTMqedD",
    "name" : "Full width",
    "content" : "<button class=\"button button-full button-positive\">\n  Full Width Block Button\n</button>",
    "isContainer" : false
}

,
{
    "_id" : "57yfKWuw7mLJBfHWL",
    "parent" : "aFDaNr8KpKRTMqedD",
    "name" : "Different sizes",
    "content" : "<button class=\"button button-small button-assertive\">\n  Small Button\n</button>\n<button class=\"button button-large button-positive\">\n  Large Button\n</button>",
    "isContainer" : false
}

,
{
    "_id" : "p7umuXfs7i69zCvii",
    "parent" : "aFDaNr8KpKRTMqedD",
    "name" : "Outlined buttons",
    "content" : "<button class=\"button button-outline button-positive\">\n  Outlined Button\n</button>",
    "isContainer" : false
}

,
{
    "_id" : "9EQ2dEYXXarMH9gQG",
    "parent" : "aFDaNr8KpKRTMqedD",
    "name" : "Clear buttons",
    "content" : "<button class=\"button button-clear button-positive\">\n  Clear Button\n</button>",
    "isContainer" : false
}

,
{
    "_id" : "NDXuNEfQKtT3kba6c",
    "parent" : "aFDaNr8KpKRTMqedD",
    "name" : "Icons",
    "content" : "<button class=\"button\">\n  <i class=\"icon ion-loading-c\"></i> Loading...\n</button>\n\n<button class=\"button icon-left ion-home\">Home</button>\n\n<button class=\"button icon-left ion-star button-positive\">Favorites</button>\n\n<a class=\"button icon-right ion-chevron-right button-calm\">Learn More</a>\n\n<a class=\"button icon-left ion-chevron-left button-clear button-dark\">Back</a>\n\n<button class=\"button icon ion-gear-a\"></button>",
    "isContainer" : false
}

,
{
    "_id" : "EwawmaZna8HkwG59M",
    "parent" : "aFDaNr8KpKRTMqedD",
    "name" : "Icons 2",
    "content" : "<a class=\"button button-icon icon ion-settings\"></a>\n\n<a class=\"button button-outline icon-right ion-navicon button-balanced\">Reorder</a>",
    "isContainer" : false
}

,
{
    "_id" : "xSmq3Pewc7bKmzZvT",
    "parent" : "aFDaNr8KpKRTMqedD",
    "name" : "Headers",
    "content" : "<div class=\"bar bar-header\">\n  <button class=\"button icon ion-navicon\"></button>\n  <h1 class=\"title\">Header Buttons</h1>\n  <button class=\"button\">Edit</button>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "WEaxWeo7qSvD7PLji",
    "parent" : "aFDaNr8KpKRTMqedD",
    "name" : "Clear buttons in headers",
    "content" : "<div class=\"bar bar-header\">\n  <button class=\"button button-icon icon ion-navicon\"></button>\n  <div class=\"h1 title\">Header Buttons</div>\n  <button class=\"button button-clear button-positive\">Edit</button>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "nGHok6y2qxhBmLjCg",
    "parent" : "aFDaNr8KpKRTMqedD",
    "name" : "Button bar",
    "content" : "<div class=\"button-bar\">\n  <a class=\"button\">First</a>\n  <a class=\"button\">Second</a>\n  <a class=\"button\">Third</a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ZhnAYqg3q9a4LTEjL",
    "parent" : "zRuxmaZv9x3K28Dyw",
    "name" : "List",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "List",
            "value" : "div class=\"list\""
        }
    ]
}

,
{
    "_id" : "t5EAuqqoD3ink2bq9",
    "parent" : "ZhnAYqg3q9a4LTEjL",
    "name" : "List icons",
    "content" : "<div class=\"list\">\n\n  <a class=\"item item-icon-left\" href=\"#\">\n    <i class=\"icon ion-email\"></i>\n    Check mail\n  </a>\n\n  <a class=\"item item-icon-left item-icon-right\" href=\"#\">\n    <i class=\"icon ion-chatbubble-working\"></i>\n    Call Ma\n    <i class=\"icon ion-ios-telephone-outline\"></i>\n  </a>\n\n  <a class=\"item item-icon-left\" href=\"#\">\n    <i class=\"icon ion-mic-a\"></i>\n    Record album\n    <span class=\"item-note\">\n      Grammy\n    </span>\n  </a>\n\n  <a class=\"item item-icon-left\" href=\"#\">\n    <i class=\"icon ion-person-stalker\"></i>\n    Friends\n    <span class=\"badge badge-assertive\">0</span>\n  </a>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "7K6y4B73ucSvbnyLi",
    "parent" : "zRuxmaZv9x3K28Dyw",
    "name" : "Cards",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Cards",
            "value" : "div class=\"card\""
        }
    ]
}

,
{
    "_id" : "4MPAuEgjrydbMyZ2K",
    "parent" : "zRuxmaZv9x3K28Dyw",
    "name" : "Headers and footers",
    "content" : "<div class=\"card\">\n  <div class=\"item item-divider\">\n    I'm a Header in a Card!\n  </div>\n  <div class=\"item item-text-wrap\">\n    This is a basic Card with some text.\n  </div>\n  <div class=\"item item-divider\">\n    I'm a Footer in a Card!\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "PW2NuxHz87rXQgLWn",
    "parent" : "zRuxmaZv9x3K28Dyw",
    "name" : "Card lists",
    "content" : "<div class=\"list card\">\n\n  <a href=\"#\" class=\"item item-icon-left\">\n    <i class=\"icon ion-home\"></i>\n    Enter home address\n  </a>\n\n  <a href=\"#\" class=\"item item-icon-left\">\n    <i class=\"icon ion-ios-telephone\"></i>\n    Enter phone number\n  </a>\n\n  <a href=\"#\" class=\"item item-icon-left\">\n    <i class=\"icon ion-wifi\"></i>\n    Enter wireless password\n  </a>\n\n  <a href=\"#\" class=\"item item-icon-left\">\n    <i class=\"icon ion-card\"></i>\n    Enter card information\n  </a>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "385BsmbR6ZvBeBk84",
    "parent" : "zRuxmaZv9x3K28Dyw",
    "name" : "Images",
    "content" : "<div class=\"list card\">\n\n  <div class=\"item item-avatar\">\n    <img src=\"avatar.jpg\">\n    <h2>Pretty Hate Machine</h2>\n    <p>Nine Inch Nails</p>\n  </div>\n\n  <div class=\"item item-image\">\n    <img src=\"cover.jpg\">\n  </div>\n\n  <a class=\"item item-icon-left assertive\" href=\"#\">\n    <i class=\"icon ion-music-note\"></i>\n    Start listening\n  </a>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "9nrsurj2NbMSCy6GF",
    "parent" : "7K6y4B73ucSvbnyLi",
    "name" : "Showcase",
    "content" : "<div class=\"list card\">\n\n  <div class=\"item item-avatar\">\n    <img src=\"mcfly.jpg\">\n    <h2>Marty McFly</h2>\n    <p>November 05, 1955</p>\n  </div>\n\n  <div class=\"item item-body\">\n    <img class=\"full-image\" src=\"delorean.jpg\">\n    <p>\n      This is a \"Facebook\" styled Card. The header is created from a Thumbnail List item,\n      the content is from a card-body consisting of an image and paragraph text. The footer\n      consists of tabs, icons aligned left, within the card-footer.\n    </p>\n    <p>\n      <a href=\"#\" class=\"subdued\">1 Like</a>\n      <a href=\"#\" class=\"subdued\">5 Comments</a>\n    </p>\n  </div>\n\n  <div class=\"item tabs tabs-secondary tabs-icon-left\">\n    <a class=\"tab-item\" href=\"#\">\n      <i class=\"icon ion-thumbsup\"></i>\n      Like\n    </a>\n    <a class=\"tab-item\" href=\"#\">\n      <i class=\"icon ion-chatbox\"></i>\n      Comment\n    </a>\n    <a class=\"tab-item\" href=\"#\">\n      <i class=\"icon ion-share\"></i>\n      Share\n    </a>\n  </div>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "8yzLmLWs254ajburG",
    "parent" : "zRuxmaZv9x3K28Dyw",
    "name" : "Forms",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Forms ",
            "value" : "input type=\"text\" placeholder=\"First Name"
        }
    ]
}

,
{
    "_id" : "nRZrcdoXGk2zoaZCK",
    "parent" : "8yzLmLWs254ajburG",
    "name" : "Placeholder labels",
    "content" : "<div class=\"list\">\n  <label class=\"item item-input\">\n    <input type=\"text\" placeholder=\"First Name\">\n  </label>\n  <label class=\"item item-input\">\n    <input type=\"text\" placeholder=\"Last Name\">\n  </label>\n  <label class=\"item item-input\">\n    <textarea placeholder=\"Comments\"></textarea>\n  </label>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "6YvDwDwuRWJC4PXKY",
    "parent" : "8yzLmLWs254ajburG",
    "name" : "Inline labels",
    "content" : "<div class=\"list\">\n  <label class=\"item item-input\">\n    <span class=\"input-label\">Username</span>\n    <input type=\"text\">\n  </label>\n  <label class=\"item item-input\">\n    <span class=\"input-label\">Password</span>\n    <input type=\"password\">\n  </label>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "N9i832ahh2R7inczL",
    "parent" : "8yzLmLWs254ajburG",
    "name" : "Stacked labels",
    "content" : "<div class=\"list\">\n  <label class=\"item item-input item-stacked-label\">\n    <span class=\"input-label\">First Name</span>\n    <input type=\"text\" placeholder=\"John\">\n  </label>\n  <label class=\"item item-input item-stacked-label\">\n    <span class=\"input-label\">Last Name</span>\n    <input type=\"text\" placeholder=\"Suhr\">\n  </label>\n  <label class=\"item item-input item-stacked-label\">\n    <span class=\"input-label\">Email</span>\n    <input type=\"text\" placeholder=\"john@suhr.com\">\n  </label>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "uMreonEWqyxQAsQq3",
    "parent" : "8yzLmLWs254ajburG",
    "name" : "Floating labels",
    "content" : "<div class=\"list\">\n  <label class=\"item item-input item-floating-label\">\n    <span class=\"input-label\">First Name</span>\n    <input type=\"text\" placeholder=\"First Name\">\n  </label>\n  <label class=\"item item-input item-floating-label\">\n    <span class=\"input-label\">Last Name</span>\n    <input type=\"text\" placeholder=\"Last Name\">\n  </label>\n  <label class=\"item item-input item-floating-label\">\n    <span class=\"input-label\">Email</span>\n    <input type=\"text\" placeholder=\"Email\">\n  </label>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "R7Qwb7TCRRFzRBX9D",
    "parent" : "8yzLmLWs254ajburG",
    "name" : "Inset forms",
    "content" : "<div class=\"list list-inset\">\n  <label class=\"item item-input\">\n    <input type=\"text\" placeholder=\"First Name\">\n  </label>\n  <label class=\"item item-input\">\n    <input type=\"text\" placeholder=\"Last Name\">\n  </label>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "gxZQY3C9Ghy46DpKJ",
    "parent" : "8yzLmLWs254ajburG",
    "name" : "Inset inputs",
    "content" : "<div class=\"list\">\n\n  <div class=\"item item-input-inset\">\n    <label class=\"item-input-wrapper\">\n      <input type=\"text\" placeholder=\"Email\">\n    </label>\n    <button class=\"button button-small\">\n      Submit\n    </button>\n  </div>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "hebi85LHxk7KxFQo2",
    "parent" : "8yzLmLWs254ajburG",
    "name" : "Input icons",
    "content" : "<div class=\"list list-inset\">\n  <label class=\"item item-input\">\n    <i class=\"icon ion-search placeholder-icon\"></i>\n    <input type=\"text\" placeholder=\"Search\">\n  </label>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "yxSSB5imCtbWo4M6p",
    "parent" : "8yzLmLWs254ajburG",
    "name" : "Header inputs",
    "content" : "<div class=\"bar bar-header item-input-inset\">\n  <label class=\"item-input-wrapper\">\n    <i class=\"icon ion-ios-search placeholder-icon\"></i>\n    <input type=\"search\" placeholder=\"Search\">\n  </label>\n  <button class=\"button button-clear\">\n    Cancel\n  </button>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "whpS87nu8p9KWSZfC",
    "parent" : "zRuxmaZv9x3K28Dyw",
    "name" : "Toggle",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Toggle",
            "value" : "label class=\"toggle\""
        }
    ]
}

,
{
    "_id" : "bamLPDEBs62LagiRX",
    "parent" : "whpS87nu8p9KWSZfC",
    "name" : "Label",
    "content" : "<label class=\"toggle\">\n   <input type=\"checkbox\">\n   <div class=\"track\">\n     <div class=\"handle\"></div>\n   </div>\n</label>",
    "isContainer" : false
}

,
{
    "_id" : "wdrQvFk4asAX52qY4",
    "parent" : "zRuxmaZv9x3K28Dyw",
    "name" : "Range",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Range",
            "value" : "div class=\"item range\""
        }
    ]
}

,
{
    "_id" : "QzN4wYnwqa5NcehAw",
    "parent" : "wdrQvFk4asAX52qY4",
    "name" : "Class",
    "content" : "<div class=\"item range\">\n  <i class=\"icon ion-volume-low\"></i>\n  <input type=\"range\" name=\"volume\">\n  <i class=\"icon ion-volume-high\"></i>\n</div>\n\n<div class=\"list\">\n  <div class=\"item range range-positive\">\n    <i class=\"icon ion-ios-sunny-outline\"></i>\n    <input type=\"range\" name=\"volume\" min=\"0\" max=\"100\" value=\"33\">\n    <i class=\"icon ion-ios-sunny\"></i>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "WPXmZdqTmGwdjYB5Q",
    "parent" : "zRuxmaZv9x3K28Dyw",
    "name" : "Select",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Select",
            "value" : "label class=\"item item-input item-select\""
        }
    ]
}

,
{
    "_id" : "uxoNHGmq4k2GvxGdM",
    "parent" : "WPXmZdqTmGwdjYB5Q",
    "name" : "Class",
    "content" : "<div class=\"list\">\n\n  <label class=\"item item-input item-select\">\n    <div class=\"input-label\">\n      Lightsaber\n    </div>\n    <select>\n      <option>Blue</option>\n      <option selected>Green</option>\n      <option>Red</option>\n    </select>\n  </label>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "zsccu45DT4oG7egTX",
    "parent" : "zRuxmaZv9x3K28Dyw",
    "name" : "Tabs",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Tabs",
            "value" : "div class=\"tabs\""
        }
    ]
}

,
{
    "_id" : "ahsZecunctyNKogoz",
    "parent" : "zsccu45DT4oG7egTX",
    "name" : "Class",
    "content" : "<div class=\"tabs\">\n  <a class=\"tab-item\">\n    Home\n  </a>\n  <a class=\"tab-item\">\n    Favorites\n  </a>\n  <a class=\"tab-item\">\n    Settings\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "rx9cSvQ9tpPPbyCQc",
    "parent" : "zsccu45DT4oG7egTX",
    "name" : "Icon-only",
    "content" : "<div class=\"tabs tabs-icon-only\">\n  <a class=\"tab-item\">\n    <i class=\"icon ion-home\"></i>\n  </a>\n  <a class=\"tab-item\">\n    <i class=\"icon ion-star\"></i>\n  </a>\n  <a class=\"tab-item\">\n    <i class=\"icon ion-gear-a\"></i>\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "pJp7gAG8Z279WCuB5",
    "parent" : "zsccu45DT4oG7egTX",
    "name" : "Top icon",
    "content" : "<div class=\"tabs tabs-icon-top\">\n  <a class=\"tab-item\">\n    <i class=\"icon ion-home\"></i>\n    Home\n  </a>\n  <a class=\"tab-item\">\n    <i class=\"icon ion-star\"></i>\n    Favorites\n  </a>\n  <a class=\"tab-item\">\n    <i class=\"icon ion-gear-a\"></i>\n    Settings\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "mLtLWdoTHjSWJChh8",
    "parent" : "zsccu45DT4oG7egTX",
    "name" : "Left icon",
    "content" : "<div class=\"tabs tabs-icon-left\">\n  <a class=\"tab-item\">\n    <i class=\"icon ion-home\"></i>\n    Home\n  </a>\n  <a class=\"tab-item\">\n    <i class=\"icon ion-star\"></i>\n    Favorites\n  </a>\n  <a class=\"tab-item\">\n    <i class=\"icon ion-gear-a\"></i>\n    Settings\n  </a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "DzASsejn6kudQCurW",
    "parent" : "zsccu45DT4oG7egTX",
    "name" : "Sriped style",
    "content" : "<div class=\"tabs-striped tabs-top tabs-background-positive tabs-color-light\">\n    <div class=\"tabs\">\n      <a class=\"tab-item active\" href=\"#\">\n        <i class=\"icon ion-home\"></i>\n        Test\n      </a>\n      <a class=\"tab-item\" href=\"#\">\n        <i class=\"icon ion-star\"></i>\n        Favorites\n      </a>\n      <a class=\"tab-item\" href=\"#\">\n        <i class=\"icon ion-gear-a\"></i>\n        Settings\n      </a>\n    </div>\n  </div>\n  <div class=\"tabs-striped tabs-color-assertive\">\n    <div class=\"tabs\">\n      <a class=\"tab-item active\" href=\"#\">\n        <i class=\"icon ion-home\"></i>\n        Test\n      </a>\n      <a class=\"tab-item\" href=\"#\">\n        <i class=\"icon ion-star\"></i>\n        Favorites\n      </a>\n      <a class=\"tab-item\" href=\"#\">\n        <i class=\"icon ion-gear-a\"></i>\n        Settings\n      </a>\n    </div>\n  </div>",
    "isContainer" : false
}

,
{
    "_id" : "Mux4HF3EHZMex3uua",
    "parent" : "zRuxmaZv9x3K28Dyw",
    "name" : "Grid",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Grid",
            "value" : "div class=\"row\""
        }
    ]
}

,
{
    "_id" : "vTNiFkCf92caLgxMa",
    "parent" : "Mux4HF3EHZMex3uua",
    "name" : "Even columns",
    "content" : "<div class=\"row\">\n  <div class=\"col\">.col</div>\n  <div class=\"col\">.col</div>\n  <div class=\"col\">.col</div>\n  <div class=\"col\">.col</div>\n  <div class=\"col\">.col</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "59cHhahoZEiqwFXzQ",
    "parent" : "Mux4HF3EHZMex3uua",
    "name" : "Explicit column sizes",
    "content" : "<div class=\"row\">\n  <div class=\"col col-50\">.col.col-50</div>\n  <div class=\"col\">.col</div>\n  <div class=\"col\">.col</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col col-75\">.col.col-75</div>\n  <div class=\"col\">.col</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col\">.col</div>\n  <div class=\"col col-75\">.col.col-75</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col\">.col</div>\n  <div class=\"col\">.col</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "HjP83AB7hEEHZzNjY",
    "parent" : "Mux4HF3EHZMex3uua",
    "name" : "Offset columns",
    "content" : "<div class=\"row\">\n  <div class=\"col col-33 col-offset-33\">.col</div>\n  <div class=\"col\">.col</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col col-33\">.col</div>\n  <div class=\"col col-33 col-offset-33\">.col</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col col-33 col-offset-67\">.col</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "3xYRN85ggnuwFECE5",
    "parent" : "Mux4HF3EHZMex3uua",
    "name" : "Vertically aligned",
    "content" : "<div class=\"row\">\n  <div class=\"col\">.col</div>\n  <div class=\"col\">.col</div>\n  <div class=\"col\">.col</div>\n  <div class=\"col\">1<br>2<br>3<br>4</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col col-top\">.col</div>\n  <div class=\"col col-center\">.col</div>\n  <div class=\"col col-bottom\">.col</div>\n  <div class=\"col\">1<br>2<br>3<br>4</div>\n</div>\n\n<div class=\"row row-top\">\n  <div class=\"col\">.col</div>\n  <div class=\"col\">.col</div>\n  <div class=\"col\">.col</div>\n  <div class=\"col\">1<br>2<br>3<br>4</div>\n</div>\n\n<div class=\"row row-center\">\n  <div class=\"col\">.col</div>\n  <div class=\"col\">.col</div>\n  <div class=\"col\">.col</div>\n  <div class=\"col\">1<br>2<br>3<br>4</div>\n</div>\n\n<div class=\"row row-bottom\">\n  <div class=\"col\">.col</div>\n  <div class=\"col\">.col</div>\n  <div class=\"col\">.col</div>\n  <div class=\"col\">1<br>2<br>3<br>4</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "f6adEgycBBwMdtGXu",
    "parent" : "Mux4HF3EHZMex3uua",
    "name" : "Responsive grid",
    "content" : "<div class=\"row responsive-sm\">\n  <div class=\"col\">.col</div>\n  <div class=\"col\">.col</div>\n  <div class=\"col\">.col</div>\n  <div class=\"col\">.col</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "m6JKjs83M3NrbXdjD",
    "parent" : "zRuxmaZv9x3K28Dyw",
    "name" : "Utility",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Utility",
            "value" : " class=\"icon ion-star\"></i"
        }
    ]
}

,
{
    "_id" : "r4u485jrsoc6suubP",
    "parent" : "m6JKjs83M3NrbXdjD",
    "name" : "Icons",
    "content" : "<i class=\"icon ion-star\"></i>",
    "isContainer" : false
}
,
{
    "_id" : "55e8b0796c8021a66f627804",
    "parent" : "WBkkypKLQ2QdQMGF2",
    "name" : "elemental",
    "isContainer" : false
}

,
{
    "_id" : "8PACMaHTAJi7kkDFK",
    "parent" : "55e8b0796c8021a66f627804",
    "name" : "CSS",
    "isContainer" : false
}

,
{
    "_id" : "GYfJBecZ5xehsKQKX",
    "parent" : "55e8b0796c8021a66f627804",
    "name" : "Grid",
    "isContainer" : false
}

,
{
    "_id" : "iWnEZdZA4zjgxips2",
    "parent" : "55e8b0796c8021a66f627804",
    "name" : "Buttons",
    "isContainer" : false
}

,
{
    "_id" : "kkS82H4nuoxN8jkFj",
    "parent" : "55e8b0796c8021a66f627804",
    "name" : "Forms",
    "isContainer" : false
}

,
{
    "_id" : "gdMznyvBSCZCA8eKe",
    "parent" : "55e8b0796c8021a66f627804",
    "name" : "Spinner",
    "isContainer" : false
}

,
{
    "_id" : "C2h47hbjv9Z6hMvRA",
    "parent" : "55e8b0796c8021a66f627804",
    "name" : "Modal",
    "isContainer" : false
}

,
{
    "_id" : "uhkadzMqsYp3Ydwaw",
    "parent" : "55e8b0796c8021a66f627804",
    "name" : "Misc",
    "isContainer" : false
}

,
{
    "_id" : "dmJfCQwaB2GB9YrSH",
    "parent" : "8PACMaHTAJi7kkDFK",
    "name" : "Typography",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Typography",
            "value" : "input type=\"checkbox\" /"
        }
    ]
}

,
{
    "_id" : "w7QK7B5XmGZ6kRdZ9",
    "parent" : "dmJfCQwaB2GB9YrSH",
    "name" : "Elemental heading",
    "content" : "<div className=\"lead\">This is a page lead, it introduces the proceeding content.</div>",
    "isContainer" : false
}

,
{
    "_id" : "ra7u3m6RFeYvovew9",
    "parent" : "8PACMaHTAJi7kkDFK",
    "name" : "Tables",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Tables",
            "value" : "input type=\"checkbox\" /"
        }
    ]
}

,
{
    "_id" : "4GbNTjNprHinuYCPW",
    "parent" : "ra7u3m6RFeYvovew9",
    "name" : "Table",
    "content" : "<Table>\n\t<colgroup>\n\t\t<col width=\"50\" />\n\t\t<col width=\"\" />\n\t\t<col width=\"10%\" />\n\t\t<col width=\"10%\" />\n\t</colgroup>\n\t<thead>\n\t\t<tr>\n\t\t\t<th>\n\t\t\t\t<label>\n\t\t\t\t\t<input type=\"checkbox\" />\n\t\t\t\t</label>\n\t\t\t</th>\n\t\t\t<th>User</th>\n\t\t\t<th>Age</th>\n\t\t\t<th>Gender</th>\n\t\t</tr>\n\t\t{...}\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<label>\n\t\t\t\t\t<input type=\"checkbox\" />\n\t\t\t\t</label>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<a href=\"javascript:;\">Hanna Villarreal</a>\n\t\t\t</td>\n\t\t\t<td>39</td>\n\t\t\t<td>F</td>\n\t\t</tr>\n\t\t{...}\n\t</tbody>\n</Table>",
    "isContainer" : false
}

,
{
    "_id" : "pKp2XGfk85Zywmb9f",
    "parent" : "GYfJBecZ5xehsKQKX",
    "name" : "Simple",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Simple",
            "value" : "DemoBox>One Third</DemoBox"
        }
    ]
}

,
{
    "_id" : "MKhzehex7qLs5wzdT",
    "parent" : "pKp2XGfk85Zywmb9f",
    "name" : "Demo",
    "content" : "<Row>\n\t<Col sm=\"1/3\">\n\t\t<DemoBox>One Third</DemoBox>\n\t</Col>\n\t<Col sm=\"1/3\">\n\t\t<DemoBox>One Third</DemoBox>\n\t</Col>\n\t<Col sm=\"1/3\">\n\t\t<DemoBox>One Third</DemoBox>\n\t</Col>\n</Row>",
    "isContainer" : false
}

,
{
    "_id" : "huBSmnaeGfBhwxfoY",
    "parent" : "pKp2XGfk85Zywmb9f",
    "name" : "Quarter",
    "content" : "<Row>\n\t<Col sm=\"1/4\">\n\t\t<DemoBox>One Quarter</DemoBox>\n\t</Col>\n\t<Col sm=\"1/2\">\n\t\t<DemoBox>One Half</DemoBox>\n\t</Col>\n\t<Col sm=\"1/4\">\n\t\t<DemoBox>One Quarter</DemoBox>\n\t</Col>\n\t<Col sm=\"2/3\">\n\t\t<DemoBox>Two Thirds</DemoBox>\n\t</Col>\n\t<Col sm=\"1/3\">\n\t\t<DemoBox>One Third</DemoBox>\n\t</Col>\n</Row>",
    "isContainer" : false
}

,
{
    "_id" : "QQb4bHnG579J7jE9D",
    "parent" : "GYfJBecZ5xehsKQKX",
    "name" : "Resize your window",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Resize your window",
            "value" : "Col xs=\"33%\" sm=\"25%\" lg=\"33.333%\""
        }
    ]
}

,
{
    "_id" : "WTdmHPSRNfWLhCxdf",
    "parent" : "QQb4bHnG579J7jE9D",
    "name" : "Row",
    "content" : "<Row>\n\t<Col xs=\"33%\" sm=\"25%\" lg=\"33.333%\">\n\t\t<DemoBox>\n\t\t\t<ResponsiveText visibleXS=\"⅓\" visibleSM=\"One Quarter\" visibleMD=\"One Quarter\" visibleLG=\"One Third\" />\n\t\t</DemoBox>\n\t</Col>\n\t<Col xs=\"33%\" sm=\"50%\" lg=\"33.333%\">\n\t\t<DemoBox>\n\t\t\t<ResponsiveText visibleXS=\"⅓\" visibleSM=\"One Half\" visibleMD=\"One Half\" visibleLG=\"One Third\" />\n\t\t</DemoBox>\n\t</Col>\n\t<Col xs=\"33%\" sm=\"25%\" lg=\"33.333%\">\n\t\t<DemoBox>\n\t\t\t<ResponsiveText visibleXS=\"⅓\" visibleSM=\"One Quarter\" visibleMD=\"One Quarter\" visibleLG=\"One Third\" />\n\t\t</DemoBox>\n\t</Col>\n\t<Col xs=\"50%\" sm=\"33.333%\" md=\"66.667%\" lg=\"20%\">\n\t\t<DemoBox>\n\t\t\t<ResponsiveText visibleXS=\"½\" visibleSM=\"One Third\" visibleMD=\"Two Thirds\" visibleLG=\"One Fifth\" />\n\t\t</DemoBox>\n\t</Col>\n\t<Col xs=\"50%\" sm=\"66.667%\" md=\"33.333%\" lg=\"60%\">\n\t\t<DemoBox>\n\t\t\t<ResponsiveText visibleXS=\"½\" visibleSM=\"Two Thirds\" visibleMD=\"One Third\" visibleLG=\"Three Fifths\" />\n\t\t</DemoBox>\n\t</Col>\n\t<Col xs=\"100%\" sm=\"33.333%\" md=\"25%\" lg=\"20%\">\n\t\t<DemoBox>\n\t\t\t<ResponsiveText visibleXS=\"1\" visibleSM=\"One Third\" visibleMD=\"One Quarter\" visibleLG=\"One Fifth\" />\n\t\t</DemoBox>\n\t</Col>\n\t<Col xs=\"50%\" sm=\"33.333%\" md=\"50%\" lg=\"50%\">\n\t\t<DemoBox>\n\t\t\t<ResponsiveText visibleXS=\"½\" visibleSM=\"One Third\" visibleMD=\"One Half\" visibleLG=\"One Half\" />\n\t\t</DemoBox>\n\t</Col>\n\t<Col xs=\"50%\" sm=\"33.333%\" md=\"25%\" lg=\"50%\">\n\t\t<DemoBox>\n\t\t\t<ResponsiveText visibleXS=\"½\" visibleSM=\"One Third\" visibleMD=\"One Quarter\" visibleLG=\"One Half\" />\n\t\t</DemoBox>\n\t</Col>\n</Row>",
    "isContainer" : false
}

,
{
    "_id" : "kBjhvLafe3BJTdLNu",
    "parent" : "8PACMaHTAJi7kkDFK",
    "name" : "Something completely different",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Something completely different",
            "value" : "Col><DemoBox>♥</DemoBox></Col"
        }
    ]
}

,
{
    "_id" : "EokfqZjsZ6eaRzzyf",
    "parent" : "kBjhvLafe3BJTdLNu",
    "name" : "Row",
    "content" : "<Row>\n\t<Col><DemoBox>♥</DemoBox></Col>\n\t<Col><DemoBox>♥</DemoBox></Col>\n\t<Col><DemoBox>♥</DemoBox></Col>\n</Row>\n<Row>\n\t<Col><DemoBox>♥</DemoBox></Col>\n\t<Col><DemoBox>♥</DemoBox></Col>\n\t<Col><DemoBox>♥</DemoBox></Col>\n\t<Col><DemoBox>♥</DemoBox></Col>\n\t<Col><DemoBox>♥</DemoBox></Col>\n\t<Col><DemoBox>♥</DemoBox></Col>\n</Row>",
    "isContainer" : false
}

,
{
    "_id" : "qQ8M5swz6cLvHfmCa",
    "parent" : "kBjhvLafe3BJTdLNu",
    "name" : "Row 1",
    "content" : "<Row>\n\t<Col basis=\"25%\"><DemoBox>♥</DemoBox></Col>\n\t<Col basis=\"25%\"><DemoBox>♥</DemoBox></Col>\n\t<Col basis=\"25%\"><DemoBox>♥</DemoBox></Col>\n\t<Col basis=\"25%\"><DemoBox>♥</DemoBox></Col>\n\t<Col basis=\"25%\"><DemoBox>♥</DemoBox></Col>\n\t<Col basis=\"25%\"><DemoBox>♥</DemoBox></Col>\n</Row>",
    "isContainer" : false
}

,
{
    "_id" : "vSNhT6uvshi6jzDHf",
    "parent" : "dmJfCQwaB2GB9YrSH",
    "name" : "H 1",
    "content" : "<h1>h.1 Elemental heading</h1>",
    "isContainer" : false
}

,
{
    "_id" : "F7ikzdo3Ma7A7Qmmi",
    "parent" : "dmJfCQwaB2GB9YrSH",
    "name" : "H 2",
    "content" : "<h2>h.2 Elemental heading</h2>",
    "isContainer" : false
}

,
{
    "_id" : "eZdGcqXDr8v3ZHvmb",
    "parent" : "dmJfCQwaB2GB9YrSH",
    "name" : "H 3",
    "content" : "<h3>h.3 Elemental heading</h3>",
    "isContainer" : false
}

,
{
    "_id" : "hxBSTDhEjJYyspLjT",
    "parent" : "dmJfCQwaB2GB9YrSH",
    "name" : "H 4",
    "content" : "<h4>h.4 Elemental heading</h4>",
    "isContainer" : false
}

,
{
    "_id" : "m6h5h4CtssZwQfGpS",
    "parent" : "dmJfCQwaB2GB9YrSH",
    "name" : "H 5",
    "content" : "<h5>h.5 Elemental heading</h5>",
    "isContainer" : false
}

,
{
    "_id" : "w22F5pbDYjsfGuQSA",
    "parent" : "dmJfCQwaB2GB9YrSH",
    "name" : "H 6",
    "content" : "<h6>h.6 Elemental heading</h6>",
    "isContainer" : false
}

,
{
    "_id" : "AdmTH7J3WSq7DRAy3",
    "parent" : "dmJfCQwaB2GB9YrSH",
    "name" : "H r",
    "content" : "<hr />",
    "isContainer" : false
}

,
{
    "_id" : "8W9JxctMyTsoE4myC",
    "parent" : "55e8b0796c8021a66f627804",
    "name" : "Buttons",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Buttons",
            "value" : "Button size=\"lg\">Large Button</Button"
        }
    ]
}

,
{
    "_id" : "W8WKwT9p9F8hkPnKN",
    "parent" : "8W9JxctMyTsoE4myC",
    "name" : "Sizes",
    "content" : "<Button size=\"lg\">Large Button</Button>\n<Button>Default Button</Button>\n<Button size=\"sm\">Small Button</Button>\n<Button size=\"xs\">Extra Small Button</Button>",
    "isContainer" : false
}

,
{
    "_id" : "8QkLvpn45WkDdCi2C",
    "parent" : "8W9JxctMyTsoE4myC",
    "name" : "Variants",
    "content" : "<Button type=\"primary\">Primary</Button>\n<Button type=\"success\">Success</Button>\n<Button type=\"warning\">Warning</Button>\n<Button type=\"danger\">Danger</Button>",
    "isContainer" : false
}

,
{
    "_id" : "iff67acC6BS4umXRK",
    "parent" : "8W9JxctMyTsoE4myC",
    "name" : "Default",
    "content" : "<Button type=\"default-primary\">Default Primary</Button>\n<Button type=\"default-success\">Default Success</Button>\n<Button type=\"default-warning\">Default Warning</Button>\n<Button type=\"default-danger\">Default Danger</Button>",
    "isContainer" : false
}

,
{
    "_id" : "Hw7ypEutnDgqnwwwk",
    "parent" : "8W9JxctMyTsoE4myC",
    "name" : "Hollow",
    "content" : "<Button type=\"hollow-primary\">Hollow Primary</Button>\n<Button type=\"hollow-success\">Hollow Success</Button>\n<Button type=\"hollow-warning\">Hollow Warning</Button>\n<Button type=\"hollow-danger\">Hollow Danger</Button>",
    "isContainer" : false
}

,
{
    "_id" : "e8neK4mNXqRskKGa3",
    "parent" : "8W9JxctMyTsoE4myC",
    "name" : "Link",
    "content" : "<Button type=\"link\">Link</Button>\n<Button type=\"link-text\">Link Text</Button>\n<Button type=\"link-cancel\">Link Cancel</Button>\n<Button type=\"link-delete\">Link Delete</Button>",
    "isContainer" : false
}

,
{
    "_id" : "dQJj8mR8DqMvm3RTv",
    "parent" : "8W9JxctMyTsoE4myC",
    "name" : "Button groups",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Button groups",
            "value" : "Button type=\"default\">Left</Button"
        }
    ]
}

,
{
    "_id" : "DR7BnKixQ8JmisLtM",
    "parent" : "dQJj8mR8DqMvm3RTv",
    "name" : "Group",
    "content" : "<ButtonGroup>\n\t<Button type=\"default\">Left</Button>\n\t<Button type=\"default\">Middle</Button>\n\t<Button type=\"default\">Right</Button>\n</ButtonGroup>",
    "isContainer" : false
}

,
{
    "_id" : "zEnzSLYXuJFECeRiS",
    "parent" : "55e8b0796c8021a66f627804",
    "name" : "Dropdown",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Dropdown",
            "value" : "Dropdown items={[...]}"
        }
    ]
}

,
{
    "_id" : "SogHCmESwohu2f4FE",
    "parent" : "zEnzSLYXuJFECeRiS",
    "name" : "H",
    "content" : "<Dropdown items={[...]}>\n\t<h3>I am an H3!</h3>\n</Dropdown>",
    "isContainer" : false
}

,
{
    "_id" : "a8dGnpWEAt7jM5bdG",
    "parent" : "55e8b0796c8021a66f627804",
    "name" : "Forms",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Forms",
            "value" : "FormField label=\"Email address\" htmlFor=\"basic-form-input-email\""
        }
    ]
}

,
{
    "_id" : "EBp3Hheker5TZJPDn",
    "parent" : "kkS82H4nuoxN8jkFj",
    "name" : "Basic example",
    "content" : "<Form>\n\t<FormField label=\"Email address\" htmlFor=\"basic-form-input-email\">\n\t\t<FormInput type=\"email\" placeholder=\"Enter email\" name=\"basic-form-input-email\" />\n\t</FormField>\n\t<FormField label=\"Password\" htmlFor=\"basic-form-input-password\">\n\t\t<FormInput type=\"password\" placeholder=\"Password\" name=\"basic-form-input-password\" />\n\t</FormField>\n\t<FormField>\n\t\t<Checkbox label=\"Check it\" />\n\t</FormField>\n\t<Button type=\"default\">Submit</Button>\n</Form>",
    "isContainer" : false
}

,
{
    "_id" : "B6unnRuEDzTgG3QyL",
    "parent" : "kkS82H4nuoxN8jkFj",
    "name" : "Horizontal form",
    "content" : "<Form type=\"horizontal\">\n\t<FormField label=\"Email address\" htmlFor=\"horizontal-form-input-email\">\n\t\t<FormInput type=\"email\" placeholder=\"Enter email\" name=\"horizontal-form-input-email\" />\n\t</FormField>\n\t<FormField label=\"Password\" htmlFor=\"horizontal-form-input-password\">\n\t\t<FormInput type=\"password\" placeholder=\"Password\" name=\"horizontal-form-input-password\" />\n\t</FormField>\n\t<FormField offsetAbsentLabel>\n\t\t<Checkbox label=\"Check it\" />\n\t</FormField>\n\t<FormField offsetAbsentLabel>\n\t\t<Button type=\"default\">Submit</Button>\n\t</FormField>\n</Form>",
    "isContainer" : false
}

,
{
    "_id" : "xCSJHh7vASFRZxtzu",
    "parent" : "kkS82H4nuoxN8jkFj",
    "name" : "Inline form",
    "content" : "<Form type=\"inline\">\n\t<FormField label=\"Email address\" htmlFor=\"inline-form-input-email\">\n\t\t<FormInput type=\"email\" placeholder=\"Enter email\" name=\"inline-form-input-email\" />\n\t</FormField>\n\t<FormField label=\"Password\" htmlFor=\"inline-form-input-password\">\n\t\t<FormInput type=\"password\" placeholder=\"Password\" name=\"inline-form-input-password\" />\n\t</FormField>\n\t<FormField>\n\t\t<Checkbox label=\"Check it\" />\n\t</FormField>\n\t<FormField>\n\t\t<Button type=\"default\">Submit</Button>\n\t</FormField>\n</Form>",
    "isContainer" : false
}

,
{
    "_id" : "cXej6EFRBnNYR9NYC",
    "parent" : "kkS82H4nuoxN8jkFj",
    "name" : "Input groups",
    "content" : "<InputGroup contiguous>\n\t<InputGroup.Section grow>\n\t\t<FormInput type=\"text\" placeholder=\"Input group field\" />\n\t</InputGroup.Section>\n\t<InputGroup.Section>\n\t\t<Button>Button</Button>\n\t</InputGroup.Section>\n</InputGroup>\n<InputGroup contiguous>\n\t<InputGroup.Section type=\"primary\">\n\t\t<Button><span className=\"octicon octicon-pencil\" /></Button>\n\t</InputGroup.Section>\n\t<InputGroup.Section grow>\n\t\t<FormInput type=\"text\" placeholder=\"Input group field\" />\n\t</InputGroup.Section>\n</InputGroup>",
    "isContainer" : false
}

,
{
    "_id" : "HkiRZqFjtCTNWQCFW",
    "parent" : "kkS82H4nuoxN8jkFj",
    "name" : "Separate",
    "content" : "<InputGroup>\n\t<InputGroup.Section grow>\n\t\t<FormInput type=\"text\" placeholder=\"Input group field\" />\n\t</InputGroup.Section>\n\t<InputGroup.Section>\n\t\t<Button type=\"primary\">Button</Button>\n\t</InputGroup.Section>\n</InputGroup>\n<InputGroup>\n\t<InputGroup.Section>\n\t\t<Button type=\"primary\">\n\t\t\t<span className=\"octicon octicon-pencil\" />\n\t\t</Button>\n\t</InputGroup.Section>\n\t<InputGroup.Section grow>\n\t\t<FormInput type=\"text\" placeholder=\"Input group field\" />\n\t</InputGroup.Section>\n</InputGroup>",
    "isContainer" : false
}

,
{
    "_id" : "j5tnZYRQSfDpuZSbF",
    "parent" : "kkS82H4nuoxN8jkFj",
    "name" : "Formations",
    "content" : "<InputGroup contiguous>\n\t<InputGroup.Section>\n\t\t<Button>Alpha</Button>\n\t</InputGroup.Section>\n\t<InputGroup.Section grow>\n\t\t<FormInput type=\"text\" placeholder=\"Input group field\" />\n\t</InputGroup.Section>\n\t<InputGroup.Section>\n\t\t<Button type=\"primary\">Omega</Button>\n\t</InputGroup.Section>\n</InputGroup>\n<InputGroup>\n\t<InputGroup.Section grow>\n\t\t<FormInput type=\"text\" placeholder=\"Input group field\" />\n\t</InputGroup.Section>\n\t<InputGroup.Section>\n\t\t<Button type=\"primary\">Primary</Button>\n\t</InputGroup.Section>\n\t<InputGroup.Section>\n\t\t<Button>Default</Button>\n\t</InputGroup.Section>\n</InputGroup>",
    "isContainer" : false
}

,
{
    "_id" : "q23mFiF4ZXpz4v2D3",
    "parent" : "kkS82H4nuoxN8jkFj",
    "name" : "Sizes",
    "content" : "<FormField label=\"Input\" htmlFor=\"supported-controls-input\">\n\t<FormInput placeholder=\"Input\" name=\"supported-controls-input\" />\n</FormField>\n<FormField label=\"Large Input\" htmlFor=\"supported-controls-input-lg\">\n\t<FormInput placeholder=\"Large\" name=\"supported-controls-input-lg\" size=\"lg\" />\n</FormField>\n<FormField label=\"Small Input\" htmlFor=\"supported-controls-input-sm\">\n\t<FormInput placeholder=\"Small\" name=\"supported-controls-input-sm\" size=\"sm\" />\n</FormField>",
    "isContainer" : false
}

,
{
    "_id" : "fpEphyNJwCA46LDds",
    "parent" : "kkS82H4nuoxN8jkFj",
    "name" : "Supported controls",
    "content" : "<FormField label=\"Input\" htmlFor=\"supported-controls-input\">\n\t<FormInput placeholder=\"Input\" name=\"supported-controls-input\" />\n</FormField>\n<FormField label=\"Large Input\" htmlFor=\"supported-controls-input-lg\">\n\t<FormInput placeholder=\"Large\" name=\"supported-controls-input-lg\" size=\"lg\" />\n</FormField>\n<FormField label=\"Small Input\" htmlFor=\"supported-controls-input-sm\">\n\t<FormInput placeholder=\"Small\" name=\"supported-controls-input-sm\" size=\"sm\" />\n</FormField>",
    "isContainer" : false
}

,
{
    "_id" : "b5y7XPbdHJcquzQ7m",
    "parent" : "kkS82H4nuoxN8jkFj",
    "name" : "Supported controls 1",
    "content" : "<FormInput placeholder=\"Textarea\" multiline />",
    "isContainer" : false
}

,
{
    "_id" : "vTmSvQMDCkq4bgAgg",
    "parent" : "kkS82H4nuoxN8jkFj",
    "name" : "Supported control 2",
    "content" : "<FormSelect options={[...]} firstOption=\"Select\" onChange={this.handleSelect} />",
    "isContainer" : false
}

,
{
    "_id" : "4joMDwrfoGoXDHGEa",
    "parent" : "kkS82H4nuoxN8jkFj",
    "name" : "Checkbox",
    "content" : "<FormField label=\"Checkboxes\">\n\t<Checkbox label=\"Check me out\" />\n\t<Checkbox label=\"I'm disabled\" disabled />\n</FormField>\n<FormField label=\"Radios\">\n\t<Radio name=\"default_radios\" label=\"Pick me\" />\n\t<Radio name=\"default_radios\" label=\"Pick me\" />\n</FormField>\n<FormField label=\"Inline Checkboxes\">\n\t<div className=\"inline-controls\">\n\t\t<Checkbox label=\"Check me out\" />\n\t\t<Checkbox label=\"I'm disabled\" disabled />\n\t</div>\n</FormField>\n<FormField label=\"Inline Radios\">\n\t<div className=\"inline-controls\">\n\t\t<Radio name=\"inline_radios\" label=\"Pick me\" />\n\t\t<Radio name=\"inline_radios\" label=\"Pick me\" />\n\t</div>\n</FormField>",
    "isContainer" : false
}

,
{
    "_id" : "uXrDFyTTRdspBB8ai",
    "parent" : "kkS82H4nuoxN8jkFj",
    "name" : "Disabled state",
    "content" : "<FormField label=\"Input\" htmlFor=\"supported-controls-input-disabled\">\n\t<FormInput placeholder=\"Input\" name=\"supported-controls-input-disabled\" disabled />\n</FormField>\n<FormField label=\"Textarea\" htmlFor=\"supported-controls-textarea\">\n\t<FormInput placeholder=\"Textarea\" name=\"supported-controls-textarea-disabled\" disabled multiline />\n</FormField>\n<FormSelect label=\"Select\" options={controlOptions} onChange={updateSelect} htmlFor=\"supported-conrols-select-disabled\" firstOption=\"Select\" disabled />\n<FormField label=\"Checkboxes\">\n\t<Checkbox label=\"Check me out\" disabled />\n</FormField>\n<FormField label=\"Radios\">\n\t<Radio name=\"default_radios\" label=\"Pick me\" disabled />\n</FormField>",
    "isContainer" : false
}

,
{
    "_id" : "DRrqpK9xKcStHQ3HM",
    "parent" : "kkS82H4nuoxN8jkFj",
    "name" : "Notes",
    "content" : "<FormField label=\"Input with note\">\n\t<FormInput />\n\t<FormNote>A note to help the user understand its associated field; may extend beyond one line.</FormNote>\n</FormField>",
    "isContainer" : false
}

,
{
    "_id" : "Eq8CfecpwkZDJagmy",
    "parent" : "kkS82H4nuoxN8jkFj",
    "name" : "Complex forms",
    "content" : "<FormRow>\n\t<FormField width=\"one-half\" label=\"Credit Card Number\" htmlFor=\"credit-card-number\">\n\t\t<FormInput pattern=\"[0-9]*\" placeholder=\"Card Number\" name=\"credit-card-number\" />\n\t</FormField>\n\t<FormField width=\"one-quarter\" label=\"Expiration\" htmlFor=\"credit-card-expiration\">\n\t\t<FormInput placeholder=\"MM/YYYY\" name=\"credit-card-expiration\" />\n\t</FormField>\n\t<FormField width=\"one-quarter\" label=\"Security Code (CCV)\" htmlFor=\"credit-card-security\">\n\t\t<FormInput pattern=\"[0-9]*\" placeholder=\"123\" name=\"credit-card-security\" />\n\t</FormField>\n</FormRow>\n<FormRow>\n\t<FormField width=\"one-half\" label=\"First Name\" htmlFor=\"first-name\">\n\t\t<FormInput placeholder=\"First Name\" name=\"first-name\" />\n\t</FormField>\n\t<FormField width=\"one-half\" label=\"Last Name\" htmlFor=\"last-name\">\n\t\t<FormInput placeholder=\"Last Name\" name=\"last-name\" />\n\t</FormField>\n</FormRow>\n<FormField label=\"Billing Address\" htmlFor=\"address-street1\">\n\t<FormInput placeholder=\"Address Line 1\" name=\"address-street1\" />\n</FormField>\n<FormField>\n\t<FormInput placeholder=\"Address Line 2\" name=\"address-street2\" />\n</FormField>\n<FormRow>\n\t<FormField width=\"two-thirds\">\n\t\t<FormInput placeholder=\"City\" name=\"city\" />\n\t</FormField>\n\t<FormField width=\"one-third\">\n\t\t<FormInput placeholder=\"State\" name=\"state\" />\n\t</FormField>\n\t<FormField width=\"one-third\">\n\t\t<FormInput width=\"one-third\" placeholder=\"Post Code\" name=\"city\" />\n\t</FormField>\n\t<FormField width=\"two-thirds\">\n\t\t<FormSelect options={countryOptions} firstOption=\"Country\" onChange={updateSelect} />\n\t</FormField>\n</FormRow>",
    "isContainer" : false
}

,
{
    "_id" : "YccPETPh2rPfWeR4w",
    "parent" : "kkS82H4nuoxN8jkFj",
    "name" : "Icons",
    "content" : "<FormRow>\n\t<FormIconField width=\"one-half\" iconPosition=\"left\" iconColor=\"default\" iconKey=\"star\">\n\t\t<FormInput placeholder=\"Left Aligned\" name=\"icon-alignment-left\" />\n\t</FormIconField>\n\t<FormIconField width=\"one-half\" iconPosition=\"right\" iconColor=\"default\" iconKey=\"star\">\n\t\t<FormInput placeholder=\"Right Aligned\" name=\"icon-alignment-right\" />\n\t</FormIconField>\n</FormRow>",
    "isContainer" : false
}

,
{
    "_id" : "aykMBpjeFX6f3Rhya",
    "parent" : "kkS82H4nuoxN8jkFj",
    "name" : "Context",
    "content" : "<FormRow>\n\t<FormIconField width=\"one-fifth\" iconPosition=\"left\" iconKey=\"star\" iconColor=\"default\">\n\t\t<FormInput placeholder=\"Default\" />\n\t</FormIconField>\n\t<FormIconField width=\"one-fifth\" iconPosition=\"left\" iconKey=\"info\" iconColor=\"primary\">\n\t\t<FormInput placeholder=\"Primary\" />\n\t</FormIconField>\n\t<FormIconField width=\"one-fifth\" iconPosition=\"left\" iconKey=\"check\" iconColor=\"success\">\n\t\t<FormInput placeholder=\"Success\" />\n\t</FormIconField>\n\t<FormIconField width=\"one-fifth\" iconPosition=\"left\" iconKey=\"alert\" iconColor=\"warning\">\n\t\t<FormInput placeholder=\"Warning\" />\n\t</FormIconField>\n\t<FormIconField width=\"one-fifth\" iconPosition=\"left\" iconKey=\"stop\" iconColor=\"danger\">\n\t\t<FormInput placeholder=\"Danger\" />\n\t</FormIconField>\n</FormRow>",
    "isContainer" : false
}

,
{
    "_id" : "SdScrfvfnQP2sCBxQ",
    "parent" : "kkS82H4nuoxN8jkFj",
    "name" : "Fill",
    "content" : "<FormRow>\n\t<FormIconField width=\"one-fifth\" iconPosition=\"left\" iconKey=\"star\" iconFill=\"default\">\n\t\t<FormInput placeholder=\"Default\" />\n\t</FormIconField>\n\t<FormIconField width=\"one-fifth\" iconPosition=\"left\" iconKey=\"info\" iconFill=\"primary\">\n\t\t<FormInput placeholder=\"Primary\" />\n\t</FormIconField>\n\t<FormIconField width=\"one-fifth\" iconPosition=\"left\" iconKey=\"check\" iconFill=\"success\">\n\t\t<FormInput placeholder=\"Success\" />\n\t</FormIconField>\n\t<FormIconField width=\"one-fifth\" iconPosition=\"left\" iconKey=\"alert\" iconFill=\"warning\">\n\t\t<FormInput placeholder=\"Warning\" />\n\t</FormIconField>\n\t<FormIconField width=\"one-fifth\" iconPosition=\"left\" iconKey=\"stop\" iconFill=\"danger\">\n\t\t<FormInput placeholder=\"Danger\" />\n\t</FormIconField>\n</FormRow>",
    "isContainer" : false
}

,
{
    "_id" : "TF7mS3AvQB584jR5D",
    "parent" : "kkS82H4nuoxN8jkFj",
    "name" : "Loading",
    "content" : "<FormIconField iconPosition=\"right\" iconKey=\"search\" iconColor=\"default\" iconIsLoading={this.state.searching}>\n\t<FormInput onChange={this.handleSearch} type=\"search\" placeholder=\"Search...\" name=\"icon-form-search\" />\n</FormIconField>",
    "isContainer" : false
}

,
{
    "_id" : "4JhFJ3t45qthvruzp",
    "parent" : "gdMznyvBSCZCA8eKe",
    "name" : "Inside buttons",
    "content" : "<Button><Spinner /></Button>\n<Button disabled><Spinner type=\"primary\" />Saving</Button>\n<Button type=\"primary\"><Spinner type=\"inverted\" />Submitting</Button>",
    "isContainer" : false
}

,
{
    "_id" : "95MJ4BSzfNFr8z2Lx",
    "parent" : "C2h47hbjv9Z6hMvRA",
    "name" : "Static example",
    "content" : "<Modal>\n\t<ModalHeader text=\"Modal Header\" showCloseButton />\n\t<ModalBody>\n\t\t<p>Content and controls go in the Modal Body.</p>\n\t</ModalBody>\n\t<ModalFooter>\n\t\t<Button type=\"primary\">Modal Footer</Button>\n\t\t<Button type=\"link-cancel\">Button</Button>\n\t</ModalFooter>\n</Modal>",
    "isContainer" : false
}

,
{
    "_id" : "9K4nTZc2He5oFdKNs",
    "parent" : "C2h47hbjv9Z6hMvRA",
    "name" : "Live demo",
    "content" : "<Button onClick={this.toggleModal}>Launch Modal</Button>",
    "isContainer" : false
}

,
{
    "_id" : "2EAZTGeeP7r3qEGyF",
    "parent" : "C2h47hbjv9Z6hMvRA",
    "name" : "Open",
    "content" : "<Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal} backdropClosesModal>\n\t<ModalHeader text=\"Live Demo\" showCloseButton onClose={this.toggleModal} />\n\t<form action=\"#\" onSubmit={this.submitForm} noValidate>\n\t\t<ModalBody>\n\t\t\t<FormField label=\"Email\">\n\t\t\t\t<FormInput label=\"Email\" type=\"email\" name=\"email\" ref=\"email\" value={this.state.email} onChange={updateInput} required />\n\t\t\t</FormField>\n\t\t\t<FormField label=\"Password\">\n\t\t\t\t<FormInput label=\"Password\" type=\"password\" name=\"password\" ref=\"password\" value={this.state.password} onChange={updateInput} required />\n\t\t\t</FormField>\n\t\t</ModalBody>\n\t\t<ModalFooter>\n\t\t\t{submitButton}\n\t\t\t<Button onClick={this.toggleModal} type=\"link-cancel\" disabled={this.state.formProcessing}>Cancel</Button>\n\t\t</ModalFooter>\n\t</form>\n</Modal>",
    "isContainer" : false
}

,
{
    "_id" : "eoXZHqp46kzsxbqAe",
    "parent" : "C2h47hbjv9Z6hMvRA",
    "name" : "Button",
    "content" : "<Button type=\"primary\" disabled>\n\t\t<Spinner type=\"inverted\" />\n\t\tSubmitting\n\t</Button>\n) : (\n\t<Button type=\"primary\" disabled={!this.state.email || !this.state.password} submit>Submit</Button>",
    "isContainer" : false
}

,
{
    "_id" : "ZDi4KywsijDc3YuGj",
    "parent" : "uhkadzMqsYp3Ydwaw",
    "name" : "Alerts",
    "content" : "<Alert type=\"info\"><strong>Info:</strong> This could be something helpful, better read it just to make sure.</Alert>\n<Alert type=\"success\"><strong>Success:</strong> Nothing to worry about, everything is going great!</Alert>\n<Alert type=\"warning\"><strong>Warning:</strong> Pay attention to me, things are not going according to plan.</Alert>\n<Alert type=\"danger\"><strong>Error:</strong> You need to take action, something has gone terribly wrong!</Alert>",
    "isContainer" : false
}
,
{
    "_id" : "55e1e0c3ab7a9f060e7eed08",
    "parent" : "WBkkypKLQ2QdQMGF2",
    "name" : "bootstrap",
    "isContainer" : false
}

,
{
    "_id" : "yc5a7GkdygSzzm5i9",
    "parent" : "55e1e0c3ab7a9f060e7eed08",
    "name" : "Grid system",
    "isContainer" : false
}

,
{
    "_id" : "6FShXA89CqJraNGyh",
    "parent" : "55e1e0c3ab7a9f060e7eed08",
    "name" : "Typography",
    "isContainer" : false
}

,
{
    "_id" : "ioZR95t8iDvERw3Jj",
    "parent" : "55e1e0c3ab7a9f060e7eed08",
    "name" : "Code",
    "isContainer" : false
}

,
{
    "_id" : "DXsHm3zYkRd2kaiTS",
    "parent" : "55e1e0c3ab7a9f060e7eed08",
    "name" : "Tables",
    "isContainer" : false
}

,
{
    "_id" : "d7yX3ZERgGAbR7uW7",
    "parent" : "55e1e0c3ab7a9f060e7eed08",
    "name" : "Forms",
    "isContainer" : false
}

,
{
    "_id" : "xPjGMEByALKSK9mLA",
    "parent" : "55e1e0c3ab7a9f060e7eed08",
    "name" : "Buttons",
    "isContainer" : false
}

,
{
    "_id" : "xfHv8sZ23czxeS7K5",
    "parent" : "55e1e0c3ab7a9f060e7eed08",
    "name" : "Images",
    "isContainer" : false
}

,
{
    "_id" : "phs274RCvzoAiegQ6",
    "parent" : "55e1e0c3ab7a9f060e7eed08",
    "name" : "Helper calsses",
    "isContainer" : false
}

,
{
    "_id" : "kmNe5QxtpCqhHWt7r",
    "parent" : "55e1e0c3ab7a9f060e7eed08",
    "name" : "Responsive utils",
    "isContainer" : false
}

,
{
    "_id" : "DixpoaPkZh2LTXXAZ",
    "parent" : "55e1e0c3ab7a9f060e7eed08",
    "name" : "Components",
    "isContainer" : false
}

,
{
    "_id" : "5eAHYJaDz7cRmcqft",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Glyphicons",
    "isContainer" : false
}

,
{
    "_id" : "hq5i8tupRhRGXyQqA",
    "parent" : "55e1e0c3ab7a9f060e7eed08",
    "name" : "Javascript",
    "isContainer" : false
}

,
{
    "_id" : "XdZokNhX9NHQgzCKo",
    "parent" : "hq5i8tupRhRGXyQqA",
    "name" : "Overview",
    "isContainer" : false
}

,
{
    "_id" : "wYaETJNEnz3HQE9R4",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Static control 2",
    "content" : "<form class=\"form-inline\">\n  <div class=\"form-group\">\n    <label class=\"sr-only\">Email</label>\n    <p class=\"form-control-static\">email@example.com</p>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputPassword2\" class=\"sr-only\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"Password\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Confirm identity</button>\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "iXio7bz7kNQEEENzM",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Disabled fieldsets",
    "content" : "<form>\n  <fieldset disabled>\n    <div class=\"form-group\">\n      <label for=\"disabledTextInput\">Disabled input</label>\n      <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"Disabled input\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"disabledSelect\">Disabled select menu</label>\n      <select id=\"disabledSelect\" class=\"form-control\">\n        <option>Disabled select</option>\n      </select>\n    </div>\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\"> Can't check this\n      </label>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </fieldset>\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "nDZvnEJJKwGBE4v28",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Horizontal form group sizes",
    "content" : "<form class=\"form-horizontal\">\n  <div class=\"form-group form-group-lg\">\n    <label class=\"col-sm-2 control-label\" for=\"formGroupInputLarge\">Large label</label>\n    <div class=\"col-sm-10\">\n      <input class=\"form-control\" type=\"text\" id=\"formGroupInputLarge\" placeholder=\"Large input\">\n    </div>\n  </div>\n  <div class=\"form-group form-group-sm\">\n    <label class=\"col-sm-2 control-label\" for=\"formGroupInputSmall\">Small label</label>\n    <div class=\"col-sm-10\">\n      <input class=\"form-control\" type=\"text\" id=\"formGroupInputSmall\" placeholder=\"Small input\">\n    </div>\n  </div>\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "9zgWknv7v8kF28W3p",
    "parent" : "xPjGMEByALKSK9mLA",
    "name" : "Sizes",
    "content" : "<p>\n  <button type=\"button\" class=\"btn btn-primary btn-lg\">Large button</button>\n  <button type=\"button\" class=\"btn btn-default btn-lg\">Large button</button>\n</p>\n<p>\n  <button type=\"button\" class=\"btn btn-primary\">Default button</button>\n  <button type=\"button\" class=\"btn btn-default\">Default button</button>\n</p>\n<p>\n  <button type=\"button\" class=\"btn btn-primary btn-sm\">Small button</button>\n  <button type=\"button\" class=\"btn btn-default btn-sm\">Small button</button>\n</p>\n<p>\n  <button type=\"button\" class=\"btn btn-primary btn-xs\">Extra small button</button>\n  <button type=\"button\" class=\"btn btn-default btn-xs\">Extra small button</button>\n</p>",
    "isContainer" : false
}

,
{
    "_id" : "YY7LX4rmqgCoLtmJJ",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Examples",
    "content" : "<button type=\"button\" class=\"btn btn-default\" aria-label=\"Left Align\">\n  <span class=\"glyphicon glyphicon-align-left\" aria-hidden=\"true\"></span>\n</button>\n\n<button type=\"button\" class=\"btn btn-default btn-lg\">\n  <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span> Star\n</button>",
    "isContainer" : false
}

,
{
    "_id" : "n6AaC6Xibe6eKymi4",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Example 2",
    "content" : "<div class=\"alert alert-danger\" role=\"alert\">\n  <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Error:</span>\n  Enter a valid email address\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "HYBMSNjTKWtrvueam",
    "parent" : "5eAHYJaDz7cRmcqft",
    "name" : "Examples",
    "content" : "<button type=\"button\" class=\"btn btn-default\" aria-label=\"Left Align\">\n  <span class=\"glyphicon glyphicon-align-left\" aria-hidden=\"true\"></span>\n</button>\n\n<button type=\"button\" class=\"btn btn-default btn-lg\">\n  <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span> Star\n</button>",
    "isContainer" : false
}

,
{
    "_id" : "YGscdvNT9SFREBEYR",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Dropdowns",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Dropdowns",
            "value" : "<div class=\"dropdown\">"
        }
    ]
}

,
{
    "_id" : "tyCeEFMMuCyeQExkd",
    "parent" : "yc5a7GkdygSzzm5i9",
    "name" : "Stacked-to-horizontal",
    "content" : "<div class=\"row\">\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-8\">.col-md-8</div>\n  <div class=\"col-md-4\">.col-md-4</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\">.col-md-4</div>\n  <div class=\"col-md-4\">.col-md-4</div>\n  <div class=\"col-md-4\">.col-md-4</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6\">.col-md-6</div>\n  <div class=\"col-md-6\">.col-md-6</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "hgs69GSDmePhH7wgT",
    "parent" : "yc5a7GkdygSzzm5i9",
    "name" : "Mobile and desktop",
    "content" : "<div class=\"row\">\n  <div class=\"col-xs-12 col-md-8\">.col-xs-12 .col-md-8</div>\n  <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n</div>\n\n<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->\n<div class=\"row\">\n  <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n  <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n  <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n</div>\n\n<!-- Columns are always 50% wide, on mobile and desktop -->\n<div class=\"row\">\n  <div class=\"col-xs-6\">.col-xs-6</div>\n  <div class=\"col-xs-6\">.col-xs-6</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "DubvadsjNgLXJ93Np",
    "parent" : "yc5a7GkdygSzzm5i9",
    "name" : "Mobile, tablet, desktop",
    "content" : "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-6 col-md-8\">.col-xs-12 .col-sm-6 .col-md-8</div>\n  <div class=\"col-xs-6 col-md-4\">.col-xs-6 .col-md-4</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-6 col-sm-4\">.col-xs-6 .col-sm-4</div>\n  <div class=\"col-xs-6 col-sm-4\">.col-xs-6 .col-sm-4</div>\n  <!-- Optional: clear the XS cols if their content doesn't match in height -->\n  <div class=\"clearfix visible-xs-block\"></div>\n  <div class=\"col-xs-6 col-sm-4\">.col-xs-6 .col-sm-4</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "xjLtDrd9HS2sR26Xi",
    "parent" : "yc5a7GkdygSzzm5i9",
    "name" : "Responsive column resets",
    "content" : "<div class=\"row\">\n  <div class=\"col-xs-6 col-sm-3\">.col-xs-6 .col-sm-3</div>\n  <div class=\"col-xs-6 col-sm-3\">.col-xs-6 .col-sm-3</div>\n\n  <!-- Add the extra clearfix for only the required viewport -->\n  <div class=\"clearfix visible-xs-block\"></div>\n\n  <div class=\"col-xs-6 col-sm-3\">.col-xs-6 .col-sm-3</div>\n  <div class=\"col-xs-6 col-sm-3\">.col-xs-6 .col-sm-3</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "97cpukJSmkiZr4GRu",
    "parent" : "yc5a7GkdygSzzm5i9",
    "name" : "Column resets",
    "content" : "<div class=\"row\">\n  <div class=\"col-sm-5 col-md-6\">.col-sm-5 .col-md-6</div>\n  <div class=\"col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0\">.col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-6 col-md-5 col-lg-6\">.col-sm-6 .col-md-5 .col-lg-6</div>\n  <div class=\"col-sm-6 col-md-5 col-md-offset-2 col-lg-6 col-lg-offset-0\">.col-sm-6 .col-md-5 .col-md-offset-2 .col-lg-6 .col-lg-offset-0</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "fs7qnA3CQZzhChBn4",
    "parent" : "yc5a7GkdygSzzm5i9",
    "name" : "Offsetting columns",
    "content" : "<div class=\"row\">\n  <div class=\"col-md-4\">.col-md-4</div>\n  <div class=\"col-md-4 col-md-offset-4\">.col-md-4 .col-md-offset-4</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-3 col-md-offset-3\">.col-md-3 .col-md-offset-3</div>\n  <div class=\"col-md-3 col-md-offset-3\">.col-md-3 .col-md-offset-3</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6 col-md-offset-3\">.col-md-6 .col-md-offset-3</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "62rXevPkvawGk6N9s",
    "parent" : "6FShXA89CqJraNGyh",
    "name" : "Addresses",
    "content" : "<address>\n  <strong>Twitter, Inc.</strong><br>\n  795 Folsom Ave, Suite 600<br>\n  San Francisco, CA 94107<br>\n  <abbr title=\"Phone\">P:</abbr> (123) 456-7890\n</address>\n\n<address>\n  <strong>Full Name</strong><br>\n  <a href=\"mailto:#\">first.last@example.com</a>\n</address>",
    "isContainer" : false
}

,
{
    "_id" : "rpZA3yTDhXE6TjHHg",
    "parent" : "6FShXA89CqJraNGyh",
    "name" : "Default blockquote",
    "content" : "<blockquote>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n</blockquote>",
    "isContainer" : false
}

,
{
    "_id" : "GeRpSAjjECqLzyroq",
    "parent" : "6FShXA89CqJraNGyh",
    "name" : "Blockquote options",
    "content" : "<blockquote>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n  <footer>Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\n</blockquote>",
    "isContainer" : false
}

,
{
    "_id" : "qwnuvZgf6GFhQW9iz",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Basic example",
    "content" : "<form>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputFile\">File input</label>\n    <input type=\"file\" id=\"exampleInputFile\">\n    <p class=\"help-block\">Example block-level help text here.</p>\n  </div>\n  <div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\"> Check me out\n    </label>\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "scx2WyhHQZdJACu6K",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Inline form",
    "content" : "<form class=\"form-inline\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputName2\">Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"exampleInputName2\" placeholder=\"Jane Doe\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail2\">Email</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"jane.doe@example.com\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Send invitation</button>\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "txCrxTCGukRq2D3Nf",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Example",
    "content" : "<form class=\"form-inline\">\n  <div class=\"form-group\">\n    <label class=\"sr-only\" for=\"exampleInputEmail3\">Email address</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail3\" placeholder=\"Email\">\n  </div>\n  <div class=\"form-group\">\n    <label class=\"sr-only\" for=\"exampleInputPassword3\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword3\" placeholder=\"Password\">\n  </div>\n  <div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\"> Remember me\n    </label>\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "bM62sHMs8y3EwJJYu",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Example 2",
    "content" : "<form class=\"form-inline\">\n  <div class=\"form-group\">\n    <label class=\"sr-only\" for=\"exampleInputAmount\">Amount (in dollars)</label>\n    <div class=\"input-group\">\n      <div class=\"input-group-addon\">$</div>\n      <input type=\"text\" class=\"form-control\" id=\"exampleInputAmount\" placeholder=\"Amount\">\n      <div class=\"input-group-addon\">.00</div>\n    </div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Transfer cash</button>\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "Gj9Ggyx3dxPgwtnPC",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Horizontal form",
    "content" : "<form class=\"form-horizontal\">\n  <div class=\"form-group\">\n    <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n    <div class=\"col-sm-10\">\n      <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n    <div class=\"col-sm-10\">\n      <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <div class=\"checkbox\">\n        <label>\n          <input type=\"checkbox\"> Remember me\n        </label>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n    </div>\n  </div>\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "ZrXEAtd67o3zgb3YS",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Textarea",
    "content" : "<textarea class=\"form-control\" rows=\"3\"></textarea>",
    "isContainer" : false
}

,
{
    "_id" : "KKxE7ibftht4cxT5h",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Checkboxes and radios",
    "content" : "<div class=\"checkbox\">\n  <label>\n    <input type=\"checkbox\" value=\"\">\n    Option one is this and that&mdash;be sure to include why it's great\n  </label>\n</div>\n<div class=\"checkbox disabled\">\n  <label>\n    <input type=\"checkbox\" value=\"\" disabled>\n    Option two is disabled\n  </label>\n</div>\n\n<div class=\"radio\">\n  <label>\n    <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked>\n    Option one is this and that&mdash;be sure to include why it's great\n  </label>\n</div>\n<div class=\"radio\">\n  <label>\n    <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\">\n    Option two can be something else and selecting it will deselect option one\n  </label>\n</div>\n<div class=\"radio disabled\">\n  <label>\n    <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" value=\"option3\" disabled>\n    Option three is disabled\n  </label>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "qHnYAus4X53Z2D2ii",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Inline checkboxes and radios",
    "content" : "<label class=\"checkbox-inline\">\n  <input type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\"> 1\n</label>\n<label class=\"checkbox-inline\">\n  <input type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\"> 2\n</label>\n<label class=\"checkbox-inline\">\n  <input type=\"checkbox\" id=\"inlineCheckbox3\" value=\"option3\"> 3\n</label>\n\n<label class=\"radio-inline\">\n  <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\"> 1\n</label>\n<label class=\"radio-inline\">\n  <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\"> 2\n</label>\n<label class=\"radio-inline\">\n  <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\"> 3\n</label>",
    "isContainer" : false
}

,
{
    "_id" : "Yd74NyFBSgmeFLyo3",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Checkboxes and radios without label text",
    "content" : "<div class=\"checkbox\">\n  <label>\n    <input type=\"checkbox\" id=\"blankCheckbox\" value=\"option1\" aria-label=\"...\">\n  </label>\n</div>\n<div class=\"radio\">\n  <label>\n    <input type=\"radio\" name=\"blankRadio\" id=\"blankRadio1\" value=\"option1\" aria-label=\"...\">\n  </label>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "8ye8eujHpu9biY6po",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Selects",
    "content" : "<select class=\"form-control\">\n  <option>1</option>\n  <option>2</option>\n  <option>3</option>\n  <option>4</option>\n  <option>5</option>\n</select>",
    "isContainer" : false
}

,
{
    "_id" : "RZp284pJP4Joi7xJy",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Selects 2",
    "content" : "<select multiple class=\"form-control\">\n  <option>1</option>\n  <option>2</option>\n  <option>3</option>\n  <option>4</option>\n  <option>5</option>\n</select>",
    "isContainer" : false
}

,
{
    "_id" : "L3FbXdyZBKD78ii7A",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Static control",
    "content" : "<form class=\"form-horizontal\">\n  <div class=\"form-group\">\n    <label class=\"col-sm-2 control-label\">Email</label>\n    <div class=\"col-sm-10\">\n      <p class=\"form-control-static\">email@example.com</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Password</label>\n    <div class=\"col-sm-10\">\n      <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\n    </div>\n  </div>\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "SrWSXrkkoBMLRt8uv",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Validation states",
    "content" : "<div class=\"form-group has-success\">\n  <label class=\"control-label\" for=\"inputSuccess1\">Input with success</label>\n  <input type=\"text\" class=\"form-control\" id=\"inputSuccess1\">\n</div>\n<div class=\"form-group has-warning\">\n  <label class=\"control-label\" for=\"inputWarning1\">Input with warning</label>\n  <input type=\"text\" class=\"form-control\" id=\"inputWarning1\">\n</div>\n<div class=\"form-group has-error\">\n  <label class=\"control-label\" for=\"inputError1\">Input with error</label>\n  <input type=\"text\" class=\"form-control\" id=\"inputError1\">\n</div>\n<div class=\"has-success\">\n  <div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\" id=\"checkboxSuccess\" value=\"option1\">\n      Checkbox with success\n    </label>\n  </div>\n</div>\n<div class=\"has-warning\">\n  <div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\" id=\"checkboxWarning\" value=\"option1\">\n      Checkbox with warning\n    </label>\n  </div>\n</div>\n<div class=\"has-error\">\n  <div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\" id=\"checkboxError\" value=\"option1\">\n      Checkbox with error\n    </label>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "9eGoQDupSDpQipJgs",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "With optional icons",
    "content" : "<div class=\"form-group has-success has-feedback\">\n  <label class=\"control-label\" for=\"inputSuccess2\">Input with success</label>\n  <input type=\"text\" class=\"form-control\" id=\"inputSuccess2\" aria-describedby=\"inputSuccess2Status\">\n  <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n  <span id=\"inputSuccess2Status\" class=\"sr-only\">(success)</span>\n</div>\n<div class=\"form-group has-warning has-feedback\">\n  <label class=\"control-label\" for=\"inputWarning2\">Input with warning</label>\n  <input type=\"text\" class=\"form-control\" id=\"inputWarning2\" aria-describedby=\"inputWarning2Status\">\n  <span class=\"glyphicon glyphicon-warning-sign form-control-feedback\" aria-hidden=\"true\"></span>\n  <span id=\"inputWarning2Status\" class=\"sr-only\">(warning)</span>\n</div>\n<div class=\"form-group has-error has-feedback\">\n  <label class=\"control-label\" for=\"inputError2\">Input with error</label>\n  <input type=\"text\" class=\"form-control\" id=\"inputError2\" aria-describedby=\"inputError2Status\">\n  <span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\n  <span id=\"inputError2Status\" class=\"sr-only\">(error)</span>\n</div>\n<div class=\"form-group has-success has-feedback\">\n  <label class=\"control-label\" for=\"inputGroupSuccess1\">Input group with success</label>\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\">@</span>\n    <input type=\"text\" class=\"form-control\" id=\"inputGroupSuccess1\" aria-describedby=\"inputGroupSuccess1Status\">\n  </div>\n  <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n  <span id=\"inputGroupSuccess1Status\" class=\"sr-only\">(success)</span>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "NGR2kwCobThJ8goy6",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Optional icons in horizontal and inline forms",
    "content" : "<form class=\"form-horizontal\">\n  <div class=\"form-group has-success has-feedback\">\n    <label class=\"control-label col-sm-3\" for=\"inputSuccess3\">Input with success</label>\n    <div class=\"col-sm-9\">\n      <input type=\"text\" class=\"form-control\" id=\"inputSuccess3\" aria-describedby=\"inputSuccess3Status\">\n      <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n      <span id=\"inputSuccess3Status\" class=\"sr-only\">(success)</span>\n    </div>\n  </div>\n  <div class=\"form-group has-success has-feedback\">\n    <label class=\"control-label col-sm-3\" for=\"inputGroupSuccess2\">Input group with success</label>\n    <div class=\"col-sm-9\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">@</span>\n        <input type=\"text\" class=\"form-control\" id=\"inputGroupSuccess2\" aria-describedby=\"inputGroupSuccess2Status\">\n      </div>\n      <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n      <span id=\"inputGroupSuccess2Status\" class=\"sr-only\">(success)</span>\n    </div>\n  </div>\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "3MwLfJ5q4QKmWhMX7",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Form inline",
    "content" : "<form class=\"form-inline\">\n  <div class=\"form-group has-success has-feedback\">\n    <label class=\"control-label\" for=\"inputSuccess4\">Input with success</label>\n    <input type=\"text\" class=\"form-control\" id=\"inputSuccess4\" aria-describedby=\"inputSuccess4Status\">\n    <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n    <span id=\"inputSuccess4Status\" class=\"sr-only\">(success)</span>\n  </div>\n</form>\n<form class=\"form-inline\">\n  <div class=\"form-group has-success has-feedback\">\n    <label class=\"control-label\" for=\"inputGroupSuccess3\">Input group with success</label>\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\">@</span>\n      <input type=\"text\" class=\"form-control\" id=\"inputGroupSuccess3\" aria-describedby=\"inputGroupSuccess3Status\">\n    </div>\n    <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n    <span id=\"inputGroupSuccess3Status\" class=\"sr-only\">(success)</span>\n  </div>\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "q9Q2Lpr3fDAJmP4xr",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Column sizing",
    "content" : "<div class=\"row\">\n  <div class=\"col-xs-2\">\n    <input type=\"text\" class=\"form-control\" placeholder=\".col-xs-2\">\n  </div>\n  <div class=\"col-xs-3\">\n    <input type=\"text\" class=\"form-control\" placeholder=\".col-xs-3\">\n  </div>\n  <div class=\"col-xs-4\">\n    <input type=\"text\" class=\"form-control\" placeholder=\".col-xs-4\">\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "6yi4cB4zGMsDDLvTp",
    "parent" : "xPjGMEByALKSK9mLA",
    "name" : "Create block level buttons",
    "content" : "<button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">Block level button</button>\n<button type=\"button\" class=\"btn btn-default btn-lg btn-block\">Block level button</button>",
    "isContainer" : false
}

,
{
    "_id" : "zLiHDAYQ4CK9tAbNv",
    "parent" : "xPjGMEByALKSK9mLA",
    "name" : "Active state",
    "content" : "<button type=\"button\" class=\"btn btn-primary btn-lg active\">Primary button</button>\n<button type=\"button\" class=\"btn btn-default btn-lg active\">Button</button>",
    "isContainer" : false
}

,
{
    "_id" : "uuXEkgqWddusQiGvq",
    "parent" : "xPjGMEByALKSK9mLA",
    "name" : "Anchor element",
    "content" : "<a href=\"#\" class=\"btn btn-primary btn-lg active\" role=\"button\">Primary link</a>\n<a href=\"#\" class=\"btn btn-default btn-lg active\" role=\"button\">Link</a>",
    "isContainer" : false
}

,
{
    "_id" : "TmQjKdbPGqQHpnXKH",
    "parent" : "xPjGMEByALKSK9mLA",
    "name" : "Disabled state",
    "content" : "<button type=\"button\" class=\"btn btn-lg btn-primary\" disabled=\"disabled\">Primary button</button>\n<button type=\"button\" class=\"btn btn-default btn-lg\" disabled=\"disabled\">Button</button>",
    "isContainer" : false
}

,
{
    "_id" : "4DMXRqnrFyujJxey9",
    "parent" : "xPjGMEByALKSK9mLA",
    "name" : "Anchor element",
    "content" : "<a href=\"#\" class=\"btn btn-primary btn-lg disabled\" role=\"button\">Primary link</a>\n<a href=\"#\" class=\"btn btn-default btn-lg disabled\" role=\"button\">Link</a>",
    "isContainer" : false
}

,
{
    "_id" : "GvN3FDX3FGWDoTj2e",
    "parent" : "xfHv8sZ23czxeS7K5",
    "name" : "Close icon",
    "content" : "<button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>",
    "isContainer" : false
}

,
{
    "_id" : "v6iyaTEqQyMnDASTL",
    "parent" : "xfHv8sZ23czxeS7K5",
    "name" : "Carets",
    "content" : "<span class=\"caret\"></span>",
    "isContainer" : false
}

,
{
    "_id" : "n3CCAR5v3h7BfBDEs",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "How to use",
    "content" : "<span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span>",
    "isContainer" : false
}

,
{
    "_id" : "BdFdWL75FAtH6tBev",
    "parent" : "5eAHYJaDz7cRmcqft",
    "name" : "How to use",
    "content" : "<span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span>",
    "isContainer" : false
}

,
{
    "_id" : "Xck6iz7ecfGDZRPH6",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Dropdowns",
    "content" : "div class=\"dropdown\"",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "Dropdowns"
        }
    ]
}

,
{
    "_id" : "MkGkxMtQasiuKk7kW",
    "parent" : "yc5a7GkdygSzzm5i9",
    "name" : "Column wrapping",
    "content" : "<div class=\"row\">\n  <div class=\"col-xs-9\">.col-xs-9</div>\n  <div class=\"col-xs-4\">.col-xs-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>\n  <div class=\"col-xs-6\">.col-xs-6<br>Subsequent columns continue along the new line.</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "5s5Z25Fy684f9gRLh",
    "parent" : "yc5a7GkdygSzzm5i9",
    "name" : "Nesting columns",
    "content" : "<div class=\"row\">\n  <div class=\"col-sm-9\">\n    Level 1: .col-sm-9\n    <div class=\"row\">\n      <div class=\"col-xs-8 col-sm-6\">\n        Level 2: .col-xs-8 .col-sm-6\n      </div>\n      <div class=\"col-xs-4 col-sm-6\">\n        Level 2: .col-xs-4 .col-sm-6\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "SEmv4K5qq99SiWKpR",
    "parent" : "yc5a7GkdygSzzm5i9",
    "name" : "Column ordering",
    "content" : "<div class=\"row\">\n  <div class=\"col-md-9 col-md-push-3\">.col-md-9 .col-md-push-3</div>\n  <div class=\"col-md-3 col-md-pull-9\">.col-md-3 .col-md-pull-9</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ZZ6rXdjDMQjQZdqc4",
    "parent" : "6FShXA89CqJraNGyh",
    "name" : "Alignment classes",
    "content" : "<p class=\"text-left\">Left aligned text.</p>\n<p class=\"text-center\">Center aligned text.</p>\n<p class=\"text-right\">Right aligned text.</p>\n<p class=\"text-justify\">Justified text.</p>\n<p class=\"text-nowrap\">No wrap text.</p>",
    "isContainer" : false
}

,
{
    "_id" : "dJ3CviBo2JnQJY5vN",
    "parent" : "6FShXA89CqJraNGyh",
    "name" : "Transformation classes",
    "content" : "<p class=\"text-lowercase\">Lowercased text.</p>\n<p class=\"text-uppercase\">Uppercased text.</p>\n<p class=\"text-capitalize\">Capitalized text.</p>",
    "isContainer" : false
}

,
{
    "_id" : "qAjqJSFsD5kDA2rEW",
    "parent" : "6FShXA89CqJraNGyh",
    "name" : "Basic abbreviation",
    "content" : "<abbr title=\"attribute\">attr</abbr>",
    "isContainer" : false
}

,
{
    "_id" : "CLQCGAevqmZLpHdPz",
    "parent" : "6FShXA89CqJraNGyh",
    "name" : "Initialism",
    "content" : "<abbr title=\"HyperText Markup Language\" class=\"initialism\">HTML</abbr>",
    "isContainer" : false
}

,
{
    "_id" : "jgWCRu6j9RuHsgFut",
    "parent" : "ioZR95t8iDvERw3Jj",
    "name" : "Variables",
    "content" : "<var>y</var> = <var>m</var><var>x</var> + <var>b</var>",
    "isContainer" : false
}

,
{
    "_id" : "GaMkLMJoL6PbZiw5F",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Supported controls",
    "content" : "<input type=\"text\" class=\"form-control\" placeholder=\"Text input\">",
    "isContainer" : false
}

,
{
    "_id" : "e4aEnGufwpR4Pmcoo",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Optional icons with hidden labels",
    "content" : "<div class=\"form-group has-success has-feedback\">\n  <label class=\"control-label sr-only\" for=\"inputSuccess5\">Hidden label</label>\n  <input type=\"text\" class=\"form-control\" id=\"inputSuccess5\" aria-describedby=\"inputSuccess5Status\">\n  <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n  <span id=\"inputSuccess5Status\" class=\"sr-only\">(success)</span>\n</div>\n<div class=\"form-group has-success has-feedback\">\n  <label class=\"control-label sr-only\" for=\"inputGroupSuccess4\">Input group with success</label>\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\">@</span>\n    <input type=\"text\" class=\"form-control\" id=\"inputGroupSuccess4\" aria-describedby=\"inputGroupSuccess4Status\">\n  </div>\n  <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n  <span id=\"inputGroupSuccess4Status\" class=\"sr-only\">(success)</span>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "T6goX7HEEkRasfkQD",
    "parent" : "5eAHYJaDz7cRmcqft",
    "name" : "Example 2",
    "content" : "<div class=\"alert alert-danger\" role=\"alert\">\n  <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Error:</span>\n  Enter a valid email address\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "7dBrnEGdXAnxWfYpr",
    "parent" : "YGscdvNT9SFREBEYR",
    "name" : "Example",
    "content" : "<div class=\"dropdown\">\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    Dropdown\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li><a href=\"#\">Action</a></li>\n    <li><a href=\"#\">Another action</a></li>\n    <li><a href=\"#\">Something else here</a></li>\n    <li><a href=\"#\">Separated link</a></li>\n  </ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Kz4F5FKKtXcjuzJs9",
    "parent" : "YGscdvNT9SFREBEYR",
    "name" : "Example 2",
    "content" : "<div class=\"dropup\">\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    Dropup\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\n    <li><a href=\"#\">Action</a></li>\n    <li><a href=\"#\">Another action</a></li>\n    <li><a href=\"#\">Something else here</a></li>\n    <li><a href=\"#\">Separated link</a></li>\n  </ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "nvs4FKps6foQpbumt",
    "parent" : "YGscdvNT9SFREBEYR",
    "name" : "Disabled menu items",
    "content" : "<ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu4\">\n  <li><a href=\"#\">Regular link</a></li>\n  <li class=\"disabled\"><a href=\"#\">Disabled link</a></li>\n  <li><a href=\"#\">Another link</a></li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "F5PMcvqLBfBdMPKJ2",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Button groups",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Button groups",
            "value" : "<button type=\"button\" class=\"btn btn-default\">Right</button>"
        }
    ]
}

,
{
    "_id" : "SD3Z9KBanwBeLX5FW",
    "parent" : "F5PMcvqLBfBdMPKJ2",
    "name" : "Basic example",
    "content" : "<div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n  <button type=\"button\" class=\"btn btn-default\">Left</button>\n  <button type=\"button\" class=\"btn btn-default\">Middle</button>\n  <button type=\"button\" class=\"btn btn-default\">Right</button>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "GRp8HZAP25QNfNLCw",
    "parent" : "F5PMcvqLBfBdMPKJ2",
    "name" : "Nesting",
    "content" : "<div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n  <button type=\"button\" class=\"btn btn-default\">1</button>\n  <button type=\"button\" class=\"btn btn-default\">2</button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      Dropdown\n      <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\">\n      <li><a href=\"#\">Dropdown link</a></li>\n      <li><a href=\"#\">Dropdown link</a></li>\n    </ul>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "tFFutmzbBcBWtd6LA",
    "parent" : "F5PMcvqLBfBdMPKJ2",
    "name" : "Btn group",
    "content" : "<div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"...\">\n  <div class=\"btn-group\" role=\"group\">\n    <button type=\"button\" class=\"btn btn-default\">Left</button>\n  </div>\n  <div class=\"btn-group\" role=\"group\">\n    <button type=\"button\" class=\"btn btn-default\">Middle</button>\n  </div>\n  <div class=\"btn-group\" role=\"group\">\n    <button type=\"button\" class=\"btn btn-default\">Right</button>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "WxkY77HfkgS2RFKss",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "button dropdowns",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Button dropdowns",
            "value" : "<div class=\"btn-group\">"
        }
    ]
}

,
{
    "_id" : "umxSi3aoWoqH9pG64",
    "parent" : "WxkY77HfkgS2RFKss",
    "name" : "Single button dropdowns",
    "content" : "<!-- Single button -->\n<div class=\"btn-group\">\n  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    Action <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a href=\"#\">Action</a></li>\n    <li><a href=\"#\">Another action</a></li>\n    <li><a href=\"#\">Something else here</a></li>\n    <li role=\"separator\" class=\"divider\"></li>\n    <li><a href=\"#\">Separated link</a></li>\n  </ul>\n</div>",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "button dropdowns"
        }
    ]
}

,
{
    "_id" : "m6uYeCZsJDQepBHmP",
    "parent" : "WxkY77HfkgS2RFKss",
    "name" : "Split button dropdowns",
    "content" : "<div class=\"btn-group\">\n  <button type=\"button\" class=\"btn btn-danger\">Action</button>\n  <button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    <span class=\"caret\"></span>\n    <span class=\"sr-only\">Toggle Dropdown</span>\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a href=\"#\">Action</a></li>\n    <li><a href=\"#\">Another action</a></li>\n    <li><a href=\"#\">Something else here</a></li>\n    <li role=\"separator\" class=\"divider\"></li>\n    <li><a href=\"#\">Separated link</a></li>\n  </ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "CQFB5aXF3Zdkf5o3q",
    "parent" : "WxkY77HfkgS2RFKss",
    "name" : "Dropup variation",
    "content" : "<div class=\"btn-group dropup\">\n  <button type=\"button\" class=\"btn btn-default\">Dropup</button>\n  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    <span class=\"caret\"></span>\n    <span class=\"sr-only\">Toggle Dropdown</span>\n  </button>\n  <ul class=\"dropdown-menu\">\n    <!-- Dropdown menu links -->\n  </ul>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "nsT3Tk8fix29PxeKG",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Input groups",
    "content" : "<div class=\"input-group\">\n  <span class=\"input-group-addon\" id=\"basic-addon1\">@</span>\n  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"basic-addon1\">\n</div>\n\n<div class=\"input-group\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n  <span class=\"input-group-addon\" id=\"basic-addon2\">@example.com</span>\n</div>\n\n<div class=\"input-group\">\n  <span class=\"input-group-addon\">$</span>\n  <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\">\n  <span class=\"input-group-addon\">.00</span>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "SNu6QLsQKezDJZkFo",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Sizing",
    "content" : "<div class=\"input-group input-group-lg\">\n  <span class=\"input-group-addon\" id=\"sizing-addon1\">@</span>\n  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"sizing-addon1\">\n</div>\n\n<div class=\"input-group\">\n  <span class=\"input-group-addon\" id=\"sizing-addon2\">@</span>\n  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"sizing-addon2\">\n</div>\n\n<div class=\"input-group input-group-sm\">\n  <span class=\"input-group-addon\" id=\"sizing-addon3\">@</span>\n  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"sizing-addon3\">\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "u6qw8bgmzvaRbeA6q",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Segmented buttons",
    "content" : "<div class=\"input-group\">\n  <div class=\"input-group-btn\">\n    <!-- Button and dropdown menu -->\n  </div>\n  <input type=\"text\" class=\"form-control\" aria-label=\"...\">\n</div>\n\n<div class=\"input-group\">\n  <input type=\"text\" class=\"form-control\" aria-label=\"...\">\n  <div class=\"input-group-btn\">\n    <!-- Button and dropdown menu -->\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "4y5xgwQi6rgSasKHN",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Navs",
    "content" : "<ul class=\"nav nav-tabs\">\n  <li role=\"presentation\" class=\"active\"><a href=\"#\">Home</a></li>\n  <li role=\"presentation\"><a href=\"#\">Profile</a></li>\n  <li role=\"presentation\"><a href=\"#\">Messages</a></li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "Kukh7WYrcwbZX7snf",
    "parent" : "d7yX3ZERgGAbR7uW7",
    "name" : "Pills",
    "content" : "<ul class=\"nav nav-pills\">\n  <li role=\"presentation\" class=\"active\"><a href=\"#\">Home</a></li>\n  <li role=\"presentation\"><a href=\"#\">Profile</a></li>\n  <li role=\"presentation\"><a href=\"#\">Messages</a></li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "jnKLeeGHdrXbhQ6XQ",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Navbar",
    "content" : "<nav class=\"navbar navbar-default\">",
    "isContainer" : false
}

,
{
    "_id" : "tGJyyRLRrxpTk7W9s",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Navbar",
    "content" : "<nav class=\"navbar navbar-default\">",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Navbar",
            "value" : "<nav class=\"navbar navbar-default\">"
        }
    ]
}

,
{
    "_id" : "CeSotGKxPxCmdotwP",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Navbar",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Navbar",
            "value" : "<nav class=\"navbar navbar-default\">"
        }
    ]
}

,
{
    "_id" : "hrKrac7XkmJ4scW8b",
    "parent" : "CeSotGKxPxCmdotwP",
    "name" : "Default navbar",
    "content" : "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Brand</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"#\">Link <span class=\"sr-only\">(current)</span></a></li>\n        <li><a href=\"#\">Link</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">One more separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n      <form class=\"navbar-form navbar-left\" role=\"search\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#\">Link</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>",
    "isContainer" : false
}

,
{
    "_id" : "3qruyoKnwWiFXebj5",
    "parent" : "CeSotGKxPxCmdotwP",
    "name" : "Brand image",
    "content" : "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <img alt=\"Brand\" src=\"...\">\n      </a>\n    </div>\n  </div>\n</nav>",
    "isContainer" : false
}

,
{
    "_id" : "oKrrCnT6XreocHptN",
    "parent" : "CeSotGKxPxCmdotwP",
    "name" : "Forms",
    "content" : "<form class=\"navbar-form navbar-left\" role=\"search\">\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n</form>",
    "isContainer" : false
}

,
{
    "_id" : "REni4BQ9wRycmg7jt",
    "parent" : "CeSotGKxPxCmdotwP",
    "name" : "Buttons",
    "content" : "<button type=\"button\" class=\"btn btn-default navbar-btn\">Sign in</button>",
    "isContainer" : false
}

,
{
    "_id" : "86ddvYd4xFyc8povf",
    "parent" : "CeSotGKxPxCmdotwP",
    "name" : "Text",
    "content" : "<p class=\"navbar-text\">Signed in as Mark Otto</p>",
    "isContainer" : false
}

,
{
    "_id" : "qrQqnLkidtsEhxczC",
    "parent" : "CeSotGKxPxCmdotwP",
    "name" : "Non-nav links",
    "content" : "<p class=\"navbar-text navbar-right\">Signed in as <a href=\"#\" class=\"navbar-link\">Mark Otto</a></p>",
    "isContainer" : false
}

,
{
    "_id" : "mEBqMtMmA6afKf6xt",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Breadcrumbs",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Breadcrumbs",
            "value" : "<ol class=\"breadcrumb\">"
        }
    ]
}

,
{
    "_id" : "t822NauhEuZbXC95w",
    "parent" : "mEBqMtMmA6afKf6xt",
    "name" : "Class",
    "content" : "<ol class=\"breadcrumb\">\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"#\">Library</a></li>\n  <li class=\"active\">Data</li>\n</ol>",
    "isContainer" : false
}

,
{
    "_id" : "codNBvRupvxM3ADac",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Pagination",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "Pagination",
            "value" : "<ul class=\"pagination\">"
        }
    ]
}

,
{
    "_id" : "Rd35m86Ne4Mk4HiGC",
    "parent" : "codNBvRupvxM3ADac",
    "name" : "Default pagination",
    "content" : "<nav>\n  <ul class=\"pagination\">\n    <li>\n      <a href=\"#\" aria-label=\"Previous\">\n        <span aria-hidden=\"true\">&laquo;</span>\n      </a>\n    </li>\n    <li><a href=\"#\">1</a></li>\n    <li><a href=\"#\">2</a></li>\n    <li><a href=\"#\">3</a></li>\n    <li><a href=\"#\">4</a></li>\n    <li><a href=\"#\">5</a></li>\n    <li>\n      <a href=\"#\" aria-label=\"Next\">\n        <span aria-hidden=\"true\">&raquo;</span>\n      </a>\n    </li>\n  </ul>\n</nav>",
    "isContainer" : false
}

,
{
    "_id" : "FKmqyWh5zRrAhFEiz",
    "parent" : "codNBvRupvxM3ADac",
    "name" : "Pager",
    "content" : "<nav>\n  <ul class=\"pager\">\n    <li><a href=\"#\">Previous</a></li>\n    <li><a href=\"#\">Next</a></li>\n  </ul>\n</nav>",
    "isContainer" : false
}

,
{
    "_id" : "gQPZ6sdiabmbRjHqp",
    "parent" : "codNBvRupvxM3ADac",
    "name" : "Aligned links",
    "content" : "<nav>\n  <ul class=\"pager\">\n    <li class=\"previous\"><a href=\"#\"><span aria-hidden=\"true\">&larr;</span> Older</a></li>\n    <li class=\"next\"><a href=\"#\">Newer <span aria-hidden=\"true\">&rarr;</span></a></li>\n  </ul>\n</nav>",
    "isContainer" : false
}

,
{
    "_id" : "fCFGhqbaYLuQc4jCq",
    "parent" : "codNBvRupvxM3ADac",
    "name" : "Optional disabled state",
    "content" : "<nav>\n  <ul class=\"pager\">\n    <li class=\"previous disabled\"><a href=\"#\"><span aria-hidden=\"true\">&larr;</span> Older</a></li>\n    <li class=\"next\"><a href=\"#\">Newer <span aria-hidden=\"true\">&rarr;</span></a></li>\n  </ul>\n</nav>",
    "isContainer" : false
}

,
{
    "_id" : "v6DdkE4GcLD36qBH2",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Labels",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Labels",
            "value" : "<span class=\"label label-default\">Default</span>"
        }
    ]
}

,
{
    "_id" : "ryEwRjh8uBXiXuxZZ",
    "parent" : "v6DdkE4GcLD36qBH2",
    "name" : "Available variations",
    "content" : "<span class=\"label label-default\">Default</span>\n<span class=\"label label-primary\">Primary</span>\n<span class=\"label label-success\">Success</span>\n<span class=\"label label-info\">Info</span>\n<span class=\"label label-warning\">Warning</span>\n<span class=\"label label-danger\">Danger</span>",
    "isContainer" : false
}

,
{
    "_id" : "txXvfZyBiHwgBCBYi",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Badges",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Badges",
            "value" : "<a href=\"#\">Inbox <span class=\"badge\">42</span></a>"
        }
    ]
}

,
{
    "_id" : "BJ2bX3tRn7qF5sX8L",
    "parent" : "txXvfZyBiHwgBCBYi",
    "name" : "Span",
    "content" : "<a href=\"#\">Inbox <span class=\"badge\">42</span></a>",
    "isContainer" : false
}

,
{
    "_id" : "xZ33SDJ2AYw5joudi",
    "parent" : "txXvfZyBiHwgBCBYi",
    "name" : "Span",
    "content" : "<button class=\"btn btn-primary\" type=\"button\">\n  Messages <span class=\"badge\">4</span>\n</button>",
    "isContainer" : false
}

,
{
    "_id" : "mrApQb5MPkPq3uS5R",
    "parent" : "txXvfZyBiHwgBCBYi",
    "name" : "Pills",
    "content" : "<ul class=\"nav nav-pills\" role=\"tablist\">\n  <li role=\"presentation\" class=\"active\"><a href=\"#\">Home <span class=\"badge\">42</span></a></li>\n  <li role=\"presentation\"><a href=\"#\">Profile</a></li>\n  <li role=\"presentation\"><a href=\"#\">Messages <span class=\"badge\">3</span></a></li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "62QrxNMmoNvwBLw8j",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Page header",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Page header",
            "value" : "<div class=\"page-header\">"
        }
    ]
}

,
{
    "_id" : "PBLN4DXHMoz7adPR7",
    "parent" : "62QrxNMmoNvwBLw8j",
    "name" : "Example",
    "content" : "<div class=\"page-header\">\n  <h1>Example page header <small>Subtext for header</small></h1>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "xoPT6CDptehNuivNA",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Custom content",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Custom content",
            "value" : "<div class=\"row\">"
        }
    ]
}

,
{
    "_id" : "H7Ha89mWnLLG7P9nE",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Alerts",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Alerts",
            "value" : "<div class=\"alert alert-warning alert-dismissible\" role=\"alert\">"
        }
    ]
}

,
{
    "_id" : "zuP6Ya6Xoadi74GPi",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Progress bars",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Progress bars",
            "value" : "<div class=\"progress\">"
        }
    ]
}

,
{
    "_id" : "ype3BCj7wTfW6PkZi",
    "parent" : "zuP6Ya6Xoadi74GPi",
    "name" : "Basic example",
    "content" : "<div class=\"progress\">\n  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n    <span class=\"sr-only\">60% Complete</span>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "8EJdZ8jWMre4Qmxd7",
    "parent" : "zuP6Ya6Xoadi74GPi",
    "name" : "With label",
    "content" : "<div class=\"progress\">\n  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n    60%\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ELPAEmyFQaF5mQ9X8",
    "parent" : "zuP6Ya6Xoadi74GPi",
    "name" : "Example",
    "content" : "<div class=\"progress\">\n  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width: 2em;\">\n    0%\n  </div>\n</div>\n<div class=\"progress\">\n  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"2\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width: 2em; width: 2%;\">\n    2%\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Ma8efPZPkKAB7g8eK",
    "parent" : "zuP6Ya6Xoadi74GPi",
    "name" : "Contextual alternatives",
    "content" : "<div class=\"progress\">\n  <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\n    <span class=\"sr-only\">40% Complete (success)</span>\n  </div>\n</div>\n<div class=\"progress\">\n  <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\n    <span class=\"sr-only\">20% Complete</span>\n  </div>\n</div>\n<div class=\"progress\">\n  <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%\">\n    <span class=\"sr-only\">60% Complete (warning)</span>\n  </div>\n</div>\n<div class=\"progress\">\n  <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\n    <span class=\"sr-only\">80% Complete (danger)</span>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "sxk5Y2PfuPNwCE2WY",
    "parent" : "zuP6Ya6Xoadi74GPi",
    "name" : "Striped",
    "content" : "<div class=\"progress\">\n  <div class=\"progress-bar progress-bar-success progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\n    <span class=\"sr-only\">40% Complete (success)</span>\n  </div>\n</div>\n<div class=\"progress\">\n  <div class=\"progress-bar progress-bar-info progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\n    <span class=\"sr-only\">20% Complete</span>\n  </div>\n</div>\n<div class=\"progress\">\n  <div class=\"progress-bar progress-bar-warning progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%\">\n    <span class=\"sr-only\">60% Complete (warning)</span>\n  </div>\n</div>\n<div class=\"progress\">\n  <div class=\"progress-bar progress-bar-danger progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\n    <span class=\"sr-only\">80% Complete (danger)</span>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "4q3MSajDu8bRHvHBu",
    "parent" : "zuP6Ya6Xoadi74GPi",
    "name" : "Animated",
    "content" : "<div class=\"progress\">\n  <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 45%\">\n    <span class=\"sr-only\">45% Complete</span>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ehSF8iAE628qFQbaC",
    "parent" : "zuP6Ya6Xoadi74GPi",
    "name" : "Stacked",
    "content" : "<div class=\"progress\">\n  <div class=\"progress-bar progress-bar-success\" style=\"width: 35%\">\n    <span class=\"sr-only\">35% Complete (success)</span>\n  </div>\n  <div class=\"progress-bar progress-bar-warning progress-bar-striped\" style=\"width: 20%\">\n    <span class=\"sr-only\">20% Complete (warning)</span>\n  </div>\n  <div class=\"progress-bar progress-bar-danger\" style=\"width: 10%\">\n    <span class=\"sr-only\">10% Complete (danger)</span>\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "ask5naa5TXShbt9WA",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "List group",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "List group",
            "value" : "<ul class=\"list-group\">"
        }
    ]
}

,
{
    "_id" : "5EK73mH4oozjSqQPr",
    "parent" : "ask5naa5TXShbt9WA",
    "name" : "Basic example",
    "content" : "<ul class=\"list-group\">\n  <li class=\"list-group-item\">Cras justo odio</li>\n  <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n  <li class=\"list-group-item\">Morbi leo risus</li>\n  <li class=\"list-group-item\">Porta ac consectetur ac</li>\n  <li class=\"list-group-item\">Vestibulum at eros</li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "9uP6XzXzDhLFqd2ax",
    "parent" : "ask5naa5TXShbt9WA",
    "name" : "Badges",
    "content" : "<ul class=\"list-group\">\n  <li class=\"list-group-item\">\n    <span class=\"badge\">14</span>\n    Cras justo odio\n  </li>\n</ul>",
    "isContainer" : false
}

,
{
    "_id" : "Gezhqq86Nd2dPKZus",
    "parent" : "ask5naa5TXShbt9WA",
    "name" : "Linked items",
    "content" : "<div class=\"list-group\">\n  <a href=\"#\" class=\"list-group-item active\">\n    Cras justo odio\n  </a>\n  <a href=\"#\" class=\"list-group-item\">Dapibus ac facilisis in</a>\n  <a href=\"#\" class=\"list-group-item\">Morbi leo risus</a>\n  <a href=\"#\" class=\"list-group-item\">Porta ac consectetur ac</a>\n  <a href=\"#\" class=\"list-group-item\">Vestibulum at eros</a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "RE6AYD5iWj95Q9yZa",
    "parent" : "ask5naa5TXShbt9WA",
    "name" : "Button items",
    "content" : "<div class=\"list-group\">\n  <button type=\"button\" class=\"list-group-item\">Cras justo odio</button>\n  <button type=\"button\" class=\"list-group-item\">Dapibus ac facilisis in</button>\n  <button type=\"button\" class=\"list-group-item\">Morbi leo risus</button>\n  <button type=\"button\" class=\"list-group-item\">Porta ac consectetur ac</button>\n  <button type=\"button\" class=\"list-group-item\">Vestibulum at eros</button>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "daHQqdDuS63TmQ9Y6",
    "parent" : "ask5naa5TXShbt9WA",
    "name" : "Disabled items",
    "content" : "<div class=\"list-group\">\n  <a href=\"#\" class=\"list-group-item disabled\">\n    Cras justo odio\n  </a>\n  <a href=\"#\" class=\"list-group-item\">Dapibus ac facilisis in</a>\n  <a href=\"#\" class=\"list-group-item\">Morbi leo risus</a>\n  <a href=\"#\" class=\"list-group-item\">Porta ac consectetur ac</a>\n  <a href=\"#\" class=\"list-group-item\">Vestibulum at eros</a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "HnYKnKCcKCzdj9t2D",
    "parent" : "ask5naa5TXShbt9WA",
    "name" : "Contextual classes",
    "content" : "<ul class=\"list-group\">\n  <li class=\"list-group-item list-group-item-success\">Dapibus ac facilisis in</li>\n  <li class=\"list-group-item list-group-item-info\">Cras sit amet nibh libero</li>\n  <li class=\"list-group-item list-group-item-warning\">Porta ac consectetur ac</li>\n  <li class=\"list-group-item list-group-item-danger\">Vestibulum at eros</li>\n</ul>\n<div class=\"list-group\">\n  <a href=\"#\" class=\"list-group-item list-group-item-success\">Dapibus ac facilisis in</a>\n  <a href=\"#\" class=\"list-group-item list-group-item-info\">Cras sit amet nibh libero</a>\n  <a href=\"#\" class=\"list-group-item list-group-item-warning\">Porta ac consectetur ac</a>\n  <a href=\"#\" class=\"list-group-item list-group-item-danger\">Vestibulum at eros</a>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "2jmGkdevsFoiwwReW",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Panels",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Panels",
            "value" : "<div class=\"panel panel-default\">"
        }
    ]
}

,
{
    "_id" : "SyF6QaAJXqQt8rMXt",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Panel with heading",
    "content" : "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Panel heading without title</div>\n  <div class=\"panel-body\">\n    Panel content\n  </div>\n</div>\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Panel title</h3>\n  </div>\n  <div class=\"panel-body\">\n    Panel content\n  </div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "wK4kZQ3jrwBn3csQ9",
    "parent" : "2jmGkdevsFoiwwReW",
    "name" : "Panel with footer",
    "content" : "<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n    Panel content\n  </div>\n  <div class=\"panel-footer\">Panel footer</div>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "cMz6bHHAmengrtmDX",
    "parent" : "DixpoaPkZh2LTXXAZ",
    "name" : "Responsive embed",
    "isContainer" : false,
    "design" : [ 
        {
            "name" : "Responsive embed",
            "value" : "<div class=\"embed-responsive embed-responsive-16by9\">"
        }
    ]
}

,
{
    "_id" : "MuWzjhiN4q4iJg3X9",
    "parent" : "cMz6bHHAmengrtmDX",
    "name" : "Aspect",
    "content" : "<!-- 16:9 aspect ratio -->\n<div class=\"embed-responsive embed-responsive-16by9\">\n  <iframe class=\"embed-responsive-item\" src=\"...\"></iframe>\n</div>\n\n<!-- 4:3 aspect ratio -->\n<div class=\"embed-responsive embed-responsive-4by3\">\n  <iframe class=\"embed-responsive-item\" src=\"...\"></iframe>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "JRETYD5MKmJ9ayP2Y",
    "parent" : "hq5i8tupRhRGXyQqA",
    "name" : "Examples",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "Examples",
            "value" : "<div class=\"modal fade\">"
        }
    ]
}

,
{
    "_id" : "JSvgeoycvDQkqTRuL",
    "parent" : "hq5i8tupRhRGXyQqA",
    "name" : "Modal",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "Modal",
            "value" : "<div class=\"modal fade\">"
        }
    ]
}

,
{
    "_id" : "yEhD6s8dmHX9ttoAa",
    "parent" : "JSvgeoycvDQkqTRuL",
    "name" : "Usage",
    "content" : "<button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\">Launch modal</button>",
    "isContainer" : false
}

,
{
    "_id" : "fFibpbg6c28tpLxF7",
    "parent" : "hq5i8tupRhRGXyQqA",
    "name" : "Tab",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "Tab",
            "value" : "  <div class=\"tab-content\">"
        }
    ]
}

,
{
    "_id" : "7rzg79c457n7S2uzc",
    "parent" : "fFibpbg6c28tpLxF7",
    "name" : "Markup",
    "content" : "<div>\n\n  <!-- Nav tabs -->\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li role=\"presentation\" class=\"active\"><a href=\"#home\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Home</a></li>\n    <li role=\"presentation\"><a href=\"#profile\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Profile</a></li>\n    <li role=\"presentation\"><a href=\"#messages\" aria-controls=\"messages\" role=\"tab\" data-toggle=\"tab\">Messages</a></li>\n    <li role=\"presentation\"><a href=\"#settings\" aria-controls=\"settings\" role=\"tab\" data-toggle=\"tab\">Settings</a></li>\n  </ul>\n\n  <!-- Tab panes -->\n  <div class=\"tab-content\">\n    <div role=\"tabpanel\" class=\"tab-pane active\" id=\"home\">...</div>\n    <div role=\"tabpanel\" class=\"tab-pane\" id=\"profile\">...</div>\n    <div role=\"tabpanel\" class=\"tab-pane\" id=\"messages\">...</div>\n    <div role=\"tabpanel\" class=\"tab-pane\" id=\"settings\">...</div>\n  </div>\n\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "yiDqXACz8352RTwmh",
    "parent" : "fFibpbg6c28tpLxF7",
    "name" : "Four directions",
    "content" : "<button type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Tooltip on left\">Tooltip on left</button>\n\n<button type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\">Tooltip on top</button>\n\n<button type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tooltip on bottom\">Tooltip on bottom</button>\n\n<button type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\">Tooltip on right</button>",
    "isContainer" : false
}

,
{
    "_id" : "vELPxCBAsBvF4Dtdg",
    "parent" : "hq5i8tupRhRGXyQqA",
    "name" : "Popover",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "Popover",
            "value" : "<button type=\"button\" class=\"btn btn-default\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">"
        }
    ]
}

,
{
    "_id" : "qmABvBYBx8FBT4gSL",
    "parent" : "vELPxCBAsBvF4Dtdg",
    "name" : "Dismiss on next click",
    "content" : "<a tabindex=\"0\" class=\"btn btn-lg btn-danger\" role=\"button\" data-toggle=\"popover\" data-trigger=\"focus\" title=\"Dismissible popover\" data-content=\"And here's some amazing content. It's very engaging. Right?\">Dismissible popover</a>",
    "isContainer" : false
}

,
{
    "_id" : "YLqypCTkfZKYHXeZM",
    "parent" : "hq5i8tupRhRGXyQqA",
    "name" : "Alert messages",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "Alert messages",
            "value" : "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">"
        }
    ]
}

,
{
    "_id" : "WkxK9rkTrz86p2mvo",
    "parent" : "YLqypCTkfZKYHXeZM",
    "name" : "Usage",
    "content" : "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n  <span aria-hidden=\"true\">&times;</span>\n</button>",
    "isContainer" : false
}

,
{
    "_id" : "XLBKKLvLJourvSXWz",
    "parent" : "hq5i8tupRhRGXyQqA",
    "name" : "Button",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "Button",
            "value" : "<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"button\" aria-pressed=\"false\" autocomplete=\"off\">"
        }
    ]
}

,
{
    "_id" : "WpmBf3kAE8nB7xZKe",
    "parent" : "XLBKKLvLJourvSXWz",
    "name" : "Single toggle",
    "content" : "<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"button\" aria-pressed=\"false\" autocomplete=\"off\">\n  Single toggle\n</button>",
    "isContainer" : false
}

,
{
    "_id" : "asaEeTBzeiM4LveJa",
    "parent" : "XLBKKLvLJourvSXWz",
    "name" : "Checkbox / Radio",
    "content" : "<div class=\"btn-group\" data-toggle=\"buttons\">\n  <label class=\"btn btn-primary active\">\n    <input type=\"checkbox\" autocomplete=\"off\" checked> Checkbox 1 (pre-checked)\n  </label>\n  <label class=\"btn btn-primary\">\n    <input type=\"checkbox\" autocomplete=\"off\"> Checkbox 2\n  </label>\n  <label class=\"btn btn-primary\">\n    <input type=\"checkbox\" autocomplete=\"off\"> Checkbox 3\n  </label>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "Bvi3xmrAH55FXwn7D",
    "parent" : "XLBKKLvLJourvSXWz",
    "name" : "Example",
    "content" : "<div class=\"btn-group\" data-toggle=\"buttons\">\n  <label class=\"btn btn-primary active\">\n    <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked> Radio 1 (preselected)\n  </label>\n  <label class=\"btn btn-primary\">\n    <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Radio 2\n  </label>\n  <label class=\"btn btn-primary\">\n    <input type=\"radio\" name=\"options\" id=\"option3\" autocomplete=\"off\"> Radio 3\n  </label>\n</div>",
    "isContainer" : false
}

,
{
    "_id" : "3cxsajLJX6DcBDqAr",
    "parent" : "hq5i8tupRhRGXyQqA",
    "name" : "Collapse",
    "isContainer" : false,
    "data" : [ 
        {
            "name" : "Collapse",
            "value" : "  <div class=\"panel panel-default\">"
        }
    ]
}

,
{
    "_id" : "wofMx52rnNcWwfTtd",
    "parent" : "3cxsajLJX6DcBDqAr",
    "name" : "Accordion example",
    "content" : "<div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n      <h4 class=\"panel-title\">\n        <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n          Collapsible Group Item #1\n        </a>\n      </h4>\n    </div>\n    <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n      <div class=\"panel-body\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n      </div>\n    </div>\n  </div>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n      <h4 class=\"panel-title\">\n        <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n          Collapsible Group Item #2\n        </a>\n      </h4>\n    </div>\n    <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n      <div class=\"panel-body\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n      </div>\n    </div>\n  </div>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n      <h4 class=\"panel-title\">\n        <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n          Collapsible Group Item #3\n        </a>\n      </h4>\n    </div>\n    <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n      <div class=\"panel-body\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n      </div>\n    </div>\n  </div>\n</div>",
    "isContainer" : false
}
]
		)
	}
})