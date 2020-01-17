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
            //   data: { q: searchterm },
            //   datatype: 'json',
            success: function (results) {
                displayResults(results);
            },
            error: function (e) {
                alert("Something went wrong: " + e);
            }

        });

    }

    function displayResults(results) {
        console.log(results);
        // display the results of the query
        // get the div where the results will be shown
        var showdiv = document.getElementById("resultsdiv");
        // empty that div of its current contents
        showdiv.innerHTML = results;

        for (i = 0; i < results.item[i].length; i++) {

            console.log(article)

        }

        var article = results.item[i].title;

        // article.forEach(function() {
        //     var div = $("<div>" + articles.title + "<div>");
        //     $(document.resultsdiv).append(div);
        // });




    }



});


