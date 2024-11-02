async function dataFetch(){
    try {
        const response = await fetch("https://api.github.com/users/yakshit0")

        if (response.ok) {
            console.log("Data fetch successful\n");

            const info = await response.json();

            console.log(`Name: ${info.name}`);
            console.log(`ID: ${info.id}`);
            console.log(`URL: ${info.url}\n`);
        } else {
            console.log("Data fetch failed")
        }}
    catch (error) {
        console.log("Data fetch failed");
    }
}

dataFetch()