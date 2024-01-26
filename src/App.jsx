import React, { useEffect, useReducer } from 'react';
import Results from './components/Result';
import Search from './components/Search';
import data from './components/data.json'; 
import './App.scss';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async (query) => {
      dispatch({ type: 'FETCH_START' });

      try {
      
        const simulatedData = await new Promise((resolve) => {
          setTimeout(() => resolve(data), 1000);
        });

        dispatch({ type: 'FETCH_SUCCESS', payload: simulatedData });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };

  
    fetchData('initial query');
  }, []);

  const handleSearch = (query) => {
    // Example: Trigger search when the user interacts with the search bar
    fetchData(query);
  };

  // Return the JSX
  return (
    <div>
      <Search onSearch={handleSearch} />
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      <Results data={state.data} />
    </div>
  );
};

export default App;
