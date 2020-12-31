let imgCounter = 1;
let rowCounter = 1;

async function getGif(tag) {
    const response = await axios.get(
        "https://api.giphy.com/v1/gifs/random",
        {
            params: {
                tag,
                api_key: "jLhkFJIWBkZX1wBRjJGnydLQioacyiQ8"
            }
        });
    console.log(response.data.data.images.original.url);
    return response.data.data.images.original.url;
}

function createElements(src) {
    let $row = $(`#row-${rowCounter}`);
    let $rowDiv = $("<div>", { class: "col-3" })
    $rowDiv.attr("id", `img-${imgCounter}`);
    let $img = $("<img>", {class:"img-fluid"});
    $img.attr("src", `${src}`);
    $rowDiv.append($img);
    $row.append($rowDiv);
}


$("#add").on("click", async function () {
        let $tag = $("#search-term").val();
        const $newTag = await getGif($tag);
        console.log(`this is the new tag: ${$newTag}`)
        createElements($newTag);
        imgCounter++;
})

$("#remove").on("click", function () {
    $(".col-3").remove();
    imgCounter = 1;
})

