//


const twitter = "https://twitter.com/";
const twitterfix = "https://vxtwitter.com/";
const x = "https://x.com/";
const xfix = "https://fixupx.com/";

window.addEventListener("paste", (event) => {
    event.preventDefault();

    let pastelink = (event.clipboardData || window.clipboardData).getData("text");

    if (pastelink.toLowerCase().includes(x)) {
        pastelink = str.replace(x, xfix);
    } else if (pastelink.toLowerCase().includes(twitter)) {
        pastelink = str.replace(twitter, twitterfix);
    }


});

