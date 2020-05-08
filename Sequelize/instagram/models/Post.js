let Post = (sequelize, DataTypes) => {
  let post = sequelize.define(
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
        defaultValue: 0,
      },
      usuarios_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "posts",
      timestamps: true,
    }
  );

  post.associate = (models) => {
    post.belongsTo(models.Usuario, {
      foreignKey: "usuarios_id",
      as: "usuarios",
    });
  };

  post.associate = (models) => {
    post.hasMany(models.Comentario, {
      foreignKey: "posts_id",
      as: "comentarios",
    });
  };

  return post;
};

module.exports = Post;
