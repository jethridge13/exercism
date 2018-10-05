class Bob {
    hey(phrase:string) {
        if (/^\s*$/.test(phrase)) {
        	return 'Fine. Be that way!';
        } else if (phrase === phrase.toUpperCase() &&
        	/[A-Za-z]+/.test(phrase)) {
        	return 'Whoa, chill out!';
        } else if (phrase.endsWith('?')) {
        	return 'Sure.';
        } else {
        	return 'Whatever.';
        }
    }
}

export default Bob
