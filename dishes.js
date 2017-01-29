function initt() {
    firebase.database().ref('users/' + 1).set({
        username: "guillem",
        profile_picture: "https://cdn4.iconfinder.com/data/icons/snowflakes-2/78/snow_flake_winter-08-512.png",
        starters : [2],
        main : [3],
        desserts : [4],
        drinks : [1,1]
    });
    firebase.database().ref('users/' + 2).set({
        username: "ricard",
        profile_picture: "https://lh3.ggpht.com/nJbsQJpm9-c9ayQv7AgYQwiyHPkwmOrOcNxcr7r8EIxvXzgwfSFh4yBM_mEK3GYSbw=w300",
        starters : [],
        main : [],
        desserts : [],
        drinks : []
    });
    firebase.database().ref('users/' + 3).set({
        username: "dori",
        profile_picture: "http://icons.iconarchive.com/icons/dapino/callcenter-girls/256/callcenter-girls-blonde-icon.png",
        starters : [],
        main : [],
        desserts : [],
        drinks : []
    });
    firebase.database().ref('users/' + 4).set({
        username: "eudald",
        profile_picture: "https://cdn2.iconfinder.com/data/icons/audi-line-icons/512/Audi_A7-512.png",
        starters : [],
        main : [],
        desserts : [],
        drinks : []
    });

    /*var query = firebase.database().ref("table").orderByKey();
     query.once("value")
     .then(function(snapshot) {
     snapshot.forEach(function(childSnapshot) {
     // key will be "ada" the first time and "alan" the second time
     //console.log(childSnapshot.key);
     // childData will be the actual contents of the child
     //console.log(childSnapshot.val());
     //console.log(childSnapshot.child("customers").val())
     /*childSnapshot.child("customers").val().forEach(function(userId) {
     console.log("User ID from table: " + userId);
     var ref = firebase.database().ref("users/" + userId);
     ref.once("value")
     .then(function(user) {
     console.log("User: "+user.val());
     user.child("orders").val().forEach(function(userId) {
     console.log("User ID from table: " + userId);
     });*/
    //console.log("idKeyUser: " + childchildSnapshot.child(""))
    /*})
     });
     });*/

    init_starters()

}

function init_starters() {
    firebase.database().ref('dish/starters/' + 1).set({
        name: "Salad",
        picture : "https://www.wagamama.us/-/media/WagamamaUSMainsite/hero-pod-images/salads.jpg",
        price : "7",
        users : []
    });
    firebase.database().ref('dish/starters/' + 2).set({
        name: "Fried camembert",
        picture : "http://www.taste.com.au/images/recipes/agt/2002/07/fried-camembert-with-redcurrant-sauce-8571_l.jpeg",
        price : "9",
        users : [2]
    });
    firebase.database().ref('dish/starters/' + 3).set({
        name: "Calamari",
        picture : "http://media.olivegarden.com/en_us/images/product/h-classic-calamari-dpv.jpg",
        price : "8",
        users : []
    });
    firebase.database().ref('dish/starters/' + 4).set({
        name: "Soup",
        picture : "http://clv.h-cdn.co/assets/cm/15/10/1600x800/54f4a5bf1042a_-_chicken-noodle-soup-recipe.jpg",
        price : "6",
        users : []
    });
    console.log("kek")
    init_main()
}

function init_main() {
    firebase.database().ref('dish/main/' + 1).set({
        name: "Macaroni",
        picture : "http://www.lifesambrosia.com/wp-content/uploads/macaroni-and-tomatoes.jpg",
        price : "12",
        users : []
    });
    firebase.database().ref('dish/main/' + 2).set({
        name: "Steak",
        picture : "http://theoshighland.com/wp-content/uploads/2016/03/how-to-grill-steak.jpg",
        price : "15",
        users : []
    });
    firebase.database().ref('dish/main/' + 3).set({
        name: "Salmon",
        picture : "https://static01.nyt.com/images/2016/04/13/dining/13PAIRING/13PAIRING-superJumbo.jpg",
        price : "18",
        users : [1]
    });
    firebase.database().ref('dish/main/' + 4).set({
        name: "Burger",
        picture : "http://smokeybones.com/wp-content/uploads/2015/11/loaded-bbq-burger.jpg",
        price : "14",
        users : []
    });
    console.log("kek")
    calcTotal(1)
}

function calcTotal(userId) {
    var total = 0;
    console.log("Total: "+total);
    console.log("TOTAL_BILL");
    var ref = firebase.database().ref("users/" + userId);
    ref.once("value")
        .then(function (user) {
            console.log("User: " + user.child("username").val());
            user.child("starters").val().forEach(function (id) {
                //console.log("ID starters: " + id);
                var ref = firebase.database().ref("dish/starters/" + id);
                ref.once("value")
                    .then(function (starter) {
                        //console.log("Starter: " + starter.child("name").val());
                        //console.log("Starter-Price: " + starter.child("price").val());
                        total += parseInt(starter.child("price").val());
                        console.log("Total: " + total);
                    });
            });
            user.child("main").val().forEach(function (id) {
                //console.log("ID main: " + id);
                var ref = firebase.database().ref("dish/main/" + id);
                ref.once("value")
                    .then(function (main) {
                        //console.log("Main: " + main.child("name").val());
                        //console.log("Main-Price: " + main.child("price").val());
                        total += parseInt(main.child("price").val());
                        console.log("Total: " + total);
                    });
            });
            user.child("desserts").val().forEach(function (id) {
                //console.log("ID dessert: " + id);
                var ref = firebase.database().ref("dish/dessert/" + id);
                ref.once("value")
                    .then(function (dessert) {
                        console.log("Dessert: " + dessert.child("name").val());
                        console.log("Dessert-Price: " + dessert.child("price").val());
                        total += parseInt(dessert.child("price").val());
                        console.log("Total: " + total);
                    });
            });
            user.child("drinks").val().forEach(function (id) {
                //console.log("ID main: " + id);
                var ref = firebase.database().ref("dish/drinks/" + id);
                ref.once("value")
                    .then(function (drink) {
                        console.log("Drink: " + drink.child("name").val());
                        console.log("Drink-Price: " + drink.child("price").val());
                        total += parseInt(drink.child("price").val());
                        console.log("Total-max: " + total);
                    });
            });
        });
}


function calcTotal2(userId) {
    var total = 0;
    var ref = firebase.database().ref("users/" + userId);
    ref.once("value")
        .then(function (user) {
            console.log("User: " + user.child("username").val());
            user.child("starters").val().forEach(function (id) {
                var ref = firebase.database().ref("dish/starters/" + id);
                ref.once("value")
                    .then(function (starter) {
                        total += parseInt(starter.child("price").val());
                    });
            });
            user.child("main").val().forEach(function (id) {
                var ref = firebase.database().ref("dish/main/" + id);
                ref.once("value")
                    .then(function (main) {
                        total += parseInt(main.child("price").val());
                    });
            });
            user.child("desserts").val().forEach(function (id) {
                var ref = firebase.database().ref("dish/dessert/" + id);
                ref.once("value")
                    .then(function (dessert) {
                        total += parseInt(dessert.child("price").val());
                    });
            });
            user.child("drinks").val().forEach(function (id) {
                var ref = firebase.database().ref("dish/drinks/" + id);
                ref.once("value")
                    .then(function (drink) {
                        total += parseInt(drink.child("price").val());
                    });
            });
            finish()
        })
}

function finish() {
    console.log("FINISHED");
}

function  calcAllDishes() {
    var total = 0;
    var ref = firebase.database().ref("dish/");
    ref.once("value")
        .then(function (dish) {
            //forEach category -> get all the dishes ordered
            dish.forEach(function(category) {
                console.log(category.val());
                category.val().forEach(function(thing) {
                    if (thing.users != null) {
                        total += parseInt(thing.price)*thing.users.length;
                        console.log(thing.price);
                        console.log(thing.users);
                        console.log(thing.name);
                    }

                });
            });
            console.log(total)
        });
}













/*var query = firebase.database().ref("table").orderByKey();
 query.once("value")
 .then(function(snapshot) {
 snapshot.forEach(function(childSnapshot) {
 // key will be "ada" the first time and "alan" the second time
 //console.log(childSnapshot.key);
 // childData will be the actual contents of the child
 //console.log(childSnapshot.val());
 //console.log(childSnapshot.child("customers").val())
 /*childSnapshot.child("customers").val().forEach(function(userId) {
 console.log("User ID from table: " + userId);
 var ref = firebase.database().ref("users/" + userId);
 ref.once("value")
 .then(function(user) {
 console.log("User: "+user.val());
 user.child("orders").val().forEach(function(userId) {
 console.log("User ID from table: " + userId);
 });*/
//console.log("idKeyUser: " + childchildSnapshot.child(""))
/*})
 });
 });*/


