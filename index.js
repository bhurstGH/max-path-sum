let maximumSum = 0;
let path = [];

document.getElementById("numbers").value = `75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`

function writeToTriangle() {
    const numbers = document.getElementById("numbers").value

    let lines = numbers.split("\n")
    let linesArray = lines.map(line => {
        return line.split(" ")
    })
    let numsArray = lines.map(line => {
        return line.split(" ")
    })

    maxSumPath(linesArray)
    findMaxPathSum(linesArray)
    drawTriangle(numsArray)

}

function drawTriangle(numArr) {
    const triangle = document.getElementById("triangle")
    triangle.innerHTML = `<p>Sum of path: ${maximumSum}</p>`;

    for (let i = 0; i < numArr.length; i++) {
        triangle.innerHTML += `<p>${'&nbsp;&nbsp;'.repeat(numArr.length - i - 1)}${numArr[i].map((number, index) => (path[i] !== index) ? `${number}` : `<span style="color: red;">${number}</span>`).join("&nbsp;&nbsp;")}</p>`
    }

    path = [];
    maximumSum = 0;
}

function findMaxPathSum(triangle) {
    let previousIndex = 0;

    for (let i = 0; i < triangle.length; i++) {
        if (triangle[i].length === 1) {
            path.push(0)
            continue;
        }

        if (Number(triangle[i][previousIndex]) >= Number(triangle[i][previousIndex + 1])) {
            path.push(previousIndex)
        } else {
            path.push(previousIndex + 1)
            previousIndex++;
        }
    }

    console.log("Index Path:", path)  
}

function maxSumPath(triangle) {
    for (let i = triangle.length - 2; i >= 0; i--) {
        let currentRow = triangle[i].map(Number)
        let nextRow = triangle[i + 1].map(Number)

        for (let j = 0; j < triangle[i].length; j++) {
            let current = currentRow[j]
            let left = nextRow[j]
            let right = nextRow[j + 1]

            if (current + left >= current + right) {
                triangle[i][j] = current + left;
            } else {
                triangle[i][j] = current + right;
            }
        }
    }
    maximumSum = triangle[0][0];
}