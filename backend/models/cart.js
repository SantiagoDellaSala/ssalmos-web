'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});

  Cart.associate = function(models) {
    Cart.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });

    Cart.belongsToMany(models.Product, {
      through: models.CartProduct,
      foreignKey: 'cartId',
      as: 'products'
    });
  };

  return Cart;
};
