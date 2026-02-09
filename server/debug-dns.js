const dns = require('dns');
const util = require('util');

const resolveSrv = util.promisify(dns.resolveSrv);

async function checkDns() {
    try {
        console.log('Resolving _mongodb._tcp.cluster0.35wray1.mongodb.net...');
        const addresses = await resolveSrv('_mongodb._tcp.cluster0.35wray1.mongodb.net');
        console.log('SRV Records:', addresses);
    } catch (err) {
        console.error('DNS Lookup Failed:', err);
    }
}

checkDns();
