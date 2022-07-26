function createStore() {
 let storeArray=[];
return function(abito){
console.log(abito); 
 return storeArray.push(abito);


}



}

const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackSneakers = { id: 3, name: 'Black Sneakers' };

console.log('--- Dress Store ---');
const dressStore = createStore();
dressStore(redPants.name);
dressStore(whiteHat.name);
console.log('--- Shoes Store ---');
const shoesStore = createStore();
shoesStore(blackSneakers.name);
