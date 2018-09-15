class Gigasecond {
	private gigasecondDate: Date = new Date();
	constructor(startDate: Date) {
		this.gigasecondDate = new Date(+startDate.getTime() + 1000000000000);
	}

	date(): Date {
		return this.gigasecondDate;
	}
}

export default Gigasecond
