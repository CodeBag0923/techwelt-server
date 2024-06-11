const userSchema = require('./users');
const vehicleSchema = require('./vehicles');
const teltonikaSchema = require('./teltonika');
const ruptelaSchema = require('./ruptela');
const commandSchema = require('./command');
const alertSchema = require('./alerts')
const geofenceSchema = require('./geofence')
const reportSchema = require('./reports')
const ruleSchema = require('./rules')
const ticketSchema = require('./tickets')
const companySchema = require('./company')

module.exports =  { 
    userSchema,
    vehicleSchema,
    teltonikaSchema,
    ruptelaSchema,
    commandSchema,
    alertSchema,
    geofenceSchema,
    reportSchema,
    ruleSchema,
    ticketSchema,
    companySchema
};