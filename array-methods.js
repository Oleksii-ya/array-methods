// Interrupting the cycle forEach using mutable method splice
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr.forEach((item, index, array) => {
//   if (item === 5) {
//     array.splice(index, array.length - index)
//   } else {
//     console.log(item)
//   }
// })


// 1. Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
  let result = str.split("-");
  result = result.map((item) => {
    item = item.split("")
    item[0] = item[0].toUpperCase()
    item = item.join("")
    return item
  })
  result = result.join("")
  return result
}
// const str = 'dodo-fff-qqq';
// console.log(str, ", result: ", camelize(str))

// ======================================================>

// 2. Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
// ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.

const filterRange = (arr, a, b) => {
  const results = arr.filter(function (item) {
    if (item >= a && item <= b) {
      return true
    }
  })

  return results
}

// const arr = [12, 423, 45, 656, 98, 932]
// console.log(arr, ", result: ", filterRange(arr, 13, 700)) 

// ======================================================>

// 3. Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него 
// все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

filterRangeInPlace = (arr, a, b) => {
  arr.forEach((item, index) => {
    if (item < a || item > b) {
      arr.splice(index, 1)
    }
  });
}

// const arr = [12, 423, 45, 656, 98, 932]
// const a = 13;
// const b = 700;

// console.log(arr)
// filterRangeInPlace(arr, a, b)
// console.log(`${a} - ${b}`, arr)

// ======================================================>

// 4. Сортировать в порядке по убыванию

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

// let arr = [5, 2, 1, -10, 8];

// console.log(arr)
// arr.sort(compareNumeric);
// console.log(arr)

// ======================================================>

// 5. Скопировать и отсортировать массив
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

const copySorted = (arr) => {
  const copyArr = [].concat(arr);
  copyArr.sort();
  return copyArr
}

// let arr = ["HTML", "JavaScript", "CSS"];
// console.log("result: ", copySorted(arr))
// console.log("enter array: ", arr)

// ======================================================>
// 6. reduce
// Методы arr.reduce(callback(),initial) и arr.reduceRight(callback(),initial) используются для вычисления какого-нибудь ЕДИНОГО значения на основе ВСЕГО массива.
// callback метода reduce применяется по очереди ко всем элементам массива и «переносит» свой результат на следующий вызов.
// При вызове callback результат её вызова на предыдущем элементе массива передаётся как первый аргумент.

// Дан массив с числами. Найдите сумму этих чисел.
// const summ = (arr) => {
//   return arr.reduce((prevReturn, item, index, array) => {
//     array.splice(2, array.length-2)
//     return prevReturn + item
//   }, 0)
// }
// myArr=[10, 20, 5, 5];
// console.log(summ(myArr))

// Дан массив с числами. Найдите сумму первых N элементов до первого нуля. 
function partSumm(arr, interruptValue) {
  let result = 0;
  for (let val of arr) {
    if (val === interruptValue) {
      break
    }
    result += val
  }
  console.log(result)
}
// const myArr = [1, 2, 3, 0, 4, 5, 6];
// partSumm(myArr, 5)
function partSummTwo(arr, interruptValue) {
  const index = arr.findIndex((item) => item === 0);
  if (index === -1) {
    throw new Error('there is no 0 in array')
  }
  const cutArr = arr.slice(0, index)

  const result = cutArr.reduce((prevReturn, item, index) => {
    return prevReturn + item
  })
  console.log(result)
}
const myArr = [1, 2, 3, 0, 4, 5, 6];
// partSummTwo(myArr, 5)