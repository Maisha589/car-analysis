import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-slate-200'>
            <h2 className='text-4xl mb-3 p-5'>This is my <span className='font-bold text-red-900 '>Blogs</span></h2>
            <h2 className='font-bold text-red-900 text-2xl'>What is context api?</h2>
            <p className='m-5 p-3'>React context api mainly use for sharing data between components without passing data in every nested components. As we know if we need to pass data from components to components, we have to pass all data by props from components to children components. By using context Api this whole data passing work became easy, because now we can share every data directly to the children components. Context api helps to avoid drop-drilling of components. </p>
            <h2 className='font-bold text-red-900  text-2xl'>Inline vs Block vs Inline-Block-</h2>
            <p className='m-5 p-3'><span className='font-bold text-red-900 '>Inline</span>: It doesn't start in a new line. We cannot set its width and height. <br /> Example of Inline elements: <ol>
                <li>span</li><li>a</li>
                <li>img</li></ol> </p>
            <p className='m-3'><span className='font-bold text-red-900 '>Block</span>: It start on a new line. We can maintain its height and width. <br /> Example of Block elements: <ol>
                <li>div</li><li>h1</li>
                <li>p</li>
                <li>li</li>
                <li>section</li>
            </ol>
            </p>
            <p className='m-3 mb-5'><span className='font-bold text-red-900 '>Inline-Block</span>: It doesn't start in a new line. we can set new width and height. </p>
        </div>
    );
};

export default Blogs;