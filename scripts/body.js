// This script adds a footer on all pages
const documentToPrint = `
<style>
.pre-footer-wrapper, .footer-wrapper { width: 55.8em; margin: 0px auto;
	font-family:'Linux Libertine',Georgia,Times,serif;
}
.pre-footer-wrapper div {
  margin-bottom: 10px;
}
.footer-wrapper {
	background-color: white;
	border: 2px solid lightgrey;
	border-radius: 10px;
  margin-bottom: 25px;
}
.footer-wrapper a {
	color: #0084b4;
	text-decoration: none;
	font-weight: bold;
	letter-spacing: 1px;
}
.footer-wrapper a:hover {
	color: #0084b4;
	text-decoration: ;
}
.footer-logo, .footer-titles, .footer-sharing {
	position: relative;
	float: left;
	width: 200px;
	text-align: center;
}
.footer-logo {
	width: 100px;
	padding-left: 10px;
}
.footer-titles, .footer-sharing {
	padding-top: 20px;
}
.footer-titles {
	width: 470px;
}
.footer-titles-title {
	font-size: 19px;
	margin-bottom: 10px;
	font-weight: bolder;
}
.footer-sharing-icons {
	width: 168px;
	margin: 0 auto;
}
.footer-sharing-icon {
	width: 32px;
	float: left;
	margin: 5px;
}
</style>
<div class="pre-footer-wrapper">
  <div>
    This snapshot was generated and distributed by the <a class="external text" href="https://github.com/ipfs/distributed-wikipedia-mirror">Distributed Wikipedia Mirror project</a> The Distributed Wikipedia Mirror is a global effort, independent from Wikipedia.
  </div>
  <div>
    Created on: {{SNAPSHOT_DATE}} from the <a href="http://wiki.kiwix.org/wiki/Content_in_all_languages">kiwix ZIM file </a>
  </div>
  <div>
    IPFS Link: <a class="external text ipns" href="dweb://ipns/{{IPNS_HASH}}">dweb://ipns/{{IPNS_HASH}}</a>
  </div>
  <div>
    HTTP Link: <a class="external text ipns" href="/ipns/{{IPNS_HASH}}">/ipns/{{IPNS_HASH}}</a>
  </div>
  <div>
    <a class="external text" href="https://dist.ipfs.io/#go-ipfs">Download IPFS Here</a>
  </div>
</div>
<div class="footer-wrapper">
	<div class="footer-logo">
    <img src="../I/s/wikipedia-on-ipfs.png" width="100"/>
	</div>
	<div class="footer-titles">
		<div class="footer-titles-title">Distributed Wikipedia</div>
		<div class="footer-titles-subtitle">Powered by <a href="https://ipfs.io">IPFS</a></div>
	</div>
	<div class="footer-sharing">
		<div>Share this article</div>
		<div class="footer-sharing-icons">
			<!-- Facebook -->
			<a href="https://www.facebook.com/sharer.php?u={ARTICLE_URL}" target="_blank" class="footer-sharing-icon" style="fill: #3b5998">
				<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/></svg>
			</a>
			<!-- Twitter -->
			<a href="https://twitter.com/intent/tweet?url={ARTICLE_URL}&text={ARTICLE_TITLE}" target="_blank" class="footer-sharing-icon" style="background: #0084b4; fill: white">
				<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero"/></svg>
			</a>
			<!-- Google+ -->
			<a href="https://plus.google.com/share?url={ARTICLE_URL}" target="_blank" class="footer-sharing-icon" style="background-color: #d34836; fill: white">
				<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M5.09 7.273v1.745h2.89c-.116.75-.873 2.197-2.887 2.197-1.737 0-3.155-1.44-3.155-3.215S3.353 4.785 5.09 4.785c.99 0 1.652.422 2.03.786l1.382-1.33c-.887-.83-2.037-1.33-3.41-1.33C2.275 2.91 0 5.19 0 8s2.276 5.09 5.09 5.09c2.94 0 4.888-2.065 4.888-4.974 0-.334-.036-.59-.08-.843H5.09zm10.91 0h-1.455V5.818H13.09v1.455h-1.454v1.454h1.455v1.455h1.46V8.727H16"/></svg>
			</a>
			<!-- tumblr -->
			<a href="https://www.tumblr.com/widgets/share/tool?canonicalUrl={ARTICLE_URL}&title={ARTICLE_TITLE}" target="_blank" class="footer-sharing-icon" style="background-color: #36465D; fill: white;">
				<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M9.708 16c-3.396 0-4.687-2.504-4.687-4.274V6.498H3.41V4.432C5.83 3.557 6.418 1.368 6.55.12c.01-.086.077-.12.115-.12H9.01v4.076h3.2v2.422H8.997v4.98c.01.667.25 1.58 1.472 1.58h.06c.42-.012.99-.136 1.29-.278l.77 2.283c-.29.424-1.6.916-2.77.936H9.7z" fill-rule="nonzero"/></svg>
			</a>
		</div>
	</div>
	<div style="clear: both"></div>
</div>
<script>
</script>
`

document.write(documentToPrint);
document.querySelectorAll('.footer-sharing-icon').forEach((link) => {
	link.href = link.href.replace('{ARTICLE_URL}', window.location.href)
  link.href = link.href.replace('{ARTICLE_TITLE}', document.title)
});
document.querySelectorAll('a.ipns').forEach((link) => {
	link.href = link.href + "/" + window.location.pathname.split("/").slice(3).join("/")
  link.textContent = link.href
});


// following section adds search functions

const searchInject = `
<div class="search-root">
	<form class="search-form">
		<input class="search-text" placeholder="Vikipedi üzerinde ara" type="text" />
		<input type="submit" class="search-btn" />
	</form>


	<div class="search-container">
	<a class="search-close">[X]</a>
	<div class="search-results"></div>
	</div>

	<div id="entry-proto" style="display: none;">
		<div class="entry">
			<span class="entry-id"></span>
			<a class="entry-link"></a>
		</div>
	</div>

	<style>
		.search-root {
			margin-left: 60%;
		}
		.search-form {
			position: relative;
		}
		.search-text {
			width: 100%;
		}
		.search-container {
			position: relative;
		}
		.search-close {
			display: none;
			position: absolute;
			top: 0;
			right: 0;
		}
		.search-btn {
			position: absolute;
			top: 0;
			right: 0;
			margin: 0;
			padding: 0;
			border: 0;
			width: 1.65em;
			height: 100%;
			background-image: url("../I/s/search-ltr.png");
			background-color: transparent;
			background-position: center center;
			background-repeat: no-repeat;
			text-indent: -99999px;
			overflow: hidden;
			direction: ltr;
			white-space: nowrap;
			cursor: pointer;
		}

		.entry-id {
			display: none;
		}	
	</style>
</div>
`
var script = document.createElement('script');
script.src = "../-/j/search.js";

document.head.appendChild(script);

var anch = document.querySelector('#top');

var div = document.createElement('div');
div.innerHTML = searchInject;
anch.parentNode.insertBefore(div.firstElementChild, anch.nextSibling);

var closeBtn = document.querySelector('.search-close')

closeBtn.onclick = function() {
	delResults();
	closeBtn.style.display = "none";
};


var delResults = function() {
		var resultsElem = document.querySelector('.search-results');
		while(resultsElem.firstChild) resultsElem.removeChild(resultsElem.firstChild);
}

document.querySelector('.search-form').onsubmit = function() {
	if (search == null) {
		return false;
	}
	var val = document.querySelector('.search-text').value;
	search(val).then(function(results) {
		var proto = document.getElementById('entry-proto').children[0];
		var resultsElem = document.querySelector('.search-results');
		delResults()

		results.forEach(function(art, idx) {
			var entry = proto.cloneNode(true);
			entry.getElementsByClassName('entry-id')[0].appendChild(document.createTextNode(idx));
			var link = entry.getElementsByClassName('entry-link')[0];
			link.appendChild(document.createTextNode(art.replace(/_/g, " ").slice(0, -5)));
			link.href = art;
			closeBtn.style.display = "inherit";

			resultsElem.appendChild(entry);
		})

	});
	return false
};



// (window.RLQ=window.RLQ||[]).push(function(){mw.log.warn("Gadget \"ReferenceTooltips\" styles loaded twice. Migrate to type=general. See \u003Chttps://phabricator.wikimedia.org/T42284\u003E.");});

// (window.RLQ=window.RLQ||[]).push(function(){mw.config.set({"wgBackendResponseTime":62,"wgHostname":"mw1218"});});
