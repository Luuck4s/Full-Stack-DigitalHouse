const { sequelize, Usuario } = require('../models');

Usuario.findByPk(3,{include: ['comentarios', 'posts']}).then(
    u => {
        console.log(u.toJSON());
        sequelize.close();
    }
)