const { spawn } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function executeCommand(cmd) {
  const [command, ...args] = cmd.split(' ');
  const childProcess = spawn(command, args, { shell: true });

  childProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  childProcess.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  childProcess.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
    rl.prompt();
  });
}

rl.setPrompt('shell> ');
rl.prompt();

rl.on('line', (input) => {
  const cmd = input.trim();

  if (cmd === 'exit') {
    rl.close();
    return;
  }

  executeCommand(cmd);
}).on('close', () => {
  console.log('Exiting...');
  process.exit(0);
});
