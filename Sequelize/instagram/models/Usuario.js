let Usuario = (sequelize, DataTypes) => {
  let usuario = sequelize.define(
    "Usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "usuarios",
      timestamps: true,
    }
  );

  usuario.associate = (models) => {
    usuario.hasMany(models.Post, {
      foreignKey: "usuarios_id",
      as: "posts",
    });

    usuario.hasMany(models.Comentario, {
      foreignKey: "usuarios_id",
      as: "comentarios",
    });
  };

  return usuario;
};

module.exports = Usuario;
