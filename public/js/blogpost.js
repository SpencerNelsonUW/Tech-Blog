let startNewBlogpostClicked = true;

function startBlogpost(){
    startNewBlogPostClicked = !startNewBlogpostClicked;
    console.log(startNewBlogpostClicked)
    return startNewBlogpostClicked;
}

document.querySelector('.startNewBlogpost').addEventListener('click', startBlogpost);





  