export default class Triangle {

    sides: number[]

    constructor(...sides: number[]) {
        this.sides = sides
    }

    kind() {
    	if (this.sides.some(side => {
    		return side <= 0;
    	}) || this.sides.length < 3) {
    		throw new Error('Illegal triangle lengths');
    	}
    	if (this.sides[0] + this.sides[1] < this.sides[2] ||
    		this.sides[1] + this.sides[2] < this.sides[0] ||
    		this.sides[0] + this.sides[2] < this.sides[1]) {
    		throw new Error('Triangle not possible');
    	}
    	let uniqueLengths = new Map();
    	this.sides.forEach(side => {
    		if (!uniqueLengths.has(side)) {
    			uniqueLengths.set(side, 1);
    		} else {
    			uniqueLengths.set(side, uniqueLengths.get(side) + 1)
    		}
    	});
        switch (uniqueLengths.size) {
        	case 1:
        		return 'equilateral';
        	case 2:
        		return 'isosceles';
        	case 3:
        		return 'scalene';
        	default:
        		return '';
        }
    }
}
