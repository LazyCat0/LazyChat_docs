# Конфигурация {#Config}
## `config.yml`{#config.yml}
Внутри этого файла вы можете найти... Настройки для плагина? XD  
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

# ...other sections...
```
## `options` секция.{#config.yml/options}
```yml
options:
  language: English # Available: English, Russian, Ukrainian
  enable-logging: true # Enables logging to console.
  default: local # Chat that will be used by default

  # Enables some experiments like .json for chats or databases for mutes.
  experiments:
    jsonForChats: false
    databasesForMute: false
```
Здесь находятся параметры языка, логирования и чата по умолчанию. Также здесь вы можете увидеть эксперименты. Мы вернемся к этому подразделу позже.  
* `language` — Позволяет изменить язык плагина.
* `enable-logging` — Включает логирование КАЖДОГО чата и сообщения в консоль.
* `default` — чат, который будет использоваться по умолчанию.
## `chats` секция.{#config.yml/chats}
Здесь вы можете изменить или добавить чаты и настройки. В качестве примера мы используем глобальный и админ-чат.
```yml
# ... other sections ...
chats:
  global:
    template: "global.yml" # Template for global chat. You can use formats like json (WIP)
    prefix: "!" # Prefix for use global chat. By default, and most popular — "!".
    radius: -1 # If -1 or 0 — global.
    perm: "" # If not set or just empty, will allow everyone to use this chat
  local:
    template: "local.yml" # Template for local chat.
    prefix: "" # Not set cause isn't need.
    radius: 100
  whisper:
    template: "whisper.yml"
    prefix: ["*", "_", "~"] # Supports aliases
    radius: 10
    perm: "" # If not set or just empty, will allow everyone to use this chat
  # Example chat with perms - Admin chat.
  #admin:
  #  template: "admin.yml"
   # prefix: [":", "^"]
   # perm: "lazychat.admin" # Able for set perm for chat. If not set, perm will be = none.
    # If player do not have perm — He cannot read and send messages in this chat. If he try — in chat will send only text with prefix that DO NOT work.
  # Example chat - Business chat.
  #business:
  #  template: "business.json"
  #  prefix: ["\$", ";"]

# ... other sections ...
```
### global{#config.yml/chats/global}
* `template` — Плагин использует систему "шаблонов", которая позволяет лучше управлять чатами. Требуется указать имя файла из папки `/templates` внутри папки плагина.
* `prefix` — символ/слово, которое позволяет использовать чат. В данном случае.
* `radius` — радиус (в блоках), на который будет отправлено ваше сообщение. В данном случае — `-1`, сообщение будет отправлено в глобальный чат.
### whisper{#config.yml/chats/whisper}
* `prefix` — также вы можете сделать алиасы (или список вариантов префикса).
### admin{#config.yml/chats/admin}
* `perm` — право (permission), которое позволит использовать чат. Если не установлено — использовать этот чат могут все. В противном случае им необходимо иметь специальное право. Рекомендуется перезапустить сервер после изменения этого параметра.
## `blacklist` section{#config.yml/blacklist}
В этом разделе вы можете создать глобальный черный список. Например, запретить цвета или указать теги. Также вы можете отключить использование MM для личных сообщений (dm), табличек или для шепота (whisper).
```yml
# ... other sections
blacklist:
  chat:
    colors: false # Disables able for players for use colors. By default, colors enabled (or on false).
    gradients: false # Disables able for players for use gradients. By default, gradients enabled (or on false).
    tags: # Disables custom (and not only) tags.
      - newline
      - obf
  signs: false # Disables able for players for use MiniMessage on signs. By default, enabled (or on false).
  dm: false # Disables able for players for use MiniMessage in direct messages. By default, enabled (or on false).
  whisper: false # Disables able for players for use whisper. By default, enabled (or on false).
```
