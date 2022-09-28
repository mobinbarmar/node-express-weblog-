const { Sequelize } = require('sequelize');

const connectingDB = () => {

    try {
        console.log(`mssql connected`);
        return conn = new Sequelize('blog_db', 'sa', 'Q@rsche0098', {
            host: 'localhost',
            dialect: 'mssql'
        })
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectingDB