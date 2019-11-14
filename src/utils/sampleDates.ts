// // ------------------------------------
// // Sample Dates Generators
// // -------------------------------------
//
//
// import {List} from "immutable";
// import {habitStatus, IHabitDate} from "../models/habbit";
//
// function filledDates(endDate, amount):List<IHabitDate>{
//   let result : List<IHabitDate> = List([{
//     date: endDate,
//     status: habitStatus.end,
//     score: amount
//   }]);
//
//   for(let i=1; i<amount-1; i++) {
//     result = result.push({
//       date: Moment(endDate).subtract(i, 'd').toISOString(),
//       status: habitStatus.complete,
//       score: amount - i
//     })
//   }
//   return result.push({
//     date: Moment(endDate).subtract(amount-1, 'd').toISOString(),
//     status: habitStatus.start,
//     score: 1
//   })
// }
// function singleEmptyDate(date: string, today=false):IHabitDate {
//   return {
//     date: date,
//     status: today ? habitStatus.incompleteToday : habitStatus.incomplete,
//     score: 0
//   }
// }
// function emptyDates(endDate: string, amount: number):List<IHabitDate>{
//   let result = List();
//   for (let i=0; i<amount; i++) {
//     result = result.push(singleEmptyDate(Moment(endDate).subtract(i, 'd').toISOString()));
//   }
//   return result;
// }