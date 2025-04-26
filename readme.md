# Whatsdown

## Other languages:

[Türkçe 🇹🇷](./readme_tr.md)

## Synopsis

P2P messaging application project. In this project, to provide messaging by communicating between devices without a central server. If possible, to be able to send messages to more distant devices through other devices.

## Why this project

- To provide communication where there is no internet and no base stations. For example, to be able to provide communication in cases where operators are currently unavailable in the event of an earthquake (i.e. in every earthquake)

## Used technologies

- Angular(Zoneless) on Nativescript

## Project progress

- [ ] General view
- [ ] Models

  - [ ] User Message

  The id of the user message will be: username, device id (probably uuid or mac address), date, hour, minute and millisecond.

  - [ ] User status

  It works by sending back the id of the message as soon as it is displayed or the last received message and can indicate that the message was received successfully

  - [ ] User

  There will be no central server. So name, photo and device id(probably uuid or mac address) are required

- [ ] Communication (TCP or Similar)

## Contribution

PRs are welcome
