const CONFIG = {
    numberArray: [],
    numberPath: [],
    maximumSum: 0,
    numberSums: []
}

function writeToTriangle() {
    const numbers = document.getElementById("numbers").value

    let lines = numbers.split("\n")
    let numArr = lines.map(line => {
        return line.split(" ")
    })

    CONFIG.numberArray = numArr

    console.log("PATH STRAIGHT DOWN")
    findMaxPathSum(CONFIG.numberArray)

    drawTriangle(CONFIG.numberPath)


}

function drawTriangle(numArr) {
    const triangle = document.getElementById("triangle")
    triangle.innerHTML = `<p>Sum of path: ${CONFIG.maximumSum}</p>`;

    for (let i = 0; i < numArr.length; i++) {
        triangle.innerHTML += `<p>${'&nbsp;&nbsp;'.repeat(numArr.length - i - 1)}${numArr[i].join("&nbsp;&nbsp;")}</p>`
    }

}

function findMaxPathSum(triangle) {
    let path = [];
    let previousIndex = 0;

    for (let i = 0; i < triangle.length; i++) {

        if (triangle[i].length === 1) {
            let number = triangle[i][0]
            path.push(number)
            triangle[i][0] = `<span style="color: red;">${number}</span>`
            continue;
        }

        if (triangle[i][previousIndex] > triangle[i][previousIndex + 1]) {
            let number = triangle[i][previousIndex]
            path.push(number)
            triangle[i][previousIndex] = `<span style="color: red;">${number}</span>`
        } else {
            let number = triangle[i][previousIndex + 1]
            path.push(number)
            triangle[i][previousIndex + 1] = `<span style="color: red;">${number}</span>`
            previousIndex++;
        }
    }

    console.log(path)

    let max = 0;

    path.forEach(num => {
        max += Number(num)
    })

    CONFIG.maximumSum = max;
    CONFIG.numberPath = triangle;

}

function allSums(triangle) {
    let path = []

    for (let i = triangle.length - 2; i >= 0; i--) {
        let rowSums = []

        for (let j = 0; j < triangle[i].length; j++) {
            let indexSums = []
            indexSums.push(triangle[i][j] + triangle[i + 1][j])
            indexSums.push(triangle[i][j] + triangle[i + 1][j + 1])

            rowSums.push(indexSums)
        }

        path.push(rowSums)
    }

    CONFIG.numberSums = path;
    console.log(CONFIG.numberSums)
}