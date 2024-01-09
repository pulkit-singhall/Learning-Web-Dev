const book_btn = document.getElementById('book_btn');

// simple listener
book_btn.addEventListener(
    'click', function (e) {
        console.log('booked');
});

// flex direction change
const grids = document.getElementById('grids');
let grid_children = grids.children;

for (let i = 0; i < grid_children.length; i++){
    if (i % 2 != 0) {
        let child = grid_children[i];
        child.style.flexDirection = 'row-reverse';
    }
}

