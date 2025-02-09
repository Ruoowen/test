// 点赞功能
document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('liked');
    });
});

// 动态加载更多内容
let page = 1;
const loadMore = async () => {
    const response = await fetch(`/api/content?page=${page}`);
    const data = await response.json();
    renderCards(data);
    page++;
};

// 卡片渲染函数
function renderCards(data) {
    const grid = document.querySelector('.content-grid');
    data.forEach(item => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-header">
                <img src="${item.avatar}" class="user-avatar">
                <div class="user-info">
                    <h3>${item.username}</h3>
                    <p>${item.time}</p>
                </div>
            </div>
            <div class="card-content">
                <p>${item.content}</p>
                <div class="media-container">
                    <img src="${item.image}">
                </div>
            </div>
            <div class="card-actions">
                <button class="like-btn">♥ 点赞</button>
                <button class="comment-btn">💬 评论</button>
                <button class="share-btn">↗ 分享</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// 滚动加载
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        loadMore();
    }
});

// 初始化加载
loadMore();