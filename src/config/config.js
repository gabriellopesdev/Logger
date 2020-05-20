let DatabaseConnection = {
    host: 'mongodb://localhost',
    port: '27017',
    databaseName: 'log_database'
};
exports.ConnectionString = DatabaseConnection.host + ':' + 
                          DatabaseConnection.port + '/' +
                          DatabaseConnection.databaseName;

