$(document).ready(function () {
    console.log("ready!");

    $("#searchbutton").click(function () {
        doSearch();
    });

    function doSearch() {


        var searchvalue = document.getElementById("searchbox").value;
        console.log(searchvalue);

        // Do the search
        var searchbx = document.getElementById("searchbox"); // get the searchbox
        var searchterm = searchbx.value; // get the search term

        // if it's blank, give up
        if (searchterm == "") {
            alert("Enter a search term"); // put up an explanation for the user
            return; // jump out of this funciton
        }
        url = "https://newsapi.org/v2/everything?" + "q=" + searchterm + "&apiKey=32187fe519f84fcfb92d87bdf66b0024"

        //remember to make this work with 2 word search values!!!!!

        // the API call
        $.ajax({
            url: url,
            type: 'GET',
            success: function (results) {
                displayResults(results);
            },
            error: function (e) {
                alert("Something went wrong: " + e);
            }

        });

    }

    function generatePaginationButtons(next, prev) {
        if (next && prev) {
            return `<button onclick="writeToDocument('${prev}')">Previous</button>
                    <button onclick="writeToDocument('${next}')">Next</button>`;
        } else if (next && !prev) {
            return `<button onclick="writeToDocument('${next}')">Next</button>`;
        } else if (!next && prev) {
            return `<button onclick="writeToDocument('${prev}')">Previous</button>`;
        }
    }

    function displayResults(results) {
        console.log(results);
        // get the div where the results will be shown
        var showdiv = document.getElementById("resultsdiv");
        showdiv.innerHTML = results;

        for (var i = 0; i < results.articles.length; i++) {
            var obj = results.articles[i];
            var newslink = obj.url
            
            showdiv.innerHTML += "<ul>"+"<li>"+"TITLE: "+ obj.title+"</li>"+"<li>"+" AUTHOR: "+obj.author+"</li>"+"<li>"+"<a href="+newslink+" id="+"link"+" target="+"_blank"+">"+" URL: " + obj.url +"</a>"+"</li>"+"<li>"+" SOURCE: "+ obj.source.name+"</li>"+"<li>"+" DESCRIPTION: " + obj.description+"</li>"+"</ul>";   
        }
        //adding pagination to display the results 
        var numberOfResults = results.totalResults
        
        if (numberOfResults>20) {
            pagination = generatePaginationButtons(obj.next, obj.previous)
        }

    }

    // window.onload = function(){
    //     document.getElementById("link").href = window.location.toString();
    // }


});


