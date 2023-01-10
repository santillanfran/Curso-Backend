import autocannon from 'autocannon'
import { PassThrough } from 'stream'

function run(url) {
  const buf = [];
  const outputStream = new PassThrough();

  const inst = autocannon({
    url,
    connections: 100,
    duration: 20,
  });

  autocannon.track(inst, { outputStream });

  outputStream.on("data", (data) => buf.push(data));
  inst.on("done", function () {
    process.stdout.write(Buffer.concat(buf));
  });
}

console.log('Running all benchmarks in parallel ....')

run('http://localhost:8082/info-debug')
run('http://localhost:8082/info-nodebug')
run('http://localhost:8082/api/randoms-debug/?cant=50');
run('http://localhost:8082/api/randoms-nodebug/?cant=50');