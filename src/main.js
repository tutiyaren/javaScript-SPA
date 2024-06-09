const newBlog = document.querySelector('.new_blog');
const form = document.querySelector('#createForm');
const editForm = document.querySelector('#editForm');
const main = document.querySelector('.main');

newBlog.addEventListener('click', (event) => {
    form.classList.add('block_form');
    form.classList.remove('none_form');
    main.classList.add('opacity');
});

const fetchBlogs = async() => {
    const blogData = await fetch('http://localhost:8080/blogList.php');
    return blogData.json();
}

const blogOutput = async() => {
    const blogs = await fetchBlogs();
    const blogList = document.querySelector('.blog_list');
    if (blogs.length === 0) return blogList.innerHTML = "<p>記事はありません</p>";
    blogs.forEach(({ id, title, content }) => {
        blogList.insertAdjacentHTML(
            'beforeend',
            `
                <div class='blog_content'>
                    <p class='mb-0 font-weight'>タイトル</p><p class='mt-0'>${title}</p>
                    <p class='mb-0 font-weight'>内容</p>
                    <p class='mt-0'>${content}</p>
                    <p class='mt-0'><a href="#" class="edit_blog" data-id="${id}" data-title="${title}" data-content="${content}">編集</a></p>
                </div>
            `);
    });

    document.querySelectorAll('.edit_blog').forEach(editLink => {
        editLink.addEventListener('click', (event) => {
            event.preventDefault();
            const { id, title, content } = event.currentTarget.dataset;
            document.querySelector('#editId').value = id;
            document.querySelector('#editTitle').value = title;
            document.querySelector('#editContent').value = content;

            editForm.classList.add('block_form');
            editForm.classList.remove('none_form');
            main.classList.add('opacity');
        })
    })

}

blogOutput();
