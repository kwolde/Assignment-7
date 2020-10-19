//STEP 1
function stepOne() {
    var movies = ["Love & Basketball", "Surf's Up", "The Wolf Of Wall Street", "Paid In Full", "Step Brothers"];
    window.console.log(movies[1]);
}
//STEP 2
function stepTwo() {
    var movies = new Array(5);
    movies[0] = "Love & Basketball";
    movies[1] = "Surf's Up";
    movies[2] = "The Wolf Of Wall Street";
    movies[3] = "Paid In Full";
    movies[4] = "Step Brothers";
    window.console.log(movies[0]);
}
//STEP 3
function stepThree() {
    var movies = new Array(5);
    movies[0] = "Love & Basketball";
    movies[1] = "Surf's Up";
    movies[2] = "The Wolf Of Wall Street";
    movies[3] = "Paid In Full";
    movies[4] = "Step Brothers";
    movies.splice(2, 0, "He Got Game")
    window.console.log(movies.length);
}
//STEP 4
function stepFour() {
    var movies = [];
    movies[0] = "Love & Basketball";
    movies[1] = "Surf's Up";
    movies[2] = "The Wolf Of Wall Street";
    movies[3] = "Paid In Full";
    movies[4] = "Step Brothers";
    delete movies[0];
    window.console.log(movies);
}
//STEP 5
function stepFive() {
    var movies = [];
    movies[0] = "Love & Basketball";
    movies[1] = "Surf's Up";
    movies[2] = "The Wolf Of Wall Street";
    movies[3] = "Paid In Full";
    movies[4] = "Step Brothers";
    movies[5] = "He Got Game";
    movies[6] = "The Hangover";
    for (var i = 0; i < movies.length; i++) {
        window.console.log(movies[i]);
    }
}
//STEP 6
function stepSix() {
    var movies = [];
    movies[0] = "Love & Basketball";
    movies[1] = "Surf's Up";
    movies[2] = "The Wolf Of Wall Street";
    movies[3] = "Paid In Full";
    movies[4] = "Step Brothers";
    movies[5] = "He Got Game";
    movies[6] = "The Hangover";
    for (i in movies) {
        window.console.log(movies[i]);
    }
}
//STEP 7
function stepSeven() {
    var movies = [];
    movies[0] = "Love & Basketball";
    movies[1] = "Surf's Up";
    movies[2] = "The Wolf Of Wall Street";
    movies[3] = "Paid In Full";
    movies[4] = "Step Brothers";
    movies[5] = "He Got Game";
    movies[6] = "The Hangover";
    movies.sort();
    for (i in movies) {
        window.console.log(movies[i]);
    }
}
//STEP 8
function stepEight() {
    var movies = [];
    movies[0] = "Love & Basketball";
    movies[1] = "Surf's Up";
    movies[2] = "The Wolf Of Wall Street";
    movies[3] = "Paid In Full";
    movies[4] = "Step Brothers";
    movies[5] = "He Got Game";
    movies[6] = "The Hangover";

    var leastFavMovies = ["Father Figures", "Sausage Party", "Scary Movie"];
    window.console.log("Movies I like:\n\n");
    for (var i = 0; i < movies.length; i++) {
        window.console.log(movies[i]);
    }

    window.console.log("\nMovies I regret watching:\n\n");
    for (var i = 0; i < leastFavMovies.length; i++) {
        window.console.log(leastFavMovies[i]);
    }
}
//STEP 9
function stepNine() {
    var movies = [];
    movies[0] = "Love & Basketball";
    movies[1] = "Surf's Up";
    movies[2] = "The Wolf Of Wall Street";
    movies[3] = "Paid In Full";
    movies[4] = "Step Brothers";
    movies[5] = "He Got Game";
    movies[6] = "The Hangover";

    var leastFavMovies = ["Father Figures", "Sausage Party", "Scary Movie"];
    var arrays = movies.concat(leastFavMovies);
    window.console.log(arrays.sort().reverse());
}
//STEP 10
function stepTen() {
    var movies = [];
    movies[0] = "Love & Basketball";
    movies[1] = "Surf's Up";
    movies[2] = "The Wolf Of Wall Street";
    movies[3] = "Paid In Full";
    movies[4] = "Step Brothers";
    movies[5] = "He Got Game";
    movies[6] = "The Hangover";

    var leastFavMovies = ["Father Figures", "Sausage Party", "Scary Movie"];
    var arrays = movies.concat(leastFavMovies);
    window.cons