'use strict';
const mysql = require('./mysql.connection');

module.exports = function (server)
{

    mysql.connect();


    server.route({
        method: 'GET', path: '/', handler: function (req, res)
        {
            let stations = {
                wodne: [], opadowe: []
            };
            var sql1 = 'select * from wizu order by typ, lp ASC';
            var sql2 = 'SELECT `wizu`.id_ppwr from `wizu`,`sppwr`,`sppwr2` where `wizu`.id_ppwr=`sppwr`.miejsce_zamocowania AND `sppwr`.identyfikator=`sppwr2`.id_sppwr AND `sppwr2`.potwierdzenieObsadzenia=1';
            var sql3 = 'SELECT `wizu`.id_ppwr from `wizu`,`spoa`,`spoa2` where `wizu`.id_ppwr=`spoa`.miejsce_zamocowania AND `spoa`.identyfikator=`spoa2`.id_spoa AND `spoa2`.potwierdzenieObsadzenia=1'
            mysql.query(sql1 + ';' + sql2 + ';' + sql3, (error, result, fields)=>
            {
                if (error) {
                    throw error;
                }
                for (let obj of result[0]) {
                    obj.obsadzona = 0;
                    if (obj.typ === 1) {

                        stations.wodne.push(obj)
                    } else if (obj.typ === 2) {
                        stations.opadowe.push(obj);
                    }
                }
                if(result[1].length > 0) {
                    for (let i = 0; i < stations.wodne.length; i++) {
                        if (result[1][i].id_ppwr === stations.wodne[i].id_ppwr) {
                            stations.wodne[i].obsadzona = 0;
                        }
                    }
                }
                if(result[2].length > 0) {
                    for (let i = 0; i < stations.opadowe.length; i++) {
                        if (result[2][i].id_ppwr === stations.opadowe[i].id_ppwr) {

                            stations.opadowe[i].obsadzona = 1;
                            console.log(stations.opadowe[i]);
                        }
                    }
                }
                return res(stations);
            })
                    .on('end', function(err){
                        mysql.end();
                    });


        }
    });
};
