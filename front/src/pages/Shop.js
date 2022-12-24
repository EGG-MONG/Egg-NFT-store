import Search from "../components/Search";
import Paging from "../components/Paging";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Shop = () => {
  // 페이지 네이션
  const [items, setItems] = useState([
    { id: 1, title: "example-NFT", price: 10 },
    { id: 1, title: "example-NFT", price: 10 },
    { id: 1, title: "example-NFT", price: 10 },
    { id: 1, title: "example-NFT", price: 10 },
    { id: 1, title: "example-NFT", price: 10 },
    { id: 1, title: "example-NFT", price: 10 },
    { id: 1, title: "example-NFT", price: 10 },
    { id: 1, title: "example-NFT", price: 10 },
    { id: 1, title: "example-NFT", price: 10 },
    { id: 1, title: "example-NFT", price: 10 },
    { id: 1, title: "example-NFT", price: 10 },
  ]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const offset = (page - 1) * limit;

  useEffect(() => {}, []);

  return (
    <>
      <SearchWrap>
        <Search />
      </SearchWrap>
      <ListWrap>
        <ItemsWrap>
          {items.slice(offset, offset + limit).map(({ id, title, price }) => (
            <Cards key={id}>
              <img alt="example" src="/Img/egg_1.png" />
              <div>
                <ItemTitle>
                  <Link to="/detail">{title}</Link>
                </ItemTitle>
                <div>{price} ETH</div>
                <BtnWrap>
                  <Btn>CART</Btn>
                  <Btn>BUY</Btn>
                </BtnWrap>
              </div>
            </Cards>
          ))}
        </ItemsWrap>
      </ListWrap>
      <Paging
        total={items.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

const SearchWrap = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.3rem;
`;

const ListWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemsWrap = styled.div`
  text-align: center;
  display: grid;
  align-content: center;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
`;

const ItemTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Cards = styled.div`
  width: 15rem;
  height: 21rem;
  border: 1px solid #d9d9d9;
  border-radius: 1rem;

  > img {
    width: 200px;
    margin-top: 1rem;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Btn = styled.button`
  cursor: pointer;
  width: 100px;
  height: 2rem;
  font-size: 1.2rem;
  padding-top: 0.3rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 0.5px solid gray;

  &:hover {
    background-color: plum;
    color: white;
  }
`;
export default Shop;
