# Установка {#Installation}
## Скачивание плагина {#Download}
1. Скачайте плагин из одного из двух мест: [Modrinth](https://modrinth.com/plugin/lazychat) или [SpigotMc](https://www.spigotmc.org/resources/lazychat.130059/).
2. Найдите его в папке загрузок.
3. Скопируйте его в папку `plugins` вашего сервера.
4. Перезапустите сервер или включите плагин с помощью PlugmanX.
## Базовая настройка {#Base-setup}
Найдите внутри папки `plugins` папку `LazyChat-M`. Затем откройте `config.yml`.  
Найдите параметр `language` внутри секции `options` и измените язык на тот, который вы предпочитаете. Готово!
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
