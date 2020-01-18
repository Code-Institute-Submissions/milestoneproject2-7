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

    function displayResults(results) {
        console.log(results);
        // get the div where the results will be shown
        var showdiv = document.getElementById("resultsdiv");
        // empty that div of its current contents
        showdiv.innerHTML = results;
//        showdiv.innerHTML = JSON.stringify(results);



        for (var i = 0; i < results.articles.length; i++) {
            var obj = results.articles[i];
            showdiv.innerHTML += "<ul>"+"<li>"+"TITLE: "+ obj.title+"</li>"+"<li>"+" AUTHOR: "+obj.author+"</li>"+"<li>"+" URL: " + obj.url +"</li>"+"<li>"+" SOURCE: "+ obj.source.name+"</li>"+"<li>"+" DESCRIPTION: " + obj.description+"</li>"+"</ul>";   

        }
        


    }



});


