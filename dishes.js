function init_starters() {
    firebase.database().ref('dish/starters' + 1).set({
        name: "salad",
        profile_picture : "https://cdn4.iconfinder.com/data/icons/snowflakes-2/78/snow_flake_winter-08-512.png"
    });
    firebase.database().ref('dish/starters' + 2).set({
        username: "ricard",
        profile_picture : "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjrhNGqtuXRAhWID8AKHb2LABYQjRwIBw&url=http%3A%2F%2Flekhafoods.com%2Ffrance%2Fstarters.aspx&psig=AFQjCNEYEqZJPsiEO351sAqsHa4XsqSQ6g&ust=1485712968369620"
    });
    firebase.database().ref('dish/starters' + 3).set({
        username: "dori",
        profile_picture : "http://icons.iconarchive.com/icons/dapino/callcenter-girls/256/callcenter-girls-blonde-icon.png"
    });
    firebase.database().ref('dish/starters' + 4).set({
        username: "eudald",
        profile_picture : "https://cdn2.iconfinder.com/data/icons/audi-line-icons/512/Audi_A7-512.png"
    });
    console.log("kek")
}