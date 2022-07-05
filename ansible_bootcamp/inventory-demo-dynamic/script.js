#!/usr/local/bin/node

const option = process.argv[2]
const hostname = process.argv[3]


const hosts = {
  web1: {ansible_host: '192.168.30.4'},
  web2: {ansible_host: '192.168.30.5'},
  db1: {ansible_host: '192.168.30.6'}
}

const groups = {
  web: ['web1', 'web2'],
  db: ['db1']
}


// --host <hostname> option
if (option === '--host' ) {
  console.log(JSON.stringify(hosts[hostname]))
   }
// --list option
   if (option === '--list' ) {
    console.log(JSON.stringify(groups))
     }
