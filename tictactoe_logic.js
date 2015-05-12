var cells = document.getElementsByClassName("cell");

var turn = 0;

function takeTurns() {
    turn++;
    if ((turn + 2) % 2 === 0) {
        return "<img src='images/lakers_logo_mini.png'>";
        return "Lakers";
    } else return "<img src='images/celtics_logo_mini.gif'>";
    return "Celtics";
}

chooseBox(); 

function chooseBox() {
        for (var i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', function() {
                if (this.innerHTML !== "") {
                    alert ("Sorry bitch, box is taken!")
                } else this.innerHTML = takeTurns();
            })
        }
    }





//================================== WIN LOGIC =========================================//
// function cells(key) {

//     this.innerHTML = 'x';
// }

function getWinner() {
    if (isWinner('x')) {
        return 'x';
    }
    if (isWinner('o')) {
        return 'o';
    }
    return null;
}

function isWinner(player) {
    return winsRow(player) || winsColumn(player) || winsDiagonal(player);
}

function winsRow(player) {
    return allThree(player, cells('a'), cells('b'), cells('c')) ||
        allThree(player, cells('d'), cells('e'), cells('f')) ||
        allThree(player, cells('g'), cells('h'), cells('i'));
}

function winsColumn(player) {
    return allThree(player, cells('a'), cells('d'), cells('g')) ||
        allThree(player, cells('b'), cells('e'), cells('h')) ||
        allThree(player, cells('c'), cells('f'), cells('i'));
}

function winsDiagonal(player) {
    return allThree(player, cells('a'), cells('e'), cells('i')) ||
        allThree(player, cells('c'), cells('e'), cells('g'));
}

function allThree(player, cell_one, cell_two, cell_three) {
    return (cell_one === player) && (cell_two === player) && (cell_three === player);
}

//===================================Linkage=============================================//

// document.getElementById("cellA").addEventListener("click", cells)
//   {case 'a': return 'x'});
// document.getElementById("#cellB").addEventListener("click", cells(key){case 'b': return 'x'});
// document.getElementById("#cellC").addEventListener("click", cells(key){case 'c': return 'x'});
// document.getElementById("#cellD").addEventListener("click", cells(key){case 'd': return 'x'});
// document.getElementById("#cellE").addEventListener("click", cells(key){case 'e': return 'x'});
// document.getElementById("#cellF").addEventListener("click", cells(key){case 'f': return 'x'});
// document.getElementById("#cellG").addEventListener("click", cells(key){case 'g': return 'x'});
// document.getElementById("#cellH").addEventListener("click", cells(key){case 'h': return 'x'});
// document.getElementById("#cellI").addEventListener("click", cells(key){case 'i': return 'x'});
