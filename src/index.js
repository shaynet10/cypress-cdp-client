const CDP = require('chrome-remote-interface');

let port = 0;
let client = null;

function ensureRdpPort(args) {
  const existing = args.find(arg => arg.slice(0, 23) === '--remote-debugging-port')

  if (existing) {
    return Number(existing.split('=')[1])
  }

  const port = 40000 + Math.round(Math.random() * 25000)
  args.push(`--remote-debugging-port=${port}`)
  return port
}

function install(on) {
    on('before:browser:launch', (browser, runData) => {
      port = ensureRdpPort(runData.args);
    });
  
    on("task", {
      getCdpClient: async () => {
        client = await CDP({ port });
        return client;
      }
    })
  }

  
  module.exports = { install };