import React from 'react';
class ItemList extends React.Component{

render(){
    return(
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            { this.props.features }
          </section>      
    )
}

}
export default ItemList