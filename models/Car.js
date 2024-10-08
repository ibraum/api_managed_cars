module.exports = (sequelize, datatypes) => {
    return sequelize.define('Car', {
        id: {
            type: datatypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: datatypes.STRING,
            allowNull: false
        },
        categorie: {
            type: datatypes.STRING,
            allowNull: false
        },
        color: {
            type: datatypes.STRING,
            allowNull: false
        },
        other: {
            type: datatypes.STRING,
            allowNull: false,
            set(other) {
                this.setDataValue('other', other.join(','))
            },
            get(){
                const value = this.getDataValue('other')
                return value ? value.split(',') : null
            }
        }
    }, 
    {
        timestamps: true,
        createdAt: true
    })
}