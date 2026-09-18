export interface ZeneTipus{
    readonly id: number
    cim: string
    enekes: string
    kiadasiEv: number
    kep: string
}

export const ZENELISTA:ZeneTipus[] = [
    {
        id: 1,
        cim: "Shape of You",
        enekes: "Ed Sheeran",
        kiadasiEv: 2017,
        kep: "/zenek/kepek/ed.png"
    },
    {
        id: 2,
        cim: "Blinding Lights",
        enekes: "The Weeknd",
        kiadasiEv: 2019,
        kep: "/zenek/kepek/weeknd.jpg"
    },
    {
        id: 3,
        cim: "Flowers",
        enekes: "Miley Cyrus",
        kiadasiEv: 2023,
        kep: "/zenek/kepek/miley.jpg"
    }
];