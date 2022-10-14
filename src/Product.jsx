import React, { Component } from "react";
export default class Product extends Component {
    constructor(props) {
        super(props);
        console.log('construtor -product');
        this.state = {

            // id:this.props.id,
            // productName:this.props.productName,
            // pricetag:this.props.pricetag,
            product: this.props.product,

        };
    }

    render() {
        //console.log(this.props);
        console.log('render -product');
        return (
            <div className="col-lg-6">
              

                {/* componentDidMount(){
                    console.log("componentDidMount -Product")
                }
                componentDidUpdate(){
                    console.log("componentDidUpdate-Product")
                } */}

                <div className="card m-2">
                    <div className="card-body">
                        <div className="text-muted">#{this.state.product.id}</div>
                        <span className="pull-right hand-icon" onClick={() => {
                            this.props.onDelete(this.state.product);
                        }
                        }>

                            <i className="fa fa-times">

                            </i>
                        </span>
                        <h5 className="pt-2 border-top">{this.state.product.productName}</h5>


                        <div>$_shs{this.state.product.pricetag}</div>


                    </div>
                    {/* card in fo end here = */}
                    <div className="card-footer text-center">

                        <div className="float-left">
                            <span className="badge">{this.state.product.quantity}</span>
                            <div className="btn-group">
                                <button className="btn  btn-outline-success"
                                    onClick={() => {
                                        this.props.onIncrement(this.state.product, 15);
                                    }}>
                                    +</button>
                                <button className="btn  btn-outline-danger"
                                    onClick={() => {
                                        this.props.onDecrement(this.state.product, 0);
                                    }}>
                                    -</button>
                            </div>
                        </div>
                        {/* float left endso this */}
                        <div className="float_right"></div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );

    }
    componentWillUnmount() {
        console.log("componentWillUnmount- Product");
    }
}
