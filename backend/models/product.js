'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0
      }
    }
  }, {});

  Product.associate = function(models) {
    Product.belongsToMany(models.Cart, {
      through: models.CartProduct,
      foreignKey: 'productId',
      as: 'carts'
    });
  };

  return Product;
};
