export default class SpaceAge {

    readonly seconds: number

    private readonly earthYearSeconds = 31557600
    private readonly mercuryEarthYears = 0.2408467
    private readonly venusEarthYears = 0.61519726
    private readonly marsEarthYears = 1.8808158
    private readonly jupiterEarthYears = 11.862615
    private readonly saturnEarthYears = 29.447498
    private readonly uranusEarthYears = 84.046846
    private readonly neptuneEarthYears = 164.79132

    constructor(seconds: number) {
        this.seconds = seconds
    }

    onMercury(): number {
        return Number(((this.seconds / this.earthYearSeconds) / this.mercuryEarthYears).toFixed(2))
    }

    onVenus(): number {
        return Number(((this.seconds / this.earthYearSeconds) / this.venusEarthYears).toFixed(2))
    }

    onEarth(): number {
        return Number((this.seconds / this.earthYearSeconds).toFixed(2))
    }

    onMars(): number {
        return Number(((this.seconds / this.earthYearSeconds) / this.marsEarthYears).toFixed(2))
    }

    onJupiter(): number {
        return Number(((this.seconds / this.earthYearSeconds) / this.jupiterEarthYears).toFixed(2))
    }

    onSaturn(): number {
        return Number(((this.seconds / this.earthYearSeconds) / this.saturnEarthYears).toFixed(2))
    }

    onUranus(): number {
        return Number(((this.seconds / this.earthYearSeconds) / this.uranusEarthYears).toFixed(2))
    }

    onNeptune(): number {
        return Number(((this.seconds / this.earthYearSeconds) / this.neptuneEarthYears).toFixed(2))
    }
}
