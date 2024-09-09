// Modify the function below. Add async await in place of the following line:
//     fetch(url).then(resp => resp.json())
// So there shouldn’t be any .then() calls anymore!
// Add a try catch block in order to catch any errors. To test the catch, modify one of the urls. The catch should console.log ‘ooooooops’.

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
  ];

// const getData = async function() {
// const [ users, posts, albums ] = await Promise.all(urls.map(url =>
//   fetch(url).then(resp => resp.json())
// ));
// console.log('users', users);
// console.log('posta', posts);
// console.log('albums', albums);
// }
// getData();


const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
            const response = await fetch(url);
            return response.json();
        }));
        console.log('users', users[0]);
        console.log('posts', posts[0]);
        console.log('albums', albums[0]);
    } catch (err) {
        console.log('ooooooops', err);
    }
}

getData();