const EventEmitter = require('node: events');
class schoolBell extends EventEmitter {
}

const schoolBell = new schoolBell();

schoolBell.on('ring',() => {
  console.log(`class shes`);
});

schoolBell.emit('ring'); 