// const url = "https://api.escuelajs.co/api/v1/products?offset=1&limit=2"

import { useEffect, useReducer } from "react";

function getUrl(page, limit = 4) {
  const u = `https://api.escuelajs.co/api/v1/products?offset=${page}&limit=${limit}`;
  return u;
}

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_PAGE": {
      return { ...state, page: state.page + 1 };
      break;
    }
    case "PREV_PAGE": {
      return { ...state, page: state.page - 1 };

      break;
    }
    case "SET_DATA": {
      return { ...state, items: action.items };
      break;
    }
  }
}

const PaginationComponent = () => {
  const [state, dispatch] = useReducer(reducer, {
    page: 0,
    limit: 5,
    items: [],
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const uri = getUrl(state.page, state.limit);
      const response = await fetch(uri);
      const result = await response.json();
      dispatch({ type: "SET_DATA", items: result });
    };
    fetchProducts();
  }, [state.page, state.limit]);

  const prevClick = () => {
    if (state.page > 0) {
      dispatch({ type: "PREV_PAGE" });
    }
  };
  const nextClick = () => {
    if (state.page < 10) {
      dispatch({ type: "NEXT_PAGE" });
    }
  };

  return (
    <div>
      <div>
        {state.items?.map((product) => {
          return <div key={product.id}>{product.title}</div>;
        })}
      </div>
      <div>{state.page}</div>
      <div>
        <button onClick={prevClick}>prev</button>
        <button onClick={nextClick}>next</button>
      </div>
    </div>
  );
};
export { PaginationComponent };
