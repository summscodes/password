const funnyPasswords = [
    "Bamboozle!123",
    "Chortle@456",
    "Doppelganger$789",
    "Ebullient^234",
    "Flibbertigibbet&567",
    "Gobbledygook*890",
    "Hobbledehoy(123",
    "Imperturbable)_456",
    "Juxtapose-789",
    "Kaleidoscopic=234",
    "Lollygag+567",
    "Mellifluous_890",
    "Nefarious!123",
    "Obfuscate@456",
    "Peregrinate$789",
    "Quizzical^234",
    "Rambunctious&567",
    "Salubrious*890",
    "Tintinnabulation(123",
    "Ubiquitous)_456",
    "Vorfreude-789",
    "Whippersnapper=234",
    "Xanadu+567",
    "Yonder_890",
    "Zephyr!123",
    "Bazinga!678",
    "Snickerdoodle$321",
    "HippityHoppity*456",
    "GiggleGalore^789",
    "WaffleWonderland&234",
    "Brouhaha@567",
    "GiraffeGiggle.890",
    "QuokkaQuip(123",
    "SnuggleSnort)_456",
    "TickleTornado-789",
    "MuffinMirth=234",
    "BubblyBanana+567",
    "GuffawGazette_890",
    "WhoopeeWeasel!123",
    "GargleGiggles@456",
    "BamboozleBuffoon$789",
    "CackleCircus^234",
    "ChuckleChampion&567",
    "LightheartedLlama*890",
    "WittyWombat(123",
    "ZanyZoo)_456",
    "SpectacleSnicker-789",
    "SassafrasSquabble=234",
    "JellybeanJester+567",
    "NoodleNonsense_890",
];

const memorablePasswords = [
    "UrbanSunset@567",
    "CrimsonHarbor.890",
    "SafariAdventure#234",
    "CityscapeSerenity@123",
    "MidnightMingle.456",
    "HarmonicEcho#789",
    "TranquilBoulevard@234",
    "MetroMoonlight.567",
    "ConcreteJourney#890",
    "CeruleanHorizon@123",
    "WhisperingMeadow.456",
    "LuminousAvenue#789",
    "EpicUrbanity@234",
    "AuroraPulse.567",
    "HarmonyCrescent#890",
    "SapphireSkyline@123",
    "RadiantMetropolis.456",
    "VelvetReverie#789",
    "MajesticBoulevard@234",
    "EtherealDowntown.567",
    "GoldenVista#890",
    "MoonlitPulse@123",
    "CrimsonMingle.456",
    "UrbanSerenity#789",
    "CityscapeEcho@234",
    "HarborWhisper.567",
    "RadiantSerenade#890",
    "CeruleanMeadow@123",
    "MetroHorizon.456",
    "MoonlitMingle#789",
    "ConcreteBoulevard@234",
    "WhisperingMetropolis.567",
    "EpicSerenade#890",
    "CeruleanSkyline@123",
    "UrbanGlow.456",
    "MajesticReverie#789",
    "SapphirePulse@234",
    "TranquilMeadow.567",
    "LuminousHorizon#890",
    "EtherealSkyline@123",
    "RadiantGlow.456",
    "CrimsonPulse#789",
    "DowntownSerenity@234",
    "VelvetReverie.567",
    "SafariHorizon#890",
    "TranquilWhisper@123",
    "CeruleanAdventure.456",
    "UrbanHarmony#789",
    "SapphireJourney@234",
    "ConcreteReverie.567",
    "MetroBoulevard#890",
    "HarmonicSunset@123",
    "UrbanSunset@567",
    "CrimsonHarbor.890",
    "SafariAdventure#234",
    "CityscapeSerenity@123",
    "MidnightMingle.456",
    "EpicJubilation#567",
    "VerdantHarmony.890",
    "LagoonAdventure@234",
    "MysticSunrise.123",
    "CosmicVoyage#456",
    "InfiniteTranquility@789",
    "AstralSerenity.234",
    "CascadeTwilight#567",
    "EnchantedJourney@890",
    "SapphireVista.123",
    "WhimsicalHarbor#456",
    "CelestialMingle@789",
    "VelvetSerenade.234",
    "AuroraMeadow#567",
    "HarmonicBoulevard@890",
    "AzureHorizon.123",
    "EpicVoyage#456",
    "GlisteningReverie@789",
    "MajesticSunset.234",
    "LuminescentDowntown#567",
    "GoldenReverie@890",
    "MoonlitHarbor.123",
    "CrimsonEcho#456",
    "UrbanMingle@789",
    "RadiantMeadow.234",
    "TranquilHorizon#567",
    "EtherealSerenade@890",
    "MidnightAdventure.123",
    "CeruleanVoyage#456",
    "WhisperingReverie@789",
    "LuminousMingle.234",
    "SapphireUrbanity#567",
    "HarborGlow@890",
    "UrbanJubilation.123",
    "MoonlitHarmony#456",
    "CrimsonBoulevard@789",
    "VerdantSerenade.234",
    "EnchantingVoyage#567",
    "MysticSerenity@890",
    "CelestialAdventure.123",
    "EpicHarbor#456",
    "WhimsicalSunset@789",
    "VelvetJourney.234",
    "LagoonSerenade#567",
    "SapphireVoyage@890",
    "AstralHarmony.123",
    "CascadeSunset#456",
    "InfiniteReverie@789",
    "RadiantVoyage.234",
    "EtherealUrbanity#567",
    "LagoonTwilight@890",
    "CosmicHarmony.123",
    "MysticReverie#456",
    "AuroraHorizon@789",
    "EnchantedJourney.234",
];

const harryPotterPasswords = [
    "HarryPotter@2023",
    "HogwartsMagic.567",
    "GryffindorRules@19",
    "LunaLovegood.2023",
    "Expelliarmus789!",
    "DumbledoreWizard@23",
    "SlytherinHouse.456",
    "HedwigOwl@2023",
    "GoldenSnitch.1234",
    "WizardingWorld@19",
    "PatronusCharm.567",
    "HermioneGranger@23",
    "Platform9¾.456",
    "DobbyIsFree!789",
    "MaraudersMap@2023",
    "PolyjuicePotion.1234",
    "DiagonAlleyMagic@19",
    "VoldemortDefeated.567",
    "FireboltBroom@23",
    "QuidditchMatch.456",
    "ChocolateFrog.789!",
    "AlohomoraSpell@2023",
    "FawkesPhoenix.1234",
    "GinnyWeasley@19",
    "RoomOfRequirement.567",
    "HorcruxDestroyed!789",
    "NargleMischief@23",
    "PumpkinPasties.456",
    "LumosLight.789!",
    "SnapeAlways@2023",
    "ButterbeerCheers.1234",
    "FantasticBeasts@19",
    "ForbiddenForest.567",
    "LupinWerewolf!789",
    "MermaidSong@23",
    "FluffyCerberus.456",
    "OllivandersWand.789!",
    "PensieveMemories@2023",
    "PhoenixFeather.1234",
    "LovegoodLuna@19",
    "AccioEverything.567",
    "ThreeBroomsticks!789",
    "HogsmeadeVillage@23",
    "HippogriffFlight.456",
    "ChamberOfSecrets.789!",
    "ThestralWings@2023",
    "CauldronCake.1234",
    "WeasleyJokeShop@19",
    "NimbusTwoThousand.567",
    "HufflepuffPride!789",
    "HoneydukesSweets@23",
    "MagicalCreature.456"
];

const genzPasswords = [
    "YeetMe@123",
    "LOLZ.#456",
    "Savage#789",
    "LitAF@234",
    "FOMO@567",
    "CrayCray.#890",
    "BaeGoals@123",
    "FOMO.#456",
    "SquadGoals@789",
    "OnFleek.#234",
    "YOLO@567",
    "HundoP.#890",
    "GuacGoals@123",
    "FlexZone.#456",
    "SlayQueen@789",
    "GlowUp.#234",
    "TurntUp@567",
    "NoCap.#890",
    "Chillax@123",
    "Extra.#456",
    "FOMO@789",
    "Lituation.#234",
    "VibeCheck@567",
    "Zaddy.#890",
    "SpillTheTea@123",
    "FamBam.#456",
    "WokeAF@789",
    "Gucci.#234",
    "Flossy@567",
    "Litty.#890",
    "SavageMode@123",
    "Flexin.#456",
    "DankMemes@789",
    "LitEmoji.#234",
    "BlessUp@567",
    "SuhDude.#890",
    "SavageSzn@123",
    "ShipIt.#456",
    "Mood@789",
    "GlowUp.#234",
    "Thicc.#567",
    "EpicFail.#890",
    "SlayAllDay@123",
    "NoChill.#456",
    "ByeFelicia@789",
    "Extra.#234",
    "SavageMode@567",
    "ChillVibes.#890",
    "YassQueen@123",
    "OMG.#456",
    "FOMO@789",
    "DankMemes.#234",
];
const hollywoodSongPasswords = [
    "PurpleRain@1984",
    "BohemianRhapsody#1975",
    "SweetChildOMine.1987",
    "Imagine_1971",
    "LikeAVirgin@1984",
    "BillieJean#1982",
    "HotelCalifornia.1976",
    "StairwayToHeaven_1971",
    "Thriller@1982",
    "DancingQueen.1976",
    "EveryBreathYouTake_1983",
    "LivinOnAPrayer.1986",
    "IWillAlwaysLoveYou#1992",
    "Superstition@1972",
    "BornToRun.1975",
    "SweetHomeAlabama_1974",
    "LetItBe#1970",
    "HeyJude.1968",
    "PaintItBlack@1966",
    "RocketMan_1972",
    "PurpleHaze#1967",
    "BadRomance.2009",
    "Wonderwall@1995",
    "SweetCaroline.1969",
    "Imagine#1971",
    "WhatAWonderfulWorld@1967",
    "Respect.1967",
    "LetItGo#2013",
    "WithOrWithoutYou_1987",
    "AnotherOneBitesTheDust.1980",
    "SweetDreams@1983",
    "MyHeartWillGoOn_1997",
    "AllStar.1999",
    "DontStopBelievin_1981",
    "DancingInTheDark.1984",
    "StayinAlive@1977",
    "EverybodysTalkin.1969",
    "CaliforniaDreamin@1965",
    "UnchainedMelody.1965",
    "IWantToHoldYourHand@1963",
    "EyeOfTheTiger_1982",
    "HitTheRoadJack.1961",
    "CantHelpFallingInLove@1961",
    "LikeAPrayer_1989",
    "WonderfulTonight@1977",
    "IJustCalledToSayILoveYou.1984",
    "IWantToKnowWhatLoveIs#1984",
    "DontWorryBeHappy.1988",
    "Wannabe@1996",
    "Torn.1997",
    "Ironic@1995",
    "SmoothOperator.1984",
    "BlackHoleSun@1994",
    "IWillSurvive.1978",
    "LaBamba@1987",
    "JustLikeHeaven.1987",
    "GirlsJustWantToHaveFun@1983",
    "TakeOnMe.1985",
    "SweetChildOMine@1987",
    "DontStopBelievin.1981",
    "EveryBreathYouTake_1983",
    "PurpleHaze@1967",
    "BadRomance.2009",
    "SweetHomeAlabama.1974",
    "RocketMan_1972",
    "Imagine_1971",
    "BillieJean@1982",
    "LikeAVirgin.1984",
    "BohemianRhapsody_1975",
    "PurpleRain@1984",
    "Thriller.1982",
    "HotelCalifornia@1976",
    "LivinOnAPrayer_1986",
    "IWillAlwaysLoveYou#1992",
    "BornToRun.1975",
    "SweetChildOMine_1987",
    "Imagine@1971",
    "LikeAVirgin.1984",
    "BillieJean#1982",
    "HotelCalifornia@1976",
    "StairwayToHeaven_1971",
    "Thriller.1982",
    "DancingQueen.1976",
    "EveryBreathYouTake_1983",
    "LivinOnAPrayer@1986",
    "IWillAlwaysLoveYou#1992",
    "Superstition.1972",
    "BornToRun@1975",
    "SweetHomeAlabama_1974",
    "LetItBe.1970",
    "HeyJude@1968",
    "PaintItBlack.1966",
    "RocketMan@1972",
    "PurpleHaze_1967",
    "BadRomance#2009",
    "Wonderwall.1995",
    "SweetCaroline_1969",
    "Imagine.1971",
    "WhatAWonderfulWorld@1967",
    "Respect.1967",
    "LetItGo#2013",
    "WithOrWithoutYou_1987",
    "AnotherOneBitesTheDust.1980",
    "SweetDreams@1983",
    "MyHeartWillGoOn_1997",
    "AllStar.1999",
    "DontStopBelievin@1981",
    "DancingInTheDark#1984",
    "StayinAlive.1977",
    "EverybodysTalkin@1969",
    "CaliforniaDreamin.1965",
    "UnchainedMelody@1965",
    "IWantToHoldYourHand.1963",
    "EyeOfTheTiger@1982",
    "HitTheRoadJack.1961",
    "CantHelpFallingInLove_1961",
    "LikeAPrayer#1989",
    "WonderfulTonight.1977",
    "IJustCalledToSayILoveYou@1984",
    "IWantToKnowWhatLoveIs"
]


class password {
    constructor() {
        this.password = "";
    }

    getselected = () => {
        let select = document.getElementById('select');
        let selectedValue = select.value;  // Get the initial value

        select.addEventListener("change", function () {
            let selectedOption = select.options[select.selectedIndex];
            let newValue = selectedOption.value;

            // If the value has changed, update selectedValue
            if (newValue !== selectedValue) {
                selectedValue = newValue;
            }
        });

        return selectedValue;  // Return the initial value
    };


    Generatepassword = (selectedValue) => {
        if (selectedValue === 'strong') {
            let functions = [this.upper, this.lower, this.special, this.number];
            let limit = Math.floor(Math.random() * (12 - 8 + 1)) + 8;

            while (this.password.length < limit) {
                this.password += this.upper()
                this.password += this.lower()
                this.password += this.special()
                this.password += this.number()
                let randomfunction = functions[Math.floor(Math.random() * functions.length)]
                this.password += randomfunction()
            }
        }
        if (selectedValue === 'funny') {
            let randomIndex = Math.floor(Math.random() * funnyPasswords.length)
            this.password = funnyPasswords[randomIndex]
        }
        if (selectedValue === 'memorable') {
            let randomIndex = Math.floor(Math.random() * memorablePasswords.length)
            this.password = memorablePasswords[randomIndex]
        }
        if (selectedValue === 'hp') {
            let randomIndex = Math.floor(Math.random() * harryPotterPasswords.length)
            this.password = harryPotterPasswords[randomIndex]
        }
        if (selectedValue === 'genz') {
            let randomIndex = Math.floor(Math.random() * genzPasswords.length)
            this.password = genzPasswords[randomIndex]
        }
        if (selectedValue === 'songs') {
            let randomIndex = Math.floor(Math.random() * hollywoodSongPasswords.length)
            this.password = hollywoodSongPasswords[randomIndex]
        }
    }

    upper = () => {
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length))
    }

    lower = () => {
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        return lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length))
    }

    special = () => {
        const specialChars = "!@#$%^&*()_-+=";
        return specialChars.charAt(Math.floor(Math.random() * specialChars.length))
    }

    number = () => {
        const numberChars = "0123456789";
        return numberChars.charAt(Math.floor(Math.random() * numberChars.length))
    }
}

let regenerate = document.getElementById('regenerate');

const main = async () => {
    let p1 = new password();
    let selectedValue = await p1.getselected(); // Wait for user selection
    p1.Generatepassword(selectedValue); // Generate password based on the selection
    document.getElementById("passworddisplay").innerHTML = p1.password;
    document.getElementById('copybtn').addEventListener('click', () => {
        copyToClipboard(p1.password)
    })
};

regenerate.addEventListener('click', function () {
    main()
    let copybtn = document.getElementById('copybtn')
    copybtn.textContent = "Copy Password"
    copybtn.style.backgroundColor = '#172339'
});
window.onload = main;

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            let copybtn = document.getElementById('copybtn')
            copybtn.textContent = "Copied to Clipboard!"
            copybtn.style.backgroundColor = '#0d6efd'
        })
        .catch(err => {
            console.error('Unable to copy text to clipboard', err);
        });
}