import './styles.scss';

import React, { Component } from 'react';
import CategoryRow from './category-row';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: this.props.groceryItemStore.categories };
  }
  componentDidMount() {
    this.props.groceryItemStore.categoryListeners.register((newCategories) => {
      this.setState({categories: newCategories});
    })
    this.props.groceryItemStore.updateCategories();
  }

  render() {
    let schemaData = {
      '@context' : 'http://schema.org',
      '@type': 'Product',
      'image': 'dell-30in0lcd.jpg',
      'name': 'Dell UltraSharp 30" LCD Monitor',
      'offers': {
        '@type': 'Offer',
        'price': '$1495'
      }
    }
    let categoryRows = this.state.categories.map((c) => (
      <CategoryRow
        className="category-list__item"
        key={c}
        cartStore={this.props.cartStore}
        groceryItemStore={this.props.groceryItemStore}
        categoryName={c} />
    ));
    return (
      <div className='Home'>
        <ul className="category-list">
          {categoryRows}
        </ul>
      </div>
    )
  }
}



export default Home;
