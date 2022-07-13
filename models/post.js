'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Post.init(
        {
            name: DataTypes.STRING,
            image_thumnail: DataTypes.STRING,
            description: DataTypes.TEXT,
            slug: DataTypes.STRING,
            categorypost_id: DataTypes.STRING,
            author_id: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Post',
        },
    );
    return Post;
};
