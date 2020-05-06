let Comentario = (sequelize, DataTypes) => {
  return sequelize.define(
    "Comentario",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      texto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      usuarios_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "usuarios",
          key: "id",
          as: "usuarios",
        },
        allowNull: false,
      },
      posts_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "posts",
          key: "id",
          as: "posts",
        },
        allowNull: false,
      },
    },

    {
      tableName: "comentarios",
      timestamps: false,
    }
  );
};

module.exports = Comentario;
