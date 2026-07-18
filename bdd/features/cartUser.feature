Feature: Agregar productos al carrito

    Background: Login User
        Given el usuario ha iniciado sesión con credenciales válidas
        
    @AgregarProductos 
    Scenario Outline: User add products in shopping cart
        When el usuario agrega el producto "<IDproducto>" al carrito
        Then el producto "<Producto>" debe aparecer en el carrito de compras

        Examples:
            | Producto                 | IDproducto   |
            | Sauce Labs Backpack      | sauce-labs-backpack| 
            | Sauce Labs Bike Light    | sauce-labs-bike-light   |
            |Sauce Labs Fleece Jacket  | sauce-labs-fleece-jacket |
            | Sauce Labs Bolt T-Shirt  | sauce-labs-bolt-t-shirt |
            | Sauce Labs Onesie        | sauce-labs-onesie|
            |Test.allTheThings() T-Shirt (Red)| test.allthethings()-t-shirt-(red)|


 