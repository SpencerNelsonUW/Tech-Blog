let createNewBlogpostClicked = false;

function createBlogpost(){
    createNewBlogpostClicked = true;
    console.log(createNewBlogpostClicked)
    return;
}

document.querySelector('#newBlogpost').addEventListener('click', createBlogpost);





  