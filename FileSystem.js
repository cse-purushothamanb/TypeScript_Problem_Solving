// Terminal Diary
// A simple command-line diary app — write, append, read, rename, delete diary entries from terminal

const fs = require('fs');

const date = new Date();
const getFormattedDate = () => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 because JS months are 0-indexed
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

const command = process.argv[2];
const fileName = process.argv[3];
const message = process.argv[process.argv.length-1]

if (!fs.existsSync('./entries')) {
  fs.mkdirSync('./entries');
  console.log("'entries' folder created.");
}

switch (command) {
  case 'write':
    const newFile = `./entries/${getFormattedDate()}.txt`;
    fs.writeFile(newFile, message, (err) => {
      if (err) throw err;
      console.log(`New diary entry created: ${newFile}`);
    });
    break;

  case 'append':
    fs.appendFile(`./entries/${fileName}`, `\n${message}`, (err) => {
      if (err) throw err;
      console.log(`Content appended to ${fileName}`);
    });
    break;

  case 'read':
    fs.readFile(`./entries/${fileName}`, 'utf-8', (err, data) => {
      if (err) throw err;
      console.log(`Entry (${fileName}):\n\n${data}`);
    });
    break;

  case 'rename':
    fs.rename(`./entries/${fileName}`, `./entries/${message}`, (err) => {
      if (err) throw err;
      console.log(`Renamed ${fileName} to ${message}`);
    });
    break;

  case 'delete':
    fs.unlink(`./entries/${fileName}`, (err) => {
      if (err) throw err;
      console.log(`Deleted ${fileName}`);
    });
    break;

  default:
    console.log(`Unknown command: ${command}

📜 Available Commands:
  write <message>             - Create a new diary entry for today
  append <filename> <message> - Add to an existing entry
  read <filename>             - Read an entry
  rename <filename> <newName> - Rename an entry
  delete <filename>           - Delete an entry`);
}


// node FileSystem.js write "Today was productive and peaceful."
// node FileSystem.js append 2025-04-13.txt "Also finished learning Node fs module."
// node FileSystem.js read 2025-04-13.txt
// node FileSystem.js rename 2025-04-13.txt programming-day.txt
// node FileSystem.js delete programming-day.txt

