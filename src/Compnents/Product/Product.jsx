import React from "react"
const Product=()=>{
    const productdetail=[
        {id:1,name:"laptop",category:"electronics",price:"45000", quantity:10},
        {id:2,name:"mobilephone",category:"electronics",price:"15000", quantity:15}
    ]
    return(
        <div>
            <h2>Product detail</h2>
            <table border="1" cellPadding="10">
                <thread>
                    <tr>
                        <th>id</th>
                        <th>product name</th>
                        <th>category</th>
                        <th>price</th>
                        <th>quantity</th>
                    </tr>
                </thread>
            </table>
            </div>
    );
}

export default Product;