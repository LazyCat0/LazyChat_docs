# Встановлення {#Installation}
## скачування плагіна {#Download}
1. Скачайте плагін з одного з двух місць: [Modrinth](https://modrinth.com/plugin/lazychat) або [SpigotMc](https://www.spigotmc.org/resources/lazychat.130059/).
2. Знайдіть його у папці завантажень.
3. Скопіюйте його у папку plugins вашого сервера.
4. Перезавантажте сервер або ввімкніть плагін за допомогою PlugmanX.
## Базове налаштування {#Base-setup}
Знайдіть всередині папки plugins папку LazyChat-M. Потім відкрийте config.yml.  
Знайдіть параметр language всередині секції options і виправте мову на ту, якій ви віддаєте перевагу. Усе!
```yml
config-version: 5 # DO NOT CHANGE

#  @      @@@  @@@@@ @   @  @@@  @   @  @@@  @@@@@            @   @  @@@  @@@@  @@@@@ @@@@  @   @
#  @     @   @    @   @ @  @     @   @ @   @   @              @@ @@ @   @ @   @ @     @   @ @@  @
#  @     @@@@@   @     @   @     @@@@@ @@@@@   @      @@@@    @ @ @ @   @ @   @ @@@@  @@@@  @ @ @
#  @     @   @  @      @   @     @   @ @   @   @              @   @ @   @ @   @ @     @  @  @  @@
#  @@@@@ @   @ @@@@@   @    @@@  @   @ @   @   @              @   @  @@@  @@@@  @@@@@ @   @ @   @

options:
  language: English # Available: English, Russian, Ukrainian
  enable-logging: true # Enables logging to console.
  default: local # Chat that will be used by default

  # Enables some experiments like .json for chats or databases for mutes.
  experiments:
    jsonForChats: false
    databasesForMute: false
# ... other sections ...
```
