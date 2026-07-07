# Installation {#Installation}
## Downloading plugin {#Download}
1. Download plugin from one of two places. [Modrithth](https://modrinth.com/plugin/lazychat) or [SpigotMc](https://www.spigotmc.org/resources/lazychat.130059/).
2. Found it inside download folder
3. Copy it to `plugins` folder of your server
4. Restart your server or enable plugin via PlugmanX
## Base setup {#Base-setup}
Found inside `plugins` folder `LazyChat-M`. Then, open `config.yml`  
Find `languge` inside `options` and change language to you prefer. Done!
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