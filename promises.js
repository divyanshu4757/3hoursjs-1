const blogs = [];
let lastUserActivityTime = null;

function createPost(postTitle) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const post = { title: postTitle };
            blogs.push(post);
            resolve(post);
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (blogs.length > 0) {
                const deletedPost = blogs.pop();
                resolve(deletedPost);
            } else {
                reject(new Error('No posts to delete.'));
            }
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastUserActivityTime = new Date().toLocaleTimeString();
            resolve(lastUserActivityTime);
        }, 1000);
    });
}

function printPostsAndActivityTime() {
    blogs.forEach((post) => {
        console.log(post.title);
    });

    console.log('Last User Activity Time:', lastUserActivityTime);
}

// Call the functions in the right sequence
createPost('Post 1')
    .then(() => updateLastUserActivityTime())
    .then((activityTime) => {
        console.log('Post creation and user activity time resolved:');
        printPostsAndActivityTime();
        return createPost('Post 2');
    })
    .then(() => updateLastUserActivityTime())
    .then((activityTime) => {
        console.log('Post creation and user activity time resolved:');
        printPostsAndActivityTime();
        return createPost('Post 3');
    })
    .then(() => updateLastUserActivityTime())
    .then((activityTime) => {
        console.log('Post creation and user activity time resolved:');
        printPostsAndActivityTime();
        return deleteLastPost();
    })
    .then((deletedPost) => {
        console.log('Post deleted successfully:', deletedPost.title);
        console.log('Updated posts after deletion:');
        printPostsAndActivityTime();
    })
    .catch((error) => {
        console.error(error.message);
    });
