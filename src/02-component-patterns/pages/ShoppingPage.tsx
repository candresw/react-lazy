import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

const product = {
  id: '1',
  title: 'Coffee Mug - Card'
}

export const ShoppingPage = () => {

  return (
    <div>
        <h1>Shopping page</h1>
        <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        <ProductCard product={ product } >
          <ProductCard.Image />
          <ProductCard.Title title={ 'Hola' } />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={ product } >
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage;