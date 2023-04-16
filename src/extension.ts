// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Configuration, OpenAIApi } from 'openai';
const conf = new Configuration({
	apiKey: vscode.workspace.getConfiguration('OpenAiApiPlugin').get('apiKey'),
});
const openai = new OpenAIApi(conf);

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "openai-api-plugin" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let completions = vscode.commands.registerCommand('openai-api-plugin.completions', async () => {
		const selectedText = vscode.window.activeTextEditor?.document.getText(vscode.window.activeTextEditor?.selection);
		console.log('Completions called!');
		console.log('Selected text:', selectedText);
		if (selectedText) {
			const { data } = await openai.createCompletion({
				model: "text-davinci-003",
				prompt: selectedText,
				max_tokens: 100,
				temperature: 0,
			});

			vscode.window.activeTextEditor?.edit((editBuilder) => {
				editBuilder.insert(vscode.window.activeTextEditor?.selection.end as vscode.Position, data.choices[0].text || 'error');
			});

		} else {
			console.log('please select text');
		}

	});

	context.subscriptions.push(completions);
}

// This method is called when your extension is deactivated
export function deactivate() { }
