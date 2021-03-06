module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        email: DataTypes.STRING,
        passwordHash: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        birthDate: DataTypes.DATE,
        phone: DataTypes.STRING
    }, {
        tableName: 'users',
        classMethods: {
            associate: function (models) {
                User.hasOne(models.Host, { onDelete: 'cascade' })
                User.hasOne(models.Wwoofer, { onDelete: 'cascade' })
                User.hasMany(models.Renewal)
            }
        }
    })
    return User
}