//const env = process.env;

const config = {
    db: { /* do not put password or any sensitive info here, done only for demo */
        host: 'ec2-3-216-113-109.compute-1.amazonaws.com',
        port: '5432',
        user: 'blqkxpihnhoiqy',
        password: 'd7ed8ff3071eeaad88e3bb6a9b0fa27933bbf1e519e311ef3dd352f9efa944ac',
        database: 'd6c3dv2ucoij2j',
    },
    listPerPage: env.LIST_PER_PAGE || 10,
    connectionString: 'postgres://blqkxpihnhoiqy:d7ed8ff3071eeaad88e3bb6a9b0fa27933bbf1e519e311ef3dd352f9efa944ac@ec2-3-216-113-109.compute-1.amazonaws.com:5432/d6c3dv2ucoij2j',
    //connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
};

module.exports = config;

// host: env.DB_HOST || 'ec2-3-216-113-109.compute-1.amazonaws.com',