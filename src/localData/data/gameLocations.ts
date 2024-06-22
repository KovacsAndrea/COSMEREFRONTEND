import { GameLocation } from "../models/gameLocation.ts";

export const gameLocations: GameLocation[] = [
    new GameLocation(
        '1',
        'The Shattered Plains',
        'Roshar',
        "shattered-plains-location",
        ""
    ),
    new GameLocation(
        '2',
        'Thaylenah',
        'Roshar',
        "thaylenah-location",
        ""
    ),
    new GameLocation(
        '3',
        'Urithiru',
        'Roshar',
        "urithiru-location",
        ""
    ),
    
    new GameLocation(
        '4',
        'Luthadel',
        'Scadrial',
        "luthadel-location",
        ""
    ),

    new GameLocation(
        '5',
        'Elendel',
        'Scadrial',
        "elendel-location",
        ""
    ),

    new GameLocation(
        '5',
        'The Crimson Sea',
        'Lumar',
        "crimson-sea-location",
        ""
    ),

    new GameLocation(
        '5',
        'The City of Kilahito',
        'Komashi',
        "kilahito-location",
        ""
    ),


    new GameLocation(
        '5',
        'Shadesmar',
        'The Cognitive Realm',
        "shadesmar-location",
        ""
    ),
    

    new GameLocation(
        '6',
        'Arelon',
        'Sel',
        "elantris-location",
        ""
    ),

    new GameLocation(
        '6',
        'Hallandren Kingdom',
        'Nalthis',
        "warbreaker-location",
        ""
    ),
    
]

export const noLocation: GameLocation = new GameLocation(
    'NO_LOCATION_CHOSEN',
    'Choose Your Realm',
    'Battlefield',
    "no-location",
    ""
)