'use script';
const mysql = require('../services/mysql.connection');

const Promise = require('bluebird');
function getStations()
{


    var sql1 = 'select * from wizu order by typ, lp ASC';
    var sql2 = 'SELECT `wizu`.id_ppwr from `wizu`,`sppwr`,`sppwr2` where `wizu`.id_ppwr=`sppwr`.miejsce_zamocowania AND `sppwr`.identyfikator=`sppwr2`.id_sppwr AND `sppwr2`.potwierdzenieObsadzenia=1 ORDER BY `wizu`.lp, `wizu`.typ ASC';
    var sql3 = 'SELECT `wizu`.id_ppwr from `wizu`,`spoa`,`spoa2` where `wizu`.id_ppwr=`spoa`.miejsce_zamocowania AND `spoa`.identyfikator=`spoa2`.id_spoa AND `spoa2`.potwierdzenieObsadzenia=1 ORDER BY `wizu`.lp, `wizu`.typ ASC';

    return mysql.query(sql1 + ';' + sql2 + ';' + sql3, (error, result, fields)=>
    {
        if (error) {
            throw error;
        }


        return Promise.resolve(result);
    });

}

module.exports = {
    getStations
}
