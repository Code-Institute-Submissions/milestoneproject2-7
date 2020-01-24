$(document).ready(function () {
    console.log("ready!");

    //Getting the most recent headlines and today's date to display upon opening the website

    window.onload = function () {
        todayDate()
        getFirstHeadlines()
    };



    //getting today's date

    function todayDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        var wd = weekday[today.getDay()];

        today = wd + " " + mm + '/' + dd + '/' + yyyy;
        var showDate = document.getElementById("showdate")
        showDate.innerHTML = today
    }

    //////////////this is the seciton with funcitons responsible for getting the headlines on the front page///////////////////

    //change the articles based on the selected country

    var selectItem = document.getElementById('country');
    selectItem.addEventListener('change', function () {
        getHeadlines()
    })



    $("#navdatabuttons").click(function () {
        getHeadlines();
    });

    //change the articles based on the selected category

    var selectCategory = document.getElementById('navdatabuttons');
    selectCategory.addEventListener('change', function () {
        getHeadlines()
    }
    )

    //Getting the articles form the API
    function getHeadlines() {


        //filtering content by country

        var countrySelect = document.getElementById("country").value;
        console.log(countrySelect)

        var countryList = document.getElementById("country"); // get the searchbox
        var countrySearch = countryList.value; // get the search term



        //getting the category value

        $(document).ready(function () {
            $('.nav-buttons').click(function () {
                categoryValue = ($(this).attr("value"));
                console.log(categoryValue);
            });
        });

        url = "https://newsapi.org/v2/top-headlines?" + "category=" + categoryValue + "&country=" + countrySearch + "&apiKey=32187fe519f84fcfb92d87bdf66b0024";

        console.log(url)

        // the API call
        $.ajax({
            url: url,
            type: 'GET',
            success: function (resultsNews) {
                displayHeadlines(resultsNews);
            },
            error: function (e) {
                alert("Something went wrong: " + e);
            }

        });

    }

    function displayHeadlines(resultsNews) {
        console.log(resultsNews)

        // $("nav-buttons").click(function(){
        //     clearContent()
        // })

        // function clearContent(){}
        var el = document.getElementById("showheadlines");
        el.innerHTML = "";



        var showHeadlines = document.getElementById("showheadlines")
        for (var i = 0; i < resultsNews.articles.length; i++) {
            var obj = resultsNews.articles[i];
            var newslink = obj.url
            showHeadlines.innerHTML += "<div class='article-content'>" + "<ul>" + "<li>" + "<img src=" + obj.urlToImage + " alt='image'" + " class='images'> " +
                "<a href=" + newslink + " target=" + "_blank" + ">" + obj.title + "</a>" + "</li>"
                + "<li>" + " Author: " + obj.author + "</li>" +
                "<li>" + " Source: " + obj.source.name + "</li>" +
                "<li>" + obj.description + "</li>" +
                "<li>" + "<a href=" + newslink + " target=" + "_blank" + ">" + "Go to article" + "</a>" + "</li>" + "</ul>" + "</div>";
        }
    }

    //getting the initial display of news from the General category
    function getFirstHeadlines() {

        var countrySelect = document.getElementById("country").value;
        console.log(countrySelect)

        var countryList = document.getElementById("country"); // get the searchbox
        var countrySearch = countryList.value; // get the search term    

        url = "https://newsapi.org/v2/top-headlines?" + "country=" + countrySearch + "&category=general" + "&apiKey=32187fe519f84fcfb92d87bdf66b0024"

        console.log(url)

        // the API call
        $.ajax({
            url: url,
            type: 'GET',
            success: function (resultsNews) {
                displayHeadlines(resultsNews);
            },
            error: function (e) {
                alert("Something went wrong: " + e);
            }

        });

    }

    ////////////////////this is the section with functions responsible for the search funcitonality/////////////////////


    // //trigger the search after pressing enter

    document.getElementById("inputbox").addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {
            window.location.href = "searchresults.html"
        }
    });

    // passing the search value to another page

    $("#inputboxbbutton").click(function () {
        getValue()
    });

    function getValue() {
        var searchValue = document.getElementById("inputbox");
        localStorage.setItem("inputbox", searchValue.value)
        console.log(searchValue.value)
    }







});



