# OpenAI API Plugin

This is a VS Code extension that aims to bring the full Open AI API to VS Code with a user-friendly interface.

## Features

### Completion API
Select text and use context menu or keyboard shortcut to fetch a completion and insert it under the selection.

### Chat API
Prompt Chat-GPT by typing `@ai <prompt_to_chatgpt>`


___

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

`openai` sdk

## Extension Settings

- API key input, 
- max_tokens
- temperature
- etc


Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...
