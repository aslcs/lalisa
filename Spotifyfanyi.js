name: Spotify歌词翻译
desc: 在线实时翻译Spotify歌词

http:
  mitm:
    - spclient.wg.spotify.com
  script:
    - match: ^https:\/\/spclient\.wg\.spotify\.com\/color-lyrics\/v2\/track\/
      name: spotify-lyrics
      type: response
      require-body: true
      timeout: 10
      argument: appid=20210730000901613&securityKey=vscO5NDoHfNM51yVuMC6
      binary-mode: true
      max-size: 0
 
script-providers:
  spotify-lyrics:
    url: https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-lyric.js
    interval: 86400
