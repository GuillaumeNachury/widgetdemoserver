# Widget demo Server
An HTTP server that provides a very simple API to retrieve data for the widget demo (https://github.com/GuillaumeNachury/widgetdemo)

### Usage
```git clone https://github.com/GuillaumeNachury/widgetdemoserver.git```
```yarn```
```node server.js```

### Data
Edit `companyData.json` to change de data
sample :
```
[
     {"type":"image", "srcThumb":"https://picsum.photos/250/250/?image=1026", "caption":"Dmitrii Vaccinium"},
    {"type":"video", "srcThumb":"https://picsum.photos/250/250/?image=737", "src":"", "caption":"tanti fiat ab amicis"},
    {"type":"quote", "txt":"It's OK to have your eggs in one basket as long as you control what happens to that basket."}
    
]
```