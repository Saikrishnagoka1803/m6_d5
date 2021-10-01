import {Sequelize} from "sequelize";

const {PGPORT, PGHOST, PGPASSWORD, PGDATABASE, PGUSER} = process.env

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    dialect: 'postgres'
});

//const sequelize = new Sequelize(`postgres://${PGUSER}:${PGPASSWORD}:${PGPORT}/${PGDATABASE}`)

const test = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
//test()

export const connection = async() => {
    try {
        await sequelize.sync()
        console.log("Connected to database")
    } catch (error) {
        console.log(error)
    }
}

export default sequelize;