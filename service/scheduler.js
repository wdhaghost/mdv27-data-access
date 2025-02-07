// scheduler.js (CommonJS version)
import cron from 'node-cron'
import {exec} from 'child_process'

cron.schedule('*/5 * * * *', () => {
  exec('node script.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error mongo.js: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
  });
});

console.log('Transfert commencé. maj éfectué toutes les 5 minutes.');
