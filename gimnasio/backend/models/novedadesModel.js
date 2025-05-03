var pool = require('./bd');

async function getNovedades() {
    try {
        var query = 'select * from novedades';
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.error(error);
    }
}

async function insertNovedad(obj) {
    try {
        var query = 'insert into novedades set ?';
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function deleteNovedadById(id) {
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNovedadesById(id) {
    try {
        var query = 'select * from novedades where id = ?';
        var rows = await pool.query(query, [id]);
        return rows[0];
    } catch (error) {
        console.error(error);
    }
}

async function modificarNovedadesById(obj, id) {
    try {
        var query = 'update novedades set ? where id = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = { getNovedades, insertNovedad, deleteNovedadById, getNovedadesById, modificarNovedadesById }