import React from 'react';
import Header from './Header';
import Selector from './Selector';
import ScrollToTopButton from './ScrollToTopButton';
import PostList from './PostList';
import Footer from './Footer';

const HomePage = () => (
    <div>
        <Header />
        <Selector />
        <ScrollToTopButton />
        <PostList />
        <Footer />
    </div>
);

export default HomePage;