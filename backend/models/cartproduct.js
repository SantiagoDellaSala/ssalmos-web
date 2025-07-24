'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartProduct = sequelize.define('CartProduct', {
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {});

  CartProduct.associate = function(models) {
    // no hace falta definir relaciones inversas en este modelo puente
  };

  return CartProduct;
};
