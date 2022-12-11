import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './redux/slice';
import GridImages from './Components/GridImagesComponent'
import NoImage from './Components/NoImageComponent';
import FilterImages from './Components/FilterImagesComponent'

function App() {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.posts.postsLoading)

  useEffect(() => {
    dispatch(getPosts({}));
  }, [dispatch])

  return (
    <div >
      <FilterImages />
      {!loading ? <GridImages /> : <NoImage />}
    </div>
  );
}

export default App;
