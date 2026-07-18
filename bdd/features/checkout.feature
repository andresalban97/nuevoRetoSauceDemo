Feature: Checkout products

    Background: Login User
        Given el usuario ha iniciado sesión con credenciales válidas

    @CompraProductos
    Scenario: Complete checkout with products in cart
        When el usuario agrega el producto "sauce-labs-backpack" al carrito
        And el usuario abre el carrito
        And el usuario inicia el proceso de checkout
        And el usuario completa la información de compra
        Then debe ver el mensaje de confirmación de compra