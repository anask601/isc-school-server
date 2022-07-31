import affiliationRoute from './routes/affiliation.route';
import countryRoute from './routes/country.route';
import courseRoute from './routes/course.route';
import degreeRoute from './routes/degree.route';
import disciplineRoute from './routes/discipline.route';
import formatRoute from './routes/format.route';
import schoolSearchRoute from './routes/schoolSearch.route';
import subdisciplineRoute from './routes/sub-discipline.route';
import universityRoute from './routes/university.route';

const { Sequelize } = require('sequelize');

const Hapi = require('@hapi/hapi');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');

const mongoose = require('mongoose');

// Connect to the db
mongoose
    .connect('mongodb://localhost:27017/ISC')
    .then(() => {
        console.log('MongoDB is Connected');
    })
    .catch((err) => {
        console.log(err);
    });

//connect to sequelize
const sequelize = new Sequelize({
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
});

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: {
                origin: 'ignore',
            },
        },
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (req, res) => 'Hello, world!',
    });

    // server.route(degreeRoute);
    // server.route(courseRoute);
    // server.route(countryRoute);
    // server.route(affiliationRoute);
    // server.route(disciplineRoute);
    // server.route(subdisciplineRoute);
    // server.route(formatRoute);
    // server.route(universityRoute);
    // server.route(schoolSearchRoute);

    await server.start((err) => {
        if (err) {
            console.error(err);
        }
    });
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
