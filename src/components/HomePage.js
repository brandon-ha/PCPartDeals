import React from 'react';
import Header from './Header';
import Selector from './Selector';
import PostList from './PostList';
import Footer from './Footer';

const HomePage = () => (
    <div>
        <Header />
        <Selector />
        <PostList />
        <Footer />
    </div>
);

export default HomePage;