// localStorage session storage cookies
// localStorage browser mei data store krna jo ki browser band hone par bhi delete nhi hoga... we can say browser ka database hota hai local storage

// session storage.. yeh data ko temporarily store krta hai if you save any data in the session storage and you close the tab you lost the data

// cookies it also stores data and yeh browser ki cookies naam ki property mei save hota hai
// this concept is for light data

// localStorage ~5Mb
// store --> .setItem
// fetch --> .getItem
// remove --> .removeItem
// update --> .setItem hee update krta hai
// clear --> it will clear everything stored in localStorage

// store
localStorage.setItem("name", "Preet");

//fetch
let value = localStorage.getItem("name");

//remove
localStorage.removeItem("name");

// update
// setItem agr property nhi hoti hai toh bana deta hai aur agr hoti hai toh uski purani value ko overwrite kr deta hai
localStorage.setItem("name", "Gurleen");

localStorage.clear();

// cookies ~4kb
// browser mei chota data store krne ke leye cookies ka use hota hai nearly 4kb ka
// localStorage and sessionStorage mei nearly 5Mb ka data store hojata hai
// cookies mei jo bhi data store kroge woh page reload hone pat automatically server pe jayega

// how to set cookie at browser
// document.cookie = "preet"

// editthiscookie extension

// localStorage sirf string save krta hai

// JSON.stringify()
// yeh kisi bhi cheez ko string bana deta hai
// JSON.stringify([1, 2, 4])
// yeh is array ko string bana dega

// localStorage mei array vgera store nhi kr skte isleye unhe string banake store krte hai using JSON.stringify()
// and string se usko apne natural form mei laane ke leye we use JSON.parse()
