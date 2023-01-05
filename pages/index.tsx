import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { styled } from '@stitches/react';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

let id = 0
let pid = 0

export const data = [
  {
    id: id++,
    name: `Product ${pid++}`,
    price: 100,
    image: 'https://cdn.shopify.com/s/files/1/0010/0001/0001/products/1_1024x1024.jpg?v=1619040000',
  },
  {
    id: id++,
    name: `Product ${pid++}`,
    price: 100,
    image: 'https://cdn.shopify.com/s/files/1/0010/0001/0001/products/1_1024x1024.jpg?v=1619040000',
  },
  {
    id: id++,
    name: `Product ${pid++}`,
    price: 200,
    image: 'https://cdn.shopify.com/s/files/1/0010/0001/0001/products/1_1024x1024.jpg?v=1619040000',
  },
  {
    id: id++,
    name: `Product ${pid++}`,
    price: 300,
    image: 'https://cdn.shopify.com/s/files/1/0010/0001/0001/products/1_1024x1024.jpg?v=1619040000',
  },
  {
    id: id++,
    name: `Product ${pid++}`,
    price: 400,
    image: 'https://cdn.shopify.com/s/files/1/0010/0001/0001/products/1_1024x1024.jpg?v=1619040000',
  },
  {
    id: id++,
    name: `Product ${pid++}`,
    price: 100,
    image: 'https://cdn.shopify.com/s/files/1/0010/0001/0001/products/1_1024x1024.jpg?v=1619040000',
  },
]

export default function Home() {
  const router = useRouter();

  const handleClick = (id: number | string) => {
    router.push(`/${id}`)
  }

  return (
    <Wrapper>
      <Head>
        <title>Dia - Shopify Test</title>
      </Head>
      <Header>DIA</Header>
      <Container>
        {data.map((product) => (
          <Product key={product.id}>
            <ImageContainer onClick={() => handleClick(product.id)}>
              <Image src={product.image} alt={product.name} fill/>
            </ImageContainer>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button>Add to Card</button>
          </Product>
        ))}
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled('div', {
})

const Header = styled('p', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '.5rem',
  backgroundColor: 'white',
  borderBottom: '1px solid #eaeaea',
  fontSize: '2.5rem',
  fontWeight: 'bold',
  fontFamily: inter.className,
  width: '100%',
})

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
  padding: '1rem',
  width: '100%',
})

const ImageContainer = styled('button', {
  width: '100%',
  height: 400,
  position: 'relative',
})

const Product = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  border: '1px solid #eaeaea',
  borderRadius: '5px',




})
