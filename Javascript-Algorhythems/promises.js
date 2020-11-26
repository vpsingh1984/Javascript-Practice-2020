

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([234, 353, 464, 335]);
    }, 1500)
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {title: "Fresh Tomato Soup", publisher: "Johnas"};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID)
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {title: "Italian Pizza", publisher: "Vijay"};
            resolve(`${pub}: ${recipe.title}`)
        }, 1500, publisher)
    });
}

// getIDs
// .then(IDs => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
// })
// .then(recipe => {
//     console.log(recipe);
// })
// .catch(error => {
//     console.log("Error Coming!");
// });

async function getRecipes() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated("Vj");
    console.log(related);

    return recipe;
}

getRecipes()
    // .then(result => console.log(result));