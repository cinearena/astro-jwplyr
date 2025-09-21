jwplayer("jwplayerDiv").setup({    
     file: "https://proxy.mydementiacompanion.com.au/https://linearjitp-playback.astro.com.my/dash-wv/dashiso/2504/default_ott.mpd", 
         position: 'bottom',  
        "autostart": true,
        "Volume": "100",
        "mute": false,         
        "stretching": "exactfit",
        "width": "100%", 
      type: "dash",    
      drm: { "clearkey": {    
               "keyId": "03c2e0af2f8159f9f0ce9b5dbc865f10",    
              "key": "cd84ed136b0cc71f8ab8cd4d4f6a2e4c" 
            }   
             }               
});   
