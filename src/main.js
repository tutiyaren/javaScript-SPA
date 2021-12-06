const createBlog = document.querySelector('.addBlog');
const newBlog = document.querySelector('.new_blog');
const form = document.querySelector('.form');
const main = document.querySelector('.main');

createBlog.addEventListener('click', (event) => {
    alert('click');
})

newBlog.addEventListener('click', (event) => {
    form.classList.add('block_form');
    form.classList.remove('none_form');
    main.classList.add('opacity');
});

const fetchBlogs = async() => {
    // const blogLists = [];
    const blogList = document.querySelector('.blog_list');
    blogList.innerHTML = "<p>記事はありません</p>";
}

fetchBlogs();
