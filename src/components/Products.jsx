import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product'
import useStyles from '../assets/productStyle'

const products=[
    {id:1, name:'Succulent', desc:'a hardy plant',price: '$5', image:'https://cdn.rona.ca/images/31695180_L.jpg'},
    {id:2, name:'Lily', desc:'a pretty flower', price: '$5', image: 'https://www.gardendesign.com/pictures/images/675x529Max/site_3/asiatic-lily-cappuccino-lily-creative-commons_11653.jpg'},
    {id:3, name:'Rose', desc:'a romantic flower', price: '$5', image:'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/8/10/0/CI_Edmunds_Roses-Adolf-Horstmann-hybrid-tea-rose.jpg.rend.hgtvcom.1280.853.suffix/1597076099714.jpeg' }
]
const Products =() => {
    const classes = useStyles();

    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
                {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
export default Products;