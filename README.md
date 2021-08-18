![Diverge](https://raw.githubusercontent.com/curlygirltech/Discographi/main/Diverge.png)


## Motivation

As a behavior therapist for 4 years with a background in education, I researched and studied the behavior of individuals on the spectrum. Based on that data, I created tailored plans for them to display positive behaviors and live more fulfilling lives. One of the biggest challenges as a therapist was finding ways and for clients to express themselves and understand the root of a behavior. Diverge is a tool created for therapists to analyze data from their research and create a list of common emotions/moods. From this list, a playlist is created with suggested songs to aid in mood mangement as a form of Music Therapy.



![Process](https://raw.githubusercontent.com/curlygirltech/Diverge/main/diverge-process.png)

## API and Data Sample
```json
{
    "artists": [
        {
            "idArtist": "111239",
            "strArtist": "Coldplay",
            "strArtistStripped": null,
            "strArtistAlternate": "",
            "strLabel": "Parlophone",
            "idLabel": "45114",
            "intFormedYear": "1996",
            "intBornYear": "1996",
            "intDiedYear": null,
            "strDisbanded": null,
            "strStyle": "Rock/Pop",
            "strGenre": "Alternative Rock",
            "strMood": "Happy",
            "strWebsite": "www.coldplay.com",
            "strFacebook": "www.facebook.com/coldplay",
            "strTwitter": "www.twitter.com/coldplay",
            "strBiographyEN": "Coldplay are a British alternative rock band formed in 1996 by lead vocalist Chris Martin and lead guitarist Jonny Buckland at University College London. After they formed Pectoralz, Guy Berryman joined the group as a bassist and they changed their name to Starfish. Will Champion joined as a drummer, backing vocalist, and multi-instrumentalist, completing the line-up. Manager Phil Harvey is often considered an unofficial fifth member. The band renamed themselves \"Coldplay\" in 1998, before recording and releasing three EPs; Safety in 1998, Brothers & Sisters as a single in 1999 and The Blue Room in the same year. The latter was their first release on a major label, after signing to Parlophone.\n\nThey achieved worldwide fame with the release of the single \"Yellow\" in 2000, followed by their debut album released in the same year, Parachutes, which was nominated for the Mercury Prize. The band's second album, A Rush of Blood to the Head (2002), was released to critical acclaim and won multiple awards, including NME's Album of the Year, and has been widely considered the best of the Nelson-produced Coldplay albums. Their next release, X&Y, the best-selling album worldwide in 2005, was met with mostly positive reviews upon its release, though some critics felt that it was inferior to its predecessor. The band's fourth studio album, Viva la Vida or Death and All His Friends (2008), was produced by Brian Eno and released again to largely favourable reviews, earning several Grammy nominations and wins at the 51st Grammy Awards. On 24 October 2011, they released their fifth studio album, Mylo Xyloto, which was met with mixed to positive reviews, and was the UK's best-selling rock album of 2011.\n\nThe band has won a number of music awards throughout their career, including seven Brit Awards winning Best British Group three times, four MTV Video Music Awards, and seven Grammy Awards from twenty nominations. As one of the world's best-selling music artists, Coldplay have sold over 55 million records worldwide. In December 2009, Rolling Stone readers voted the group the fourth best artist of the 2000s.\n\nColdplay have been an active supporter of various social and political causes, such as Oxfam's Make Trade Fair campaign and Amnesty International. The group have also performed at various charity projects such as Band Aid 20, Live 8, Sound Relief, Hope for Haiti Now: A Global Benefit for Earthquake Relief, The Secret Policeman's Ball, and the Teenage Cancer Trust.
```

![Process](https://raw.githubusercontent.com/curlygirltech/Diverge/main/diverge-process.png)

Engineering Milestones



Research Progress - 

Done: est and find the most appropriate playlist generation API: Top Choice - Spotify

Done:Behavioral Music Therapy research on equating moods with sounds

In Progress: Use Behavioral Therapy research to create thorough Moods API

In Progress: Test and find the most appropriate sentiment analysis API



MVP Development Progress -

Done: Basic web app layout with React components

Done: Basic service layer GET functionality to populate JSON data

Done: Elementary version of the Internal Moods API to generate song genres based on mood

In Progress: Integrate Internal Moods API to convert moods and emotions to song genres

In Progress: Integrate Spotify API for playlist generation based on genres

Not Started: Integrate Sentiment Analysis API to generate moods and emotions


