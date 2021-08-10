import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { getCustomerList,getCharacterList, getProducts, addToFileProducts, addToFileCustomer, sendEmail } from '../../Service/service';

export default class MyApp extends React.Component {
    constructor(){
        super();
        this.state = {
            AccessoriesList: [],
            CoffeeCapsules: [],
            CoffeeMachines:[],
            WholeBean:[],
            customerList:[],
            CharacterList:[]
        }
    };
    fetchData() {
        let AccessoriesList =  getProducts('Accessories');
        this.setState({AccessoriesList:AccessoriesList});
        let CoffeeCapsules =  getProducts('CoffeeCapsules');
        this.setState({CoffeeCapsules:CoffeeCapsules});
        let CoffeeMachines =  getProducts('CoffeeMachines');
        this.setState({CoffeeMachines:CoffeeMachines});
        let WholeBean =  getProducts('WholeBean');
        this.setState({WholeBean:WholeBean});
        let customerList =  getCustomerList();
        this.setState({customerList:customerList});
        let CharacterList =  getCharacterList();
        this.setState({CharacterList:CharacterList});
    };
    
    componentDidMount(){
        this.fetchData();
        window.scrollTo({ top: 0, left: 0 })
    }

    addToCustomers(item) {
        const customer = this.props.customer
        if (item.category === "CoffeeCapsules") {
            for (let index = 0; index < 4; index++) {
                    this.CharacterList.map((i => {
                        i.flavors.map(flavore => {
                            if (flavore === item.name) {
                                this.customerList.map(cust => {
                                    if (cust.Email === customer.Email) {
                                        const newCustomer = {
                                            UserName: customer.UserName,
                                            FirstName: customer.FirstName,
                                            LastName: customer.LastName,
                                            Email: customer.Email,
                                            Password: cust.Password,
                                            flavor: i.title,
                                            id: cust.id
                                        }
                                        addToFileCustomer(newCustomer)
                                        return;
                                    }
                                })
                            }
                        })
                    }))
            }
        }
    }

    addtoFile() {
        let ProductList = {"Accessories":this.AccessoriesList,"CoffeeCapsules": this.CoffeeCapsules, "CoffeeMachines":this.CoffeeMachines,"WholeBean": this.WholeBean};
        this.props.itemList?.forEach((item, index) => {
            let quantity, src;
            ProductList[item.category].forEach(prod => { if (prod.id === item.id) { quantity = prod.quantity; src = prod.src } })
            let newItem = {
                id: item.id,
                name: item.name,
                description: item.description,
                text: item.text,
                price: item.price,
                quantity: quantity - item.amount,
                src: src
            }
            addToFileProducts(newItem, item.category);
            if (this.props.customer.UserName !== "") {
                this.addToCustomers(item);
            }
        })
    };

    render() {
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
            this.addtoFile();
            this.props.setItemList([]);
            this.props.setCurrentCost(0);
            this.props.setItemListLength(0);
            const value = this.props.value;
            sendEmail({email:value.Email,name: value.FirstName+" "+ value.LastName},"purchase");
            this.props.history.push('/');
        }

        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }

        const onError = (err) => {
            console.log("Error!", err);
        }
        let env = 'sandbox';
        let currency = 'USD';
        let total = this.props.total + 20;

        const client = {
            sandbox: "ATm4XGukoRUiof9sOQ9NjZW-BsUXUFgEL2qzz107U7CECWvAHwUbgZT9WUbMMl1omoGFGoZcIIQC3aK7",
            production: 'YOUR-PRODUCTION-APP-ID',
        }

        return (
            <PaypalExpressBtn env={env}
                style={{ color: 'gold', shape: 'rect', label: 'paypal', height: 50, width: 200 }}
                client={client}
                currency={currency}
                total={total}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel} />
        );
    }
}