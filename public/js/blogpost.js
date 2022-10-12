let startNewBlogpostClicked = false;

function startBlogpost(){
    startNewBlogpostClicked = true;
    console.log(startNewBlogpostClicked)
    return;
}

document.querySelector('#startNewBlogpost').addEventListener('click', startBlogpost);





  