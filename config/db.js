const { Sequelize } = require('sequelize');

const connectingDB = () => {

    try {
        const conn = new Sequelize('blog_db', 'sa', 'Q@rsche0098', {
            host: 'localhost',
            dialect: 'mssql'
        })
        console.log(`mssql connected`);
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectingDB