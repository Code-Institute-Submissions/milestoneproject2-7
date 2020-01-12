// const baseURL = "https://the-cocktail-db.p.rapidapi.com/list.php?c=list";

// function getData(drinks) {

//     var xhr = new XMLHttpRequest();
//     xhr.withCredentials = true;

//     xhr.addEventListener("readystatechange", function () {
//         if (this.readyState === this.DONE) {
//             console.log(this.responseText);
//         }
//     });

//     xhr.open("GET", baseURL + drinks + "/");
//     xhr.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
//     xhr.setRequestHeader("x-rapidapi-key", "fd0bbadabbmsh2e64c3d5179018ap197d0ajsn9d2996fe21c0");

// }

// function writeToDocument(drinks) {
//     getData(drinks, function(data) {
//         document.getElementById("data").innerHTML = data;
//     }) 
// }


// const url = 'https://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2020-01-11&' +
//           'sortBy=popularity&' +
//           'apiKey=32187fe519f84fcfb92d87bdf66b0024';

// fucntion GetData(news) {

//     var req = new Request(url);

// function fetch(req) {
//     .then(function(response) {
//         console.log(response.json());
//     })
// }
// }



function doSearch() {

    // Do the search
    var searchbx = document.getElementById("searchbox"); // get the searchbox
    var searchterm = searchbx.value; // get the search term

    // if it's blank, give up
    if (searchterm == ""){
    alert("Enter a search term"); // put up an explanation for the user
    return; // jump out of this funciton
    }

    // the API call
    $.ajax({
        url: 'https://newsapi.org/v2/everything?',
        type: 'GET',
        headers: { "api-key": "32187fe519f84fcfb92d87bdf66b0024" }
        data: {q : searchterm},
        success: function (results) {
            displayResults(results);
        },
        error: function (e) {
            alert("Something went wrong: " + e);
        }

    });

}

function displayResults(results) {

    // display the results of the query
    // get the div where the results will be shown
    var showdiv = document.getElementById("resultsdiv");
    // empty that div of its current contents
    showdiv.innerHTML = "";
    var titleInfo, title, authorInfo, author; // create a variable or two
    // cycle through each of the elements of the results array
    for (i = 0; i < results.item.length; i++) {
        // get the author
        authorInfo = results.item[i].contributor;
        // if there was no author key, provide some helpful content
        if (authorInfo == undefined) {
            authorInfo = "[No author listed]";
        }
        // is it an array?
        if ($.isArray(authorInfo)) {
            author = authorInfo.join("; ");
        }
        else { // if it's not an Array
            author = authorInfo;
        }
        // get the title
        titleInfo = results.item[i].title;
        // if there was no author key, provide some helpful content
        if (titleInfo == undefined) {
            titleInfo = "[No title listed]";
        }
        // is it an array
        if ($.isArray(titleInfo)) {
            title = titleInfo.join(" - ");
        }
        else { // if it's not an Array
            title = titleInfo;
        }
        // create a new div for the title and add it to the page
        var currentcontent = showdiv.innerHTML;
        showdiv.innerHTML = currentcontent + "<div class='oneresult'><span class='titleclass'>" + title + "</span>, by <span class='authorclass'>" + author + "</span></div>";
    }
}


