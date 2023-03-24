import React from 'react'
import NavBar from './NavBar';
import Product from './Product';
import Cart from './Cart'
import Billing from './Billing';
import {connect} from 'react-redux';
import {addProducts} from './actions/actions'
import './App.css';

//export default 
class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      navBarKey: 'home',
      productList: []
    }
  }
 componentDidMount=()=>{
   this.props.dispatch(addProducts())
  
 }
  
 componentWillReceiveProps=(nextProps)=>{
   this.setState({productList:nextProps.productList})

 }
  handleClick = (clickedOn) => {
    this.setState({ navBarKey: clickedOn })
    if(clickedOn==='logout'){
      window.location.reload ()
    }
  }

 updateQuantity=(id,quantity)=>{
   let productList=this.state.productList

   for(let key in productList){
     if(productList[key]['id']===id){
       productList[key]['quantity']=quantity
       this.setState({productList})
       break
     }
   }

 }

 handleCheckout=()=>{
this.setState({navBarKey:"billing"})
 }
 handlePlaceOrder=()=>{
   alert("Order placed..Thank you for shopping")
   window.location.reload ()
 }

  render() {
 console.log(this.state.productList)
    return (
      <div className="App">
      
        <NavBar handleClick={this.handleClick} navBarKey={this.state.navBarKey}/>
       
        {this.state.navBarKey == "home" ?
          Object.keys(this.state.productList).map(key => {
         
            return <Product
              key={key} index={key}
              productDetails={this.state.productList[key]}
              updateQuantity={this.updateQuantity}
            />

          }) : null}

{this.state.navBarKey == "cart" ?<div><button className='checkoutButton' onClick={this.handleCheckout}>Checkout </button></div>:null}


{this.state.navBarKey == "cart" ?
 
          Object.keys(this.state.productList).map(key => {
         // console.log(this.state.productList)
             if(this.state.productList[key]['quantity']!==0){
              return <Cart
              key={key} index={key}
              productDetails={this.state.productList[key]}
              
            />
  
             }
          
          }) : null}


{this.state.navBarKey == "billing" ?

      <Billing
      handlePlaceOrder={this.handlePlaceOrder}
     productList={this.state.productList}
     
   />

    : null}
      </div>
    );
  }

}

const mapStateToProps=(state)=>({
  productList:state.productList,
  })

  export default connect(mapStateToProps)(App);