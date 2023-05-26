// Object containing the commands and their corresponding outputs
var commands = {
    'bash impressum.sh':
        `Impressum: \n\nYour Company Name\nYour Street Name\nYour City, State, Zip\nYour Email\nYour Phone Number`,
    'bash init_c3wkb_website.sh':
        `Wer wir sind 
        
Der Chaostreff Waldkraiburg ist eine dem Chaos Computer Club zugehörige Gruppe und Anlaufstelle für alle chaosnahen und interessierten Wesen für die Landkreise Mühldorf am Inn, Altötting und darüber hinaus.

Wir sind technikbegeisterte Menschen und beschäftigen uns mit IT-Sicherheit, Webdesign, Gaming, alternativen Betriebssystemen, Retrocomputing, freier Software, Netzpolitik und vielen weiteren Themen.

Ob Anfänger oder Profi spielt keine Rolle, es ist keine Anmeldung erforderlich.

Wir treffen uns einmal im Monat im:

Cafe Patini, Franz-Liszt-Straße 8, 84478 Waldkraiburg.

Unsere Kontaktmöglichkeiten:

E-Mail: info(at)c3wkb(punkt)de

Matrix - Chat: #chaostreff-waldkraiburg:darkfasel.net (Serverempfehlung: asra.gr)

IRC - Chat:  #chaostreff-waldkraiburg (auf darkfasel.net)`,
    'help': null // To be assigned later
};

// Function to generate help text
function generateHelpText() {
    return 'Available commands: \n' + Object.keys(commands).join('\n');
}

// Assign the function result to the 'help' command
commands['help'] = generateHelpText();

var inputElement = document.querySelector('.input');
var outputElement = document.querySelector('.output');
var cursorElement = document.querySelector('.cursor');

function processInput(e) {
    var key = e.key;

    // Enter key
    if (key === 'Enter') {
        var inputCommand = inputElement.textContent.trim();
        var commandOutput = commands[inputCommand];
        outputElement.textContent = '';  // Clear the old output
        checkCommandInput(commandOutput, inputCommand);
    }
    // Backspace key
    else if (key === 'Backspace') {
        inputElement.textContent = inputElement.textContent.slice(0, -1);
    }
    // Regular keys
    else if (!e.metaKey && !e.ctrlKey && !e.altKey && key.length === 1) {
        inputElement.textContent += key;
    }
}

function checkCommandInput(commandOutput, inputCommand) {
    if (commandOutput !== undefined) {
        typeOutput(commandOutput);
    } else {
        typeOutput('\nUnknown command: ' + inputCommand);
    }
}

function typeOutput(text) {
    var i = 0;
    var interval = setInterval(function () {
        if (i < text.length) {
            outputElement.textContent += text[i];
            i++;
        } else {
            clearInterval(interval);
        }
    }, 10);
}

function init() {
    var initCommand = 'bash init_c3wkb_website.sh';
    inputElement.textContent = initCommand;
    typeOutput(commands[initCommand]);
}

window.addEventListener('keydown', processInput);
window.addEventListener('load', init);
