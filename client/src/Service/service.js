//gets all products from the server
export const getProducts = async (category, res) => {
    let ProductList;
    await fetch(`http://localhost:5000/products/` + category, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
    }).then(res => res.json())
        .then((res) => {
            ProductList = res
        }).catch((res) => {
            console.log(res)
        });
    return ProductList;
}
//get all opinions from the server
export const getOpinions = async (res) => {
    let OpinionList;
    await fetch(`http://localhost:5000/opinion`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
    }).then(res => res.json())
        .then((res) => {
            OpinionList = res
        }).catch((res) => {
            console.log(res)
        });
    return OpinionList;
}
//get all blog pictures from the server
export const getBlogPic = async (res) => {
    let BlogPic;
    await fetch(`http://localhost:5000/blog`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
    }).then(res => res.json())
        .then((res) => {
            BlogPic = res
        }).catch((res) => {
            console.log(res)
        });
   
    return BlogPic[0]["Blog"];
}
//get all customers details from the server
export const getCustomerList = async (res) => {
    let customerList;
    await fetch(`http://localhost:5000/customers`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
    }).then(res => res.json())
        .then((res) => {
            customerList = res
        }).catch((res) => {
            console.log(res)
        });
    return customerList;
}
//get a specific customer holding the email given 
export const getCustomer = async ( Email, res) => {
    let customer;
    let email = {email:Email}
    await fetch(`http://localhost:5000/customer`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
    }).then(res => res.json())
        .then((res) => {
            customer = res
        })
        .catch((res) => {
            console.log(res)
        });
    return customer;
}
//delete a customer holding the given email
export const deleteCustomer = async (email, res) => {
    await fetch(`http://localhost:5000/customers/${email}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
    }).catch((res) => {
        console.log(res)
    });
}
//get character list
export const getCharacterList = async (res) => {
    let characterList;
    await fetch(`http://localhost:5000/characters`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
    }).then(res => res.json())
        .then((res) => {
            characterList = res
        }).catch((res) => {
            console.log(res)
        });
    return characterList;
}
//add an idea/contact/opinion.
export const addRes = async (res, array) => {
    await fetch(`http://localhost:5000/${array}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
    }).catch((res) => {
        console.log(res)
    });
};
//add a customer
export const addCustomer = async (res) => {
    await fetch(`http://localhost:5000/customers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
    }).catch((res) => {
        console.log(res)
    });
};
//add an order
export const addOrder = async (res) => {
    await fetch(`http://localhost:5000/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
    }).catch((res) => {
        console.log(res)
    });
};
//update a product.
export const addToFileProducts = async (newItem, category) => {
    fetch(`http://localhost:5000/products/${category}/${newItem.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
    }).catch((res) => {
        console.log(res)
    });
}
//update a specific contact details
export const addToFileCustomer = async (customer) => {
    fetch(`http://localhost:5000/customers/${customer.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
    }).catch((res) => {
        console.log(res)
    })
}
//update an opinion
export const addToFileOpinion = async (opinion) => {
    
    fetch(`http://localhost:5000/opinion/${opinion.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(opinion),
    }).catch((res) => {
        console.log(res)
    })
}
//send email to user
export const sendEmail = async (res, emailType) => {
    await fetch("http://localhost:5000/email/" + emailType,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(res)
    })
}