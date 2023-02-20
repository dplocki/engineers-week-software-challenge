function* fibonacci() {
  let current = a = b = 1;

  yield 1;

  while (true) {
    current = b;

    yield current;

    b = a + b;
    a = current;
  }
}

function *takeWhile(generator, predicate) {
	let value = null
	while(true) {
		value = generator.next().value;
		if (predicate(value)) {
			yield value;
		} else {
			return;
		}
	}
}

function *skipFirst(generator) {
	generator.next();
	yield* generator;
}

const result = [...takeWhile(skipFirst(fibonacci()), s => s < 1000000)]
	.filter(value => value % 2 === 0)
	.reduce((previous, value) => previous + value);
	
console.log('Solution: ', result)
