:warning: **This readme and the project are works in progress**: Be patient :smile:


# Clinote

Clinote is a CLI tool to take notes in your terminal. Is easy to use and personal. All the notes taked with the app are stored in a local JSON file.

Clinote allow us to create, update, delete or read our personal notes in an easy way as a programmer.

## Why a note app in our Terminal?

As programmers, the terminal is one of our day to day tools. Have tools to do things faster without another application is a great way to improve our workflow.

This CLI is only for personal note taking, if you want to store something confidential this is not the best option.

You can create a personal password for your notes to protect access from the terminal.

# USAGE

## clinote

This is the main command of our application, this command will open a Terminal GUI with all the options of the app and allow us to navigate with our keyboard. Only follow the steps to take, delete, update or read notes.

## clinote --password

This command can create a master password for all the notes that we want to protect. (This proctetion is only in the terminal, all our notes still visible in the json file of our app).

## clinote --add

This command will open a new note GUI and we can save a note from here.

## clinote --list

This commando will list all our notes in a compact way with it's ID. Notes protected by password doesn't show their information.

## clionte --read

This command is for read our notes by ID if you know it.

## clionte --list-read

```--list-read``` is like ```--read``` but it is not by ID. It will list our notes like ```--list``` and allow us to select one. Notes protected by password will not show their content.

## clione --delete

This command allow us to delete our notes by ID.

## clionte --liste-delete

Works as ```--list-read``` but for delete notes.

## clinote --edit

Allow us to edit a note by ID.

## clionte --list-edit

Like ```--list-read``` but for edit notes.


# WORK IN PROGRESS
