import express from 'express';
import dotenv from 'dotenv';
import pg from 'pg';
import cors from 'cors';
import morgan from 'morgan';
import postgres from 'postgres';
dotenv.config();


const PORT = 8000;
const URL = '/api';
//const sql = postgres(process.env.DATABASE_URL)
const { Pool } = pg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('tiny'));
//app.use(cors());

//----------METHODS

//GET ALL
app.get(`${URL}`, async (req, res, next) => {
    try {
        //select all records from database
        const result = await pool.query(
            'SELECT * FROM activities_table'
        );
        //display all records obtained
        res.status(200).send(result.rows);
    }
    catch (error) {
        next(error);
    }
})

//GET ONE
app.get(`${URL}/:id`, async (res, req, next) => {
    try {
        //parse the parameter
        const id = parseInt(req.params.id);
        //error check id is a number
        if (isNaN(id)) {
            const error = new Error('Parameter is not a number');
            error.status = 404;
            throw error;
        }
        //obtain result at the parameter
        const result = await pool.query(
            `SELECT * FROM table_name WHERE id = ${id}`
        );
        //ensure a record was obtained
        if (result.rows.length === 0) {
            const error = new Error('Not found');
            error.status = 404;
            throw error;
        }
        //display result that was requested
        res.status(200).send(result.rows);
    }
    catch (error) {
        next(error);
    }
})

//CREATE
app.post(`${URL}`, async (res, req, next) => {
    try {
        //parse the body elements
        const { activity } = req.body;
        //error check all body elements were submitted
        if (!activity) {
            const error = new Error('Submit elements are missing');
            error.status = 404;
            throw error;
        }
        //insert into database
        const result = await pool.query(
            `INSERT INTO table_name (activity) VALUES ($1) RETURNING *`,
            [activity]
        );
        //display inputted record
        res.status(200).send(result.rows);
    }
    catch (error) {
        next(error);
    }
})

//UPDATE
app.patch(`${URL}/:id`, async (res, req, next) => {
    try {
        //parse parameter id
        const id = parseInt(req.params.id);
        //error check id is a number
        if (isNaN(id)) {
            const error = new Error('Parameter is not a number');
            error.status(404);
            throw(error);
        }
        //destructure request body
        const { activity } = req.body;
        //error handling for request
        /* if (!activity) {
            const error = new Error('')
        } */
        const result = await pool.query(
            `UPDATE table_name SET activity = $1 WHERE id = $2 RETURNING *`,
            [activity, id]
        );
        //display updated record
        res.send(result.rows);
    }
    catch (error) {
        next(error);
    }
})

//DELETE
app.delete(`${URL}/:id`, async (res, req, next) => {
    try {
        //parse parameter id
        const id = parseInt(req.params.id);
        //error check id is a number
        if (isNaN(id)) {
            const error = new Error('Parameter is not a number');
            error.status(404);
            throw error;
        }
        //delete from database
        const result = await pool.query(
            `DELETE FROM table_name WHERE id = $1 RETURNING *`,
            [id]
        );
        //ensure target record exists
        if (result.rows.length === 0) {
            const error = new Error('Not found');
            error.status(404);
            throw error;
        }
        //display result that was deleted
        res.status(200).send(result.rows);
    }
    catch (error) {
        next(error);
    }
})

//ERROR handling

app.use((error, req, res, next) => {
    res.status(error.status).send({error: error.message})
})

app.listen(PORT, (req, res) => {
    console.log(`Listening on PORT: ${PORT}`);
});