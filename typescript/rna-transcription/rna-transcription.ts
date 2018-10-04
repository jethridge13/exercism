class Transcriptor {
    toRna(nucleotides: string): string {
    	return nucleotides.split('').map(n => {
    		switch (n) {
    			case 'C':
    				return 'G';
    			case 'G':
    				return 'C';
    			case 'A':
    				return 'U';
    			case 'T':
    				return 'A';
    			default:
    				throw new Error('Invalid input DNA.');
    		}
    	}).join('');
    }
}

export default Transcriptor
