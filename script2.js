$(document).ready(function () {
    console.log("ready!");


    window.onload = function () {
        doSearch()
    }

    function doSearch() {

        console.log(localStorage.getItem("inputbox"));
        //Getting the value of the search keyword from the previous page

        var searchterm = localStorage.getItem("inputbox")
        // console.log(searchterm)

        // if it's blank, give up
        if (searchterm == "") {
            alert("Enter a search term"); // put up an explanation for the user
            return; // jump out of this funciton
        }

        url = "https://newsapi.org/v2/everything?" + "q=" + searchterm + "&apiKey=32187fe519f84fcfb92d87bdf66b0024"
        console.log(url)
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

        //get the search term
        var searchterm2 = localStorage.getItem("inputbox")



        //showing the total amount of the search results
        var showTotal = document.getElementById("showtotalnumber")
        showTotal.innerHTML = results.totalResults + " results for " + "'" + searchterm2 + "'";

        for (var i = 0; i < results.articles.length; i++) {
            var obj = results.articles[i];
            var newslink = obj.url
            showdiv.innerHTML += "<div class='article-content'>" + "<ul>" + "<li>" + "<img src=" + obj.urlToImage + " alt='image'" + " class='images'> " +
                "<a href=" + newslink + " target=" + "_blank" + ">" + obj.title + "</a>" + "</li>"
                + "<li>" + " Author: " + obj.author + "</li>" +
                "<li>" + " Source: " + obj.source.name + "</li>" +
                "<li>" + obj.description + "</li>" +
                "<li>" + "<a href=" + newslink + " target=" + "_blank" + ">" + "Go to article" + "</a>" + "</li>" + "</ul>" + "</div>";

        }

    }

    $("#guzik2").click(function () {
        retrieve()
    })

    function retrieve() {
        var stuff = localStorage.getItem("email");
        console.log(stuff)

    }


})