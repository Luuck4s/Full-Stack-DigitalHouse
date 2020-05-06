let Post = (sequelize, DataTypes) => {
  return sequelize.define(
    "Post",
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
      img: {
        type: DataTypes.STRING,
      },
      n_likes: {
        type: DataTypes.INTEGER,
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
    },
    {
      tableName: "posts",
      timestamps: false,
    }
  );
};

module.exports = Post;
