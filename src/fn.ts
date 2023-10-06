// /* Create function type with TYPE */

// type Logger<T> = (name: T) => T;

// const logger: Logger<number> = (value) => {
// 	return value;
// };

// console.log(logger(20));

// /* Create function type with INTERFACE */

// interface Show {
// 	<T>(name: T): T;
// 	age: number;
// }

// const show: Show = function (value) {
// 	return value;
// };

// show.age = 20;

/* Create function type with INTERFACE GENERICS */

// interface FC<P = any> {
// 	<T>(props: P): number;
// 	age: number;
// }

// const show: FC<{ age: number; job: string }> = function ({ job, age }) {
// 	return 20;
// };

// show.age = 20;
