function onYouTubeIframeAPIReady() { 
var player; 
player = new 
YT.Player('html5videoplayer', { 
videoId: 'ÂÀØÅ ÏÅĞÂÎÅ ÂÈÄÅÎ',
width:400,
height: 300, 
playerVars: { 
playlist: 'ÂÈÄÅÎÄËßÍÀÊĞÓÒÊÈ', 
autoplay: 1, 
controls: 0, 
showinfo: 0, 
modestbranding: 1, 
loop: 1, 
fs: 0, 
cc_load_policy: 0, 
iv_load_policy: 3, 
autohide: 0 
}, 
events: { 
onReady: function(e) { 
e.target.mute(); 
} 
}
});
}