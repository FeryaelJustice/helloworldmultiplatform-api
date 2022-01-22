const env = process.env;

const config = {
    db: { /* do not put password or any sensitive info here, done only for demo */
        host: env.DB_HOST || 'ec2-3-216-113-109.compute-1.amazonaws.com',
        port: env.DB_PORT || '5432',
        user: env.DB_USER || 'blqkxpihnhoiqy',
        password: env.DB_PASSWORD || 'd7ed8ff3071eeaad88e3bb6a9b0fa27933bbf1e519e311ef3dd352f9efa944ac',
        database: env.DB_NAME || 'd6c3dv2ucoij2j',
    },
    listPerPage: env.LIST_PER_PAGE || 10,
    //connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
};

module.exports = config;