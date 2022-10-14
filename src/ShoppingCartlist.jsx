import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCartList extends Component {

    constructor(props) {
        //initialize here ua state
        console.log("constructor--Shopping");
        super(props); //call super class contructor  which is Component mai paraent

        //initialize the state
        this.state = {
            products: [
                { id: 1, productName: "Laptop", pricetag: 900000, quantity: 2 },
                { id: 2, productName: "Charger", pricetag: 900, quantity: 3 },
                { id: 3, productName: "Mouse", pricetag: 1230, quantity: 4 },
                { id: 4, productName: "Motherboad", pricetag: 35234, quantity: 4 },
                { id: 5, productName: "Screen", pricetag: 4666, quantity: 56 },
                { id: 6, productName: "TV", pricetag: 4352, quantity: 65 },
                { id: 7, productName: "Anydesk", pricetag: 6574, quantity: 6 },
            ],
        };
    }

    render() {
        console.log("constructor -shopping");
        return (
            <div className="container-fluid">
                <h1>Shoopin cart is here</h1>
                <div>
                    {this.state.products.map((prodct) => {
                        return (<Product key={prodct.id} product={prodct}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                        >
                            {/* appealing o multiple times oso comment Item={prodct.productName}
                 pricetag={prodct.pricetag} */}
                            <button className="btn btn-primary">BUY </button>
                        </Product>

                        );
                    })}
                </div>
            </div>
        );
    }
    // ending our rendwer class function 
    //exute after constructor and render
    componentDidMount() {
        //to fetch data

        var promise = fetch('http://localhost:5000/products', { method: "GET" });
        promise.then((response) => {
            console.log(response);
        });
        //console.log("componentDidMount- Shopping");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate",
            prevProps, prevState, this.props, this.state);
        // if(prevProps.x==this.props.x)
        //{
        //     //make http call
        //}
    }
    // exetutes when deleted to memory
    componentWillUnmount() {
        console.log("componentWillUnmount-ShoppingCart");
    }
    componentDidCatch(error, info) {
        console.log("componentDidCatch- Shopping");
        console.log(error, info);

        localStorage.lastError = '${error}\n ${JSON.stringify(info)}';
    }

    handleIncrement = (prodct, maxValue) => {
        //events hadling on products
        console.log("handleIncrement", prodct);

        // get index of the selected product
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(prodct);
        if (allProducts[index].quantity < maxValue) {
            // consoleproductsa allfor allProindex
            allProducts[index].quantity++;
            this.setState({ products: allProducts });
        }

    };
    handleDecrement = (prodct, minValue) => {
        console.log("handleDecrement", prodct);
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(prodct);
        //to handle button click wiith if
        if (allProducts[index].quantity > minValue) {
            //console.log(index);
            // consoleproductsa allfor allProindex
            allProducts[index].quantity--;
            this.setState({ products: allProducts });
        }

    };
    //deleting from shoppong cart
    handleDelete = (prodct) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(prodct);
        if (window.confirm("Are you sure you want delete/remove from cart?")) {
            //delete base on index id
            allProducts.splice(index, 1);

        }
        //updating functinality
        this.setState({ products: allProducts });

    };
}